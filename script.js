function generaTesto() {
  //testo="<html><head><title>Altavoce</title></head><body><div>";
  testo=testo+document.getElementById("testoIn").value;
  testo=sistemaTesto(testo);
  //testo=testo+"</div></body></html>";
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
