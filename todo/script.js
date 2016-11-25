//Magnus Todo-List! I wanted to make create the entire app just using JS. Dont ask why...

///////////Struktur html och css.//////////////////////////////////////
var center = document.createElement('center');
document.body.appendChild(center);
center.style.fontFamily="Futura";

document.body.style.backgroundColor = "#9A9AA8";
document.body.style.width="100%";
document.body.style.height="100%";

//Div for title.
var divH1 = document.createElement('header');
divH1.setAttribute('id', "divH1");
divH1.style.backgroundColor = "#52E88C";
divH1.style.display = "flex";
divH1.style.alignItems="center";
divH1.style.justifyContent="center";
divH1.style.height = "150px";
divH1.style.width = "70%";
divH1.style.padding= "10px";
divH1.style.paddingTop="4px";
divH1.style.margin = "10px";
divH1.style.boxShadow="2px 4px 10px 5px #484E5A";
center.appendChild(divH1);


//Div for input/button.
var divInput = document.createElement('div');
divInput.style.display="flex";
divInput.style.justifyContent="center";
divInput.style.alignItems="center";

divInput.style.height = "150px";
divInput.style.width = "70%";
divInput.style.margin = "20px";
divInput.style.border = "0";
divInput.style.padding = "10px";
divInput.style.backgroundColor= "#000080";
divInput.style.boxShadow="2px 4px 10px 5px #484E5A";
center.appendChild(divInput);

//textsquare.
var form = document.createElement('form');
form.setAttribute('id','form');


divInput.appendChild(form);


//Button that adds task to Todo-list.
var buttonAdd = document.createElement('button');
buttonAdd.setAttribute("type","submit");
buttonAdd.setAttribute('id','addbutton');
buttonAdd.style.background="linear-gradient(#E6BED9,#63465A)";
buttonAdd.style.fontFamily= "Futura";
buttonAdd.style.color="white";
buttonAdd.style.border= "0";
buttonAdd.style.marginTop="8px";
buttonAdd.style.borderRadius="30px";
buttonAdd.style.width="70px";
buttonAdd.style.height="35px";
buttonAdd.style.fontSize="14px";
var textButtonAdd = document.createTextNode('Add');
divInput.appendChild(buttonAdd);
buttonAdd.appendChild(textButtonAdd);
buttonAdd.addEventListener("click", addTodo);


//Title
var h1 = document.createElement('p');
var textH1 = document.createTextNode('your Todo-list.');
h1.style.fontSize="24px";
divH1.style.color = "#000080";
divH1.style.fontFamily = "Inherit";


h1.appendChild(textH1);
divH1.appendChild(h1);

//Div that collects lists.
var divMain = document.createElement('div');
divMain.style.height = "100%";
divMain.style.width = "80%";
divMain.style.margin = "10px";
divMain.style.display="flex";
divMain.style.alignItems="flex-start";
divMain.style.justifyContent="space-between";


center.appendChild(divMain);


//Ruta att skriva in task i.
var input = document.createElement('input');
input.setAttribute('id', 'inputId');
input.setAttribute('type','text');
input.setAttribute('placeholder', 'Enter task here.');
input.style.borderRadius="30px";
input.style.border="0";
input.style.fontSize="18px";
input.style.paddingLeft="5px";
input.style.height="30px";
input.style.marginTop="7px";
input.style.clear= "both";
input.style.textAlign = "center";
input.type = "text";
input.size = "20";
input.style.outline="none";
input.setAttribute('onkeypress','return enterKey(event);');
form.appendChild(input);


//Låda för Todolist vänster.
var divTodo = document.createElement('div');
divTodo.setAttribute('id', 'divTodo');
divTodo.style.backgroundColor = "#F2F2F7";
divTodo.style.height = "100%";
divTodo.style.width = "48%";

//divTodo.style.marginLeft="10px";
//divTodo.style.padding = "10px";
divTodo.style.fontFamily = "Futura";
divTodo.style.color = "#000080";
divTodo.style.textAlign = "center";
divTodo.style.fontSize="22px";
divTodo.style.boxShadow="2px 4px 10px 5px #484E5A";
divMain.appendChild(divTodo);
var h3divTodo = document.createElement('p');
var textdivTodo = document.createTextNode('Things to do:');
h3divTodo.appendChild(textdivTodo);
divTodo.appendChild(h3divTodo);



//Låda för färdiga events.
var divDone = document.createElement('div');
divDone.setAttribute('id', 'divDone');
divDone.style.backgroundColor = "#52E88C";
divDone.style.height = "100%";
divDone.style.width = "48%";
divDone.style.boxShadow="2px 4px 10px 5px #484E5A";
//divDone.style.padding = "10px";
// divDone.style.marginRight = "10px";
divDone.style.fontFamily = "Futura";
divDone.style.color = "#000080";
divDone.style.fontSize="22px";
divMain.appendChild(divDone);
var h3divDone = document.createElement('p');
var textdivDone = document.createTextNode('Done:');
h3divDone.appendChild(textdivDone);
divDone.appendChild(h3divDone);

//Lista där att göra skrivs.
var list = document.createElement('ul');
list.style.textAlign="left";
list.style.fontSize="18px";
list.style.liststyle="none";
divTodo.appendChild(list);
//Lista där färiga tasks skrivs.
var listDone = document.createElement('ul');
listDone.style.textAlign="left";
listDone.style.fontSize="18px";
divDone.appendChild(listDone);




//FUNKTIONALITET//////////////////////////////////////////////////////////////////


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
        document.getElementById("inputId").value='';

    }
}

//Funktion för submit på Enter-key.
function enterKey(key){
  key=window.event;
  if(window.event.keyCode == 13){
    document.getElementById('addbutton').click();
    return false;
  }

}

//Funktion som lägger till closeknapp.
function addCloseButton(x){
    var closeButton = document.createElement("button");
    closeButton.setAttribute('class', 'closeButton');
    var closeButtonText = document.createTextNode('Remove');
    closeButton.style.color="white";
    closeButton.style.height="30px";
    closeButton.style.width="70px";
    closeButton.style.border = "0";
    closeButton.style.fontSize="14px";
    closeButton.style.borderRadius="30px";
    closeButton.style.marginRight = "14px";
    closeButton.style.marginLeft="4px";
    closeButton.style.background="linear-gradient(#F8858E,#e74c3c)";
    closeButton.style.fontFamily="Futura";
    closeButton.style.float="right";
    closeButton.style.outline="none";
    closeButton.appendChild(closeButtonText);
    x.appendChild(closeButton);
    closeButton.addEventListener('click', close);


}

//Skapa Done-knapp.
function addDoneButton(x){
    var buttonDone = document.createElement('button');
    buttonDone.setAttribute('class', 'buttonDone');
    var buttonDoneText = document.createTextNode('Done');
    buttonDone.style.background="linear-gradient(#A7EFA1,#27ae60)";
    buttonDone.style.width = "70px";
    buttonDone.style.height= "30px";
    buttonDone.style.color="white";
    buttonDone.style.alignSelf="center";
    buttonDone.style.fontSize="14px";
    buttonDone.style.marginRight="2px";
    buttonDone.style.border="0";
    buttonDone.style.borderRadius="30px";
    buttonDone.style.fontFamily="Futura";
    buttonDone.style.float="right";
    buttonDone.style.outline="none";
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

function buttonActiveEffect(buttonClass){
document.styleSheets[0].addRule('.'+buttonClass+':active','color: green');
document.styleSheets[0].insertRule('.'+buttonClass+":active { color: green }", 0);
}
