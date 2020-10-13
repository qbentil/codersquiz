const answeredQuestions = localStorage.getItem('answeredQuestions')
const answers = document.getElementById('answers');
console.log(answeredQuestions);
// maping questions
for (let i = 0; i < answeredQuestions.length; i++) {
    // answers.innerHTML = answeredQuestions[i].map(answeredQuestion =>{
    //     // return `<li class = "high-score"><span>${score.name}</span><span> ${score.score}</span></li>`
    //     return `
    //     <h2 id="question">${answeredQuestion.question.question}</h2>
    //     <div class="choice-container">
    //         <p class="choice-prefix">A</p>
    //         <p class="choice-text" data-number = "1">Choice 1</p>
    //     </div>
    //     <div class="choice-container">
    //         <p class="choice-prefix">B</p>
    //         <p class="choice-text" data-number = "2">Choice 2</p>
    //     </div>
    //     <div class="choice-container">
    //         <p class="choice-prefix">C</p>
    //         <p class="choice-text" data-number = "3">Choice 3</p>
    //     </div>
    //     <div class="choice-container">
    //         <p class="choice-prefix">D</p>
    //         <p class="choice-text" data-number = "4">Choice 4</p>
    //     </div>
    //     `
    // }).join("");
    // console.log(answeredQuestions[i]);
}