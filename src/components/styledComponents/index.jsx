import {Box, Grid2, styled, Typography} from "@mui/material";
import {colors} from "../../theme.js";
import {Link} from "react-router-dom";

const HomeStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    // alignItems: "center",
    height: "100vh",
    minHeight: 'calc(100vh - 170px)',
    // backgroundColor: colors.get("nightMoon")
    [theme.breakpoints.down("sm")]: {
        // width: "100%"
        justifyContent: "flex-start",
    }
}));

const LogoStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    // maxWidth: "50%",
    height: "40vh",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
        // width: "100%"
        marginTop: theme.spacing(4),
    }
}));


const TitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("mandarin"),
    fontSize: '1.5rem',
    fontWeight: 500,
    // padding: theme.spacing(2),
}));

const SubtitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("nightMoon"),
    fontWeight: 500,
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        paddingTop: theme.spacing(2),
        paddingBottom: 0,
    }
}));

const EventsStyles = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    // maxWidth: '75%',

}));

const EventStyles = styled(Grid2)(({theme}) => ({
    // width:"25%",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        marginTop: 0,
    }

}));

const TextStyles = styled(Typography)(({theme}) => ({
    // color: colors.get("nightMoon"),
    color: colors.get("darkGrey2"),
    fontSize: '2.25rem',
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
    }
}));

const LinkStyles = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    // color: colors.get("deepBlue"),
    color: theme.palette.text.secondary,
}));

const ImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '100%',
    borderRadius: 10,
    marginBottom: theme.spacing(2),
}));

const NoShowsBanner = styled(Box)(({theme}) => ({
        width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
    alignItems: "left",
    }
}));

const NoShowTitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("nightMoon"),
    fontWeight: 500,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    // paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(4),
    // padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",
        paddingTop: theme.spacing(2),
        paddingBottom: 0,
    }
}));

const NoShowSubTitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("darkGrey2"),
    fontSize: '2.25rem',
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    // paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(4),
    // padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
    }
}));

export {
    HomeStyles,
    LogoStyles,
    TitleStyles,
    SubtitleStyles,
    EventsStyles,
    EventStyles,
    TextStyles,
    LinkStyles,
    ImgStyles,
    NoShowsBanner,
    NoShowTitleStyles,
    NoShowSubTitleStyles,
}












































