/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  _codeA = 65;
  _codeZ = 90;
  _errorMessage = "Incorrect arguments!";
  constructor(directMachine = true) {
    this.directMachine = directMachine;
  }
  reverseCipher(cipher) {
    let reverseMachine = "";
    for (let i = cipher.length - 1; i >= 0; i--) {
      reverseMachine += cipher[i];
    }
    return reverseMachine;
  }
  encrypt(message, key) {
    let encryptString = this.encryptAndDecrypt(message, key);
    return this.directMachine
      ? encryptString
      : this.reverseCipher(encryptString);
  }
  decrypt(encryptedMessage, key) {
    let decryptString = this.encryptAndDecrypt(encryptedMessage, key, false);
    return this.directMachine
      ? decryptString
      : this.reverseCipher(decryptString);
  }
  encryptAndDecrypt(text, key, cipher = true) {
    if (!text || !key) {
      throw new Error(this._errorMessage);
    }
    text = text.toUpperCase();
    key = key.padEnd(text.length, key).toUpperCase();
    let encryptCipher = "";
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      let charCode = letter.charCodeAt();
      if (
        charCode < this._codeA ||
        charCode > this._codeZ
      ) {
        encryptCipher += letter;
        key = key.substring(0, i) + letter + key.substring(i);
        continue;
      }
      const a = key[i].charCodeAt() - this._codeA;
      if (cipher) {
        const b = charCode - this._codeA;
        const c = (b + a) % 26;
        encryptCipher += String.fromCharCode(this._codeA + c);
      }
      if (!cipher) {
        const c = charCode - this._codeA;
        const b = (c - a + 26) % 26;
        encryptCipher += String.fromCharCode(this._codeA + b);
      }
    }
    return encryptCipher;
  }
}

module.exports = {
  VigenereCipheringMachine
};