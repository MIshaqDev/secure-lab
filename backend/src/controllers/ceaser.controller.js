import * as ceaser from "../services/ceacer.cipher.js";

function ceaserEncryption(req, res) {
    const { text, key } = req.body;
    if (typeof text !== 'string' || typeof key !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const encoded = ceaser.ceaserEncrypt(text, key);
    res.status(200).json({ encoded });
}

function ceaserDecryption(req, res) {
    const { text, key } = req.body;
    if (typeof text !== 'string' || typeof key !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const decoded = ceaser.ceaserDecrypt(text, key);
    res.status(200).json({ decoded });
}

export { ceaserEncryption, ceaserDecryption };