
import CardUI from '../components/panels/CardUI'
import AlbumsData from '../Data/Albums.json'
import ArtistsData from '../Data/Artists.json'
import TrendingData from '../Data/Trending.json'
import SongsData from '../Data/Songs.json'
import FolkData from '../Data/Folk.json'

import pic11 from "../../public/images/pic11.jpg"
import pic12 from "../../public/images/pic12.jpg"
import pic13 from "../../public/images/pic13.jpg"
import pic14 from "../../public/images/pic14.jpg"
import pic15 from "../../public/images/pic15.jpg"
import pic16 from "../../public/images/pic16.jpg"
import pic17 from "../../public/images/pic17.jpg"
import pic18 from "../../public/images/pic18.jpg"



const Home = () => {


  
  return (
    <>
      <div className="row">
        <ul className="list-unstyled d-flex gap-2">
          <li><button className="btn1 bg-hover">Podcasts</button></li>
          <li><button className="btn1 bg-hover">Workout</button></li>

          <li><button className="btn1 bg-hover">Romance</button></li>
          <li><button className="btn1 bg-hover">Party</button></li>
          <li><button className="btn1 bg-hover">Feel Good</button></li>
          <li><button className="btn1 bg-hover">Energize</button></li>
          <li><button className="btn1 bg-hover">Relax</button></li>
          <li><button className="btn1 bg-hover">Commute</button></li>

          <li><button className="btn1 bg-hover">Sad</button></li>
          <li><button className="btn1 bg-hover">Focus</button></li>
          <li><button className="btn1 bg-hover">Sleep</button></li>

        </ul>
      </div>

      <div className="row">
        <h3>Albums for you</h3>

      </div>

      {AlbumsData &&
        <CardUI items={AlbumsData} />
      }
      <div className="row">
        <h3>Feactured playlists for you</h3>

      </div>


      {TrendingData &&
        <CardUI items={TrendingData} />
      }

      <div className="align-items-center d-flex justify-content-start px-5">
        <img src="https://www.youtube.com/img/music/tastebuilder/shelf_thumbnail/v6/IN_992_X_304.png" width={500} alt="" />
        <div className='ms-5'>
          <h3>Tell us which artists you like</h3>
          <p>We'll create an experience just for you</p>
          <button className="rounded-pill px-2 p-1 border-0 fw-semibold">Let's go</button>
        </div>
      </div>





      <div className="row">
        <p className="mb-0 mt-5">BE WEDDING READY WITH THESE HANDPICKED PLAYLISTS</p>
        <h3>Band Baaja Baraat</h3>

      </div>

      {SongsData &&
        <CardUI items={SongsData} />
      }


     



      <div className="row">
        <p className="mb-0 mt-5">LET YOUR EMOTIONS FLOW. WE'VE GOT YOU</p>
        <h3>Music & Memories</h3>

      </div>
      {FolkData &&
        <CardUI items={FolkData} />
      }

      <div className="row">
        {FolkData && FolkData.map((Folk, index) => {
          return (
            <div className="col" key={index}>
              <img src={`../../public/image/${Folk.image}` + Folk.image} alt='' />

            </div>
          )
        })}
      </div>
      <div>
        <h3>Trending in Shorts</h3>
        </div>
        <div className='d-flex justify-content-end'>
        <button className="border-0 rounded-pill bg-dark text-light">Play all</button>
        </div>
       
      
      
      <div className="row">
        
        <div className="col-6 ">
          <div className='d-grid gap-3'>


            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic11} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                  Balam Pichkari
                </h6>
                <p className=' underline small ms-2 mb-0 text-wrap text-color'> Vishal Dadlant , Shalmali Kholgade, Pritam • 477M plays Yeh Jawaani   </p>
              </span>

            </a>
            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic12} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                  Khadke Glassy (feat. Sidharth Malhotra & Parineeti Chopra)
                </h6>
                <p className='small underline ms-2 mb-0 text-wrap text-color'> Yo Yo Honey Singh ,Jyotica • Khadke Glassy (From "Jabariya Jodi")  </p>
              </span>

            </a>
            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic13} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                  Illegal Weapon 2.0 (From "Street Dancer 3D")
                </h6>
                <p className='underline small ms-2 mb-0 text-wrap text-color'> Jasmine Sandlas , Garry Sandhu ,Tanishk Bagchi & Intense •   Illegal Weapon 2.0 (From "Street Dancer 3D")  </p>
              </span>

            </a>
            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic14} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                  Weapon 2.0
                </h6>
                <p className=' small ms-2 mb-0 text-wrap text-color'> M4SONIC • M4 • 3:42 286K plays   </p>
              </span>

            </a>
          </div>
        </div>
        <div className="col-6">
          <div className='d-grid gap-3'>


            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic15} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                Rangrut
                </h6>
                <p className='underline small ms-2 mb-0 text-wrap text-color'> Diljit Dosanjh, Gurmeet Singh, & Jagvir Sohi  • Punjab 1984 (Original Motion Picture Soundtrack)   </p>
              </span>

            </a>
            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic16} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                Legend
                </h6>
                <p className='small underline ms-2 mb-0 text-wrap text-color'> Sidhu Moose Wala• Legend • 2019 </p>
              </span>

            </a>
            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic17} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                Gabhru
                </h6>
                <p className='underline small ms-2 mb-0 text-wrap text-color'> Jstar• International Villager • 2012  </p>
              </span>

            </a>
            <a href="" className='d-flex align-items-center gap-2 text-decoration-none '>   <img src={pic18} width={40} alt="" />
              <span>
                <h6 className="  mb-0  small ms-2 text-light">
                Expert Jatt
                </h6>
                <p className=' small underline ms-2 mb-0 text-wrap text-color'>Nawab• Expert Jatt• 2018  </p>
              </span>

            </a>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3>From the community
        </h3>
        </div>

      {ArtistsData &&
        <CardUI items={ArtistsData} />
      }






    </>
  )
}

export default Home;