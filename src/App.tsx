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

    return (
        <div className="app">
            <MyContext.Provider value={providerValue}>
                <Header />
                <Main key={isMusic}/>
            </MyContext.Provider>
            <Footer />
        </div>
    );
}

export default App;
