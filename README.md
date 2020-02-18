# Intern Application

This project is meant to be a creative, open-ended exploration of [React](https://reactjs.org/) as a way to gauge an applicant's understanding of and willingness to experiment with modern frontend development.

## Goals

What we're looking for:

- Basic understanding of React fundamentals
- Willingness to research and/or learn by reading code
- Willingness to ask questions when stuck
- Willingness to receive feedback
- Ability to follow directions
- Clean, consistent code

What we're not looking for:

- Perfection
- Whether you favor tabs or spaces (or other arbitrary style preferences)
- A full-fledged product
- Flawless design

We understand that this is for an internship position and don't expect the same kind of code that a senior developer might write. So while this project is **untimed**, don't spend a sunny weekend inside hacking away trying to make everything perfect; work on it until you get bored and send it on back.

## Bootstrapping

This project was scaffolded with [Create React App](https://github.com/facebook/create-react-app), so it follows many of the CRA conventions.

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) this project to your own Github account.
2. [Clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) the project to your computer.
3. Run `npm install` or `yarn install` from the project root folder to [install dependencies](https://docs.npmjs.com/cli/install).
4. Run `npm start` or `yarn start` to [start](https://create-react-app.dev/docs/available-scripts#npm-start) the CRA development server.

## Instructions

We have two custom components in this project - Parent (`/src/Parent.js`) and Child (`/src/Child.js`). Parent manages some state and passes that state to the Child component as props. The goal of this assignment is to use some or all of the props to customize the Child component. It can be anything - as serious or weird as you want.

1. Modify `Child.js` and `Child.css` to create your component.
2. [Commit](https://www.atlassian.com/git/tutorials/saving-changes) and [push](https://help.github.com/en/github/using-git/pushing-commits-to-a-remote-repository) as you work.
3. When finished, email a link to your forked project on Github.

### Props

Child is given these props:

- `blink`: a boolean that alternates between true/false about every second.
- `color`: a string that represents a color. It starts as the hex code for the color "steelblue".
- `setColor`: a callback function that sets the "color" state.

### Restrictions

- Unless a bug or a typo is discovered, the only files that should be edited are `/src/Child.js` and `/src/Child.css`. Other files can be read/used, but not modified.
- No additional dependencies should be added. Feel free to use any existing dependencies.
- No additional files should be created. The exception could be a test file for Child, but this is not required.