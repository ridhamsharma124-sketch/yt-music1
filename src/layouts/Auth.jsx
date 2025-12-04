import { Outlet } from "react-router-dom"
const Applayout = () => {
    return (
        <>

            <div className="container-fuild bg ">
                <div className="container">
                    <div className="row vh-100 align-items-center">
                        <div className="col-10 mx-auto">
                            <div className="card rounded-5">
                                <div className="card-body p-5">
                                    <svg xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true" jsname="jjf7Ff"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
                                    <Outlet />
                                </div>
                                 </div>
                                 <div className="d-flex align-items-center justify-content-between p-3">
                                    <div>
                                    
                                <button class="btn btn-Secondary dropdown-toggle text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    English (united States)
                                </button>
                                <ul class="dropdown-menu border-0 text-dark">
                                    <li><a class="dropdown-item text-dark" href="#">Hindi</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">English</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">Afriaans</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">azarbaycan</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">bosanski</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">catala</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">cestina</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">Dansk</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">Deutsch</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">Francais(France)</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">galego</a></li>
                                </ul> 
                                </div>
                                <div>

                                
                                <ul className="d-flex  list-unstyled  small mb-0 ">
                                    <li className=" px-3 py-1 ">Help</li>
                                    <li className="px-3 py-1 ">Privacy</li>
                                    <li className="px-3 py-1">Tearms</li>
                                </ul>
                           
                                </div> 
                                     
                                 </div>
                        </div>
                    </div>
                </div>
            </div>












        </>
    )
}
export default Applayout;