import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/common/Footer';
import NavigationBar from './components/common/NavigationBar';
import SuspenseWrapper from './components/common/SuspenseWrapper';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';
import { ToggleDarkModeProvider } from './services/DarkModeContext';
import { getStore } from './store';

const store = getStore();

export const App = () => {
  return (
    <Provider store={store}>
      <ToggleDarkModeProvider>
        <Router>
          <NavigationBar />
          <SuspenseWrapper>
            <Routes>
              <Route
                path="/PokeApp-VL/"
                element={<MainPage />}
              />
              <Route
                path="/PokeApp-VL/about"
                element={<AboutPage />}
              />
              <Route
                path="/*"
                element={<NotFound />}
              />
            </Routes>
          </SuspenseWrapper>
          <Footer />
        </Router>
      </ToggleDarkModeProvider>
    </Provider>
  );
};
