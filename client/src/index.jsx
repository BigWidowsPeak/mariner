import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';

fontawesome.library.add(brands, solid);

ReactDOM.render(<App />, document.getElementById('root'));