import React, { Component } from 'react';
import styled from '@emotion/styled';
import { ButtonGroup, Content } from '../other/globalStyles';
import { CustomButton } from './CustomButtons';
import qrIcon from '../assets/qr.svg'
import busIcon from '../assets/bus-front-black.svg'
import { BUTTON_WIDTH } from '../dimensions';


const Title = styled("h1")`
  font-size: 33px;
  margin-bottom: 20px;
`;

const Description = styled("p")`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 200px;
`;

class FinishView extends Component {

  render() {
    return (
      <Content>
        <div style={{width: BUTTON_WIDTH}}>
          <Title>
            Tusen takk..
          </Title>
          <Description>
            For at du hjelper oss med å sikre at det er riktig avfall i posene..
          </Description>
          <ButtonGroup>
            <CustomButton
              text="Scan flere poser"
              iconSrc={qrIcon}
            />
            <CustomButton
              text="Scan flere poser"
              iconSrc={busIcon}
            />
          </ButtonGroup>
        </div>
      </Content>
    )
  }
}

export default FinishView;