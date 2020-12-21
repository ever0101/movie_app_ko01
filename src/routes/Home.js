import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

//정적인 하드코딩 데이터를 props로 다뤘고 이제 state를 배우기 위해 class를 선언한다
class Home extends React.Component {
  state = {
    count: 0,
    isLoading: true,
    movies: [],
  };
  plus = () => {
    // this.setState({ count: this.state.count + 1 });  // 안좋은 방법
    this.setState((currnet) => ({ count: this.state.count + 1 }));
  };
  minus = () => {
    this.setState(function (current) {
      return { count: this.state.count - 1 };
    });
  };

  getMovies = async () => {
    console.log("getMovies");
    const {
      data: {
        data: { movies },
      }, //es6 문법 movies.data.data.movies 말고!
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.getMovies();
  }
  componentDidUpdate() {
    console.log("Updated");
  }
  render() {
    console.log("Rendered");
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
