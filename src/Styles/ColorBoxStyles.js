 import Chroma from 'chroma-js';
 import sizes from './sizes'
 // eslint-disable-next-line import/no-anonymous-default-export
 export default {

    colorBox: {
        width: "20%",
        height: props => props.showingFullPalette ? "25%" : "50%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1",
            transition: "0.5s",
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: props => props.showingFullPalette ? "20%" : "50%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.showingFullPalette ? "15%" : "20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: props => props.showingFullPalette ? "5%" : "10%",
        }


    },

    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: " transform 0.5s ease-in-out",
        transform: "scale(0.1)",
        

    },

    showOverlay: {
        opacity: "1",
        zIndex: "10",
        transform: "scale(50)",
        position: "absolute",
    },

    copiedMessage: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: props => Chroma(props.background).luminance() >= 0.15 ? "black" : "white",
        


    },

    showCopiedMessage: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
        "& h1": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            color: props => Chroma(props.background).luminance() >= 0.15 ? "black" : "white",
            [sizes.down("md")]: {
                fontSize: "6rem"
            },
            [sizes.down("xs")]: {
                fontSize: "3rem"
            }

        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100",
            color: props => Chroma(props.background).luminance() >= 0.15 ? "black" : "white",

        }

    },


    copyText: {
       color: props => Chroma(props.background).luminance() >= 0.15 ? "black" : "white"
    },

    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",

    },

    colorName: {
        color: props => Chroma(props.background).luminance() >= 0.15 ? "black" : "white"
    },
    
    seeMoreButton: {
        background: "rgba(255, 255, 255, 0.3)",
        position: "absolute",
        border: "none",
        bottom: "0px",
        right: "0px",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase",
        color: props => Chroma(props.background).luminance() >= 0.15 ? "black" : "white"

    },

    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: props => Chroma(props.background).luminance() >= 0.15 ? "black" : "white",
        textTransform: "uppercase",
        border: "none",
        textDecoration: "none",
        opacity: "0",
        
    }
};