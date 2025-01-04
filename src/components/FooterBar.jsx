import React from 'react';
import {Box, styled} from "@mui/material";
import {colors} from "../theme.js";
import {Link} from "react-router-dom";


const FooterStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    height: '12vh',
    fontSize: '2rem',
    color: colors.get("nightMoon"),
    marginTop: theme.spacing(4),
    textAlign: 'center',
    backgroundColor: colors.get("nightMoon"),
    // position: 'absolute', /*change to fixed, so it stays in the same place even if scrolled*/
    // position: 'relative', /*change to fixed, so it stays in the same place even if scrolled*/
    position: 'fixed',
    bottom: 0,
// background-color: red; /*remove this for demonstration purposes only*/
//     bottom: 0,
    left: '50%',
// -webkit-transform: translate(-50%, 0);
    transform: 'translate(-50%, 0)',
    width: '100%',
}));

const LogoContainerStyles = styled(Box)(({theme}) => ({
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    flexDirection: "row",
    maxWidth: '100%',
    maxHeight: '20vh',
}));


const ImgStyles = styled(Box)(({theme}) => ({
    maxWidth: '15%',
    maxHeight: '10vh',
    borderRadius: 10,
    marginBottom: theme.spacing(2),
    backgroundColor: colors.get("nightMoon"),
    margin: 'auto'

}));




const FooterBar = () => {

    const onClick = (name) => {

    }


    return (
        <div>
            <FooterStyles>
                <LogoContainerStyles >
                    <ImgStyles component='img' src={'soldiers_logo_w_bg_md.png'} />
                    <ImgStyles component='img' src={'signal_logo_w_bg_md_white.png'} />
                    <ImgStyles component='img' src={'tivoli_logo_w_bg_md.png'} />
                    <ImgStyles component='img' src={'walker_logo_no_bg_md.png'} />
                </LogoContainerStyles>
            </FooterStyles>

        </div>
    );
};

export default FooterBar;