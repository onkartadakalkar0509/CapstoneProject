import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function getFormData(type) {
    if(type === 'json'){
  const filePath = path.join(__dirname, 'formsubmission.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw);
  return parsed.formSubmission || parsed;
}
throw new Error('unsupported data type')}