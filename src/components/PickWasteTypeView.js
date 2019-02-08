import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Content } from '../globalStyles';
import { CustomButton } from './CustomButtons';
import { ROUTE_SCAN_QR } from '../routes';
import trashIcon from '../assets/trash.svg'
import glassMetal from '../assets/glass-metal.svg'
import electronics from '../assets/electronics.svg'

// const Content = styled("div")`
//   display: flex;
//   height: 100vh;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const ButtonGroup = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled("h1")`
  font-size: 33px;
  margin-bottom: 100px;
`;



class PickWasteTypeView extends Component {

  render() {
    return (
      <Content>
        <Title>
          Velg avfallstype..
        </Title>
        <ButtonGroup>
          <CustomButton text="Restavfall" route={ROUTE_SCAN_QR} iconSrc={trashIcon}/>
          <CustomButton text="Glass og metall" route={ROUTE_SCAN_QR} iconSrc={glassMetal} />
          <CustomButton text="Små elektronikk" route={ROUTE_SCAN_QR} iconSrc={electronics} />
          <CustomButton text="Vis flere valg" route={ROUTE_SCAN_QR} iconSrc={glassMetal} />
        </ButtonGroup>
      </Content>
    )
  }
}

export default PickWasteTypeView;