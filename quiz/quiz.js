const quizDB = [
    {
        question: "Q1: What is the full form of react?",
        a: "react",
        b: "Angular",
        c: "Node",
        d: "Java Script",
        ans: "ans4"
    },

    {
        question: "Q2: What is the full form of CSS?",
        a: "react",
        b: "Cascading Style Sheet",
        c: "DOM",
        d: "Java Script",
        ans: "ans3"
    },

    {
        question: "Q3: What is the full form of HTML?",
        a: "react",
        b: "CSS",
        c: "Hyper Text language",
        d: "Java Script",
        ans: "ans2"
    },

    {
        question: "Q4: What is the full form of JS?",
        a: "react",
        b: "Cascading Style Sheet",
        c: "Hyper Text language",
        d: "Java Script",
        ans: "ans1"
    },
]





const question = document.querySelector('.question');
const option1  = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3  = document.querySelector('#option3');
const option4  = document.querySelector('#option4');


const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const LoadQuestion = () => {
 questionList = quizDB[questionCount];
 question.innerHTML = questionList.question;

 option1.innerText = questionList.d;
 option2.innerText = questionList.c;
 option3.innerText = questionList.b;
 option4.innerText = questionList.a;
}

LoadQuestion();

 const getCheckAnswer = () =>{
let answer;

answers.forEach( (curAnsElem) =>{
    if(curAnsElem.checked){
    answer = curAnsElem.id;
    }
});
return answer;
 };

 const deselectAll = () =>{
     answers.forEach( (curAnsElem) => curAnsElem.checked = false);
 }

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        LoadQuestion(); 
    }else{
        showScore.innerHTML = `
        <h3> You scroed ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="Location.reload()"> Play Again </button> `;

        showScore.classList.remove('scoreArea');
    }
});
