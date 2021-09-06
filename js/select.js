
getQuestionSet = (e) =>{
        console.log(e);
        localStorage.setItem('selectedCategory', e);
        window.location.assign('game.html')
}


document.getElementById("year").innerText = new Date().getFullYear();