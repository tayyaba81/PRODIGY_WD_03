const boxes = document.querySelectorAll('.box');
const resetButton = document.getElementById('restart');
let currentPlayer = '<3';

boxes.forEach(box => box.addEventListener('click', handleBoxClick));

function handleBoxClick(event) {
  const clickedBox = event.target;

  if (!clickedBox.textContent) {
    clickedBox.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(`${currentPlayer} wins!`);
      resetBoard();
      return;
    }
    currentPlayer = currentPlayer === 'O' ? '<3' : 'O';
  }
}

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return winningCombos.some(combo =>
    combo.every(index => boxes[index].textContent === player)
  );
}

function resetBoard() {
  boxes.forEach(cell => {
    cell.textContent = ''; 
  });
  currentPlayer = '<3';
}
