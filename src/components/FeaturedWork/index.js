import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./featuredWork.css";

const FeaturedWork = () => {
  const config = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const images = [
    {
      img: "http://localhost:3000/imgs/f-1.jfif",
      title: "none",
      text: "none",
    },
    {
      img: "http://localhost:3000/imgs/f-2.jfif",
      title: "none",
      text: "none",
    },
    {
      img: "http://localhost:3000/imgs/f-3.jfif",
      title: "none",
      text: "none",
    },
    {
      img: "http://localhost:3000/imgs/f-4.jfif",
      title: "none",
      text: "none",
    },
  ];

  return (
    <div>
      <Slider {...config}>
        {images.map((x, i) => {
          return (
            <div key={i} className="img-card">
              <img className="img" src={x.img} />
              <div class="card-body">
                <div className="card-title">{x.title}</div>
                <div className="card-text">{x.text}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default FeaturedWork;
