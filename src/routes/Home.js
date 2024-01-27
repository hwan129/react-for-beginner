import Movie from "../components/Movie";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true); //data, function(data를 수정). 이 함수 실행하면 component가 다시 render
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        // then과 같은 것
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=rating`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
