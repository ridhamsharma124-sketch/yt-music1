import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <h3>Create a Google Account</h3>
                    <p>Enter your name</p>
                </div>

                <div className="col">
                    <form>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="First Name"
                            />
                            <label htmlFor="firstName">First name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name"
                            />
                            <label htmlFor="lastName">Last name (optional)</label>
                        </div>

                        <div className="d-flex justify-content-end">
                            <Link to="/Create">
                                <button className="btn-4" type="button">Next</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Profile;
