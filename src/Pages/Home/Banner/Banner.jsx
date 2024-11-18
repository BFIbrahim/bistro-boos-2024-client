import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co.com/qgF6cbf/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co.com/Y7mLPLf/01.jpg" />
                </div>

                <div>
                    <img src="https://i.ibb.co.com/hcxfxXB/03.png" />
                </div>

                <div>
                    <img src="https://i.ibb.co.com/LN8gdMr/04.jpg" />
                </div>

                <div>
                    <img src="https://i.ibb.co.com/5M1SSJS/05.png" />
                </div>

                <div>
                    <img src="https://i.ibb.co.com/WcNygpN/06.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;