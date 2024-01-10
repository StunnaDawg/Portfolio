import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const ImgCarousel = ({ image1, image2, image3 }) => {
  return (
    <div className="flex flex-col items-center">
      <Carousel
        width={350}
        showArrows
        autoPlay
        useKeyboardArrows={true}
        showThumbs={false}
        ariaLabel="bg-red"
        interval={3000}
        infiniteLoop
        dynamicHeight
      >
        <div>
          <img src={image1} />
        </div>
        <div>
          <img src={image2} />
        </div>
        {image3 != "no image" ? (
          <div>
            <img src={image3} />
          </div>
        ) : null}
      </Carousel>
    </div>
  )
}

export default ImgCarousel
