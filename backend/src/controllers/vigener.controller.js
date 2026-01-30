import * as vigner from "../services/vigener.cipher.js"

function encode(req, res){
    try{
        const {text, key} = req.body;
        if(!/^[A-Z]+$/i.test(key)){
            return res.status(400).json({error: "Key must contain only alphabetic characters"});
        }
        if(typeof text !=="string" || typeof key !=="string"){
            return res.status(400).json({error: "Invalid Inputs"});
        }
        const encoded = vigner.vigenereEncrypt(text, key);
        res.status(200).json({encoded});
    }
    catch(error){
        res.status(400).json({error: "Something went wrong"});
    }
}

function decode(req, res){
    try{
        const {text, key} = req.body;
        if(typeof text !=="string" || typeof key !=="string"){
            return res.status(400).json({error: "Invalid Inputs"});
        }
        const decoded = vigner.vigenereDecrypt(text, key);
        res.status(200).json({decoded});
    }catch(error){
        res.status(400).json({error: "Something went wrong"});
    }
}

export {encode, decode};