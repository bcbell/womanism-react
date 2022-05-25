import React from 'react'
import flashcards from './flashcards'

export default function flashcardsList({flashcards }) {
  return (
    <div className= "card-grid">
        {flashcards.map(flashcards => {
        return <flashcards flashcards={flashcards} key={flashcards.id}
    })}
    </div>
 )
}