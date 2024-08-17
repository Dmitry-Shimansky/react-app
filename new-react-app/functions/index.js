/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const htmlToText = require("nodemailer-html-to-text").htmlToText;
const {email, password} = require("./config");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

transporter.use("compile", htmlToText());

const sendOrderEmail = (data) => {
  const options = {
    from: `MrDonald's <${email}>`,
    to: data.email,
    subject: "Ваш заказ из MrDonald's",
    html: `
        <div>
            <h2>Добрый день ${data.nameClient}</h2>
            <h3>Ваш заказ:</h3>
            <ul>
                ${data.order.map(({itemName, count, price}) => (
                  `<li>${itemName} - ${count}шт., цена ${price * count} руб.</li>`
                ))}
            </ul>
            <p>Итого: ${data.order.reduce((sum, item) => 
              sum + (item.price + item.count), 0)} руб.</p>
            <small>Ожидайте курьера.</small>
        </div>
    `,
  };
  transporter.sendMail(options).catch(console.error);
};

transporter.sendUserEmail = functions.database.ref("orders/{pushID}")
    .onCreate((order) => sendOrderEmail(order.val()));

exports.sendUserEmail = functions.database.ref("orders/{pushID}")
    .onCreate((order) => console.log(order));

