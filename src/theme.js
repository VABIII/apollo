import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    /* hide scrollbar for IE, Edge and Firefox */
    msOverflowStyle: 'none',
    scrollbarWidth: 'none',
    /* hide scrollbar for chrome, safari and opera */
    webkitScrollbar: {
        display: 'none'
    },


});

export const colors = new Map([
    ["nightMoon", "#14365d"],
    ["mauve", "#A96762"],
    ["deepBlue", "#2F5C8F"],
    ["mandarin", "#d85c27"],
    ["midnightSun", "#D10000"],
    ["offWhite", "#FAF9F6"],
    ["darkGrey", "#6C757D"],
    ["darkGrey2", "#A9A9A9"],
]);

export default theme;