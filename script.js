let btnStart = document.getElementById('start');
let btnReset = document.getElementById('reset');
let btnLap = document.getElementById('lap');
let btnClear = document.getElementById('clear');
let lapList = document.getElementById('lapList');
let btnset = document.getElementById('setBtn');
let btnSwitch = document.getElementById('switchBtn');
let sec = 0;
let min = 0;
let cnt=0;
// Variables to hold dispaly value
let msec = 0;
let dsec = 0;
let dmin = 0;
let dmsec = 0;

let interval = null;
let status = 'stopped';
let hidden = true;

btnClear.style.visibility = 'hidden';

function watch() {
    msec++;
    if (msec / 60 === 1) {
        msec = 0;
        sec++;
        
        if (sec / 60 === 1) {
            sec = 0
            min++;
        }
    }
    
    if (msec < 10) {
        dmsec = '0' + msec.toString();
    }
    else {
        dmsec = msec;
    }
    if (sec < 10) {
        dsec = '0' + sec.toString();
    }
    else {
        dsec = sec;
    }
    if (min < 10) {
        dmin = '0' + min.toString();
    }
    else {
        dmin = min;
    }
    
    //Display time 
    document.getElementById('time').innerText = dmin + ':' + dsec + ':' + dmsec;
    //console.log(min + ':' + sec + ':' + msec);
    
    btnLap.addEventListener('click', addLap);
    
}

function addLap() {
    cnt++;
    let newLap = document.createElement('li');
    newLap.classList.add('lap-item');
    newLap.classList.add('p-2');
    newLap.classList.add('m-1');
    newLap.innerHTML='#'+cnt+'&nbsp;&nbsp;&nbsp;&nbsp;'+dmin + ':' + dsec + ':' + dmsec;
    lapList.append(newLap);
    if (hidden) {
        btnClear.style.visibility = 'visible';
        hidden = false;
        console.log('Visible');
    }
    else {
        btnClear.style.visibility = 'visible';
        console.log('blunder addLap');
    }
}
function startstop() {
    if (status === 'stopped') {
        document.getElementsByClassName('outer-circle')[0].classList.add('changeColor');
        interval = window.setInterval(watch, 15);
        btnStart.innerText = 'Stop';
        status = 'running';
        
    }
    else {
        window.clearInterval(interval);
        btnStart.innerText = 'Start';
        status = 'stopped'; 
    }
}

function resetClock() {
    window.clearInterval(interval);
    msec = 0;
    sec = 0;
    min = 0;
    document.getElementById('time').innerText = '00' + ':' + '00' + ':' + '00';
    dmsec = '00';
    dsec = '00';
    dmin = '00';
    btnStart.innerText = 'Start';
    document.getElementsByClassName('outer-circle')[0].classList.remove('changeColor');
}
function clearList() {
    cnt=0;
    $('#lapList').empty();
    if (hidden === false) {
        btnClear.style.visibility = 'hidden';
        console.log('hidden clearList');
        hidden = true;
    }
    else {
        console.log('Blunder clearList')
    }
}
btnStart.addEventListener('click', startstop);
btnReset.addEventListener('click', resetClock);
btnClear.addEventListener('click', clearList);

// Changing background image;
function changeImage() {
    let myImg = [
        './images/istockphoto-929619614-612x612.jpg', './images/109438.jpg', './images/dark-grey-abstract-hexagon-pattern-background_67845-256.jpg',
        './images/dark-hexagonal-background-with-gradient-color_79603-1410.jpg', './images/istockphoto-1169152910-612x612.jpg', './images/dark-hexagonal-background-with-gradient-color_79603-1409.jpg',
        './images/pexels-jeremy-bishop-2923591.jpg','./images/preview-92727-oFU0TKQZMo-low_0000.jpg'
    ]
    let num = Math.floor(Math.random() * myImg.length);
    document.body.style.backgroundImage = 'url(' + myImg[num] + ')';
    
}


let changeBg=null;
let change = false;
btnset.addEventListener('click', () => {
    if (change === false) {
         changeBg= setInterval(changeImage, 4000);
        btnset.innerText = 'Set This';
        change = true;
    }
    else {
        btnset.innerText = 'Change This';
        window.clearInterval(changeBg);
        change = false;
    }
    
})

let swch=true;
btnSwitch.addEventListener('click',()=>{
    if(swch===true){
        swch=false;
        document.getElementsByClassName('inner-circle')[0].style.backgroundColor='transparent';
        
    }
    else{
        document.getElementsByClassName('inner-circle')[0].style.backgroundColor = 'black';
        swch=true;
    }
})

