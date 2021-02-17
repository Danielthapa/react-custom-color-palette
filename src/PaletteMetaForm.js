import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Typography from '@material-ui/core/Typography'
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'

class PaletteMetaForm extends Component {

    constructor(props){
        super(props);
        this.state = ({
            open: this.props.open,
            newPaletteName: "" ,
            isnameAdded: false,
            emoji: ""  ,
            isEmojiAdded: false      
        })
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.backToName = this.backToName.bind(this);
    }

    
    handleChange(e) {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showEmojiPicker() {
        this.setState({
            isnameAdded: true,
            open: false
        })
    }
    
    savePalette(emoji, event) {
        this.setState({
             emoji: emoji.native,
             isEmojiAdded: true,
             isnameAdded: false
            })   
    }

    backToName() {
        this.setState({
            isnameAdded: false,
            open: true
            
        })
    }

    handleSubmit() {
        const newPalette = {
            name: this.state.newPaletteName,
            emoji: this.state.emoji
        }
         this.props.handleSubmit(newPalette)
        
    
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            if(this.props.palettes.every(
              ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )){
              return true;
            }
             return false;
          });
    }

    render() {
        const { open, newPaletteName, isnameAdded, emoji, isEmojiAdded } = this.state;
        return(
            <div>
                <Dialog open={isnameAdded} onClose={this.props.close}>
                    <Picker 
                        title="Pick a palette Emoji"
                        set='apple' 
                        onSelect={this.savePalette}
                    />
                    <DialogActions>
                                <Button size="medium" variant="contained" color="secondary" onClick={this.backToName} >
                                    Go Back
                                </Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={open} onClose={this.props.close} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">
                        Choose A Palette Name
                    </DialogTitle>
                    <ValidatorForm onSubmit={this.showEmojiPicker}>                            
                        <DialogContent>
                            <DialogContentText>
                                Please enter a name for your new beautiful palette. It needs to be unique.
                            </DialogContentText> 
                        </DialogContent>
                            <TextValidator 
                                label="Palette Name"
                                value={newPaletteName}
                                name="newPaletteName"    
                                onChange={this.handleChange}
                                fullWidth
                                margin="normal"
                                validators={[
                                    'required',
                                    'isPaletteNameUnique'

                                ]}
                                errorMessages={[
                                    "input required",
                                    'palette name already exists'
                                ]}                           
                                />
                            <DialogActions>
                                <Button size="medium" variant="contained" color="secondary" onClick={this.props.close} >
                                    Cancel
                                </Button>
                                <Button size="medium" variant="contained" color="primary" type="submit" >
                                    Save Palette
                                </Button> 
                                
                            </DialogActions>
                    </ValidatorForm>
                </Dialog>
                <Dialog open={isEmojiAdded} onClose={this.props.close}>
                    <DialogTitle id="form-dialog-title">
                        Your Palette Name and Emoji
                    </DialogTitle>
                    <DialogContent>
                            <DialogContentText>
                                Are you sure you want to add this as your new palette name and emoji?
                            </DialogContentText> 
                            <Typography gutterBottom>
                                Palette Name: {newPaletteName}
                                <div> Emoji: {emoji}</div>                               
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                                <Button size="medium" variant="contained" color="secondary" onClick={this.props.close} >
                                    Cancel
                                </Button>
                                <Button size="medium" variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>
                                    Confirm
                                </Button> 
                                
                        </DialogActions>
                </Dialog>

            </div>

        )
    }
}

export default PaletteMetaForm;