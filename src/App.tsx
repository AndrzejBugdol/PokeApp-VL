import './App.css';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ToggleDarkModeProvider } from './components/common/DarkMode';
import Footer from './components/common/Footer';
import NavigationBar from './components/common/NavigationBar';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
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
              path="/"
              element={<MainPage />}
            />
            <Route
              path="/about"
              element={<AboutPage />}
            />
          </Routes>
          <Footer />
        </Router>
      </ToggleDarkModeProvider>
    </Provider>
  );
};
