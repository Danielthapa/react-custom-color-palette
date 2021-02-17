import React, { Component } from 'react';
import seedColors from './seedColors'
import PaletteFormNav from './PaletteFormNav';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import ColorPickerForm from './ColorPickerForm';
import styles from './Styles/NewPaletteFormStyles';


class NewPaletteForm extends Component {

  static defaultProps = {
    maxColors: 20
  }

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            colors: seedColors[0].colors,
            
        }
        this.addNewColor = this.addNewColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeColor = this.removeColor.bind(this);
        this.clearColors = this.clearColors.bind(this);
        this.addRandomColor = this.addRandomColor.bind(this);
    
    }

    

    
    handleDrawerOpen = () => {
       this.setState({open: true});
      };
     
    handleDrawerClose = () => {
        this.setState({open: false});
      };

    

    handleChange(e){
        e.preventDefault();
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    

    addNewColor(newColor) {
        this.setState({colors: [...this.state.colors, newColor], newName: ""});
    }

    addRandomColor() {
      const allColors = this.props.palettes.map(p => p.colors);

      let isDuplicateColor = true;
      
      while(isDuplicateColor) {
        const randomPalette = allColors[Math.floor(Math.random() * allColors.length)];
        const randomColor = randomPalette[Math.floor(Math.random() * randomPalette.length)];
        console.log(randomColor);
        isDuplicateColor = this.state.colors.some( color => color.name === randomColor.name);
        const newColor = {
          color: randomColor.color,
          name: randomColor.name
      }
      this.setState({colors: [...this.state.colors, newColor], newName: ""});


      }
      

    }

    removeColor(colorName){
      this.setState({
        colors: this.state.colors.filter(color => color.name !== colorName)
      });
    }

    clearColors() {
      this.setState({
        colors: []
      })
    }

    onSortEnd = ({oldIndex, newIndex}) => {
      this.setState(({colors}) => ({
        colors: arrayMove(colors, oldIndex, newIndex)
      }));
    }

    handleSubmit(newP) {
      const name = newP.name;
      const newPalette = {
        paletteName: name,
        emoji: newP.emoji,
        id: name.toLowerCase().replace(/ /g, "-"),
        colors: this.state.colors

      }
      this.props.savePalette(newPalette);
      this.props.history.push("/");

    }

    render() {
        const { classes, theme, maxColors} = this.props;
        const { open, colors } = this.state;
        const paletteIsFull = colors.length >= maxColors;
      
        return (
          <div className={classes.root}>

            <PaletteFormNav
              open={open}
              handleDrawerOpen={this.handleDrawerOpen}
              handleSubmit={this.handleSubmit}
              palettes={this.props.palettes}

            />
            
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >

              <div className={classes.drawerHeader}>   

                <IconButton onClick={this.handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>

              </div>

              <Divider />

              <div className={classes.container}>
                <Typography className={classes.textDurPalette}>
                      Design Your Palette
                </Typography>

                <div className={classes.buttons}>
                    <Button variant="contained" color="secondary" onClick={this.clearColors}>Clear Palette</Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.addRandomColor}
                        disabled={paletteIsFull}
                    >
                        Random Color
                    </Button>
                </div>

                <ColorPickerForm            
                  paletteIsFull={paletteIsFull}
                  addNewColor={this.addNewColor} 
                  colors={colors}     
                />

              </div>

              

            </Drawer>

            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
                <DraggableColorList
                  colors={colors}
                  removeColor={this.removeColor}
                  axis='xy'
                  onSortEnd={this.onSortEnd}
                />
            </main>
          </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(NewPaletteForm);