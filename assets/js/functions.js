function coordinates(piece) {

    let row   = 0;
    let col   = 0;
    const div = piece.closest('div');

    cells.forEach((cell, index) => {
        if (cell == div) {
            row = Math.floor(index / 8);
            col = index % 8;
        }
    });

    return [row, col];
}

function move(moves) {

    moves.forEach((move) => {
        const [x, y] = move;
        if (x >= 0 && x < 8 && y >= 0 && y < 8) {
            const validPieceIndex = x * 8 + y;
            cells[validPieceIndex].classList.add('move');
        }
    });
}