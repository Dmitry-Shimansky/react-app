import { useState, useEffect } from "react";

export const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                setTimeout(async () => {
                    const json = await fetch('DB.json');
                    const res = await json.json();
                    setResponse(res);
                }, 5000);

            } catch (err) {
                setError(err);
            }
        })();
    }, []);
    return {response, error};
}