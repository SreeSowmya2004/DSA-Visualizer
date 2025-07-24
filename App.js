import React from 'react';
import TreeVisualizer from './components/TreeVisualizer';
import GraphVisualizer from './components/GraphVisualizer';
import DijkstraVisualizer from './components/DijkstraVisualizer';

function App() {
  return (
    <div className="App">
      <h1>DSA Visualizer</h1>
      <TreeVisualizer />
      <hr />
      <GraphVisualizer />
      <hr />
      <DijkstraVisualizer />
    </div>
  );
}

export default App;
