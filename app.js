import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const ele = React.createElement('h1', {style:{color:'red'}}, 'Rendered using React');
root.render(ele);