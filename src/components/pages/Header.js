import React from "react";
import avatar from '../../assets/images/cal-toon4.png'

function Header() {
    return (
        <section className="container-fluid intro" id="intro-top">
            <div className="row intro-row">
                <div className="col-lg-4 left-side">
                <div className="col-lg-8" id="left-inner"></div>
                </div>
                <div className="col-lg-8 right-side">
                <div id="intro-flex">
                    <div className="intro-mobile">
                        <h1>i'm cal</h1>
                    </div>
                    <div id="intro-outer">
                    <div id="intro-inner">
                        <img src={avatar} alt="profile pic" id="profile-pic"/>
                    </div>
                    </div>
                    <div className="intro-mobile">
                        <h1>a web developer</h1>
                    </div>
                </div>
                <div id="welcome-flex">
                    <div classNameName="" id="title-outer">
                    <div id="title-inner">
                        <div id="title-intro">
                        <h1>i'm cal</h1>
                        </div>
                    </div>
                    </div>
                    <div id="line-1"></div>
                    <div className="" id="web-outer">
                    <div id="web-inner">
                        <div id="web-title">
                        <h2>web</h2>
                        </div>
                    </div>
                    </div>
                    <div id="line-2"></div>
                    <div className="" id="a-outer">
                    <div id="a-inner">
                        <div id="a-title">
                        <h2>a</h2>
                        </div>
                    </div>
                    </div>
                    <div id="line-3"></div>
                    <div className="" id="dev-outer">
                    <div id="dev-inner">
                        <div id="dev-title">
                        <h2>developer</h2>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Header;