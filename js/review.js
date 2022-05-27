const answeredQuestions = JSON.parse(localStorage.getItem('AnsweredQuestions'))
const slidesList = document.getElementById('slides');
// console.log(answeredQuestions);
// Pull Answered Questions from localstorage
if(answeredQuestions.length <=0){
  slidesList.innerHTML =  `<li class = "high-score text-center"><span>High scores list is empty</span></li>`;
}
else{
  slidesList.innerHTML = answeredQuestions.map(slide =>{
      // slide.question.answer
      // let answer = slide.question.choice+slide.question.answer
      // let choice = slide.question.choice+slide.choice
      var answer, choice;
      switch(slide.question.answer)
      {
        case 1:
          answer = slide.question.choice1
          break
        case 2:
          answer = slide.question.choice2
          break
        case 3:
          answer = slide.question.choice3
          break
        default:
          answer = slide.question.choice4
          break
      }
      switch(slide.choice)
      {
        case 1:
          choice = slide.question.choice1
          break
        case 2:
          choice = slide.question.choice2
          break
        case 3:
          choice = slide.question.choice3
          break
        default:
          choice = slide.question.choice4
          break
      }

      if(slide.choice == slide.question.answer){
        return `
        <div class='mySlides'>
        <div class='flex-center flex-column'>
            <h2 class='question'>${slide.question.question}</h2>
            <div class='flex'>
                <p class='answer'><span>Answer: <xmp class = "success">${answer}</xmp></span></p>
            </div>
        </div>
      </div>
        `
      }
      else{
        return `
        <div class='mySlides'>
        <div class='flex-center flex-column'>
            <h2 class='question'>${slide.question.question}</h2>
            <div class='flex'>
                <p class='choice danger'><span>Selected:<xmp class = "danger">${choice}</xmp></span></p>
                <p class='answer success'><span>Answer: <xmp class = "success">${answer}</xmp></span></p>
            </div>
        </div>
      </div>
        `
      }
  }).join("");
  
}

// displaay naviogation buttons
// slidesList.innerHTML = answeredQuestions.map(slide =>{
//     return `
//     <div class="column">
//     <button class="demo cursor btn" onclick="currentSlide(7)" data-item = "Question 7">7</button>
//     </div>
//     `
// }).join("");











var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  // slides.length = 10
  // slides.length.length = 10
  // alert(slides.length)
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].getAttribute('data-item');
}
