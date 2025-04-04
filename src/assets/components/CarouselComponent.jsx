import { Component } from "react";
import { Carousel } from "react-bootstrap";

class CarouselComponent extends Component {
  state = {
    movies: [],
    currentSlide: 0,
    itemsPerSlide: [],
  };
  getMovies = (url) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero della risposta");
        }
      })
      .then((data) => {
        console.log("film", data);
        this.setState({
          ...this.state,
          movies: data.Search,
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };
  componentDidMount = () => {
    const { url } = this.props;
    this.getMovies(url);
  };

  componentDidUpdate(prevProps, prevState) {
    const { itemsPerSlide } = this.state;
    if (prevState.movies !== this.state.movies) {
      const numberOfElements = this.state.movies.slice(0, 5);
      this.setState({
        itemsPerSlide: numberOfElements,
      });
    }
    console.log(itemsPerSlide);
  }

  render() {
    const { movies, currentSlide, itemsPerSlide } = this.state;

    return (
      <Carousel activeIndex={currentSlide} className="bg-dark" variant="dark">
        {movies.map((movie) => {
          return (
            <Carousel.Item key={movie.imdbID}>
              <div>
                <img src={movie.Poster} alt={movie.Title} />
                <h3>{movie.Title}</h3>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default CarouselComponent;
