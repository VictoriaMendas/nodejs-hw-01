import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../index.js';

export const addOneContact = async () => {
  const newArr = [];
  newArr.push(createFakeContact());
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
