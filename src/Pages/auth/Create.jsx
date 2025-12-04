import { useState } from "react";
import axios from "axios";

const Create = () => {

    const [step, setStep] = useState(0);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSteps = () => {
        setError("");

        if (step === 0) {
            if (!fname) {
                setError("First Name Required");
                return;
            }
            if (!lname) {
                setError("Last Name Required");
                return;
            }
            setStep(1);
            return;
        }

        if (step === 1) {
            if (!email) {
                setError("Email Required");
                return;
            }
            if (!password) {
                setError("Password Required");
                return;
            }
            HandleSubmit();
        }
    };

    const HandleSubmit = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/auth/register", {
                fname,
                lname,
                email,
                password
            });

            console.log("Response:", response.data);
            window.location.href = "/home";

        } catch (err) {
            console.log(err);
            setError("Something went wrong");
        }
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <h2>Create a Google Account</h2>
                    <p>Enter your name</p>
                </div>

                <div className="col">
                    {error && <div className="py-2 text-danger">{error}</div>}
                    
                    <form method="POST">
                        {step === 0 && (
                            <>
                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="FirstNameFloat"
                                        placeholder="First Name"
                                        onKeyUp={(e) => setFname(e.target.value)}
                                    />
                                    <label htmlFor="FirstNameFloat">First Name</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="LastNameFloat"
                                        placeholder="Last Name"
                                        onKeyUp={(e) => setLname(e.target.value)}
                                    />
                                    <label htmlFor="LastNameFloat">Last Name</label>
                                </div>
                            </>
                        )}

                        {step === 1 && (
                            <>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailFloat"
                                        placeholder="Email"
                                        onKeyUp={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="emailFloat">Email</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="passwordFloat"
                                        placeholder="Password"
                                        onKeyUp={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="passwordFloat">Password</label>
                                </div>
                            </>
                        )}

                        <button
                            type="button"
                            onClick={handleSteps}
                            className="text-clr-btn rounded-pill px-4 py-2 border-0"
                        >
                            {step < 1 ? "Next" : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Create;
