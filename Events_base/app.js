const cards = document.querySelectorAll(".card");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
const three = document.querySelectorAll(".three");
const myFig = document.querySelectorAll(".stack");
const btns = document.querySelectorAll(".closeBtn");
const divOne = document.querySelector(".divOne");
const divTwo = document.querySelector(".divTwo");
const divThree = document.querySelector(".divThree");
const row = document.querySelector(".row");

let myFig1 = myFig[0];
let myFig2 = myFig[1];
let myFig3 = myFig[2];

const pause = function(){
    setTimeout(() => {
        for(let c of cards){
            c.classList.add('paused');
        }
    }, 1500);
}
const resume = function(){
    for(let c of cards){
        c.classList.remove('paused');
    }
}
// for(let card of cards){
//     card.addEventListener('click',pause);
// }

// for(let b of btn){
//     b.addEventListener('click',resume);
// }

let clickOne = 0 ;
let timedOne = 0;

const expandBtns = document.querySelectorAll(".expandBtn")
const modalBtns = document.querySelectorAll(".modalBtn")

for(let i = 0 ; i < expandBtns.length ; i++){
    cards[i].removeChild(expandBtns[i]);
    cards[i].removeChild(modalBtns[i]);
}

myFig1.addEventListener('mouseenter', e => {
    if(clickOne === 0){
        myFig1.classList.add('hovered')
        for(let i = 0 ; i < 3 ; i++){
            cards[i].appendChild(expandBtns[i]);
        }
    }
})
myFig1.addEventListener('mouseleave', e => {
    myFig1.classList.remove('hovered')
    if(clickOne === 0){
        for(let i = 0 ; i < 3 ; i++){
            cards[i].removeChild(expandBtns[i]);
        }
    }
})
for(let j = 0 ; j < 3 ; j++){
    expandBtns[j].addEventListener('click', e => {
        timedOne = 0;
        one[0].style.animation = 'onTopOneSlide 1.5s forwards'
        two[0].style.animation = 'onMiddleOneSlide 1.5s forwards'
        three[0].style.animation = 'onBottomOneSlide 1.5s forwards'
        divTwo.style.animation = 'down 1.5s forwards'
        divThree.style.animation = 'down 1.5s forwards'   
        for(let i = 0 ; i < 3 ; i++){
            cards[i].removeChild(expandBtns[i]);
        }
        myFig1.classList.remove('hovered')
        clickOne = 1
        for(let i = 0 ; i < 2 ; i++){
            btns[i].addEventListener('click', e => {
                timedOne = 1;
                setTimeout(() => {
                    one[0].style.animation = 'onTop 9s 1.5s ease infinite'
                    two[0].style.animation = 'onMiddle 9s 1.5s ease infinite'
                    three[0].style.animation = 'onBottom 9s 1.5s ease infinite'
                }, 1500);
                one[0].style.animation = 'onTopOneSlideBack 1.5s forwards'
                two[0].style.animation = 'onMiddleOneSlideBack 1.5s forwards'
                three[0].style.animation = 'onBottomOneSlideBack 1.5s forwards'
                divTwo.style.animation = 'up 1.5s forwards'
                divThree.style.animation = 'up 1.5s forwards'
                clickOne = 0;
            })
        }
        setTimeout(() => {
            if(timedOne === 0){
                setTimeout(() => {
                    one[0].style.animation = 'onTop 9s 1.5s ease infinite'
                    two[0].style.animation = 'onMiddle 9s 1.5s ease infinite'
                    three[0].style.animation = 'onBottom 9s 1.5s ease infinite'
                }, 1500);
                one[0].style.animation = 'onTopOneSlideBack 1.5s forwards'
                two[0].style.animation = 'onMiddleOneSlideBack 1.5s forwards'
                three[0].style.animation = 'onBottomOneSlideBack 1.5s forwards'
                divTwo.style.animation = 'up 1.5s forwards'
                divThree.style.animation = 'up 1.5s forwards'
                clickOne = 0;
            }
        }, 15000);
    })
}

for(let k = 0 ; k < 3 ; k++){
    cards[k].addEventListener('mouseenter', e => {
        if(clickOne === 1){
            cards[k].classList.add('hovered')
            cards[k].appendChild(modalBtns[k])
        }
    })
    cards[k].addEventListener('mouseleave', e => {
        if(clickOne === 1){
            cards[k].classList.remove('hovered')
            cards[k].removeChild(modalBtns[k])
        }
    })
}


let clickTwo = 0 ;
let timedTwo = 0;

myFig2.addEventListener('mouseenter', e => {
    if(clickTwo === 0){
        myFig2.classList.add('hovered')
        for(let i = 3 ; i < 6 ; i++){
            cards[i].appendChild(expandBtns[i]);
        }
    }
})
myFig2.addEventListener('mouseleave', e => {
    myFig2.classList.remove('hovered')
    for(let i = 3 ; i < 6 ; i++){
        cards[i].removeChild(expandBtns[i]);
    }
})
for(let j = 3 ; j < 6 ; j++){
    expandBtns[j].addEventListener('click', e => {
        timedTwo = 0;
        one[1].style.animation = 'onTopTwoSlide 1.5s forwards'
        two[1].style.animation = 'onMiddleTwoSlide 1.5s forwards'
        three[1].style.animation = 'onBottomTwoSlide 1.5s forwards'
        divOne.style.animation = 'down 1.5s forwards'
        divThree.style.animation = 'down 1.5s forwards'   
        for(let i = 3 ; i < 6 ; i++){
            cards[i].removeChild(expandBtns[i]);
        }
        myFig2.classList.remove('hovered')
        clickTwo = 1
        for(let i = 0 ; i < 2 ; i++){
            btns[i].addEventListener('click', e => {
                timedTwo = 1
                setTimeout(() => {
                    one[1].style.animation = 'onTop 9s 1.5s ease infinite'
                    two[1].style.animation = 'onMiddle 9s 1.5s ease infinite'
                    three[1].style.animation = 'onBottom 9s 1.5s ease infinite'
                }, 1500);
                one[1].style.animation = 'onTopTwoSlideBack 1.5s forwards'
                two[1].style.animation = 'onMiddleTwoSlideBack 1.5s forwards'
                three[1].style.animation = 'onBottomTwoSlideBack 1.5s forwards'
                divOne.style.animation = 'up 1.5s forwards'
                divThree.style.animation = 'up 1.5s forwards'
                clickTwo = 0;
            })
        }
        setTimeout(() => {
            if(timedTwo === 0){
                setTimeout(() => {
                    one[1].style.animation = 'onTop 9s 1.5s ease infinite'
                    two[1].style.animation = 'onMiddle 9s 1.5s ease infinite'
                    three[1].style.animation = 'onBottom 9s 1.5s ease infinite'
                }, 1500);
                one[1].style.animation = 'onTopTwoSlideBack 1.5s forwards'
                two[1].style.animation = 'onMiddleTwoSlideBack 1.5s forwards'
                three[1].style.animation = 'onBottomTwoSlideBack 1.5s forwards'
                divOne.style.animation = 'up 1.5s forwards'
                divThree.style.animation = 'up 1.5s forwards'
                clickTwo = 0;
            }
        }, 15000);
    })
}

for(let k = 3 ; k < 6 ; k++){
    cards[k].addEventListener('mouseenter', e => {
        if(clickTwo === 1){
            cards[k].classList.add('hovered')
            cards[k].appendChild(modalBtns[k])
        }
    })
    cards[k].addEventListener('mouseleave', e => {
        if(clickTwo === 1){
            cards[k].classList.remove('hovered')
            cards[k].removeChild(modalBtns[k])
        }
    })
}

let clickThree = 0 ;
let timedThree = 0;

myFig3.addEventListener('mouseenter', e => {
    if(clickThree === 0){
        myFig3.classList.add('hovered')
        for(let i = 6 ; i < 9 ; i++){
            cards[i].appendChild(expandBtns[i]);
        }
    }
})
myFig3.addEventListener('mouseleave', e => {
    myFig3.classList.remove('hovered')
    for(let i = 6 ; i < 9 ; i++){
        cards[i].removeChild(expandBtns[i]);
    }
})
for(let j = 6 ; j < 9 ; j++){
    expandBtns[j].addEventListener('click', e => {
        timedThree = 0;
        one[2].style.animation = 'onTopThreeSlide 1.5s forwards'
        two[2].style.animation = 'onMiddleThreeSlide 1.5s forwards'
        three[2].style.animation = 'onBottomThreeSlide 1.5s forwards'
        divOne.style.animation = 'down 1.5s forwards'
        divTwo.style.animation = 'down 1.5s forwards'   
        for(let i = 6 ; i < 9 ; i++){
            cards[i].removeChild(expandBtns[i]);
        }
        myFig3.classList.remove('hovered')
        clickThree = 1
        for(let i = 0 ; i < 2 ; i++){
            btns[i].addEventListener('click', e => {
                timedThree = 1;
                setTimeout(() => {
                    one[2].style.animation = 'onTop 9s 1.5s ease infinite'
                    two[2].style.animation = 'onMiddle 9s 1.5s ease infinite'
                    three[2].style.animation = 'onBottom 9s 1.5s ease infinite'
                }, 1500);
                one[2].style.animation = 'onTopThreeSlideBack 1.5s forwards'
                two[2].style.animation = 'onMiddleThreeSlideBack 1.5s forwards'
                three[2].style.animation = 'onBottomThreeSlideBack 1.5s forwards'
                divTwo.style.animation = 'up 1.5s forwards'
                divOne.style.animation = 'up 1.5s forwards'
                clickThree = 0;
            })
        }
        setTimeout(() => {
            if(timedThree === 0){
                setTimeout(() => {
                    one[2].style.animation = 'onTop 9s 1.5s ease infinite'
                    two[2].style.animation = 'onMiddle 9s 1.5s ease infinite'
                    three[2].style.animation = 'onBottom 9s 1.5s ease infinite'
                }, 1500);
                one[2].style.animation = 'onTopThreeSlideBack 1.5s forwards'
                two[2].style.animation = 'onMiddleThreeSlideBack 1.5s forwards'
                three[2].style.animation = 'onBottomThreeSlideBack 1.5s forwards'
                divTwo.style.animation = 'up 1.5s forwards'
                divOne.style.animation = 'up 1.5s forwards'
                clickThree = 0;
            }
        }, 15000);
    })
}

for(let k = 6 ; k < 9 ; k++){
    cards[k].addEventListener('mouseenter', e => {
        if(clickThree === 1){
            cards[k].classList.add('hovered')
            cards[k].appendChild(modalBtns[k])
        }
    })
    cards[k].addEventListener('mouseleave', e => {
        if(clickThree === 1){
            cards[k].classList.remove('hovered')
            cards[k].removeChild(modalBtns[k])
        }
    })
}
