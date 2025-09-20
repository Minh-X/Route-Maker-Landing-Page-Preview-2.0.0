const useCount = document.querySelector("#userCount");
const downCount = document.querySelector("#downloadCount");
document.addEventListener("DOMContentLoaded", function (e) {
  userCount();
  downloadCount();
  imageLoadingSystem()
});
function userCount() {
  let i = 4000;
  let count = setInterval(function () {
    i++;
    useCount.textContent = `${i}`;
    if (i > 10000) {
      clearInterval(count);
      useCount.textContent = "10,000+"
    }
  }, 50);
}
function downloadCount() {
let i = 950000;
  let count = setInterval(function () {
    i++;
    downCount.textContent = `${i}`;
    if (i > 1000000) {
      clearInterval(count);
      downCount.textContent = "1M+"
    }
  }, 10);
}
const imageColor = document.querySelectorAll(".image")
for (let  i = 0; i < imageColor.length ; i++){
    imageColor[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`
}
let cT = 0;
const createEleBtn = document.querySelector(".image__plus")
const imageEleParent = document.querySelector(".image__container")
createEleBtn.addEventListener("click", function(e){
  const imageEle = document.createElement("div")
  imageEleParent.appendChild(imageEle)
  imageEle.classList.add("image")
  imageEle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`
  cT = Number(localStorage.getItem("IMAGE__NUMBER")) + 1
  localStorage.setItem("IMAGE__NUMBER", cT)
  console.log(cT)
})
imageEleParent.addEventListener("click", function(e){
  const imageTargetToRemove = e.target
  imageTargetToRemove.remove()
  cT = Number(localStorage.getItem("IMAGE__NUMBER")) - 1
  localStorage.setItem("IMAGE__NUMBER", cT)
})
function imageLoadingSystem(){
  const imageEleParent = document.querySelector(".image__container")
  for(let i = 0; i < localStorage.getItem("IMAGE__NUMBER"); i++){
  const imageEle = document.createElement("div")
  imageEleParent.appendChild(imageEle)
  imageEle.classList.add("image")
  imageEle.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`
  }
}