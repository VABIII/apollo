import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    cssVariables: true,
    palette: {
        custom: {
            light: '#D10000',
            main: '#14365d',
            dark: '#d85c27',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: "none",
                    ":hover": {
                    },
                },
            },
        },
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