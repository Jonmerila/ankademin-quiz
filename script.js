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
        
    }
];

let rightArr = [];
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
nxtBtn.setAttribute("id", "answerNxt");
nxtBtn.value = "Next";

const answerAll = document.querySelectorAll("[id^=answer]");
console.log(answerAll);

    
answerAll.forEach(btn => {
    if(btn.type === "button") {
        btn.addEventListener("click", (event) => createQuestion(event.target) );
    }
});

const submitQuiz = (arr) => {
    
    const subBtn = document.createElement("button");
    subBtn.textContent = "Submit";
    subAnswers.append(subBtn);
    console.log(arr);
    console.log("done");

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
    console.log("btn is: " + btn);
    let nodeArray = [];
    const prevQuestion = questions[currentQuestIndex -1];
    const prevAnswer = prevQuestion.ans;
    if(btn instanceof NodeList){
        btn.forEach((elem) => {
            nodeArray.push(elem.id);
        })
        // console.log("Right nodelist shit");
            // console.log(prevQuestion.question);
            
            
            if(nodeArray.toString() === prevAnswer.toString()) {
                console.log("you fucken did it");
                rightAnswers++;
                
                return;
            } else {
                console.log("Wrong " + nodeArray + " The answer was " + prevAnswer);
                console.log(nodeArray, prevAnswer)
            }
            return;
        
    }

    if(btn !== undefined) {
        
        const ans = btn.id;
        console.log("Correct: " + prevAnswer, "Your ans: "+ btn.id);
        if(ans === prevAnswer) {
            console.log("Right");
            console.log(prevQuestion.question);
            rightArr.push(prevQuestion.question);
            rightAnswers++;
            console.log(rightArr);
        } else {
            console.log("Wrong");
        }
        return;
    }
    if(btn.id === "answerNxt") {
        btn.forEach((elem) => {
            console.log("Your nodelist: " + elem);
        })
        return;
    }
    
    
}


startQ.addEventListener("click", () => {
    startQ.remove();
    createQuestion();
})

let createQuestion = (btn) => {
    if(currentQuestIndex >= questions.length) {
        answerSheet.remove();
        questTitle.textContent = "Well done! Lets see your results.";
        submitQuiz(rightArr);
        return;
    }

    const currentQuest = questions[currentQuestIndex];
    const correctAnswerBtn = currentQuest.ans;
    //gör en prev question type variabel
    console.log("First btn log " + btn);
    // correction(btn);



    if(btn === undefined) {
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
        answerSheet.append(answerA,answerB, answerC, answerD);
        
        
    } else {
        console.log("continue");
        if(currentQuest.type === "btnAns"){
            answerAll.forEach((button) => {
                if(button.getAttribute("type") === "checkbox"){
                    button.setAttribute("type", "button");
                    console.log("buttons set");

                }
            });

        }
        if(currentQuest.type === "checkAns") { 
            console.log("Check type");
            
            //Varför kan inte append till answerSheet??
            quizContainer.innerHTML ="";
            answerAll.forEach((button) => {
                // button.setAttribute("type", "checkbox");
                
                const checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                checkBox.setAttribute("id", button.id);
                console.log(answerSheet);
                quizContainer.append(checkBox);
                quizContainer.append(nxtBtn);
                
                
                
                
            });
            nxtBtn.addEventListener("click", (event) => {
                const checkedAns = document.querySelectorAll("input[type='checkbox']:checked");
                // checkedAns.forEach((box) => {
                //     correction(box.id);
                // })
                console.log(checkedAns.id);
                correction(checkedAns);
                createQuestion(nxtBtn);
                nxtBtn.remove();

            })
            // nxtBtn.addEventListener("click", (event) => {
            //     createQuestion(event.target);
            //     nxtBtn.remove();
            // });
            
            
            
        }
    
        
        answerSheet.innerHTML ="";
        answerSheet.append(answerA,answerB, answerC, answerD);
        questTitle.innerText = currentQuest.question;
        answerA.value = currentQuest.alt.answerA;
        answerB.value = currentQuest.alt.answerB;
        answerC.value = currentQuest.alt.answerC;
        answerD.value = currentQuest.alt.answerD;
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

