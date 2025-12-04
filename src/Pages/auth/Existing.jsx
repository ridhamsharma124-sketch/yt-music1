




const Existing = () => {
    return (
        <>
            <div className="row">
                <div className="col">
                    <h3>USe your existing email</h3>
                    <p>Enter the email address you want to use for your Google Account</p>
                </div>
                <div className="col">
                    <form>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address </label>
                            <p className="fs-6 mt-2">You'll need to confirm that this email belongs to you</p>
                            <a href="" className="text-decoration-none line-hover-clr">Get a Gmail address instead</a>
                        </div>









                    </form>
                </div>
            </div>


        </>
    )
}
export default Existing;