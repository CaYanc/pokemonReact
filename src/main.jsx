import ReactDOM from 'react-dom/client';
import { App } from './App';
// styles
import './sass/index.scss'

const rootElement = document.querySelector('#root');

const root = ReactDOM.createRoot(rootElement);

root.render(
 <App />
)
