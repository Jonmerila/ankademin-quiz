const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

const answerSheet = document.querySelector(".answerSheet");
const quizContainer = document.querySelector(".container");
const questionPresenter = document.querySelector(".questionTitle");
const subAnswers = document.querySelector(".submit-answers");


const questions = [
    {
        question: "1: How many states are there in U.S.A?",
        type: "btnAns",
        alt: {
            answerA: "1",
            answerB: "46",
            answerC: "50"
        },
        ans:"answerC"

    },
    {
        question: "2: How many arms do ducks have?",
        type: "btnAns",
        alt: {
            answerA: "3",
            answerB: "2",
            answerC: "Ducks don't have arms"
        },
        ans: "answerC"
        
    },
    {
        question: "3: Is frontend better than backend?",
        type: "btnAns",
        alt: {
            answerA: "Yes",
            answerB: "No",
            answerC: "I don't know"
        },
        ans: "answerA"
        
    },
    {
        question: "4: Check the boxes that are to the right:",
        type: "checkAns",
        alt: {
            answerA: "Not here",
            answerB: "Not here",
            answerC: "Here",
            answerD: "Here"
            
        },
        ans: ["answerC", "answerD"],
        
    },
    {
        question: "5: Hummingbirds can fly backwards",
        type: "btnAns",
        alt: {
            answerA: "True",
            answerB: "False",
            
        },
        ans: "answerA",
        
    },
    {
        question: "6: What is Floyd Mayweather most famous for?",
        type: "btnAns",
        alt: {
            answerA: "Singing",
            answerB: "Painting",
            answerC: "Terrorist",
            answerD: "Boxer"
            
        },
        ans: "answerD",
        
    },
    {
        question: "7: The Earth is flat.",
        alt: {
            answerA: "True",
            answerB: "False",
                
        },
        ans: "answerB",
        
    },
    {
        question: "8: Choose the planets that have 'rings' around them.",
        type: "checkAns",
        alt: {
            answerA: "Earth",
            answerB: "Saturn",
            answerC: "Uranus",
            answerD: "Mars"
            
        },
        ans: ["answerB", "answerC"],
        
    },
    {
        question: "9: Which planet in the solar system is known as the 'Red Planet'?",
        type: "btnAns",
        alt: {
            answerA: "Venus",
            answerB: "Jupiter",
            answerC: "Mars",
            answerD: "Saturn"
            
        },
        ans: "answerC",
        
    },
    {
        question: "10: Who was the first human to step on the moon?",
        type: "btnAns",
        alt: {
            answerA: "Buzz Aldrin",
            answerB: "Yuri Gagarin",
            answerC: "Harry Potter",
            answerD: "Neil Armstrong"
            
        },
        ans: "answerD",
        
    }
];

let rightArr = [];
const answerOptions = ["A", "B", "C", "D"];
let currentQuestIndex = 0;

const questTitle = document.createElement("h2");
questTitle.textContent = "Start your quiz!";
questionPresenter.append(questTitle);
const startQ = document.querySelector("#startQ");

let rightAnswers = 0;
let currentAnswerIndex = 0;
const currentQuest = questions[currentQuestIndex];
const nxtBtn = document.createElement("input");
nxtBtn.setAttribute("type", "button");
nxtBtn.setAttribute("id", "nextAns");
nxtBtn.value = "Next";

const answerAll = document.querySelectorAll("[id^=answer]");
// console.log(answerAll);

const createQ = (event) => {
    createQuestion(event.target)}

const eventListener = (btn) => {
    console.log("Function körs");
        // console.log(btn);
        if(btn.type === "button") {
            // console.log("Rätt typ, evlist körs");
            btn.addEventListener("click", createQ);
        }
}


// quizContainer.append(nxtBtn);
                
nxtBtn.addEventListener("click", (event) => {
    const checkedAns = document.querySelectorAll("input[type='checkbox']:checked");
    // checkedAns.forEach((box) => {
    //     correction(box.id);
    // })
    console.log("ans id is " + checkedAns);
    correction(checkedAns);
    checkedAns.forEach((box) => {
        box.checked = false;
    })

    answerSheet.innerHTML = "";
    createQuestion(nxtBtn);
    nxtBtn.remove();

});

const submitQuiz = (arr) => {

    const subBtn = document.createElement("button");
    subBtn.textContent = "Submit";
    subAnswers.append(subBtn);
    // console.log(arr);
    // console.log("done");

    subBtn.addEventListener("click", () => {
        subAnswers.innerHTML = "";

        questions.forEach((quest) => {
            ansPara = document.createElement("h3");
            ansPara.textContent = quest.question;
            rightArr.includes(quest.question) ? ansPara.style.color = "green" : ansPara.style.color = "red";
            subAnswers.append(ansPara);
        })
    })
        
}

const correction = (btn) => {
    if(btn === "startQ"){
        return;
    };
    // console.log("btn is: " + btn);
    let nodeArray = [];
    const prevQuestion = questions[currentQuestIndex -1];
    const prevAnswer = prevQuestion.ans;
    if(btn instanceof NodeList){
        btn.forEach((elem) => {
            nodeArray.push(elem.id);
        });
            
            if(nodeArray.toString() === prevAnswer.toString()) {
                rightArr.push(prevQuestion.question);
                rightAnswers++;
                
                return;
            } else {
                // console.log("Wrong " + nodeArray + " The answer was " + prevAnswer);
                // console.log(nodeArray, prevAnswer)
            }
            return;
        
    }

    if(btn !== undefined) {
        
        const ans = btn.id;
        // console.log("Correct: " + prevAnswer, "Your ans: "+ btn.id);
        if(ans === prevAnswer) {
            // console.log("Right");
            // console.log(prevQuestion.question);
            rightArr.push(prevQuestion.question);
            rightAnswers++;
            // console.log(rightArr);
        } else {
            // console.log("Wrong");
        }
        return;
    }
    if(btn.id === "nextAns") {
        btn.forEach((elem) => {
            // console.log("Your nodelist: " + elem);
        })
        return;
    }
    
    
}

const answerOpt = () => {
    answerOptions.forEach((option) => {
        const answerBtn = document.querySelector(`#answer${option}`);
        answerBtn.value = currentQuest.alt[`answer${option}`];
        answerBtn.addEventListener("click", createQ);
    });
}

startQ.addEventListener("click", () => {
    startQ.remove();
    createQuestion(startQ.id);
    return;
})

let createQuestion = (btn) => {
    console.log("question Created");
    correction(btn);
    if(currentQuestIndex >= questions.length) {
        answerSheet.remove();
        questTitle.textContent = "Well done! Lets see your results.";
        submitQuiz(rightArr);
        return;
    }
    // console.log("Quest index: " + currentQuestIndex + " question length: " + questions.length);
    
    const currentQuest = questions[currentQuestIndex];
    // console.log(currentQuest.question);
    const correctAnswerBtn = currentQuest.ans;
    //gör en prev question type variabel
    // console.log("First btn log " + btn);
    



    if(btn === "startQ") {
        console.log("Starting");
    
    

        if(currentQuest.type === "btnAns"){         
        }
        if(currentQuest.type === "checkAns"){    
        }
          


    
        answerA.classList.remove("hide");
        answerB.classList.remove("hide");

    
        
        
        questTitle.innerText = "";
        questTitle.innerText = currentQuest.question;
        answerA.value = currentQuest.alt.answerA;
        answerB.value = currentQuest.alt.answerB;
        answerC.value = currentQuest.alt.answerC;
        answerD.value = currentQuest.alt.answerD;
        answerSheet.innerHTML = "";
        answerSheet.append(answerA,answerB, answerC, answerD);
        answerA.addEventListener("click", createQ);
        answerB.addEventListener("click", createQ);
        answerC.addEventListener("click", createQ);
        answerD.addEventListener("click", createQ);
        //Loopa igenom, ge nytt värde och lägg till eventlistener
        //{`answer` + letter}
        answerOpt();
        
        
    } else {
        // console.log("continue", btn);
        if(currentQuest.type === "btnAns"){
            
            answerAll.forEach((elem) => {
                    elem.setAttribute("type", "button");
                    // console.log("buttons set");
                    elem.addEventListener("click", createQ);


            })
            answerSheet.append(answerA, answerB, answerC, answerD);
        }
        if(currentQuest.type === "checkAns") { 

            console.log("Check type");

            answerAll.forEach((button, index) => {
                button.removeEventListener("click", createQ);
                button.type = "checkbox";
            
                // const checkValue = document.createElement("label");
                // checkValue.htmlFor = button.id;
                // checkValue.textContent = currentQuest.alt["answerA"];
                

                    
                    const ansDiv = document.createElement("div");
                    const ansLabel = document.createElement("label");
                    ansLabel.textContent = currentQuest.alt[`answer${answerOptions[index]}`];
                    ansDiv.append(button, ansLabel);
                    answerSheet.append(ansDiv);
                // Clear answerSheet
                // answerSheet.append(checkValue);
                // answerSheet.innerHTML = "";
                // answerSheet.append(checkValue);
            });


            
            // button.setAttribute("type", "checkbox");
                // const checkBox = document.createElement("input");
                // checkBox.setAttribute("type", "checkbox");
                // checkBox.setAttribute("id", button.id);
                // console.log(answerSheet);
                // quizContainer.append(checkBox);
                quizContainer.append(nxtBtn);
                
            // nxtBtn.addEventListener("click", (event) => {
            //     const checkedAns = document.querySelectorAll("input[type='checkbox']:checked");
            //     // checkedAns.forEach((box) => {
            //     //     correction(box.id);
            //     // })
            //     console.log("ans id is " + checkedAns);
            //     correction(checkedAns);
            //     checkedAns.forEach((box) => {
            //         box.checked = false;
            //     })

            //     answerSheet.innerHTML = "";
            //     createQuestion(nxtBtn);
            //     nxtBtn.remove();

            // })
            // nxtBtn.addEventListener("click", (event) => {
            //     createQuestion(event.target);
            //     nxtBtn.remove();
            // });
            
            
            
        }
        // console.log("here now");
        // console.log(answerA.getAttribute("type"));
        // answerSheet.innerHTML ="";
        // answerSheet.append(answerA, answerB, answerC, answerD);
        questTitle.innerText = currentQuest.question;
        
        answerA.value = currentQuest.alt.answerA;

        answerB.value = currentQuest.alt.answerB;

        answerC.value = currentQuest.alt.answerC;

        answerD.value = currentQuest.alt.answerD;
        //kör event listener function
        
    }
    
    

    currentQuest.alt.answerC ? answerC.classList.remove("hide") : answerC.classList.add("hide");
    currentQuest.alt.answerD ? answerD.classList.remove("hide"): answerD.classList.add("hide");
    currentQuestIndex++;
}









                    // for(let i=0; i<numOfKeys; i++) {
                    //     if(numOfKeys > ansOptions.length){
                    //         answer[i].innerText = 
                    //         console.log(currentQuest.ans[i]);
                    //     }
                    // }
//console.log("kill me");
// answerAll.forEach(btn => {
//     btn.addEventListener('click', event => {
//         quizAnswerSheet.forEach((elem) => {
//             if(quizAnswerSheet[answerCount] === elem){
//                 console.log("Right");
//                 //Right answer function plays
//                 return;
//             } else {

//                 //Wrong answer function plays

//             }
//             answerCount++;
//        }) 
//     });
//  });




 // Question 1 körs och question countern börjar på 0, 
 //när ett svar ges så blir det answer++ och nästa fråga körs.
 //När nästa fråga ställs så ska logiken gå igenom answer varibeln och kolla
 //värdet och sedan kolla om answer index stämmer rätt med answerSheet arrayen.

