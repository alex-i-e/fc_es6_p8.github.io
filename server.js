import express from 'express';
import {renderToString} from 'react-dom/server';
import React from 'react';
import serverTemplate from "./src/serverTemplate";
import App from "./src/components/App";
import {StaticRouter} from "react-router-dom";

const app = express();

// app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {

    // res.sendFile(path.join(__dirname, 'build', 'index.html'));

    const context = {};
    const appString = renderToString(
        <StaticRouter location={req.url}
                      context={context}>
            <App/>
        </StaticRouter>
    );
    {/*<StaticRouter location={req.url}
                  context={context}>
        <App/>
    </StaticRouter>*/
    }

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
        res.writeHead(302, {
            Location: context.url
        });
        res.end();
    } else {
        res.send(serverTemplate(appString));
        res.end();
    }

});
app.use('/static', express.static('../build/static'));

app.listen(9000);
console.log('GOOD: /localhost:9000');