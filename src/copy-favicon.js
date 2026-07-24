const fs = require('fs');
const path = require('path');

const source = "C:\\Users\\LENOVO\\.gemini\\antigravity\\brain\\a30e4aec-7eca-4c1c-95aa-ffa5093066d5\\vs_monogram_favicon_1784125859310.png";
const dest = path.join(__dirname, '..', 'public', 'favicon.png');

try {
  fs.copyFileSync(source, dest);
  console.log("Successfully copied favicon.png to public/ directory!");
} catch (err) {
  console.error("Error copying favicon:", err);
}
