// create drop down menu
var projects= document.getElementById("projects");
projects.addEventListener("click",showProjects);

function showProjects(){
  var divProjects = document.createElement('div');
  divProjects.setAttribute('id','divProjects');

  var mainDiv = document.getElementById("mainDiv");
  mainDiv.appendChild(divProjects);

  var a1 = document.createElement('a');
  a1.setAttribute('href','Foodgenerator/index.html');
  a1.innerHTML = "Receptgenerator";
  a1.setAttribute('class','dropdownA');
  divProjects.appendChild(a1);

  var a2 = document.createElement('a');
  a2.setAttribute('href','todo/index.html');

  a2.innerHTML = "your Todo-list";
  a2.setAttribute('class','dropdownA');
  divProjects.appendChild(a2);

  var a3 = document.createElement('a');
  a3.innerHTML = "In progress..";
  a3.setAttribute('class','dropdownA');
  divProjects.appendChild(a3);



}
