let currentTurn =  false;
let currentImage = document.querySelector('.current-image');
let x = "https://www.sccpre.cat/mypng/detail/137-1371697_heart-simple-shape-silhouette-tic-tac-toe-cross.png";
let o = "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png";
let zone0 = document.querySelector('.zone-0 img');
let zone1 = document.querySelector('.zone-1 img');
let zone2 = document.querySelector('.zone-2 img');
let zone3 = document.querySelector('.zone-3 img');
let zone4 = document.querySelector('.zone-4 img');
let zone5 = document.querySelector('.zone-5 img');
let zone6 = document.querySelector('.zone-6 img');
let zone7 = document.querySelector('.zone-7 img');
let zone8 = document.querySelector('.zone-8 img');
const displayTurn = function(){
    if(currentTurn == false){
        currentImage.setAttribute('src', x);
    }
    else{
        currentImage.setAttribute('src', o);
    }
}
const play = function(){
    console.log(this);
    displayTurn();
    if(currentTurn == false){
        this.setAttribute('src', x);
        currentTurn = !currentTurn;
    }
    else{
        this.setAttribute('src', o);
        currentTurn = !currentTurn;
    }
    this.removeEventListener('click', play);
}
const test = function(){

}
displayTurn()
zone0.addEventListener('click', play);
zone1.addEventListener('click', play);
zone2.addEventListener('click', play);
zone3.addEventListener('click', play);
zone4.addEventListener('click', play);
zone5.addEventListener('click', play);
zone6.addEventListener('click', play);
zone7.addEventListener('click', play);
zone8.addEventListener('click', play);