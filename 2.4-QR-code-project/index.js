/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Import the necessary modules
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// Get user input
inquirer.prompt([
  {
    type: 'input',
    name: 'url',
    message: 'Please enter a URL',
    default: 'https://www.example.com'
  },
]).then(answers => {
  // Convert the user's URL to a QR code
  const qrPng = qr.image(answers.url, { type: 'png' });

  // Write the PNG to a file
  qrPng.pipe(fs.createWriteStream('qrcode.png'));

  // Create a .txt file with the user's URL
  fs.writeFile('user-input.txt', answers.url, err => {
    if (err) throw err;
    console.log('Saved user input to user-input.txt');
  });
});