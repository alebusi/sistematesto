function generaTesto() {
  testo="Titolo del libro "+document.getElementById("titolo").value+"...<br>";
  testo=testo+"Autore "+document.getElementById("autore").value+"...<br>";
  testo=testo+"Ecco le proposte...<br>";
  testo=testo+"Uno: "+document.getElementById("incipit").value+" "+document.getElementById("risp1").value+"...<br>";
  testo=testo+"Due: "+document.getElementById("incipit").value+" "+document.getElementById("risp2").value+"...<br>";
  testo=testo+"Tre: "+document.getElementById("incipit").value+" "+document.getElementById("risp3").value+"...<br>";
  testo=testo+"Quattro: "+document.getElementById("incipit").value+" "+document.getElementById("risp4").value+"...<br>";
  if (document.getElementById("risp5").value != "") {
    testo=testo+"Cinque: "+document.getElementById("incipit").value+" "+document.getElementById("risp5").value+"...<br>";
  }
  if (document.getElementById("risp6").value != "") {
    testo=testo+"Sei: "+document.getElementById("incipit").value+" "+document.getElementById("risp6").value+"...<br>";
  }
  testo=testo+"Ripetiamo per i meno attenti...<br>";
  testo=testo+"Titolo del libro "+document.getElementById("titolo").value+"...<br>";
  testo=testo+"Autore "+document.getElementById("autore").value+"...<br>";
  testo=testo+document.getElementById("incipit").value+"...<br>";
  testo=testo+"Uno: "+document.getElementById("risp1").value+"...<br>";
  testo=testo+"Due: "+document.getElementById("risp2").value+"...<br>";
  testo=testo+"Tre: "+document.getElementById("risp3").value+"...<br>";
  testo=testo+"Quattro: "+document.getElementById("risp4").value+"...<br>";
  if (document.getElementById("risp5").value != "") {
    testo=testo+"Cinque: "+document.getElementById("risp5").value+"...<br>";
  }
  if (document.getElementById("risp6").value != "") {
    testo=testo+"Sei: "+document.getElementById("risp6").value+"...<br>";
  }
  testo=testo+"Ora tocca a voi dare la risposta corretta!";
  document.getElementById("testo").innerHTML = testo;
}
