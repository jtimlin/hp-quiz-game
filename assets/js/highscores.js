const highScoresList = document.querySelector('#highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

/**
 * Code retrieves high scores from the localStorage,
 * formats them as a list of list items using template strings,
 * and then assigns the resulting HTML string to the innerHTML
 * property of the highScoresList element
 */
highScoresList.innerHTML =
    highScores.map(score => {
        return `<li class="highScore">${score.name} - ${score.score}</li>`;
    })join('');

