const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");
const answerSheet = document.querySelector(".answerSheet");
const quizContainer = document.querySelector(".container");
const questionPresenter = document.querySelector(".questionTitle");


const quizAnswerSheet = [["answerA"], ["answerB", "answerC"]];


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
        type: "btnAns",
        alt: {
            answerA: "Not here",
            answerB: "Not here",
            answerC: "Here",
            answerD: "Here"
            
        },
        ans: "answerC",
        
    },
];

let currentQuestIndex = 0;
const questTitle = document.createElement("h2");
questTitle.textContent = "Start your quiz!";
questionPresenter.append(questTitle);
const startQ = document.querySelector("#startQuiz");


    const currentQuest = questions[currentQuestIndex];

    
    // const answerA = document.createElement("button");
    answerA.innerText = "Start Quiz!";
    // answerA.setAttribute("id", "answerA");
    
    
    // const answerB = document.createElement("button");
    answerB.innerText = "Answer B";
    // answerB.setAttribute("id", "answerB");
    
    
    // const answerC = document.createElement("button");
    answerC.innerText = "Answer C";
    // answerC.setAttribute("id", "answerC");

    // const answerD = document.createElement("button");
    answerD.innerText = "Answer D";
    // answerD.setAttribute("id", "answerD");

    answerSheet.append(answerA);
    
    
    const answerAll = document.querySelectorAll("button[id^=answer]");
    
    answerAll.forEach(btn => {
        btn.addEventListener("click", event => {
            
            const currentQuest = questions[currentQuestIndex];
            answerB.classList.remove("hide");
            currentQuest.alt.C && answerC.classList.remove("hide");
            currentQuest.alt.answerD && answerD.classList.remove("hide")
            
            answerSheet.innerHTML ="";
            answerSheet.append(answerA,answerB, answerC, answerD);
            
            
            questTitle.innerText = "";
            questTitle.innerText = currentQuest.question;

    
            questTitle.innerText = "";
            questTitle.innerText = currentQuest.question;
            answerA.innerText = currentQuest.alt.answerA;
            answerB.textContent = currentQuest.alt.answerB;
            answerC.textContent = currentQuest.alt.answerC;
            answerD.textContent = currentQuest.alt.answerD;
            const answerButtons = [answerA, answerB, answerC, answerD];
            
            answerButtons.forEach((button, index) => {
                const answerKey = `answer${String.fromCharCode(65 + index)}`;
                const answerText = currentQuest.alt[answerKey];

                if(answerText) {
                    button.textContent = answerText;
                }
            })
            
            console.log(btn.id);
            if(currentQuestIndex < questions.length) {
                
                if(currentQuest.type === "btnAns"){
                    const correctAnswerBtn = currentQuest.ans;
                    console.log(correctAnswerBtn);
                    
                    if(btn.id === correctAnswerBtn) {
                        console.log("Right");
                    }
                    
                    
                    
                    
                    answerA.innerText = currentQuest.alt.answerA;
                    console.log(currentQuest.question);
                }
                
                if(currentQuest.type === "checkAns") {
                    
                }
                
                
                currentQuestIndex++;
            }
            
            
        
        });
    });










let currentAnswerIndex = 0;




                    // for(let i=0; i<numOfKeys; i++) {
                    //     if(numOfKeys > ansOptions.length){
                    //         answer[i].innerText = 
                    //         console.log(currentQuest.ans[i]);
                    //     }
                    // }

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




 // Question 1 körs och question countern börjar på 1, 
 //när ett svar ges så blir det answer++ och nästa fråga körs.
 //När nästa fråga ställs så ska logiken gå igenom answer varibeln och kolla
 //värdet och sedan kolla om answer index stämmer rätt med answerSheet arrayen.

