const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore');

/**
 * Gets the scores data from browsers localstorage and converts data from
 * string to array with the JSON.parse. MAX_HIGH_SCORES is set to 5 as
 * the maximum number of high scores to be stored.
 */
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;

/**
 * Eventlistener to keyup of the username element. It checks if the username field
 * has a value. If its empty the button is disabled.
 */
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

/**
 * Gets username and score and push them to highScores array.
 * Array is sorted with the sort metod to descending order.
 * The updated highScores array is stored in the localStorage
 * after converting it to a string using JSON.stringify.
 * Finally, the window location is redirected to the root URL ("/").
 */
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };

    highScores.push(score);

    highScores.sort((a, b) => {
        return b.score - a.score;
    });

    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
};