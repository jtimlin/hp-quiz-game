/* Variables that reference specific HTML elements in the document.
These variables can be used later in the code to interact with or
update the content and appearance of those elements. */
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.answerText'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

console.log("JavaScript loaded");

/* Quiz Questions */
let questions = [
    {
        question: "What is the full name of Hogwarts' headmaster?",
        choice1: "Albus Dumbledore",
        choice2: "Minerva McGonagall",
        choice3: "Severus Snape",
        choice4: "Horace Slughorn",
        answer: 1,
    },
    {
        question: "In which year was the first Harry Potter book released?",
        choice1: "1995",
        choice2: "1997",
        choice3: "2001",
        choice4: "2003",
        answer: 2,
    },
    {
        question: "What is the name of the forbidden book Hermione uses in Harry Potter and the Chamber of Secrets?",
        choice1: "Secret History",
        choice2: "The Mysteries of Growing Plants",
        choice3: "Auntie's Magical Recipes",
        choice4: "The Monster Book",
        answer: 4,
    },
    {
        question: "What is Harry Potter's full name?",
        choice1: "Harry James Potter",
        choice2: "Harry Sirius Potter",
        choice3: "Harry Albus Potter",
        choice4: "Harry Lily Potter",
        answer: 1,
    },
    {
        question: "Which magical creature represents the Ravenclaw house?",
        choice1: "An eagle",
        choice2: "A wolf",
        choice3: "A lion-snake",
        choice4: "A griffin",
        answer: 1,
    },
    {
        question: "What is the incantation used to produce a Patronus?",
        choice1: "Expecto Patronum",
        choice2: "Avada Kedavra",
        choice3: "Crucio",
        choice4: "Wingardium Leviosa",
        answer: 1,
    },
    {
        question: "What is the broomstick Harry Potter uses during his first Quidditch match?",
        choice1: "Nimbus 2000",
        choice2: "Firebolt",
        choice3: "Cleansweep Seven",
        choice4: "Comet 260",
        answer: 1,
    },
    {
        question: "Which character performs the 'Bat-Bogey Hex'?",
        choice1: "Hermione Granger",
        choice2: "Luna Lovegood",
        choice3: "Ginny Weasley",
        choice4: "Molly Weasley",
        answer: 3,
    },
    {
        question: "What is the challenge that Harry, Ron, and Hermione face in the Philosopher's Stone that tests their knowledge of magical creatures?",
        choice1: "Death's Challenge",
        choice2: "Dragon's Challenge",
        choice3: "Gargoyle's Challenge",
        choice4: "Ghost's Challenge",
        answer: 2,
    },
    {
        question: "Which ancestor founded the Slytherin house?",
        choice1: "Godric Gryffindor",
        choice2: "Salazar Slytherin",
        choice3: "Rowena Ravenclaw",
        choice4: "Helga Hufflepuff",
        answer: 2,
    },
    {
        question: "What is the magical number required to open the gates to Diagon Alley?",
        choice1: "7-3-5",
        choice2: "3-7-9",
        choice3: "2-4-6",
        choice4: "9-3-6",
        answer: 4,
    },
    {
        question: "What is the name of the dark wizard who keeps a snake as a pet and leads the Death Eaters?",
        choice1: "Lucius Malfoy",
        choice2: "Antonin Dolohov",
        choice3: "Fenrir Greyback",
        choice4: "Bellatrix Lestrange",
        answer: 4,
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 8;

/**
 * To start the game
 */
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

/**
 * Function that retrieves a new question, updates the question counter
 * and progress bar, and updates the UI with the new question and choices.
 */
getNewQuestion = () => {
    /* Condition check if either the availableQuestions array 
    is empty or the questionCounter exceeds the MAX_QUESTIONS limit.*/
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('end.html');
    };

    /* Increment counter and update progressBar */
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    /* Select a random question from availableQuestions array */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    /* Update choices */
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

/* When the user clicks on a choice, the code inside the event listener function is executed.
 if the acceptingAnswers variable is false. Code immediately returns and does not proceed further.
 This check is used to prevent multiple answer submissions or clicks while processing the current question.
 */

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        /* Checks answer is correct and increments SCORE_POINTS when user selects correct answer */
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        /* Applies a visual effect to indicate whether the user's answer was correct or incorrect and calls
        the getNewQuestion function. */
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});

/* Increases score counting */
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();