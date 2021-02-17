
import sizes from './sizes';
import bg from './bg.svg'
// eslint-disable-next-line import/no-anonymous-default-export
export default {

    "@global": {

        ".fade-exit": {
            opacity: 1
        },  

        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
        }

    },
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        backgroundImage: `url(${bg})`,
        overflow: "scroll",
        
        
    },
    container: {
        width: "50%",
        dispaly: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("xl")]: {
            width: "50%"
        },
        [sizes.down("lg")]: {
            width: "60%"
        },
        [sizes.down("md")]: {
            width: "70%"
        },
        [sizes.down("sm")]: {
            width: "70%"
        },
        [sizes.down("xs")]: {
            width: "70%"
        },

    },
    nav:{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        "& h1": {
            color: "white"
        },
        "& a": {
            color: "white",
            textDecoration: "none"
        }



    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%",
        [sizes.down("xl")]: {
            gridTemplateColumns: "repeat(3, 30%)",
        },
        [sizes.down("lg")]: {
            gridTemplateColumns: "repeat(3, 30%)",
            gridGap: "4%",
        },
        [sizes.down("md")]: {
            gridTemplateColumns: "repeat(3, 30%)",
            gridGap: "3%",
        },
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(2, 50%)",
            gridGap: "3%",
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 100%)",
            gridGap: "1%",
        },
        

    }
};