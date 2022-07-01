const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
    method: 'GET',
    headers: {
      'authorization': auth
    }
  })
    .then(res => res.text())
    .then(data => {
      resolve(data);
    })
    .catch(err => {
      reject(err);
    });

});

(async () => {

  console.log(`Stumble Script Hack Crown Ril 100% 😱😱😅😅 
Script Made By : ${chalk.bold('Rexxy')} - Helper : No Helper☝️😅
`);

const auth = rs.question('Tulis Auth Kode Lu Disini Anjimer! : ');
  console.log('');

while (true) {

    const result = await GoStumble(auth);
    if (!result) {

      console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Authentication Codenya Ga Valdi Tcuy ☝️😅`));
      break;

    } else if (result.includes('User')) {

      const data = JSON.parse(result);
      const username = data.User.Username;
      const country = data.User.Country;
      const exp = data.User.Experience;
      const tokenPass = data.User.BattlePass.PassTokens;
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;

console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] ${chalk.green(`User : ${username}`)} | ${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)} | ${chalk.green(`Exp : ${exp}`)} | ${chalk.blue(`Country : ${country}`)}`));
      await delay(3500);

       } else if (result == 'BANNED') {
        console.log(chalk.bgRed(`Akunlu Keban Titit Makanya Ga Ush Ngescript 🤬🤬🤬🤬`));
     break;
    }
  }


})()
