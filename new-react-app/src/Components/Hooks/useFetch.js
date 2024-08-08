import { useState, useEffect } from "react";

export const useFetch = () => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const json = await fetch('db.json');
                const res = await json.json();
                setResponse(res);
            } catch (err) {
                setError(err);
            }
        })();
    }, []);
    return {response, error};
}