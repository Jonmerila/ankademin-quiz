const answerA = document.querySelector("#answerA");
const answerB = document.querySelector("#answerB");
const answerC = document.querySelector("#answerC");
const answerD = document.querySelector("#answerD");

const answerSheet = document.querySelector(".answerSheet");
const quizContainer = document.querySelector(".container");
const questionPresenter = document.querySelector(".questionTitle");
const subAnswers = document.querySelector(".submit-answers");
const printAns = document.querySelector(".print-ans");
const lowCircle = document.querySelector(".lower-circle");
const darkMode = document.querySelector("#dark");

const questions = [
    {
        question: "1: What is the critical Reynolds Number for the onset of turbulent flow during the re-entry of a spacecraft into Earth's atmosphere?",
        type: "btnAns",
        alt: {
            answerA: "1,000,000",
            answerB: "2,000,000",
            answerC: "The what"
        },
        ans:"answerB"

    },
    {
        question: "2: What would you find if you travelled to the centre of the solar system??",
        type: "btnAns",
        alt: {
            answerA: "The Earth",
            answerB: "The One Piece",
            answerC: "The Sun"
        },
        ans: "answerC"
        
    },
    {
        question: "3: What is the name of the force which keeps the planets in orbit around the sun??",
        type: "btnAns",
        alt: {
            answerA: "Gravity",
            answerB: "Superglue",
            answerC: "Electricity"
        },
        ans: "answerA"
        
    },
    {
        question: "4: Which two planets take less time than Earth to orbit the sun?:",
        type: "checkAns",
        alt: {
            answerA: "Earth",
            answerB: "Saturn",
            answerC: "Mercury",
            answerD: "Venus"
            
        },
        ans: ["answerC", "answerD"],
        
    },
    {
        question: "5: The approximate temperature on the sun is about 5,500 degrees celsius",
        type: "btnAns",
        alt: {
            answerA: "True",
            answerB: "False",
            
        },
        ans: "answerA",
        
    },
    {
        question: "6: Who discovered Uranus?",
        type: "btnAns",
        alt: {
            answerA: "Donald Duck",
            answerB: "Brandon",
            answerC: "Spongebob",
            answerD: "William Herschel"
            
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
        question: "8: Choose the two planets that have 'rings' around them.",
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

const darkModeFunc = () => {
    document.body.classList.toggle("dark");
    darkMode.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
}


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

const createQ = (event) => {createQuestion(event.target)}

const eventListener = (btn) => {
        if(btn.type === "button") {
            btn.addEventListener("click", createQ);
        }
}
         
nxtBtn.addEventListener("click", (event) => {
    const checkedAns = document.querySelectorAll("input[type='checkbox']:checked");
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

    subBtn.addEventListener("click", () => {
        subAnswers.innerHTML = "";
    printAns.classList.remove("hide");    
        questions.forEach((quest) => {
            ansPara = document.createElement("h3");
            ansPara.textContent = quest.question;
            rightArr.includes(quest.question) ? ansPara.style.color = "green" : ansPara.style.color = "red";
            printAns.append(ansPara);

            if(ansPara.style.color === "red"){
                const corrAnswer = document.createElement("p");
                if(Array.isArray(quest.ans)) {
                    corrAnswer.textContent += `Correct answers was `;
                    quest.ans.forEach((ans) => {
                        corrAnswer.textContent += `${ans}: ${quest.alt[ans]} `;
                    })
                } else {
                    corrAnswer.textContent = `Correct answer was ${quest.ans} : ${quest.alt[quest.ans]} `;
                }
                corrAnswer.style.color = "red";
                printAns.append(corrAnswer);
            }
        })
        const score = document.createElement("p");
        const finalScore = document.createElement("span")
        console.log(score);
        score.textContent = "Your final score was: ";
        finalScore.textContent = `${rightAnswers}/${questions.length}`;
        console.log(rightAnswers/10);
        const scorePerc = rightAnswers/ questions.length;
        finalScore.style.color =
        scorePerc > 0.75 ? "green" :
        scorePerc > 0.5 ? "orange" :
        "red";
        finalScore.textContent += 
        scorePerc > 0.75 ? " - Well done!":
        scorePerc > 0.5 ? " - Good." :
        " - Failure.";
        score.append(finalScore);
        printAns.append(score);
    })
        
}

const correction = (btn) => {
    if(btn === "startQ"){
        return;
    }

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
        }
        return;    
    }
    if(btn.id === "nextAns") {
        return;
    }
    if(btn !== undefined) {
        
        const ans = btn.id;
        if(ans === prevAnswer) {
            rightArr.push(prevQuestion.question);
            rightAnswers++;
        }
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
    correction(btn);
    if(currentQuestIndex >= questions.length) {
        answerSheet.remove();
        questTitle.textContent = "Well done! Lets see your results.";
        submitQuiz(rightArr);
        return;
    }

    const currentQuest = questions[currentQuestIndex];
    if(btn === "startQ") {
        answerA.classList.remove("hide");
        answerB.classList.remove("hide");

        questTitle.innerText = "";
        questTitle.innerText = currentQuest.question;
        answerOptions.forEach((opt) => {
            window[`answer${opt}`].value = currentQuest.alt[`answer${opt}`];
        })
        answerSheet.innerHTML = "";
        answerSheet.append(answerA,answerB, answerC, answerD);
        answerOpt();
    } else {
        if(currentQuest.type === "btnAns"){       
            answerAll.forEach((elem) => {
                    elem.setAttribute("type", "button");
                    elem.addEventListener("click", createQ);
            })
            answerSheet.append(answerA, answerB, answerC, answerD);
        }
        if(currentQuest.type === "checkAns") { 
            answerAll.forEach((button, index) => {
                button.removeEventListener("click", createQ);
                button.type = "checkbox";
                const ansDiv = document.createElement("div");
                const ansLabel = document.createElement("label");
                ansLabel.textContent = currentQuest.alt[`answer${answerOptions[index]}`];
                ansDiv.append(button, ansLabel);
                answerSheet.append(ansDiv);
            });
                lowCircle.append(nxtBtn);
        }
        questTitle.innerText = currentQuest.question;
        
        answerOptions.forEach((opt) => {
            window[`answer${opt}`].value = currentQuest.alt[`answer${opt}`];
        })
    }
    currentQuest.alt.answerC ? answerC.classList.remove("hide") : answerC.classList.add("hide");
    currentQuest.alt.answerD ? answerD.classList.remove("hide"): answerD.classList.add("hide");
    currentQuestIndex++;
}