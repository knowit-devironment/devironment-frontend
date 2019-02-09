import React, { Component } from 'react';
import styled from '@emotion/styled';
import { ButtonGroup, Content } from '../other/globalStyles';
import { CustomButton } from './CustomButtons';
import qrIcon from '../assets/qr.svg'
import busIcon from '../assets/bus-front-black.svg'
import { BUTTON_WIDTH } from '../dimensions';
import { ROUTE_PROGRESS_VIEW, ROUTE_SCAN_QR } from '../routes';


const Title = styled("h1")`
  font-size: 33px;
  margin-bottom: 20px;
`;

const Description = styled("p")`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 100px;
`;

const Submessage = styled("h1")`
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 100px;
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
          <Submessage>
            Vi stoler på deg!
          </Submessage>
          <ButtonGroup>
            <CustomButton
              text="Scan flere poser"
              iconSrc={qrIcon}
              route={ROUTE_SCAN_QR}
            />
            <CustomButton
              text="Se fremgangen din"
              iconSrc={busIcon}
              route={ROUTE_PROGRESS_VIEW}
            />
          </ButtonGroup>
        </div>
      </Content>
    )
  }
}

export default FinishView;