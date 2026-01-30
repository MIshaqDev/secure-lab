import * as RowTran from '../services/rowTrans.Services';

const encodeRowTrans = async (data: {text: string; key: string}) => {
    const res = await RowTran.encodeRowTrans(data);
    return res;
}

const decodeRowTrans = async (data: {text: string; key: string}) => {
    const res = await RowTran.decodeRowTrans(data);
    return res;
}

export {encodeRowTrans, decodeRowTrans};