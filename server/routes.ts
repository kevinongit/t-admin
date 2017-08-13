import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import MovieCtrl from './controllers/movie';
import GolfclubCtrl from './controllers/golfclub';
import DataTest from './controllers/dataTest';
import InboxHandler from './controllers/inbox/inbox-handler';

import Cat from './models/cat';
import User from './models/user';


export default function setRoutes(app) {

  const dataTest = new DataTest();
  const inboxHandler = new InboxHandler();
  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const movieCtrl = new MovieCtrl();
  const golfclubCtrl = new GolfclubCtrl();

  // for test
  app.route('/api/test/').get(dataTest.getData);


  // Inbox
  app.route('/api/inboxes').get(inboxHandler.getData);

  // Cats
  app.route('/api/cats').get(catCtrl.getAll);
  app.route('/api/cats/count').get(catCtrl.count);
  app.route('/api/cat').post(catCtrl.insert);
  app.route('/api/cat/:id').get(catCtrl.get);
  app.route('/api/cat/:id').put(catCtrl.update);
  app.route('/api/cat/:id').delete(catCtrl.delete);

  // Users
  app.route('/api/login').post(userCtrl.login);
  app.route('/api/users').get(userCtrl.getAll);
  app.route('/api/users/count').get(userCtrl.count);
  app.route('/api/user').post(userCtrl.insert);
  app.route('/api/user/:id').get(userCtrl.get);
  app.route('/api/user/:id').put(userCtrl.update);
  app.route('/api/user/:id').delete(userCtrl.delete);

  // movie
  app.route('/api/movie').get(movieCtrl.getAll);
  app.route('/api/movie/:id').get(movieCtrl.getOneMovie);

  // Golfclubs
  app.route('/api/golfclubs').get(golfclubCtrl.getAll);
  app.route('/api/golfclubs/count').get(golfclubCtrl.count);
  app.route('/api/golfclubs/getfee').get(golfclubCtrl.getFee);
  app.route('/api/golfclub').post(golfclubCtrl.insert);
  app.route('/api/golfclub/:id').get(golfclubCtrl.get);
  app.route('/api/golfclub/:id').put(golfclubCtrl.update);
  app.route('/api/golfclub/:id').delete(golfclubCtrl.delete);
}
