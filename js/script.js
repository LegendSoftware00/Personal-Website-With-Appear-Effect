    var info = document.querySelectorAll(".container section .content .info");
    var textInfo = document.querySelector(".container section .content .text-info");

function appearEffect(){
    var infoLocaiton = info[0].getBoundingClientRect().top;
    var textInfoLocaiton = textInfo.getBoundingClientRect().top;
    var screenSize = window.innerHeight;
    
    if(infoLocaiton < screenSize / 2){
        info[0].classList.add("appearEffectInfo");
        info[1].classList.add("appearEffectInfo");
    }
    else {
        info[0].classList.remove("appearEffectInfo");
        info[1].classList.remove("appearEffectInfo");
    }

    if(textInfoLocaiton < screenSize){
        textInfo.classList.add("appearEffectTextInfo");
    }
    else {
        textInfo.classList.remove("appearEffectTextInfo");
    }
    console.log(textInfoLocaiton + " text");
    console.log(screenSize + " screen");
}

window.addEventListener("scroll", function(){
    appearEffect();
})