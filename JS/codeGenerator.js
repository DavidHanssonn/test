function check() { 
    let code = document.getElementById('codeInput').value;
  /*function to check userid & password
                the following code checkes whether the entered userid and password are matching*/
      if (code == "123"){
         window.open("joinplayer.html", "_self");
      } else {
        console.log("false");
        alert("false");
      }
    }
    document.getElementById("codeGenerator").addEventListener("click", check);