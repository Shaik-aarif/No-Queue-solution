import React from 'react'
import "../Styles/Merchant_styles/Registration.css"
import Navbar from '../home/Navbar'

const Registration = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Merchant-Info">
                <div class="container">
                    <header>Merchant Registration</header>
                    <form action="https://script.google.com/macros/s/AKfycbwj4HvHUfXzMUjW4Ak-D39SwLQJRDMzrrepHrv4IzwdtrV9R5HPFyZjdyPnCxYweLpz/exec" method="POST" name="google-sheet">
                        <div class="form first">
                            <div class="details personal">
                                <span class="title">Personal Details</span>
                                <div class="fields">
                                    <div class="input-field">
                                        <label>Full Name</label>
                                        <input type="text" name="Full Name" placeholder="Enter your name" autocomplete="off" required />
                                    </div>
                                    <div class="input-field">
                                        <label>Date of Birth</label>
                                        <input type="date" name="D.O.B" placeholder="Enter birth date" autocomplete="off" required />
                                    </div>
                                    <div class="input-field">
                                        <label>Email</label>
                                        <input type="text" name="E-Mail" placeholder="Enter your email" autocomplete="off" required />
                                    </div>
                                    <div class="input-field">
                                        <label>Mobile Number</label>
                                        <input
                                            type="number"
                                            name="Mobile"
                                            placeholder="Enter mobile number" autocomplete="off"
                                            required
                                        />
                                    </div>
                                    <div class="input-field">
                                        <label>Gender</label>
                                        <select required name="Gender" autocomplete="off">
                                            <option disabled selected>
                                                Select gender
                                            </option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="details ID">
                                <span class="title">Identity Details</span>
                                <div class="fields">
                                    <div class="input-field">
                                        <label>ID Type</label>
                                        <select required name="ID Proof" autocomplete="off">
                                            <option disabled selected >
                                                Select Proof
                                            </option>
                                            <option>Aadhar Card</option>
                                            <option>Pan Card</option>
                                            <option>Voter Id</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div class="input-field">
                                        <label>Upload Id Proof</label>
                                        <input
                                            type="file"
                                            name="Uploaded File" autocomplete="off"
                                            placeholder="Upload Your ID Proof"
                                            required
                                        />
                                    </div>
                                    <div class="input-field">
                                        <label>Shop Name</label>
                                        <input type="text" name="Shop Name" placeholder="Enter Shop's Name" autocomplete="off" required />
                                    </div>
                                    <div class="input-field">
                                        <label>Type of Food You Serve</label>
                                        <select required name="Food Avaliable" autocomplete="off">
                                            <option disabled selected>
                                                Select{" "}
                                            </option>
                                            <option>Breakfast</option>
                                            <option>Lunch</option>
                                            <option>Dinner</option>
                                            <option>Snacks & others</option>
                                        </select>
                                    </div>
                                    <div class="input-field">
                                        <label>Shop opens At</label>
                                        <input type="time" name="Opens At" placeholder="Opening Time" autocomplete="off" required />
                                    </div>
                                    <div class="input-field">
                                        <label>Shop Closes At</label>
                                        <input type="time" name="Closes At" placeholder="Closing Time" autocomplete="off" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span class="title">Address Details</span>
                                <div class="fields">
                                    <div class="input-field">
                                        <label>Address Type</label>
                                        <select required name="Address Type" autocomplete="off">
                                            <option disabled selected></option>
                                            <option value="Permanent">Permanent</option>
                                            <option value="Temporary">Temporary</option>
                                        </select>
                                    </div>
                                    <div class="input-field">
                                        <label>Nationality</label>
                                        <input type="text" name="Nationality" placeholder="Enter nationality" autocomplete="off" required />
                                    </div>
                                    <div class="input-field">
                                        <label>State</label>
                                        <input type="text" name="State" placeholder="Enter your state" required />
                                    </div>
                                    <div class="input-field">
                                        <label>District</label>
                                        <input
                                            type="text"
                                            name="District" autocomplete="off"
                                            placeholder="Enter your district"
                                            required
                                        />
                                    </div>
                                    <div class="input-field">
                                        <label>Your Locality</label>
                                        <input
                                            type="text"
                                            name="Locality" autocomplete="off"
                                            placeholder="Enter block number"
                                            required
                                        />
                                    </div>
                                    <div class="input-field">
                                        <label>Nearby Location</label>
                                        <input
                                            type="text"
                                            name="Nearby Location" autocomplete="off"
                                            placeholder="Enter ward number"
                                            required
                                        />
                                    </div>
                                    <div class="buttons">


                                        <button class="sumbit">
                                            <span class="btnText">Submit</span>
                                            <i class="uil uil-navigator"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </form>
                </div>

            </div>
    </div>
  )
}

export default Registration
