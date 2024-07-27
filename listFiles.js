// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// // Define the directory path
// const kitchensDir = path.join(__dirname, './src/assets/images/bedrooms');

// // Read the directory
// fs.readdir(kitchensDir, (err, files) => {
//   if (err) {
//     return console.error('Unable to scan directory: ' + err);
//   } 
//   // Rename each file in the directory
//   files.forEach((file, index) => {
//     const oldPath = path.join(kitchensDir, file);
//     const newPath = path.join(kitchensDir, `bedroom_${index + 1}${path.extname(file)}`);
    
//     fs.rename(oldPath, newPath, (err) => {
//       if (err) {
//         return console.error('Error renaming file: ' + err);
//       }
//       console.log(`Renamed ${file} to bedroom_${index + 1}${path.extname(file)}`);
//     });
//   });
// });

let i;
for (i = 1; i <= 15; i++) {
  console.log(`bedroom${i},`);
  if(i === 33) {
    console.log(`bedroom${i}`);
    break;
  }
}

for (i = 1; i <= 15; i++) {
  console.log(`import bedroom${i} from '../assets/images/bedrooms/bedroom_${i}.jpg'`);
}