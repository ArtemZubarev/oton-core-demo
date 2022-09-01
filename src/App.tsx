import React, {createContext} from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { ThemeOptions } from '@mui/system';
import SampleHeader from './components/SampleHeader';

declare global {
  interface Window {
    config: any;
  }
}

export const {config} = window;

export const Config = createContext(config);

export const themeOptions = createTheme({
  ...config.theme
});

function App() {
  return (
    <div className="CoreApp">
      <Config.Provider value={config}>
        <ThemeProvider theme={themeOptions}>
          <SampleHeader/>
          <UserInfo/>
        </ThemeProvider>
      </Config.Provider>
    </div>
  );
}

export default App;
