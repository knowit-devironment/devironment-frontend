import React, { Component } from 'react';
import styled from '@emotion/styled';
import QrReader from 'react-qr-reader'
import facepaint from 'facepaint';
import { Redirect } from 'react-router-dom';
import { ROUTE_PICK_WASTE_TYPE } from '../routes';


const breakpoints = [576, 768, 992, 1200];
const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`)
);

const QrReaderWrapper = styled("div")`
  align-content: center;
  ${mq({
  width: ['100%', '100%', '50%', '50%']},
)}
`;

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`;

const Description = styled("p")`
  color: white;
  font-size: 33px;
`;


class QrScan extends Component {
  constructor() {
    super();
    this.state = {
      qr: 'No result',
      redirect: false,
    };
  }

  handleError = error => {

  };

  handleScan = data => {
    if (data) {
      console.log(data);
      this.setState({
        qr: data,
        redirect: true,
      })
    }
  };

  render() {
    if (this.state.redirect) {
      // TODO: Different redirect when food and plastic based on parse
      return <Redirect push to={
        {pathname: ROUTE_PICK_WASTE_TYPE, state: {qr: this.state.qr}}
      } />
    } else return (
      <Content>
        <QrReaderWrapper>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </QrReaderWrapper>
        <Description>Scan QR: {this.state.qr}</Description>
      </Content>
    );
  }
}

export default QrScan;
