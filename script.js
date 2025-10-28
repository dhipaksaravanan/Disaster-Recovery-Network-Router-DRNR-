const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");
const gridSize = 10;
const cellSize = canvas.width / gridSize;

let grid = [];
let start = [0, 0];
let end = [gridSize - 1, gridSize - 1];

function generateGrid() {
  grid = [];
  for (let i = 0; i < gridSize; i++) {
    const row = [];
    for (let j = 0; j < gridSize; j++) {
      // Random obstacles (simulate blocked roads)
      row.push(Math.random() < 0.2 ? 1 : 0);
    }
    grid.push(row);
  }
  grid[start[0]][start[1]] = 0;
  grid[end[0]][end[1]] = 0;
  drawGrid();
}

function drawGrid(path = []) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      ctx.fillStyle = grid[i][j] ? "#333" : "#cce5ff";
      ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize);
    }
  }

  // Draw path
  for (const [x, y] of path) {
    ctx.fillStyle = "#00cc66";
    ctx.fillRect(y * cellSize, x * cellSize, cellSize, cellSize);
  }

  // Start & End
  ctx.fillStyle = "#ff6666";
  ctx.fillRect(start[1] * cellSize, start[0] * cellSize, cellSize, cellSize);
  ctx.fillStyle = "#ffcc00";
  ctx.fillRect(end[1] * cellSize, end[0] * cellSize, cellSize, cellSize);
}

// Dijkstra’s Algorithm
function findOptimalRoute() {
  const distances = Array(gridSize).fill().map(() => Array(gridSize).fill(Infinity));
  const visited = Array(gridSize).fill().map(() => Array(gridSize).fill(false));
  const prev = Array(gridSize).fill().map(() => Array(gridSize).fill(null));

  const pq = [];
  distances[start[0]][start[1]] = 0;
  pq.push([...start, 0]);

  const directions = [[1,0],[-1,0],[0,1],[0,-1]];

  while (pq.length) {
    pq.sort((a, b) => a[2] - b[2]);
    const [x, y, dist] = pq.shift();

    if (visited[x][y]) continue;
    visited[x][y] = true;

    if (x === end[0] && y === end[1]) break;

    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && ny >= 0 && nx < gridSize && ny < gridSize && grid[nx][ny] === 0) {
        const newDist = dist + 1;
        if (newDist < distances[nx][ny]) {
          distances[nx][ny] = newDist;
          prev[nx][ny] = [x, y];
          pq.push([nx, ny, newDist]);
        }
      }
    }
  }

  const path = [];
  let cur = end;
  while (cur) {
    path.push(cur);
    cur = prev[cur[0]][cur[1]];
  }
  drawGrid(path.reverse());
}

generateGrid();
