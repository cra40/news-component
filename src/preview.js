import React from 'react';
import ReactDOM from 'react-dom';
import NewsComponent from './components/news-component';

// By requiring the stylesheet here like this,
// webpack will append the contents inside a
// style tag in the document HEAD.

require('../styles/components/news-component.scss');

ReactDOM.render(<NewsComponent url="http://10.23.213.246:8080/newsFeed" />, window.container);