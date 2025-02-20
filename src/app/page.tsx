import NoteEntry from './notes/page';
import { getNotes } from './notes/actions';

export default async function Dashboard() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Machinist Notebook</h1>
      <NoteEntry />
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <strong>{note.title}</strong> - {note.content} ({note.tags})
          </li>
        ))}
      </ul>
    </div>
  );
}
