# HARRY POTTER QUIZ

This project serves as Portfolio Project #2 for Code Institute.

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

![Hero image](/assets/images-readme/home-heroimage.jpg)

#### Quiz Page:

Quiz page has

![Balcony glazing card](/assets/images-readme/balcony-glazing.png)

#### Highscores Page:

Highscores page is

![Contact information](/assets/images-readme/contact.png)

### Future Features:

- Gallery.
- More product information (glass roofs and sun blinds)
- Better navigation for mobile users. (css hamburger menu)

## Testing

I had a problem getting the background image of the index page in the right place. For some reason, there was a gap above the picture. I changed the whole nav section to flexboxes and the problem was solved.

I ran the html files through the validator and got an error code that I had used the same id twice. Changing it to a class fixed the problem.

I also ran the css file through the W3C validator and it was flawless.

The media inquiries turned out to be difficult when I had first made the appearance of the pages suitable for desktop. It should definitely have been made suitable for mobile phones first. The solution to this, however, turned out to be flexboxes. The menu works now, but it could be changed to be more suitable for mobile phones by using a hamburger-style menu.

- The website was constantly tested during development using Chrome dev tools.
- Tested all links on all pages.
- Verified that the contact form cannot be submitted without the required information (First Name, Last Name, Email and Message)
- Tested the site opens in Chrome, Safari and Microsoft Edge without issues.
- All links open to external pages as intended.

### Validator Testing

- Html files pass through the [W3C validator](https://validator.w3.org/) with no issues found.
  ![W3C validator message](/assets/images-readme/validator-html.png)

- CSS files pass through the [Jigsaw validator](https://jigsaw.w3.org/css-validator/) with no issues found.
  ![Jigsaw validator message](/assets/images-readme/validator-css.png)

- page has an excellent Accessibility rating in Lighthouse
  ![Accessibility score](/assets/images-readme/accessibility-score.png)

### Unfixed Bugs

- Navigation menu for mobile users can be better.
- Footer for mobile users can be better.
- There is no ALT text to images in products page. They are background images so its not possible to add it directly to the picture.

## Technologies Used

### Main Languages Used

- HTML5
- CSS3

### Frameworks, Libraries & Programs Used

- Google Fonts - for the font families: Special Elite, Raleway & Cabin Sketch. San-serif was used as a default font.
- Font Awesome - to add icons to the social links in the footer element.
- Codeanywhere - to creat my html files & styling sheet before pushing the project to Github.
- GitHub - to store my repository for submission.
- Devtools - to ensure the project looked good across all devices.
- Favicon.io - for the favicon.

## Deployment

The site was deployed to GitHub pages. The steps to deploy are as follows:

- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the debloy from a branch
- Once the main branch has been selected, click save and the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

### How to Fork it

1. On GitHub, go to [jindah/sodering](https://github.com/jindah/sodering).
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

1. Locate the [Repository](https://github.com/jindah/sodering).
2. Click "Code".
3. Click Clone or Download.
4. Copy the Git URL from the dialogue box.
5. Open a terminal window in your choosen directory using your preferred development editor.
6. Change the location to where you want the cloned directory to be.
7. Type `git clone`, and then paste the URL you copied.
8. Press Enter, and your local clone will be created.

## Credits

### Content

All text content comes from sodering current website https://www.sodering.se.

For the colouring: <http://colormind.io/>
Box shadow code: <https://getcssscan.com/css-box-shadow-examples>
Favicon: <https://favicon.io>

### Media

These two images came from Sodering current website https://www.sodering.se.

- installation_image.jpg at contact page. Photo by John Puolitaival.
- balcony_glazing_1.jpg at products page. Photo by John Puolitaival.

All the other images on the web page comes from their product supplier "Malmerk klaasium" <https://malmerkklaasium.ee/sv/>
