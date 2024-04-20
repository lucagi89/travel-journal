// import { useState } from 'react'
import './App.css'
import Card from './Card'
import Header from './Header'
import data from './data'

export default function App() {
  // const [count, setCount] = useState(0)
  const cards = data.map(obj => <Card key={obj.id} item={obj} /> )
  return (
    <div className="app">
      <Header />
      <main>
        {cards}
      </main>
    </div>
  )


}
