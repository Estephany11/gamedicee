// 1- Create random number: Between 1 and 6 


var randomNumber= Math.floor(Math.random()*6)
randomNumber= randomNumber +1 

var randomNumber2= Math.floor(Math.random()*6)
randomNumber2= randomNumber2 +1 

// 2. Random image selector : 
document.querySelector(".img1").setAttribute("src","dice"+randomNumber+".png")
document.querySelector(".img2").setAttribute("src","dice"+randomNumber2+".png")


// 3. Choose a Winner: 
if (randomNumber > randomNumber2) {
	document.querySelector("h1").innerHTML="Player 1 Wins!"
}else if (randomNumber < randomNumber2) {
	document.querySelector("h1").innerHTML="Player 2 Wins!"
}else{
	document.querySelector("h1").innerHTML="Draw!"
}