import { Component } from "react";
import { Carousel } from "react-bootstrap";

class CarouselComponent extends Component {
  state = {
    movies: [],
    currentSlide: 0,
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
        this.setState({
          ...this.state,
          movies: data.Search || [],
        });
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  componentDidMount() {
    const { url } = this.props;
    this.getMovies(url);
  }

  groupMovies = (movies, itemsPerSlide) => {
    const grouped = [];
    for (let i = 0; i < movies.length; i += itemsPerSlide) {
      grouped.push(movies.slice(i, i + itemsPerSlide));
    }
    return grouped;
  };

  render() {
    const { movies, currentSlide } = this.state;
    const itemsPerSlide = 4;
    const groupedMovies = this.groupMovies(movies, itemsPerSlide);

    return (
      <Carousel
        activeIndex={currentSlide}
        onSelect={(index) => this.setState({ currentSlide: index })}
        className="bg-dark"
        variant="dark"
      >
        {groupedMovies.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between gap-3 p-4">
              {group.map((movie) => (
                <div key={movie.imdbID} className="text-center text-white">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{
                      width: "150px",
                      height: "230px",
                      objectFit: "fill",
                      borderRadius: "5px",
                    }}
                  />
                  <p
                    className="mt-2 overflow-hidden text-ellipsis"
                    style={{
                      maxWidth: 200,
                    }}
                  >
                    {movie.Title}
                  </p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CarouselComponent;
