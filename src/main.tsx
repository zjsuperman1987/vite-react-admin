import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Router from "./router";
import store from './store';

import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <HashRouter>
            <Router />
        </HashRouter>
    </Provider>

)