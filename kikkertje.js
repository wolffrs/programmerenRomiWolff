console.log('Dit is de kikker');

/* code voor de kikker kleren */

var weatherCondition;
var clothesCondition;
var emotion;

var kikkerFoto = document.querySelector('#kikker'); /* var frog picture */
var naaktButton = document.querySelector('#naakt'); 
var regenpakButton = document.querySelector('#regenpak'); 
var mutsButton = document.querySelector('#muts'); 

var hetWeer = document.querySelector('#natuur'); /* var the weather */
var regenButton = document.querySelector('#stortbui');
var sneeuwButton = document.querySelector('#koud'); 
var zonButton = document.querySelector('#zonnig'); 


function draagNiks() { /* function nakey frog */
    console.log('Oepsies, geen kleren aan.');
    kikkerFoto.src = 'kikker/kikker-normaal-neutraal.png';
}

function draagRegenpak() { /* function frog wears raincoat */
    console.log('Beschermd tegen de regen!')
    kikkerFoto.src = 'kikker/kikker-regen-neutraal.png';
}

function draagMuts() { /* function frog wears winter clothes */
    console.log('Beschermd tegen de kou!');
    kikkerFoto.src = 'kikker/kikker-winter-neutraal.png';
}

function regenValt() { /* function it's raining */
    console.log('Zoek onderdak!');
    hetWeer.classList.remove("hetSneeuwt", "zonnetjeSchijnt");
    hetWeer.classList.add("hetRegent");
}

function zonSchijnt() { /* function it's sunny */
    console.log('Lekker zonnetje.');
    hetWeer.classList.remove("hetSneeuwt", "hetRegent");
    hetWeer.classList.add("zonnetjeSchijnt");
}

function sneeuwValt() { /* function frog it's snowing*/
    console.log('Brrr!'); 
    hetWeer.classList.remove("hetRegent", "zonnetjeSchijnt");
    hetWeer.classList.add("hetSneeuwt");
}

naaktButton.addEventListener( 'click', draagNiks )
    clothesCondition = "naked";
;

naaktButton.addEventListener( 'click', ()=>{
    draagNiks();
    clothesCondition = "naked";
    updateEmotion();
});

regenpakButton.addEventListener( 'click', ()=>{
    draagRegenpak();
    clothesCondition = "raincoat";
    updateEmotion();
});

mutsButton.addEventListener( 'click', ()=>{
    draagMuts();
    clothesCondition = "hat";
    updateEmotion();
});


regenButton.addEventListener( 'click', ()=>{
    regenValt();
    weatherCondition = "rain";
    updateEmotion();
});


sneeuwButton.addEventListener( 'click', ()=>{
    sneeuwValt();
    weatherCondition = "snow";
    updateEmotion();
});

zonButton.addEventListener( 'click', ()=>{
    zonSchijnt();
    weatherCondition = "sunny";
    updateEmotion();
});

var message;

const updateEmotion = () => {

    if (clothesCondition === "raincoat" && weatherCondition === "rain" ) {
        kikkerFoto.src = "kikker/kikker-regen-blij.png"
    } else if (clothesCondition === "raincoat" && weatherCondition === "snow") {
        kikkerFoto.src = "kikker/kikker-regen-boos.png"
    } else if (clothesCondition === "raincoat" && weatherCondition === "sunny") {
        kikkerFoto.src = "kikker/kikker-regen-neutraal.png"

    } else if (clothesCondition === "hat" && weatherCondition === "snow") {
        kikkerFoto.src = "kikker/kikker-winter-blij.png"
    } else if (clothesCondition === "hat" && weatherCondition === "rain") {
        kikkerFoto.src = "kikker/kikker-winter-boos.png" 
    } else if (clothesCondition === "hat" && weatherCondition === "sunny") {
        kikkerFoto.src = "kikker/kikker-winter-boos.png"  

    } else if (clothesCondition === "naked" && weatherCondition === "rain") {
        kikkerFoto.src = "kikker/kikker-normaal-neutraal.png" 
    } else if (clothesCondition === "naked" && weatherCondition === "snow") {
        kikkerFoto.src = "kikker/kikker-normaal-boos.png" 
    } else if (clothesCondition === "naked" && weatherCondition === "sunny") {
        kikkerFoto.src = "kikker/kikker-normaal-blij.png" 
    }
}   

var kikkerNaam = document.querySelector('#ikBen');
var geefNaam = document.querySelector('#input');

function naamGeven () {
    console.log('Jij geeft mij nu een naam!');
    kikkerNaam.textContent = 'Prachtig, ik heet nu ' + geefNaam.value + '!';
}

geefNaam.addEventListener('change' , naamGeven);



// vlieg
var buzzAudio = document.querySelector('#buzz');
var eatAudio = document.querySelector('#eat');
var vliegImg = document.querySelector('#deVlieg');

// DOM manipulatie 

function buzz() {
    console.log('Irritant gezoom');
    buzzAudio.play();
}

function nobuzz() {
    console.log('Weer stil');
    buzzAudio.pause();
}

function eat () {
    console.log('Vlieg opgegeten')
    eatAudio.play();
}

// eventListeners

vliegImg.addEventListener('mouseover', buzz);
vliegImg.addEventListener('mouseout', nobuzz);
vliegImg.addEventListener('click', eat);
