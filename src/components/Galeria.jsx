import Carousel from "react-bootstrap/Carousel";
import BannerUno from "../assets/bannerUno.png";
import BannerDos from "../assets/bannerDos.png"
import BannerTres from "../assets/bannerTres.png"


// import ExampleCarouselImage from "assets/ExampleCarouselImage";


export const Galery = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className="imgContenedor">
          <img className="imgGalery" src={BannerUno} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="imgContenedor">
        <img className="imgGalery" src={BannerDos} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="imgContenedor">
        <img className="imgGalery" src={BannerTres} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
