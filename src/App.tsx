import React, { useState } from 'react';
import Footer from './componets/Footer';
import Header from './componets/Header';
import Main from './componets/Main';
import { MyContext } from './Context';



function App() {
    const [isMusic, setIsMusic] = useState(true);
    const [searchString, setSearchString] = useState("");
    const providerValue = React.useMemo(() => ({
        isMusic, setIsMusic,
        searchString, setSearchString,
    }), [isMusic, searchString]);

    // const goToPage = (bool: boolean) =>{
    //     setIsMusic(bool)
    //     setSearchString("")
    // }

    // const getSearch = (str:string) =>{
    //     setSearchString(str)
    // }

    return (
        <div className="app">
            <MyContext.Provider value={providerValue}>
                <Header isMusic={isMusic} />
                <Main key={isMusic} pageType={isMusic} searchValue={searchString} />
            </MyContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
