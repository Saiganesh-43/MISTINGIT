import React from 'react'

export const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner" id='carousel'>
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/?electronics-sale" className="d-block w-100" alt="Ocean waves crashing on a sandy beach" />
                </div>

                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/?men-fashion-sale" className="d-block w-100" alt="City skyline illuminated at night" />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/?women-fashion-sale" className="d-block w-100" alt="Majestic mountains reflected in a still lake" />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/?kids-fashion-sale" className="d-block w-100" alt="Starry night sky with the Milky Way galaxy visible"/>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/?groceries-sale" className="d-block w-100" alt="Sunlit path winding through a lush green forest"/>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/?sale" className="d-block w-100" alt="Powerful waterfall cascading down a rocky cliff"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

