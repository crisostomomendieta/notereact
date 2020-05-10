import React, { Component } from 'react';
import Note from './Note/Note'
import './App.css'
import NoteForm from './NoteForm/NoteForm'


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      notes: [
        {noteId:1 , noteContent:"nota1"},
        {noteId:2 , noteContent:"nota2"}
       
      ]
    };
    this.addNote = this.addNote.bind(this);
  }
  removeNote(){
    
  }
  addNote(note){
    let {notes } = this.state;
    notes.push({
      noteId: notes.length +1,
      noteContent:note
    });
    this.setState({ notes });
  }
  render(){

    return (
      <div className="notesContanier">
        
          <div className="notesHeader">
          <h1>Aplicacion de Notas</h1>
            </div>

          <div className="notesBody">
            <ul>
            {this.state.notes.map(note => {

              return(
               <Note 
               noteContent ={note.noteContent} 
               noteId = {note.noteId}
               key= {note.noteId}
               
               />
              )
            })}


            </ul>
            </div>  

          <div className="notesFooter">
            <NoteForm addNote={this.addNote} />
            </div>       
      </div>
    );
  }
  
}

export default App;
