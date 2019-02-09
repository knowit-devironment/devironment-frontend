import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { ROUTE_PICK_WASTE_TYPE, ROUTE_SCAN_QR } from './routes';
import QrScan from './components/QrScan';
import PickWasteTypeView from './components/PickWasteTypeView';
import FinishView from './components/FinishView';


const AppRouter = () => (
  <BrowserRouter>
    <>
    <Route exact path="/" component={FinishView} />
    <Route path={ROUTE_SCAN_QR} component={QrScan} />
    <Route path={ROUTE_PICK_WASTE_TYPE} component={PickWasteTypeView} />
    </>
  </BrowserRouter>
);

export default AppRouter;