import React from 'react';
import './footstyle.css';

function Foote(){
    return(
        <>
            <div className="foot_main">
                        {/* <li>Question ? Contact us.</li> */}
                <div className="foot_div1">
                    <ul className ="foot_ul1">
                        <li className ="content_li"><a className="links" href="https://help.netflix.com/en/node/412">FAQ</a></li>
                        <li className ="content_li"><a  className="links" href="http://ir.netflix.com/">
                            Investor Relations</a></li>
                        <li className ="content_li"><a className="links"  href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li className ="content_li"><a  className="links"  href="https://fast.com/">Speed Test</a></li>
                    </ul>
                </div>

                <div className="foot_div2">
                    <ul className ="foot_ul2">
                        <li  className ="content_li"><a  className="links" href="https://help.netflix.com/">Help Centre</a></li>
                        <li className ="content_li"><a   className="links" href="https://jobs.netflix.com/jobs">Jobs</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/privacy#cookies">Cookie Preferences</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    </ul>
                </div>

                <div className="foot_div3">
                    <ul className ="foot_ul3">
                        <li className ="content_li"><a  className="links" href="https://www.netflix.com/youraccount">Account</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.netflix.com/watch">Ways to Watch </a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
                        <li className ="content_li"><a  className="links" href="https://www.netflix.com/in/browse/genre/839338">Netflix Originals</a></li>
                    </ul>
                </div>

                <div className="foot_div4">
                    <ul className ="foot_ul4">
                        <li className ="content_li"><a  className="links" href="https://media.netflix.com/">Media Centre</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
                        <li className ="content_li"><a  className="links" href="https://help.netflix.com/contactus">Contact Us</a></li>
                    </ul>
                </div>
                
            </div>
        </>



    );
}

export default Foote;