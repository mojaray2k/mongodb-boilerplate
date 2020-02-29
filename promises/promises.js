/**
 * @function startGame
 * @returns {Promise}
 */
function startGame() {
  let counter = 0;

  document.querySelector("button").addEventListener("click", () => {
    ++counter;
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (counter > 5) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

startGame()
  .then(() => {
    alert("You Win!");
  })
  .catch(() => {
    alert("You lost!");
  });
