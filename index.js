const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay')

console.log(`${chalk.white(`
1 Push Starpass
2 Push Tropi
3 Push Mahkota
Choose to use the available number`)} 
`);
const round = rs.question(`[+] Pilih nomor dari 1 sampai 3 yang ingin dipakai  : `);
    console.log('');
    
    const GoStumble = (auth) => new Promise((resolve, reject) => {

  fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/'+round, {
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

  console.log(`Script Stumble Supaya Langsung Jadi Top 1 Satir Di Stumble Guys Anjvmer
Script Made By : ${chalk.bold('Babang Tamvan Rexxy')} - Helper : @FiqzGantengBanget & @AlvinMandulAnjme☝️😅
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
      const trophy = data.User.SkillRating;
      const crown = data.User.Crowns;
      const exp = data.User.Experience;
      const tokenPass = data.User.BattlePass.PassTokens

console.log(chalk.bgBlack(`\r[ ${moment().format('hh:mm:ss')} ] ${chalk.white(`User : ${username}`)} | ${chalk.yellow(`Trophy : ${trophy}`)} | ${chalk.red(`Crown : ${crown}`)} | ${chalk.blue(`Exp : ${exp}`)} | 
${chalk.redBright(`tokenPass : ${tokenPass}`)} |
${chalk.greenBright(`Country : ${country}`)}`))
      await delay(4000);

    } else if (result == 'BANNED') {
        console.log(chalk.bgRed(`Akunlu Keban Titit Makanya Ga Ush Ngescript 🤬🤬🤬🤬`));
     break;
    }
  }


})()
