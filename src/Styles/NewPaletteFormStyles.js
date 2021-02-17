
import { drawerWidth }  from '../Constants'

const styles = theme => ({
    root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        display: "flex",
        alignItems: "center"
      },
      drawerHeader: {
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // height: "100vh",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
      },
      textDurPalette: {
        fontSize: "25px"
    
      },
      content: {
        flexGrow: 1,
        height: "calc(100vh - 64px)",
        padding: 0,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
      container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column" ,
        justifyContent: "center",
        alignItems: "center"
    
      },
      buttons: {
       
      },
})

export default styles;