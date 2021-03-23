console.log('Dit is de kikker');

/////////////// VERANDER ACHTERGROND EN KLEREN VAN DE KIKKER ///////////////

// HTML elementen voor verandering in achtergrond en kleren

var weatherCondition;
var clothesCondition;
var emotion;

var kikkerFoto = document.querySelector('#kikker');  
var naaktButton = document.querySelector('#naakt'); 
var regenpakButton = document.querySelector('#regenpak'); 
var mutsButton = document.querySelector('#muts'); 

var hetWeer = document.querySelector('#natuur'); 
var regenButton = document.querySelector('#stortbui');
var sneeuwButton = document.querySelector('#koud'); 
var zonButton = document.querySelector('#zonnig'); 


// DOM manipulaties

function draagNiks() { 
    console.log('Oepsies, geen kleren aan.');
    kikkerFoto.src = 'kikker/kikker-normaal-neutraal.png';
}

function draagRegenpak() { 
    console.log('Beschermd tegen de regen!')
    kikkerFoto.src = 'kikker/kikker-regen-neutraal.png';
}

function draagMuts() { 
    console.log('Beschermd tegen de kou!');
    kikkerFoto.src = 'kikker/kikker-winter-neutraal.png';
}

function regenValt() {
    console.log('Zoek onderdak!');
    hetWeer.classList.remove("hetSneeuwt", "zonnetjeSchijnt");
    hetWeer.classList.add("hetRegent");
}

function zonSchijnt() { 
    console.log('Lekker zonnetje.');
    hetWeer.classList.remove("hetSneeuwt", "hetRegent");
    hetWeer.classList.add("zonnetjeSchijnt");
}

function sneeuwValt() { 
    console.log('Brrr!'); 
    hetWeer.classList.remove("hetRegent", "zonnetjeSchijnt");
    hetWeer.classList.add("hetSneeuwt");
}

// EVENT LISTENERS //

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

// IF ELSE STATEMENTS

var updateEmotion = () => {

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

/////////////// GEEF DE KIKKER EEN NAAM ///////////////
// HTML elementen

var kikkerNaam = document.querySelector('#ikBen');
var geefNaam = document.querySelector('#input');

// DOM manipulatie

function naamGeven () {
    console.log('Jij geeft mij nu een naam!');
    kikkerNaam.textContent = 'Prachtig, ik heet nu ' + geefNaam.value + '!';
}

// EventListener

geefNaam.addEventListener('change' , naamGeven);

/////////////// TIME OUT KNOP MET NAAM VALUE ///////////////
// Html elementen

var popUpKnop = document.querySelector('#popUp');
var timeoutID;

// DOM manipulatie 

function knopKlikken () {
    console.log('Jij klikt nu op de knop waar niet klikken op stond!');
    timeoutID = window.setTimeout(window.alert, 1000, 'Kom terug! ' + geefNaam.value + ' mist je. :(' );
}

// EvetListener

popUpKnop.addEventListener('click', knopKlikken);

/////////////// HOVER OVER DE VLIEG, HIJ ZOOMT, KLIK OP DE VLIEG, VLIEG OPGEGETEN ///////////////
// HTML elementen

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
    vliegImg.remove();
    buzzAudio.pause();
}

// eventListeners

vliegImg.addEventListener('mouseover', buzz);
vliegImg.addEventListener('mouseout', nobuzz);
vliegImg.addEventListener('click', eat);

/////////////// EEN VERSTOPT BERICHTJE ///////////////
// HTML elementen

var geheimKnop = document.querySelector('#geheimBerichtje');

// DOM manipulatie met parameters

function createTxt( _padding = '10px', height = 'min-content', width = '300px', border = 'dashed 5px white') {
    console.log('Geheim berichtje?');
    
    var secretTxt = document.createElement("p");

    secretTxt.style.height = height;
    secretTxt.style.width = width;
    secretTxt.style.border = border;

    secretTxt.innerHTML = "Gevonden! Wist je dat wanneer je op de vlieg klikt, deze opgegeten wordt?"
    
    document.body.appendChild(secretTxt);
}

// EventListener

geheimKnop.addEventListener('click', createTxt);
