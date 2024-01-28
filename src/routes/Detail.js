import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //???
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams(); //??
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.main}>
          <img
            className={styles.cover_img}
            alt="title"
            src={movie.large_cover_image}
          />
          <div className={styles.movie}>
            <div>Title{movie.title_long}</div>
            <div>Summary{movie.summary}</div>
            <div>
              Genres
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </div>
            <div>Rating{movie.rating}</div>
            <div>Runtime{movie.runtime}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
