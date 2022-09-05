import { model, Schema } from 'mongoose';
import { Link } from '../types/link.types';

const linkSchema = new Schema<Link>(
  {
    userId: { type: String, required: true },
    profileOwner: { type: String, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export const linkModel = model<Link>('Link', linkSchema);
