import '../LandingPage.css'
import { Link } from "react-router-dom";
import getImageWithUrl from './getImageWithUrl';

// MovieCard as a refactored component to re-use it potantially again, or to add changes only on a singele page 
const MovieCard = ({poster_path, title,id}) => {
    return (
        <div className="box" >
            {/* Link to the selected movie with its id */}
            <Link to={`/result/movie/${id}`}> 
                <img src={getImageWithUrl(poster_path)} alt={title} />
            </Link>
        </div>
    )
}
export default MovieCard;