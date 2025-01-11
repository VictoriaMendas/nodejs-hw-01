// import * as fs from 'node:fs/promises';

// import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const arr = [];
  for (let i = 0; i < number; i++) {
    return arr.push(createFakeContact());
  }
  const updatedContacts = [...number, ...arr];
  writeContacts(JSON.stringify(updatedContacts));
  //   try {
  //     const data = await fs.writeFile(
  //       PATH_DB,
  //       JSON.stringify(updatedContacts),
  //       'utf-8',
  //     );
  //     return JSON.parse(data);
  //   } catch (error) {
  //     console.error('Error reading contacts:', error);
  //     throw error;
  //   }
};

generateContacts(5);
