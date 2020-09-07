var randomNo1 = Math.floor(Math.random()*6)+1;
var randomImg1 = "dice"+randomNo1+".png";
var imgSrc1 = "images/"+randomImg1;
document.querySelectorAll("img")[0].setAttribute("src",imgSrc1);


var randomNo2 = Math.floor(Math.random()*6)+1;
var randomImg2 = "dice"+randomNo2+".png";
var imgSrc2 = "images/"+randomImg2;
document.querySelectorAll("img")[1].setAttribute("src",imgSrc2);


if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
if(randomNo1===randomNo2){
    document.querySelector("h1").innerHTML="Draw";
}
