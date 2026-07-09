let klowSlide = 1;
const klowTotal = 14;

function openKlowGallery(){
  document.getElementById("klowModal").style.display = "block";
  showKlowSlide();
}

function closeKlowGallery(){
  document.getElementById("klowModal").style.display = "none";
}

function changeKlowSlide(direction){
  klowSlide += direction;

  if(klowSlide < 1){
    klowSlide = klowTotal;
  }

  if(klowSlide > klowTotal){
    klowSlide = 1;
  }

  showKlowSlide();
}

function showKlowSlide(){
  document.getElementById("klowImage").src = "images/klow-guide-" + klowSlide + ".jpg";
  document.getElementById("klowCounter").textContent = klowSlide + " / " + klowTotal;
}
