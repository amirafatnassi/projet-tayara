var b2=document.getElementById('log');
b2.addEventListener('click',login);
function login(){
  var email = document.getElementById('email').value;
  var pwd = document.getElementById('pwd').value;
  let allUsers = JSON.parse(localStorage.getItem("users")) || [];
  const loggedUser = allUsers.find(user=> user.email === email && user.mpasse === pwd);

  if (loggedUser !== undefined){
    localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
    window.location.replace('../html/welcome.html');}
  else{
    alert('veuillez vérifier votre email et votre mot de passe !');}
}

function test(){
  var loggedUser=JSON.parse(localStorage.getItem("loggedUser"));
  if (loggedUser==null){
    window.location.replace('../html/logTayra.html');
  }
  else {
    window.location.replace('../html/annonces.html');
  }
}
