import { Request, Response } from 'express';
import { linkModel } from '../models/link.model';

export async function getLinks(req: Request, res: Response) {
  const links = await linkModel.find();
  return res.status(200).json(links);
}

export async function getLink(req: Request, res: Response) {
  const link = await linkModel.findById(req.params.id);
  if (!link) res.status(404).json('Link Not Found');
  return res.status(200).json(link);
}

export async function addLink(req: Request, res: Response) {
  const newLink = await linkModel.create({ ...req.body });
  return res.status(201).json(newLink);
}

export async function updateLink(req: Request, res: Response) {
  const updatedLink = await linkModel.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  return res.status(200).json(updatedLink);
}

export async function deleteLink(req: Request, res: Response) {
  await linkModel.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
}
