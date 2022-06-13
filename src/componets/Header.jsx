/* eslint-disable jsx-a11y/anchor-is-valid */
import { MyContext } from "../Context";
import { useContext } from "react";

function Header(props) {
    // eslint-disable-next-line no-unused-vars
    const { _, setIsMusic, __,setSearchString } = useContext(MyContext);

    const setTopMusic = () =>{
        setIsMusic(true)
        setSearchString("")
    }

    const setTopArtists = () =>{
        setIsMusic(false) 
        setSearchString("")
    }

    const setSearch = (e) =>{
        if(e.key === 'Enter'){
            setSearchString(e.target.value)
        }
    }

    return (
        <header>
            <a href="">
                <img className="logo" src="icon-menu.png" alt="Logo" width="47px" height="47px"></img>
            </a>
            <nav className="navigation">
                <a className="item" onClick={setTopMusic}>Главная</a>
                <a className="item" onClick={setTopMusic}>Любимое</a>
                <a className="item" onClick={setTopArtists}>Исполнители</a>
            </nav>
            <div className="search">
                <input className="search-bar" onKeyPress={setSearch} type="text"  placeholder="Исполнитель, трек, альбом"/>
            </div>
        </header>)
}

export default Header;