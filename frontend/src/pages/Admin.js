import React from 'react'

const Admin = () => {
    return (
        <div>

            <div>
                <div id="throbber" style={{ display: 'none', minHeight: 120 }} />
                <div id="noty-holder" />
                <div id="wrapper">
                    {/* Navigation */}
                    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="https://bryanrojasq.wordpress.com">
                                <img src="http://placehold.it/200x50&text=LOGO" alt="LOGO" />
                            </a>
                        </div>
                        {/* Top Menu Items */}
                        <ul className="nav navbar-right top-nav">
                            <li><a href="#" data-placement="bottom" data-toggle="tooltip" data-original-title="Stats"><i className="fa fa-bar-chart-o" />
                            </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin User <b className="fa fa-angle-down" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#"><i className="fa fa-fw fa-user" /> Edit Profile</a></li>
                                    <li><a href="#"><i className="fa fa-fw fa-cog" /> Change Password</a></li>
                                    <li className="divider" />
                                    <li><a href="#"><i className="fa fa-fw fa-power-off" /> Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                        {/* Sidebar Menu Items - These collapse to the responsive navigation menu on small screens */}
                        <div className="collapse navbar-collapse navbar-ex1-collapse">
                            <ul className="nav navbar-nav side-nav">
                                <li>
                                    <a href="#" data-toggle="collapse" data-target="#submenu-1"><i className="fa fa-fw fa-search" /> MENU 1 <i className="fa fa-fw fa-angle-down pull-right" /></a>
                                    <ul id="submenu-1" className="collapse">
                                        <li><a href="#"><i className="fa fa-angle-double-right" /> SUBMENU 1.1</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right" /> SUBMENU 1.2</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right" /> SUBMENU 1.3</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" data-toggle="collapse" data-target="#submenu-2"><i className="fa fa-fw fa-star" />  MENU 2 <i className="fa fa-fw fa-angle-down pull-right" /></a>
                                    <ul id="submenu-2" className="collapse">
                                        <li><a href="#"><i className="fa fa-angle-double-right" /> SUBMENU 2.1</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right" /> SUBMENU 2.2</a></li>
                                        <li><a href="#"><i className="fa fa-angle-double-right" /> SUBMENU 2.3</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="investigaciones/favoritas"><i className="fa fa-fw fa-user-plus" />  MENU 3</a>
                                </li>
                                <li>
                                    <a href="sugerencias"><i className="fa fa-fw fa-paper-plane-o" /> MENU 4</a>
                                </li>
                                <li>
                                    <a href="faq"><i className="fa fa-fw fa fa-question-circle" /> MENU 5</a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </nav>
                    <div id="page-wrapper">
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <div className="row" id="main">
                                <div className="col-sm-12 col-md-12 well" id="content">
                                    <h1>Welcome Admin!</h1>
                                </div>
                            </div>
                            {/* /.row */}
                        </div>
                    </div></div></div>

        </div>
    )
}

export default Admin