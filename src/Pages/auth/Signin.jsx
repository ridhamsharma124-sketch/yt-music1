

import { Link } from "react-router-dom";
const Signin = () => {
    return (
        <>
            <>



                <div className="row">
                    <div className="col">
                        <div>
                            <h4>Sign in</h4>
                            <span>
                                to continue to YouTube Music
                            </span>

                        </div>
                    </div>
                    <div className="col">
                        <form method="POST">
                            < div class="form-floating mb-3">
                                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email or phone</label>
                            </div>


                            <Link to={"/Forgot"} className="btn6 rounded-pill text-dark p-1 small"> Forgot email? </Link>
                            <div>
                                Not your computer? Use Guest mode to sign in privately. <a href=""></a>
                                <a href="" className="line-hover-clr text-decoration-none "> Learn more about using Guest mode</a>
                            </div>
                            <div className="d-flex justify-content-end gap-5">

                                <a href="" className="">
                                    <div class="btn-group dropup">
                                        <button type="button" class="btn border-0 rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                            Create account
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item text-dark" href="/Profile">For my personal use</a></li>
                                            <li><a class="dropdown-item text-dark" href="#">For my child</a></li>
                                            <li><a class="dropdown-item text-dark" href="#">For my work or my business</a></li>
                                        </ul>
                                    </div>
                                </a>

                                <a href="/Forgot"><button className="btn-4" rounded>Next</button></a>
                            </div>
                        </form>

                    </div>
                </div>










            </>
        </>
    )
}
export default Signin