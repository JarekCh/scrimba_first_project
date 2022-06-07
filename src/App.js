import React from 'react'

import Header from './components/Header'
import Travel from './components/Travel'
import data from './data.js'

function App() {
  return (
    <div className="App">
      <Header />
      <section className='travel__list'>
        <Travel />
      </section>
    </div>
  );
}

export default App;
