import{Link} from "react-router-dom"


const Date
 = () => {
    return (
        <>

            <div className="row">
                <div className="col">
                    <h2>Basic information</h2>
                    <p>Enter your birthday and gender</p>
                </div>

                <div className="col">

                    <form>
                        <div class=" my-5 d-flex gap-2 ">

                            <select class="form-select w-25" aria-label="Default select example">
                                <option selected>Month</option>
                                <option value="1">January </option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11"> November</option>
                                <option value="12">December</option>
                            </select>

                            <div className=" d-flex ">
                                <input type="number"
                                    id="Day"
                                    name="Day"
                                   
                                    placeholder="Day"
                                    className="rounded 
                                    pb-2 
                                    pt-2
                                     ms-3
                                     bg-transparent 
                                    date-size 
                                     border" />
                                <input type="number"
                                    id="year"
                                    name="Year"
                                    min="1900"
                                    max="2100"
                                    placeholder="Year"
                                    className="rounded bg-transparent date-size  border ms-3 " />
                            </div>
                        </div>
                        <div className="form-floating mb-3 ">
                            <select class="form-select mt-0" aria-label="Default select example">
                                <option selected>Gender</option>
                                <option value="1">Female</option>
                                <option value="2">Rather not say</option>
                                <option value="3">Custom</option>
                            </select>

                        </div>
                        <a href="" className="text-decoration-none line-hover-clr">Why we ask for birthday and gender</a>
                        <div className="d-flex justify-content-end gap-5">

                          
                            <Link to={"/Existing"}className="btn-4 text-decoration-none"> Next </Link>
                        </div>
                    </form>
                </div>

            </div>


        </>
    )
}
export default Date;