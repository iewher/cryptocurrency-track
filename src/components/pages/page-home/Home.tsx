import screen_imac from "./source/screen-imac.png";
import screen_macbook from "./source/screen-macbook.png";
import screen_iphone from "./source/screen-iphone.png";
import screen_ipad from "./source/screen-ipad.png";
import "../../../scss/home/home.scss";

const Home = () => {
  const images = [
    { image: screen_imac, width: "80%", height: "60%" },
    { image: screen_macbook, width: "80%", height: "50%" },
    { image: screen_iphone, width: "40%", height: "70%" },
    { image: screen_ipad, width: "70%", height: "60%" },
  ];

  const showImage = images.map((image) => {
    return <img src={image.image} width={image.width} height={image.height} />;
  });

  return (
    <div className="home">
      <div className="home-body">
        <div className="home-block">
          <div className="home-block-left">
            <div className="home-text">
              Вы можете посмотреть топ-100 криптовалют
            </div>
          </div>
          <div className="home-block-right">{showImage[0]}</div>
        </div>
        <div className="home-block">
          <div className="home-block-left">{showImage[1]}</div>
          <div className="home-block-right">
            <div className="home-text">
              Вы можете отслеживать криптовалюты, которые хотите
            </div>
          </div>
        </div>
        <div className="home-block">
          <div className="home-block-left">
            <div className="home-text">
              Вы можете искать любые криптовалюты и читать про них подробную
              информацию
            </div>
          </div>
          <div className="home-block-right">{showImage[2]}</div>
        </div>
        <div className="home-block">
          <div className="home-block-left">{showImage[3]}</div>
          <div className="home-block-right">
            <div className="home-text">
              Сайт полностью адаптирован под мобильные устройства
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
