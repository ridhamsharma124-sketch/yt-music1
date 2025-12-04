import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardUI = ({ items, limit =5}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: limit,
        slidesToScroll: limit
      };
    return (
        <>
         <div className="slider-container">
          <Slider {...settings}>
            {items && items.map((item,index) => (
                   <div className="col p-3" key={index}>
                   <div className="card bg-transparent">
                   <img src={`/images/${item.image}`} className="card-img" />
                    <div className="card-body px-0">
                    <h6 className="line-hover mb-1 text-wrap">{item.title}</h6>
                    {item.artists && <p className="small  text-wrap underline text-color"><small> </small> {item.artists.map((artist) => artist +", " )}</p> }
                    {item.artist &&    <p className="small underline text-color">{item.artist}</p> }
                    
                    </div>
                   </div>
                  </div>
            ))}
            </Slider>
       
         </div> 
        




        
       
        </>
    )


}
export default CardUI





