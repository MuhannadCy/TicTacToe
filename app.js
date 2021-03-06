//Initilizing and assigning variables
let currentTurn =  false; 
let gameMode = false;   
let counter = 0;        
let tieCounter = 0;
let xCounter = 0;
let oCounter = 0;
let winAlert = "O IS THE CHAMPION"
let loseAlert = "X IS THE CHAMPION"
let currentImage = document.querySelector('.current-image');
let x = "xx.jpeg";
let o = "oo.png";
let oGif = ""
let xGif = ""
let winAud = ""
let loseAud = ""
let gameModeMessage = document.querySelector('#gameModeMess')
let body = document.querySelector('body')
let newGame = document.querySelector('.button-1 button')
let gameModeButton = document.querySelector('.button-2 button')
let lore = document.querySelector('#lore')
let themeOption = document.querySelector('.theme-option')
let gif = document.querySelector('.rightbar img')
let zone0 = document.querySelector('#zone-0 img');
let zone1 = document.querySelector('#zone-1 img');
let zone2 = document.querySelector('#zone-2 img');
let zone3 = document.querySelector('#zone-3 img');
let zone4 = document.querySelector('#zone-4 img');
let zone5 = document.querySelector('#zone-5 img');
let zone6 = document.querySelector('#zone-6 img');
let zone7 = document.querySelector('#zone-7 img');
let zone8 = document.querySelector('#zone-8 img');
let winText = document.querySelector('#win')
let loseText = document.querySelector('#lose')
let wins = document.querySelector('#wins');
let loses = document.querySelector('#loses');
let ties = document.querySelector('#ties');
let zone = document.querySelectorAll(".zone img");
body.style.backgroundImage = "url('background.png')"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundSize="cover"
//initilizing a two dimensional array with all the winning conditions
let boardArr = [
    [zone0, zone1, zone2],
    [zone3, zone4, zone5],
    [zone6, zone7, zone8],
    [zone0, zone3, zone6],
    [zone1, zone4, zone7],
    [zone2, zone5, zone8],
    [zone0, zone4, zone8],
    [zone2, zone4, zone6]
];
//initilizing game start function for player vs player mode 
const gameStartPVP = function(){
    currentTurn =  false;
    counter = 0;
    displayTurn();
    zone0.addEventListener('click', play);
    zone1.addEventListener('click', play);
    zone2.addEventListener('click', play);
    zone3.addEventListener('click', play);
    zone4.addEventListener('click', play);
    zone5.addEventListener('click', play);
    zone6.addEventListener('click', play);
    zone7.addEventListener('click', play);
    zone8.addEventListener('click', play);
    for(let i = 0; i<zone.length; i++){
        zone[i].setAttribute('src', "")
    }
    gif.setAttribute('src', '')

}
//initilizing game start function for player vs AI mode
const gameStartAI = function(){
    counter = 0;
    displayTurn()
    zone0.addEventListener('click', playAI);
    zone1.addEventListener('click', playAI);
    zone2.addEventListener('click', playAI);
    zone3.addEventListener('click', playAI);
    zone4.addEventListener('click', playAI);
    zone5.addEventListener('click', playAI);
    zone6.addEventListener('click', playAI);
    zone7.addEventListener('click', playAI);
    zone8.addEventListener('click', playAI);
    for(let i = 0; i<zone.length; i++){
        zone[i].setAttribute('src', "")
    }
    gif.setAttribute('src', '')

}
//initilizing a function for when O wins
const endGameO = function(){
    for(let i = 0; i<zone.length; i++){
        zone[i].removeEventListener('click', play);
        zone[i].removeEventListener('click', playAI);
    }
    oCounter++;
    wins.textContent= oCounter;
    gif.setAttribute('src', oGif)
    let winAudio = new Audio(winAud)
    winAudio.play()
    alert(winAlert)
}
//initilizing a function for when X wins 
const endGameX = function(){
    for(let i = 0; i<zone.length; i++){
        zone[i].removeEventListener('click', play);
        zone[i].removeEventListener('click', playAI);
    }
    xCounter++;
    loses.textContent= xCounter;
    gif.setAttribute('src', xGif)
    let loseAudio = new Audio(loseAud)
    loseAudio.play()
    alert(loseAlert)
}
//initilizing a function for when there is a Tie
const endGameTie = function(){
    tieCounter++;
    ties.textContent= tieCounter;
    alert("The Game is a Tie")
}
//initilizing a function to check the winner by looping through the winning conditions array
const checkWinner = function(){
    for(let i = 0; i<boardArr.length; i++){
        if(boardArr[i][0].getAttribute('src') == x && boardArr[i][1].getAttribute('src') == x &&boardArr[i][2].getAttribute('src') == x) return endGameX()
        else if(boardArr[i][0].getAttribute('src') == o && boardArr[i][1].getAttribute('src') == o &&boardArr[i][2].getAttribute('src') == o) return endGameO()
    }
    if(counter == 9)  return endGameTie()
}
//initilizing a function to display the current turn if player vs player mode
const displayTurn = function(){
    if(currentTurn == false){
        currentImage.setAttribute('src', x);
    }
    else{
        currentImage.setAttribute('src', o);
    }
}
//initilizing a function to display the current turn if player vs AI mode
const displayTurnAI = function(){
    currentImage.setAttribute('src', x)
}
//initilizing a function to reset all the scores
const scoreReset = function(){
    oCounter = 0;
    xCounter = 0;
    tieCounter = 0;
    wins.textContent= oCounter;
    loses.textContent= xCounter;
    ties.textContent = tieCounter
}
//a function to randomly pick a clear point on the game board
const AI = function(){
    for(let i = 0; i<3; i++){
        for(let j = 0; i<3; i++){
        }
    }
    firstD = Math.floor(Math.random() * 3);
    secondD = Math.floor(Math.random() * 3);
    if(boardArr[firstD][secondD].getAttribute('src') != "") return AI()
    else return boardArr[firstD][secondD]
}
//initlizing a play function for player vs AI mode
const playAI = function(){
    displayTurnAI()
    this.setAttribute('src', x)
    counter++;
    if(counter == 9) return endGameTie()
    let rand = AI()
    rand.setAttribute('src', o)
    counter++
    this.removeEventListener('click', playAI);
    rand.removeEventListener('click', playAI);
    if(counter >= 5){
        checkWinner()
    }
}
//initilizing a function for player vs player mode
const play = function(){
    if(currentTurn == false){
        this.setAttribute('src', x);
    }
    else{
        this.setAttribute('src', o);
    }
    counter++;
    if(counter >= 5){
        checkWinner()
    }
    this.removeEventListener('click', play);
    currentTurn = !currentTurn;
    displayTurn()
}
//initlizing a function to change the theme based on the user's choice
const changeTheme = function(){
    if(themeOption.value == 'Avengers'){
        //reseting the game because the theme has been changed
        setGameMode()
        //Implementing changes to the page to fit the chosen theme
        lore.innerText = "Yes the avengers time heist worked and they finally managed to reverse the effect of the infinity stones, but Thanos found out about their plan and chased them to their timeline. The avengers have to defend the stones from Thanos's army and return the stones to their original timeline. Right now Iron man is trying to steal the stone's from Thanos's gauntlet. Will he successed ?"
        body.style.backgroundImage = "url('ThanosvsIronman.png')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize="cover"
        body.style.color='white'
        x = 'Ironman.jpeg'
        o = 'Thanos.jpg'
        oGif = 'Thanos.gif'
        xGif = 'Ironman.gif'
        loseText.innerText = "Iron Man"
        winText.innerText = "Thanos"
        winAlert = "Thanos Has Won and Wiped Half of the Universe"
        loseAlert = "Iron Man Has Won and Wiped Thanos's Army"
        winAud = "ThanosAudio.mp3"
        loseAud = "Ironman.mp4"
        if(gameMode == false){
            displayTurn()
        }
        else{
            displayTurnAI()
        }
        scoreReset()
    }
    if(themeOption.value == 'Death Note'){
        setGameMode()
        lore.innerText = "Yagami Light got his hands on a death note which allows him to kill anyone if he knows what they look like and their name. He is using the death note to bring his own justice to the world. But, is that really justice. L, the world's greatest detective think its not and aims to stop Yagami. Who will win in this battle Yagami's justice or L's ?"
        body.style.backgroundImage = "url('Ryuk.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize="cover"
        body.style.color='white'
        x = 'K.jpg'
        o = 'L.jpg'
        oGif = 'L.gif'
        xGif = 'K.gif'
        loseText.innerText = "K"
        winText.innerText = "L"
        winAlert = "L has discovered that Yagami is Kera and brought him to justice"
        loseAlert = "Yagami has managed to find L's name and managed to write his name in the death note"
        winAud = "L.mp3"
        loseAud = "L.mp3"
        if(gameMode == false){
            displayTurn()
        }
        else{
            displayTurnAI()
        }
        scoreReset()
    }
    if(themeOption.value == 'Star Wars'){
        setGameMode()
        lore.innerText = "Anakin Skywalker has been tempted by the dark side and has joined the Darth Sidious and managed to kill the Jedi except for Anakin's mentor Obi Wan Kenobi and Yoda a legendary Jedi Master. Obi Wan tried to bring Anakin back but he was too deep into the dark side. A fight broke between the two on planet Mustafar, who will win ? the dark side or the force"
        body.style.backgroundImage = "url('Starwar.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize="cover"
        body.style.color='yellow'
        x = 'Anakin.jpg'
        o = 'Obi.jpeg'
        oGif = 'Obi.gif'
        xGif = 'Anakin.gif'
        loseText.innerText = "Anakin"
        winText.innerText = "Obi Wan"
        winAlert = "The Force Has Won"
        loseAlert = "The Dark Side Has Won"
        winAud = "Obi.mp3"
        loseAud = "Anakin.mp3"
        if(gameMode == false){
            displayTurn()
        }
        else{
            displayTurnAI()
        }
        scoreReset()
    }
    if(themeOption.value == 'Batman'){
        setGameMode()
        lore.innerText = "Bane has thrown batman into the hole and taken control over Gotham City, but batman managed to escape from the hole and has come to rescue from Bane. Bane has planted a bomb and he alone holds the deactivation trigger for it. Will Batman manage to defeat Bane and retrieve the trigger to save Gotham ?"
        body.style.backgroundImage = "url('batmanb.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize="cover"
        body.style.color='white'
        o = 'Batman.jpg'
        x = 'Bane.jpg'
        oGif = 'batman.gif'
        xGif = 'Bane.gif'
        loseText.innerText = "Bane"
        winText.innerText = "Batman"
        winAlert = "Batman Has Won"
        loseAlert = "Bane Has Won"
        winAud = "Batman.mp4"
        loseAud = "Bane.mp4"
        if(gameMode == false){
            displayTurn()
        }
        else{
            displayTurnAI()
        }
        scoreReset()
    }
    if(themeOption.value == 'default'){
        setGameMode()
        lore.innerText = "This is the default theme. Therefore, it has no lore just pretty the secret of the universe which is: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aspernatur provident dolores ullam similique cum soluta aliquam necessitatibus natus? Sunt dignissimos nulla dolorum rem ut dolores! Repudiandae aspernatur expedita minus?"
        body.style.backgroundImage = "url('background.png')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize="cover"
        body.style.color='black'
        x = 'xx.jpeg'
        o = 'oo.png'
        oGif = ''
        xGif = ''
        loseText.innerText = "X wins "
        winText.innerText = "O wins"
        winAlert = "O IS THE CHAMPION"
        loseAlert = "X IS THE CHAMPION"
        winAud = ""
        loseAud = ""
        if(gameMode == false){
            displayTurn()
        }
        else{
            displayTurnAI()
        }
        scoreReset()
    }
    if(themeOption.value == 'Spiderman'){
        setGameMode()
        lore.innerText = "Mysterio turned out to be a fraud, his plan all along was to steal EDITH from Spiderman, and he did it. Now he has control over all of Stark's technologies and he's planning to use it in order to make Mysterio the greatest superhero the world has ever seen. And, he will do it even if it meant hurting civilians. Will Spiderman manage to overcome Mysterio's illusion and stop him or will he just go out with MJ and do nothing about it. "
        body.style.backgroundImage = "url('spidermanb.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize="cover"
        body.style.color='black'
        o = 'spiderman.jpg'
        x = 'mysteryo.jpg'
        oGif = 'spiderman.gif'
        xGif = 'mysteryo.gif'
        loseText.innerText = "Mysterio"
        winText.innerText = "Spiderman"
        winAlert = "Spiderman Has Won"
        loseAlert = "Mysterio Has Won and MJ Dumbed Peter"
        winAud = "Spiderman.mp4"
        loseAud = "Mysteryo.mp4"
        if(gameMode == false){
            displayTurn()
        }
        else{
            displayTurnAI()
        }
        scoreReset()
    }
}
//setting an attribute for select and assigning to a function
themeOption.setAttribute('onchange', 'changeTheme()')
//initilizing a function that set the game mode based on a boolean value
const setGameMode = function(){
    if(gameMode == false){
        displayTurn()
        return gameStartPVP()
    }
    else{
        displayTurnAI()
        return gameStartAI()
    }
}
//setting a listener to change the game mode boolean based on the click 
gameModeButton.addEventListener('click', function(){
    gameMode = !gameMode
    scoreReset()
    setGameMode()
    if(gameMode == false){
        gameModeButton.textContent = "Player vs AR"
    }
    else{
        gameModeButton.textContent = "Player vs Player"
    }
})
//setting the default mode and initilizng the game when the page is opened or reloaded 
setGameMode();
//setting a listener to start a new game when it's clicked
newGame.addEventListener('click', setGameMode)