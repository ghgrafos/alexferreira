/* certificado foto */
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

/* idioma inglês*/

function clickingles() {
      var descricaoingles = window.innerWidth;
  if (descricaoingles == 320) {
  document.getElementById("txtingles").innerHTML = "&#9679; &nbsp;Inglês técnico TI.<br>  &#9679; &nbsp; Ler e entender textos simples.<br> &#9679; &nbsp;pedir ou dá informações.<br>&#9679; &nbsp; linda com situações rotineira. ";
   document.getElementById('txtingles').style.display='';
   document.getElementById('txtingles').style.height='140px';
   document.getElementById('txtingles').style.margin='2px';
   document.getElementById('txtingles').style.border='2px solid black';
	 }else{
  document.getElementById("txtingles").innerHTML = "&#9679; &nbsp;Inglês técnico TI.<br>  &#9679; &nbsp; Ler e entender textos simples.<br> &#9679; &nbsp;pedir ou dá informações.<br>&#9679; &nbsp; linda com situações rotineira. ";
   document.getElementById('txtingles').style.display='';
   document.getElementById('txtingles').style.height='100px';
   document.getElementById('txtingles').style.margin='2px';
   document.getElementById('txtingles').style.border='2px solid black';
  }
}

/* idioma espanol*/

function clickespanol() {
  document.getElementById("txtespanol").innerHTML = " &#9679; &nbsp;Conversação compreensivél.<br> &#9679; &nbsp;Ler e entender texto de diversos assuntos.<br>&#9679; &nbsp;Pedi ou dá informações.";
   document.getElementById('txtespanol').style.display='';
   document.getElementById('txtespanol').style.height='100px';
   document.getElementById('txtespanol').style.margin='2px';
   document.getElementById('txtespanol').style.border='2px solid black';
	}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
  
  

    



