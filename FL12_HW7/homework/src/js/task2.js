let startGame = confirm('Do you want to play a game?');
if (startGame) {
  let numberPocket = 8;
  let prize = [100, 50, 25];
  let userPzize = 0;
  let effort = 0;
  let attempts = 3;
  let userNumber;
  let conter = true;
  while (conter) {
    let randomNumber = Math.round(Math.random() * numberPocket);
    while (effort < 3) {
      userNumber = +prompt(`
        Choose a roulette pocket number from 0 to ${numberPocket}
        Attempts left: ${attempts}
        Total prize: ${userPzize}$
        Possible prize on ccurent attemtpt ${prize[effort]}$
        `);
      console.log('userNumber: ', userNumber);
      console.log('randomNumber: ', randomNumber);
      if (userNumber === randomNumber) {
        userPzize += prize[effort];
        if (
          confirm(
            `Congratulation, you won! Your prize is: ${prize[effort]} $. Do you want to continue?`
          )
        ) {
          prize = prize.map(e => e * 2);
          numberPocket += 4;
          effort = 0;
          attempts = 3;
          break;
        } else {
          alert(
            `Thank you for your participation. Your prize is: ${userPzize} $`
          );
          conter = false;
          break;
        }
      } else {
        effort++;
        attempts--;
        if (effort === 3) {
          alert(
            `Thank you for your participation. Your prize is: ${userPzize} $`
          );
          if (confirm(`Do you want to play again?`)) {
            prize = [100, 50, 25];
            numberPocket = 8;
            effort = 0;
            attempts = 3;
          }
          conter = false;
        }
      }
    }
  }
} else {
  alert('You did not become a billionaire, but can');
}
