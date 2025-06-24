function createGrid()
{
    const container = document.querySelector('.grid-container');

    const oldGrid = container.querySelector('.grid');
    if (oldGrid) 
        container.removeChild(oldGrid);
    const grid = document.createElement('div');
    
    const gridSize = parseInt(document.getElementById('grid-size').value) || 16;
    grid.classList.add('grid');
    const gridWidth = 600;
    const cellSize = gridWidth / gridSize;
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;

            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = 'black';
            });
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    document.querySelector('.grid-container').appendChild(grid);
}