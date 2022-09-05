import express from 'express';
import {
  addLink,
  deleteLink,
  getLink,
  getLinks,
  updateLink,
} from '../controllers/link.controller';

export const linkRouter = express.Router();

linkRouter.route('/').get(getLinks).post(addLink);
linkRouter.route('/:id').get(getLink).patch(updateLink).delete(deleteLink);
