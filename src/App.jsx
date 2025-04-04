import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./assets/components/NavComponent";
import TvShowComponent from "./assets/components/TvShowComponent";
import CarouselComponent from "./assets/components/CarouselComponent";
import FooterComponent from "./assets/components/FooterComponent";
function App() {
  return (
    <>
      <NavComponent />
      <TvShowComponent />
      <CarouselComponent url="http://www.omdbapi.com/?apikey=68a0fa0c&s=Harry Potter" />
      <CarouselComponent url="https://www.omdbapi.com/?apikey=68a0fa0c&s=dragon%20ball" />
      <CarouselComponent url="https://www.omdbapi.com/?apikey=68a0fa0c&s=rick%20and%20morty" />
      <FooterComponent />
    </>
  );
}

export default App;
