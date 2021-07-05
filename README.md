# Lotto Game

This project is a very small Lotto game demonstration using React, Mobx and TailwindCSS.

The player starts of with 3 tabs and can add up to 3 additional ones. There are buttons on the bottom left of the board
allowing the user to:

* Clear current tab
* Clear all tabs
* Quick select current tab
* Quick select all tabs
* Reset the game to the default state

For each tab, the player can pick the system they want to use and the numbers of their choice (from 1 up to 49). If the selected numbers don't match the selected system a corresponding error will be shown. Additionally an indicator next to the tab index will be shown which has three states:

* White border, no fill, when the tab is selected and no numbers have been selected
* Red, when the given tab has an error (visible any time)
* Green, when the given tab is valid (visible any time)

In the bottom right corner we see the current board's price and the total price as well as a "play all" button. The later is enabled only when all tabs are valid. For the purposes of this game, a tab is considered to be valid when either no numbers have been selected (in which case it would be ignored) or when the selected numbers match the selected system for the tab.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.