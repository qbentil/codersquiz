const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreText = document.getElementById('score');
const questionCount = document.getElementById('questionCounter');
const progress_bar = document.getElementById('progress-bar');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion ={}
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = []
let questions = []
let answeredQuestions = []

const CORRECTSOUND = new Audio("../sounds/sound_correct.mp3")
const INCORRECTSOUND = new Audio("../sounds/sound_incorrect.mp3")

const selectedCategory = localStorage.getItem('selectedCategory')
// const quiz = document.getElementById('quiz');
// quiz.innerText = selectedCategory;
if(selectedCategory == ""){
    window.location.assign('select.html')
}
// fetch questions from JSON
fetchQuestions = (param) =>{
    fetch(`../lib/${param}.json`)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        console.log(loadedQuestions)
        questions = loadedQuestions;
        startGame();
        // localStorage.removeItem("selectedCategory")
    })
    .catch((err) => {
        console.error(err);
    });
}
play = () =>{
    fetchQuestions(selectedCategory)
}
// constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    // console.log(availableQuestions);
    getNewQuestion();
    game.classList.remove("hidden")
    loader.classList.add("hidden")
}
getNewQuestion = () => {
    // check if questions are completed
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {

        localStorage.setItem('mostRecentScore', score);
        // localStorage.setItem('answeredQuestions', answeredQuestions);
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    questionCount.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    // UPDATE Pregress bar
    const progress_bar_width = (questionCounter/MAX_QUESTIONS)*100;
    progress_bar.style.width = `${progress_bar_width}%`
    if(availableQuestions.length > 0){
        const questionIndex = Math.floor(Math.random() * availableQuestions.length)
        currentQuestion = availableQuestions[questionIndex]

        // console.log(answeredQuestions);
        question.innerHTML = currentQuestion.question;
        choices.forEach(choice =>{
            const number = choice.dataset["number"];
            // const number = Math.floor(Math.random() * 4);  
            choice.innerText = currentQuestion["choice" + number]
        })
        availableQuestions.splice(questionIndex, 1)
        acceptingAnswers = true;
    }
}
// get user selected answer
choices.forEach(choice =>{
    choice.addEventListener("click", e =>{
        if(!acceptingAnswers)return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        // console.log(selectedAnswer);
        answeredQuestions.push({'question': currentQuestion,'choice': selectedAnswer})
        const classToApply = selectedAnswer == currentQuestion.answer?"correct": 'incorrect';

        if(classToApply == 'correct'){
            incrementScore(CORRECT_BONUS)
            CORRECTSOUND.play()
        }else{
            INCORRECTSOUND.play()
        }
        // console.log(answeredQuestions);
        // storeing answred questions and choice selected
        localStorage.setItem('AnsweredQuestions', JSON.stringify(answeredQuestions));
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();   
        }, 1000);
    })
})
incrementScore = (num) =>{
    score +=num;
    scoreText.innerText = score
}
// startGame();