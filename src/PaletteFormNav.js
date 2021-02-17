import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './Styles/PaletteFormNavStyles';


class PaletteFormNav extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            formIsShowing: false

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    handleSubmit(newPaletteName) {
        this.props.handleSubmit(newPaletteName)
    }

    showForm() {
        this.setState({ formIsShowing: true })
    }

    hideForm() {
        this.setState({ formIsShowing: false})
    }

    render() {

        const { open, classes, handleDrawerOpen, palettes } = this.props;
         return(
            <div className="root">
                <CssBaseline />
                <AppBar
                position="fixed"
                color="default"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                >
                    <Toolbar className={classes.toolbar}>
                        <div>
                            <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                            >
                           <ChevronRightIcon />
                            </IconButton>
                           
                            <Typography variant="h6" noWrap>                                    
                                New Palette
                            </Typography>
                                      
                        </div>                                              
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to='/'>
                            <Button 
                                className={classes.button}
                                variant="contained" 
                                color="secondary">
                                GO BACK
                            </Button>
                        </Link>
                        <Button 
                            className={classes.button}
                            variant="contained" 
                            color="primary" 
                            onClick={this.showForm}>
                                Save Palette
                        </Button>                        
                    </div>
                    {this.state.formIsShowing && (
                    <PaletteMetaForm 
                        palettes={palettes}
                        handleSubmit={this.handleSubmit}
                        open={this.state.formIsShowing}
                        close={this.hideForm}
                    />
                    ) }
                </AppBar>

                

            </div>
            
        )
    }

}

export default withStyles(styles, {withTheme: true})(PaletteFormNav);