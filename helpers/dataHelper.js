const fs = require('fs');
const path = require('path');

function getFormDataFromJson() {
  const filePath = path.join(__dirname, 'formData.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const parsed = JSON.parse(raw);
  return parsed.formSubmission;
}

module.exports = { getFormData, getFormDataFromJson };
