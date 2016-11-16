//Magnus Todo-List!

///////////Struktur html och css.//////////////////////////////////////
var center = document.createElement('center');
document.body.appendChild(center);


document.body.style.backgroundColor = "#f2f2f2";

//Låda för rubrik.
var divH1 = document.createElement('header');
divH1.setAttribute('id', "divH1");
divH1.style.backgroundColor = "#003366";
divH1.style.display = "block";
divH1.style.height = "70px";
divH1.style.width = "660px";
divH1.style.padding= "10px";
divH1.style.margin = "10px";
center.appendChild(divH1);


//Div för inputruta och knapp.
var divInput = document.createElement('div');
divInput.style.display="block";
divInput.style.height = "70px";
divInput.style.width = "660px";
divInput.style.margin = "10px";
divInput.style.border = "0";
divInput.style.padding = "10px";
divInput.style.backgroundColor= "salmon";
center.appendChild(divInput);

//textruta
var form = document.createElement('form');
form.setAttribute('id','form');
divInput.appendChild(form);

//Knapp som lägger till texten i Todolistan.
var buttonAdd = document.createElement('button');
buttonAdd.type = "submit";
buttonAdd.style.backgroundColor="white";
buttonAdd.style.fontFamily= "Courier New, monospace";
buttonAdd.style.border= "0";
buttonAdd.style.margin="0";
buttonAdd.style.width="120px";
var textButtonAdd = document.createTextNode('Add to list');
divInput.appendChild(buttonAdd);
buttonAdd.appendChild(textButtonAdd);
buttonAdd.addEventListener("click", addTodo);


//Rubrik.
var h1 = document.createElement('h2');
var textH1 = document.createTextNode('My Todo-List');
divH1.style.color = "white";
divH1.style.fontFamily = "Courier New, monospace";
h1.appendChild(textH1);
divH1.appendChild(h1);

//Div som samlar de båda listDivsen.
var divMain = document.createElement('div');
divMain.style.height = "100%";
divMain.style.width = "700px";
divMain.style.margin = "30px";


center.appendChild(divMain);

//Låda för Todolist vänster.
var divTodo = document.createElement('div');
divTodo.setAttribute('id', 'divTodo');
divTodo.style.backgroundColor = "#5c85d6";
divTodo.style.height = "100%";
divTodo.style.width = "300px";
divTodo.style.float = "left";
divTodo.style.margin="10px";
divTodo.style.padding = "10px";
divTodo.style.fontFamily = "Courier New, monospace";
divTodo.style.color = "white";
divTodo.style.textAlign = "center";
divMain.appendChild(divTodo);
var h3divTodo = document.createElement('h3');
var textdivTodo = document.createTextNode('Things to do:');
h3divTodo.appendChild(textdivTodo);
divTodo.appendChild(h3divTodo);


//Låda för färdiga events.
var divDone = document.createElement('div');
divDone.setAttribute('id', 'divDone');
divDone.style.backgroundColor = "grey";
divDone.style.height = "100%";
divDone.style.width = "300px";
divDone.style.float = "right";
divDone.style.padding = "10px";
divDone.style.margin = "10px";
divDone.style.fontFamily = "Courier New, monospace";
divDone.style.color = "white";
divMain.appendChild(divDone);
var h3divDone = document.createElement('h3');
var textdivDone = document.createTextNode('Done:');
h3divDone.appendChild(textdivDone);
divDone.appendChild(h3divDone);

//Lista där att göra skrivs.
var list = document.createElement('ul');
list.style.textAlign="left";
list.style.fontSize="14px";
divTodo.appendChild(list);
//Lista där färiga tasks skrivs.
var listDone = document.createElement('ul');
listDone.style.textAlign="left";
listDone.style.fontSize="14px";
divDone.appendChild(listDone);




//FUNKTIONALITET//////////////////////////////////////////////////////////////////
//Ruta att skriva in task i.
var input = document.createElement('input');
input.setAttribute('id', 'inputId');
input.setAttribute('placeholder', 'Enter task here.');
input.style.clear= "both";
input.style.textAlign = "center";
input.type = "text";
input.size = "20";
//input.addEventListener("keypress",enterKey);
form.appendChild(input);

////////FUNCTIONER//////////

//Adderar li element med knappar till Todo-List.
function addTodo() {

    var userInput = document.getElementById("inputId").value;
    if(userInput.trim()===""){
      alert("You didn't add anything.");
    }
    else{
        var li = document.createElement("li");
        li.setAttribute('class', 'li');

        var chore = document.createTextNode(userInput);
        var p = document.createElement('p');
        p.style.wordWrap = "break-word";
        p.appendChild(chore);
        li.appendChild(p);
        list.appendChild(li);

        addCloseButton(p);
        addDoneButton(p);

    }
}

//Funktion för submit på Enter-key.
function enterKey(event){
  if(window.event.keyCode == '13'){
    addTodo();
  }
}

//Funktion som lägger till closeknapp.
function addCloseButton(x){
  var closeButton = document.createElement("button");
  closeButton.setAttribute('class', 'closeButton');
  var closeButtonText = document.createTextNode('Remove');
  closeButton.style.border = "0";
  closeButton.style.margin = "2px";
  closeButton.style.backgroundColor="white";
  closeButton.style.fontFamily="Courier New, monospace";
  closeButton.style.float="right";
  closeButton.appendChild(closeButtonText);
  x.appendChild(closeButton);
  closeButton.addEventListener('click', close);
}

//Skapa Done-knapp.
function addDoneButton(x){
  var buttonDone = document.createElement('button');
  buttonDone.setAttribute('class', 'buttonDone');
  var buttonDoneText = document.createTextNode('Done');
  buttonDone.style.backgroundColor="white";
  buttonDone.style.margin="2px";
  buttonDone.style.border="0";
  buttonDone.style.fontFamily="Courier New, monospace";
  buttonDone.style.float="right";
  buttonDone.appendChild(buttonDoneText);
  x.appendChild(buttonDone);
  buttonDone.addEventListener('click', doneMove);
}

//Tar bort li från Todo och lägger till det i Done-listan.
function doneMove() {
    listDone.appendChild(this.parentNode.parentNode);
    this.parentNode.style.textDecoration="line-through";
    this.parentNode.removeChild(this);
}
//funktion som tar bort li elementet från todo.
function close(){
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}
