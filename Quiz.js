let question = [
    {
        num: 1,
        question: "How many sizes of headers are available in HTML by default?",
        answer: "6",
        option: [
            "5",
            "1",
            "3",
            "6",
        ],

    },
    {
        num: 2,
        question: "Which of the following keywords is used to define a variable in Javascript?",
        answer: "Both",
        option: [
            "var",
            "let",
            "Both",
            "Non of the above",
        ],

    },
    {
        num: 3,
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answer: "It is an ordered list of values",
        option: [
            "It is an ordered list of values",
            "It is an ordered list of objects",
            "It is an ordered list of string",
            "It is an ordered list of functions",
        ],

    },
    {
        num: 4,
        question: "Which of the following is not javascript data types?",
        answer: "All of the mentioned",
        option: [
            "Null type",
            "Undefined type",
            "Number type",
            "All of the mentioned",
        ],

    },
    {
        num: 5,
        question: " Where is Client-side JavaScript code is embedded within HTML documents?",
        answer: "A URL that uses the special javascript:protocol",
        option: [
            " A URL that uses the special javascript:code",
            "A URL that uses the special javascript:protocol",
            "A URL that uses the special javascript:encoding",
            "A URL that uses the special javascript:stack",
        ],

    },
    {
        num: 6,
        question: " What is the basic difference between JavaScript and Java?",
        answer: "Functions are values, and there is no hard distinction between methods and fields",
        option: [
            "Functions are considered as fields",
            "Functions are values, and there is no hard distinction between methods and fields",
            " Variables are specific",
            "There is no difference",
        ],

    },
]

const start_btn = document.querySelector(".start");
const quiz_box = document.querySelector(".quiz-box")
const question_text = quiz_box.querySelector(".question_text")
const options_box = quiz_box.querySelector(".options")
const next_btn = document.querySelector(".next_button")
const result_box = document.querySelector(".result-box")
const mark_right = '<i class="fa fa-check"></i>';
const mark_wrong = '<i class="fa fa-times"></i>';

const total_Q = document.querySelector(".quiz-footer .total_q");
const current_Q = document.querySelector(".quiz-footer .current_q");


const total_question_r = document.querySelector(".total_que")
const right_question_r = document.querySelector(".right_ans")
const wrong_question_r = document.querySelector(".wrong_ans")
const percentage = document.querySelector(".percentage")

const again_Quiz = document.querySelector(".result-footer .again-quiz")
const Exit = document.querySelector(".result-footer .exit")




start_btn.onclick = () => {

    quiz_box.classList.remove("inactive");
    start_btn.classList.add("inactive");

}

next_btn.onclick = () => {
    que_index++;

    if (question.length > que_index) {

        current_Q.innerText = que_index + 1;
        showQuestion(que_index)
    }
    else {
        console.log("complete")
        quiz_box.classList.add("inactive")
        result_box.classList.remove("inactive")
        right_question_r.innerText = `Right Answer : ${right_answer}`;
        wrong_question_r.innerText = `Wrong Answer : ${wrong_answer}`;
        percentage.innerText = `Percentage : ${(right_answer * 100) / question.length.toFixed(2)} %`
    }

    if (question.length - 1 == que_index) {
        next_btn.innerText = "Finish"

    }
}


total_Q.innerText = question.length
total_question_r.innerText = `Total Question : ${question.length}`;

var que_index = 0;
var right_answer = 0;
var wrong_answer = 0;

current_Q.innerText = que_index + 1;
showQuestion(que_index)


function showQuestion(que_index) {
    question_text.innerText = question[que_index].num + ". " + question[que_index].question;
    let option_statement = "";
    for (let i = 0; i < question[que_index].option.length; i++) {
        option_statement += `<div class="option"> ${question[que_index].option[i]}</div>`;

    }
    options_box.innerHTML = option_statement

    let allOption = options_box.querySelectorAll(".option");
    // console.log(allOption)
    for (let j = 0; j < allOption.length; j++) {
        allOption[j].setAttribute("onclick", "UserAnswer(this)")
    }
    next_btn.classList.add("inactive")
}

function UserAnswer(answer) {
    let user_answer = answer.innerText;
    let correct_ans = question[que_index].answer;
    let allOption2 = options_box.querySelectorAll(".option");
    next_btn.classList.remove("inactive")

    if (user_answer == correct_ans) {
        console.log("correct")
        answer.classList.add("correct")
        answer.insertAdjacentHTML("beforeend", mark_right)
        right_answer++;
        // answer.classList.add("disabled")
    }
    else {
        answer.classList.add("incorrect")
        console.log("wrong")
        answer.insertAdjacentHTML("beforeend", mark_wrong)
        wrong_answer++;
        for (let i = 0; i < allOption2.length; i++) {
            if (allOption2[i].innerText == correct_ans) {
                allOption2[i].classList.add("correct")
                allOption2[i].insertAdjacentHTML("beforeend", mark_right)
            } else {

            }

        }
    }

    for (let j = 0; j < allOption2.length; j++) {
        allOption2[j].classList.add("disabled")
    }
}


again_Quiz.onclick = () => {
    quiz_box.classList.remove("inactive");
    result_box.classList.add("inactive");
    que_index = 0;
    right_answer = 0;
    wrong_answer = 0;

    current_Q.innerText = que_index + 1;
    showQuestion(que_index)
}

Exit.onclick= () => {
  start_btn.classList.remove("inactive");
  result_box.classList.add("inactive");
  que_index = 0;
  right_answer = 0;
  wrong_answer = 0;

  current_Q.innerText = que_index + 1;
  showQuestion(que_index)

}
