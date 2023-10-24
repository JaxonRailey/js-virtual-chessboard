const main   = document.querySelector('main');
const cells  = [];
const pieces = [];
let piece    = null;

for (let i = 0; i < 8; i++) {
    const row = document.createElement('div');
    for (let j = 0; j < 8; j++) {
        const cell = document.createElement('div');

        if (i == 1 || i === 6) {
            const piece = document.createElement('span');
            piece.classList.add('pawn');
            if (i === 1) piece.classList.add('black');
            pieces.push(piece);
            cell.append(piece);
        }

        if (i == 0 || i === 7) {
            const piece = document.createElement('span');
            switch (j) {
                case 0: piece.classList.add('rook');   break;
                case 1: piece.classList.add('knight'); break;
                case 2: piece.classList.add('bishop'); break;
                case 3: piece.classList.add('queen');  break;
                case 4: piece.classList.add('king');   break;
                case 5: piece.classList.add('bishop'); break;
                case 6: piece.classList.add('knight'); break;
                case 7: piece.classList.add('rook');   break;
            }

            if (i === 0) piece.classList.add('black');
            pieces.push(piece);
            cell.append(piece);
        }

        cells.push(cell);
        row.append(cell);
    }

    main.append(row);
}

cells.forEach((cell) => {
    cell.addEventListener('click', () => cells.forEach((c) => c.classList.remove('move')));
});

pieces.forEach((elem) => {
    elem.addEventListener('click', function () {
        setTimeout(() => {
            cells.forEach((cell) => cell.classList.remove('selected'));
            switch (elem.classList[0]) {
                case 'pawn':   pawnMoves(elem);   break;
                case 'knight': knightMoves(elem); break;
                case 'king':   kingMoves(elem);   break;
                case 'bishop': bishopMoves(elem); break;
                case 'rook':   rookMoves(elem);   break;
                case 'queen':  queenMoves(elem);  break;
            }
        }, 1);
    });

    elem.setAttribute('draggable', true);
    elem.addEventListener('dragstart', (e) => piece = e.target);
    elem.addEventListener('dragend', () => piece = null);
});

cells.forEach((cell) => {
    cell.addEventListener('dragover', (e) => {
        e.preventDefault();
        cells.forEach((c) => c.classList.remove('move', 'selected'));
    });

    cell.addEventListener('drop', (e) => {
        if (piece) {
            e.preventDefault();
            cell.innerHTML = '';
            cell.appendChild(piece);
        }
    });

    cell.addEventListener('click', (e) => {
        e.preventDefault();
        cell.classList.toggle('selected');
    });
});