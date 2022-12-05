
function generatePassword() {
    var getLength = document.querySelector("#passwordLength").value;
    var password = "";
    var passwordLength = getLength;
    var text = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
    Number(getLength);
    if (getLength == "") {
        alert("Please enter a Number");
    }else if (isNaN(getLength)) {
        alert("This is not a Number");
    }
    for (var i = 0; i < passwordLength; i++) {
        password += text.charAt(Math.floor(Math.random() * text.length));
    }
    document.querySelector("#password").value += password;
}
function clearPassword(){
    document.querySelector("#password").value= "";
}
function copy() {
    var copyText =  document.querySelector("#password");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    /* Alert the copied text */
    alert("Copied to Clipboard");
  }




