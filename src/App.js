import { BrowserRouter } from 'react-router-dom';
import './assets/styles/App.scss';
import '@rmwc/icon/styles';
import '@rmwc/icon-button/styles';
import MainComponent from './Components/MainComponent';
import ScrollToTop from './Components/Common/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <MainComponent/>
    </BrowserRouter>
  );
}

export default App;
