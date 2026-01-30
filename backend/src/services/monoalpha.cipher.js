function monoEncrypt(text, key){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    key = key.toUpperCase();
    text = text.toUpperCase().replace(/[\s.,]/g, "");
    let result = '';
    
    for(let char of text){
        if(alphabet.includes(char)){
            result +=key[alphabet.indexOf(char)];
        }else{
            result += char;
        }
    }
    return result;
}

function monoDecrypt(text, key){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    key = key.toUpperCase();
    text = text.toUpperCase().replace(/[\s.,]/g, "");
    let result = '';

    for (let char of text){
        if(alphabet.includes(char)){
            result += alphabet[key.indexOf(char)];
        }else{
            result += char;
        }
    }
    return result;
}

export { monoEncrypt, monoDecrypt };