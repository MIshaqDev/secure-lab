import * as mono from "../services/monoalpha.cipher.js"

function monoEncryption(req, res){
    try{
        const {text, key} = req.body;
        const letters = new Set(key.split(''))
        if(letters.size < 26){
            return res.status(400).json({error: 'Key must contain 26 unique letters'});
        }
        if(typeof text !== 'string' || typeof key !== 'string'){
            return res.status(400).json({error: 'Invalid input'});
        }
        if(key.includes(1,2,3,4,5,6,7,8,9,0)){
            return res.status(400).json({error: 'Key must not contain numbers'});
        }
        const encoded = mono.monoEncrypt(text, key);
        res.status(200).json({encoded});
    }catch(error){
        res.status(500).json({ error: 'Something went wrong' });
    }
}

function monoDecryption(req, res){
    try{
        const {text, key} = req.body;
        const letters = new Set(key.split(''))
        if(letters.size < 26){
            return res.status(400).json({error: 'Key must contain 26 unique letters'});
        }
        if(typeof text !== 'string' || typeof key !== 'string'){
            return res.status(400).json({error: 'Invalid input'});
        }
        if(key.includes(1,2,3,4,5,6,7,8,9,0)){
            return res.status(400).json({error: 'Key must not contain numbers'});
        }
        const decoded = mono.monoDecrypt(text, key);
    
        res.status(200).json({decoded});
    }catch(error){
        console.error("Decryption Error: ", error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}

export {monoEncryption, monoDecryption};