import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url);
                if(!res.ok){
                    const error = {
                        err: true,
                        status: res.status,
                        statusText: res.statusText,
                    }
                    throw error;
                }
                let data = await res.json();
                setInfo(data);
            } catch (err) {
                setError(err);
            }     
        }
        getData(url);
    },[url]);

    return {info, error};
}