// alert("hello");
// function questions(question, a,b,c,d){
//     this.question= question;
//     this.a=a;
//     this.b=b;
//     this.c=c;
//     this.d=d;
//     this.correct=correct;
// }

// const array= [new questions("where do you live", "india", "america", "brazil", "uk", "india"), new questions("what is your occupation", "engineer", "doctor"," bodygurad", "gaurdener", "engineer")];
// console.log(array);

const array= [{
    "question": "A program P reads in 500 integers in the range [0..100] exepresenting the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies? (GATE CS 2005)",
    "a":"An array of 50 numbers",
    "b":"An array of 100 numbers",
    "c":"An array of 500 number",
    "d":"a dynamically allocated array of 550 numbers",
    "correct":"a"

},
{
    "question":"Which of the following operations is not O(1) for an array of sorted data. You may assume that array elements are distinct.",
    "a":"Find the ith largest element",
    "b":"delete an element",
    "c":"Find the ith smallest element",
    "d":"All of the above",
    "correct":"b"
},
{
    "question":"The minimum number of comparisons required to determine if an integer appears more than n/2 times in a sorted array of n integers is",
    "a":"Θ(n)",
    "b":"Θ(logn)",
    "c":"Θ(log*n)",
    "d":"Θ(1)",
    "correct":"b"
},{
    "question":"Consider an array consisting of –ve and +ve numbers. What would be the worst case time complexity of an algorithm to segregate the numbers having same sign altogether i.e all +ve on one side and then all -ve on the other ?",
    "a":"O(N)",
    "b":"O(N Log N)",
    "c":"O(N*N)",
    "d":"O(N Log LOg N)",
    "correct":"a"
},{
    "question":"Let A[1...n] be an array of n distinct numbers. If i < j and A[i] > A[j], then the pair (i, j) is called an inversion of A. What is the expected number of inversions in any permutation on n elements ?",
    "a":"n(n-1)/2",
    "b":"n(n-1)/4",
    "c":"n(n+1)/4",
    "d":"2n[logn]",
    "correct":"b"
}
]

const quiz= document.getElementById("quiz");
const answerEls= document.querySelectorAll("input");
const quizQuestion= document.getElementById("questiontext");
const optionA= document.getElementById("a_text");
const optionB= document.getElementById("b_text");
const optionC= document.getElementById("c_text");
const optionD= document.getElementById("d_text");
const submitButton= document.getElementById("submit");

let currentQuestionNo=0;
let score=0;
// let answer=undefined;

loadquiz();

function loadquiz(){
    deselect();
    const currentQuizData= array[currentQuestionNo];

    quizQuestion.innerHTML=currentQuizData.question;
    optionA.innerHTML=currentQuizData.a;
    optionB.innerHTML=currentQuizData.b;
    optionC.innerHTML=currentQuizData.c;
    optionD.innerHTML=currentQuizData.d;

//  currentQuestionNo++;
}


function getselected(){
    // console.log("jdfjd")
   
    let answer=undefined;
    answerEls.forEach((answerE1)=>{
        console.log(answerE1.checked);
        if(answerE1.checked){
            answer= answerE1.id;
        }
    });

    return answer;
}

function deselect(){
    answerEls.forEach((answerE1)=>{
      answerE1.checked=false;
    })
}

submitButton.addEventListener("click", function(){
   
    const answer= getselected();
   
    if(answer){
        if(answer=== array[currentQuestionNo].correct) score++;

        currentQuestionNo++;
        if(currentQuestionNo<array.length) loadquiz();
        else{
            quiz.innerHTML=`<h2> You have scored ${score}/${array.length} questions..</h2> <button onclick="location.reload()"> Reload </button>`;
            // quiz.style.textAlign="centre";
        }
    }
});
