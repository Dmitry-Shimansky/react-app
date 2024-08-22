import {useState} from "react";

export const useThanksMessage = () => {
    const [thanksMessage, setThanksMessage] = useState(false);
    return {thanksMessage, setThanksMessage};
}