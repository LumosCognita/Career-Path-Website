const main = document.querySelector('main');
const header = document.querySelector('header');

let headerHeight = window.getComputedStyle(header);

main.style.height = `calc(100vh - ${headerHeight.height}px)`;

/* Question Number Counter */



/* Typewriter Effect */

const typewriters = document.querySelectorAll('.typewriter');
const delay = 40;

typewriters.forEach((typewriter) => {
    const text = typewriter.textContent.trim();
    typewriter.textContent = "";

    let i = 0;
    function typewriterEffect() {
        if (i < text.length) {
            typewriter.textContent += text.charAt(i);
            i++;
            if (!typewriter.classList.contains('questionText')) {
                setTimeout(typewriterEffect, 150);
            }

            else {
                setTimeout(typewriterEffect, delay);
            }
        }
    }

    typewriterEffect();
})



/* Typewriting Improved */

// const typewriterElements = document.querySelectorAll('.typewriter');
// const delay = 25;
// const staggerDelay = 1000;

// function typewriting(typewriter) {
//     const text = typewriter.textContent.trim();
//     typewriter.textContent = "";

//     let i = 0;
//     function typewriterEffect() {
//         if (i < text.length) {
//             typewriter.textContent += text.charAt(i);
//             i++;
//             setTimeout(typewriterEffect, delay);
//         }
//     }

//     typewriterEffect();
// }

// typewriterElements.forEach((typewriter, index) => {
//     setTimeout(() => {
//         typewriting(typewriter);
//     }, index * staggerDelay)
// })

// =========================================================


/* Saving the user choices into a JSON object and setting the counter */

const answerOptions = document.querySelector('#answerOptions');
const nextBTN = document.querySelector('.nextBTN');
let questionNumber = document.querySelector('.questionNumber');
let counter = 2;

nextBTN.addEventListener('click', () => {
    const question = document.querySelector('.questionText');
    const selectedValue = answerOptions.value;
    if (selectedValue !== '---') {
        const userChoice = {
            'question': question.textContent,
            'userAnswer': selectedValue
        };
        console.log(userChoice);
    }

    if (questionNumber.innerHTML < 15 && selectedValue !== '---') {
        if (counter < 10) {
            questionNumber.innerHTML = `0${counter}`;
        }

        else {
            questionNumber.innerHTML = `${counter}`;
        }

        counter++;
    }

    changeQuestion();
})

const questionText = document.querySelector('.questionText');

function typingEffect(typewriter) {
    questionText.textContent = "";

    let i = 0;
    function typewriterEffect() {
        if (i < typewriter.length) {
            questionText.textContent += typewriter.charAt(i);
            i++;
            setTimeout(typewriterEffect, 150);
        }
    }

    typewriterEffect();
}

function typingEffectAnswers(answerTypewriter) {
    const answersOptions = document.querySelectorAll('.answersList li');
    answersOptions.forEach((answer) => {
        answer.textContent = "";
    })

    let i = 0;
    let letter = 0;
    function typewriterEffect() {
        if (i < answerTypewriter.length) {
            if (letter < answerTypewriter[i].length) {
                answersOptions[i].textContent += answerTypewriter[i].charAt(letter);
                letter++;
                setTimeout(typewriterEffect, 150);
            }
        }
        i++;
    }

    typewriterEffect();
}

const questions = [
    'What\'s your name?',
    'How old are you?',
    'Where do you live?'
];

const questions2 = {
    'q1': {
        'qText': 'What is your name',
        'answers': ['Adam', 'Ali', 'Idrees', 'Rami']
    },

    'q2': {
        'qText': 'How are you?',
        'answers': ['Good', 'Perfect', 'Excellent', 'Relaxed']
    }
};

let questionIndex = 0;

function changeQuestion() {
    if (questionIndex < questions.length) {
        // questionText.innerHTML = questions[questionIndex];
        typingEffect(questions2.q1.qText);
        // typingEffectAnswers(questions2.q1.answers);
        
        questionIndex++;
    }
}
