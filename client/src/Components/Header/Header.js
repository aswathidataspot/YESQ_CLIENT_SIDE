import React from 'react'
import logo from '../../assets/logo_sticky.svg'
import './Header.css'
import tockenlog from '../../assets/token.svg'
import user from '../../assets/user.svg'
import tocken from '../../assets/token1.svg'
import search from '../../assets/search.svg'


export default function Header() {
    return (
        <div>
            <header  >
		    <div class="container-fluid header_in uk-visible@m">
			    <div class="row">
				    <div class="col-lg-2 col-sm-2  ">
					    <img className="img-class uk-margin-small-top" src={logo} alt="logo"/>
				    </div>
				    <div class="col-lg-7 col-12">
                        <div className="row">
                            <form class="uk-search uk-search-default search-style">
                                <input class="uk-search-input uk-margin-top back-style " type="txt" placeholder="Location Search"/>
                            </form>
                            <form class="uk-search uk-search-default search-style">
                                <input class="uk-search-input uk-margin-top uk-margin-small-left back-style" type="txt" placeholder=" Search Sectors"/>
                            </form>
                            <p uk-margin>
                                <button class="uk-button uk-button-primary uk-margin-top uk-margin-left btn-style "><label className="uk-text-small">Search</label></button>
                            </p>
                            <div className=" row tocken  uk-margin-left " >
	                            <img className=" " src={tockenlog}/>
                                <h6 className="label-style uk-margin-small-left">Token</h6>
	                        </div>
                        </div>
				    </div>
				    <div class="col-lg-3 col-12">
                        <div className="row" >   
                            <p uk-margin>
                                <button class="uk-button  uk-margin-top uk-margin-left  "><label className="uk-text-small">Sign In</label></button>
                            </p>
                            <p uk-margin>
                                <button class="uk-button uk-button-primary uk-margin-top uk-margin-small-left  "><label className="uk-text-small">Sign Up</label></button>
                            </p>
                        <span class="uk-margin-top uk-margin-small-left "  uk-icon="icon: menu; ratio: 1.3"></span>

                        </div>
			        </div>
		        </div>
    		</div>
        	</header>

            {/* responsive bar */}
            <div class="container-fluid@s uk-hidden@m">
                <div class="row">
			        <div class=" col-12  ">
                        <span class="uk-margin-small-top uk-margin-small-left" uk-toggle="target: #offcanvas-overlay" uk-icon="icon: menu; ratio: 1.3"></span>
                            <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                                <div class="uk-offcanvas-bar off-style">
                                    <button class="uk-offcanvas-close" type="button" uk-close></button>
                                    <h3 class="menu-off">Menu</h3>
                                    <ul class="menu-off">
                                        <li class="menu-off"><a href="#" class="menu-off">Help</a></li><hr/>
                                        <li class="uk-active"><a href="#" class="menu-off">Bank</a></li><hr/>
                                        <li class="uk-active"><a href="#" class="menu-off">Hospitals</a></li><hr/>
                                        <li class="uk-active"><a href="#" class="menu-off">Govt: Institution</a></li><hr/>
                                        <li class="uk-active"><a href="#" class="menu-off">Civil Supply</a></li><hr/>
                                        <li class="uk-active"><a href="#" class="menu-off">internet Cafe</a></li><hr/>
                                        <li class="uk-active"><a href="#" class="menu-off">Akshaya</a></li><hr/>
                                    </ul>
                                </div>
                            </div>
                            <img className="img-res uk-margin-small-top uk-margin-left" src={logo} alt="logo"/>
                            <img className="img-res uk-margin-small-top uk-margin-left" src={user} alt="logo"/>
                            <img className="img-res uk-margin-small-top uk-margin-left" src={tocken} alt="logo"/>
                            <img className="img-res uk-margin-small-top uk-margin-left" uk-toggle="target: #offcanvas-flip" src={search} alt="logo"/>
                            <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                                <div class="uk-offcanvas-bar off-style">
                                    <button class="uk-offcanvas-close" type="button" uk-close></button>
                                    <form class="uk-search uk-search-default search-style">
                                        <input class="uk-search-input uk-margin-top back-style  " type="txt" placeholder="Location Search"/>
                                    </form>
                                    <form class="uk-search uk-search-default search-style">
                                        <input class="uk-search-input uk-margin-top   back-style" type="txt" placeholder=" Search Sectors"/>
                                    </form>
                                    <p uk-margin>
                                        <button class="uk-button uk-button-primary uk-margin-top  uk-align-center uk-margin-left   "><label className="uk-text-small">Search</label></button>
                                    </p>
                                </div>
                            </div>
            			</div>
                    </div>
                </div>
                {/* end responsive bar */}
                <hr/>
                <div className="uk-margin-bottom">
                    <nav class="uk-navbar uk-visible@m nav-style uk-navbar">
                        <div class="uk-navbar-right">
                            <ul class="uk-navbar-nav">
                                <li class="uk-active"><a href="#">Help</a></li>
                                <li class="uk-active"><a href="#">Bank</a></li>
                                <li class="uk-active"><a href="#">Hospitals</a></li>
                                <li class="uk-active"><a href="#">Govt: Institution</a></li>
                                <li class="uk-active"><a href="#">Civil Supply</a></li>
                                <li class="uk-active"><a href="#">internet Cafe</a></li>
                                <li class="uk-active"><a href="#">Akshaya</a></li>
                            </ul>
                        </div>
                    </nav>
                    <span uk-icon="location"></span>Select your location
                </div>
                 
            </div>
    )
}