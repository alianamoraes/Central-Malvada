import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nProvider } from './i18n/I18nProvider';
import './styles/tailwind.css';
import './styles/fonts.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/updates.css';
import './styles/music.css';
import './styles/languages.css';

createRoot(document.getElementById('root')!).render(<StrictMode><I18nProvider><App /></I18nProvider></StrictMode>);

