import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; //???
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

  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate("/react-for-beginners");
  };
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.load}>
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
            <div>
              <h2>Title</h2>
              <h1>{movie.title_long}</h1>
            </div>
            <div>
              <h2>Summary</h2>
              <div className={styles.summary}>
                {movie.description_full === ""
                  ? "직접 보세요 ! "
                  : movie.description_full}
              </div>
            </div>
            <h2>Genres</h2>
            <div className={styles.genres}>
              {movie.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </div>
            <div className={styles.rating}>
              <h2>Rating</h2>
              <h1>{movie.rating}</h1>
            </div>
            <div className={styles.runtime}>
              <h2>Runtime</h2>
              <h1>{movie.runtime} minutes</h1>
            </div>
            <div className={styles.back}>
              <button onClick={navigateToBack}>뒤로가기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
