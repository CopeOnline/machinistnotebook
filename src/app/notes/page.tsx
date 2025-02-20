'use client';
import { useState } from 'react';
import { addNote } from './actions';

export default function NoteEntry() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  const handleSave = async () => {
    await addNote(title, content, tags);
    setTitle('');
    setContent('');
    setTags('');
    alert("Note saved!");
  };

  return (
    <div>
      <h2>Add a New Note</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Write your notes..." value={content} onChange={(e) => setContent(e.target.value)} />
      <input type="text" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} />
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
}
