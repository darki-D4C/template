import {useEffect, useState} from 'react';
import Card from './Card'

function PerformerList(props) {
   
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const API_URL = (process.env.REACT_APP_API_URL)
        const API_KEY = (process.env.REACT_APP_API_KEY)
        const fetchData = async () => {
            const response = props.searchString === "" ? await fetch(
                `${API_URL}?method=chart.gettopartists&api_key=${API_KEY}&format=json`
            ) : await fetch(
                `${API_URL}?method=artist.search&limit=25&artist=${props.searchString}&api_key=${API_KEY}&format=json`
            )
            const data = await response.json();
            const foundArtists = data.results ? data.results.artistmatches :  data.artists;
            setArtists(foundArtists.artist);
        };
        fetchData();
    },[props.searchString])
    
    return (artists.map(song => <Card name={song.name} key={song.name} playcount={song.playcount || song.listeners}/>))
}

export default PerformerList;