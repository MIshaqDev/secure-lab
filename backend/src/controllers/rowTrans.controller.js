import * as rT from "../services/rowTrans.cipher.js";

function encode(req, res) {
    try {
        const { text, key } = req.body;
        const stringKey = String(key);
        const numbers = stringKey.trim().split("").map(Number);
        if (numbers.some(isNaN)) return res.status(400).json({ error: "Key must contain numbers only" });
        const uniqueNumbers = new Set(numbers);
        if (uniqueNumbers.size !== numbers.length) return res.status(400).json({ error: "Numbers must be unique" });
        if (Math.max(...numbers) > numbers.length || Math.min(...numbers) < 1)
            return res.status(400).json({ error: `Numbers must be from 1 to ${numbers.length}` });
        if (typeof text !== 'string') {
            return res.status(400).json({ error: 'Invalid input' });
        }
        const encoded = rT.rowTransEncrypt(text, stringKey);
        res.json({ encoded });
    } catch (error) {
        res.status(400).json({ error: "Something went wrong" });
    }

}

function decode(req, res) {
    const { text, key } = req.body;
    const stringKey = String(key);
    const numbers = stringKey.trim().split("").map(Number);
    if (numbers.some(isNaN)) return res.status(400).json({ error: "Key must contain numbers only" });
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) return res.status(400).json({ error: "Numbers must be unique" });
    if (Math.max(...numbers) > numbers.length || Math.min(...numbers) < 1)
        return res.status(400).json({ error: `Numbers must be from 1 to ${numbers.length}` });
    if (typeof text !== 'string') {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const decoded = rT.rowTransDecrypt(text, stringKey);
    res.json({ decoded });
}

export { encode, decode };