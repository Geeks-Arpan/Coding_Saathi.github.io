let celciusMeter = document.querySelector('.celcius > input')
let fahrenhiteMeter = document.querySelector('.farenhite > input')
let kelvinMeter = document.querySelector('.kelvin > input')

let btn = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(100*number)/100;
}

celciusMeter.addEventListener('input',function(){
    let cTemp=parseFloat((celciusMeter.value));
    let fTemp = (cTemp*(9/5) + 32);
    let KTemp = cTemp + 273.15;

    fahrenhiteMeter.value = roundNumber(fTemp);
    kelvinMeter.value = roundNumber(KTemp);
})
fahrenhiteMeter.addEventListener('input',function(){
    let fTemp=parseFloat((fahrenhiteMeter.value));
    let cTemp = (fTemp-32)*(5/9);
    let KTemp = cTemp + 273.15;

    celciusMeter.value = roundNumber(cTemp);
    kelvinMeter.value = roundNumber(KTemp);
})
kelvinMeter.addEventListener('input',function(){
    let kTemp=parseFloat((kelvinMeter.value));
    let cTemp = kTemp - 273.15;
    let fTemp = cTemp *(9/5)+32;

    celciusMeter.value = roundNumber(cTemp);
    fahrenhiteMeter.value = roundNumber(fTemp);
})

btn.addEventListener('click',() =>{
    celciusMeter.value = " "
    fahrenhiteMeter.value = " "
    kelvinMeter.value = " "
})