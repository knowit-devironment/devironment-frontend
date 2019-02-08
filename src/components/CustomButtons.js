import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Icon } from './Icons';
import { BUTTON_WIDTH } from '../dimensions';

// TODO: Button background color, shadow
export const CustomButton = ({ text, route, iconSrc }) => (
  <Button
    to={route}
    variant="contained"
    component={Link}
    onClick={() => console.log("Hei")}
    style={{
      height: '65px',
      width: BUTTON_WIDTH,
      fontSize: '17px',
      fontWeight: 'bold',
      borderRadius: '1px',
      backgroundColor: '#CDEBE7',
      marginBottom: '20px',
    }}
  >
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {(iconSrc != null) ? (
        <Icon imgSrc={iconSrc}/>
      ) : null }
      { text }
    </div>
  </Button>
);

// const CustomIconButton = ({ text, route }) => (
//   <Button
//
//   >
//     { text }
//   </Button>
// );

// export const ThrashButton = () => (
//
// );
