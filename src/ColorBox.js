import React, { Component } from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from './Styles/ColorBoxStyles';
import { withStyles } from '@material-ui/styles';


class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state= {
            copied: false
        }
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    

    changeCopyState() {
        this.setState({copied: true} , () => {
                setTimeout(() => 
                    this.setState({copied : false}), 1500);
            });
    }

    render(props) {
        const {name, background, moreUrl, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{background: background}} className={classes.colorBox}>
                    <div style={{background: background}} 
                         className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}/>
                    <div className={`${classes.copiedMessage} ${copied && classes.showCopiedMessage}`}>
                        <h1>Copied</h1>
                        <p>{background}</p>
                    </div>

                    <div className="copy-container">
                        <div className={classes.boxContent}>
                            <span className={classes.colorName}>{name} </span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>

                        {showingFullPalette&& (
                        <Link to={moreUrl} onClick={e => e.stopPropagation}>
                        <span className={classes.seeMoreButton}>More</span>
                        </Link>

                    )}  

                    </div>                  
                                                  
                
                </div>
            </CopyToClipboard>
            
        );
    }
}

export default withStyles(styles)(ColorBox);