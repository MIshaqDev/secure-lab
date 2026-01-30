function ceaserEncrypt(text, shift){
    text = text.toUpperCase().replace(/[\s.,]/g, "");
    return text.replace(/[a-z]/gi, function(char){
        const base = char <= 'Z' ? 65 : 97;
        return String.fromCharCode((char.charCodeAt(0) - base + shift) % 26 + base).toUpperCase();
    });
}

function ceaserDecrypt(text, shift){
    return ceaserEncrypt(text, 26 - (shift % 26));
}

export { ceaserEncrypt, ceaserDecrypt };