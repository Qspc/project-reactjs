import React from 'react';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
// import { useNavigate } from 'react-router-dom';

export default function TextEditor() {
  const [text, setText] = useState('');
  // const [kata, setKata] = useState('halo');
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
      <h1>TextEditor</h1>
      <ReactQuill theme="snow" name="description" value={text} onChange={setText} style={{ width: '750px', height: '200px', margin: 'auto' }} />
      <h3 style={{ padding: '40px' }}>Result: {text} </h3>
      {/* dangerouslySetInnerHTML={{ __html: text }} */}
    </div>
  );
}

// const TextEditor = () => {
//   return (
//     <div>
//       <h1>Disini fungsi pembuatan text editor</h1>
//     </div>
//   );
// };

// export default TextEditor;
