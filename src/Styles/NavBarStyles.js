// eslint-disable-next-line import/no-anonymous-default-export
import sizes from './sizes'
// eslint-disable-next-line import/no-anonymous-default-export
export default {

    NavBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
    },

    Logo: {
        marginRight: "15px",
        padding:" 0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: " 'Roboto', sans-serif",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",  

        },
        [sizes.down("lg")]: {
           fontSize: "20px"
        },
        [sizes.down("md")]: {
            fontSize: "13px"
        },
        [sizes.down("xs")]: {
            display: "none",
        }
        
    },

    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-rail": {
            height: "8px"
        },
        "& .rc-slider-handle .rc-slider-handle:active .rc-slider-handle:focus .rc-slider-handle:hover": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "13px",
            height: "13px",
            marginTop: "-7px",
            marginLeft: "-3px",
        },
        "& .rc-slider-tract": {
            backgroundColor: "transparent"
        },
        [sizes.down("lg")]: {
            width: "280px"
         },
         [sizes.down("md")]: {
            width: "170px"
         },
         [sizes.down("xs")]: {
            width: "100px",
         }

    },

    sliderContainer: {
        "& span": {
            fontSize: "20px",
            [sizes.down("lg")]: {
                fontSize: "20px",
             },
             [sizes.down("md")]: {
                fontSize: "18px",
             },
             [sizes.down("xs")]: {
                fontSize: "15px",
                marginLeft: "3px"
             }
        }
    },

    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
        "& .MuiSelect_root": {
            [sizes.down("lg")]: {
                fontSize: "20px",
             },
             [sizes.down("md")]: {
                fontSize: "18px",
             },
             [sizes.down("xs")]: {
                fontSize: "15px",
             }
        }
    }
    
    
}