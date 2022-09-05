import express from 'express';
import {
  addProfile,
  deleteProfile,
  getProfile,
  getProfiles,
  updateProfile,
} from '../controllers/profile.controller';

export const profileRouter = express.Router();

profileRouter.route('/').get(getProfiles).post(addProfile);
profileRouter
  .route('/:id')
  .get(getProfile)
  .patch(updateProfile)
  .delete(deleteProfile);
