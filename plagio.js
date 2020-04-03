function generaTesto() {
  testo="Titolo del libro "+document.getElementById("titolo").value+"...\n";
  testo=testo+" Autore "+document.getElementById("autore").value+"...\n";
  testo=testo+"Ecco le proposte...\n";
  testo=testo+"Uno: "+document.getElementById("incipit").value+" "+document.getElementById("risp1").value+"...\n";
  testo=testo+"Due: "+document.getElementById("incipit").value+" "+document.getElementById("risp2").value+"...\n";
  testo=testo+"Tre: "+document.getElementById("incipit").value+" "+document.getElementById("risp3").value+"...\n";
  testo=testo+"Quattro: "+document.getElementById("incipit").value+" "+document.getElementById("risp4").value+"...\n";
  if (document.getElementById("risp5").value != "") {
    testo=testo+"Cinque: "+document.getElementById("incipit").value+" "+document.getElementById("risp5").value+"...\n";
  }
  if (document.getElementById("risp6").value != "") {
    testo=testo+"Sei: "+document.getElementById("incipit").value+" "+document.getElementById("risp6").value+"...\n";
  }
  testo=testo+"Ripetiamo per i meno attenti...\n";
  testo=testo+"Titolo del libro "+document.getElementById("titolo").value+"...\n";
  testo=testo+" Autore "+document.getElementById("autore").value+"...\n";
  testo=testo+document.getElementById("incipit").value+"...\n";
  testo=testo+"Uno: "+document.getElementById("risp1").value+"...\n";
  testo=testo+"Due: "+document.getElementById("risp2").value+"...\n";
  testo=testo+"Tre: "+document.getElementById("risp3").value+"...\n";
  testo=testo+"Quattro: "+document.getElementById("risp4").value+"...\n";
  if (document.getElementById("risp5").value != "") {
    testo=testo+"Cinque: "+document.getElementById("risp5").value+"...\n";
  }
  if (document.getElementById("risp6").value != "") {
    testo=testo+"Sei: "+document.getElementById("risp6").value+"...\n";
  }
  testo=testo+"Ora tocca a voi dare la risposta corretta!";
  alert(testo);
}
