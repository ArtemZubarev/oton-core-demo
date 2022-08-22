import React, {createContext} from 'react';
import './App.css';
import OtonHeader from './components/OtonHeader';

declare global {
  interface Window {
    config: any;
  }
}

const {config} = window;
const {theme} = config;

export const ThemeContext = createContext(theme);

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={{theme}}>
        <OtonHeader/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
