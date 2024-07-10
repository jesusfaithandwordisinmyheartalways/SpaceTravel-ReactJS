

import React, { useState } from "react"


function About() {

    const [selectedClass, setSelectedClass] = useState('')

    const filterSelection = (className) => () => {
        setSelectedClass(className);
      };

    return (
        <>
        
        
        <div className="Space-Travel-Container">

            <div className="Space-Travel-Wrapper">
                
                <div className="space-travel-header"><h1>Why People Want to Travel to Space</h1></div>

            </div>

            </div>


            <div className="Space-Travel-Container-Two">

            <div className="Space-Tavel-Wrapper-Two">

                    <div className="space-travel">
                        <div><h3>Experience Weightlessness</h3></div>
                        <div><p>Imagine floating effortlessly, experiencing the sensation of zero gravity as you drift 
                        through the vast expanse of space. 
                        It’s a feeling unlike any other, freeing you from the bonds of Earth’s gravity</p></div>
                    </div>

                    <div className="space-travel">
                        <div><h3>Witness Earth from Afar</h3></div>
                        <div><p>See our planet like never before, as a beautiful, 
                        fragile blue marble suspended in the blackness of space.
                         This breathtaking view offers a profound perspective on the interconnectedness of all life on Earth.</p></div>
                    </div>

                    <div className="space-travel">
                        <div><h3>Explore the Unknown</h3></div>
                        <div><p>Space travel is a chance to be a pioneer, to chart new territories, 
                        and to contribute to our understanding of the universe. 
                        It’s a quest for knowledge that drives innovation and inspires future generations.</p></div>
                    </div>

                    <div className="space-travel">
                        <div><h3>Fulfill a Lifelong Dream</h3></div>
                        <div><p>For many, traveling to space is the culmination of a lifelong dream,
                         a testament to human ingenuity and the spirit of exploration. 
                        It’s an experience that will leave you with memories and stories to share for a lifetime.</p></div>
                    </div>

                </div>




            </div>



                    <div className="Space-Travel-Container-Three">

                        <div className="Space-Travel-Wrapper-Three">

                            <div className="planets-container">
                                <div className={`filterDiv mars ${selectedClass === 'mars' ? 'show' : 'hide'}`}>
                                    <div><img src="https://pngimg.com/uploads/mars_planet/mars_planet_PNG27.png"></img> </div>
                                     
                                </div>

                                <div className={`filterDiv jupiter ${selectedClass === 'jupiter' ? 'show' : 'hide'}`}>
                                    <div><img src="https://www.pngall.com/wp-content/uploads/7/Jupiter-Transparent.png"></img></div>
                                </div>

                                <div className={`filterDiv venus ${selectedClass === 'venus' ? 'show' : 'hide'}`}>
                                    <div><img src="https://www.pngall.com/wp-content/uploads/11/Venus-PNG-Background.png"></img></div>
                                </div>
                            </div>

                            <div className="planet-button-container">

                            
                            <button onClick={filterSelection('mars')}  className="btn active">Mars</button>
                            
                            <button  onClick={filterSelection('jupiter')} className="btn">Jupiter</button>
                            <button onClick={filterSelection('venus')} className="btn">Venus</button>
                           </div>

                        </div>

           


                    </div>


                        <div className="Space-Travel-Container-Four">

                                <div className={`filterContent mars ${selectedClass === 'mars' ? 'show' : 'hide'}`}>
                                    <div><h1>Mars</h1></div>
                                    <div className="mars-content"><p>Mars, often called the Red Planet, is an intriguing destination 
                                    for space travel due to its unique features and potential for future human colonization.
                                     Its striking red hue, caused by iron oxide on its surface, sets it apart from other celestial bodies, 
                                     offering a visually captivating landscape. Mars has the largest volcano in the solar system,
                                     Olympus Mons, and the deepest canyon, Valles Marineris, making it a geologically fascinating place to explore. </p>
                                     </div>
                                </div>

                                <div className={`filterContentTwo mars ${selectedClass === 'mars' ? 'show' : 'hide'}`}>
                                    <div className="mars-content-two-wrapper">
                                    <div className="mars-content-two">
                                        <div><p>AVG. DISTANCE</p></div>
                                        <div><h3>225 MIL.KM</h3></div>
                                    </div>
                                    <div className="mars-content-two">
                                         <div><p>EST TRAVEL TIME</p></div>
                                        <div><h3>9 MONTHS</h3></div>
                                    </div>
                                    </div>

                                </div>


                                <div className={`JupiterContent jupiter ${selectedClass === 'jupiter' ? 'show' : 'hide'}`}>
                                    <div><h1>Jupiter</h1></div>
                                    <div className="jupiter-content"><p>Jupiter, the largest planet in our solar system,
                                     presents an awe-inspiring destination for space exploration due to its immense size, captivating features, 
                                     and the mysteries it holds. Its iconic Great Red Spot, 
                                    a massive storm larger than Earth that has been raging for centuries, exemplifies the dynamic and turbulent atmosphere of this gas giant.</p>
                                     </div>
                                </div>


                                <div className={`JupiterContentTwo jupiter ${selectedClass === 'jupiter' ? 'show' : 'hide'}`}>
                                    <div className="jupiter-content-two-wrapper">
                                    <div className="jupiter-content-two">
                                        <div><p>AVG. DISTANCE</p></div>
                                        <div><h3>778 MIL.KM</h3></div>
                                    </div>
                                    <div className="jupiter-content-two">
                                         <div><p>EST TRAVEL TIME</p></div>
                                        <div><h3>13 MONTHS</h3></div>
                                    </div>
                                    </div>

                                </div>




                                <div className={`VenusContent venus ${selectedClass === 'venus' ? 'show' : 'hide'}`}>
                                    <div><h1>Venus</h1></div>
                                    <div className="venus-content"><p>Venus, often referred to as Earth's "sister planet" due to its similar size and proximity, 
                                    offers a compelling destination for space exploration with its thick, toxic atmosphere and extreme surface conditions. 
                                    The planet's perpetual shroud of sulfuric acid clouds and intense greenhouse effect create a scorching surface temperature
                                     of around 465°C (869°F), 
                                    making it a natural laboratory for studying climate dynamics and atmospheric chemistry. </p>
                                     </div>
                                </div>



                                <div className={`VenusContentTwo venus ${selectedClass === 'venus' ? 'show' : 'hide'}`}>
                                    <div className="venus-content-two-wrapper">
                                    <div className="venus-content-two">
                                        <div><p>AVG. DISTANCE</p></div>
                                        <div><h3>41 MIL.KM</h3></div>
                                    </div>
                                    <div className="venus-content-two">
                                         <div><p>EST TRAVEL TIME</p></div>
                                        <div><h3>3.5  MONTHS</h3></div>
                                    </div>
                                    </div>

                                </div>








                        </div>
        </>
    )

}


export default About