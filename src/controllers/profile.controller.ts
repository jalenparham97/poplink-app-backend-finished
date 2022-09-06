import { Request, Response } from 'express';
import { profileService } from '../services/profile.service';

export async function getProfiles(req: Request, res: Response) {
  const profiles = await profileService.getProfiles();
  return res.status(200).json(profiles);
}

export async function getUserProfiles(req: Request, res: Response) {
  const links = await profileService.getUserProfiles(
    req.query.userId as string
  );
  return res.status(200).json(links);
}

export async function getProfile(req: Request, res: Response) {
  const profile = await profileService.getProfile(req.params.id);
  if (!profile) return res.status(404).json('Profile Not Found');
  return res.status(200).json(profile);
}

export async function getProfileByUsername(req: Request, res: Response) {
  const profile = await profileService.getProfileByUsername(
    req.query.profileUsername as string
  );
  if (!profile) return res.status(404).json('Profile Not Found');
  return res.status(200).json(profile);
}

export async function addProfile(req: Request, res: Response) {
  const newProfile = await profileService.addProfile(req.body);
  return res.status(201).json(newProfile);
}

export async function updateProfile(req: Request, res: Response) {
  const updatedProfile = await profileService.updateProfile(
    req.params.id,
    req.body
  );
  return res.status(200).json(updatedProfile);
}

export async function deleteProfile(req: Request, res: Response) {
  await profileService.deleteProfile(req.params.id);
  res.sendStatus(204);
}
