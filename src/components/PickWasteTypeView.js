import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Content } from '../other/globalStyles';
import { CustomButton } from './CustomButtons';
import { ROUTE_SCAN_QR } from '../routes';
import trashIcon from '../assets/trash.svg'
import glassMetal from '../assets/glass-metal.svg'
import electronics from '../assets/electronics.svg'
import arrowDown from '../assets/arrow-down.svg'
import BackendApi from '../services/api';
import { WASTE_TYPE_ELECTRONICS, WASTE_TYPE_GLASS_METAL, WASTE_TYPE_MSW } from '../other/wasteTypes';

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

  constructor(props) {
    super(props);
    console.log(props.location.state.qr);

    this.state = {
      qr: this.props.location.state.qr
    }
  }

  handleWaste = (wasteType) => {
    const request = {
      bagId: this.state.qr,
      wasteCategory: wasteType,
      dateOfDisposal: "2019-02-08",
      userId: "manug"
    };
    console.log("Handle choice:",request)
    BackendApi.createWasteBag(request)
  };

  render() {
    return (
      <Content>
        <Title>
          Velg avfallstype..
        </Title>
        <ButtonGroup>
          <CustomButton
            text="Restavfall"
            iconSrc={trashIcon}
            onClick={() => this.handleWaste(WASTE_TYPE_MSW)}
          />
          <CustomButton
            text="Glass og metall"
            iconSrc={glassMetal}
            onClick={() => this.handleWaste(WASTE_TYPE_GLASS_METAL)}
          />
          <CustomButton
            text="Små elektronikk"
            iconSrc={electronics}
            onClick={() => this.handleWaste(WASTE_TYPE_ELECTRONICS)}
          />
          <CustomButton
            text="Vis flere valg"
            iconSrc={arrowDown}
          />
        </ButtonGroup>
      </Content>
    )
  }
}

export default PickWasteTypeView;