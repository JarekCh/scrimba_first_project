import React from 'react'

import Header from './components/Header'
import Travel from './components/Travel'
import data from './data.js'

function App() {
  const travels = data.map((travel) => {
    return (
      <Travel         
        travel={travel}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <section className='travel__list'>
        {travels}
      </section>
    </div>
  );
}

export default App;
