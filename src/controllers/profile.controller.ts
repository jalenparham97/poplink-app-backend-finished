import { Request, Response } from 'express';
import { profileModel } from '../models/profile.model';

export async function getProfiles(req: Request, res: Response) {
  const profiles = await profileModel.find();
  return res.status(200).json(profiles);
}

export async function getProfile(req: Request, res: Response) {
  const profile = await profileModel.findById(req.params.id);
  if (!profile) res.status(404).json('Profile Not Found');
  return res.status(200).json(profile);
}

export async function addProfile(req: Request, res: Response) {
  const newProfile = await profileModel.create({ ...req.body });
  return res.status(201).json(newProfile);
}

export async function updateProfile(req: Request, res: Response) {
  const updatedProfile = await profileModel.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  return res.status(200).json(updatedProfile);
}

export async function deleteProfile(req: Request, res: Response) {
  await profileModel.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
}
