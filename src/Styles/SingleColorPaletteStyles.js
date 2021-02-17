
import sizes from './sizes'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    palette: {
        height: "97vh",
        display: "flex",
        flexDirection: "column",
    },
    colors: {
        height: "90%"
    },
    goBack: {
        width: "20%",
        height:"50%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        opacity: 1,
        [sizes.down("lg")]: {
            width: "25%",
            height: "50%",
        },
        [sizes.down("md")]: {
            width: "50%",
            height:"20%",
        },
        [sizes.down("xs")]: {
            width: "100%",
            height:"10%",
        }

    },
    
    goBackButton: {
        "& a": {
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
            background: "black",
            fontSize: "1rem",
            lineHeight: "30px",
            color: "white",
            textTransform: "uppercase",
            border: "none",
            textDecoration: "none",
            opacity: "1",

        }
        
    }
        
}