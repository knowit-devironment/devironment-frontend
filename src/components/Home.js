import React, { Component } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { ROUTE_SCAN_QR } from '../routes';
import { CustomButton } from './CustomButtons';
import { Content } from '../other/globalStyles';
import qrIcon from '../assets/qr.svg'
import boldTrashIcon from '../assets/bold-trash.svg'
import pickTrashIcon from '../assets/pick-trash.svg'
import { Icon } from './Icons';
import { BUTTON_WIDTH } from '../dimensions';
import moment from 'moment';


const breakpoints = [576, 768, 992, 1200];
const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);

const WelcomeText = styled("h1")`
  font-size: 33px;
  margin-bottom: 100px;
`;

const Walkthrough = styled("div")`
  
`;

const StepBox = ({iconSrc, text}) => (
  <div style={{marginBottom: '3vh' }}>
      <Icon
        imgSrc={iconSrc}
      />
    <span style={{
      fontWeight: 'bold',
      fontSize: '23px',
      fontFamily: 'arial',
      marginLeft: '20px',
    }}>{text}</span>
  </div>
);

const SortButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;  
`;


// Dimensions
// Knapper font size: 17
// Header1: 33
// Header2: 23
// Small Description texts: 12
// Button
// rounded radius: 1px
// height: 65px
// width: 252px
// marginBottom: 20px
// shadow: blur: 4 spread: 0 x0, y2

class App extends Component {
  constructor() {
    super();
  }


  render() {
    const { match } = this.props;

    return (
      <Content>
        <div style={{width: BUTTON_WIDTH}}>
          <WelcomeText>
            {/* TODO: Insert name?*/}
            Hei på deg..!
          </WelcomeText>
          <Walkthrough>
            <StepBox iconSrc={qrIcon} text={"1. Scan QR på posen.."}/>
            <StepBox iconSrc={pickTrashIcon} text={"2. Velg avfall.."}/>
            <StepBox iconSrc={boldTrashIcon} text={"3. Kast posen.."}/>
            <SortButtonWrapper>
              <CustomButton text="Start sortering" route={ROUTE_SCAN_QR} />
            </SortButtonWrapper>
          </Walkthrough>
        </div>
      </Content>
    );
  }
}

export default App;
