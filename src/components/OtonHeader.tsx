import { useContext } from 'react';
import logo from '../logo.svg';
import {ThemeContext} from '../App';

export default function OtonHeader() {
  const {theme} = useContext(ThemeContext);

  const styles = {
    ...theme
  };

  return (
    <header style={styles}>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}
