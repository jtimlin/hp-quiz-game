# HARRY POTTER QUIZ

This project serves as Portfolio Project #2 for Code Institute.
Base code from: https://youtu.be/f4fB9Xg2JEY Quiz tutorial video by Brian Design on YouTube.

![Site view across devices](/assets/images-readme/devices-layout.png)

Link to live website can be found [HERE](https://jindah.github.io/hp-quiz-game/)

## Tabel of Contents

- [HARRY POTTER QUIZ](#harry-potter-quiz)
  - [Tabel of Contents](#tabel-of-contents)
  - [UX](#ux)
  - [Site Purpose](#site-purpose)
  - [Site Goal](#site-goal)
  - [Audience](#audience)
  - [Communication](#communication)
  - [Current User Goals](#current-user-goals)
  - [New User Goals](#new-user-goals)
  - [Design](#design)
    - [Colour Scheme:](#colour-scheme)
    - [Typography:](#typography)
    - [Imagery:](#imagery)
  - [Features](#features)
    - [Existing Features](#existing-features)
      - [Landing Page:](#landing-page)
      - [Quiz Page:](#quiz-page)
      - [Game Over Page:](#game-over-page)
      - [Highscores Page:](#highscores-page)
    - [Future Features:](#future-features)
  - [Testing](#testing)
    - [Validator Testing](#validator-testing)
    - [Unfixed Bugs](#unfixed-bugs)
  - [Technologies Used](#technologies-used)
    - [Main Languages Used](#main-languages-used)
    - [Frameworks, Libraries \& Programs Used](#frameworks-libraries--programs-used)
  - [Deployment](#deployment)
  - [Credits](#credits)
    - [Content](#content)
    - [Media](#media)

## UX

## Site Purpose

The purpose of the Harry Potter Quiz website is to provide an interactive platform for Harry Potter fans to test their knowledge.

## Site Goal

Our goal is to entertain and engage Harry Potter enthusiasts by offering a fun and immersive quiz experience.

## Audience

Harry Potter fans of all ages who want to put their knowledge to the test.

## Communication

The website features a user-friendly interface to help visitors easily access Harry Potter Quiz.

## Current User Goals

- To test their knowledge and challenge themselves with trivia questions.
- To compete with other fans and compare their scores on leaderboards.

## New User Goals

- To navigate the website effortlessly and understand how the quiz work.
- To learn interesting facts and trivia about the Harry Potter series.

## Design

### Colour Scheme:

Colorming.io was utilized to create a color palette with excellent contrast and harmonious colors that work well together.
![Colour Palette](/assets/images-readme/colour-palette.png)

### Typography:

Ysabeau was selected for the typography of the pages from Google fonts.

### Imagery:

Quiz background image comes from unsplash.com:
https://unsplash.com/photos/3n7DdlkMfEg and is by: Artem Maltsev

## Features

### Existing Features

#### Landing Page:

This defines the feel of the game, providing the user with an image that they can easily associate to what the quiz is about.

![Landing page](/assets/images-readme/index.png)

#### Quiz Page:

The quiz page is designed to be informative, easily comprehensible, and enjoyable to participate in.

![Quiz game](/assets/images-readme/quiz.png)

#### Game Over Page:

At the end of the quiz user will be able to start over or save your score.

![Game over](/assets/images-readme/end.png)

#### Highscores Page:

Highscores page shows top 5 saved scores and player names.

![Highscores](/assets/images-readme/highscores.png)

### Future Features:

- Background music (no autoplay).
- Ability to change difficulty.

## Testing

CSS on the main style.css file gave me error: 94 Parsningsfel [ .buttonDefault(disabled):hover]. I didnt get it to work so i removed it. Save button doesnt do anything anyways if there is no input on "enter your name" field.

My highscores page didn't save scores. The fix to this problem was a single '.' missing before the 'join' command in the JavaScript file.

My daughter is a huge Harry Potter fan. She has been testing this quiz and gave me: 9/10 points. :) She also found two questions with only incorrect answers.

I ran the html files through the validator and got no errors.

I also ran the css file through the W3C validator and it was flawless.

- The website was constantly tested during development using Chrome dev tools.
- Tested all links on all pages.
- Tested the site opens in Chrome, Safari and Microsoft Edge without issues.

### Validator Testing

- Html files pass through the [W3C validator](https://validator.w3.org/) with no issues found.
  ![W3C validator message](/assets/images-readme/validator-html.png)

- CSS files pass through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no issues found.
  ![Jigsaw validator message](/assets/images-readme/validator-css.png)

- No errors where found by the official JSHint validator

  ![JSHint on script.js](/assets/images-readme/jshint-script.png)
  ![JSHint on highscores.js](/assets/images-readme/jshint-highscores.png)
  ![JSHint on end.js](/assets/images-readme/jshint-end.png)

- page has an excellent Accessibility rating in Lighthouse
  ![Accessibility score](/assets/images-readme/lighthouse.png)

### Unfixed Bugs

- No known bugs.

## Technologies Used

### Main Languages Used

- HTML5
- CSS3
- JAVASCRIPT

### Frameworks, Libraries & Programs Used

- Google Fonts - for the font family: Ysabeau. San-serif was used as a default font.
- Font Awesome - to add icons.
- Codeanywhere - to creat my html files, styling sheet and javascript before pushing the project to Github.
- GitHub - to store my repository for submission.
- Devtools - to ensure the project looked good across all devices.
- Favicon.io - for the favicon.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the debloy from a branch
- Once the main branch has been selected, click save and the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

### How to Fork it

1. On GitHub, go to [jindah/hp-quiz-game](https://github.com/jindah/hp-quiz-game).
2. In the top right, click "Fork".

### How to Clone it

1. Go to the main page of the repository.
2. Above the file list, click "Code".
3. Select HTTPS, SSH, or GitHub CLI and then click copy to clone it.
4. Open Git Bash.
5. Change the location of your cloned repository.
6. Type `git clone` and then paste the URL you copied.
7. Press “Enter” to create your clone.

### Making a Local Clone

1. Locate the [Repository](https://github.com/jindah/hp-quiz-game).
2. Click "Code".
3. Click Clone or Download.
4. Copy the Git URL from the dialogue box.
5. Open a terminal window in your choosen directory using your preferred development editor.
6. Change the location to where you want the cloned directory to be.
7. Type `git clone`, and then paste the URL you copied.
8. Press Enter, and your local clone will be created.

## Credits

### Content

Base code from: https://youtu.be/f4fB9Xg2JEY Quiz tutorial video by Brian Design on YouTube.

For the colouring: <http://colormind.io/>

Box shadow code: <https://getcssscan.com/css-box-shadow-examples>

Favicon: <https://favicon.io>

### Media

Quiz background image comes from unsplash.com:
https://unsplash.com/photos/3n7DdlkMfEg and is by: Artem Maltsev
