import { Link } from 'react-router-dom';

import { useDarkThemeContext } from '../../../services/DarkModeContext';
import { Header, Icon, Nav, Ul } from './styles';

const NavigationBar = () => {
  const DarkThemeContext = useDarkThemeContext();

  return (
    <Nav>
      <Header>PokeApp</Header>
      <Ul>
        <li>
          <Link to="/PokeApp-VL/">Home</Link>
        </li>
        <li>
          <Link to="/PokeApp-VL/about">About</Link>
        </li>
        <li>
          {DarkThemeContext.isDarkMode ? (
            <Icon
              style={{ WebkitTextFillColor: 'rgba(0,0,0, 0.7)' }}
              onClick={DarkThemeContext.toggleDarkMode}
              className="fa fa-certificate"
            />
          ) : (
            <Icon
              style={{ WebkitTextFillColor: 'rgba(0,0,0, 0.7)' }}
              onClick={DarkThemeContext.toggleDarkMode}
              className="fa fa-moon-o"
            />
          )}
        </li>
      </Ul>
    </Nav>
  );
};

export default NavigationBar;
