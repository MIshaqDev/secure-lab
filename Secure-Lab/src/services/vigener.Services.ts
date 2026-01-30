const url = import.meta.env.VITE_BACKEND_URL;

const encodeVigener = async (data: {text: string; key: string}) => {
    const res = await fetch(`${url}/vigener/encode`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

const decodeVigener = async (data: {text: string; key: string}) => {
    const res = await fetch(`${url}/vigener/decode`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

export {encodeVigener, decodeVigener};