let suwak = document.querySelector('.suwak');
let dot = document.querySelector('.dot');
let head = document.querySelector('.head');
let screen = document.querySelector('.screen');
let theme = document.querySelector('.theme');
let keyboard = document.querySelector('.keyboard');
let reset = document.querySelector('.reset');
let del = document.querySelector('.del');
let rowna = document.querySelector('.rowna');
let btns = document.querySelectorAll('.btns');



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
        reset.style.boxShadow = "0px 3px 0px 0px hsl(224, 28%, 35%)";
        del.style.boxShadow = "0px 3px 0px 0px hsl(224, 28%, 35%)";
        dot.style.backgroundColor = "hsl(25, 98%, 40%)";
        rowna.style.boxShadow = "0px 3px 0px 0px hsl(6, 70%, 34%)";
        rowna.style.color = "white";

        reset.classList.remove('btn-bbg-theme3');
        rowna.classList.remove('rowna-theme3');
        del.classList.remove('btn-bbg-theme3');
        
        reset.classList.add('btn-bbg-theme1');
        rowna.classList.add('rowna-theme1');
        del.classList.add('btn-bbg-theme1');

        btns.forEach((btn) => {
            btn.classList.remove('themekey3');
            btn.classList.add('themekey1');
        })
        
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
        reset.style.boxShadow = "0px 5px 0px 0px hsl(185, 58%, 25%)";
        del.style.boxShadow = "0px 3px 0px 0px hsl(185, 58%, 25%)";

        reset.classList.remove('btn-bbg-theme1');
        del.classList.remove('btn-bbg-theme1');

        reset.classList.add('btn-bbg-theme2');
        del.classList.add('btn-bbg-theme2');
        

    }
    if(i==3){
        dot.classList.remove('dotAnim1');
        dot.classList.add('dotAnim2');

        head.style.color = "hsl(52, 100%, 62%)";
        suwak.style.backgroundColor = "hsl(268, 71%, 12%)";
        screen.style.color = "hsl(52, 100%, 62%)";
        screen.style.backgroundColor = "hsl(268, 71%, 12%)";
        theme.style.backgroundColor = "hsl(268, 75%, 9%)";
        keyboard.style.backgroundColor = "hsl(268, 71%, 12%)";
        reset.style.boxShadow = "0px 3px 0px 0px hsl(285, 91%, 52%)";
        del.style.boxShadow = "0px 3px 0px 0px hsl(285, 91%, 52%)";
        dot.style.backgroundColor = "hsl(176, 100%, 44%)";
        rowna.style.boxShadow = "0px 3px 0px 0px hsl(177, 92%, 70%)";
        rowna.style.color = "black";

        reset.classList.remove('btn-bbg-theme2');
        rowna.classList.remove('btn-bbg-theme1');
        del.classList.remove('btn-bbg-theme2');
        
        reset.classList.add('btn-bbg-theme3');
        rowna.classList.add('rowna-theme3');
        del.classList.add('btn-bbg-theme3');

        btns.forEach((btn) => {
            btn.classList.remove('themekey1');
            btn.classList.add('themekey3');
        })

        i=0;
    }
});

let wynik = document.querySelector('.wynik');
let nums = document.querySelectorAll('.num');
let poprzednie = document.querySelector('.poprzednie');
let operacja = document.querySelectorAll('.operacja');
let x=0;
let y=1;
let operacjaClicked = false;
let aktualneDzialanie;
let poprzednieDzialanie=0;
let poprzedniZnak =0;


let dzialanie = (oper) => {
    if(oper.value == "+"){
        wynik.innerHTML = aktualneDzialanie + poprzednieDzialanie;    
        aktualneDzialanie = parseFloat(poprzednie.innerHTML);
        
    }
    if(oper.value == "-"){
        if(poprzednieDzialanie!=0){
            wynik.innerHTML = poprzednieDzialanie - aktualneDzialanie; 
            aktualneDzialanie = parseFloat(poprzednie.innerHTML); 
        }
    }
    if(oper.value == "/"){
        console.log(aktualneDzialanie);
        console.log(poprzednieDzialanie);
        if(poprzednieDzialanie!=0){
            wynik.innerHTML = poprzednieDzialanie / aktualneDzialanie; 
            aktualneDzialanie = parseFloat(poprzednie.innerHTML); 
        }
    }
    if(oper.value == "x"){
        if(poprzednieDzialanie!=0){
            wynik.innerHTML = poprzednieDzialanie * aktualneDzialanie; 
            aktualneDzialanie = parseFloat(poprzednie.innerHTML); 
        } 
    }
}


nums.forEach((num) => {
    num.addEventListener('click', () =>{
        
        if(!operacjaClicked){
            if(wynik.innerHTML.length <11){
                wynik.innerHTML += num.value;
                aktualneDzialanie = parseFloat(wynik.innerHTML);
            }
        }
        else{ 
            poprzednieDzialanie = parseFloat(wynik.innerHTML);
            wynik.innerHTML = num.value;
            aktualneDzialanie = parseFloat(wynik.innerHTML);
        }
        x=1;
        operacjaClicked = false;
        
    });
});

operacja.forEach((oper) => {  
    oper.addEventListener('click', () => {
        
        if(x!=0 && !operacjaClicked){
            
            poprzednie.innerHTML += wynik.innerHTML;
            poprzednie.innerHTML += oper.value;
            
            operacjaClicked = true;
            
            if(y){
                dzialanie(oper);
                poprzednieDzialanie = aktualneDzialanie;
                y=0;
            }
            else{
                dzialanie(poprzedniZnak);
                poprzednieDzialanie = aktualneDzialanie;
            }
        }
        poprzedniZnak = oper;
    });
});

let resetAll = () => {
    poprzednie.innerHTML = '';
    poprzednieDzialanie = 0;
    aktualneDzialanie = 0;
    operacjaClicked = true;
    poprzedniZnak =0;
    x=0;
    y=0;
}

reset.addEventListener('click', () => {
    resetAll();
    wynik.innerHTML = '';
});


rowna.addEventListener('click', () => {
    dzialanie(poprzedniZnak);
    resetAll();
});

del.addEventListener("click", () => {
    wynik.innerHTML = wynik.innerHTML.substring(0,wynik.innerHTML.length-1);
});
