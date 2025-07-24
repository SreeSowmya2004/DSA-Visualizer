import React, { useState } from 'react';
import './TreeVisualizer.css';

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function insert(root, val) {
  if (!root) return new TreeNode(val);
  if (val < root.val) root.left = insert(root.left, val);
  else root.right = insert(root.right, val);
  return root;
}

function inorder(root, result) {
  if (!root) return;
  inorder(root.left, result);
  result.push(root.val);
  inorder(root.right, result);
}

function TreeVisualizer() {
  const [root, setRoot] = useState(null);
  const [input, setInput] = useState('');
  const [traversal, setTraversal] = useState([]);

  const handleInsert = () => {
    const val = parseInt(input);
    if (!isNaN(val)) {
      setRoot(insert(root, val));
      setInput('');
    }
  };

  const handleInorder = () => {
    const result = [];
    inorder(root, result);
    setTraversal(result);
  };

  return (
    <div>
      <h2>🌳 Binary Tree</h2>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleInsert}>Insert</button>
      <button onClick={handleInorder}>Inorder</button>
      <div className="traversal">Traversal: {traversal.join(' → ')}</div>
    </div>
  );
}

export default TreeVisualizer;
