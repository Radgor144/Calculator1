let suwak = document.querySelector('.suwak');
let dot = document.querySelector('.dot');
let head = document.querySelector('.head');
let screen = document.querySelector('.screen');
let theme = document.querySelector('.theme');
let keyboard = document.querySelector('.keyboard');
let reset = document.querySelector('.reset');
let del = document.querySelector('.del');
let rowna = document.querySelector('.rowna');
let btn = document.querySelectorAll('.btn');



let i=1;
dot.addEventListener('click', () => {
    i++;
    if(i==1){
        dot.classList.remove('dotAnim2');
        dot.classList.add('dotAnim3');

        head.style.color = "white";
        suwak.style.backgroundColor = "hsl(223, 31%, 20%)";
        screen.style.color = "white";
        screen.style.backgroundColor = "hsl(224, 36%, 15%)";
        theme.style.backgroundColor = "hsl(222, 26%, 31%)";
        keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";
        reset.style.backgroundColor = "hsl(225, 21%, 49%)";
        del.style.backgroundColor = "hsl(225, 21%, 49%)";
        reset.style.boxShadow = "0px 3px 0px 0px hsl(224, 28%, 35%)";
        del.style.boxShadow = "0px 3px 0px 0px hsl(224, 28%, 35%)";
        dot.style.backgroundColor = "hsl(25, 98%, 40%)";
        rowna.style.backgroundColor = "hsl(6, 63%, 50%)";
        rowna.style.boxShadow = "0px 3px 0px 0px hsl(6, 70%, 34%)";
        rowna.style.color = "white";

        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('themekey3');
            btn[i].classList.add('themekey1');
          }

    }
    if(i==2){
        dot.classList.remove('dotAnim3');
        dot.classList.add('dotAnim1');

        head.style.color = "black";
        suwak.style.backgroundColor = "hsl(0, 5%, 81%)";
        screen.style.color = "black";
        theme.style.backgroundColor = "hsl(0, 0%, 90%)";
        screen.style.backgroundColor = "white";
        keyboard.style.backgroundColor = "hsl(0, 5%, 81%)";
        reset.style.backgroundColor = "hsl(185, 42%, 37%)";
        del.style.backgroundColor = "hsl(185, 42%, 37%)";
        reset.style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
        del.style.boxShadow = "0px 3px 0px 0px hsl(185, 58%, 25%)";
        
        

    }
    if(i==3){
        dot.classList.remove('dotAnim1');
        dot.classList.add('dotAnim2');

        head.style.color = "hsl(52, 100%, 62%)";
        suwak.style.backgroundColor = "hsl(268, 71%, 12%)";
        screen.style.color = "hsl(52, 100%, 62%)";
        screen.style.backgroundColor = "hsl(268, 71%, 12%)";
        theme.style.backgroundColor = "hsl(268, 75%, 9%)";
        keyboard.style.backgroundColor = "hsl(223, 31%, 20%)";
        reset.style.backgroundColor = "hsl(281, 89%, 26%)";
        del.style.backgroundColor = "hsl(281, 89%, 26%)";
        reset.style.boxShadow = "0px 3px 0px 0px hsl(285, 91%, 52%)";
        del.style.boxShadow = "0px 3px 0px 0px hsl(285, 91%, 52%)";
        dot.style.backgroundColor = "hsl(176, 100%, 44%)";

        rowna.style.backgroundColor = "hsl(176, 100%, 44%)";
        rowna.style.boxShadow = "0px 3px 0px 0px hsl(177, 92%, 70%)";
        rowna.style.color = "black";

        for (let i = 0; i < btn.length; i++) {
            btn[i].classList.remove('themekey1');
            btn[i].classList.add('themekey3');
          }
        


        i=0;
    }
});