import { useState, useEffect } from 'react';
import Card from './Card';

function MusicList(props) {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const API_URL = (process.env.REACT_APP_API_URL)
        const API_KEY = (process.env.REACT_APP_API_KEY)
        const fetchData = async () => {
            //switch depending on search is not empty
            const response = props.searchString === "" ? await fetch(
                `${API_URL}?method=chart.gettoptracks&limit=25&api_key=${API_KEY}&format=json`
            ) : await fetch(
                `${API_URL}?method=track.search&limit=25&track=${props.searchString}&api_key=${API_KEY}&format=json`
            )
            const data = await response.json();
            const foundTracks = data.tracks ? data.tracks :  data.results.trackmatches;
            setSongs(foundTracks.track);
        };
        fetchData();
    },[props.searchString]);

    return (songs.map(song => <Card key={song.name} name={song.name} artist={song.artist.name || song.artist} playcount={song.playcount || song.listeners}/>))
}

export default MusicList;
