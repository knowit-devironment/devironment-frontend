import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/Home';
import { ROUTE_FINISH_VIEW, ROUTE_PICK_WASTE_TYPE, ROUTE_PROGRESS_VIEW, ROUTE_SCAN_QR } from './routes';
import QrScan from './components/QrScan';
import PickWasteTypeView from './components/PickWasteTypeView';
import FinishView from './components/FinishView';
import ProgressView from './components/ProgressView';


const AppRouter = () => (
  <BrowserRouter>
    <>
      <Route exact path="/" component={App} />
      <Route path={ROUTE_SCAN_QR} component={QrScan} />
      <Route path={ROUTE_PICK_WASTE_TYPE} component={PickWasteTypeView} />
      <Route path={ROUTE_FINISH_VIEW} component={FinishView} />
      <Route path={ROUTE_PROGRESS_VIEW} component={ProgressView} />
    </>
  </BrowserRouter>
);

export default AppRouter;