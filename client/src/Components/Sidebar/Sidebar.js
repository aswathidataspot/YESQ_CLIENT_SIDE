import React from 'react'
import './Sidebar.css'



export default function Sidebar() {
    return (
        <div>
            
                
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-2 home-style1">
                            <label>Please select your <br/> location for better<br/> experience</label> <hr/>
                            <h5 class="uk-text-primary">Filters</h5> <br/>
                            <p class="uk-text-uppercase uk-text-primary">Categories </p><hr/>
                            <ul>
			                    <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid  ">
                                        <label class=" ">Banks </label>
                                        <label><input class="uk-checkbox check-bank  uk-align-right radio-style"   type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Hospitals </label>
                                        <label><input class="uk-checkbox   uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Govt:Inst </label>
                                        <label><input class="uk-checkbox   uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Internet Help </label>
                                        <label><input class="uk-checkbox    uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Others </label>
                                        <label class="  "><input class="uk-checkbox   radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
		                    </ul>
                            <p class="uk-text-uppercase uk-padding-remove-top uk-text-primary">Working Time</p><hr/>
                            <ul>
			                    <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">24 Hrs </label>
                                        <label><input class="uk-checkbox   uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                    <label class=" ">12 Hrs </label>
                                    <label><input class="uk-checkbox  uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                </div>
			                    </li>
                            </ul>
                            <p class="uk-text-uppercase uk-padding-remove-top uk-text-primary">AMINITIES</p><hr/>
                            <ul>
			                    <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Parking</label>
                                        <label><input class="uk-checkbox   uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">AC</label>
                                        <label><input class="uk-checkbox   uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
		                        </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">                                            
                                        <label class=" ">Wifi</label>
                                        <label><input class="uk-checkbox    uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                            </ul>
                            <p class="uk-text-uppercase uk-padding-remove-top uk-text-primary">PAYMENT</p><hr /><small></small>
                            <ul>
		                    	<li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Card</label>
                                        <label><input class="uk-checkbox   uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Mobile Banking</label>
                                        <label><input class="uk-checkbox    uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                                <li>
                                    <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                                        <label class=" ">Cash</label>
                                        <label><input class="uk-checkbox   uk-align-right radio-style" type="checkbox" name="checkbox"/></label>
                                    </div>
			                    </li>
                            </ul>
                        </div>
                         

                    </div>
                </div>
            </div>
    )
}