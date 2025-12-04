



const SideBar = ()=>{
    return(
<>


    <div className="sidebar position-fixed">


        <ol class="list-group gap-2">
          <li class="list-group-item d-flex justify-content-between  active align-items-center">
            <span class="badge rounded-pill"><svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              fill="#fff"
              className="style-scope yt-icon"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30",
                height: "30"
              }}
            >
              <g className="style-scope yt-icon">
                <path d="M4,10V21h6V15h4v6h6V10L12,3Z" className="style-scope yt-icon" />
              </g>
            </svg>
            </span>

            <div class="ms-2 me-auto">
              <div class="fw-bold">Home</div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="badge rounded-pill">
              <svg
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
                focusable="false"
                fill="#fff"
                className="style-scope yt-icon"
                style={{ pointerEvents: "none", display: "block", width: 30, height: 30 }}
              >
                <g className="style-scope yt-icon">
                  <path
                    d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
                    className="style-scope yt-icon"
                  />
                </g>
              </svg>

            </span>

            <div class="ms-2 me-auto">
              <div class="fw-bold">Explore</div>
            </div>
          </li>


          <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="badge rounded-pill"><svg viewBox="0 0 24 24" fill="white" width={30} preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"><g class="style-scope yt-icon"><path d="M16,6v2h-2v5c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2c0.37,0,0.7,0.11,1,0.28V6H16z M18,20H4V6H3v15h15V20z M21,3H6v15h15V3z M7,4h13v13H7V4z" class="style-scope yt-icon"></path></g></svg>
            </span>

            <div class="ms-2 me-auto">
              <div class="fw-bold">Library</div>
            </div>
          </li>

        </ol>

        <hr></hr>
        <button className="sidebar-sign bg-hover">Sign in</button>
        <p className="heading ">Sign in to create & share playlists, get personalized recommendations, and more.</p>
        {/* <button className="bg-hover  px-5 mt-2 sidebar-sign"> <i class="fa-solid fa-plus"></i> New playlist</button> */}

        {/* <ul className="list-unstyled mt-2 ms-3 ">
          <div className="position-relative">

            <li className=" fw-semibold">Liked music
                <p> <i class="fa-solid fa-thumbtack"></i>Audio playlist</p>
              <div className="position-absolute">
                <i class="fa-solid fa-play d-flex justify-content-end"></i>

              </div>

            </li>
          </div>
          <li className="fw-semibold">
            00s Bollywood Romance
            <p>YouTube Music</p>
          </li>
          <li className="fs-semibold">
            Episodes for later
            <p>Audio playlist</p>
          </li>
        </ul> */}

      </div>



</>
    )
}
export default SideBar