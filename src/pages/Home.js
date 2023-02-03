import React from 'react'
import SearchForm from '../components/SearchForm/SearchForm'
import CocktailList from '../components/CocktailList/CocktailList'

function Home() {
  return (
    <main>
    <SearchForm/>
    <CocktailList/>
  </main>
  )
}

export default Home