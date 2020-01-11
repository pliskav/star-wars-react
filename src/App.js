import React from 'react';

import StawarsRouter from './routes/StarwarsRoutes'


export const FilmsContext = React.createContext();

class App extends React.Component {
  state = {
    loading: true,
    films: {}
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => data.results)
      .then(films => {
        this.setState({
          loading: false,
          films: films
        })
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div className='app'>
        <FilmsContext.Provider value={
          {
            films: this.state.films,
            loading: this.state.loading
          }
        }>
          <StawarsRouter/>
        </FilmsContext.Provider>
      </div>
    );
  }
}
export default App;
