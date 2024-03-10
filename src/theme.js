import { createTheme } from "@material-ui/core/styles";

const colors = new Map([
    ["nightMoon", "#14365d"],
    ["mauve", "#A96762"],
    ["deepBlue", "#2F5C8F"],
    ["mandarin", "#d85c27"],
    ["midnightSun", "#D10000"],
    ["background", "#303030"],
]);


const theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            500: colors.get("mandarin")
        },
        secondary: {
            main: "#FFFFFF"
        },

    }
})



export { colors }

export default theme;










































