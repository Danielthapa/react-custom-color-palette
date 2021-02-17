import { drawerWidth }  from '../Constants'
import sizes from './sizes'

const styles = theme => ({
    root: {
        display: "flex",
        

    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,          
        }),
        flexDirection : "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px"
      },
      appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },

      navBtns: {
          marginRight: "1rem", 
          "& a": {
              textDecoration: "none"
          },
        [sizes.down("xs")]: {
            marginRight: "0.5rem"
        }        

      },
      button: {
          margin: "0 0.5rem",
          "& span": {
            [sizes.down("xs")]: {
              fontSize: "10px",
             
          } 

          },
          [sizes.down("xs")]: {
            margin: 0,
            padding: "3px"
        }        

          
          
      },
          
      menuButton: {
        marginRight: theme.spacing(2),
      },
      hide: {
        display: 'none',
      },

})

export default styles;