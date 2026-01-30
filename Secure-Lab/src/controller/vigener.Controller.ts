import * as vigener from "../services/vigener.Services";

const encodedVigener = async (data: {text: string; key: string}) => {
    const res = await vigener.encodeVigener(data);
    return res;
}

const decodedVigener = async (data: {text: string; key: string}) => {
    const res = await vigener.decodeVigener(data);
    return res;
}

export {encodedVigener, decodedVigener};