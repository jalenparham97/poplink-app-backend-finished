import { Request, Response } from 'express';
import { usersService } from '../services/user.service';

export async function getUsers(req: Request, res: Response) {
  const users = await usersService.getUsers();
  return res.status(200).json(users);
}

export async function getUser(req: Request, res: Response) {
  const user = await usersService.getUser(req.params.id);
  if (!user) return res.status(404).json('User Not Found');
  return res.status(200).json(user);
}

export async function addUser(req: Request, res: Response) {
  const newUser = await usersService.addUser(req.body);
  return res.status(201).json(newUser);
}

export async function updateUser(req: Request, res: Response) {
  const updatedUser = await usersService.updateUser(req.params.id, req.body);
  return res.status(200).json(updatedUser);
}

export async function deleteUser(req: Request, res: Response) {
  await usersService.deleteUser(req.params.id);
  res.sendStatus(204);
}
