import React from 'react';
import Aside from './Aside';
import Content from './Content';

function Main(props) {
    return (
        <main>
            <Content contentType={props.isMusic} searchString={props.searchString}/>
            <Aside />
        </main>
    );
}


export default Main;