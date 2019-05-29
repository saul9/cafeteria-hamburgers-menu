import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import  Paper  from '@material-ui/core/Paper';
import {styles} from './styles';  
import empty_modules from '../MenuItem/images/empty_modules.png'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {Container} from './styledComponents'
import { withStyles } from '@material-ui/core';

class Dialog extends React.Component{
  constructor(props) {
    super(props);
    this.state = { border: '' }
  }
  setGender(event) {
    this.setState({
      border:event.target.value,
    });
  }
    render(){
        const{classes,dialogState,setDialogState,setBorderColor,currentItem}=this.props;
        const handleClick=()=> {          
          setBorderColor(currentItem.id,this.state.border)
        }
        return (         
            <div>
            <Paper>       
              <Modal open={dialogState}>
                <Container className={classes.paper}>  
                <div > 
                  <img style={{width:'100%',height:'100%'}} src={empty_modules}></img> 
                </div>  
                <div>
                <Typography >
                  {currentItem.name}
                  </Typography>
                  <p>
                  <Typography>
                  {currentItem.description}
                  </Typography> 
                  <FormControl component="fieldset">                
                      <RadioGroup  aria-label="Gender"  name="borderColor" onChange={this.setGender.bind(this)}>
                        <FormControlLabel value="dashed" control={<Radio />} label="S" />
                        <FormControlLabel value="ridge" control={<Radio />} label="L" />
                        <FormControlLabel value="solid" control={<Radio />} label="M" />                    
                      </RadioGroup>
                    </FormControl>
                  </p>    
                  <Button onClick={handleClick} >Select</Button>               
                 </div>      
                 <div></div> 
                 <div className={classes.botton}>
                    <Button  onClick={()=>setDialogState()}>Close</Button> 
                 </div>
                </Container>
              </Modal>
              </Paper>
            </div>
          );
    };
}

export default withStyles(styles)(Dialog);