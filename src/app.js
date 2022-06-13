/* eslint-disable no-console */
import express from 'express';
import http from 'http';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import _ from 'lodash';
import helmet from 'helmet';
import nocache from 'nocache';
import index from './routes';
import env from './config/env';

/**
 * Initialize express
 */
const app = express();

/**
 * Using Middleware
 */
app.use(helmet());
app.use(helmet.contentSecurityPolicy());
app.use(nocache());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../view')));
app.use(cors());

const status = _.lowerCase(env.APP_ENV) === 'development' ? 'dev' : 'tiny';
app.use(morgan(status));

const sessionSetting = {
  secret: env.AppKey,
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionSetting));

/**
 * Using Passport to authenticate
 */
app.use(passport.initialize());
app.use(passport.session());

/**
 * Web Api document
 */
const swaggerOptions = {
  definition: {
    info: {
      title: 'API 文件',
      version: '1.0.0',
      description: '後端 API 文件',
    },
  },
  apis: [
    'src/routes/public/*.js',
    'src/routes/private/*.js',
    'src/models/*.js',
  ],
};
const swaggerDocuments = swaggerJsdoc(swaggerOptions);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocuments));

/**
 * Define route
 */
app.use('/api', index);

/**
 * Initialize WebServer
 */
const server = http.createServer(app);
server.listen(env.Port);

server.on('listening', () => {
  const addr = server.address();
  console.log(`This server is on ${addr.port} ...`);
});
