class Note {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

class App {
  constructor() {
    this.notes = [];
  }
  addNote(id, { title, text }) {
    const newNote = new Note(id, title, text);
    this.notes = [...this.notes, newNote];
  }

  editNote(id, { title, text }) {
    this.notes = this.notes.map((note) => {
      if (note.id == id) {
        note.title = title;
        note.text = text;
      }
      return note;
    });
  }

  deleteNote(id) {
    this.notes = this.notes.filter((note) => note.id != id);
  }

  displayNotes() {
    this.notes = this.notes.map((note) =>
      console.log(`
    ID: ${note.id}
    Title: ${note.title}
    Text: ${note.text}`)
    );
  }
}

const note1 = {
  title: "Test note",
  text: "text",
};

const Updatednote = {
  title: "updated Test note",
  text: "updated text",
};
const app = new App();
app.addNote(0, note1);
app.addNote(1, note1);
app.addNote(2, note1);
app.addNote(3, note1);
app.displayNotes();

setTimeout(() => {
  app.editNote(2, Updatednote);
  app.displayNotes();
}, 1000);

setTimeout(() => {
  app.deleteNote(2);
  app.displayNotes();
}, 2000);

// learning JS dom by creating google keep
