import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  // pass data to useState
  const [people, setPeople] = useState(data)

  return(
    <main>
      <section className='container'>
        <h3>{people.length}  birthdays</h3>
        <List />
        <button onClick={()=> console.log('you clicked me')}>Clear All</button>
      </section>
    </main>
  )
}

export default App;