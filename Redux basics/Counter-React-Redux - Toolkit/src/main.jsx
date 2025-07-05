import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';

import App from './App.jsx'
import coutnerStore from './store/index.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {coutnerStore}>

      <App />
    </Provider>
    
  </StrictMode>,
)
