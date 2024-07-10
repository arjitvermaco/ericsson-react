// import './index.css';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('main'))

root.render(
  <div>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
)