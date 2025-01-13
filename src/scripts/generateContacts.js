import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const currentContact = JSON.parse(data);
    const arr = [];

    for (let i = 0; i < number; i++) {
      arr.push(createFakeContact());
    }

    const updatedContacts = [...currentContact, ...arr];

    await writeContacts(updatedContacts);
    console.log(updatedContacts);
  } catch (error) {
    console.log(error.message);
  }
};

generateContacts(5);
