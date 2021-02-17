import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import styles from './Styles/NavBarStyles';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/styles';



class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(e) {
        this.setState({
            format: e.target.value,
            open: true});
        this.props.handleChange(e.target.value);

    }

    closeSnackBar() {
        this.setState({open: false})
    }

    handleClose(event, reason) {
        if(reason === 'clickaway') {
            return;
        }
        this.setState({open: false})
    }

    render() {
        const {level, changeLevel, showingAllColors, classes} = this.props;
        const {format, open} = this.state;
        return(
            <header className={classes.NavBar}>
                <div className={classes.Logo}>
                    <Link to='/'>React Color Palette</Link>
                </div>
                {showingAllColors && (
                    <div className={classes.sliderContainer}>
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider  
                        defaultValue={level} 
                        min={100} 
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                        />
                    </div>
                </div>

                )}
                
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1)</MenuItem>
                    </Select>
                </div>
                <Snackbar anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left"
                }}
                
                open={open}
                autoHideDuration={3000}
                message={<span id='message-id'>Format changed to {format}</span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={this.handleClose}
                action={[
                    <IconButton 
                       onClick={this.closeSnackBar}
                       color='inherit'
                       key='close'
                       aria-label='close'
                       >
                        X
                    </IconButton>
                ]
                    
                }
                />
                
                
                 
            </header>
        )
    }
}

export default withStyles(styles)(NavBar);