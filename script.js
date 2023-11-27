// Event listner set up
document.addEventListener("DOMContentLoaded", function () {
  var generateBtn = document.querySelector("#generate");

//   Password generator function
  function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
  }

//   Password generator function to get length and special characters of password
  function generatePassword() {
      var length = document.getElementById("length").value;
      var includeLowercase = document.getElementById("lowercase").checked;
      var includeUppercase = document.getElementById("uppercase").checked;
      var includeNumbers = document.getElementById("numbers").checked;
      var includeSpecial = document.getElementById("special").checked;

    //   Validate password length 8-128 characters
      if (length < 8 || length > 128) {
          alert("Invalid password length. Please enter a length between 8 and 128 characters.");
          return "";
      }

    //   Character definitions
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

    //   To check that at least one character type has been selected
      if (allChars === "") {
          alert("Please select at least one character type.");
          return "";
      }

    //   Generate password
      let password = "";
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * allChars.length);
          password += allChars.charAt(randomIndex);
      }

    //   Return generated password
      return "Generated Password: " + password;
  }

  generateBtn.addEventListener("click", writePassword);
});
