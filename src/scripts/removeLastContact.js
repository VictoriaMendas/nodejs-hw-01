import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  const data = await fs.readFile(PATH_DB, 'utf8');
  const todo = JSON.parse(data);
  console.log(todo);
  todo ? todo.splice(-1, 1) : [];
  await fs.writeFile(PATH_DB, JSON.stringify(todo));
};

removeLastContact();
