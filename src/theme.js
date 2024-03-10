import { createTheme } from "@material-ui/core/styles";

const colors = new Map([
    ["nightMoon", "#14365d"],
    ["mauve", "#A96762"],
    ["deepBlue", "#2F5C8F"],
    ["mandarin", "#d85c27"],
    ["midnightSun", "#D10000"],
    ["background", "#303030"],
    ["darkslategray", "#2f4f4f"],
    ["white", "#FFFFFF"],
]);


const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        }
    }
})



export { colors }

export default theme;










































