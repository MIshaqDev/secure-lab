import * as mono from '../services/mono.Services';

const encodeController = async (data: {text:string, key: string}) => {
    const result = await mono.encoded(data);
    return result;
}

const decodeController = async (data: {text:string, key: string}) => {
    const result = await mono.decoded(data);
    return result;
}
export { encodeController, decodeController }