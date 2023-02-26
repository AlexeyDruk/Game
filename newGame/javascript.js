  let buttonsTwo = [];
  window.onload = function() {
  let buttons = document.getElementsByTagName('button');
   for (var i = 0; i < buttons.length; i++) {
     buttonsTwo.push(buttons[i]);
   }
   function shuffle(buttonsTwo) {
  buttonsTwo.sort(() => Math.random() - 0.5);
};
shuffle(buttonsTwo)
console.log(buttonsTwo);
};
 
  function getID(event){
  let a = event.target.id;
  a = document.getElementById(a);
  a.classList.remove('img_none');
  setTimeout(()=>a.classList.add('img_none'),300);
  comparisonClass(a);
};
let c;
let c_classNAme;
function comparisonClass(a) {
  let b = a;
  let b_classNAme = b.className;
  let arr = document.getElementsByClassName(b_classNAme);
  comparison(b,c); 
  if (b_classNAme === c_classNAme && comparison(b,c)) {
  setTimeout(() => alert('Поздравляю,вы нашли одинаковые картинки!'), 500);
  arr[0].classList.add('img_black');
  arr[1].classList.add('img_black');
} else {
  c_classNAme = b_classNAme ;
  c = b
}
};

function comparison(b,c) {
  if (b !== c) {
    return true
  } else {
    console.log('Так нельзя');
  }
};