import React from "react";
import "../Styles/Payment/Payment.css";
import img from "../../Assets/images/card_img.png";
import Navbar from "../home/Navbar";

const Payment = () => {
    return (
        <>
        <Navbar></Navbar>
        <div>
            <div class="container">
                <form action="">
                    <div class="row">
                        <div class="col">
                            <h3 class="title">billing address</h3>

                            <div class="inputBox">
                                <span>Full name :</span>
                                <input type="text" placeholder="Your Full Name" />
                            </div>
                            <div class="inputBox">
                                <span>Email :</span>
                                <input type="email" placeholder="example@example.com" />
                            </div>
                            <div class="inputBox">
                                <span>Address :</span>
                                <input type="text" placeholder="room - street - locality" />
                            </div>
                            <div class="inputBox">
                                <span>city :</span>
                                <input type="text" placeholder="city" />
                            </div>

                            <div class="flex">
                                <div class="inputBox">
                                    <span>state :</span>
                                    <input type="text" placeholder="state" />
                                </div>
                                <div class="inputBox">
                                    <span>pin code :</span>
                                    <input type="text" placeholder="eg:522 303" />
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <h3 class="title">Payment</h3>

                            <div class="inputBox">
                                <span>Cards accepted :</span>
                                <img src={img} alt="Not Found" />
                            </div>
                            <div class="inputBox">
                                <span>Name on card :</span>
                                <input type="text" placeholder="name on the card" />
                            </div>
                            <div class="inputBox">
                                <span>credit card number :</span>
                                <input type="number" placeholder="1111-2222-3333-4444" />
                            </div>
                            <div class="inputBox">
                                <span>Exp month :</span>
                                <input type="text" placeholder="january" />
                            </div>

                            <div class="flex">
                                <div class="inputBox">
                                    <span>Exp year :</span>
                                    <input type="number" placeholder="2022" />
                                </div>
                                <div class="inputBox">
                                    <span>CVV :</span>
                                    <input type="text" placeholder="1234" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="proceed to checkout" class="submit-btn" />
                </form>
            </div>
        </div>
        </>
    );
};

export default Payment;
