import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Rodrigo Garcia',
    email: 'rgflsc@gmail.com',
    password: '123456'
  });

  return response.json(user);
}
