import React from 'react';
import MusicList from './MusicList';
import PerformerList from './PerformerList';
import { MyContext } from "../Context";
import { useContext } from "react";

function Content() {
    const { isMusic,_, searchString,__ } = useContext(MyContext);
    return (
        <div className='content'>
            {isMusic
                ? <MusicList searchString={searchString}/>
                : <PerformerList searchString={searchString}/>
            }
        </div>
    );
}

export default Content;