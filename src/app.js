import express from 'express';
import routes from './app/routes';
import Youch from 'youch';

import './database';

class App {
  constructor () {
    this.server = express();

    this.routes();
    this.exceptionHandler()
  }

  routes () {
    this.server.use(routes);
    this.server.use(function (_, res, ___) {
      const erro = new Error("Route not found");
      return res.status(404).json({
        message: erro.message
      });
    });
  }

  exceptionHandler () {
    this.server.use(async (err, req, res, next) => {
      if(process.env.NODE_ENV == 'development') {
        const errors = await Youch(err, req).toJson();

        return res.status(500).json(errors);
      }
      const { status, message } = err;

      if (status && status !== 500)
        return res.status(status).json({ error: message });

      return res.status(500).json({ error: 'Internal server error' });

    });
  }
}

export default new App().server;