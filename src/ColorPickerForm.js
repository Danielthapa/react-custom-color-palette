import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/styles';
import styles from './Styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {   

    constructor(props) {
        super(props);
        this.state= ({
            currentColor: "teal",
            newName: ""
        })
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isNameUsed', value => {
          if(this.props.colors.every(
            ({name}) => name.toLowerCase() !== value.toLowerCase()
          )){
            return true;
          }
           return false;
        }); 

        ValidatorForm.addValidationRule('isColorUnique', value => {
            if(this.props.colors.every(
              ({color}) => color !== this.state.currentColor
            )){
              return true;
            }
             return false;
          }); 
    }

    componentWillUnmount() {
        // remove rule when it is not needed
        ValidatorForm.removeValidationRule('isNameUsed', 'isColorUnique');
    }
  


    updateCurrentColor(newColor) {
        this.setState({
          currentColor: newColor.hex
        })
      }
      
    addNewColor() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newName
        }
        this.setState({
            newName: ""

        })
        this.props.addNewColor(newColor);
      }

    handleChange(e){
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newName } = this.state;
        return(
            <div className={classes.pickerContainer}>
                <ChromePicker 
                    className={classes.picker}
                    color={currentColor}
                    onChangeComplete = {newColor => this.updateCurrentColor(newColor) }
                />
                <ValidatorForm
                    ref="form"
                    onSubmit={this.addNewColor}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                        className={classes.colorNameInput}
                        label="Color"
                        onChange={this.handleChange}
                        variant="filled"
                        margin="normal"    
                        name="newName"
                        value={newName}
                        validators={[
                                    'isNameUsed',
                                    'isColorUnique',
                                    'required'
                                ]}
                        errorMessages={[
                             
                            'Name already added',
                            'Color had already been used',
                            "input required"
                        ]}
                    />
                    <Button 
                    className={classes.addColor}
                    variant="contained" 
                    type='submit'
                    color="primary" 
                    style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
                    disabled={paletteIsFull}
                    >
                        Add Color
                </Button>
                </ValidatorForm>
            </div>
        


        )
    }
}

export default withStyles(styles)(ColorPickerForm);