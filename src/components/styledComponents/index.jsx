import {Box, Card, Container, Grid2, styled, Typography} from "@mui/material";
import {colors} from "../../theme.js";
import {Link} from "react-router-dom";

const HomeStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    // alignItems: "center",
    height: "100vh",
    minHeight: 'calc(100vh - 170px)',
    maxWidth: '100%',
    // backgroundColor: colors.get("nightMoon")
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
    },
}));

const LogoStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    maxWidth: "100%",
    // height: "110vh",
    justifyContent: "center",
    // borderRadius: 10,
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    }
}));


const TitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("mandarin"),
    fontSize: '2.5rem',
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
    fontSize: '1.5rem',
    fontWeight: 500,
}));

const ImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '100%',
    borderRadius: 10,
    marginBottom: theme.spacing(2),

}));

const NoShowsBoxStyles = styled(Box)(({theme}) => ({
    // backgroundColor: theme.palette.custom.light,
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        padding: 0,
    }
}))

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
        width: "100%"
    }
}));

const NoShowTitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("nightMoon"),
    fontWeight: 500,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
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

const VenueContainerStyles = styled(Container)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    // height: "100vh",
    minHeight: 'calc(100vh - 170px)',
    // backgroundColor: colors.get("nightMoon")
    [theme.breakpoints.down("sm")]: {
        // width: "100%"
        justifyContent: "flex-start",
    }
}));

const VenueListStyles = styled(Grid2)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "flex-start",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    // maxWidth: '75%',
    [theme.breakpoints.down("sm")]: {
        // width: "100%",
        justifyContent: "center",
        alignItems: "center",

    }

}));

const VenueStyles = styled(Grid2)(({theme}) => ({
    // // width:"25%",
    // height: "300px",
    // padding: theme.spacing(3),
    // borderRadius: 10,
    // margin: theme.spacing(4),
    // [theme.breakpoints.down("sm")]: {
    //     width: "100%",
    //     marginTop: 0,
    // }

    width:"33%",
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "flex-start",
    }
}));

const VenueCard = styled(Card)(({theme}) => ({
    // width: "100%",
    display: "flex",
    // width:"45%",
    // padding: theme.spacing(3),
    borderRadius: theme.spacing(3),
    margin: theme.spacing(4),
    boxShadow: theme.shadows[5],
    // boxShadow: "5px 10px #14365D",
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "center",
        margin: 0,
        marginTop: theme.spacing(4),
    }
}))

const VenueCardImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '33%',
    // backgroundColor: '#14365D',
    borderRadius: 10,
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        maxWidth: '40%',
    }

}));

const VenueCardTextStyles = styled(Typography)(({theme}) => ({
    // color: colors.get("nightMoon"),
    color: colors.get("darkGrey2"),
    fontSize: '1.75rem',
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: theme.spacing(2),
    }
}));

const VenuesTitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("nightMoon"),
    fontWeight: 500,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    // paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(4),
    // padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        textAlign: "left",

        paddingBottom: 0,
    }
}));

const HomeCardTextStyles = styled(Typography)(({theme}) => ({
    // color: colors.get("nightMoon"),
    color: colors.get("darkGrey2"),
    fontSize: '2.25rem',
    // padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
    }
}));

const HomeCardLinkStyles = styled(Link)(({theme}) => ({
    textDecoration: 'none',
    // color: colors.get("deepBlue"),
    color: theme.palette.text.secondary,
}));

const HomeCardTitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("mandarin"),
    fontSize: '2.25rem',
    fontWeight: 500,
    // padding: theme.spacing(2),
}));

const HomeCardBoxStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    maxWidth: '60%',
    margin: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
}))


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
    NoShowsBoxStyles,
    VenueContainerStyles,
    VenueListStyles,
    VenueCard,
    VenueStyles,
    VenuesTitleStyles,
    VenueCardTextStyles,
    VenueCardImgStyles,
    HomeCardTextStyles,
    HomeCardLinkStyles,
    HomeCardTitleStyles,
    HomeCardBoxStyles,
}









































