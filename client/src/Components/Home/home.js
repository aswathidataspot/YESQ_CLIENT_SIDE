import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header.js'
import Banner from '../Banner/Banner.js'
import './home.css'
import banner from '../..//assets/banner.jpg'
import bank from '..//..//assets/bank.svg'
import hospital from '..//..//assets/hospital.svg'
import govt from '..//..//assets/govt.svg'
import internet from '..//..//assets/internet.svg'
import civil from '..//..//assets/civil.svg'
import others from '..//..//assets/others.svg'



export default function Home() {
    return (
        <div>
            <Header/>
                <div class="uk-visible@m">
                    <Banner/>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2 home-style1 ">
                            <label>Please select your <br/> location for better<br/> experience</label> <hr/>
                            <h5 class="uk-text-primary">Filters</h5><br/>
                            <p class="uk-text-uppercase uk-text-primary">Categories</p><hr/>
                            <ul>
			                    <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Banks </label>
                                        <label><input class="uk-checkbox check-bank  uk-align-right radio-style"   type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Hospitals </label>
                                        <label><input class="uk-checkbox check-hsptl  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Govt:Inst </label>
                                        <label><input class="uk-checkbox check-govt uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Internet Help </label>
                                        <label><input class="uk-checkbox check-int  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Others </label>
                                        <label class=" uk-align-right"><input class="uk-checkbox check-oth  radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
		                    </ul>
                            <p class="uk-text-uppercase uk-padding-remove-top uk-text-primary">Working Time</p><hr/>
                            <ul>
			                    <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">24 Hrs </label>
                                        <label><input class="uk-checkbox check-bank  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label class=" ">12 Hrs </label>
                                    <label><input class="uk-checkbox check-hr  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                </div>
			                    </li>
                            </ul>
                            <p class="uk-text-uppercase uk-padding-remove-top uk-text-primary">AMINITIES</p><hr/>
                            <ul>
			                    <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Parking</label>
                                        <label><input class="uk-checkbox check-park  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">AC</label>
                                        <label><input class="uk-checkbox check-ac  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
		                        </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">                                            
                                        <label class=" ">Wifi</label>
                                        <label><input class="uk-checkbox check-wifi  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                            </ul>
                            <p class="uk-text-uppercase uk-padding-remove-top uk-text-primary">PAYMENT</p><hr /><small></small>
                            <ul>
		                    	<li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Card</label>
                                        <label><input class="uk-checkbox check-card  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Mobile Banking</label>
                                        <label><input class="uk-checkbox check-mob  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Cash</label>
                                        <label><input class="uk-checkbox check-cash  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                            </ul>
                        </div>
                        <div class="col-lg-10 home-style2">
                            <div class="row">
                            <div class="col-lg-3">
                            <div class="uk-card card-style uk-card-default uk-card-body uk-margin-xlarge-top uk-margin-left uk-width-1-4@l uk-width-1-1@s">
                                <div class="icon-parent-div"><img className="card-img uk-align-center" src={bank}/></div> <br/><br/>
                                <div class="uk-text-center">
                                <h3 class="uk-card-title uk-margin-left uk-text-primary text-parent-dev uk-text-bold">Banks</h3>
                                <p><a href="#"class="text-align">Co-Operative</a></p>
				                <p><a href="#"class="text-align">Nationalized</a></p>
				                <p><a href="#"class="text-align">Finance</a></p>
				                <p><a href="#"class="text-align">Others</a></p>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-3">
                            <div class="uk-card card-style uk-card-default uk-card-body uk-margin-xlarge-top uk-margin-left uk-width-1-4@m uk-width-1-1@s">
                                <div class="icon-parent-div"><img className="card-img" src={hospital}/></div> <br/><br/>
                                <div class="uk-text-center">
                                <h3 class="uk-card-title uk-margin-left text-parent-dev uk-text-primary uk-text-bold">HOSPITAL</h3>
                                <p><a href="#"class="text-align">GOVT : HOSPITAL</a></p>
				                <p><a href="#"class="text-align">GOVT : HEALTH CENTER</a></p>
				                <p><a href="#"class="text-align">PRIVATE HOSPITAL</a></p>
				                <p><a href="#"class="text-align">Others</a></p>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-3">
                            <div class="uk-card card-style uk-card-default uk-card-body uk-margin-xlarge-top uk-margin-left uk-width-1-4@m uk-width-1-1@s">
                                <div class="icon-parent-div"><img className="card-img" src={govt}/></div> <br/><br/>
                                <div class="uk-text-center">
                                <h3 class="uk-card-title uk-margin-left uk-text-primary text-parent-dev uk-text-bold">GOVT:INST</h3>
                                <p><a href="#"class="text-align">VILLAGE OFFICE</a></p>
				                <p><a href="#"class="text-align">PANCHAYATH</a></p>
				                <p><a href="#"class="text-align">CORPORATION</a></p>
				                <p><a href="#"class="text-align">Others</a></p>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-3">
                            <div class="uk-card card-style uk-card-default uk-card-body uk-margin-xlarge-top uk-margin-left uk-width-1-4@m uk-width-1-1@s">
                                <div class="icon-parent-div"><img className="card-img" src={civil}/></div> <br/><br/>
                                <div class="uk-text-center">
                                <h3 class="uk-card-title uk-margin-left uk-text-primary text-parent-dev uk-text-bold">CIVIL SUPPLY</h3>
                                <p><a href="#"class="text-align">RATION SHOP</a></p>
				                <p><a href="#"class="text-align">SUPPLYCO</a></p>
				                <p><a href="#"class="text-align">CV 3</a></p>
				                <p><a href="#"class="text-align">Others</a></p>
                                </div>
                            </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-lg-3">
                            <div class="uk-card card-style uk-card-default uk-card-body uk-margin-xlarge-top uk-margin-left uk-width-1-4@m uk-width-1-1@s">
                                <div class="icon-parent-div"><img className="card-img" src={internet}/></div> <br/><br/>
                                <div class="uk-text-center">
                                <h3 class="uk-card-title uk-margin-left uk-text-primary text-parent-dev uk-text-bold">INTERNET_HELP</h3>
                                <p><a href="#"class="text-align">AKSHAYA</a></p>
				                <p><a href="#"class="text-align">JANASEVA</a></p>
				                <p><a href="#"class="text-align">INTERNET CAFE</a></p>
				                <p><a href="#"class="text-align">Others</a></p>
                                </div>
                            </div>
                            </div>
                            <div class="col-lg-3">
                            <div class="uk-card card-style uk-card-default uk-card-body uk-margin-xlarge-top uk-margin-left uk-width-1-4@m uk-width-1-1@s">
                                <div class="icon-parent-div"><img className="card-img" src={others}/></div> <br/><br/>
                                <div class="uk-text-center">
                                <h3 class="uk-card-title uk-margin-left uk-text-primary text-parent-dev uk-text-bold">OTHERS</h3>
                                <p><a href="#"class="text-align">TOURISM SECTORS</a></p>
				                <p><a href="#"class="text-align">SHOPPING</a></p>
				                <p><a href="#"class="text-align">WORK SHOP</a></p>
				                <p><a href="#"class="text-align">Others</a></p>
                            </div>  
                            </div>
                            </div>
                            
                            
                            
                             
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}