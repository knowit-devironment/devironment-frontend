import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { Icon } from './Icons';

// TODO: Button background color, shadow
export const CustomButton = ({ text, route, iconSrc }) => (
  <Button
    to={route}
    variant="contained"
    component={Link}
    onClick={() => console.log("Hei")}
    style={{
      height: '65px',
      width: '252px',
      fontSize: '17px',
      borderRadius: '1px',
      backgroundColor: '#CDEBE7'
    }}
  >
    {(iconSrc != null) ? (
      <Icon imgSrc={iconSrc}/>
    ) : null }
    { text }
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
