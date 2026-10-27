import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';

try {
  const html = renderToString(React.createElement(App));
  console.log('SUCCESS! Rendered length:', html.length);
} catch (err) {
  console.error('RENDER ERROR OCCURRED:');
  console.error(err);
}
