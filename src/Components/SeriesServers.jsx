import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SeriesServers () {
    const {id} = useParams()
    return(
        <>
            <div className="bg-black">
                <h1>SERVER</h1>
                <Link className="btn glass" to={`https://vidlink.pro/tv/${id}/1/1`}>VidLink</Link>
            </div>
        </>
    )
}