import React, { useState } from 'react';
import './GraphVisualizer.css';

function GraphVisualizer() {
  const [graph, setGraph] = useState({});
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [visited, setVisited] = useState([]);

  const addEdge = () => {
    setGraph((prev) => {
      const updated = { ...prev };
      updated[from] = [...(updated[from] || []), to];
      return updated;
    });
    setFrom('');
    setTo('');
  };

  const bfs = (start) => {
    const queue = [start];
    const seen = new Set([start]);
    const result = [];

    while (queue.length) {
      const node = queue.shift();
      result.push(node);
      (graph[node] || []).forEach((neighbor) => {
        if (!seen.has(neighbor)) {
          seen.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    setVisited(result);
  };

  return (
    <div>
      <h2>🔗 Graph (BFS)</h2>
      <input placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <button onClick={addEdge}>Add Edge</button>
      <br /><br />
      <input placeholder="Start Node" onBlur={(e) => bfs(e.target.value)} />
      <div>Visited Order: {visited.join(' → ')}</div>
    </div>
  );
}

export default GraphVisualizer;
