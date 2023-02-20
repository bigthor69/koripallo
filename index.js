let kotiTulosEl = document.getElementById("koti-tulos")
let vierasTulosEl = document.getElementById("vieras-tulos")

let kotiTulosbtnYks = document.getElementById("kotiplusyks")
let kotiTulosbtnKaks = document.getElementById("kotipluskaks")
let kotiTulosbtnKolme = document.getElementById("kotipluskolme")

let vierasTulosbtnYks = document.getElementById("vierasplusyks")
let vierasTulosbtnKaks = document.getElementById("vieraspluskaks")
let vierasTulosbtnKolme = document.getElementById("vieraspluskolme")

kotiTulosbtnYks.addEventListener("click", function () {
    kotiTulosEl.textContent++;
  });

  kotiTulosbtnKaks.addEventListener("click", function () {
    kotiTulosEl.textContent = Number(kotiTulosEl.textContent) + 2;
  });

kotiTulosbtnKolme.addEventListener("click", function () {
    kotiTulosEl.textContent = Number(kotiTulosEl.textContent) + 3;
  });

vierasTulosbtnYks.addEventListener("click", function () {
    vierasTulosEl.textContent++;
  });

vierasTulosbtnKaks.addEventListener("click", function () {
    vierasTulosEl.textContent = Number(vierasTulosEl.textContent) + 2;
  });

vierasTulosbtnKolme.addEventListener("click", function () {
    vierasTulosEl.textContent = Number(vierasTulosEl.textContent) + 3;
  });