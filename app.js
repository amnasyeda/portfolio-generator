const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [Amna, AmnaSyeda] = profileDataArgs;

console.log(Amna, AmnaSyeda);

const pageHTML = generatePage(Amna, AmnaSyeda);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});