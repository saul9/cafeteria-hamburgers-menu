import React from 'react';
import PropTypes from 'prop-types';
import { Container,card ,details,} from './styleComponents';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import empty_modules from './images/empty_modules.png'

class MenuCard extends React.Component {
  
  render() {
    const {     
      item,
      onClick,
    } = this.props;
  
    return (
      <Container border={`${item.border}`} >
        <Card  className={card} >
          <CardContent>
            <div>
              <img style={{maxWidth: '250px', maxHeight: '150px'}} src={empty_modules}></img>
            </div>
            <div style={details}>
              <Typography >
             {item.name}
              </Typography>  
              <Typography>         
              {item.price}
              </Typography>
            </div>
          </CardContent>
          <CardActions style={{display:'grid'}} >
            <Button size="small" onClick={onClick}>Details</Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

MenuCard.propTypes = {
  onClick: PropTypes.func,
  border: PropTypes.string,
};

export default  MenuCard;
