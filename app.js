let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;

    checkBackgroundColor(e.target);
}

function checkBackgroundColor(element) {
    const whiteBackground = 'rgb(255, 255, 255)';
    const computedStyle = getComputedStyle(element);
    const backgroundColor = computedStyle.backgroundColor;

    if (backgroundColor === whiteBackground) {
        innerCursor.style.backgroundColor = 'white';
        outerCursor.style.borderColor = 'white';
    } else {
        innerCursor.style.backgroundColor = 'var(--cursor-color)';
        outerCursor.style.borderColor = 'var(--cursor-color)';
    }
}

const clickableElements = document.querySelectorAll('a, button, input[type="button"], input[type="submit"], [role="button"], [tabindex]:not([tabindex="-1"])');

clickableElements.forEach(element => {
    element.addEventListener('mouseover', () => {
        innerCursor.classList.add('grow');
        outerCursor.classList.add('grow');
    });
    element.addEventListener('mouseout', () => {
        innerCursor.classList.remove('grow');
        outerCursor.classList.remove('grow');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Fetch question from test.txt
    fetch('test.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            // Update the question text with the content from test.txt
            document.querySelector('.question-text').innerText = data.trim(); // This will replace "Questions" with the content from test.txt
        })
        .catch(error => console.error('Error fetching the question:', error));
});

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = id => {
    const element = document.getElementById(id),
          text = element.innerText.split("");
    
    element.innerText = "";
    
    text.forEach((value, index) => {
        const outer = document.createElement("span");
        
        outer.className = "outer";
        
        const inner = document.createElement("span");
        
        inner.className = "inner";
        
        inner.style.animationDelay = `${rand(-5000, 0)}ms`;
        
        const letter = document.createElement("span");
        
        letter.className = "letter";
        
        letter.innerText = value;
        
        letter.style.animationDelay = `${index * 1000 }ms`;
        
        inner.appendChild(letter);    
        outer.appendChild(inner);    
        element.appendChild(outer);
    });
}

enhance("channel-link");
enhance("different-text");
enhance("unique-text");

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("Document loaded");
});

// Fetch the questions from the JSON file
fetch('questions.json')
    .then(response => {
        // Check if the response is okay (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        // Access the questions from the data object
        const questions = data.questions;

        // Check if questions exist and display them
        if (questions && questions.length > 0) {
            // Display the first question in the questionText div
            document.getElementById('questionText').innerText = questions;
        } else {
            // Handle case where there are no questions
            document.getElementById('questionText').innerText = "No questions available.";
        }
    })
    .catch(error => {
        // Log any errors to the console
        console.error('Error fetching questions:', error);
        // Optionally, you can display an error message in the questionText div
        document.getElementById('questionText').innerText = "Error loading questions.";
    });
