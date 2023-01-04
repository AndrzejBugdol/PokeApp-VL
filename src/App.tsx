import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Footer } from './Components/Footer';
import { MainPage } from './Components/MainPage';
import { NavigationBar } from './Components/NavigationBar';
import { AboutPage } from './Components/AboutPage';
import { ToggleDarkModeProvider } from './Components/ToggleDarkModeProvider';
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
