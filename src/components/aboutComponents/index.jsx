import {Box, Card, Container, Link, styled, Typography} from "@mui/material";
import ReactMarkdown from "markdown-to-jsx";
import {TitleStyles} from "../styledComponents/index.jsx";
import {colors} from "../../theme.js";

const options = {
    shouldForwardProp: (prop) => prop !== 'hoverShadow',
};

const AboutContainerStyles = styled(Container)(({theme}) => ({
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "center",
    marginTop: "3rem",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
        marginTop: 0,
    },
}));

const AboutBodyStyles = styled(Typography)(({theme}) => ({
    color: colors.get("darkGrey2"),
    fontSize: '1.75rem',
    padding: `${theme.spacing(2)} ${theme.spacing(0)} ${theme.spacing(2)} ${theme.spacing(0)}`,
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
        fontSize: '1rem',
    },
}));



const InvolvedLinkStyles = styled(Link)(({theme}) => ({

}));

const InvolvedTitleStyles = styled(Typography)(({theme}) => ({
    color: colors.get("mandarin"),
    fontSize: '2.25rem',
    fontWeight: 500,
    textAlign: 'left',
}))

const InvolvedBodyStyles = styled(Typography)(({theme}) => ({
    color: colors.get("darkGrey2"),
    fontSize: '1.75rem',
    [theme.breakpoints.down("sm")]: {
        paddingBottom: 0,
        fontSize: '1rem',
    },
}));

const InvolvedBoxStyles = styled(Box)(({theme}) => ({
    width: "100%",
    // padding: `${theme.spacing(2)} ${theme.spacing()}`,
}));

const AboutCardStyles = styled(Card, options)(({theme, hoverShadow = 1}) => ({
    padding: theme.spacing(8),
    borderRadius: theme.spacing(3),
    margin: theme.spacing(4),
    boxShadow: theme.shadows[3],
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        justifyContent: "center",
        margin: 0,
    },
    ':hover': {
        boxShadow: theme.shadows[hoverShadow],
    },
}));





const AboutContainer = ({ t }) => {
    const bodyText =  t('AboutBodyContent', {returnObjects: true});

    console.log(bodyText)


    const renderLink = (text) => {
        const options = {
            overrides: {
                a: { component: (props) => <Link id={'linkAdd'} target="_blank" {...props} /> },
            },
        };
        return <ReactMarkdown options={options}>{text}</ReactMarkdown>;
    };

    return (
        <AboutContainerStyles>
            <AboutCardStyles hoverShadow={10}>
                <InvolvedBoxStyles>
                    <InvolvedTitleStyles>{t('AboutTitle')}</InvolvedTitleStyles>
                    {
                        bodyText.map(text => (<AboutBodyStyles component={'p'}>{text}</AboutBodyStyles>))
                    }
                </InvolvedBoxStyles>
                <InvolvedBoxStyles>
                    <InvolvedTitleStyles>{t('GetInvolvedTitle')}</InvolvedTitleStyles>
                    <InvolvedBodyStyles variant="h5">{t('GetInvolvedBody')}{renderLink(t('ClmContact'))}</InvolvedBodyStyles>
                </InvolvedBoxStyles>
                <InvolvedBoxStyles>
                    <InvolvedTitleStyles>{t('ConnectTitle')}</InvolvedTitleStyles>
                    <InvolvedBodyStyles variant="h5">{t('ConnectBody')}</InvolvedBodyStyles>
                </InvolvedBoxStyles>
            </AboutCardStyles>
        </AboutContainerStyles>
    )

};


export {
    AboutContainer,
}
































export {

};