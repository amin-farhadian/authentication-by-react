// everything related to encrypt and decrypt
export default class Encryption {
  constructor(key) {
    this._salt = key;
  }

  // create an string encryptor function and return it
  encryptor() {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));

    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);

    const applySaltToChar = (code) =>
      textToChars(this._salt).reduce((a, b) => a ^ b, code);

    return (text) =>
      text
        .split("")
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join("");
  }

  // create an code decryptor function and return it
  decryptor() {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    
    const applySaltToChar = (code) =>
      textToChars(this._salt).reduce((a, b) => a ^ b, code);

    return (encoded) =>
      encoded
        .match(/.{1,2}/g)
        .map((hex) => parseInt(hex, 16))
        .map(applySaltToChar)
        .map((charCode) => String.fromCharCode(charCode))
        .join("");
  }
}
