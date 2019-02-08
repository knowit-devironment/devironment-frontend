import React, { Component } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import facepaint from 'facepaint';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { ROUTE_SCAN_QR } from './routes';
import { CustomButton } from './components/CustomButtons';
import QrScan from './components/QrScan';
import { Content } from './globalStyles';
import qrIcon from './assets/qr.svg'


const breakpoints = [576, 768, 992, 1200];
const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);

//
// const Content = styled("div")`
//   display: flex;
//   height: 100vh;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const WelcomeText = styled("h1")`
  font-size: 33px;
`;

const Walkthrough = styled("div")`
  
`;

const StepBox = ({icon, text}) => (
  <div style={{marginBottom: '3vh'}}>
    <span>insert icon</span>
    <span style={{
      fontWeight: 'bold',
      fontSize: '23px',
      fontFamily: 'arial'
    }}>{text}</span>
  </div>
);

const SortButtonWrapper = styled("div")`
  display: flex;
  justify-content: center;  
`;


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
    console.log(match);

    return (
      <div>
        <Content>
          <WelcomeText>
            {/* TODO: Insert name?*/}
            Hei på deg..!
          </WelcomeText>
          <Walkthrough>
            <StepBox icon={""} text={"1. Scan QR på posen"}/>
            <StepBox icon={""} text={"2. Velg avfall"}/>
            <StepBox icon={""} text={"3. Kast posen"}/>
            <SortButtonWrapper>
              <CustomButton text="Start sortering" route={ROUTE_SCAN_QR} />
            </SortButtonWrapper>
          </Walkthrough>
        </Content>
      </div>
    );
  }
}

export default App;
