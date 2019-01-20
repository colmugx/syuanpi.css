var bootstrap$ = rxjs.fromEvent(document, 'mousewheel').pipe(
  rxjs.operators.map(function(e) { return e.deltaY })
).subscribe(function(v) {
  if (v > 0) {
    document.querySelector('header').classList = "";
    document.querySelector('.nav').classList = "nav";
    document.querySelectorAll('.title')[1].classList = "title";
    document.querySelector('.s-button').classList = "s-button";
    document.querySelector('.subtitle').classList = "subtitle";
    document.querySelector('.main').classList = "main";
    setTimeout(function() {
      document.querySelector('html').style = 'overflow: auto;';
      document.querySelector('body').style = 'overflow: auto;';
    }, 500);
    bootstrap$.unsubscribe()
  }
})

var itemClick$ = rxjs.fromEvent(document.querySelectorAll('.a-item-title'), 'click').pipe(
  rxjs.operators.map(function(e) { return e.target.parentNode.parentNode }),
).subscribe(function(item) {
  if (item.classList.value.indexOf('a-item-active') < 0) {
    item.classList += ' a-item-active'
  } else {
    item.classList = 'a-item'
  }
})

// document.querySelectorAll('.a-item').forEach(function(item) {
//   item.firstChild.addEventListener('click', function(e) {
//     console.log(e)
//     e.stopPropagation()
//     if (item.classList.value.indexOf('a-item-active') < 0) {
//       item.classList += ' a-item-active'
//     } else {
//       item.classList = 'a-item'
//     }
//   })
// })
