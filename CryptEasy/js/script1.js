function onSubmitAES() {
    var plaintext = document.getElementById("plaintext").value;
    var key = document.getElementById("key").value;
  
    if (plaintext.trim() === "" || key.trim() === "") {
        alert("Please fill both the Plain Text and Key fields.");
    } else {
        AESencrypt(plaintext, key);
    }
  }
  
  function AESencrypt(plaintext, key) {
    var encryptedText = CryptoJS.AES.encrypt(plaintext, key).toString();
    document.getElementById("ciphertext").value = encryptedText;
  }
  
  function AESdecrypt() {
    var ciphertext = document.getElementById("ciphertext").value;
    var key = document.getElementById("key").value;
    
    var decryptedText = CryptoJS.AES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
    
    document.getElementById("decryptedtext").value = decryptedText;
  }
    
    function onSubmitDES() {
      var plaintext = document.getElementById("plaintext").value;
      var key = document.getElementById("key").value;
  
      if (plaintext.trim() === "" || key.trim() === "") {
          alert("Please fill both the Plain Text and Key fields.");
      } else {
          DESencrypt(plaintext, key);
      }
  }
  
    function DESencrypt(plaintext, key) {
      var encryptedText = CryptoJS.DES.encrypt(plaintext, key).toString();
      document.getElementById("ciphertext").value = encryptedText;
    }
    
    function DESdecrypt() {
      var ciphertext = document.getElementById("ciphertext").value;
      var key = document.getElementById("key").value;
      
      var decryptedText = CryptoJS.DES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
      
      document.getElementById("decryptedtext").value = decryptedText;
    }
  
    function onSubmitTDES() {
        var plaintext = document.getElementById("plaintext").value;
        var key = document.getElementById("key").value;
    
        if (plaintext.trim() === "" || key.trim() === "") {
            alert("Please fill both the Plain Text and Key fields.");
        } else {
            TDESencrypt(plaintext, key);
        }
    }
    
      function TDESencrypt(plaintext, key) {
        var encryptedText = CryptoJS.TripleDES.encrypt(plaintext, key).toString();
        document.getElementById("ciphertext").value = encryptedText;
      }
      
      function TDESdecrypt() {
        var ciphertext = document.getElementById("ciphertext").value;
        var key = document.getElementById("key").value;
        
        var decryptedText = CryptoJS.TripleDES.decrypt(ciphertext, key).toString(CryptoJS.enc.Utf8);
        
        document.getElementById("decryptedtext").value = decryptedText;
      }

    function goBack() {
        window.history.back();
      }
    