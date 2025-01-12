import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    console.log(data);
    // Чому не виходить через виклик функції readContacts().length;
    const contacts = JSON.parse(data);
    console.log(contacts.length);
    return contacts.length - 1;
  } catch (error) {
    console.log(error.message);
  }
};

countContacts();
