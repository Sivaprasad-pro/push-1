'use client';
import React from 'react'
import CookieConsent from "react-cookie-consent";

const Cookies = () => {
    return (
        <div>
            <CookieConsent
                location="bottom"
                buttonText="I Understand"
                style={{ background: "#52525299", color: "#fff" }}
                buttonStyle={{ background: "#fff", color: "#000", fontSize: "13px" }}
                expires={150}
                containerClasses={"cookie_wrap"}
                buttonClasses={"cookie_btn_wrap"}
            >
                <div className="d-flex align-items-center gap-2">
                    <img src='./graphics/cookie.svg' />
                    By clicking “I Understand”, you agree Konceptslab can store cookies on your device and disclose information in accordance with our Cookie Policy.
                </div>
            </CookieConsent>
        </div>
    )
}

export default Cookies
