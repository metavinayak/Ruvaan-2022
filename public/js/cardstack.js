const events = [
    {
        title: "Recon",
        content:
            "Opinions are the two facets of one story that roils you up, while some stories become cherishable others become your nightmare. One has to choose either side at some point in life.\nThe angel and devil on either side of your shoulders challenge you to get ready to enter into the battle arena of opinions but remember, you are the obstacle and your own companion. Inspired by celebrated movies, anime, series and real-life topics find your way to victory.",
        image: "",
    },
    {
        title: "Twist a Tale",
        content:
            "Everyone has a story to tell, but with the stories, comes unpredictable twists and turns. On this note, Twist a Tale welcomes you into the world of tales where you need to bend your storylines to the will of the prophets.\nPrepare for a challenge, hold up your pens and be ready to exhibit your ingenious imagination while you artfully endeavour to incorporate the unexpected twists in your tale. Be ready to experience the magical journey of words, metaphors, emotions and…TWISTS!",
        image: "",
    },
    {
        title: "Review Your Favourites",
        content:
            "Are you a critic or an admirer?\nDo you think a piece of literature deserves to be praised to high heaven and placed on an altar, or be buried underground six feet deep so its horrendous presence shouldn't see the light of day?\nWell, we have got you covered. Be a part of this amazing online event where you would get a chance to review your favourite movies, books, songs, TV series and even yourself or any other media of your own choice.",
        image: "",
    },
    {
        title: "MUN",
        content:
            "Human history has shared a common destiny. But, over the years geopolitical realities brought whole new ambitions, motives and tactics. United Nations brought significant changes to the world from its commencement.\nThe legacy continues as delegates would forge meaningful alliances, plan strategic solutions to the most pressing question for humanity to overcome while maintaining your nation’s self-interests. Find out if you are a cut above the rest at this edition of  IIT Mandi Model United Nations.",
        image: "",
    },
    {
        title: "Poetry Slam",
        content:
            "Poetry is introspection, destruction and renaissance of words and emotions. Voice is a shuttle to convey those emotions to the audience. Together, they open a window to the poet's soul and give us a glimpse of their encounter.\nCreate a composition with your vibrantly coloured words, give life to those words with your artistic voice and paint a masterpiece to be heard by the masses.",
        image: "",
    },
    {
        title: "General Quiz",
        content:
            "Everyone knows who landed on the moon first, but do you know their space module remained on the moon's surface for 21hrs and 36 minutes. Are you a facts geek who likes to peruse through all the sections of a newspaper?\nDoes your knowledge run deep and wide into the fields of sports, history, politics, geography, economy, music and much more? We have got you covered. This is your chance to exhibit your profound general knowledge at IIT Mandi’s General Quiz.",
        image: "",
    },
    {
        title: "Stand-Up Comedy",
        content:
            "In these tough times amidst the global pandemic, we must not forget the age-old golden saying, 'laughter is the best medicine'! And what better way could there possibly be to overdose ourselves with jokes than with some witty stand-up comedy?\nIf you are an aspiring comedian who dreams to have an entire hall of audience laugh uproariously at one of your jokes, or just a self-proclaimed class clown, this is your chance to hit the ground running. Show us that your way with words can tickle the masses into catching their breaths and stand a chance to be the funniest of ‘em all!",
        image: "",
    },
    {
        title: "Biggest Liar",
        content:
            "Remember that one time when you completely forgot about the assignment’s deadline and had to convince your professor that you were umm…sick!\nWe shall be honest this one last time. Humans Lie. That’s a fact.  But, do you possess the silver tongue to spin a perfect web of lies and bluffs? Do you have the persuasive skills to make all other fibsters believe in your flawlessly fabricated falsehood? This is your opportunity to exhibit your unsung talents of deception, coaxing and yes, lying!",
        image: "",
    },
    {
        title: "Literary Quiz",
        content:
            "Are you a Potterhead? Or perhaps you’re into Indian authors like Amish or Amitav? Possibly you are intrigued by the likes of Saki or Gulzar?  Whatever may be your go-to genre, one thing we all would agree to is that nothing beats a Sunday afternoon snuck under a cosy blanket with a good read to keep you company\nSo fellow bookworms, the time has come for you to reveal the gazillion titles you have chewed upon for how there could be a literature fest without a contest to gauge your literary knowledge!",
        image: "",
    },
    {
        title: "Secret Event",
        content:
            "A life sans suspense is just like a meal sans spice.\nSo, to put the salt and pepper on the table, we present to you a special event full of fun and frolic that will surely keep you entertained. The number of extravagant games that encompasses this spotlight show surely deserves a long drum roll.\nBut what is it exactly? Only time shall hold its testament.\nSo if you are ready to put your creativity to the test and trust your literary skills, if you are up for the challenge, then tune in and be a part of the mystery. Shush…",
        image: "",
    },
    {
        title: "Meme Wars",
        content:
            "Food to eat, air to breathe, and a couple of memes on your feed.\nThere is absolutely no denying that Gen-Z and memes go hand in hand. But as much as we appreciate these tidbits of escapism, we often overlook how tedious of a task making a solid meme is.\nMemers, war has been declared! \nProve your mettle in the battlefield of peak comedy as you pave your way up to be the meme lord with the help of the laughs and likes from the crowd that you keep coming.",
        image: "",
    },
    {
        title: "Fan-Fiction",
        content:
            "What if you could play with the strings of destiny and reverse the tragic deaths in Game of Thrones? What if it was someone else that wielded the infinity gauntlet in Endgame? What if Deku never obtained a quirk and embarked on the dark path of becoming a villain?\nIf you are an avid reader of fiction or a cinephile, it is no secret that thoughts of different narratives in the story engulf you and you can't help but wonder sometimes, what if...\nNow is the time to let your imagination flow seamlessly and weave those thoughts into words. Whatever it may be, a new character arc, unexpected twists, or story endings you dreamt of, we are sure it’s bound to leave the readers awed.",
        image: "",
    },
    {
        title: "Bazinga",
        content:
            "In our lives which are as hectic as that of a ‘Family Man’, a binge-watch session surely is a feast for us web-series admirers. Whether you are a fan of episodic sci-fi, love to see your adventure-fantasy games and novels come to life or have a thing for high school romances with mind-bending thriller plots, there is no denial that you are the ‘Harshad Mehta’ of web series. Ha, you bet!\nSo, Quiz it up as you fight in a battle royale of riddles, puzzles and questions on your favourite shows and stand a chance to grab your share of some Spanish mint. ",
        image: "",
    },
];

// console.log(events[5].content)

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
const body = document.querySelector("body");

let myFig1 = myFig[0];
let myFig2 = myFig[1];
let myFig3 = myFig[2];

const pause = function () {
    setTimeout(() => {
        for (let c of cards) {
            c.classList.add("paused");
        }
    }, 1500);
};
const resume = function () {
    for (let c of cards) {
        c.classList.remove("paused");
    }
};

function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

// for(let card of cards){
//     card.addEventListener('click',pause);
// }

// for(let b of btn){
//     b.addEventListener('click',resume);
// }

let clickOne = 0;
let timedOne = 0;

const expandBtns = document.querySelectorAll(".expandBtn");
const modalBtns = document.querySelectorAll(".modalBtn");

for (let i = 0; i < expandBtns.length; i++) {
    cards[i].removeChild(expandBtns[i]);
    cards[i].removeChild(modalBtns[i]);
}

myFig1.addEventListener("mouseenter", (e) => {
    if (clickOne === 0) {
        myFig1.classList.add("hovered");
        for (let i = 0; i < 3; i++) {
            cards[i].appendChild(expandBtns[i]);
        }
    }
});
myFig1.addEventListener("mouseleave", (e) => {
    myFig1.classList.remove("hovered");
    if (clickOne === 0) {
        for (let i = 0; i < 3; i++) {
            if (cards[i].children.length) {
                cards[i].removeChild(expandBtns[i]);
            }
        }
    }
});
for (let j = 0; j < 3; j++) {
    expandBtns[j].addEventListener("click", (e) => {
        timedOne = 0;
        if (getWidth() < 992) {
            one[0].style.animation = "mobileTopSlide 1.5s forwards";
            two[0].style.animation = "mobileMiddleSlide 1.5s forwards";
            three[0].style.animation = "mobileBottomSlide 1.5s forwards";
        } else {
            one[0].style.animation = "onTopOneSlide 1.5s forwards";
            two[0].style.animation = "onMiddleOneSlide 1.5s forwards";
            three[0].style.animation = "onBottomOneSlide 1.5s forwards";
        }

        divTwo.style.animation = "down 1.5s forwards";
        divThree.style.animation = "down 1.5s forwards";

        for (let i = 0; i < 3; i++) {
            cards[i].removeChild(expandBtns[i]);
        }
        myFig1.classList.remove("hovered");
        clickOne = 1;
        for (let i = 0; i < 2; i++) {
            btns[i].addEventListener("click", (e) => {
                timedOne = 1;
                setTimeout(() => {
                    one[0].style.animation = "onTop 9s 1.5s ease infinite";
                    two[0].style.animation = "onMiddle 9s 1.5s ease infinite";
                    three[0].style.animation = "onBottom 9s 1.5s ease infinite";
                }, 1500);

                if (getWidth() < 992) {
                    one[0].style.animation = "mobileTopSlideBack 1.5s forwards";
                    two[0].style.animation =
                        "mobileMiddleSlideBack 1.5s forwards";
                    three[0].style.animation =
                        "mobileBottomSlideBack 1.5s forwards";
                } else {
                    one[0].style.animation = "onTopOneSlideBack 1.5s forwards";
                    two[0].style.animation =
                        "onMiddleOneSlideBack 1.5s forwards";
                    three[0].style.animation =
                        "onBottomOneSlideBack 1.5s forwards";
                }
                setTimeout(() => {}, 1500);
                divTwo.style.animation = "up 1.5s forwards";
                divThree.style.animation = "up 1.5s forwards";
                clickOne = 0;
            });
        }
        setTimeout(() => {
            if (timedOne === 0) {
                setTimeout(() => {
                    one[0].style.animation = "onTop 9s 1.5s ease infinite";
                    two[0].style.animation = "onMiddle 9s 1.5s ease infinite";
                    three[0].style.animation = "onBottom 9s 1.5s ease infinite";
                }, 1500);

                if (getWidth() < 992) {
                    one[0].style.animation = "mobileTopSlideBack 1.5s forwards";
                    two[0].style.animation =
                        "mobileMiddleSlideBack 1.5s forwards";
                    three[0].style.animation =
                        "mobileBottomSlideBack 1.5s forwards";
                } else {
                    one[0].style.animation = "onTopOneSlideBack 1.5s forwards";
                    two[0].style.animation =
                        "onMiddleOneSlideBack 1.5s forwards";
                    three[0].style.animation =
                        "onBottomOneSlideBack 1.5s forwards";
                }
                setTimeout(() => {}, 1500);
                divTwo.style.animation = "up 1.5s forwards";
                divThree.style.animation = "up 1.5s forwards";
                clickOne = 0;
            }
        }, 15000);
    });
}

for (let k = 0; k < 3; k++) {
    cards[k].addEventListener("mouseenter", (e) => {
        if (clickOne === 1) {
            cards[k].classList.add("hovered");
            cards[k].appendChild(modalBtns[k]);
        }
    });
    cards[k].addEventListener("mouseleave", (e) => {
        if (clickOne === 1) {
            cards[k].classList.remove("hovered");
            cards[k].removeChild(modalBtns[k]);
        }
    });
}

let clickTwo = 0;
let timedTwo = 0;

myFig2.addEventListener("mouseenter", (e) => {
    if (clickTwo === 0) {
        myFig2.classList.add("hovered");
        for (let i = 3; i < 6; i++) {
            cards[i].appendChild(expandBtns[i]);
        }
    }
});
myFig2.addEventListener("mouseleave", (e) => {
    myFig2.classList.remove("hovered");
    for (let i = 3; i < 6; i++) {
        if (cards[i].children.length) {
            cards[i].removeChild(expandBtns[i]);
        }
    }
});
for (let j = 3; j < 6; j++) {
    expandBtns[j].addEventListener("click", (e) => {
        timedTwo = 0;
        if (getWidth() < 992) {
            one[1].style.animation = "mobileTopSlide 1.5s forwards";
            two[1].style.animation = "mobileMiddleSlide 1.5s forwards";
            three[1].style.animation = "mobileBottomSlide 1.5s forwards";
        } else {
            one[1].style.animation = "onTopTwoSlide 1.5s forwards";
            two[1].style.animation = "onMiddleTwoSlide 1.5s forwards";
            three[1].style.animation = "onBottomTwoSlide 1.5s forwards";
            divOne.style.animation = "down 1.5s forwards";
        }
        divThree.style.animation = "down 1.5s forwards";

        for (let i = 3; i < 6; i++) {
            cards[i].removeChild(expandBtns[i]);
        }
        myFig2.classList.remove("hovered");
        clickTwo = 1;
        for (let i = 0; i < 2; i++) {
            btns[i].addEventListener("click", (e) => {
                timedTwo = 1;
                setTimeout(() => {
                    one[1].style.animation = "onTop 9s 1.5s ease infinite";
                    two[1].style.animation = "onMiddle 9s 1.5s ease infinite";
                    three[1].style.animation = "onBottom 9s 1.5s ease infinite";
                }, 1500);

                if (getWidth() < 992) {
                    one[1].style.animation = "mobileTopSlideBack 1.5s forwards";
                    two[1].style.animation =
                        "mobileMiddleSlideBack 1.5s forwards";
                    three[1].style.animation =
                        "mobileBottomSlideBack 1.5s forwards";
                } else {
                    one[1].style.animation = "onTopTwoSlideBack 1.5s forwards";
                    two[1].style.animation =
                        "onMiddleTwoSlideBack 1.5s forwards";
                    three[1].style.animation =
                        "onBottomTwoSlideBack 1.5s forwards";
                    divOne.style.animation = "up 1.5s forwards";
                }
                setTimeout(() => {}, 1500);
                divThree.style.animation = "up 1.5s forwards";
                clickTwo = 0;
            });
        }
        setTimeout(() => {
            if (timedTwo === 0) {
                setTimeout(() => {
                    one[1].style.animation = "onTop 9s 1.5s ease infinite";
                    two[1].style.animation = "onMiddle 9s 1.5s ease infinite";
                    three[1].style.animation = "onBottom 9s 1.5s ease infinite";
                }, 1500);
                if (getWidth() < 992) {
                    one[1].style.animation = "mobileTopSlideBack 1.5s forwards";
                    two[1].style.animation =
                        "mobileMiddleSlideBack 1.5s forwards";
                    three[1].style.animation =
                        "mobileBottomSlideBack 1.5s forwards";
                } else {
                    one[1].style.animation = "onTopTwoSlideBack 1.5s forwards";
                    two[1].style.animation =
                        "onMiddleTwoSlideBack 1.5s forwards";
                    three[1].style.animation =
                        "onBottomTwoSlideBack 1.5s forwards";
                    divOne.style.animation = "up 1.5s forwards";
                }
                setTimeout(() => {}, 1500);
                divThree.style.animation = "up 1.5s forwards";
                clickTwo = 0;
            }
        }, 15000);
    });
}

for (let k = 3; k < 6; k++) {
    cards[k].addEventListener("mouseenter", (e) => {
        if (clickTwo === 1) {
            cards[k].classList.add("hovered");
            cards[k].appendChild(modalBtns[k]);
        }
    });
    cards[k].addEventListener("mouseleave", (e) => {
        if (clickTwo === 1) {
            cards[k].classList.remove("hovered");
            cards[k].removeChild(modalBtns[k]);
        }
    });
}

let clickThree = 0;
let timedThree = 0;

myFig3.addEventListener("mouseenter", (e) => {
    if (clickThree === 0) {
        myFig3.classList.add("hovered");
        for (let i = 6; i < 9; i++) {
            cards[i].appendChild(expandBtns[i]);
        }
    }
});
myFig3.addEventListener("mouseleave", (e) => {
    myFig3.classList.remove("hovered");
    for (let i = 6; i < 9; i++) {
        if (cards[i].children.length) {
            cards[i].removeChild(expandBtns[i]);
        }
    }
});
for (let j = 6; j < 9; j++) {
    expandBtns[j].addEventListener("click", (e) => {
        timedThree = 0;
        if (getWidth() < 992) {
            body.classList.add("heightMob");
            one[2].style.animation = "mobileTopSlide 1.5s forwards";
            two[2].style.animation = "mobileMiddleSlide 1.5s forwards";
            three[2].style.animation = "mobileBottomSlide 1.5s forwards";
        } else {
            one[2].style.animation = "onTopThreeSlide 1.5s forwards";
            two[2].style.animation = "onMiddleThreeSlide 1.5s forwards";
            three[2].style.animation = "onBottomThreeSlide 1.5s forwards";
            divOne.style.animation = "down 1.5s forwards";
            divTwo.style.animation = "down 1.5s forwards";
        }

        for (let i = 6; i < 9; i++) {
            cards[i].removeChild(expandBtns[i]);
        }
        myFig3.classList.remove("hovered");
        clickThree = 1;
        for (let i = 0; i < 2; i++) {
            btns[i].addEventListener("click", (e) => {
                timedThree = 1;
                setTimeout(() => {
                    one[2].style.animation = "onTop 9s 1.5s ease infinite";
                    two[2].style.animation = "onMiddle 9s 1.5s ease infinite";
                    three[2].style.animation = "onBottom 9s 1.5s ease infinite";
                }, 1500);
                if (getWidth() < 992) {
                    one[2].style.animation = "mobileTopSlideBack 1.5s forwards";
                    two[2].style.animation =
                        "mobileMiddleSlideBack 1.5s forwards";
                    three[2].style.animation =
                        "mobileBottomSlideBack 1.5s forwards";
                    body.classList.remove("heightMob");
                } else {
                    one[2].style.animation =
                        "onTopThreeSlideBack 1.5s forwards";
                    two[2].style.animation =
                        "onMiddleThreeSlideBack 1.5s forwards";
                    three[2].style.animation =
                        "onBottomThreeSlideBack 1.5s forwards";
                    divTwo.style.animation = "up 1.5s forwards";
                    divOne.style.animation = "up 1.5s forwards";
                }
                setTimeout(() => {}, 1500);

                clickThree = 0;
            });
        }
        setTimeout(() => {
            if (timedThree === 0) {
                setTimeout(() => {
                    one[2].style.animation = "onTop 9s 1.5s ease infinite";
                    two[2].style.animation = "onMiddle 9s 1.5s ease infinite";
                    three[2].style.animation = "onBottom 9s 1.5s ease infinite";
                }, 1500);
                if (getWidth() < 992) {
                    one[2].style.animation = "mobileTopSlideBack 1.5s forwards";
                    two[2].style.animation =
                        "mobileMiddleSlideBack 1.5s forwards";
                    three[2].style.animation =
                        "mobileBottomSlideBack 1.5s forwards";
                    body.classList.remove("heightMob");
                } else {
                    one[2].style.animation =
                        "onTopThreeSlideBack 1.5s forwards";
                    two[2].style.animation =
                        "onMiddleThreeSlideBack 1.5s forwards";
                    three[2].style.animation =
                        "onBottomThreeSlideBack 1.5s forwards";
                    divTwo.style.animation = "up 1.5s forwards";
                    divOne.style.animation = "up 1.5s forwards";
                }
                setTimeout(() => {}, 1500);
                clickThree = 0;
            }
        }, 15000);
    });
}

for (let k = 6; k < 9; k++) {
    cards[k].addEventListener("mouseenter", (e) => {
        if (clickThree === 1) {
            cards[k].classList.add("hovered");
            cards[k].appendChild(modalBtns[k]);
        }
    });
    cards[k].addEventListener("mouseleave", (e) => {
        if (clickThree === 1) {
            cards[k].classList.remove("hovered");
            cards[k].removeChild(modalBtns[k]);
        }
    });
}
