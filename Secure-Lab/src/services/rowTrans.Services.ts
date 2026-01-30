const url = import.meta.env.VITE_BACKEND_URL;

const encodeRowTrans = async (data: {text: string; key: string}) => {
    const res = await fetch(`${url}/rowtrans/encode`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

const decodeRowTrans = async (data: {text: string; key: string}) => {
    const res = await fetch(`${url}/rowtrans/decode`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

export {encodeRowTrans, decodeRowTrans};