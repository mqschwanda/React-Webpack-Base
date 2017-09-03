/* eslint-disable no-console */

import express from 'express';
import startup from './config';

const app = express();
startup(app);
