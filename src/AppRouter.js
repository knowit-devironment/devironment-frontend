import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { ROUTE_SCAN_QR } from './routes';
import QrScan from './components/QrScan';


const AppRouter = () => (
  <BrowserRouter>
    <>
    <Route exact path="/" component={App} />
    <Route path={ROUTE_SCAN_QR} component={QrScan} />
    </>
  </BrowserRouter>
);

export default AppRouter;