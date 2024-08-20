import { useState, useEffect } from "react";

export const useDB = (dataBase) => {
    const [db, setDb] = useState(null);

    useEffect(() => {
        const dbRef = dataBase.ref('goods');
        dbRef.on('value', (snapshot) => {
            setDb(snapshot.val());
        })
    }, [dataBase]);

    return db;
}