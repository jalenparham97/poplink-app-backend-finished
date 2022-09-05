import { Request, Response } from 'express';
import { userModel } from '../models/user.model';

export async function getUsers(req: Request, res: Response) {
  const users = await userModel.find();
  return res.status(200).json(users);
}

export async function getUser(req: Request, res: Response) {
  const user = await userModel.findById(req.params.id);
  if (!user) res.status(404).json('User Not Found');
  return res.status(200).json(user);
}

export async function addUser(req: Request, res: Response) {
  const newUser = await userModel.create({ ...req.body });
  return res.status(201).json(newUser);
}

export async function updateUser(req: Request, res: Response) {
  const updatedUser = await userModel.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  return res.status(200).json(updatedUser);
}

export async function deleteUser(req: Request, res: Response) {
  await userModel.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
}
