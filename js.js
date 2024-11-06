var questions = [
    {
        question: "Microsoft Word is ____ software.",
        answers: [
            { text: "Application", correct: true },
            { text: "Compiler", correct: false },
            { text: "System", correct: false },
            { text: "Programming", correct: false }
        ]
    },
    {
        question: "Which is not in MS Word?",
        answers: [
            { text: "Italic", correct: false },
            { text: "Magic tool", correct: true },
            { text: "Font", correct: false },
            { text: "Bold", correct: false }
        ]
    },
    {
        question: "____ cannot be used to work in MS Office.",
        answers: [
            { text: "Joystick", correct: true },
            { text: "Scanner", correct: false },
            { text: "Light Pen", correct: false },
            { text: "Mouse", correct: false }
        ]
    },
    {
        question: "Which is not an edition of MS Word?",
        answers: [
            { text: "MS Word 2003", correct: false },
            { text: "MS Word 2007", correct: false },
            { text: "MS Word 2010", correct: false },
            { text: "MS Word 1020", correct: true }
        ]
    },
    {
        question: "The ___ works with the standard Copy and Paste commands.",
        answers: [
            { text: "View tab", correct: false },
            { text: "Paragraph dialog box", correct: false },
            { text: "Office Clipboard", correct: true },
            { text: "All of these", correct: false }
        ]
    },
    {
        question: "What is the blank space outside the printing area on a page?",
        answers: [
            { text: "Clipart", correct: false },
            { text: "Margins", correct: true },
            { text: "Header", correct: false },
            { text: "Footer", correct: false }
        ]
    },
    {
        question: "Which of the following is an example of page orientation?",
        answers: [
            { text: "Landscape", correct: true },
            { text: "Subscript", correct: false },
            { text: "Superscript", correct: false },
            { text: "A4", correct: false }
        ]
    },
    {
        question: "Formatting is performed on",
        answers: [
            { text: "Text", correct: false },
            { text: "Table", correct: false },
            { text: "Menu", correct: false },
            { text: "Both (a) and (b)", correct: true }
        ]
    },
    {
        question: "Which of the following software is used for making a resume?",
        answers: [
            { text: "MS Excel", correct: false },
            { text: "MS Word", correct: true },
            { text: "DevC", correct: false },
            { text: "Java", correct: false }
        ]
    },
    {
        question: "Press ____ to open the help window in the MS Word document.",
        answers: [
            { text: "F1", correct: true },
            { text: "F2", correct: false },
            { text: "F9", correct: false },
            { text: "F11", correct: false }
        ]
    },
    {
        question: "Select all the text in MS Word document by",
        answers: [
            { text: "Ctrl+S", correct: false },
            { text: "Ctrl+1", correct: false },
            { text: "Ctrl+A", correct: true },
            { text: "Ctrl+V", correct: false }
        ]
    },
    {
        question: "____ is not a part of a MS Word document.",
        answers: [
            { text: "Quick access toolbar", correct: false },
            { text: "Start Menu button", correct: true },
            { text: "Home panel", correct: false },
            { text: "View option", correct: false }
        ]
    },
    {
        question: "The name of a word document displays in ____.",
        answers: [
            { text: "Ribbon", correct: false },
            { text: "Title bar", correct: true },
            { text: "Status bar", correct: false },
            { text: "Home tab", correct: false }
        ]
    },
    {
        question: "Each line represents how many letters in WordStar?",
        answers: [
            { text: "20", correct: false },
            { text: "35", correct: false },
            { text: "65", correct: false },
            { text: "75", correct: true }
        ]
    },
    {
        question: "Which of the following are word processing software?",
        answers: [
            { text: "WordPerfect", correct: false },
            { text: "Wordpad", correct: false },
            { text: "MS Word", correct: false },
            { text: "All of above", correct: true }
        ]
    },
    {
        question: "Which file starts with MS Word?",
        answers: [
            { text: "Winword.exe", correct: true },
            { text: "Word.exe", correct: false },
            { text: "Msword.exe", correct: false },
            { text: "Word356.exe", correct: false }
        ]
    },
    {
        question: "Ctrl+N is used to",
        answers: [
            { text: "Save the Document", correct: false },
            { text: "Open the Document", correct: false },
            { text: "Create a New Document", correct: true },
            { text: "Close the Document", correct: false }
        ]
    }
    // Add more questions here if needed
];



const start = document.querySelector('.start-quiz');
const ques_cont = document.querySelector('.ques-cont');
let score = 0; // Initialize score variable
let ques_index = 0;

const qe = document.querySelector('#ques');
const next = document.querySelector('#next');
const option_cont = document.querySelector('.options-cont');
const scoreDisplay = document.createElement('div'); // Create score display element

scoreDisplay.classList.add('score');
ques_cont.appendChild(scoreDisplay); // Append score display to question container

function start_quiz() {
    score = 0; // Reset score
    ques_index = 0; // Reset question index
    start.style.display = 'none';
    ques_cont.style.display = 'block';
    render_ques();
}

function render_ques() {
    if (ques_index >= questions.length) {
        // Show score when quiz is completed
        showScore();
        return;
    }
    
    option_cont.innerHTML = '';
    let q = questions[ques_index];
    qe.textContent = `Question ${ques_index + 1}: ${q.question}`;
    
    q.answers.forEach((element, index) => {
        let btn = document.createElement('button');
        btn.classList.add('options');
        btn.textContent = `${index + 1} : ${element.text}`;
        option_cont.appendChild(btn);
        btn.dataset.correct = element.correct;

        btn.addEventListener('click', () => {
            checkans(btn);
            disableopt();
        });
    });
}

function disableopt() {
    var optionButtons = document.querySelectorAll('.options');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === 'true') {
            button.classList.add('green');
        } else {
            button.classList.add('red');
        }
    });
}

function checkans(btn) {
    if (btn.dataset.correct === 'true') {
        btn.classList.add('green');
        score++; // Increase score for correct answer
    } else {
        btn.classList.add('red');
    }
}

next.addEventListener('click', () => {
    ques_index++;
    render_ques();
});

function showScore() {
    console.log(score)
    ques_cont.style.display = 'none'; // Hide questions
    scoreDisplay.textContent = `Your score is: ${score} out of ${questions.length}`; // Display score
    scoreDisplay.style.display = 'block'; // Show score
}