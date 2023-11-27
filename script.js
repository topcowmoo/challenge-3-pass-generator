document.addEventListener("DOMContentLoaded", function () {
  var generateBtn = document.querySelector("#generate");

  function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
  }

  function generatePassword() {
      var length = document.getElementById("length").value;
      var includeLowercase = document.getElementById("lowercase").checked;
      var includeUppercase = document.getElementById("uppercase").checked;
      var includeNumbers = document.getElementById("numbers").checked;
      var includeSpecial = document.getElementById("special").checked;

      if (length < 8 || length > 128) {
          alert("Invalid password length. Please enter a length between 8 and 128 characters.");
          return "";
      }

      const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numberChars = "0123456789";
      const specialChars = "!@#$%^&*()_+-={}[]:";

      let allChars = "";
      if (includeLowercase) {
          allChars += lowercaseChars;
      }
      if (includeUppercase) {
          allChars += uppercaseChars;
      }
      if (includeNumbers) {
          allChars += numberChars;
      }
      if (includeSpecial) {
          allChars += specialChars;
      }

      if (allChars === "") {
          alert("Please select at least one character type.");
          return "";
      }

      let password = "";
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * allChars.length);
          password += allChars.charAt(randomIndex);
      }

      return "Generated Password: " + password;
  }

  generateBtn.addEventListener("click", writePassword);
});

generateBtn.addEventListener("click"), (writePassword);
