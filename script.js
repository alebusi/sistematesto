pos=7100;

function generaTesto() {
  //testo="<html><head><title>Altavoce</title></head><body><div>";
  testo=document.getElementById("testoIn").value;
  testo=sistemaTesto(testo);
  //
  if (document.getElementById("dividi").checked == false) {
    document.getElementById("testoOut").value = testo;
    document.getElementById("testoOut2").value = "";
    document.getElementById("testoOut3").value = "";
    document.getElementById("testoOut4").value = "";
  }
  else {
    posFinale=estraiPos(testo,pos);
    testoCut=testo.substr(0,posFinale+1);  
    document.getElementById("testoOut").value = testoCut;
    testo=testo.substr(posFinale+1);
    // due
    posFinale=estraiPos(testo,pos);
    testoCut=testo.substr(0,posFinale+1);  
    document.getElementById("testoOut2").value = testoCut;
    testo=testo.substr(posFinale+1);
    // tre
    posFinale=estraiPos(testo,pos);
    testoCut=testo.substr(0,posFinale+1);  
    document.getElementById("testoOut3").value = testoCut;
    testo=testo.substr(posFinale+1);
    // quattro
    posFinale=estraiPos(testo,pos);
    testoCut=testo.substr(0,posFinale+1);  
    document.getElementById("testoOut4").value = testoCut;
    testo=testo.substr(posFinale+1);
  }  
  //testo=testo+"</div></body></html>";
}

function sistemaTesto(testo) {
  testo = testo.replace(/à/ig,"ah");
  testo = testo.replace(/ì/ig,"ii");
  testo = testo.replace(/ù/ig,"uu");
  testo = testo.replace(/ò/ig,"oh");
  testo = testo.replace(/è/ig,"eh");
  testo = testo.replace(/é/ig,"eh");
  return testo;
}

function estraiPos(testo, pos) {
  posFinale=testo.indexOf(".",pos);
  if (posFinale == -1) {
    posFinale=pos;
  }
  return posFinale;
}
