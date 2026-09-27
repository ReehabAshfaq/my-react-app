import React, { useState } from 'react';
import './App.css';

function ProductCard({ title, price, category }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', margin: '10px 0', width: '200px', textAlign: 'left' }}>
      <h3>{title}</h3>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ margin: '20px 0', textAlign: 'left' }}>
      <button onClick={() => setLikes(likes + 1)} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        Like
      </button>
      <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>Total Likes: {likes}</span>
    </div>
  );
}

function App() {
  const students = [
    { id: 1, name: 'Alice', score: 85 },
    { id: 2, name: 'Bob', score: 42 },
    { id: 3, name: 'Charlie', score: 50 },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', textAlign: 'left' }}>
      <h1>Advance Programming Tasks</h1>

      <h2>Task 1: Product Cards</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <ProductCard title="Wireless Mouse" price={29.99} category="Electronics" />
        <ProductCard title="Running Shoes" price={59.99} category="Sports" />
      </div>

      <h2>Task 2: Like Button</h2>
      <LikeButton />

      <h2>Task 3: Student Grades</h2>
      <ul style={{ paddingLeft: '20px' }}>
        {students.map((student) => (
          <li key={student.id} style={{ margin: '8px 0' }}>
            {student.name} - Score: {student.score} -{' '}
            <span style={{ color: student.score >= 50 ? 'green' : 'red', fontWeight: 'bold' }}>
              {student.score >= 50 ? 'Pass' : 'Fail'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;