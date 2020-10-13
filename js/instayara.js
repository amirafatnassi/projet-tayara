var b1=document.getElementById('ins');
b1.addEventListener('click',inscription);

function inscription(){
    var tabe=JSON.parse( localStorage.getItem('users')) || [];
    var nomm=document.getElementById('nom').value;
    var pre=document.getElementById('prenom').value;
    var tel=document.getElementById('tel').value;
    var em=document.getElementById('email').value;
    var mp=document.getElementById('password').value;
    var mp1=document.getElementById('cpassword').value;
    var etudiant={
        nom:nomm,
        prenom:pre,
        tele:tel,
        email:em,
        mpasse:mp }
    var expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
    if(expressionReguliere.test(document.getElementById('email').value)==false)
          {   alert('veuillez re-saisir votre email');}
    else if(document.getElementById('password').value!=document.getElementById('cpassword').value)
          { alert('vérifier votre mot de passe');}
    else {  tabe.push(etudiant);
            localStorage.setItem('users',JSON.stringify(tabe));
            window.location.replace('../html/logTayra.html');
          }
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
