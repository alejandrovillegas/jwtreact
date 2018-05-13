import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './features/commons/containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store =  configureStore();

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root')
);

registerServiceWorker();
