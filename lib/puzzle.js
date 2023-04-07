const cells = document.querySelectorAll("td");

const canMove = (target) => {
    const emptyCell = document.querySelector(".empty");
    const nextCell = target;

    const emptyCellColumn = emptyCell.cellIndex;
    const nextCellColumn = nextCell.cellIndex;

    const emptyCellRow = emptyCell.parentElement.rowIndex;
    const nextCellRow = nextCell.parentElement.rowIndex;

    return (
        emptyCellRow === nextCellRow && emptyCellColumn === nextCellColumn + 1 || 
        emptyCellRow === nextCellRow && emptyCellColumn === nextCellColumn - 1 ||
        emptyCellColumn == nextCellColumn && emptyCellRow === nextCellRow + 1 ||
        emptyCellColumn == nextCellColumn && emptyCellRow === nextCellRow - 1
    )
}

const moveTile = (target) => {
    const emptyCell = document.querySelector(".empty");
    const nextCell = target;
    
    emptyCell.classList.remove("empty");
    emptyCell.innerText = nextCell.innerText;

    nextCell.classList.add("empty");
    nextCell.innerText = "";
}

cells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
        if (canMove(event.target)) {    
            moveTile(event.target);
            checkVictory();
        }
    })
}) 

const checkVictory = () => {
    const cellArray = Array.from(cells).map((cell) => { return cell.innerText })
    
    // console.log(cellArray.join())
    if (cellArray.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,") {
        setTimeout(() => {
            alert("Congratulations, you win!!!")
        }, 400);
    }
}