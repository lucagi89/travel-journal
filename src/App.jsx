// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import data from './data'

export default function App() {
  const cards = data.map(obj => <Card key={obj.id} item={obj} /> )
  return (
    <div className="app">
      <Header />
      <main>{cards}</main>
      <Footer />
    </div>
  )


}
