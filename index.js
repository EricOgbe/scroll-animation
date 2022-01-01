window.onscroll = function() {myFunction()};


const bodyElement = document.querySelector('body')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')

function myFunction() {
  if (document.body.scrollTop > 300|| document.documentElement.scrollTop > 300) {
    box1.style.transform = 'translateX(0)'
    box2.style.transform = 'translateX(0)'
    box3.style.transform = 'translateX(0)'
  }else if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    box1.style.transform = 'translateX(0)'
    box2.style.transform = 'translateX(0)'
    box3.style.transform = 'translateX(-70vw)'
  }else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
    box1.style.transform = 'translateX(0)'
    box2.style.transform = 'translateX(70vw)'
    box3.style.transform = 'translateX(-70vw)'
  }else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
    box1.style.transform = 'translateX(-70vw)'
    box2.style.transform = 'translateX(70vw)'
    box3.style.transform = 'translateX(-70vw)'
  }
}

