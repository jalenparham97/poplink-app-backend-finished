import { Request, Response } from 'express';
import { linkService } from '../services/link.service';

export async function getLinks(req: Request, res: Response) {
  const links = await linkService.getLinks();
  return res.status(200).json(links);
}

export async function getUserLinks(req: Request, res: Response) {
  const links = await linkService.getUserLinks(req.query.userId as string);
  return res.status(200).json(links);
}

export async function getProfileLinks(req: Request, res: Response) {
  const links = await linkService.getProfileLinks(
    req.query.profileId as string
  );
  return res.status(200).json(links);
}

export async function getLinksByUsername(req: Request, res: Response) {
  const links = await linkService.getLinksByUsername(
    req.query.profileUsername as string
  );
  return res.status(200).json(links);
}

export async function getLink(req: Request, res: Response) {
  const link = await linkService.getLink(req.params.id);
  if (!link) return res.status(404).json('Link Not Found');
  return res.status(200).json(link);
}

export async function addLink(req: Request, res: Response) {
  const newLink = await linkService.addLink(req.body);
  return res.status(201).json(newLink);
}

export async function updateLink(req: Request, res: Response) {
  const updatedLink = await linkService.updateLink(req.params.id, req.body);
  return res.status(200).json(updatedLink);
}

export async function deleteLink(req: Request, res: Response) {
  await linkService.deleteLink(req.params.id);
  res.sendStatus(204);
}
