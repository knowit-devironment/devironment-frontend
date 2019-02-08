import React, { Component } from 'react';
import styled from '@emotion/styled';
import QrReader from 'react-qr-reader'
import facepaint from 'facepaint';


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
`;

class QrScan extends Component {
  constructor() {
    super();
    this.state = {
      result: 'No result'
    };
  }

  render() {
    return (
      <Content>
        <QrReaderWrapper>
          <QrReader
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </QrReaderWrapper>
        <p>Scan QR</p>
      </Content>
    );
  }
}

export default QrScan;
