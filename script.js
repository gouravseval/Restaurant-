const line1 = ["For the Love of", "Flavor Inspired by", "Where every Flavor"];
const line2 = ["Delicious food", "the Seasons", "Tells a Story"];
const line3 = ["Come with family & feel the joy of mouthwatering food", "Come with family & feel the joy of mouthwatering food", "Come with family & feel the joy of mouthwatering food"];
const slider = ["hero-slider-1.jpg","hero-slider-2.jpg","shahipanner.jpg"]
let timing;
let loopNo = 0;


if(loopNo <= 2){
    timing = setInterval(() => {
        document.querySelector(".page1-line1 h1").textContent = `${line1[loopNo]}`;
        document.querySelector(".page1-line2 h1").textContent = `${line2[loopNo]}`;
        document.querySelector(".page1-line3 h3").textContent = `${line3[loopNo]}`;
        document.querySelector(".page1").style.backgroundImage = `url(assests/${slider[loopNo]})`;
        loopNo ++;
        if(loopNo >= 3){
            loopNo = 0;
        }
    }, 4000);
}


// mobile menu funtion 

document.querySelector(".menubar").addEventListener("click" , ()=>{
    document.querySelector(".mobilemenu").style.left = "0%";
})


document.querySelector(".menuclose").addEventListener("click" , ()=>{
    document.querySelector(".mobilemenu").style.left = "-100%";
})