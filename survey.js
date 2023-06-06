const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {

  rl.question('What\'s your favorite TV series or Movie? ', (answer2) => {
  
    rl.question('Which sport is your favorite? ', (answer3) => {

      rl.question('Pick one superpower: ', (answer4) => {

        console.log(`Thank you for your valuable feedback: 
          
          Name: ${answer1}
          TV/Movie: ${answer2}
          Sport: ${answer3}
          Superpower: ${answer4}`);

        rl.close();
      });
    });
  });
});
