import './App.css';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AboutPage from './components/AboutPage';
import Footer from './components/common/Footer';
import NavigationBar from './components/common/NavigationBar';
import MainPage from './components/MainPage';
import { ToggleDarkModeProvider } from './components/ToggleDarkModeProvider';
import { getStore } from './store';

const history = createBrowserHistory();
const store = getStore(history);

export const App = () => {
  return (
    <Provider store={store}>
      <ToggleDarkModeProvider>
        <Router>
          <NavigationBar />
          <Routes>
            <Route
              path="/PokeApp-VL"
              element={<MainPage />}
            />
            <Route
              path="/PokeApp-VL/about"
              element={<AboutPage />}
            />
          </Routes>
          <Footer />
        </Router>
      </ToggleDarkModeProvider>
    </Provider>
  );
};
