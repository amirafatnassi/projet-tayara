var annonces=JSON.parse(localStorage.getItem("annonces")) || [];

function save_annonce(){
  var titre = document.getElementById('titre');
  var cat = document.getElementById('cat');
  var description = document.getElementById('description');
  var prix = document.getElementById('prix');
  var filename=document.getElementById('myFile');
  var loggedUser=JSON.parse(localStorage.getItem("loggedUser"));
  var annonce={
    titre:titre.value,
    cat:cat.value,
    description:description.value,
    prix:prix.value,
    filename:filename.value,
    created_by:loggedUser.prenom+' '+loggedUser.nom};
    if(titre == ''){
        alert('veuillez renseigner un titre à votre annonce');
    }else if (cat == ''){
      alert('veuillez séléctionner une catégorie à votre annonce');
    }else if (description ==''){
          alert('veuillez insérer une description');
    }else if(prix == ''){
        alert('veuillez renseigner le prix');
    }else{
      annonces.push(annonce);
      localStorage.setItem('annonces',JSON.stringify(annonces));
      window.location.replace('../html/welcome.html');
    }
}

function affichage(){
  var ii=document.getElementById('tab_ii');
  var t1=document.getElementById('t1');
  let allAnnonces=JSON.parse(localStorage.getItem("annonces")) || [];
  for (var i=0; i<allAnnonces.length;i++){
      var r=document.createElement('tr');
      t1.appendChild(r);
      var td1=document.createElement('td');
      var td2=document.createElement('td');
      var td3=document.createElement('td');
      var td4=document.createElement('td');
      var td5=document.createElement('td');
      r.appendChild(td1);
      td1.innerHTML=i;
      r.appendChild(td2);
      td2.innerHTML=allAnnonces[i].cat;
      r.appendChild(td3);
      td3.innerHTML='<a href="#" onclick="localStorage.setItem(\'index\',\''+allAnnonces[i].titre+'\');getAnnonce()">'+allAnnonces[i].titre+'</a>';
      r.appendChild(td4);
      td4.innerHTML=allAnnonces[i].description;
      r.appendChild(td5);
      td5.innerHTML=allAnnonces[i].prix;
      var loggedUser=JSON.parse(localStorage.getItem("loggedUser"));
      if(allAnnonces[i].created_by==loggedUser.prenom+' '+loggedUser.nom){
            var td6=document.createElement('td');
            r.appendChild(td6);
            td6.class="btn btn-primary";
            td6.innerHTML='<a href="../html/edit_annonce.html" onclick="localStorage.setItem(\'index\',\''+allAnnonces[i].titre+'\');">Modifier</a>';
            var td7=document.createElement('td');
            r.appendChild(td7);
            td7.class="btn btn-primary";
            td7.innerHTML='<a href="#" onclick="localStorage.setItem(\'index\',\''+allAnnonces[i].titre+'\');delete1();">Supprimer</a>';
          }
  }
  }

function getAnnonce(){
  window.location.replace('../html/view_annonce.html');}

function view_annonce(){
  let allAnnonces=JSON.parse(localStorage.getItem("annonces")) || [];
  let i=localStorage.getItem('index'); console.log(allAnnonces.find(annonce=> annonce.titre === i));
  const currentAnnonce = allAnnonces.find(annonce=> annonce.titre === i);
  localStorage.setItem('currentAnnonce',JSON.stringify(currentAnnonce));
  var p_titre=document.getElementById('p_titre');
  p_titre.innerHTML=currentAnnonce.titre;
  var p_desc=document.getElementById('p_desc');
  p_desc.innerHTML=currentAnnonce.description;
  var p_prix=document.getElementById('p_prix');
  p_prix.innerHTML=currentAnnonce.prix;
  var p_cat=document.getElementById('p_cat');
  p_cat.innerHTML=currentAnnonce.cat;
  if(currentAnnonce.filename!=undefined && currentAnnonce.filename!=null){
      var p_filename=document.getElementById('p_filename');
      p_filename.innerHTML=currentAnnonce.filename;}

  var p_username=document.getElementById('p_username');
  p_username.innerHTML=currentAnnonce.created_by;
}

function connected(){
  var loggedUser=JSON.parse(localStorage.getItem("loggedUser"));
  if (loggedUser!=null){
  w=document.getElementById('welcome');
  w.innerHTML+=' '+loggedUser.nom+' '+loggedUser.prenom;}
}

function logout(){
  localStorage.removeItem('loggedUser');
  window.location.replace('../html/welcome.html');
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

function onload_edit(){
  var titre = document.getElementById('titre');
  var cat = document.getElementById('cat');
  var description = document.getElementById('description');
  var prix = document.getElementById('prix');
  let allAnnonces=JSON.parse(localStorage.getItem("annonces")) || [];
  let i=localStorage.getItem('index');
  const currentAnnonce = allAnnonces.find(annonce=> annonce.titre === i);
  localStorage.setItem('currentAnnonce',JSON.stringify(currentAnnonce));
  titre.value=currentAnnonce.titre;
  cat.value=currentAnnonce.cat;
  description.value=currentAnnonce.description;
  prix.value=currentAnnonce.prix;
}

function edit_annonce(){
  var titre = document.getElementById('titre').value;
  var cat = document.getElementById('cat').value;
  var description = document.getElementById('description').value;
  var prix = document.getElementById('prix').value;
  var filename=document.getElementById('myFile').value;
  var currentAnnonce=JSON.parse(localStorage.getItem("currentAnnonce"));
  let allAnnonces = JSON.parse(localStorage.getItem("annonces"));
  const x = allAnnonces.findIndex(annonce=> annonce.titre === currentAnnonce.titre &&  annonce.description === currentAnnonce.description);
  annonces[x].titre= titre;
  annonces[x].cat= cat;
  annonces[x].description=description;
  annonces[x].prix=prix;
  localStorage.setItem('annonces',JSON.stringify(annonces));
  localStorage.setItem('currentAnnonce',JSON.stringify(annonces[x]));
  window.location.replace('../html/welcome.html');

}

function delete1(){
  let allAnnonces=JSON.parse(localStorage.getItem("annonces")) || [];
  let i=localStorage.getItem('index');
  const currentAnnonce = allAnnonces.find(annonce=> annonce.titre === i);
  const x = allAnnonces.findIndex(annonce=> annonce.titre === i);
  if (x > -1) {  annonces.splice(x, 1); }
  localStorage.removeItem('currentAnnonce');
  localStorage.removeItem('index');
  localStorage.setItem('annonces',JSON.stringify(annonces));
  window.location.reload();

}
