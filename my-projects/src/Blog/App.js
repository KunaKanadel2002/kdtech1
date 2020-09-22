import React from 'react';
import BlogContainer from './BlogContainer';
import Header from './Header';
import Data from './Data';
import './style.css';
const App = () => {



    return (
        <>
            <Header />
            <div className="container ">
                {
                    Data.map((val, id) => {
                        return <BlogContainer title={val.title} img={val.img} content={val.content} key={id} />
                    })
                }
            </div>
        </>
    )


}

export default App;