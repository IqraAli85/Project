import React from 'react'
import '../Style.css/footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div>

            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget company_widget wow fadeInLeft data-wow-delay 0.2s visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft">
                                     <h3 className="-title f_600 t_color f_size_18">Login </h3>
                                  
                                    <form action="#" className="f_subscribe_two mailchimp method=post  novalidate=true _lpchecked=1">
                                         <input type="text" name="EMAIL" className="form-control memail" placeholder="Email"></input>
                                        <button className="btn btn_get btn_get_two" type="submit">
                                        <Link to="/login">Login</Link>
                                         </button> 
                                         
                                        <p className="mchimp-errmessage display: none;"></p>
                                        <p className="mchimp-sucmessage display: none;"></p>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft  data-wow-delay 0.4s visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;">
                                    <h3 className="f-title f_600 t_color f_size_18">Information</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="https://pma.punjab.gov.pk">PMA website</a></li>
                                        <li><a href="https://pma.punjab.gov.pk/lahore_metrobus_system">Metro bus</a></li>
                                        <li><a href="https://pma.punjab.gov.pk/lahore_orange_line_metro_train_system">Train Station</a></li>
                                        <li><a href="https://pma.punjab.gov.pk">Latest News</a></li>
                                        <li><a href="https://pma.punjab.gov.pk">Projects</a></li>
                                        <li><a href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft  data-wow-delay 0.6s visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="https://pma.punjab.gov.pk/frequently-asked-questions">FAQ</a></li>
                                   
                                        <li><a href="https://pma.punjab.gov.pk/contact-us">Report an issue</a></li>
                                        <li><a href="https://pma.punjab.gov.pk/our-services">Services</a></li>
                                        <li><a href="https://pma.punjab.gov.pk/contact-us">Helpline</a></li>
                                        <li><a href="https://pma.punjab.gov.pk/contact-us">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft data-wow-delay 0.8s visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;">
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="#" className="fab fa-facebook"></a>
                                        <a href="#" className="fab fa-twitter"></a>
                                        <a href="#" className="fab fa-linkedin"></a>
                                        <a href="#" className="fab fa-pinterest"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                {/* <p className="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p> */}
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                {/* <p>Made with <i className="icon_heart"></i> in <a href="http://cakecounter.com" target="_blank">CakeCounter</a></p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
