import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
// import { getAllContacts } from './getAllContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const todo = JSON.parse(data);
    await fs.writeFile(PATH_DB, [], { encoding: 'utf-8' });
    console.log(todo);
  } catch (error) {
    console.log(error.message);
  }
};

removeAllContacts();
