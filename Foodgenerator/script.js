/////////////Magnus Foodgenerator////////////////////////

///////////////////////Creates array of objects/////////////////////////
var arrCourses = [];

//Course constructor.
function Course(str, isVeggie, url) {
    this.str = str;
    this.isVeggie = isVeggie;
    this.url = url;
}
//Adds objectet Course to courseArr.
function addCourse(course) {
    arrCourses.push(course);
}
//Courses objects are pushed to courseArr.
addCourse(kottbullar=new Course("Köttbullar med potatismos, gräddsås, lingon och stektlök.", false,"https://www.landleyskok.se/recept/hemlagade-kottbullar.html/"));
addCourse(kolbulle = new Course("Grillad kolbulle med lingonsylt.", false, "http://www.koket.se/sommar-med-ernst/ernst-kirchsteiger/kolbulle-pa-ernsts-vis/"));
addCourse(springroll= new Course("Vårrulle med sötsursås.", true, "http://www.ica.se/recept/farska-varrullar-med-grillad-tofu-och-ingefarsdipp-720099/"));
addCourse(haloumi= new Course("Haloumisallad", true, "http://mittkok.expressen.se/recept/halloumisallad/"));
addCourse(Baconinlindad=new Course("Baconinlindad kycklingfile.",false,"https://www.kokaihop.se/recept/baconinlindad-kycklingfile-2"));
addCourse(lasagne=new Course("Lasagne med köttfärssås.",false,"http://www.koket.se/lasagne-med-kottfarssas"));
addCourse(majs=new Course("Majsplättar med avokadoröra.",true,"https://www.mathem.se/recept/mattias-majsplattar-med-avokado-chimichurri"));
addCourse(soppachori=new Course("Grönkålssoppa med chorizo.",false,"http://www.matklubben.nu/recept/gr%F6nk%E5lssoppa_med_chorizo_122704.html#.WCxTNcn3b9I"));
addCourse(pasta=new Course("Pastagratäng med rökt lax och spenat.",false,"www.ica.se/recept/pastagratang-med-rokt-lax-och-spenat-719271/"));
addCourse(thaigryta=new Course("Thaigryta med kyckling.",false,"http://www.koket.se/mitt-kok/donal-skehan/thaigryta-med-kyckling/"));
addCourse(lax=new Course("Lax med nudelsallad.",false,"https://www.mathem.se/recept/gustavs-sesamstekta-lax-med-varm-nudelsallad--lime-och-koriander"));
addCourse(lasagnehall=new Course("Lasagne med halloumi, spenat och pumpakärnor.",true,"www.ica.se/recept/lasagne-med-halloumi-spenat-och-pumpakarnor-718382/"));
addCourse(risotto=new Course("Rödbetsrisotto med hyvlad halloumi och valnötter.",true,"www.ica.se/recept/rodbetsrisotto-med-hyvlad-halloumi-och-valnotter-720045/"));
addCourse(tonfisk=new Course("Halstrad tonfisk med avokadohummus.",false,"www.ica.se/recept/halstrad-tonfisk-med-avokadohummus-719975/"));
addCourse(skav=new Course("Viltskavsgryta med mandelpotatispuré & rårörda lingon.",false,"https://www.mathem.se/recept/viltskavsgryta-med-mandelpotatispure-o-rarorda-lingon"));
addCourse(coq=new Course("Coq Au Vin.",false,"http://www.foodnetwork.com/recipes/ina-garten/coq-au-vin-recipe4.html"));
addCourse(dahl=new Course("Indisk linssoppa ”Mulligatawny”.",true,"http://www.ica.se/recept/indisk-linssoppa-mulligatawny-718554/"));
addCourse(Falafel=new Course("Falafel med hummus, yoghurtdressing och picklad rödlök.",true,"http://www.ica.se/recept/falafel-med-hummus-yoghurtdressing-och-picklad-rodlok-717166/"));
addCourse(pastag=new Course("Vegetarisk pastagratäng.",true,"https://www.landleyskok.se/recept/vegetarisk-pastagratang.html/"));
/*
addCourse(=new Course("",,""));
addCourse(=new Course("",,""));
addCourse(=new Course("",,""));
addCourse(=new Course("",,""));
addCourse(=new Course("",,""));
*/
//////////////////////////Functionality//////////////////////////////////
//Button to generate.
var button = document.getElementById('button');

button.addEventListener("click", generateRandomCourse);

var styleButton1 = document.getElementById('style1');
styleButton1.addEventListener('click', setStyle1);
var styleButton2 = document.getElementById('style2');
styleButton2.addEventListener('click', setStyle2);
var styleButton3 = document.getElementById('style3');
styleButton3.addEventListener('click', setStyle3);

//Function for button to gererate a course-log.
function generateRandomCourse() {
  var checkBoxValue = document.getElementById('checkbox').checked;
  var a = document.getElementById('courseP');
//If user is not veggie. Gets random object from arrCourses.
  if(checkBoxValue === false) {
    var i = randomIndex();
    a.innerHTML = arrCourses[i].str;
    a.href = arrCourses[i].url;;
  }
  //If user checks
  else if(checkBoxValue === true){
      var loop = true;
      while(loop){
      var i = randomIndex();
      if(arrCourses[i].isVeggie){
        a.innerHTML = arrCourses[i].str;
        a.href = arrCourses[i].url;
        loop=false;
      }
    }
  }
}

//Function that creates random Index number.
function randomIndex(){
  var randomIndex = Math.floor(Math.random() * arrCourses.length);
  return randomIndex;
}
//Function that sets the random course to the html-element.
function setCourse(ind){
  a.innerHTML = arrCourses[ind].str;
  a.href = arrCourses[ind].url;
}
//Function that sets style.
function setStyle1(){
  document.getElementById('header').style.backgroundColor="";
  document.getElementById('button').style.background="";
  document.getElementById('header').style.color="";
  document.getElementById('mainDiv').style.backgroundColor="";
  document.getElementById('mainDiv').style.color="";
  document.getElementById('courseP').style.color="";

}
function setStyle2(){
  document.getElementById('header').style.backgroundColor="#ecf0f1";
  document.getElementById('button').style.background="linear-gradient(#5989A8,#2c3e50)";
  document.getElementById('header').style.color="#2c3e50";
  document.getElementById('mainDiv').style.backgroundColor="#e74c3c";
  document.getElementById('mainDiv').style.color="white";
  document.getElementById('courseP').style.color="white";

}
function setStyle3(){
  document.getElementById('header').style.backgroundColor="#FBD38D";
  document.getElementById('button').style.background="linear-gradient(#FF6363,#c0392b)";
  document.getElementById('header').style.color="#2c3e50";
  document.getElementById('mainDiv').style.backgroundColor="#2c3e50";
  document.getElementById('mainDiv').style.color="#FBD38D";
  document.getElementById('courseP').style.color="#FBD38D";
}
