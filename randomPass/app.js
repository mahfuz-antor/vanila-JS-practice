const showPassword = document.getElementById("showPassword");
const generateBtn = document.getElementById("generateBtn");

const displayPass = (result) => {
  console.log(result);
  showPassword.innerHTML = result;
};

const generatePassBtn = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[]{}?/=+-_()*&^%$#@!";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  displayPass(result);
};

// console.log(generatePassBtn(19));
