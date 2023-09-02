const main = document.querySelector('main');
const header = document.querySelector('header');

let headerHeight = window.getComputedStyle(header);

main.style.height = `calc(100vh - ${headerHeight.height}px)`;

/* Question Number Counter */



/* Typewriter Effect */

// const typewriters = document.querySelectorAll('.typewriter');
// const delay = 40;

// typewriters.forEach((typewriter) => {
//     const text = typewriter.textContent.trim();
//     typewriter.textContent = "";

//     let i = 0;
//     function typewriterEffect() {
//         if (i < text.length) {
//             typewriter.textContent += text.charAt(i);
//             i++;
//             if (!typewriter.classList.contains('questionText')) {
//                 setTimeout(typewriterEffect, 150);
//             }

//             else {
//                 setTimeout(typewriterEffect, delay);
//             }
//         }
//     }

//     typewriterEffect();
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
        changeQuestion();
    }
})

const questionText = document.querySelector('.questionText');

function typingEffect(typewriter) {
    questionText.textContent = "";

    let i = 0;
    function typewriterEffect() {
        if (i < typewriter.length) {
            questionText.textContent += typewriter.charAt(i);
            i++;
            setTimeout(typewriterEffect, 50);
        }
    }

    typewriterEffect();
}

function typingEffectAnswers(answersList) {
    const answerSlots = document.querySelectorAll('.answersList li');
    let currentAnswerIndex = 0;
    let currentCharacterIndex = 0;

    answerSlots.forEach((slot) => {
        slot.textContent = "";
    })

    function typewriterEffect() {
        if (currentAnswerIndex < answersList.length) {
            const slotText = answerSlots[currentAnswerIndex];
            const currentAnswer = answersList[currentAnswerIndex];
            const { label } = currentAnswer;

            if (currentCharacterIndex < label.length) {
                slotText.textContent += label.charAt(currentCharacterIndex);
                currentCharacterIndex++;
                setTimeout(typewriterEffect, 25);
            } else {
                currentAnswerIndex++;
                currentCharacterIndex = 0;
                setTimeout(typewriterEffect, 1000); // Wait for 1 second before moving to the next answer
            }
        }
    }

    typewriterEffect(); // Start the typewriter effect
}



let questionIndex = 1;

function changeQuestion() {
    fetch('questions.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (questionIndex < data.questions.length) {
                typingEffect(data.questions[questionIndex].question);
                typingEffectAnswers(data.questions[questionIndex].options);
                questionIndex++;
            }
        })
}

function showTheFirstQuestion() {
    fetch('questions.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (questionIndex < data.questions.length) {
                typingEffect(data.questions[0].question);
                typingEffectAnswers(data.questions[0].options);
            }
            console.log(data.questions[0].options[0].label);
        })
}

showTheFirstQuestion();


// const questions = [
//     'What\'s your name?',
//     'How old are you?',
//     'Where do you live?'
// ];

// const questions2 = {
//     'q1': {
//         'qText': 'What is your name',
//         'answers': ['Adam', 'Ali', 'Idrees', 'Rami']
//     },

//     'q2': {
//         'qText': 'How are you?',
//         'answers': ['Good', 'Perfect', 'Excellent', 'Relaxed']
//     }
// };