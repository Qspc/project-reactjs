import React from 'react';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
// import { useNavigate } from 'react-router-dom';

export default function TextEditor() {
  const [text, setText] = useState('');
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <h1>Text Editor</h1>
      <ReactQuill theme="snow" name="description" value={text} onChange={setText} style={{ width: '750px', height: '200px', margin: 'auto', backgroundColor: 'white' }} />
      <h3 style={{ padding: '40px' }}>Result: </h3>
      <p>{text}</p>
      {/* dangerouslySetInnerHTML={{ __html: text }} */}
    </div>
  );
}
