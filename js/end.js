const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore")
const category = localStorage.getItem("selectedCategory");
let questions = []
questions = JSON.parse(localStorage.getItem("AnsweredQuestions"))

// set final score
finalScore.innerText = mostRecentScore;
const MAX_HIGH_SCORES = 5;
// HIGH SCORES
var user = null;
// console.log(questions);
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];
username.addEventListener("keyup", ()=>{
    saveScoreBtn.disabled = !username.value
    user = username.value;
})
if(user !=null){
    saveScoreBtn.disabled =false;
}
saveHighScore = (e) =>{
    e.preventDefault();

    const score = {
        score:mostRecentScore,
        name: username.value,
        cat: category
    }
    highScores.push(score)
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5)

    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign('index.html');
}

