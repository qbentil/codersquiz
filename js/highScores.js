const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
if(highScores.length <=0){
    highScoresList.innerHTML =  `<li class = "high-score text-center"><span>High scores list is empty</span></li>`;
}
else{
    highScoresList.innerHTML = highScores.map(score =>{
        return `<li class = "high-score"><span>${score.name}</span><span>${score.cat.toUpperCase()}</span><span> ${score.score}</span></li>`
    }).join("");
    
}