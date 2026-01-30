// Vigenère Cipher Encryption and Decryption
function vigenereEncrypt(text, key) {
  text = text.toUpperCase().replace(/[\s.,]/g, "");
  key = key.toUpperCase();
  let result = "";
  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text[i];
    if (c >= 'A' && c <= 'Z') {
      const shift = key[j % key.length].charCodeAt(0) - 65;
      result += String.fromCharCode(((c.charCodeAt(0) - 65 + shift) % 26) + 65);
      j++;
    } else {
      result += c;
    }
  }
  return result;
}

function vigenereDecrypt(text, key) {
  text = text.toUpperCase().replace(/[\s.,]/g, "");
  key = key.toUpperCase();
  let result = "";
  for (let i = 0, j = 0; i < text.length; i++) {
    const c = text[i];
    if (c >= 'A' && c <= 'Z') {
      const shift = key[j % key.length].charCodeAt(0) - 65;
      result += String.fromCharCode(((c.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
      j++;
    } else {
      result += c;
    }
  }
  return result;
}

export { vigenereEncrypt, vigenereDecrypt };