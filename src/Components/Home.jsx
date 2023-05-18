import React from 'react';

const Home = () => {
    return (
        <div className='row'>
            <div className='col-6 mx-auto border p-5 rounded my-4'>
                <form className='d-flex flex-column gap-3'>
                    <h1 className='text-center' >Add an User using this from</h1>
                    <input type="text" name="first_name" id="first_name" placeholder='First name' className="form-control" />
                    <input type="text" name="last_name" id="last_name" placeholder="Last name" className="form-control" />
                    <input type="tel" name="phone_number" id="phone_numbere" placeholder="Your number" className="form-control" />
                    <select className='form-control' name="gender" id="gender">
                        <option value="Select">Select</option>
                        <option value="male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Coustom">Coustom</option>
                    </select>
                    <input type="submit" className='btn btn-primary' value="Add new user" />
                </form>
            </div>
        </div>
    );
};

export default Home;