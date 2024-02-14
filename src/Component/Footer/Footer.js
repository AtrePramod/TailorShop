import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footer_text'>
                <div className='table'>
                    <div className="col-1">
                        <div className="tailer_text">TAILOR</div>
                        <div className="heading_text">TAILOR</div>
                    </div>
                    <div className="col-2">
                        <div className="heading_text">product</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>

                    </div>
                    <div className="col-3">
                        <div className="heading_text">Help</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>

                    </div>
                    <div className="col-4">
                        <div className="heading_text">Social</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>

                    </div>
                    <div className="col-5">
                        <div className="heading_text">Legal</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>
                        <div className="sub_text">sub</div>

                    </div>
                </div>
                <p className='copy'> <hr />Copyright © 2023 ArieAr All Rights Reserved</p>

            </div>
        </>
    )
}

export default Footer;