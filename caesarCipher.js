function encrypt(text, s)
{
    let result=""
    for (let i = 0; i < text.length; i++)
    {
        // let char = text[i];
        if (text[i] ==text[i].toUpperCase())
        {
            let ch =  String.fromCharCode((text[i].charCodeAt(0) + s-65) % 26 + 65);
            result += ch;
        }
        else
        {
            let ch = String.fromCharCode((text[i].charCodeAt(0) + s-97) % 26 + 97);
            result += ch;
        }
    }
    return result;
}


module.exports = encrypt;

 