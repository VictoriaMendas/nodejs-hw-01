import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
// import { createFakeContact } from '../index.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');

    const todo = JSON.parse(data);
    todo.push(createFakeContact());

    await fs.writeFile(PATH_DB, JSON.stringify(todo, null, 3), 'utf8');
    console.log('Contact added successfully:', createFakeContact());
  } catch (error) {
    console.error(error.message);
  }
};

addOneContact();
