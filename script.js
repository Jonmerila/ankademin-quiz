const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");
const answerSheet = document.querySelector(".answerSheet");
const quizContainer = document.querySelector(".container");
const questionPresenter = document.querySelector(".questionTitle");
const subAnswers = document.querySelector(".submit-answers");


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
const startQ = document.querySelector("#startQuiz");
let rightAnswers = 0;

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
    
    let currentAnswerIndex = 0;
    const answerAll = document.querySelectorAll("[id^=answer]");
    

    




    
    answerAll.forEach(btn => {
        btn.addEventListener("click", event => {

            if(currentQuestIndex >= questions.length) {
                answerSheet.remove();
                questTitle.textContent = "Well done! Lets see your results."
                submitQuiz();
                return;
            }
            
            const currentQuest = questions[currentQuestIndex];
            const correctAnswerBtn = currentQuest.ans;
            // console.log(currentQuest.type);
            
            if(currentQuestIndex < questions.length) {
                
                if(currentQuest.type === "btnAns"){
                    // console.log(correctAnswerBtn);
                    answerA.innerText = currentQuest.alt.answerA;
                    // console.log(currentQuest.question);
                }
                if(currentQuest.type === "checkAns") {
                    
                }
                currentQuestIndex++;
            }

            // console.log("alt button " + btn.id);
            

            answerB.classList.remove("hide");
            answerC.textContent = "";

            currentQuest.alt.answerC ? answerC.classList.remove("hide") : answerC.classList.add("hide");
            currentQuest.alt.answerD ? answerD.classList.remove("hide"): answerD.classList.add("hide");
            
            answerSheet.innerHTML ="";
            answerSheet.append(answerA,answerB, answerC, answerD);
            
            
            questTitle.innerText = "";
            questTitle.innerText = currentQuest.question;

    
            questTitle.innerText = "";
            questTitle.innerText = currentQuest.question;
            answerA.value = currentQuest.alt.answerA;
            answerB.value = currentQuest.alt.answerB;
            answerC.value = currentQuest.alt.answerC;
            answerD.value = currentQuest.alt.answerD;
            const answerButtons = [answerA, answerB, answerC, answerD];
                    
            if(event.target === correctAnswerBtn) {
                console.log("Right");
                console.log(currentQuest.question);
                rightArr.push(currentQuest.question);
                rightAnswers++;
            }
            
            console.log(rightArr);
        });
        
    });

    



    const submitQuiz = () => {
    
        const subBtn = document.createElement("button");
        subBtn.textContent = "Submit";
        subAnswers.append(subBtn);

        subBtn.addEventListener("click", () => {
            questions.forEach((quest) => {
            
                ansPara = document.createElement("h3");
                ansPara.textContent = quest.question;
        
                rightArr.includes(quest.question) && ansPara.style.color === "green";
                subAnswers.innerHTML = "";
                subAnswers.append(ansPara);
            })
        })
        
        
    }







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

