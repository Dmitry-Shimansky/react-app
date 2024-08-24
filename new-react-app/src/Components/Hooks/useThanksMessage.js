import {useState} from "react";

export const useThanksMessage = () => {
    const [thanksMessage, setThanksMessage] = useState(false);

    const thanksMessageDelay = (value) => {
        if (value) {
            setThanksMessage(value);
            setTimeout(()=>{
                setThanksMessage(false);
            }, 2000);
        } else {
            setThanksMessage(value);
        }
    };
    return {thanksMessage, setThanksMessage, thanksMessageDelay};
}