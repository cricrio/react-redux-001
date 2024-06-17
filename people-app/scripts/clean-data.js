import data from '../data.json' assert { type: 'json' };
import { writeFile } from 'node:fs/promises';
const newData = data.results.map((p) => ({
  ...p,
  name: `${p.name.first} ${p.name.last}`,
  id: p.login.uuid,
}));

writeFile('./updated_data.json', JSON.stringify(newData, null, 2))
  .then(console.log)
  .catch(console.error);
