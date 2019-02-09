import React, { Component } from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player'
import vid50 from '../assets/GIF0-50.mp4'
import { ROUTE_PICK_WASTE_TYPE, ROUTE_SCAN_QR } from '../routes';
import { Redirect } from 'react-router-dom';


class ProgressView extends Component{

  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={ROUTE_SCAN_QR} />
    }
    return (
      <div
        onClick={() => this.setState({redirect: true})}
      >
        <ReactPlayer url={vid50} height='100vh' width='100vw' playing />
      </div>
    )
  }
}

export default ProgressView;