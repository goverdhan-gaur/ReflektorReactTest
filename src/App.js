import React, { useEffect, Fragment, useState } from 'react'
import './style.css'
import movies from './data/movies.json'
import movieGenres from './data/movie-genres.json'
import MovieInfo from './components/MovieInfo/MovieInfo'
import Filter from './components/Filter/Filter'
import Container from './components/Container/Container'
import Modal from './components/Model/Modal'

export default function App() {
  const [movieList, setMovieList] = useState(movies)
  const [filterList, setFilterList] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isFiltered, setIsFiltered] = useState(false)

  const updateMovieList = () => {
    return movies.filter((movie) =>
      movie.genre_ids.some((genre) => filterList.includes(genre)),
    )
  }
  const clearFiltersList = () => {
    setFilterList([])
    setIsFiltered(true)
  }

  const updateFilterList = (selectedGenre) => {
    setFilterList(selectedGenre)
    setIsFiltered(true)
  }

  const openFiltersHandler = () => {
    setIsFilterOpen(true)
  }

  const closeFiltersHandler = () => {
    setIsFilterOpen(false)
  }

  useEffect(() => {
    let newArr = updateMovieList() || movies
    filterList.length > 0 ? setMovieList(newArr) : setMovieList(movies)
    return () => {
      setIsFiltered(false)
    }
  }, [isFiltered])

  return (
    <Fragment>
      <Filter
        onClickFilter={openFiltersHandler}
        selectedFilters={filterList}
        movieGenres={movieGenres}
        clearFiltersList={clearFiltersList}
      />
      <Container>
        <div className="MovieList">
          {movieList.map((movie) => (
            <MovieInfo key={movie.id} movie={movie} />
          ))}
        </div>
      </Container>
      {isFilterOpen && (
        <Modal
          genres={movieGenres}
          onCloseModal={closeFiltersHandler}
          setFilterList={updateFilterList}
          selectedFilters={filterList}
        />
      )}
    </Fragment>
  )
}
