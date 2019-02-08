import React from 'react';
import qrIcon from '../assets/qr.svg'
import arrowDownIcon from '../assets/arrow-down.svg'
import boldTrashIcon from '../assets/bold-trash.svg'
import busFrontBlackIcon from '../assets/bus-front-black.svg'
import busFrontWhiteIcon from '../assets/bus-front-white.svg'
import cameraIcon from '../assets/camera.svg'
import electronicsIcon from '../assets/electronics.svg'
import glassMetalIcon from '../assets/glass-metal.svg'
import pickTwoIcon from '../assets/pick-two.svg'
import trashIcon from '../assets/trash.svg'



export const Icon = ({imgSrc}) => (
  <img
    src={imgSrc}
    style={{
      marginRight: '10px',
    }}
  />
);

export const ArrowDownIcon = () => (
  <Icon imgSrc={arrowDownIcon} />
);

export const BoldTrashIcon = () => (
  <Icon imgSrc={boldTrashIcon} />
);

export const BusFrontBlackIcon = () => (
  <Icon imgSrc={busFrontBlackIcon} />
);

export const BusFrontWhite = () => (
  <Icon imgSrc={busFrontWhiteIcon} />
);

export const CameraIcon = () => (
  <Icon imgSrc={cameraIcon} />
);

export const ElectronicsIcon = () => (
  <Icon imgSrc={electronicsIcon} />
);

export const GlassMetalIcon = () => (
  <Icon imgSrc={glassMetalIcon} />
);

export const PickTwoIcon = () => (
  <Icon imgSrc={pickTwoIcon} />
);

export const QrIcon = () => (
  <Icon imgSrc={qrIcon} />
);

export const TrashIcon = () => (
  <Icon imgSrc={trashIcon} />
);


