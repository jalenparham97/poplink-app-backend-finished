import { model, Schema } from 'mongoose';
import { Profile } from '../types/profile.types';

const profileSchema = new Schema<Profile>(
  {
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    profileName: { type: String, required: true },
    profileDescription: { type: String, required: true },
    profilePhotoUrl: { type: String },
  },
  { timestamps: true }
);

export const profileModel = model<Profile>('Profile', profileSchema);
