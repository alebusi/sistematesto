function generaTesto() {
  testo="Titolo del libro "+document.getElementById("titolo").value+"...";
  testo=testo+" Autore "+document.getElementById("autore").value+"...";
  testo=testo+"Ecco le proposte...";
  testo=testo+"Uno: "+document.getElementById("incipit").value+" "+document.getElementById("risp1").value+"...";
  testo=testo+"Due: "+document.getElementById("incipit").value+" "+document.getElementById("risp2").value+"...";
  testo=testo+"Tre: "+document.getElementById("incipit").value+" "+document.getElementById("risp3").value+"...";
  testo=testo+"Quattro: "+document.getElementById("incipit").value+" "+document.getElementById("risp4").value+"...";
  if (document.getElementById("risp5").value != "") {
    testo=testo+"Cinque: "+document.getElementById("incipit").value+" "+document.getElementById("risp5").value+"...";
  }
  if (document.getElementById("risp6").value != "") {
    testo=testo+"Sei: "+document.getElementById("incipit").value+" "+document.getElementById("risp6").value+"...";
  }
  testo=testo+"Ora tocca a voi dare la risposta corretta!";
  alert(testo);
}
