const url = import.meta.env.VITE_BACKEND_URL;

const encoded= async (data: {text:string, key: string})=> {
    const response = await fetch(`${url}/mono/encode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

const decoded= async (data: {text:string, key: string})=> {
    const response = await fetch(`${url}/mono/decode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;  
}

export { encoded, decoded }