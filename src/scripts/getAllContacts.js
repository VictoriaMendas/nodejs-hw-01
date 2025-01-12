import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const contacts = data ? JSON.parse(data) : [];

    console.log(contacts);
    return contacts;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

getAllContacts();
