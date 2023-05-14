//DOM
let table = document.querySelector('.table');
let time = document.querySelector('.time');
let infoBtn = document.querySelector('.infoBtn');
let infoPanel = document.querySelector('.info-panel')
let closeInfoPanelBtn = document.querySelector('.close-info-panel');
let restartBtn = document.querySelector('.restartBtn');
let score = document.querySelector('.score');
let level = document.querySelector('.level');
//Arrays
let shoes = ['<img src="img/img1.png" alt="#">', '<img src="img/img2.png" alt="#">', '<img src="img/img3.png" alt="#">', '<img src="img/img4.png" alt="#">', '<img src="img/img5.png" alt="#">', '<img src="img/img6.png" alt="#">', '<img src="img/img7.png" alt="#">', '<img src="img/img8.png" alt="#">', '<img src="img/img9.png" alt="#">', '<img src="img/img10.png" alt="#">', '<img src="img/img11.png" alt="#">', '<img src="img/img12.png" alt="#">', '<img src="img/img13.png" alt="#">', '<img src="img/img14.png" alt="#">', '<img src="img/img15.png" alt="#">', '<img src="img/img16.png" alt="#">', '<img src="img/img17.png" alt="#">', '<img src="img/img18.png" alt="#">', '<img src="img/img1.png" alt="#">', '<img src="img/img2.png" alt="#">', '<img src="img/img3.png" alt="#">', '<img src="img/img4.png" alt="#">', '<img src="img/img5.png" alt="#">', '<img src="img/img6.png" alt="#">', '<img src="img/img7.png" alt="#">', '<img src="img/img8.png" alt="#">', '<img src="img/img9.png" alt="#">', '<img src="img/img10.png" alt="#">', '<img src="img/img11.png" alt="#">', '<img src="img/img12.png" alt="#">', '<img src="img/img13.png" alt="#">', '<img src="img/img14.png" alt="#">', '<img src="img/img15.png" alt="#">', '<img src="img/img16.png" alt="#">', '<img src="img/img17.png" alt="#">', '<img src="img/img18.png" alt="#">'];


makeTables ();

let icons = document.querySelectorAll('.card');
let twoFlipped = [];
let intervalID;
let matchPairs = 0;
let counter = 100;



//listeners
icons.forEach(icon => icon.addEventListener('click', flipCards));
icons.forEach(icon => icon.addEventListener('click', startTime));
infoBtn.addEventListener('click', ()=>{
    infoPanel.style.display = "block";
});
closeInfoPanelBtn.addEventListener('click', ()=>{
    infoPanel.style.display = "none";
});
restartBtn.addEventListener('click', ()=>{
    location.reload();
})

//functions


function makeTables (){

    let html = "";

    for (let i = 0; i < 36; i++){
        let rand = Math.floor(Math.random() * shoes.length);
        html += `<div class="card">
                    <div class="back"> ${shoes[rand]} </div>
                    <div class="front"></div>
                 </div>`.trim();

        shoes.splice(rand, 1);
    }

    table.innerHTML = html;
    shoes = ['<img src="img/img1.png" alt="#">', '<img src="img/img2.png" alt="#">', '<img src="img/img3.png" alt="#">', '<img src="img/img4.png" alt="#">', '<img src="img/img5.png" alt="#">', '<img src="img/img6.png" alt="#">', '<img src="img/img7.png" alt="#">', '<img src="img/img8.png" alt="#">', '<img src="img/img9.png" alt="#">', '<img src="img/img10.png" alt="#">', '<img src="img/img11.png" alt="#">', '<img src="img/img12.png" alt="#">', '<img src="img/img13.png" alt="#">', '<img src="img/img14.png" alt="#">', '<img src="img/img15.png" alt="#">', '<img src="img/img16.png" alt="#">', '<img src="img/img17.png" alt="#">', '<img src="img/img18.png" alt="#">', '<img src="img/img1.png" alt="#">', '<img src="img/img2.png" alt="#">', '<img src="img/img3.png" alt="#">', '<img src="img/img4.png" alt="#">', '<img src="img/img5.png" alt="#">', '<img src="img/img6.png" alt="#">', '<img src="img/img7.png" alt="#">', '<img src="img/img8.png" alt="#">', '<img src="img/img9.png" alt="#">', '<img src="img/img10.png" alt="#">', '<img src="img/img11.png" alt="#">', '<img src="img/img12.png" alt="#">', '<img src="img/img13.png" alt="#">', '<img src="img/img14.png" alt="#">', '<img src="img/img15.png" alt="#">', '<img src="img/img16.png" alt="#">', '<img src="img/img17.png" alt="#">', '<img src="img/img18.png" alt="#">'];
    
}

function flipCards (){
    this.removeEventListener('click', flipCards);
    this.classList.add('active');
    twoFlipped.push(this);
    if (twoFlipped.length === 2){
        removeClicks()
        chackCards()
    }
}

function removeClicks (){
    icons.forEach(icon => icon.removeEventListener('click', flipCards));
}

function chackCards(){
    let back1 = twoFlipped[0].querySelector('.back');
    let back2 = twoFlipped[1].querySelector('.back');

    if (back1.innerHTML === back2.innerHTML){
        twoFlipped = [];
        returnClicks();
        matchPairs++

    }
    else {
        setTimeout(()=>{
            twoFlipped[0].classList.remove('active');
            twoFlipped[1].classList.remove('active');
            twoFlipped = [];
            returnClicks()
        },900) 
    }
    checkWin()
}

function returnClicks (){
    let allNotActiveCards = document.querySelectorAll('.card:not(.active)');
    allNotActiveCards.forEach(card => card.addEventListener('click', flipCards));
}

function checkWin(){
    if (matchPairs === 18){
        clearInterval(intervalID);
        matchPairs = [];
        makeTables();
        returnClicks();
        makeScore();
        levelCounter++
        changesLevel();
        counter = 100;
 
        icons.forEach(icon => icon.addEventListener('click', startTime));
        intervalID;
    }
}


function changesLevel (){
    level.innerHTML = levelCounter;
}


function makeScore (){
    let points = counter * 100;
    score.innerHTML += points;
}

function startTime (){
    
    intervalID = setInterval(function(){
        time.style.width = counter +"%";

        if (counter >= 85){
            time.style.backgroundColor = "#00ff80";
        }
        else if (counter < 85 && counter >= 65){
            time.style.backgroundColor = "#00FF00";
        }
        else if (counter < 65 && counter >= 45){
            time.style.backgroundColor = "#80FF00";
        }
        else if (counter < 45 && counter >= 25){
            time.style.backgroundColor = "#FFFF00";
        }
        else if (counter < 25 && counter >= 5){
            time.style.backgroundColor = "#FF8000";
        }
        else if (counter < 5 && counter >1){
            time.style.backgroundColor = "#FF0000";
        }
        else if (counter === 0){
            time.style.width = 100+"%";
            time.innerHTML = "GAME OVER";
            clearInterval(intervalID);
            removeClicks();
        }
        counter--
    },3400)

    icons.forEach(icon => icon.removeEventListener('click', startTime));   
}