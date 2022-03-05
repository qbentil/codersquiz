// const obj = document.getElementById('counter');
// function animateValue(start, end, duration) {
//     var range = end - start;
//     var current = start;
//     var increment = end > start? 1 : 1;
//     var stepTime = Math.abs(Math.floor(duration / range));
//     var timer = setInterval(function() {
//         current += increment;
//         obj.innerHTML = current;
//         if (current == end) {
//             clearInterval(timer);
//         }
//         obj.append("+")
//     }, stepTime);
// }
// fetch("https://api.countapi.xyz/update/codersquiz/quiz/?amount=1")
// .then(res => res.json).then(res =>{
//     animateValue( 0, res.value, 1000);
// });