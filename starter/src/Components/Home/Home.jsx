import React from 'react';
import popcorn from '.../../../public/images/popcorn.jpeg';
import house from '.../../../public/images/InternationalHouse.jpeg'
import house2 from '.../../../public/images/InternationalHouse2.jpeg'

const Home = () => {
    
    return (
        <>
            <div className="container">
                <a>
                     <img 
                     src={popcorn}
                     width="100%"/>
                </a>
            </div>

            <div className="container">
                <p>QA Cinams is an American movie theater chain headquartered in Nowhere, Kansas, and the largest movie theater chain in the world that we are working for. Founded in 1920, QA Cinams has the largest share of the U.S. theater market ahead of AMC, Regal, and Cinemark Theatres.</p>
            </div>
            
            <div className="container">
                <div className="row">

                    <div className="col">
                        <img 
                            src={house}
                            width="100%"/>
                    </div>
                    <div className="col">
                        <img 
                        src={house2}
                         width="100%"/>
                    </div>
                    <div className="col">
                        <img 
                        src={house}
                         width="100%"/>
                    </div>
                </div>
            </div>
            <div className="container">
                <p>QA Cinam locations now have a bar service. Drinks can be ordered to be drunk in the bar and lounge area or taken into the theater. QA Dine-in theaters have their facilties set up as a full-service restaurant that can be accessed without having to pay for a movie ticket.</p>
            </div>
        </>
    );
}

export default Home;