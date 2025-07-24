import React, { useState } from 'react';
import './DijkstraVisualizer.css';

const GRID_SIZE = 10;

const createGrid = () =>
  Array(GRID_SIZE)
    .fill(null)
    .map(() =>
      Array(GRID_SIZE).fill({ type: 'empty', visited: false })
    );

function DijkstraVisualizer() {
  const [grid, setGrid] = useState(createGrid());
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const handleClick = (r, c) => {
    const newGrid = grid.map((row, i) =>
      row.map((cell, j) => {
        if (i === r && j === c) {
          if (!start) {
            setStart([r, c]);
            return { ...cell, type: 'start' };
          } else if (!end) {
            setEnd([r, c]);
            return { ...cell, type: 'end' };
          } else {
            return { ...cell, type: 'wall' };
          }
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };

  return (
    <div>
      <h2>🛣️ Dijkstra Visualizer</h2>
      <div className="grid">
        {grid.map((row, r) => (
          <div key={r} className="row">
            {row.map((cell, c) => (
              <div
                key={c}
                className={`cell ${cell.type}`}
                onClick={() => handleClick(r, c)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DijkstraVisualizer;
