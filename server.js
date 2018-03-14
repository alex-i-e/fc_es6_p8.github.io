import express from 'express';
import path from 'path';
import serverTemplate from "./src/serverTemplate";
import { renderToString } from 'react-dom/server';
import Root from "./src/components/Root/Root";
import React from 'react';
import { BrowserRouter, StaticRouter } from "react-router-dom";
import App from "./src/components/App";


const app = express();

// app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {

  // res.sendFile(path.join(__dirname, 'build', 'index.html'));


  const context = {};
  const appString = renderToString(
    <BrowserRouter
      location={req.url}
      context={context}
    >
      <App/>
    </BrowserRouter>
  );
  // const appString = renderToString(<Root/>);
  res.send(serverTemplate(appString));
});

app.listen(9000);
console.log('GOOD: /localhost:9000');