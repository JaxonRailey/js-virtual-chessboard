// Pawn Moves
function pawnMoves(piece) {

    const [row, col] = coordinates(piece);

    const moves = [];

    if (piece.classList.contains('black')) {
        if (row + 1 < 8) {
            moves.push([row + 1, col]);
            if (row === 1) {
                moves.push([row + 2, col]);
            }
        }
    } else {
        if (row - 1 >= 0) {
            moves.push([row - 1, col]);
            if (row === 6) {
                moves.push([row - 2, col]);
            }
        }
    }

    move(moves);
}

// Knight Moves
function knightMoves(piece) {

    const [row, col] = coordinates(piece);

    const moves = [
        [row - 2, col - 1],
        [row - 2, col + 1],
        [row + 2, col - 1],
        [row + 2, col + 1],
        [row - 1, col - 2],
        [row - 1, col + 2],
        [row + 1, col - 2],
        [row + 1, col + 2],
    ];

    move(moves);
}

// Bishop Moves
function bishopMoves(piece) {

    const [row, col] = coordinates(piece);

    const moves = [];

    for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
        moves.push([row - i, col - i]);
    }

    for (let i = 1; row - i >= 0 && col + i < 8; i++) {
        moves.push([row - i, col + i]);
    }

    for (let i = 1; row + i < 8 && col - i >= 0; i++) {
        moves.push([row + i, col - i]);
    }

    for (let i = 1; row + i < 8 && col + i < 8; i++) {
        moves.push([row + i, col + i]);
    }

    move(moves);
}

// Rook Moves
function rookMoves(piece) {

    const [row, col] = coordinates(piece);

    const moves = [];

    for (let i = 1; col - i >= 0; i++) {
        moves.push([row, col - i]);
    }

    for (let i = 1; col + i < 8; i++) {
        moves.push([row, col + i]);
    }

    for (let i = 1; row - i >= 0; i++) {
        moves.push([row - i, col]);
    }

    for (let i = 1; row + i < 8; i++) {
        moves.push([row + i, col]);
    }

    move(moves);
}

// Queen Moves
function queenMoves(piece) {

    const [row, col] = coordinates(piece);

    const moves = [];

    for (let i = 1; col - i >= 0; i++) {
        moves.push([row, col - i]);
    }

    for (let i = 1; col + i < 8; i++) {
        moves.push([row, col + i]);
    }

    for (let i = 1; row - i >= 0; i++) {
        moves.push([row - i, col]);
    }

    for (let i = 1; row + i < 8; i++) {
        moves.push([row + i, col]);
    }

    for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
        moves.push([row - i, col - i]);
    }

    for (let i = 1; row - i >= 0 && col + i < 8; i++) {
        moves.push([row - i, col + i]);
    }

    for (let i = 1; row + i < 8 && col - i >= 0; i++) {
        moves.push([row + i, col - i]);
    }

    for (let i = 1; row + i < 8 && col + i < 8; i++) {
        moves.push([row + i, col + i]);
    }

    move(moves);
}

// King Moves
function kingMoves(piece) {

    const [row, col] = coordinates(piece);

    const moves = [
        [row - 1, col - 1],
        [row - 1, col],
        [row - 1, col + 1],
        [row, col - 1],
        [row, col + 1],
        [row + 1, col - 1],
        [row + 1, col],
        [row + 1, col + 1],
    ];

    move(moves);
}