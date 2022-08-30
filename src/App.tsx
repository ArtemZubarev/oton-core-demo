import React, {createContext} from 'react';
import './App.css';
import UserInfo from './components/UserInfo';

// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';



import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { ThemeOptions } from '@mui/system';
import SampleHeader from './components/SampleHeader';

declare global {
  interface Window {
    config: any;
  }
}

const {config} = window;
// const {theme, api} = config;

// export const themeOptions: ThemeOptions = {
//   ...config.theme
// };
export const themeOptions = createTheme({
  ...config.theme
})
console.log(themeOptions)

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });

function App() {
  return (
    <div className="CoreApp">
      <ThemeProvider theme={themeOptions}>
        <SampleHeader/>
        <UserInfo/>
      </ThemeProvider>
    </div>
  );
}

export default App;
