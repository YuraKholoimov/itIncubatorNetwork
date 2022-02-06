import {Carousel} from "react-bootstrap";
import style from "../BodyApp/bodyApp.module.css";

export const CarouselComponent = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <div className={style.blocImg}>
                    <img
                        className={`d-block ${style.profileBG}`}
                        src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-japan-zephyr-red-day-mount-fuji-image_16813.jpg"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={style.blocImg}>
                    <img
                        className={`d-block ${style.profileBG}`}
                        src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-japanese-poster-japan-tourism-japanese-zephyr-image_16665.jpg"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className={style.blocImg}>
                    <img
                        className={`d-block ${style.profileBG}`}
                        src="https://previews.123rf.com/images/rms164/rms1641507/rms164150700245/42279336-giappone-sfondo-concettuale-vettore.jpg"
                        alt="First slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}