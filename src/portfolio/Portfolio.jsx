import TextBlock from "./TextBlock";
import { array } from "./data";

export default function Portfolio(props) {
  return (
    <div className="portfolio">
      <div className="portfolio_container">
        <main className="gallery">
          <div data-speed="0.9" className="gallery_left">
            <img src={props.img[0]} alt="" className="gallery_item" />
            <TextBlock {...array[0]} />
            <img src={props.img[1]} alt="" className="gallery_item" />
            <img src={props.img[2]} alt="" className="gallery_item" />
          </div>
          <div data-speed="1.15" className="gallery_right">
            <TextBlock {...array[0]} />
            <img src={props.img[2]} alt="" className="gallery_item" />
            <img src={props.img[3]} alt="" className="gallery_item" />
            <img src={props.img[4]} alt="" className="gallery_item" />
          </div>
        </main>
      </div>
    </div>
  );
}
