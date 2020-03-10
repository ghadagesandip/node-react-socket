import React, { Component } from 'react';
import { withCookies, CookiesProvider } from 'react-cookie';
import { Provider } from "react-redux";
import { store } from "./store";
import './App.css';
import { SomethingWentWrong } from './pages/SomethingWentWrong';
import { Routes } from './routes';

class App extends Component{
  render(){
    return (
      <CookiesProvider>
        <Provider store={store}>
          <SomethingWentWrong>
            <Routes />
          </SomethingWentWrong>
        </Provider> 
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
