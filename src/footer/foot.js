import React from 'react';
import './footstyle.css';

function Foote(){
    return(
        <>
            <div className="foot_main">
                        {/* <li>Question ? Contact us.</li> */}
                <div className="foot_div1">
                    <ul className ="foot_ul1">
                        <li className ="content_li">FAQ</li>
                        <li className ="content_li">Investor Relations</li>
                        <li className ="content_li">Privacy</li>
                        <li className ="content_li">Speed Test</li>
                    </ul>
                </div>

                <div className="foot_div2">
                    <ul className ="foot_ul2">
                        <li  className ="content_li">Help Centre</li>
                        <li className ="content_li">Jobs</li>
                        <li className ="content_li">Cookie Preferences</li>
                        <li className ="content_li">Legal Notices</li>
                    </ul>
                </div>

                <div className="foot_div3">
                    <ul className ="foot_ul3">
                        <li className ="content_li">Account</li>
                        <li className ="content_li">Ways to Watch </li>
                        <li className ="content_li">Corporate Information</li>
                        <li className ="content_li">Netflix Originals</li>
                    </ul>
                </div>

                <div className="foot_div4">
                    <ul className ="foot_ul4">
                        <li className ="content_li">Media Centre</li>
                        <li className ="content_li">Terms of Use</li>
                        <li className ="content_li">Contact Us</li>
                    </ul>
                </div>
                
            </div>
        </>



    );
}

export default Foote;