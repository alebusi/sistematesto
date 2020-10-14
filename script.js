function generaTesto() {
  testo=document.getElementById("testoIn").value;
  testo=sistemaTesto(testo);
  document.getElementById("testoOut").value = testo;
}

function sistemaTesto(testo) {
  testo = testo.replace(/à/ig,"ah");
  testo = testo.replace(/ì/ig,"ih");
  testo = testo.replace(/ù/ig,"uh");
  testo = testo.replace(/ò/ig,"oh");
  testo = testo.replace(/è/ig,"eh");
  testo = testo.replace(/é/ig,"eh");
  return testo;
}
