import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QueryWrapper } from './lib/reactQuery';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Todos } from './todo/Todos';

ReactDOM.render(
  <React.StrictMode>
    <QueryWrapper>
      <>
        <Todos />
        <ReactQueryDevtools />
      </>
    </QueryWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
