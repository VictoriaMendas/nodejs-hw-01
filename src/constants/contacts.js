import path from 'node:path';
import * as fs from 'node:fs/promises';

export const PATH_DB = path.resolve('db.json');

async function main() {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const todo = JSON.parse(data);
  console.log(todo);
}
main().catch((error) => console.log(error));
