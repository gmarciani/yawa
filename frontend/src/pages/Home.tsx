import React, {Fragment} from 'react';

function Home() {
    return (
        <Fragment>
            {/* begin::Theme mode setup on page load*/}
            {/*<script>var defaultThemeMode = "light"; var themeMode; if ( document.documentElement ) { if ( document.documentElement.hasAttribute("data-bs-theme-mode")) { themeMode = document.documentElement.getAttribute("data-bs-theme-mode"); } else { if ( localStorage.getItem("data-bs-theme") !== null ) { themeMode = localStorage.getItem("data-bs-theme"); } else { themeMode = defaultThemeMode; } } if (themeMode === "system") { themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"; } document.documentElement.setAttribute("data-bs-theme", themeMode); }</script>*/}
            <script>var defaultThemeMode = "light"; var themeMode = defaultThemeMode; document.documentElement.setAttribute("data-bs-theme", themeMode);</script>
            {/* end::Theme mode setup on page load*/}
            {/* begin::App*/}
            <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
                {/* begin::Page*/}
                <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
                    {/* begin::Header*/}
                    <div id="kt_app_header" className="app-header">
                        {/* begin::Header container*/}
                        <div className="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
                            {/* begin::Header logo*/}
                            <div className="app-header-logo d-flex align-items-center ps-lg-2 me-lg-10">
                                {/* begin::Mobile toggle*/}
                                <div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none" id="kt_app_sidebar_mobile_toggle">
                                    <i className="ki-outline ki-abstract-14 fs-1"></i>
                                </div>
                                {/* end::Mobile toggle*/}
                                {/* begin::Logo image*/}
                                <a href="index.html">
                                    <img alt="Logo" src="assets/media/logos/demo31.svg" className="h-30px" />
                                </a>
                                {/* end::Logo image*/}
                            </div>
                            {/* end::Header logo*/}
                            {/* begin::Header wrapper*/}
                            <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                                {/* begin::Menu wrapper*/}
                                <div className="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
                                    {/* begin::Menu holder*/}
                                    <div className="app-header-menu app-header-mobile-drawer align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="app-header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_header_menu_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_menu_wrapper'}">
                                        {/* begin::Menu*/}
                                        <div className="menu menu-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-dark menu-arrow-gray-400 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0" id="#kt_app_header_menu" data-kt-menu="true">
                                            {/* begin:Menu item*/}
                                            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
                                                {/* begin:Menu link*/}
                                                <span className="menu-link">
												<span className="menu-title">Dashboards</span>
												<span className="menu-arrow"></span>
											</span>
                                                {/* end:Menu link*/}
                                                {/* begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                                                    {/* begin:Dashboards menu*/}
                                                    <div className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible" data-kt-menu-dismiss="true">
                                                        {/* begin:Row*/}
                                                        <div className="row">
                                                            {/* begin:Col*/}
                                                            <div className="col-lg-8 mb-3 mb-lg-0 py-3 px-3 py-lg-6 px-lg-6">
                                                                {/* begin:Row*/}
                                                                <div className="row">
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="index.html" className="menu-link active">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-element-11 text-primary fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Default</span>
																				<span className="fs-7 fw-semibold text-muted">Reports & statistics</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="dashboards/ecommerce.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-basket text-danger fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">eCommerce</span>
																				<span className="fs-7 fw-semibold text-muted">Sales reports</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="dashboards/projects.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-abstract-44 text-info fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Projects</span>
																				<span className="fs-7 fw-semibold text-muted">Tasts, graphs & charts</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="dashboards/online-courses.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-color-swatch text-success fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Online Courses</span>
																				<span className="fs-7 fw-semibold text-muted">Student progress</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="dashboards/marketing.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-chart-simple text-dark fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Marketing</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="dashboards/bidding.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-switch text-warning fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Bidding</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="dashboards/pos.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-abstract-42 text-danger fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">POS System</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-6 mb-3">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="dashboards/call-center.html" className="menu-link">
																			<span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
																				<i className="ki-outline ki-call text-primary fs-1"></i>
																			</span>
                                                                                <span className="d-flex flex-column">
																				<span className="fs-6 fw-bold text-gray-800">Call Center</span>
																				<span className="fs-7 fw-semibold text-muted">Campaings & conversions</span>
																			</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                </div>
                                                                {/* end:Row*/}
                                                                <div className="separator separator-dashed mx-5 my-5"></div>
                                                                {/* begin:Landing*/}
                                                                <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                                                                    <div className="d-flex flex-column me-5">
                                                                        <div className="fs-6 fw-bold text-gray-800">Landing Page Template</div>
                                                                        <div className="fs-7 fw-semibold text-muted">Onpe page landing template with pricing & others</div>
                                                                    </div>
                                                                    <a href="landing.html" className="btn btn-sm btn-primary fw-bold">Explore</a>
                                                                </div>
                                                                {/* end:Landing*/}
                                                            </div>
                                                            {/* end:Col*/}
                                                            {/* begin:Col*/}
                                                            <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                                                                {/* begin:Heading*/}
                                                                <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">More Dashboards</h4>
                                                                {/* end:Heading*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/logistics.html" className="menu-link py-2">
                                                                        <span className="menu-title">Logistics</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/website-analytics.html" className="menu-link py-2">
                                                                        <span className="menu-title">Website Analytics</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/finance-performance.html" className="menu-link py-2">
                                                                        <span className="menu-title">Finance Performance</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/store-analytics.html" className="menu-link py-2">
                                                                        <span className="menu-title">Store Analytics</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/social.html" className="menu-link py-2">
                                                                        <span className="menu-title">Social</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/delivery.html" className="menu-link py-2">
                                                                        <span className="menu-title">Delivery</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/crypto.html" className="menu-link py-2">
                                                                        <span className="menu-title">Crypto</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/school.html" className="menu-link py-2">
                                                                        <span className="menu-title">School</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                                {/* begin:Menu item*/}
                                                                <div className="menu-item p-0 m-0">
                                                                    {/* begin:Menu link*/}
                                                                    <a href="dashboards/podcast.html" className="menu-link py-2">
                                                                        <span className="menu-title">Podcast</span>
                                                                    </a>
                                                                    {/* end:Menu link*/}
                                                                </div>
                                                                {/* end:Menu item*/}
                                                            </div>
                                                            {/* end:Col*/}
                                                        </div>
                                                        {/* end:Row*/}
                                                    </div>
                                                    {/* end:Dashboards menu*/}
                                                </div>
                                                {/* end:Menu sub*/}
                                            </div>
                                            {/* end:Menu item*/}
                                            {/* begin:Menu item*/}
                                            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion me-0 me-lg-2">
                                                {/* begin:Menu link*/}
                                                <span className="menu-link">
												<span className="menu-title">Pages</span>
												<span className="menu-arrow"></span>
											</span>
                                                {/* end:Menu link*/}
                                                {/* begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                                                    {/* begin:Pages menu*/}
                                                    <div className="menu-active-bg px-4 px-lg-0">
                                                        {/* begin:Tabs nav*/}
                                                        <div className="d-flex w-100 overflow-auto">
                                                            <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                                                                {/* begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a className="nav-link py-3 py-lg-6 active text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_pages">General</a>
                                                                </li>
                                                                {/* end:Nav item*/}
                                                                {/* begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_account">Account</a>
                                                                </li>
                                                                {/* end:Nav item*/}
                                                                {/* begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_authentication">Authentication</a>
                                                                </li>
                                                                {/* end:Nav item*/}
                                                                {/* begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_utilities">Utilities</a>
                                                                </li>
                                                                {/* end:Nav item*/}
                                                                {/* begin:Nav item*/}
                                                                <li className="nav-item mx-lg-1">
                                                                    <a className="nav-link py-3 py-lg-6 text-active-primary" href="#" data-bs-toggle="tab" data-bs-target="#kt_app_header_menu_pages_widgets">Widgets</a>
                                                                </li>
                                                                {/* end:Nav item*/}
                                                            </ul>
                                                        </div>
                                                        {/* end:Tabs nav*/}
                                                        {/* begin:Tab content*/}
                                                        <div className="tab-content py-4 py-lg-8 px-lg-7">
                                                            {/* begin:Tab pane*/}
                                                            <div className="tab-pane active w-lg-1000px" id="kt_app_header_menu_pages_pages">
                                                                {/* begin:Row*/}
                                                                <div className="row">
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-8">
                                                                        {/* begin:Row*/}
                                                                        <div className="row">
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/* begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">User Profile</h4>
                                                                                {/* end:Menu heading*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="pages/user-profile/overview.html" className="menu-link">
                                                                                        <span className="menu-title">Overview</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="pages/user-profile/projects.html" className="menu-link">
                                                                                        <span className="menu-title">Projects</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="pages/user-profile/campaigns.html" className="menu-link">
                                                                                        <span className="menu-title">Campaigns</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="pages/user-profile/documents.html" className="menu-link">
                                                                                        <span className="menu-title">Documents</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="pages/user-profile/followers.html" className="menu-link">
                                                                                        <span className="menu-title">Followers</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="pages/user-profile/activity.html" className="menu-link">
                                                                                        <span className="menu-title">Activity</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/about.html" className="menu-link">
                                                                                            <span className="menu-title">About</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/team.html" className="menu-link">
                                                                                            <span className="menu-title">Our Team</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/contact.html" className="menu-link">
                                                                                            <span className="menu-title">Contact Us</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/licenses.html" className="menu-link">
                                                                                            <span className="menu-title">Licenses</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/sitemap.html" className="menu-link">
                                                                                            <span className="menu-title">Sitemap</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Careers</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/careers/list.html" className="menu-link">
                                                                                            <span className="menu-title">Careers List</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/careers/apply.html" className="menu-link">
                                                                                            <span className="menu-title">Careers Apply</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">FAQ</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/faq/classNameic.html" className="menu-link">
                                                                                            <span className="menu-title">FAQ classNameic</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/faq/extended.html" className="menu-link">
                                                                                            <span className="menu-title">FAQ Extended</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Blog</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/blog/home.html" className="menu-link">
                                                                                            <span className="menu-title">Blog Home</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/blog/post.html" className="menu-link">
                                                                                            <span className="menu-title">Blog Post</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Pricing</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/pricing/column.html" className="menu-link">
                                                                                            <span className="menu-title">Column Pricing</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/pricing/table.html" className="menu-link">
                                                                                            <span className="menu-title">Table Pricing</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-3 mb-6 mb-lg-0">
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Social</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/social/feeds.html" className="menu-link">
                                                                                            <span className="menu-title">Feeds</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/social/activity.html" className="menu-link">
                                                                                            <span className="menu-title">Activty</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/social/followers.html" className="menu-link">
                                                                                            <span className="menu-title">Followers</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="pages/social/settings.html" className="menu-link">
                                                                                            <span className="menu-title">Settings</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                        </div>
                                                                        {/* end:Row*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-4">
                                                                        <img src="assets/media/stock/600x600/img-82.jpg" className="rounded mw-100" alt="" />
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                </div>
                                                                {/* end:Row*/}
                                                            </div>
                                                            {/* end:Tab pane*/}
                                                            {/* begin:Tab pane*/}
                                                            <div className="tab-pane w-lg-600px" id="kt_app_header_menu_pages_account">
                                                                {/* begin:Row*/}
                                                                <div className="row">
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-5 mb-6 mb-lg-0">
                                                                        {/* begin:Row*/}
                                                                        <div className="row">
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-6">
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/overview.html" className="menu-link">
                                                                                        <span className="menu-title">Overview</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/settings.html" className="menu-link">
                                                                                        <span className="menu-title">Settings</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/security.html" className="menu-link">
                                                                                        <span className="menu-title">Security</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/activity.html" className="menu-link">
                                                                                        <span className="menu-title">Activity</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/billing.html" className="menu-link">
                                                                                        <span className="menu-title">Billing</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-6">
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/statements.html" className="menu-link">
                                                                                        <span className="menu-title">Statements</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/referrals.html" className="menu-link">
                                                                                        <span className="menu-title">Referrals</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/api-keys.html" className="menu-link">
                                                                                        <span className="menu-title">API Keys</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                                {/* begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/* begin:Menu link*/}
                                                                                    <a href="account/logs.html" className="menu-link">
                                                                                        <span className="menu-title">Logs</span>
                                                                                    </a>
                                                                                    {/* end:Menu link*/}
                                                                                </div>
                                                                                {/* end:Menu item*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                        </div>
                                                                        {/* end:Row*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-7">
                                                                        <img src="assets/media/stock/900x600/46.jpg" className="rounded mw-100" alt="" />
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                </div>
                                                                {/* end:Row*/}
                                                            </div>
                                                            {/* end:Tab pane*/}
                                                            {/* begin:Tab pane*/}
                                                            <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_authentication">
                                                                {/* begin:Row*/}
                                                                <div className="row">
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/* begin:Menu section*/}
                                                                        <div className="mb-6">
                                                                            {/* begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Corporate Layout</h4>
                                                                            {/* end:Menu heading*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/corporate/sign-in.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-In</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/corporate/sign-up.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-Up</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/corporate/two-factor.html" className="menu-link">
                                                                                    <span className="menu-title">Two-Factor</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/corporate/reset-password.html" className="menu-link">
                                                                                    <span className="menu-title">Reset Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/corporate/new-password.html" className="menu-link">
                                                                                    <span className="menu-title">New Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                        </div>
                                                                        {/* end:Menu section*/}
                                                                        {/* begin:Menu section*/}
                                                                        <div className="mb-0">
                                                                            {/* begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Overlay Layout</h4>
                                                                            {/* end:Menu heading*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/overlay/sign-in.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-In</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/overlay/sign-up.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-Up</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/overlay/two-factor.html" className="menu-link">
                                                                                    <span className="menu-title">Two-Factor</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/overlay/reset-password.html" className="menu-link">
                                                                                    <span className="menu-title">Reset Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/overlay/new-password.html" className="menu-link">
                                                                                    <span className="menu-title">New Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                        </div>
                                                                        {/* end:Menu section*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/* begin:Menu section*/}
                                                                        <div className="mb-6">
                                                                            {/* begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Creative Layout</h4>
                                                                            {/* end:Menu heading*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/creative/sign-in.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-in</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/creative/sign-up.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-up</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/creative/two-factor.html" className="menu-link">
                                                                                    <span className="menu-title">Two-Factor</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/creative/reset-password.html" className="menu-link">
                                                                                    <span className="menu-title">Reset Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/creative/new-password.html" className="menu-link">
                                                                                    <span className="menu-title">New Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                        </div>
                                                                        {/* end:Menu section*/}
                                                                        {/* begin:Menu section*/}
                                                                        <div className="mb-6">
                                                                            {/* begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Fancy Layout</h4>
                                                                            {/* end:Menu heading*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/fancy/sign-in.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-In</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/fancy/sign-up.html" className="menu-link">
                                                                                    <span className="menu-title">Sign-Up</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/fancy/two-factor.html" className="menu-link">
                                                                                    <span className="menu-title">Two-Factor</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/fancy/reset-password.html" className="menu-link">
                                                                                    <span className="menu-title">Reset Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/layouts/fancy/new-password.html" className="menu-link">
                                                                                    <span className="menu-title">New Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                        </div>
                                                                        {/* end:Menu section*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/* begin:Menu section*/}
                                                                        <div className="mb-0">
                                                                            {/* begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General</h4>
                                                                            {/* end:Menu heading*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/extended/multi-steps-sign-up.html" className="menu-link">
                                                                                    <span className="menu-title">Multi-Steps Sign-Up</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/general/welcome.html" className="menu-link">
                                                                                    <span className="menu-title">Welcome Message</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/general/verify-email.html" className="menu-link">
                                                                                    <span className="menu-title">Verify Email</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/general/coming-soon.html" className="menu-link">
                                                                                    <span className="menu-title">Coming Soon</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/general/password-confirmation.html" className="menu-link">
                                                                                    <span className="menu-title">Password Confirmation</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/general/account-deactivated.html" className="menu-link">
                                                                                    <span className="menu-title">Account Deactivation</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/general/error-404.html" className="menu-link">
                                                                                    <span className="menu-title">Error 404</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/general/error-500.html" className="menu-link">
                                                                                    <span className="menu-title">Error 500</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                        </div>
                                                                        {/* end:Menu section*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-3 mb-6 mb-lg-0">
                                                                        {/* begin:Menu section*/}
                                                                        <div className="mb-0">
                                                                            {/* begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Email Templates</h4>
                                                                            {/* end:Menu heading*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/email/welcome-message.html" className="menu-link">
                                                                                    <span className="menu-title">Welcome Message</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/email/reset-password.html" className="menu-link">
                                                                                    <span className="menu-title">Reset Password</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/email/subscription-confirmed.html" className="menu-link">
                                                                                    <span className="menu-title">Subscription Confirmed</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/email/card-declined.html" className="menu-link">
                                                                                    <span className="menu-title">Credit Card Declined</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/email/promo-1.html" className="menu-link">
                                                                                    <span className="menu-title">Promo 1</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/email/promo-2.html" className="menu-link">
                                                                                    <span className="menu-title">Promo 2</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                            {/* begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/* begin:Menu link*/}
                                                                                <a href="authentication/email/promo-3.html" className="menu-link">
                                                                                    <span className="menu-title">Promo 3</span>
                                                                                </a>
                                                                                {/* end:Menu link*/}
                                                                            </div>
                                                                            {/* end:Menu item*/}
                                                                        </div>
                                                                        {/* end:Menu section*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                </div>
                                                                {/* end:Row*/}
                                                            </div>
                                                            {/* end:Tab pane*/}
                                                            {/* begin:Tab pane*/}
                                                            <div className="tab-pane w-lg-1000px" id="kt_app_header_menu_pages_utilities">
                                                                {/* begin:Row*/}
                                                                <div className="row">
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-7">
                                                                        {/* begin:Row*/}
                                                                        <div className="row">
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">General Modals</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/general/invite-friends.html" className="menu-link">
                                                                                            <span className="menu-title">Invite Friends</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/general/view-users.html" className="menu-link">
                                                                                            <span className="menu-title">View Users</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/general/select-users.html" className="menu-link">
                                                                                            <span className="menu-title">Select Users</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/general/upgrade-plan.html" className="menu-link">
                                                                                            <span className="menu-title">Upgrade Plan</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/general/share-earn.html" className="menu-link">
                                                                                            <span className="menu-title">Share & Earn</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/forms/new-target.html" className="menu-link">
                                                                                            <span className="menu-title">New Target</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/forms/new-card.html" className="menu-link">
                                                                                            <span className="menu-title">New Card</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/forms/new-address.html" className="menu-link">
                                                                                            <span className="menu-title">New Address</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/forms/create-api-key.html" className="menu-link">
                                                                                            <span className="menu-title">Create API Key</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/forms/bidding.html" className="menu-link">
                                                                                            <span className="menu-title">Bidding</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-6">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Advanced Modals</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/create-app.html" className="menu-link">
                                                                                            <span className="menu-title">Create App</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/create-campaign.html" className="menu-link">
                                                                                            <span className="menu-title">Create Campaign</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/create-account.html" className="menu-link">
                                                                                            <span className="menu-title">Create Business Acc</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/create-project.html" className="menu-link">
                                                                                            <span className="menu-title">Create Project</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                                                                            <span className="menu-title">Top Up Wallet</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/offer-a-deal.html" className="menu-link">
                                                                                            <span className="menu-title">Offer a Deal</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/two-factor-authentication.html" className="menu-link">
                                                                                            <span className="menu-title">Two Factor Auth</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Search</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/search/horizontal.html" className="menu-link">
                                                                                            <span className="menu-title">Horizontal</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/search/vertical.html" className="menu-link">
                                                                                            <span className="menu-title">Vertical</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/search/users.html" className="menu-link">
                                                                                            <span className="menu-title">Users</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/search/select-location.html" className="menu-link">
                                                                                            <span className="menu-title">Select Location</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                            {/* begin:Col*/}
                                                                            <div className="col-lg-4 mb-6 mb-lg-0">
                                                                                {/* begin:Menu section*/}
                                                                                <div className="mb-0">
                                                                                    {/* begin:Menu heading*/}
                                                                                    <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">Wizards</h4>
                                                                                    {/* end:Menu heading*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/horizontal.html" className="menu-link">
                                                                                            <span className="menu-title">Horizontal</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/vertical.html" className="menu-link">
                                                                                            <span className="menu-title">Vertical</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/two-factor-authentication.html" className="menu-link">
                                                                                            <span className="menu-title">Two Factor Auth</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/create-app.html" className="menu-link">
                                                                                            <span className="menu-title">Create App</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/create-campaign.html" className="menu-link">
                                                                                            <span className="menu-title">Create Campaign</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/create-account.html" className="menu-link">
                                                                                            <span className="menu-title">Create Account</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/create-project.html" className="menu-link">
                                                                                            <span className="menu-title">Create Project</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/modals/wizards/top-up-wallet.html" className="menu-link">
                                                                                            <span className="menu-title">Top Up Wallet</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                    {/* begin:Menu item*/}
                                                                                    <div className="menu-item p-0 m-0">
                                                                                        {/* begin:Menu link*/}
                                                                                        <a href="utilities/wizards/offer-a-deal.html" className="menu-link">
                                                                                            <span className="menu-title">Offer a Deal</span>
                                                                                        </a>
                                                                                        {/* end:Menu link*/}
                                                                                    </div>
                                                                                    {/* end:Menu item*/}
                                                                                </div>
                                                                                {/* end:Menu section*/}
                                                                            </div>
                                                                            {/* end:Col*/}
                                                                        </div>
                                                                        {/* end:Row*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-5 pe-lg-5">
                                                                        <img src="assets/media/stock/600x600/img-84.jpg" className="rounded mw-100" alt="" />
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                </div>
                                                                {/* end:Row*/}
                                                            </div>
                                                            {/* end:Tab pane*/}
                                                            {/* begin:Tab pane*/}
                                                            <div className="tab-pane w-lg-500px" id="kt_app_header_menu_pages_widgets">
                                                                {/* begin:Row*/}
                                                                <div className="row">
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-4 mb-6 mb-lg-0">
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="widgets/lists.html" className="menu-link">
                                                                                <span className="menu-title">Lists</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="widgets/statistics.html" className="menu-link">
                                                                                <span className="menu-title">Statistics</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="widgets/charts.html" className="menu-link">
                                                                                <span className="menu-title">Charts</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="widgets/mixed.html" className="menu-link">
                                                                                <span className="menu-title">Mixed</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="widgets/tables.html" className="menu-link">
                                                                                <span className="menu-title">Tables</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                        {/* begin:Menu item*/}
                                                                        <div className="menu-item p-0 m-0">
                                                                            {/* begin:Menu link*/}
                                                                            <a href="widgets/feeds.html" className="menu-link">
                                                                                <span className="menu-title">Feeds</span>
                                                                            </a>
                                                                            {/* end:Menu link*/}
                                                                        </div>
                                                                        {/* end:Menu item*/}
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                    {/* begin:Col*/}
                                                                    <div className="col-lg-8">
                                                                        <img src="assets/media/stock/900x600/44.jpg" className="rounded mw-100" alt="" />
                                                                    </div>
                                                                    {/* end:Col*/}
                                                                </div>
                                                                {/* end:Row*/}
                                                            </div>
                                                            {/* end:Tab pane*/}
                                                        </div>
                                                        {/* end:Tab content*/}
                                                    </div>
                                                    {/* end:Pages menu*/}
                                                </div>
                                                {/* end:Menu sub*/}
                                            </div>
                                            {/* end:Menu item*/}
                                            {/* begin:Menu item*/}
                                            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                                                {/* begin:Menu link*/}
                                                <span className="menu-link">
												<span className="menu-title">Apps</span>
												<span className="menu-arrow"></span>
											</span>
                                                {/* end:Menu link*/}
                                                {/* begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-rocket fs-2"></i>
														</span>
														<span className="menu-title">Projects</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">My Projects</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/project.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">View Project</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/targets.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Targets</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/budget.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Budget</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/users.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Users</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/files.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Files</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/activity.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Activity</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/projects/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Settings</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-handcart fs-2"></i>
														</span>
														<span className="menu-title">eCommerce</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Catalog</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/catalog/products.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Products</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/catalog/categories.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Categories</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/catalog/add-product.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Add Product</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/catalog/edit-product.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Edit Product</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/catalog/add-category.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Add Category</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/catalog/edit-category.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Edit Category</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Sales</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-accordion">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/sales/listing.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Orders Listing</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/sales/details.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Order Details</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/sales/add-order.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Add Order</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/sales/edit-order.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Edit Order</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Customers</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-accordion">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/customers/listing.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Customers Listing</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/customers/details.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Customers Details</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion menu-sub-indention">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Reports</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-accordion">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/reports/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Products Viewed</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/reports/sales.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Sales</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/reports/returns.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Returns</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/reports/customer-orders.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Customer Orders</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/ecommerce/reports/shipping.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Shipping</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/ecommerce/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Settings</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-chart fs-2"></i>
														</span>
														<span className="menu-title">Support Center</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/support-center/overview.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Overview</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tickets</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/support-center/tickets/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Ticket List</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/support-center/tickets/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Ticket View</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Tutorials</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/support-center/tutorials/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Tutorials List</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/support-center/tutorials/post.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Tutorials Post</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/support-center/faq.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">FAQ</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/support-center/licenses.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Licenses</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/support-center/contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Contact Us</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-shield-tick fs-2"></i>
														</span>
														<span className="menu-title">User Management</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Users</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/user-management/users/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Users List</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/user-management/users/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">View User</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Roles</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/user-management/roles/list.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Roles List</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/user-management/roles/view.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">View Roles</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/user-management/permissions.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Permissions</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-phone fs-2"></i>
														</span>
														<span className="menu-title">Contacts</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/contacts/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Getting Started</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/contacts/add-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Add Contact</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/contacts/edit-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Edit Contact</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/contacts/view-contact.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">View Contact</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-basket fs-2"></i>
														</span>
														<span className="menu-title">Subscriptions</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/subscriptions/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Getting Started</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/subscriptions/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Subscription List</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/subscriptions/add.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Add Subscription</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/subscriptions/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">View Subscription</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-briefcase fs-2"></i>
														</span>
														<span className="menu-title">Customers</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/customers/getting-started.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Getting Started</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/customers/list.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Customer Listing</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/customers/view.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Customer Details</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-credit-cart fs-2"></i>
														</span>
														<span className="menu-title">Invoice Management</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                                {/* begin:Menu link*/}
                                                                <span className="menu-link">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
																<span className="menu-title">Profile</span>
																<span className="menu-arrow"></span>
															</span>
                                                                {/* end:Menu link*/}
                                                                {/* begin:Menu sub*/}
                                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/invoices/view/invoice-1.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Invoice 1</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/invoices/view/invoice-2.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Invoice 2</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                    {/* begin:Menu item*/}
                                                                    <div className="menu-item">
                                                                        {/* begin:Menu link*/}
                                                                        <a className="menu-link" href="apps/invoices/view/invoice-3.html">
																		<span className="menu-bullet">
																			<span className="bullet bullet-dot"></span>
																		</span>
                                                                            <span className="menu-title">Invoice 3</span>
                                                                        </a>
                                                                        {/* end:Menu link*/}
                                                                    </div>
                                                                    {/* end:Menu item*/}
                                                                </div>
                                                                {/* end:Menu sub*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/invoices/create.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Create Invoice</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-file-added fs-2"></i>
														</span>
														<span className="menu-title">File Manager</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/file-manager/folders.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Folders</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/file-manager/files.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Files</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/file-manager/blank.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Blank Directory</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/file-manager/settings.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Settings</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-sms fs-2"></i>
														</span>
														<span className="menu-title">Inbox</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/inbox/listing.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Messages</span>
                                                                    <span className="menu-badge">
																	<span className="badge badge-light-success">3</span>
																</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/inbox/compose.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Compose</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/inbox/reply.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">View & Reply</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-placement="right-start" className="menu-item menu-lg-down-accordion">
                                                        {/* begin:Menu link*/}
                                                        <span className="menu-link">
														<span className="menu-icon">
															<i className="ki-outline ki-message-text-2 fs-2"></i>
														</span>
														<span className="menu-title">Chat</span>
														<span className="menu-arrow"></span>
													</span>
                                                        {/* end:Menu link*/}
                                                        {/* begin:Menu sub*/}
                                                        <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/chat/private.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Private Chat</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/chat/group.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Group Chat</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                            {/* begin:Menu item*/}
                                                            <div className="menu-item">
                                                                {/* begin:Menu link*/}
                                                                <a className="menu-link" href="apps/chat/drawer.html">
																<span className="menu-bullet">
																	<span className="bullet bullet-dot"></span>
																</span>
                                                                    <span className="menu-title">Drawer Chat</span>
                                                                </a>
                                                                {/* end:Menu link*/}
                                                            </div>
                                                            {/* end:Menu item*/}
                                                        </div>
                                                        {/* end:Menu sub*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/* begin:Menu link*/}
                                                        <a className="menu-link" href="apps/calendar.html">
														<span className="menu-icon">
															<i className="ki-outline ki-calendar-8 fs-2"></i>
														</span>
                                                            <span className="menu-title">Calendar</span>
                                                        </a>
                                                        {/* end:Menu link*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                </div>
                                                {/* end:Menu sub*/}
                                            </div>
                                            {/* end:Menu item*/}
                                            {/* begin:Menu item*/}
                                            <div data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-start" className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2">
                                                {/* begin:Menu link*/}
                                                <span className="menu-link">
												<span className="menu-title">Help</span>
												<span className="menu-arrow"></span>
											</span>
                                                {/* end:Menu link*/}
                                                {/* begin:Menu sub*/}
                                                <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                                                    {/* begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/* begin:Menu link*/}
                                                        <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/base/utilities" target="_blank" title="Check out over 200 in-house components, plugins and ready for use solutions" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
														<span className="menu-icon">
															<i className="ki-outline ki-rocket fs-2"></i>
														</span>
                                                            <span className="menu-title">Components</span>
                                                        </a>
                                                        {/* end:Menu link*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/* begin:Menu link*/}
                                                        <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs" target="_blank" title="Check out the complete documentation" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
														<span className="menu-icon">
															<i className="ki-outline ki-abstract-26 fs-2"></i>
														</span>
                                                            <span className="menu-title">Documentation</span>
                                                        </a>
                                                        {/* end:Menu link*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/* begin:Menu link*/}
                                                        <a className="menu-link" href="https://preview.keenthemes.com/metronic8/demo31/layout-builder.html" title="Build your layout and export HTML for server side integration" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right">
														<span className="menu-icon">
															<i className="ki-outline ki-switch fs-2"></i>
														</span>
                                                            <span className="menu-title">Layout Builder</span>
                                                        </a>
                                                        {/* end:Menu link*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                    {/* begin:Menu item*/}
                                                    <div className="menu-item">
                                                        {/* begin:Menu link*/}
                                                        <a className="menu-link" href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog" target="_blank">
														<span className="menu-icon">
															<i className="ki-outline ki-code fs-2"></i>
														</span>
                                                            <span className="menu-title">Changelog v8.1.8</span>
                                                        </a>
                                                        {/* end:Menu link*/}
                                                    </div>
                                                    {/* end:Menu item*/}
                                                </div>
                                                {/* end:Menu sub*/}
                                            </div>
                                            {/* end:Menu item*/}
                                        </div>
                                        {/* end::Menu*/}
                                    </div>
                                    {/* end::Menu holder*/}
                                </div>
                                {/* end::Menu wrapper*/}
                                {/* begin::Navbar*/}
                                <div className="app-navbar flex-shrink-0">
                                    {/* begin::Search*/}
                                    <div className="app-navbar-item align-items-stretch me-0 me-lg-3">
                                        {/* begin::Search*/}
                                        <div id="kt_header_search" className="header-search d-flex align-items-center w-100 w-lg-250px" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-search-responsive="lg" data-kt-menu-trigger="auto" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                                            {/* begin::Tablet and mobile search toggle*/}
                                            <div data-kt-search-element="toggle" className="search-toggle-mobile d-flex d-lg-none align-items-center">
                                                <div className="d-flex btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px">
                                                    <i className="ki-outline ki-magnifier fs-1"></i>
                                                </div>
                                            </div>
                                            {/* end::Tablet and mobile search toggle*/}
                                            {/* begin::Form(use d-none d-lg-block classNamees for responsive search)*/}
                                            <form data-kt-search-element="form" className="d-none d-lg-block w-100 position-relative mb-5 mb-lg-0" autoComplete="off">
                                                {/* begin::Hidden input(Added to disable form autocomplete)*/}
                                                <input type="hidden" />
                                                {/* end::Hidden input*/}
                                                {/* begin::Icon*/}
                                                <i className="ki-outline ki-magnifier search-icon fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-5"></i>
                                                {/* end::Icon*/}
                                                {/* begin::Input*/}
                                                <input type="text" className="search-input form-control ps-13" name="search" value="" placeholder="Search..." data-kt-search-element="input" />
                                                {/* end::Input*/}
                                                {/* begin::Spinner*/}
                                                <span className="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
												<span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
											</span>
                                                {/* end::Spinner*/}
                                                {/* begin::Reset*/}
                                                <span className="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4" data-kt-search-element="clear">
												<i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
											</span>
                                                {/* end::Reset*/}
                                            </form>
                                            {/* end::Form*/}
                                            {/* begin::Menu*/}
                                            <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown py-7 px-7 overflow-hidden w-300px w-md-350px">
                                                {/* begin::Wrapper*/}
                                                <div data-kt-search-element="wrapper">
                                                    {/* begin::Recently viewed*/}
                                                    <div data-kt-search-element="results" className="d-none">
                                                        {/* begin::Items*/}
                                                        <div className="scroll-y mh-200px mh-lg-350px">
                                                            {/* begin::Category title*/}
                                                            <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
                                                            {/* end::Category title*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="assets/media/avatars/300-6.jpg" alt="" />
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Karina Clark</span>
                                                                    <span className="fs-7 fw-semibold text-muted">Marketing Manager</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="assets/media/avatars/300-2.jpg" alt="" />
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Olivia Bold</span>
                                                                    <span className="fs-7 fw-semibold text-muted">Software Engineer</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="assets/media/avatars/300-9.jpg" alt="" />
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Ana Clark</span>
                                                                    <span className="fs-7 fw-semibold text-muted">UI/UX Designer</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="assets/media/avatars/300-14.jpg" alt="" />
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Nick Pitola</span>
                                                                    <span className="fs-7 fw-semibold text-muted">Art Director</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
                                                                    <img src="assets/media/avatars/300-11.jpg" alt="" />
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Edward Kulnic</span>
                                                                    <span className="fs-7 fw-semibold text-muted">System Administrator</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Category title*/}
                                                            <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                                                            {/* end::Category title*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Company Rbranding</span>
                                                                    <span className="fs-7 fw-semibold text-muted">UI Design</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Company Re-branding</span>
                                                                    <span className="fs-7 fw-semibold text-muted">Web Development</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Business Analytics App</span>
                                                                    <span className="fs-7 fw-semibold text-muted">Administration</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">EcoLeaf App Launch</span>
                                                                    <span className="fs-7 fw-semibold text-muted">Marketing</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column justify-content-start fw-semibold">
                                                                    <span className="fs-6 fw-semibold">Tower Group Website</span>
                                                                    <span className="fs-7 fw-semibold text-muted">Google Adwords</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Category title*/}
                                                            <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                                                            {/* end::Category title*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-notepad fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-semibold">Si-Fi Project by AU Themes</span>
                                                                    <span className="fs-7 fw-semibold text-muted">#45670</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-frame fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-semibold">Shopix Mobile App Planning</span>
                                                                    <span className="fs-7 fw-semibold text-muted">#45690</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-message-text-2 fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-semibold">Finance Monitoring SAAS Discussion</span>
                                                                    <span className="fs-7 fw-semibold text-muted">#21090</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <a href="#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-profile-circle fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <span className="fs-6 fw-semibold">Dashboard Analitics Launch</span>
                                                                    <span className="fs-7 fw-semibold text-muted">#34560</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </a>
                                                            {/* end::Item*/}
                                                        </div>
                                                        {/* end::Items*/}
                                                    </div>
                                                    {/* end::Recently viewed*/}
                                                    {/* begin::Recently viewed*/}
                                                    <div className="" data-kt-search-element="main">
                                                        {/* begin::Heading*/}
                                                        <div className="d-flex flex-stack fw-semibold mb-4">
                                                            {/* begin::Label*/}
                                                            <span className="text-muted fs-6 me-2">Recently Searched:</span>
                                                            {/* end::Label*/}
                                                            {/* begin::Toolbar*/}
                                                            <div className="d-flex" data-kt-search-element="toolbar">
                                                                {/* begin::Preferences toggle*/}
                                                                <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle=" title="Show search preferences">
                                                                    <i className="ki-outline ki-setting-2 fs-2"></i>
                                                                </div>
                                                                {/* end::Preferences toggle*/}
                                                                {/* begin::Advanced search toggle*/}
                                                                <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1" data-bs-toggle="tooltip" title="Show more search options">
                                                                    <i className="ki-outline ki-down fs-2"></i>
                                                                </div>
                                                                {/* end::Advanced search toggle*/}
                                                            </div>
                                                            {/* end::Toolbar*/}
                                                        </div>
                                                        {/* end::Heading*/}
                                                        {/* begin::Items*/}
                                                        <div className="scroll-y mh-200px mh-lg-325px">
                                                            {/* begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-laptop fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">BoomApp by Keenthemes</a>
                                                                    <span className="fs-7 text-muted fw-semibold">#45789</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart-simple fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Kept API Project Meeting</a>
                                                                    <span className="fs-7 text-muted fw-semibold">#84050</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"KPI Monitoring App Launch</a>
                                                                    <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart-line-down fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Project Reference FAQ</a>
                                                                    <span className="fs-7 text-muted fw-semibold">#67945</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-sms fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"FitPro App Development</a>
                                                                    <span className="fs-7 text-muted fw-semibold">#84250</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-bank fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">Shopix Mobile App</a>
                                                                    <span className="fs-7 text-muted fw-semibold">#45690</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <div className="d-flex align-items-center mb-5">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-40px me-4">
																<span className="symbol-label bg-light">
																	<i className="ki-outline ki-chart-line-down fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="d-flex flex-column">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-semibold">"Landing UI Design" Launch</a>
                                                                    <span className="fs-7 text-muted fw-semibold">#24005</span>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Item*/}
                                                        </div>
                                                        {/* end::Items*/}
                                                    </div>
                                                    {/* end::Recently viewed*/}
                                                    {/* begin::Empty*/}
                                                    <div data-kt-search-element="empty" className="text-center d-none">
                                                        {/* begin::Icon*/}
                                                        <div className="pt-10 pb-10">
                                                            <i className="ki-outline ki-search-list fs-4x opacity-50"></i>
                                                        </div>
                                                        {/* end::Icon*/}
                                                        {/* begin::Message*/}
                                                        <div className="pb-15 fw-semibold">
                                                            <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                                                            <div className="text-muted fs-7">Please try again with a different query</div>
                                                        </div>
                                                        {/* end::Message*/}
                                                    </div>
                                                    {/* end::Empty*/}
                                                </div>
                                                {/* end::Wrapper*/}
                                                {/* begin::Preferences*/}
                                                <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                                                    {/* begin::Heading*/}
                                                    <h3 className="fw-semibold text-dark mb-7">Advanced Search</h3>
                                                    {/* end::Heading*/}
                                                    {/* begin::Input group*/}
                                                    <div className="mb-5">
                                                        <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="mb-5">
                                                        {/* begin::Radio group*/}
                                                        <div className="nav-group nav-group-fluid">
                                                            {/* begin::Option*/}
                                                            <label>
                                                                <input type="radio" className="btn-check" name="type" value="has" defaultChecked={true} />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                                                            </label>
                                                            {/* end::Option*/}
                                                            {/* begin::Option*/}
                                                            <label>
                                                                <input type="radio" className="btn-check" name="type" value="users" />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                                                            </label>
                                                            {/* end::Option*/}
                                                            {/* begin::Option*/}
                                                            <label>
                                                                <input type="radio" className="btn-check" name="type" value="orders" />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                                                            </label>
                                                            {/* end::Option*/}
                                                            {/* begin::Option*/}
                                                            <label>
                                                                <input type="radio" className="btn-check" name="type" value="projects" />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                                                            </label>
                                                            {/* end::Option*/}
                                                        </div>
                                                        {/* end::Radio group*/}
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="mb-5">
                                                        <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" value="" />
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="mb-5">
                                                        <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" value="" />
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="mb-5">
                                                        {/* begin::Radio group*/}
                                                        <div className="nav-group nav-group-fluid">
                                                            {/* begin::Option*/}
                                                            <label>
                                                                <input type="radio" className="btn-check" name="attachment" value="has" defaultChecked={true} />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                                                            </label>
                                                            {/* end::Option*/}
                                                            {/* begin::Option*/}
                                                            <label>
                                                                <input type="radio" className="btn-check" name="attachment" value="any" />
                                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                                                            </label>
                                                            {/* end::Option*/}
                                                        </div>
                                                        {/* end::Radio group*/}
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="mb-5">
                                                        <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                                                            <option value="next">Within the next</option>
                                                            <option value="last">Within the last</option>
                                                            <option value="between">Between</option>
                                                            <option value="on">On</option>
                                                        </select>
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="row mb-8">
                                                        {/* begin::Col*/}
                                                        <div className="col-6">
                                                            <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" value="" />
                                                        </div>
                                                        {/* end::Col*/}
                                                        {/* begin::Col*/}
                                                        <div className="col-6">
                                                            <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                                                                <option value="days">Days</option>
                                                                <option value="weeks">Weeks</option>
                                                                <option value="months">Months</option>
                                                                <option value="years">Years</option>
                                                            </select>
                                                        </div>
                                                        {/* end::Col*/}
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Actions*/}
                                                    <div className="d-flex justify-content-end">
                                                        <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
                                                        <a href="pages/search/horizontal.html" className="btn btn-sm fw-bold btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                                                    </div>
                                                    {/* end::Actions*/}
                                                </form>
                                                {/* end::Preferences*/}
                                                {/* begin::Preferences*/}
                                                <form data-kt-search-element="preferences" className="pt-1 d-none">
                                                    {/* begin::Heading*/}
                                                    <h3 className="fw-semibold text-dark mb-7">Search Preferences</h3>
                                                    {/* end::Heading*/}
                                                    {/* begin::Input group*/}
                                                    <div className="pb-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Projects</span>
                                                            <input className="form-check-input" type="checkbox" value="1" defaultChecked={true} />
                                                        </label>
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Targets</span>
                                                            <input className="form-check-input" type="checkbox" value="1" defaultChecked={true} />
                                                        </label>
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Affiliate Programs</span>
                                                            <input className="form-check-input" type="checkbox" value="1" />
                                                        </label>
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Referrals</span>
                                                            <input className="form-check-input" type="checkbox" value="1" defaultChecked={true} />
                                                        </label>
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Input group*/}
                                                    <div className="py-4 border-bottom">
                                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                                            <span className="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2">Users</span>
                                                            <input className="form-check-input" type="checkbox" value="1" />
                                                        </label>
                                                    </div>
                                                    {/* end::Input group*/}
                                                    {/* begin::Actions*/}
                                                    <div className="d-flex justify-content-end pt-7">
                                                        <button type="reset" className="btn btn-sm btn-light fw-bold btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                                                        <button type="submit" className="btn btn-sm fw-bold btn-primary">Save Changes</button>
                                                    </div>
                                                    {/* end::Actions*/}
                                                </form>
                                                {/* end::Preferences*/}
                                            </div>
                                            {/* end::Menu*/}
                                        </div>
                                        {/* end::Search*/}
                                    </div>
                                    {/* end::Search*/}
                                    {/* begin::Quick Links*/}
                                    <div className="app-navbar-item ms-3 ms-md-6">
                                        {/* begin::Menu- wrapper*/}
                                        <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                            <i className="ki-outline ki-calendar fs-1"></i>
                                        </div>
                                        {/* begin::Menu*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">
                                            {/* begin::Heading*/}
                                            <div className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10" style={{backgroundImage: 'assets/media/misc/menu-header-bg.jpg'}}>
                                                {/* begin::Title*/}
                                                <h3 className="text-white fw-semibold mb-3">Quick Links</h3>
                                                {/* end::Title*/}
                                                {/* begin::Status*/}
                                                <span className="badge bg-primary text-inverse-primary py-2 px-3">25 pending tasks</span>
                                                {/* end::Status*/}
                                            </div>
                                            {/* end::Heading*/}
                                            {/* begin:Nav*/}
                                            <div className="row g-0">
                                                {/* begin:Item*/}
                                                <div className="col-6">
                                                    <a href="apps/projects/budget.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom">
                                                        <i className="ki-outline ki-dollar fs-3x text-primary mb-2"></i>
                                                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Accounting</span>
                                                        <span className="fs-7 text-gray-400">eCommerce</span>
                                                    </a>
                                                </div>
                                                {/* end:Item*/}
                                                {/* begin:Item*/}
                                                <div className="col-6">
                                                    <a href="apps/projects/settings.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom">
                                                        <i className="ki-outline ki-sms fs-3x text-primary mb-2"></i>
                                                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Administration</span>
                                                        <span className="fs-7 text-gray-400">Console</span>
                                                    </a>
                                                </div>
                                                {/* end:Item*/}
                                                {/* begin:Item*/}
                                                <div className="col-6">
                                                    <a href="apps/projects/list.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end">
                                                        <i className="ki-outline ki-abstract-41 fs-3x text-primary mb-2"></i>
                                                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Projects</span>
                                                        <span className="fs-7 text-gray-400">Pending Tasks</span>
                                                    </a>
                                                </div>
                                                {/* end:Item*/}
                                                {/* begin:Item*/}
                                                <div className="col-6">
                                                    <a href="apps/projects/users.html" className="d-flex flex-column flex-center h-100 p-6 bg-hover-light">
                                                        <i className="ki-outline ki-briefcase fs-3x text-primary mb-2"></i>
                                                        <span className="fs-5 fw-semibold text-gray-800 mb-0">Customers</span>
                                                        <span className="fs-7 text-gray-400">Latest cases</span>
                                                    </a>
                                                </div>
                                                {/* end:Item*/}
                                            </div>
                                            {/* end:Nav*/}
                                            {/* begin::View more*/}
                                            <div className="py-2 text-center border-top">
                                                <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                    <i className="ki-outline ki-arrow-right fs-5"></i></a>
                                            </div>
                                            {/* end::View more*/}
                                        </div>
                                        {/* end::Menu*/}
                                        {/* end::Menu wrapper*/}
                                    </div>
                                    {/* end::Quick Links*/}
                                    {/* begin::My apps links*/}
                                    <div className="app-navbar-item ms-3 ms-md-6">
                                        {/* begin::Menu wrapper*/}
                                        <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                            <i className="ki-outline ki-abstract-26 fs-1"></i>
                                        </div>
                                        {/* begin::My apps*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column w-100 w-sm-350px" data-kt-menu="true">
                                            {/* begin::Card*/}
                                            <div className="card">
                                                {/* begin::Card header*/}
                                                <div className="card-header">
                                                    {/* begin::Card title*/}
                                                    <div className="card-title">My Apps</div>
                                                    {/* end::Card title*/}
                                                    {/* begin::Card toolbar*/}
                                                    <div className="card-toolbar">
                                                        {/* begin::Menu*/}
                                                        <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n3" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="bottom-end">
                                                            <i className="ki-outline ki-setting-3 fs-2"></i>
                                                        </button>
                                                        {/* begin::Menu 3*/}
                                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                                            {/* begin::Heading*/}
                                                            <div className="menu-item px-3">
                                                                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Payments</div>
                                                            </div>
                                                            {/* end::Heading*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Create Invoice</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link flex-stack px-3">Create Payment
                                                                    <span className="ms-2" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
																<i className="ki-outline ki-information fs-6"></i>
															</span></a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3">
                                                                <a href="#" className="menu-link px-3">Generate Bill</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-end">
                                                                <a href="#" className="menu-link px-3">
                                                                    <span className="menu-title">Subscription</span>
                                                                    <span className="menu-arrow"></span>
                                                                </a>
                                                                {/* begin::Menu sub*/}
                                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                    {/* begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <a href="#" className="menu-link px-3">Plans</a>
                                                                    </div>
                                                                    {/* end::Menu item*/}
                                                                    {/* begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <a href="#" className="menu-link px-3">Billing</a>
                                                                    </div>
                                                                    {/* end::Menu item*/}
                                                                    {/* begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <a href="#" className="menu-link px-3">Statements</a>
                                                                    </div>
                                                                    {/* end::Menu item*/}
                                                                    {/* begin::Menu separator*/}
                                                                    <div className="separator my-2"></div>
                                                                    {/* end::Menu separator*/}
                                                                    {/* begin::Menu item*/}
                                                                    <div className="menu-item px-3">
                                                                        <div className="menu-content px-3">
                                                                            {/* begin::Switch*/}
                                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                                {/* begin::Input*/}
                                                                                <input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked={true} name="notifications" />
                                                                                {/* end::Input*/}
                                                                                {/* end::Label*/}
                                                                                <span className="form-check-label text-muted fs-6">Recuring</span>
                                                                                {/* end::Label*/}
                                                                            </label>
                                                                            {/* end::Switch*/}
                                                                        </div>
                                                                    </div>
                                                                    {/* end::Menu item*/}
                                                                </div>
                                                                {/* end::Menu sub*/}
                                                            </div>
                                                            {/* end::Menu item*/}
                                                            {/* begin::Menu item*/}
                                                            <div className="menu-item px-3 my-1">
                                                                <a href="#" className="menu-link px-3">Settings</a>
                                                            </div>
                                                            {/* end::Menu item*/}
                                                        </div>
                                                        {/* end::Menu 3*/}
                                                        {/* end::Menu*/}
                                                    </div>
                                                    {/* end::Card toolbar*/}
                                                </div>
                                                {/* end::Card header*/}
                                                {/* begin::Card body*/}
                                                <div className="card-body py-5">
                                                    {/* begin::Scroll*/}
                                                    <div className="mh-450px scroll-y me-n5 pe-5">
                                                        {/* begin::Row*/}
                                                        <div className="row g-2">
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/amazon.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">AWS</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/angular-icon-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">AngularJS</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/atica.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Atica</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/beats-electronics.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Music</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/codeigniter.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Codeigniter</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/bootstrap-4.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Bootstrap</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/google-tag-manager.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">GTM</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/disqus.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Disqus</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/dribbble-icon-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Dribble</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/google-play-store.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Play Store</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/google-podcasts.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Podcasts</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/figma-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Figma</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/github.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Github</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/gitlab.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Gitlab</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Instagram</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                            {/* begin::Col*/}
                                                            <div className="col-4">
                                                                <a href="#" className="d-flex flex-column flex-center text-center text-gray-800 text-hover-primary bg-hover-light rounded py-4 px-3 mb-3">
                                                                    <img src="assets/media/svg/brand-logos/pinterest-p.svg" className="w-25px h-25px mb-2" alt="" />
                                                                    <span className="fw-semibold">Pinterest</span>
                                                                </a>
                                                            </div>
                                                            {/* end::Col*/}
                                                        </div>
                                                        {/* end::Row*/}
                                                    </div>
                                                    {/* end::Scroll*/}
                                                </div>
                                                {/* end::Card body*/}
                                            </div>
                                            {/* end::Card*/}
                                        </div>
                                        {/* end::My apps*/}
                                        {/* end::Menu wrapper*/}
                                    </div>
                                    {/* end::My apps links*/}
                                    {/* begin::Notifications*/}
                                    <div className="app-navbar-item ms-3 ms-md-6">
                                        {/* begin::Menu- wrapper*/}
                                        <div className="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-35px h-md-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                            <i className="ki-outline ki-notification-on fs-1"></i>
                                            <div className="badge badge-circle badge-danger position-absolute translate-middle bottom-0 ms-10 mt-10 h-15px w-15px fs-9">5</div>
                                        </div>
                                        {/* begin::Menu*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true" id="kt_menu_notifications">
                                            {/* begin::Heading*/}
                                            <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{backgroundImage:'assets/media/misc/menu-header-bg.jpg'}}>
                                                {/* begin::Title*/}
                                                <h3 className="text-white fw-semibold px-9 mt-10 mb-6">Notifications
                                                    <span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
                                                {/* end::Title*/}
                                                {/* begin::Tabs*/}
                                                <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-semibold px-9">
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                                    </li>
                                                </ul>
                                                {/* end::Tabs*/}
                                            </div>
                                            {/* end::Heading*/}
                                            {/* begin::Tab content*/}
                                            <div className="tab-content">
                                                {/* begin::Tab panel*/}
                                                <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                                                    {/* begin::Items*/}
                                                    <div className="scroll-y mh-325px my-5 px-8">
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-outline ki-abstract-28 fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="mb-0 me-2">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Alice</a>
                                                                    <div className="text-gray-400 fs-7">Phase 1 development</div>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">1 hr</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-danger">
																	<i className="ki-outline ki-information fs-2 text-danger"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="mb-0 me-2">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">HR Confidential</a>
                                                                    <div className="text-gray-400 fs-7">Confidential staff documents</div>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">2 hrs</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-outline ki-briefcase fs-2 text-warning"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="mb-0 me-2">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Company HR</a>
                                                                    <div className="text-gray-400 fs-7">Corporeate staff profiles</div>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">5 hrs</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-success">
																	<i className="ki-outline ki-abstract-12 fs-2 text-success"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="mb-0 me-2">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Redux</a>
                                                                    <div className="text-gray-400 fs-7">New frontend admin theme</div>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">2 days</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-primary">
																	<i className="ki-outline ki-colors-square fs-2 text-primary"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="mb-0 me-2">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Breafing</a>
                                                                    <div className="text-gray-400 fs-7">Product launch status update</div>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">21 Jan</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-info">
																	<i className="ki-outline ki-picture fs-2 text-info"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="mb-0 me-2">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Banner Assets</a>
                                                                    <div className="text-gray-400 fs-7">Collection of banner images</div>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">21 Jan</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center">
                                                                {/* begin::Symbol*/}
                                                                <div className="symbol symbol-35px me-4">
																<span className="symbol-label bg-light-warning">
																	<i className="ki-outline ki-color-swatch fs-2 text-warning"></i>
																</span>
                                                                </div>
                                                                {/* end::Symbol*/}
                                                                {/* begin::Title*/}
                                                                <div className="mb-0 me-2">
                                                                    <a href="#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Icon Assets</a>
                                                                    <div className="text-gray-400 fs-7">Collection of SVG icons</div>
                                                                </div>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">20 March</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                    </div>
                                                    {/* end::Items*/}
                                                    {/* begin::View more*/}
                                                    <div className="py-3 text-center border-top">
                                                        <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                            <i className="ki-outline ki-arrow-right fs-5"></i></a>
                                                    </div>
                                                    {/* end::View more*/}
                                                </div>
                                                {/* end::Tab panel*/}
                                                {/* begin::Tab panel*/}
                                                <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                                                    {/* begin::Wrapper*/}
                                                    <div className="d-flex flex-column px-9">
                                                        {/* begin::Section*/}
                                                        <div className="pt-10 pb-0">
                                                            {/* begin::Title*/}
                                                            <h3 className="text-dark text-center fw-bold">Get Pro Access</h3>
                                                            {/* end::Title*/}
                                                            {/* begin::Text*/}
                                                            <div className="text-center text-gray-600 fw-semibold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
                                                            {/* end::Text*/}
                                                            {/* begin::Action*/}
                                                            <div className="text-center mt-5 mb-9">
                                                                <a href="#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                                            </div>
                                                            {/* end::Action*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Illustration*/}
                                                        <div className="text-center px-4">
                                                            <img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
                                                        </div>
                                                        {/* end::Illustration*/}
                                                    </div>
                                                    {/* end::Wrapper*/}
                                                </div>
                                                {/* end::Tab panel*/}
                                                {/* begin::Tab panel*/}
                                                <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                                                    {/* begin::Items*/}
                                                    <div className="scroll-y mh-325px my-5 px-8">
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New order</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">Just now</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">New customer</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">2 hrs</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Payment process</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">5 hrs</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Search query</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">2 days</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API connection</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">1 week</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Database restore</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">Mar 5</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">System update</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">May 15</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Server OS update</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">Apr 3</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">API rollback</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">Jun 30</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Refund process</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">Jul 10</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Withdrawal process</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">Sep 10</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack py-4">
                                                            {/* begin::Section*/}
                                                            <div className="d-flex align-items-center me-2">
                                                                {/* begin::Code*/}
                                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                                {/* end::Code*/}
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 text-hover-primary fw-semibold">Mail tasks</a>
                                                                {/* end::Title*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                            {/* begin::Label*/}
                                                            <span className="badge badge-light fs-8">Dec 10</span>
                                                            {/* end::Label*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                    </div>
                                                    {/* end::Items*/}
                                                    {/* begin::View more*/}
                                                    <div className="py-3 text-center border-top">
                                                        <a href="pages/user-profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                                            <i className="ki-outline ki-arrow-right fs-5"></i></a>
                                                    </div>
                                                    {/* end::View more*/}
                                                </div>
                                                {/* end::Tab panel*/}
                                            </div>
                                            {/* end::Tab content*/}
                                        </div>
                                        {/* end::Menu*/}
                                        {/* end::Menu wrapper*/}
                                    </div>
                                    {/* end::Notifications*/}
                                    {/* begin::User menu*/}
                                    <div className="app-navbar-item ms-3 ms-md-6" id="kt_header_user_menu_toggle">
                                        {/* begin::Menu wrapper*/}
                                        <div className="cursor-pointer symbol symbol-30px symbol-md-35px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                            <img className="symbol symbol-circle symbol-30px symbol-md-35px" src="assets/media/avatars/300-1.jpg" alt="user" />
                                        </div>
                                        {/* begin::User account menu*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content d-flex align-items-center px-3">
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-50px me-5">
                                                        <img alt="Logo" src="assets/media/avatars/300-1.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Username*/}
                                                    <div className="d-flex flex-column">
                                                        <div className="fw-bold d-flex align-items-center fs-5">Max Smith
                                                            <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span></div>
                                                        <a href="#" className="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
                                                    </div>
                                                    {/* end::Username*/}
                                                </div>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu separator*/}
                                            <div className="separator my-2"></div>
                                            {/* end::Menu separator*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5">
                                                <a href="account/overview.html" className="menu-link px-5">My Profile</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5">
                                                <a href="apps/projects/list.html" className="menu-link px-5">
                                                    <span className="menu-text">My Projects</span>
                                                    <span className="menu-badge">
													<span className="badge badge-light-danger badge-circle fw-bold fs-7">3</span>
												</span>
                                                </a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                <a href="#" className="menu-link px-5">
                                                    <span className="menu-title">My Subscription</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                {/* begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/referrals.html" className="menu-link px-5">Referrals</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/billing.html" className="menu-link px-5">Billing</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/statements.html" className="menu-link px-5">Payments</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                                                            <span className="ms-2" data-bs-toggle="tooltip" title="View your statements">
														<i className="ki-outline ki-information fs-7"></i>
													</span></a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu separator*/}
                                                    <div className="separator my-2"></div>
                                                    {/* end::Menu separator*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <div className="menu-content px-3">
                                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                                <input className="form-check-input w-30px h-20px" type="checkbox" value="1" defaultChecked={true} name="notifications" />
                                                                <span className="form-check-label text-muted fs-7">Notifications</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                </div>
                                                {/* end::Menu sub*/}
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5">
                                                <a href="account/statements.html" className="menu-link px-5">My Statements</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu separator*/}
                                            <div className="separator my-2"></div>
                                            {/* end::Menu separator*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                <a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Mode
												<span className="ms-5 position-absolute translate-middle-y top-50 end-0">
													<i className="ki-outline ki-night-day theme-light-show fs-2"></i>
													<i className="ki-outline ki-moon theme-dark-show fs-2"></i>
												</span></span>
                                                </a>
                                                {/* begin::Menu*/}
                                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-gray-500 menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px" data-kt-menu="true" data-kt-element="theme-mode-menu">
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3 my-0">
                                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-night-day fs-2"></i>
														</span>
                                                            <span className="menu-title">Light</span>
                                                        </a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3 my-0">
                                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-moon fs-2"></i>
														</span>
                                                            <span className="menu-title">Dark</span>
                                                        </a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3 my-0">
                                                        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
														<span className="menu-icon" data-kt-element="icon">
															<i className="ki-outline ki-screen fs-2"></i>
														</span>
                                                            <span className="menu-title">System</span>
                                                        </a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                </div>
                                                {/* end::Menu*/}
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-placement="left-start" data-kt-menu-offset="-15px, 0">
                                                <a href="#" className="menu-link px-5">
												<span className="menu-title position-relative">Language
												<span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
												<img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
                                                </a>
                                                {/* begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/settings.html" className="menu-link d-flex px-5 active">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
													</span>English</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
													</span>Spanish</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
													</span>German</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
													</span>Japanese</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="account/settings.html" className="menu-link d-flex px-5">
													<span className="symbol symbol-20px me-4">
														<img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
													</span>French</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                </div>
                                                {/* end::Menu sub*/}
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5 my-1">
                                                <a href="account/settings.html" className="menu-link px-5">Account Settings</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-5">
                                                <a href="authentication/layouts/corporate/sign-in.html" className="menu-link px-5">Sign Out</a>
                                            </div>
                                            {/* end::Menu item*/}
                                        </div>
                                        {/* end::User account menu*/}
                                        {/* end::Menu wrapper*/}
                                    </div>
                                    {/* end::User menu*/}
                                    <a href="#" className="btn btn-sm btn-flex btn-primary align-self-center ms-5 ms-lg-11 px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                                        <i className="ki-outline ki-plus-square fs-3"></i>Invite</a>
                                    {/* begin::Header menu toggle*/}
                                    <div className="app-navbar-item d-lg-none ms-2 me-n3" title="Show header menu">
                                        <div className="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
                                            <i className="ki-outline ki-text-align-left fs-1"></i>
                                        </div>
                                    </div>
                                    {/* end::Header menu toggle*/}
                                </div>
                                {/* end::Navbar*/}
                            </div>
                            {/* end::Header wrapper*/}
                        </div>
                        {/* end::Header container*/}
                    </div>
                    {/* end::Header*/}
                    {/* begin::Wrapper*/}
                    <div className="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
                        {/* begin::Sidebar*/}
                        <div id="kt_app_sidebar" className="app-sidebar" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="auto" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                            {/* begin::Sidebar primary*/}
                            <div className="app-sidebar-primary">
                                {/* begin::Header*/}
                                <div className="d-flex flex-column flex-center fs-6 fw-bold px-2 mb-5" id="kt_app_sidebar_primary_header">Workspace</div>
                                {/* end::Header*/}
                                {/* begin::Sidebar navbar*/}
                                <div className="app-sidebar-nav flex-grow-1 hover-scroll-overlay-y px-5 pt-2" id="kt_app_sidebar_primary_nav" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header, #kt_app_sidebar_primary_header, #kt_app_sidebar_primary_footer" data-kt-scroll-wrappers="#kt_app_content, #kt_app_sidebar_primary_nav" data-kt-scroll-offset="5px">
                                    {/* begin::Nav*/}
                                    <ul className="nav">
                                        {/* begin::Navbar item*/}
                                        <li className="nav-item py-1">
                                            {/* begin::Navbar link*/}
                                            <a data-bs-toggle="tab" href="#kt_app_sidebar_secondary_collections" className="nav-link py-4 px-1 btn active">
                                                <i className="ki-outline ki-questionnaire-tablet fs-1"></i>
                                                <span className="pt-2 fs-9 fs-lg-7 fw-bold">Collections</span>
                                            </a>
                                            {/* end::Navbar link*/}
                                        </li>
                                        {/* end::Navbar item*/}
                                        {/* begin::Navbar item*/}
                                        <li className="nav-item py-1">
                                            {/* begin::Navbar link*/}
                                            <a data-bs-toggle="tab" href="#kt_app_sidebar_secondary_apis" className="nav-link py-4 px-1 btn">
                                                <i className="ki-outline ki-abstract-26 fs-1"></i>
                                                <span className="pt-2 fs-9 fs-lg-7 fw-bold">APIs</span>
                                            </a>
                                            {/* end::Navbar link*/}
                                        </li>
                                        {/* end::Navbar item*/}
                                        {/* begin::Navbar item*/}
                                        <li className="nav-item py-1">
                                            {/* begin::Navbar link*/}
                                            <a data-bs-toggle="tab" href="#kt_app_sidebar_secondary_environment" className="nav-link py-4 px-1 btn">
                                                <i className="ki-outline ki-notification-status fs-1"></i>
                                                <span className="pt-2 fs-9 fs-lg-7 fw-bold">Environment</span>
                                            </a>
                                            {/* end::Navbar link*/}
                                        </li>
                                        {/* end::Navbar item*/}
                                        {/* begin::Navbar item*/}
                                        <li className="nav-item py-1">
                                            {/* begin::Navbar link*/}
                                            <a data-bs-toggle="tab" href="#kt_app_sidebar_secondary_servers" className="nav-link py-4 px-1 btn">
                                                <i className="ki-outline ki-message-notif fs-1"></i>
                                                <span className="pt-2 fs-9 fs-lg-7 fw-bold">Servers</span>
                                            </a>
                                            {/* end::Navbar link*/}
                                        </li>
                                        {/* end::Navbar item*/}
                                        {/* begin::Navbar item*/}
                                        <li className="nav-item py-1">
                                            {/* begin::Navbar link*/}
                                            <a data-bs-toggle="tab" href="#kt_app_sidebar_secondary_notifications" className="nav-link py-4 px-1 btn">
                                                <i className="ki-outline ki-rocket fs-1"></i>
                                                <span className="pt-2 fs-9 fs-lg-7 fw-bold">Notifications</span>
                                            </a>
                                            {/* end::Navbar link*/}
                                        </li>
                                        {/* end::Navbar item*/}
                                        {/* begin::Navbar item*/}
                                        <li className="nav-item py-1">
                                            {/* begin::Navbar link*/}
                                            <a data-bs-toggle="tab" href="#kt_app_sidebar_secondary_history" className="nav-link py-4 px-1 btn">
                                                <i className="ki-outline ki-chart-line fs-1"></i>
                                                <span className="pt-2 fs-9 fs-lg-7 fw-bold">History</span>
                                            </a>
                                            {/* end::Navbar link*/}
                                        </li>
                                        {/* end::Navbar item*/}
                                    </ul>
                                    {/* end::Nav*/}
                                </div>
                                {/* end::Sidebar navbar*/}
                                {/* begin::Footer*/}
                                <div className="app-sidebar-footer d-flex flex-column flex-center" id="kt_app_sidebar_primary_footer">
                                    {/* begin::Menu*/}
                                    <div className="mb-0">
                                        <button type="button" className="btn btn-icon btn-color-gray-400 btn-active-color-primary" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-overflow="true" data-kt-menu-placement="top-start">
                                            <i className="ki-outline ki-notification-status fs-1"></i>
                                        </button>
                                        {/* begin::Menu 2*/}
                                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu separator*/}
                                            <div className="separator mb-3 opacity-75"></div>
                                            {/* end::Menu separator*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Ticket</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Customer</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                {/* begin::Menu item*/}
                                                <a href="#" className="menu-link px-3">
                                                    <span className="menu-title">New Group</span>
                                                    <span className="menu-arrow"></span>
                                                </a>
                                                {/* end::Menu item*/}
                                                {/* begin::Menu sub*/}
                                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Admin Group</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Staff Group</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                    {/* begin::Menu item*/}
                                                    <div className="menu-item px-3">
                                                        <a href="#" className="menu-link px-3">Member Group</a>
                                                    </div>
                                                    {/* end::Menu item*/}
                                                </div>
                                                {/* end::Menu sub*/}
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3">New Contact</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu separator*/}
                                            <div className="separator mt-3 opacity-75"></div>
                                            {/* end::Menu separator*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <div className="menu-content px-3 py-3">
                                                    <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                </div>
                                            </div>
                                            {/* end::Menu item*/}
                                        </div>
                                        {/* end::Menu 2*/}
                                    </div>
                                    {/* end::Menu*/}
                                </div>
                                {/* end::Footer*/}
                            </div>
                            {/* end::Sidebar primary*/}
                            {/* begin::Sidebar secondary*/}
                            <div className="app-sidebar-secondary">
                                {/* begin::Sidebar menu*/}
                                <div id="kt_app_sidebar_secondary_wrapper" className="hover-scroll-y" data-kt-scroll="true" data-kt-scroll-activate="{default: true, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependecies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_content" data-kt-scroll-offset="5px">
                                    {/* begin::Tab content*/}
                                    <div className="tab-content px-5 px-lg-10">
                                        {/* begin::Tab pane*/}
                                        <div className="tab-pane fade show active" id="kt_app_sidebar_secondary_collections" role="tabpanel">
                                            {/* begin::Collections*/}
                                            <div className="card card-reset card-p-0">
                                                {/* begin::Header*/}
                                                <div className="card-header mb-2">
                                                    {/* begin::Actions*/}
                                                    <div className="text-end w-100">
                                                        <a href='#' className="btn btn-sm btn-secondary fw-bold me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">New</a>
                                                        <a href='#' className="btn btn-sm btn-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_select_users">Import</a>
                                                    </div>
                                                    {/* end::Actions*/}
                                                </div>
                                                {/* end::Header*/}
                                                {/* begin::Body*/}
                                                <div className="card-body text-center">
                                                    {/* begin::Illustration*/}
                                                    <img src="assets/media/misc/watch.svg" className="h-150px" alt="" />
                                                    {/* end::Illustration*/}
                                                    {/* begin::Title*/}
                                                    <h4 className="fw-bold text-gray-900 my-4">Upload your CSV file</h4>
                                                    {/* end::Title*/}
                                                    {/* begin::Desctiption*/}
                                                    <span className="fw-semibold text-gray-700 mb-4 d-block">Anyone can connect with audience through blogging benefits</span>
                                                    {/* end::Desctiption*/}
                                                    {/* begin::Action*/}
                                                    <a href='#' className="btn btn-sm btn-primary fw-semibold" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Start Upload</a>
                                                    {/* begin::Action*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Collections*/}
                                        </div>
                                        {/* end::Tab pane*/}
                                        {/* begin::Tab pane*/}
                                        <div className="tab-pane fade" id="kt_app_sidebar_secondary_apis" role="tabpanel">
                                            {/* begin::Apis*/}
                                            <div className="card card-reset card-p-0">
                                                {/* begin::Header*/}
                                                <div className="card-header pt-7 mb-5">
                                                    {/* begin::Title*/}
                                                    <h3 className="card-title fw-bold text-gray-800">Visits by Country</h3>
                                                    {/* end::Title*/}
                                                    {/* begin::Toolbar*/}
                                                    <div className="card-toolbar">
                                                        <a href="apps/ecommerce/sales/listing.html" className="btn btn-sm btn-primary">View</a>
                                                    </div>
                                                    {/* end::Toolbar*/}
                                                </div>
                                                {/* end::Header*/}
                                                {/* begin::Body*/}
                                                <div className="card-body pt-0">
                                                    {/* begin::Items*/}
                                                    <div className="m-0">
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Flag*/}
                                                            <img src="assets/media/flags/united-states.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                                                            {/* end::Flag*/}
                                                            {/* begin::Section*/}
                                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                                {/* begin::Content*/}
                                                                <div className="me-5">
                                                                    {/* begin::Title*/}
                                                                    <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">United States</a>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Desc*/}
                                                                    <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Direct link clicks</span>
                                                                    {/* end::Desc*/}
                                                                </div>
                                                                {/* end::Content*/}
                                                                {/* begin::Label*/}
                                                                <div className="m-0">
                                                                    {/* begin::Label*/}
                                                                    <span className="badge badge-light-success fs-base">
																<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.6%</span>
                                                                    {/* end::Label*/}
                                                                </div>
                                                                {/* end::Label*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-3"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Flag*/}
                                                            <img src="assets/media/flags/brazil.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                                                            {/* end::Flag*/}
                                                            {/* begin::Section*/}
                                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                                {/* begin::Content*/}
                                                                <div className="me-5">
                                                                    {/* begin::Title*/}
                                                                    <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Brasil</a>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Desc*/}
                                                                    <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">All Social</span>
                                                                    {/* end::Desc*/}
                                                                </div>
                                                                {/* end::Content*/}
                                                                {/* begin::Label*/}
                                                                <div className="m-0">
                                                                    {/* begin::Label*/}
                                                                    <span className="badge badge-light-danger fs-base">
																<i className="ki-outline ki-arrow-down fs-5 text-danger ms-n1"></i>0.4%</span>
                                                                    {/* end::Label*/}
                                                                </div>
                                                                {/* end::Label*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-3"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Flag*/}
                                                            <img src="assets/media/flags/turkey.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                                                            {/* end::Flag*/}
                                                            {/* begin::Section*/}
                                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                                {/* begin::Content*/}
                                                                <div className="me-5">
                                                                    {/* begin::Title*/}
                                                                    <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Turkey</a>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Desc*/}
                                                                    <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Mailchimp</span>
                                                                    {/* end::Desc*/}
                                                                </div>
                                                                {/* end::Content*/}
                                                                {/* begin::Label*/}
                                                                <div className="m-0">
                                                                    {/* begin::Label*/}
                                                                    <span className="badge badge-light-success fs-base">
																<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>0.2%</span>
                                                                    {/* end::Label*/}
                                                                </div>
                                                                {/* end::Label*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-3"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Flag*/}
                                                            <img src="assets/media/flags/france.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                                                            {/* end::Flag*/}
                                                            {/* begin::Section*/}
                                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                                {/* begin::Content*/}
                                                                <div className="me-5">
                                                                    {/* begin::Title*/}
                                                                    <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">France</a>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Desc*/}
                                                                    <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Impact Radius</span>
                                                                    {/* end::Desc*/}
                                                                </div>
                                                                {/* end::Content*/}
                                                                {/* begin::Label*/}
                                                                <div className="m-0">
                                                                    {/* begin::Label*/}
                                                                    <span className="badge badge-light-success fs-base">
																<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>4.1%</span>
                                                                    {/* end::Label*/}
                                                                </div>
                                                                {/* end::Label*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-3"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Flag*/}
                                                            <img src="assets/media/flags/india.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                                                            {/* end::Flag*/}
                                                            {/* begin::Section*/}
                                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                                {/* begin::Content*/}
                                                                <div className="me-5">
                                                                    {/* begin::Title*/}
                                                                    <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">India</a>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Desc*/}
                                                                    <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Many Sources</span>
                                                                    {/* end::Desc*/}
                                                                </div>
                                                                {/* end::Content*/}
                                                                {/* begin::Label*/}
                                                                <div className="m-0">
                                                                    {/* begin::Label*/}
                                                                    <span className="badge badge-light-danger fs-base">
																<i className="ki-outline ki-arrow-down fs-5 text-danger ms-n1"></i>8.3%</span>
                                                                    {/* end::Label*/}
                                                                </div>
                                                                {/* end::Label*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-3"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Flag*/}
                                                            <img src="assets/media/flags/sweden.svg" className="me-4 w-25px" style={{borderRadius: "4px"}} alt="" />
                                                            {/* end::Flag*/}
                                                            {/* begin::Section*/}
                                                            <div className="d-flex flex-stack flex-row-fluid d-grid gap-2">
                                                                {/* begin::Content*/}
                                                                <div className="me-5">
                                                                    {/* begin::Title*/}
                                                                    <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Sweden</a>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Desc*/}
                                                                    <span className="text-gray-400 fw-semibold fs-7 d-block text-start ps-0">Social Network</span>
                                                                    {/* end::Desc*/}
                                                                </div>
                                                                {/* end::Content*/}
                                                                {/* begin::Label*/}
                                                                <div className="m-0">
                                                                    {/* begin::Label*/}
                                                                    <span className="badge badge-light-success fs-base">
																<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>1.9%</span>
                                                                    {/* end::Label*/}
                                                                </div>
                                                                {/* end::Label*/}
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                    </div>
                                                    {/* end::Items*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Apis*/}
                                        </div>
                                        {/* end::Tab pane*/}
                                        {/* begin::Tab pane*/}
                                        <div className="tab-pane fade" id="kt_app_sidebar_secondary_environment" role="tabpanel">
                                            {/* begin::Environment*/}
                                            <div className="card card-reset card-p-0">
                                                {/* begin::Header*/}
                                                <div className="card-header">
                                                    {/* begin::Actions*/}
                                                    <div className="text-end w-100">
                                                        <a href='#' className="btn btn-sm btn-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target">New</a>
                                                    </div>
                                                    {/* end::Actions*/}
                                                </div>
                                                {/* end::Header*/}
                                                {/* begin::Body*/}
                                                <div className="card-body">
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <div className="symbol-label fs-2 fw-semibold bg-danger text-inverse-danger">M</div>
                                                        </div>
                                                        {/* end::Symbol*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            {/* begin:Author*/}
                                                            <div className="flex-grow-1 me-2">
                                                                <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">UI/UX Design</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">40+ Courses</span>
                                                            </div>
                                                            {/* end:Author*/}
                                                            {/* begin::Actions*/}
                                                            <a href="#" className="btn btn-sm btn-icon btn-secondary w-30px h-30px">
                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                            </a>
                                                            {/* begin::Actions*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <div className="symbol-label fs-2 fw-semibold bg-success text-inverse-success">Q</div>
                                                        </div>
                                                        {/* end::Symbol*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            {/* begin:Author*/}
                                                            <div className="flex-grow-1 me-2">
                                                                <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">QA Analysis</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">18 Courses</span>
                                                            </div>
                                                            {/* end:Author*/}
                                                            {/* begin::Actions*/}
                                                            <a href="#" className="btn btn-sm btn-icon btn-secondary w-30px h-30px">
                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                            </a>
                                                            {/* begin::Actions*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <div className="symbol-label fs-2 fw-semibold bg-info text-inverse-info">W</div>
                                                        </div>
                                                        {/* end::Symbol*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            {/* begin:Author*/}
                                                            <div className="flex-grow-1 me-2">
                                                                <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Web Development</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">120+ Courses</span>
                                                            </div>
                                                            {/* end:Author*/}
                                                            {/* begin::Actions*/}
                                                            <a href="#" className="btn btn-sm btn-icon btn-secondary w-30px h-30px">
                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                            </a>
                                                            {/* begin::Actions*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <div className="symbol-label fs-2 fw-semibold bg-primary text-inverse-primary">M</div>
                                                        </div>
                                                        {/* end::Symbol*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            {/* begin:Author*/}
                                                            <div className="flex-grow-1 me-2">
                                                                <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Marketing</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">50+ Courses.</span>
                                                            </div>
                                                            {/* end:Author*/}
                                                            {/* begin::Actions*/}
                                                            <a href="#" className="btn btn-sm btn-icon btn-secondary w-30px h-30px">
                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                            </a>
                                                            {/* begin::Actions*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <div className="symbol-label fs-2 fw-semibold bg-warning text-inverse-warning">P</div>
                                                        </div>
                                                        {/* end::Symbol*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            {/* begin:Author*/}
                                                            <div className="flex-grow-1 me-2">
                                                                <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Philosophy</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">24+ Courses</span>
                                                            </div>
                                                            {/* end:Author*/}
                                                            {/* begin::Actions*/}
                                                            <a href="#" className="btn btn-sm btn-icon btn-secondary w-30px h-30px">
                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                            </a>
                                                            {/* begin::Actions*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Symbol*/}
                                                        <div className="symbol symbol-40px me-4">
                                                            <div className="symbol-label fs-2 fw-semibold bg-dark text-inverse-dark">M</div>
                                                        </div>
                                                        {/* end::Symbol*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                                                            {/* begin:Author*/}
                                                            <div className="flex-grow-1 me-2">
                                                                <a href="pages/user-profile/overview.html" className="text-gray-800 text-hover-primary fs-6 fw-bold">Mathematics</a>
                                                                <span className="text-muted fw-semibold d-block fs-7">24+ Courses</span>
                                                            </div>
                                                            {/* end:Author*/}
                                                            {/* begin::Actions*/}
                                                            <a href="#" className="btn btn-sm btn-icon btn-secondary w-30px h-30px">
                                                                <i className="ki-outline ki-arrow-right fs-2"></i>
                                                            </a>
                                                            {/* begin::Actions*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Environment*/}
                                        </div>
                                        {/* end::Tab pane*/}
                                        {/* begin::Tab pane*/}
                                        <div className="tab-pane fade" id="kt_app_sidebar_secondary_servers" role="tabpanel">
                                            {/* begin::Servers*/}
                                            <div className="card card-reset card-p-0">
                                                {/* begin::Header*/}
                                                <div className="card-header">
                                                    {/* begin::Actions*/}
                                                    <div className="text-end w-100">
                                                        <a href='#' className="btn btn-sm btn-primary fw-bold" data-bs-toggle="modal" data-bs-target="#kt_modal_new_address">New</a>
                                                    </div>
                                                    {/* end::Actions*/}
                                                </div>
                                                {/* end::Header*/}
                                                {/* begin::Body*/}
                                                <div className="card-body pt-0">
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center me-3">
                                                            {/* begin::Icon*/}
                                                            <img src="assets/media/stock/ecommerce/14.gif" className="me-4 w-50px ms-n3" alt="" />
                                                            {/* end::Icon*/}
                                                            {/* begin::Section*/}
                                                            <div className="flex-grow-1">
                                                                <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Fjallraven</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">#XDG-6437</span>
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                        {/* begin::Value*/}
                                                        <span className="text-gray-800 fw-bold fs-6">$ 72.00</span>
                                                        {/* end::Value*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center me-3">
                                                            {/* begin::Icon*/}
                                                            <img src="assets/media/stock/ecommerce/13.gif" className="me-4 w-50px ms-n3" alt="" />
                                                            {/* end::Icon*/}
                                                            {/* begin::Section*/}
                                                            <div className="flex-grow-1">
                                                                <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Nike</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">#XDG-1836</span>
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                        {/* begin::Value*/}
                                                        <span className="text-gray-800 fw-bold fs-6">$ 45.00</span>
                                                        {/* end::Value*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center me-3">
                                                            {/* begin::Icon*/}
                                                            <img src="assets/media/stock/ecommerce/41.gif" className="me-4 w-50px ms-n3" alt="" />
                                                            {/* end::Icon*/}
                                                            {/* begin::Section*/}
                                                            <div className="flex-grow-1">
                                                                <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Bose QC 35</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">#XDG-6254</span>
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                        {/* begin::Value*/}
                                                        <span className="text-gray-800 fw-bold fs-6">$ 168.00</span>
                                                        {/* end::Value*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center me-3">
                                                            {/* begin::Icon*/}
                                                            <img src="assets/media/stock/ecommerce/53.gif" className="me-4 w-50px ms-n3" alt="" />
                                                            {/* end::Icon*/}
                                                            {/* begin::Section*/}
                                                            <div className="flex-grow-1">
                                                                <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Greeny</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">#XDG-1746</span>
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                        {/* begin::Value*/}
                                                        <span className="text-gray-800 fw-bold fs-6">$ 14.50</span>
                                                        {/* end::Value*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center me-3">
                                                            {/* begin::Icon*/}
                                                            <img src="assets/media/stock/ecommerce/71.gif" className="me-4 w-50px ms-n3" alt="" />
                                                            {/* end::Icon*/}
                                                            {/* begin::Section*/}
                                                            <div className="flex-grow-1">
                                                                <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Apple</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">#XDG-6245</span>
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                        {/* begin::Value*/}
                                                        <span className="text-gray-800 fw-bold fs-6">$ 362.00</span>
                                                        {/* end::Value*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center me-3">
                                                            {/* begin::Icon*/}
                                                            <img src="assets/media/stock/ecommerce/194.gif" className="me-4 w-50px ms-n3" alt="" />
                                                            {/* end::Icon*/}
                                                            {/* begin::Section*/}
                                                            <div className="flex-grow-1">
                                                                <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Friendly Robot</a>
                                                                <span className="text-gray-400 fw-semibold d-block fs-7">Item: #XDG-2347</span>
                                                            </div>
                                                            {/* end::Section*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                        {/* begin::Value*/}
                                                        <span className="text-gray-800 fw-bold fs-6">$ 48.00</span>
                                                        {/* end::Value*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Servers*/}
                                        </div>
                                        {/* end::Tab pane*/}
                                        {/* begin::Tab pane*/}
                                        <div className="tab-pane fade" id="kt_app_sidebar_secondary_notifications" role="tabpanel">
                                            {/* begin::Notifications*/}
                                            <div className="card card-reset card-p-0">
                                                {/* begin::Body*/}
                                                <div className="card-body d-flex flex-column flex-center">
                                                    {/* begin::Heading*/}
                                                    <div className="mb-2">
                                                        {/* begin::Title*/}
                                                        <h1 className="fw-semibold text-gray-800 text-center lh-lg">Have you tried new
                                                            <span className="fw-bolder">Notifications</span></h1>
                                                        {/* end::Title*/}
                                                        {/* begin::Illustration*/}
                                                        <div className="py-10 text-center">
                                                            <img src="assets/media/svg/illustrations/easy/1.svg" className="theme-light-show w-200px" alt="" />
                                                            <img src="assets/media/svg/illustrations/easy/1-dark.svg" className="theme-dark-show w-200" alt="" />
                                                        </div>
                                                        {/* end::Illustration*/}
                                                    </div>
                                                    {/* end::Heading*/}
                                                    {/* begin::Links*/}
                                                    <div className="text-center mb-1">
                                                        {/* begin::Link*/}
                                                        <a className="btn btn-sm btn-primary me-2" data-bs-toggle="modal" data-bs-target="#kt_modal_select_users">Learn more</a>
                                                        {/* end::Link*/}
                                                    </div>
                                                    {/* end::Links*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Notifications*/}
                                        </div>
                                        {/* end::Tab pane*/}
                                        {/* begin::Tab pane*/}
                                        <div className="tab-pane fade" id="kt_app_sidebar_secondary_history" role="tabpanel">
                                            {/* begin::History*/}
                                            <div className="card card-reset card-p-0">
                                                {/* begin::Header*/}
                                                <div className="card-header d-flex align-items-start pt-0">
                                                    {/* begin::Title*/}
                                                    <h3 className="card-title fw-bold text-gray-800">Mining Status</h3>
                                                    {/* end::Title*/}
                                                    {/* begin::Toolbar*/}
                                                    <div className="card-toolbar mt-0">
                                                        <a href="#" className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add</a>
                                                    </div>
                                                    {/* end::Toolbar*/}
                                                </div>
                                                {/* end::Header*/}
                                                {/* begin::Body*/}
                                                <div className="card-body">
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center me-5">
                                                            {/* begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-3">
															<span className="symbol-label bg-light-info">
																<i className="ki-outline ki-abstract-47 fs-2x text-info"></i>
															</span>
                                                            </div>
                                                            {/* end::Symbol*/}
                                                            {/* begin::Content*/}
                                                            <div className="me-5">
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">GPUs mining</a>
                                                                {/* end::Title*/}
                                                                {/* begin::Desc*/}
                                                                <span className="fw-semibold fs-7 d-block text-start text-success ps-0">Running</span>
                                                                {/* end::Desc*/}
                                                            </div>
                                                            {/* end::Content*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center">
                                                            {/* begin::Info*/}
                                                            <div className="d-flex flex-center">
                                                                {/* begin::Action*/}
                                                                <div className="form-check form-switch form-check-custom form-check-solid">
                                                                    <input className="form-check-input h-20px w-30px" type="checkbox" value="" id="flexSwitchChecked" defaultChecked={true} />
                                                                </div>
                                                                {/* end::Action*/}
                                                            </div>
                                                            {/* end::Info*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center me-5">
                                                            {/* begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-3">
															<span className="symbol-label bg-light-success">
																<i className="ki-outline ki-glass fs-2x text-success"></i>
															</span>
                                                            </div>
                                                            {/* end::Symbol*/}
                                                            {/* begin::Content*/}
                                                            <div className="me-5">
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">GPUs mining</a>
                                                                {/* end::Title*/}
                                                                {/* begin::Desc*/}
                                                                <span className="fw-semibold fs-7 d-block text-start text-success ps-0">Running</span>
                                                                {/* end::Desc*/}
                                                            </div>
                                                            {/* end::Content*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center">
                                                            {/* begin::Info*/}
                                                            <div className="d-flex flex-center">
                                                                {/* begin::Action*/}
                                                                <div className="form-check form-switch form-check-custom form-check-solid">
                                                                    <input className="form-check-input h-20px w-30px" type="checkbox" value="" id="flexSwitchChecked" defaultChecked={true} />
                                                                </div>
                                                                {/* end::Action*/}
                                                            </div>
                                                            {/* end::Info*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center me-5">
                                                            {/* begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-3">
															<span className="symbol-label bg-light-danger">
																<i className="ki-outline ki-abstract-35 fs-2x text-danger"></i>
															</span>
                                                            </div>
                                                            {/* end::Symbol*/}
                                                            {/* begin::Content*/}
                                                            <div className="me-5">
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Est. daily USD</a>
                                                                {/* end::Title*/}
                                                                {/* begin::Desc*/}
                                                                <span className="fw-semibold fs-7 d-block text-start text-gray-400 ps-0">$48.02</span>
                                                                {/* end::Desc*/}
                                                            </div>
                                                            {/* end::Content*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center">
                                                            {/* begin::Info*/}
                                                            <div className="d-flex flex-center">
                                                                {/* begin::Action*/}
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-secondary btn-active-color-primary w-25px h-25px">
                                                                    <i className="ki-outline ki-black-right fs-5"></i>
                                                                </a>
                                                                {/* end::Action*/}
                                                            </div>
                                                            {/* end::Info*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Separator*/}
                                                    <div className="separator separator-dashed my-4"></div>
                                                    {/* end::Separator*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex flex-stack">
                                                        {/* begin::Section*/}
                                                        <div className="d-flex align-items-center me-5">
                                                            {/* begin::Symbol*/}
                                                            <div className="symbol symbol-40px me-3">
															<span className="symbol-label bg-light-primary">
																<i className="ki-outline ki-abstract-19 fs-2x text-primary"></i>
															</span>
                                                            </div>
                                                            {/* end::Symbol*/}
                                                            {/* begin::Content*/}
                                                            <div className="me-5">
                                                                {/* begin::Title*/}
                                                                <a href="#" className="text-gray-800 fw-bold text-hover-primary fs-6">Team Members</a>
                                                                {/* end::Title*/}
                                                                {/* begin::Desc*/}
                                                                <span className="fw-semibold fs-7 d-block text-start text-gray-400 ps-0">6</span>
                                                                {/* end::Desc*/}
                                                            </div>
                                                            {/* end::Content*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Wrapper*/}
                                                        <div className="d-flex align-items-center">
                                                            {/* begin::Info*/}
                                                            <div className="d-flex flex-center">
                                                                {/* begin::Action*/}
                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-secondary btn-active-color-primary w-25px h-25px">
                                                                    <i className="ki-outline ki-black-right fs-5"></i>
                                                                </a>
                                                                {/* end::Action*/}
                                                            </div>
                                                            {/* end::Info*/}
                                                        </div>
                                                        {/* end::Wrapper*/}
                                                    </div>
                                                    {/* end::Item*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::History*/}
                                        </div>
                                        {/* end::Tab pane*/}
                                    </div>
                                    {/* end::Tab content*/}
                                </div>
                                {/* end::Sidebar menu*/}
                            </div>
                            {/* end::Sidebar secondary*/}
                        </div>
                        {/* end::Sidebar*/}
                        {/* begin::Main*/}
                        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                            {/* begin::Content wrapper*/}
                            <div className="d-flex flex-column flex-column-fluid">
                                {/* begin::Content*/}
                                <div id="kt_app_content" className="app-content flex-column-fluid">
                                    {/* begin::Content container*/}
                                    <div id="kt_app_content_container" className="app-container container-fluid">
                                        {/* begin::Row*/}
                                        <div className="row gy-5 g-xl-10">
                                            {/* begin::Col*/}
                                            <div className="col-sm-6 col-xl-2 mb-xl-10">
                                                {/* begin::Card widget 2*/}
                                                <div className="card h-lg-100">
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex justify-content-between align-items-start flex-column">
                                                        {/* begin::Icon*/}
                                                        <div className="m-0">
                                                            <i className="ki-outline ki-compass fs-2hx text-gray-600"></i>
                                                        </div>
                                                        {/* end::Icon*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex flex-column my-7">
                                                            {/* begin::Number*/}
                                                            <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">327</span>
                                                            {/* end::Number*/}
                                                            {/* begin::Follower*/}
                                                            <div className="m-0">
                                                                <span className="fw-semibold fs-6 text-gray-400">Projects</span>
                                                            </div>
                                                            {/* end::Follower*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Badge*/}
                                                        <span className="badge badge-light-success fs-base">
													<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.1%</span>
                                                        {/* end::Badge*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Card widget 2*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-sm-6 col-xl-2 mb-xl-10">
                                                {/* begin::Card widget 2*/}
                                                <div className="card h-lg-100">
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex justify-content-between align-items-start flex-column">
                                                        {/* begin::Icon*/}
                                                        <div className="m-0">
                                                            <i className="ki-outline ki-chart-simple fs-2hx text-gray-600"></i>
                                                        </div>
                                                        {/* end::Icon*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex flex-column my-7">
                                                            {/* begin::Number*/}
                                                            <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">27,5M</span>
                                                            {/* end::Number*/}
                                                            {/* begin::Follower*/}
                                                            <div className="m-0">
                                                                <span className="fw-semibold fs-6 text-gray-400">Stock Qty</span>
                                                            </div>
                                                            {/* end::Follower*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Badge*/}
                                                        <span className="badge badge-light-success fs-base">
													<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.1%</span>
                                                        {/* end::Badge*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Card widget 2*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-sm-6 col-xl-2 mb-xl-10">
                                                {/* begin::Card widget 2*/}
                                                <div className="card h-lg-100">
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex justify-content-between align-items-start flex-column">
                                                        {/* begin::Icon*/}
                                                        <div className="m-0">
                                                            <i className="ki-outline ki-abstract-39 fs-2hx text-gray-600"></i>
                                                        </div>
                                                        {/* end::Icon*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex flex-column my-7">
                                                            {/* begin::Number*/}
                                                            <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">149M</span>
                                                            {/* end::Number*/}
                                                            {/* begin::Follower*/}
                                                            <div className="m-0">
                                                                <span className="fw-semibold fs-6 text-gray-400">Stock Value</span>
                                                            </div>
                                                            {/* end::Follower*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Badge*/}
                                                        <span className="badge badge-light-danger fs-base">
													<i className="ki-outline ki-arrow-down fs-5 text-danger ms-n1"></i>0.47%</span>
                                                        {/* end::Badge*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Card widget 2*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-sm-6 col-xl-2 mb-xl-10">
                                                {/* begin::Card widget 2*/}
                                                <div className="card h-lg-100">
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex justify-content-between align-items-start flex-column">
                                                        {/* begin::Icon*/}
                                                        <div className="m-0">
                                                            <i className="ki-outline ki-map fs-2hx text-gray-600"></i>
                                                        </div>
                                                        {/* end::Icon*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex flex-column my-7">
                                                            {/* begin::Number*/}
                                                            <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">89M</span>
                                                            {/* end::Number*/}
                                                            {/* begin::Follower*/}
                                                            <div className="m-0">
                                                                <span className="fw-semibold fs-6 text-gray-400">C APEX</span>
                                                            </div>
                                                            {/* end::Follower*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Badge*/}
                                                        <span className="badge badge-light-success fs-base">
													<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.1%</span>
                                                        {/* end::Badge*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Card widget 2*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-sm-6 col-xl-2 mb-5 mb-xl-10">
                                                {/* begin::Card widget 2*/}
                                                <div className="card h-lg-100">
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex justify-content-between align-items-start flex-column">
                                                        {/* begin::Icon*/}
                                                        <div className="m-0">
                                                            <i className="ki-outline ki-abstract-35 fs-2hx text-gray-600"></i>
                                                        </div>
                                                        {/* end::Icon*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex flex-column my-7">
                                                            {/* begin::Number*/}
                                                            <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">72.4%</span>
                                                            {/* end::Number*/}
                                                            {/* begin::Follower*/}
                                                            <div className="m-0">
                                                                <span className="fw-semibold fs-6 text-gray-400">OPEX</span>
                                                            </div>
                                                            {/* end::Follower*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Badge*/}
                                                        <span className="badge badge-light-danger fs-base">
													<i className="ki-outline ki-arrow-down fs-5 text-danger ms-n1"></i>0.647%</span>
                                                        {/* end::Badge*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Card widget 2*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-sm-6 col-xl-2 mb-5 mb-xl-10">
                                                {/* begin::Card widget 2*/}
                                                <div className="card h-lg-100">
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex justify-content-between align-items-start flex-column">
                                                        {/* begin::Icon*/}
                                                        <div className="m-0">
                                                            <i className="ki-outline ki-abstract-26 fs-2hx text-gray-600"></i>
                                                        </div>
                                                        {/* end::Icon*/}
                                                        {/* begin::Section*/}
                                                        <div className="d-flex flex-column my-7">
                                                            {/* begin::Number*/}
                                                            <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">106M</span>
                                                            {/* end::Number*/}
                                                            {/* begin::Follower*/}
                                                            <div className="m-0">
                                                                <span className="fw-semibold fs-6 text-gray-400">Saving</span>
                                                            </div>
                                                            {/* end::Follower*/}
                                                        </div>
                                                        {/* end::Section*/}
                                                        {/* begin::Badge*/}
                                                        <span className="badge badge-light-success fs-base">
													<i className="ki-outline ki-arrow-up fs-5 text-success ms-n1"></i>2.1%</span>
                                                        {/* end::Badge*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Card widget 2*/}
                                            </div>
                                            {/* end::Col*/}
                                        </div>
                                        {/* end::Row*/}
                                        {/* begin::Row*/}
                                        <div className="row gy-5 g-xl-10">
                                            {/* begin::Col*/}
                                            <div className="col-xl-4 mb-xl-10">
                                                {/* begin::List widget 17*/}
                                                <div className="card card-flush h-xl-100">
                                                    {/* begin::Header*/}
                                                    <div className="card-header pt-7">
                                                        {/* begin::Title*/}
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span className="card-label fw-bold text-gray-800">Popular Products</span>
                                                            <span className="text-gray-400 mt-1 fw-semibold fs-6">8k social visitors</span>
                                                        </h3>
                                                        {/* end::Title*/}
                                                        {/* begin::Toolbar*/}
                                                        <div className="card-toolbar">
                                                            <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">Add Product</a>
                                                        </div>
                                                        {/* end::Toolbar*/}
                                                    </div>
                                                    {/* end::Header*/}
                                                    {/* begin::Body*/}
                                                    <div className="card-body pt-0">
                                                        {/* begin::Content*/}
                                                        <div className="d-flex flex-stack my-5">
                                                            <span className="text-gray-400 fs-7 fw-bold">ITEM</span>
                                                            <span className="text-gray-400 fw-bold fs-7">ITEM PRICE</span>
                                                        </div>
                                                        {/* end::Content*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Wrapper*/}
                                                            <div className="d-flex align-items-center me-3">
                                                                {/* begin::Icon*/}
                                                                <img src="assets/media/stock/ecommerce/14.gif" className="me-4 w-50px" alt="" />
                                                                {/* end::Icon*/}
                                                                {/* begin::Section*/}
                                                                <div className="flex-grow-1">
                                                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Fjallraven</a>
                                                                    <span className="text-gray-400 fw-semibold d-block fs-7">Item: #XDG-6437</span>
                                                                </div>
                                                                {/* end::Section*/}
                                                            </div>
                                                            {/* end::Wrapper*/}
                                                            {/* begin::Value*/}
                                                            <span className="text-gray-800 fw-bold fs-6">$ 72.00</span>
                                                            {/* end::Value*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-4"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Wrapper*/}
                                                            <div className="d-flex align-items-center me-3">
                                                                {/* begin::Icon*/}
                                                                <img src="assets/media/stock/ecommerce/13.gif" className="me-4 w-50px" alt="" />
                                                                {/* end::Icon*/}
                                                                {/* begin::Section*/}
                                                                <div className="flex-grow-1">
                                                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Nike AirMax</a>
                                                                    <span className="text-gray-400 fw-semibold d-block fs-7">Item: #XDG-1836</span>
                                                                </div>
                                                                {/* end::Section*/}
                                                            </div>
                                                            {/* end::Wrapper*/}
                                                            {/* begin::Value*/}
                                                            <span className="text-gray-800 fw-bold fs-6">$ 45.00</span>
                                                            {/* end::Value*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-4"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Wrapper*/}
                                                            <div className="d-flex align-items-center me-3">
                                                                {/* begin::Icon*/}
                                                                <img src="assets/media/stock/ecommerce/41.gif" className="me-4 w-50px" alt="" />
                                                                {/* end::Icon*/}
                                                                {/* begin::Section*/}
                                                                <div className="flex-grow-1">
                                                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Bose QC 35</a>
                                                                    <span className="text-gray-400 fw-semibold d-block fs-7">Item: #XDG-6254</span>
                                                                </div>
                                                                {/* end::Section*/}
                                                            </div>
                                                            {/* end::Wrapper*/}
                                                            {/* begin::Value*/}
                                                            <span className="text-gray-800 fw-bold fs-6">$ 168.00</span>
                                                            {/* end::Value*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-4"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Wrapper*/}
                                                            <div className="d-flex align-items-center me-3">
                                                                {/* begin::Icon*/}
                                                                <img src="assets/media/stock/ecommerce/53.gif" className="me-4 w-50px" alt="" />
                                                                {/* end::Icon*/}
                                                                {/* begin::Section*/}
                                                                <div className="flex-grow-1">
                                                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Greeny</a>
                                                                    <span className="text-gray-400 fw-semibold d-block fs-7">Item: #XDG-1746</span>
                                                                </div>
                                                                {/* end::Section*/}
                                                            </div>
                                                            {/* end::Wrapper*/}
                                                            {/* begin::Value*/}
                                                            <span className="text-gray-800 fw-bold fs-6">$ 14.50</span>
                                                            {/* end::Value*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-4"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Wrapper*/}
                                                            <div className="d-flex align-items-center me-3">
                                                                {/* begin::Icon*/}
                                                                <img src="assets/media/stock/ecommerce/71.gif" className="me-4 w-50px" alt="" />
                                                                {/* end::Icon*/}
                                                                {/* begin::Section*/}
                                                                <div className="flex-grow-1">
                                                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Apple Watches</a>
                                                                    <span className="text-gray-400 fw-semibold d-block fs-7">Item: #XDG-6245</span>
                                                                </div>
                                                                {/* end::Section*/}
                                                            </div>
                                                            {/* end::Wrapper*/}
                                                            {/* begin::Value*/}
                                                            <span className="text-gray-800 fw-bold fs-6">$ 362.00</span>
                                                            {/* end::Value*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                        {/* begin::Separator*/}
                                                        <div className="separator separator-dashed my-4"></div>
                                                        {/* end::Separator*/}
                                                        {/* begin::Item*/}
                                                        <div className="d-flex flex-stack">
                                                            {/* begin::Wrapper*/}
                                                            <div className="d-flex align-items-center me-3">
                                                                {/* begin::Icon*/}
                                                                <img src="assets/media/stock/ecommerce/194.gif" className="me-4 w-50px" alt="" />
                                                                {/* end::Icon*/}
                                                                {/* begin::Section*/}
                                                                <div className="flex-grow-1">
                                                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0">Friendly Robot</a>
                                                                    <span className="text-gray-400 fw-semibold d-block fs-7">Item: #XDG-2347</span>
                                                                </div>
                                                                {/* end::Section*/}
                                                            </div>
                                                            {/* end::Wrapper*/}
                                                            {/* begin::Value*/}
                                                            <span className="text-gray-800 fw-bold fs-6">$ 48.00</span>
                                                            {/* end::Value*/}
                                                        </div>
                                                        {/* end::Item*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::List widget 17*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-xl-8 mb-5 mb-xl-10">
                                                {/* begin::Table widget 6*/}
                                                <div className="card card-flush h-xl-100">
                                                    {/* begin::Header*/}
                                                    <div className="card-header pt-7">
                                                        {/* begin::Title*/}
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span className="card-label fw-bold text-gray-800">Leading Agents by Category</span>
                                                            <span className="text-gray-400 mt-1 fw-semibold fs-6">Total 424,567 deliveries</span>
                                                        </h3>
                                                        {/* end::Title*/}
                                                        {/* begin::Toolbar*/}
                                                        <div className="card-toolbar">
                                                            <a href="apps/ecommerce/catalog/add-product.html" className="btn btn-sm btn-light">Add Product</a>
                                                        </div>
                                                        {/* end::Toolbar*/}
                                                    </div>
                                                    {/* end::Header*/}
                                                    {/* begin::Body*/}
                                                    <div className="card-body">
                                                        {/* begin::Nav*/}
                                                        <ul className="nav nav-pills nav-pills-custom mb-3">
                                                            {/* begin::Item*/}
                                                            <li className="nav-item mb-3 me-3 me-lg-6">
                                                                {/* begin::Link*/}
                                                                <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2 active" data-bs-toggle="pill" href="#kt_stats_widget_6_tab_1">
                                                                    {/* begin::Icon*/}
                                                                    <div className="nav-icon mb-3">
                                                                        <i className="ki-outline ki-truck fs-1"></i>
                                                                    </div>
                                                                    {/* end::Icon*/}
                                                                    {/* begin::Title*/}
                                                                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Van</span>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Bullet*/}
                                                                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                                                    {/* end::Bullet*/}
                                                                </a>
                                                                {/* end::Link*/}
                                                            </li>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <li className="nav-item mb-3 me-3 me-lg-6">
                                                                {/* begin::Link*/}
                                                                <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill" href="#kt_stats_widget_6_tab_2">
                                                                    {/* begin::Icon*/}
                                                                    <div className="nav-icon mb-3">
                                                                        <i className="ki-outline ki-bus fs-1"></i>
                                                                    </div>
                                                                    {/* end::Icon*/}
                                                                    {/* begin::Title*/}
                                                                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Train</span>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Bullet*/}
                                                                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                                                    {/* end::Bullet*/}
                                                                </a>
                                                                {/* end::Link*/}
                                                            </li>
                                                            {/* end::Item*/}
                                                            {/* begin::Item*/}
                                                            <li className="nav-item mb-3 me-3 me-lg-6">
                                                                {/* begin::Link*/}
                                                                <a className="nav-link btn btn-outline btn-flex btn-color-muted btn-active-color-primary flex-column overflow-hidden w-80px h-85px pt-5 pb-2" data-bs-toggle="pill" href="#kt_stats_widget_6_tab_3">
                                                                    {/* begin::Icon*/}
                                                                    <div className="nav-icon mb-3">
                                                                        <i className="ki-outline ki-logistic fs-1"></i>
                                                                    </div>
                                                                    {/* end::Icon*/}
                                                                    {/* begin::Title*/}
                                                                    <span className="nav-text text-gray-800 fw-bold fs-6 lh-1">Drone</span>
                                                                    {/* end::Title*/}
                                                                    {/* begin::Bullet*/}
                                                                    <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary"></span>
                                                                    {/* end::Bullet*/}
                                                                </a>
                                                                {/* end::Link*/}
                                                            </li>
                                                            {/* end::Item*/}
                                                        </ul>
                                                        {/* end::Nav*/}
                                                        {/* begin::Tab Content*/}
                                                        <div className="tab-content">
                                                            {/* begin::Tap pane*/}
                                                            <div className="tab-pane fade active show" id="kt_stats_widget_6_tab_1">
                                                                {/* begin::Table container*/}
                                                                <div className="table-responsive">
                                                                    {/* begin::Table*/}
                                                                    <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                                        {/* begin::Table head*/}
                                                                        <thead>
                                                                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                                            <th className="p-0 w-200px w-xxl-450px"></th>
                                                                            <th className="p-0 min-w-150px"></th>
                                                                            <th className="p-0 min-w-150px"></th>
                                                                            <th className="p-0 min-w-190px"></th>
                                                                            <th className="p-0 w-50px"></th>
                                                                        </tr>
                                                                        </thead>
                                                                        {/* end::Table head*/}
                                                                        {/* begin::Table body*/}
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-1.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brooklyn Simmons</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">1,240</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$5,400</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-2.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Annette Black</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">6,074</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$174,074</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-12.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">357</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$2,737</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-11.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Guy Hawkins</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">2,954</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$59,634</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-13.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Marvin McKinney</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">822</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$19,842</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                        {/* end::Table body*/}
                                                                    </table>
                                                                </div>
                                                                {/* end::Table*/}
                                                            </div>
                                                            {/* end::Tap pane*/}
                                                            {/* begin::Tap pane*/}
                                                            <div className="tab-pane fade" id="kt_stats_widget_6_tab_2">
                                                                {/* begin::Table container*/}
                                                                <div className="table-responsive">
                                                                    {/* begin::Table*/}
                                                                    <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                                        {/* begin::Table head*/}
                                                                        <thead>
                                                                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                                            <th className="p-0 w-200px w-xxl-450px"></th>
                                                                            <th className="p-0 min-w-150px"></th>
                                                                            <th className="p-0 min-w-150px"></th>
                                                                            <th className="p-0 min-w-190px"></th>
                                                                            <th className="p-0 w-50px"></th>
                                                                        </tr>
                                                                        </thead>
                                                                        {/* end::Table head*/}
                                                                        {/* begin::Table body*/}
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-11.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Guy Hawkins</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">2,954</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$59,634</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-13.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Marvin McKinney</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">822</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$19,842</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-1.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brooklyn Simmons</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">1,240</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$5,400</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-2.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Annette Black</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">6,074</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$174,074</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-12.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">357</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$2,737</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                        {/* end::Table body*/}
                                                                    </table>
                                                                </div>
                                                                {/* end::Table*/}
                                                            </div>
                                                            {/* end::Tap pane*/}
                                                            {/* begin::Tap pane*/}
                                                            <div className="tab-pane fade" id="kt_stats_widget_6_tab_3">
                                                                {/* begin::Table container*/}
                                                                <div className="table-responsive">
                                                                    {/* begin::Table*/}
                                                                    <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                                                        {/* begin::Table head*/}
                                                                        <thead>
                                                                        <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                                                            <th className="p-0 w-200px w-xxl-450px"></th>
                                                                            <th className="p-0 min-w-150px"></th>
                                                                            <th className="p-0 min-w-150px"></th>
                                                                            <th className="p-0 min-w-190px"></th>
                                                                            <th className="p-0 w-50px"></th>
                                                                        </tr>
                                                                        </thead>
                                                                        {/* end::Table head*/}
                                                                        {/* begin::Table body*/}
                                                                        <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-1.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Brooklyn Simmons</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">1,240</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$5,400</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-11.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Guy Hawkins</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">2,954</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$59,634</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-13.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Marvin McKinney</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">822</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$19,842</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-12.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Esther Howard</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">357</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$2,737</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex align-items-center">
                                                                                    <div className="symbol symbol-40px me-3">
                                                                                        <img src="assets/media/avatars/300-2.jpg" className="" alt="" />
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-start flex-column">
                                                                                        <a href="#" className="text-dark fw-bold text-hover-primary mb-1 fs-6">Annette Black</a>
                                                                                        <span className="text-muted fw-semibold d-block fs-7">Zuid Area</span>
                                                                                    </div>
                                                                                </div>
                                                                            </td>
                                                                            <td>
                                                                                <span className="text-gray-800 fw-bold d-block mb-1 fs-6">6,074</span>
                                                                                <span className="fw-semibold text-gray-400 d-block">Deliveries</span>
                                                                            </td>
                                                                            <td>
                                                                                <a href="#" className="text-dark fw-bold text-hover-primary d-block mb-1 fs-6">$174,074</a>
                                                                                <span className="text-muted fw-semibold d-block fs-7">Earnings</span>
                                                                            </td>
                                                                            <td>
                                                                                <div className="rating">
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                    <div className="rating-label checked">
                                                                                        <i className="ki-outline ki-star fs-6"></i>
                                                                                    </div>
                                                                                </div>
                                                                                <span className="text-muted fw-semibold d-block fs-7 mt-1">Rating</span>
                                                                            </td>
                                                                            <td className="text-end">
                                                                                <a href="#" className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px">
                                                                                    <i className="ki-outline ki-black-right fs-2 text-gray-500"></i>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                        </tbody>
                                                                        {/* end::Table body*/}
                                                                    </table>
                                                                </div>
                                                                {/* end::Table*/}
                                                            </div>
                                                            {/* end::Tap pane*/}
                                                        </div>
                                                        {/* end::Tab Content*/}
                                                    </div>
                                                    {/* end: Card Body*/}
                                                </div>
                                                {/* end::Table widget 6*/}
                                            </div>
                                            {/* end::Col*/}
                                        </div>
                                        {/* end::Row*/}
                                        {/* begin::Row*/}
                                        <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                                            {/* begin::Col*/}
                                            <div className="col-xxl-4">
                                                {/* begin::Engage widget 1*/}
                                                <div className="card h-md-100" dir="ltr">
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex flex-column flex-center">
                                                        {/* begin::Heading*/}
                                                        <div className="mb-2">
                                                            {/* begin::Title*/}
                                                            <h1 className="fw-semibold text-gray-800 text-center lh-lg">Try out our
                                                                <br />new
                                                                <span className="fw-bolder">Invoice Manager</span></h1>
                                                            {/* end::Title*/}
                                                            {/* begin::Illustration*/}
                                                            <div className="py-10 text-center">
                                                                <img src="assets/media/svg/illustrations/easy/2.svg" className="theme-light-show w-200px" alt="" />
                                                                <img src="assets/media/svg/illustrations/easy/2-dark.svg" className="theme-dark-show w-200px" alt="" />
                                                            </div>
                                                            {/* end::Illustration*/}
                                                        </div>
                                                        {/* end::Heading*/}
                                                        {/* begin::Links*/}
                                                        <div className="text-center mb-1">
                                                            {/* begin::Link*/}
                                                            <a className="btn btn-sm btn-primary me-2" data-bs-target="#kt_modal_new_address" data-bs-toggle="modal">Try Now</a>
                                                            {/* end::Link*/}
                                                            {/* begin::Link*/}
                                                            <a className="btn btn-sm btn-light" href="apps/user-management/users/view.html">Learn More</a>
                                                            {/* end::Link*/}
                                                        </div>
                                                        {/* end::Links*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Engage widget 1*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-xxl-8">
                                                {/* begin::Chart widget 38*/}
                                                <div className="card card-flush h-md-100">
                                                    {/* begin::Header*/}
                                                    <div className="card-header pt-7">
                                                        {/* begin::Title*/}
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span className="card-label fw-bold text-gray-800">LOI Issued by Departments</span>
                                                            <span className="text-gray-400 mt-1 fw-semibold fs-6">Counted in Millions</span>
                                                        </h3>
                                                        {/* end::Title*/}
                                                        {/* begin::Toolbar*/}
                                                        <div className="card-toolbar">
                                                            {/* begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                                                            <div data-kt-daterangepicker="true" data-kt-daterangepicker-opens="left" className="btn btn-sm btn-light d-flex align-items-center px-4">
                                                                {/* begin::Display range*/}
                                                                <div className="text-gray-600 fw-bold">Loading date range...</div>
                                                                {/* end::Display range*/}
                                                                <i className="ki-outline ki-calendar-8 fs-1 ms-2 me-0"></i>
                                                            </div>
                                                            {/* end::Daterangepicker*/}
                                                        </div>
                                                        {/* end::Toolbar*/}
                                                    </div>
                                                    {/* end::Header*/}
                                                    {/* begin::Body*/}
                                                    <div className="card-body d-flex align-items-end px-0 pt-3 pb-5">
                                                        {/* begin::Chart*/}
                                                        <div id="kt_charts_widget_38_chart" className="h-325px w-100 min-h-auto ps-4 pe-6"></div>
                                                        {/* end::Chart*/}
                                                    </div>
                                                    {/* end: Card Body*/}
                                                </div>
                                                {/* end::Chart widget 38*/}
                                            </div>
                                            {/* end::Col*/}
                                        </div>
                                        {/* end::Row*/}
                                        {/* begin::Row*/}
                                        <div className="row g-5 g-xl-10">
                                            {/* begin::Col*/}
                                            <div className="col-xxl-4">
                                                {/* begin::Chart widget 25*/}
                                                <div className="card card-flush h-md-100">
                                                    {/* begin::Header*/}
                                                    <div className="card-header pt-7">
                                                        {/* begin::Title*/}
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span className="card-label fw-bold text-dark">Warephase stats</span>
                                                            <span className="text-gray-400 pt-2 fw-semibold fs-6">8k social visitors</span>
                                                        </h3>
                                                        {/* end::Title*/}
                                                        {/* begin::Toolbar*/}
                                                        <div className="card-toolbar">
                                                            {/* begin::Nav*/}
                                                            <ul className="nav" id="kt_chart_widget_19_tabs">
                                                                <li className="nav-item">
                                                                    <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1" data-bs-toggle="tab" id="kt_chart_widget_25_tab_1" href="#kt_chart_widget_25_tab_content_1">2023</a>
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light active fw-bold px-4" data-bs-toggle="tab" id="kt_chart_widget_25_tab_2" href="#kt_chart_widget_25_tab_content_2">Month</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* end::Toolbar*/}
                                                    </div>
                                                    {/* end::Header*/}
                                                    {/* begin::Body*/}
                                                    <div className="card-body pt-0">
                                                        {/* begin::Tab Content (ishlamayabdi)*/}
                                                        <div className="tab-content">
                                                            {/* begin::Tap pane*/}
                                                            <div className="tab-pane fade" id="kt_chart_widget_25_tab_content_1">
                                                                {/* begin::Chart*/}
                                                                <div id="kt_charts_widget_25_chart_1" className="w-100 h-400px"></div>
                                                                {/* end::Chart*/}
                                                            </div>
                                                            {/* end::Tap pane*/}
                                                            {/* begin::Tap pane*/}
                                                            <div className="tab-pane fade active show" id="kt_chart_widget_25_tab_content_2">
                                                                {/* begin::Chart*/}
                                                                <div id="kt_charts_widget_25_chart_2" className="w-100 h-400px"></div>
                                                                {/* end::Chart*/}
                                                            </div>
                                                            {/* end::Tap pane*/}
                                                        </div>
                                                        {/* end::Tab Content*/}
                                                    </div>
                                                    {/* end::Body*/}
                                                </div>
                                                {/* end::Chart widget 25*/}
                                            </div>
                                            {/* end::Col*/}
                                            {/* begin::Col*/}
                                            <div className="col-xxl-8">
                                                {/* begin::Chart widget 24*/}
                                                <div className="card card-flush overflow-hidden h-md-100">
                                                    {/* begin::Header*/}
                                                    <div className="card-header py-5">
                                                        {/* begin::Title*/}
                                                        <h3 className="card-title align-items-start flex-column">
                                                            <span className="card-label fw-bold text-dark">Human Resources</span>
                                                            <span className="text-gray-400 mt-1 fw-semibold fs-6">Reports by states and ganders</span>
                                                        </h3>
                                                        {/* end::Title*/}
                                                        {/* begin::Toolbar*/}
                                                        <div className="card-toolbar">
                                                            {/* begin::Menu*/}
                                                            <button className="btn btn-icon btn-color-gray-400 btn-active-color-primary justify-content-end" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" data-kt-menu-overflow="true">
                                                                <i className="ki-outline ki-dots-square fs-1"></i>
                                                            </button>
                                                            {/* begin::Menu 2*/}
                                                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px" data-kt-menu="true">
                                                                {/* begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content fs-6 text-dark fw-bold px-3 py-4">Quick Actions</div>
                                                                </div>
                                                                {/* end::Menu item*/}
                                                                {/* begin::Menu separator*/}
                                                                <div className="separator mb-3 opacity-75"></div>
                                                                {/* end::Menu separator*/}
                                                                {/* begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">New Ticket</a>
                                                                </div>
                                                                {/* end::Menu item*/}
                                                                {/* begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">New Customer</a>
                                                                </div>
                                                                {/* end::Menu item*/}
                                                                {/* begin::Menu item*/}
                                                                <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                                                    {/* begin::Menu item*/}
                                                                    <a href="#" className="menu-link px-3">
                                                                        <span className="menu-title">New Group</span>
                                                                        <span className="menu-arrow"></span>
                                                                    </a>
                                                                    {/* end::Menu item*/}
                                                                    {/* begin::Menu sub*/}
                                                                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                                                        {/* begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Admin Group</a>
                                                                        </div>
                                                                        {/* end::Menu item*/}
                                                                        {/* begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Staff Group</a>
                                                                        </div>
                                                                        {/* end::Menu item*/}
                                                                        {/* begin::Menu item*/}
                                                                        <div className="menu-item px-3">
                                                                            <a href="#" className="menu-link px-3">Member Group</a>
                                                                        </div>
                                                                        {/* end::Menu item*/}
                                                                    </div>
                                                                    {/* end::Menu sub*/}
                                                                </div>
                                                                {/* end::Menu item*/}
                                                                {/* begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <a href="#" className="menu-link px-3">New Contact</a>
                                                                </div>
                                                                {/* end::Menu item*/}
                                                                {/* begin::Menu separator*/}
                                                                <div className="separator mt-3 opacity-75"></div>
                                                                {/* end::Menu separator*/}
                                                                {/* begin::Menu item*/}
                                                                <div className="menu-item px-3">
                                                                    <div className="menu-content px-3 py-3">
                                                                        <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                                                    </div>
                                                                </div>
                                                                {/* end::Menu item*/}
                                                            </div>
                                                            {/* end::Menu 2*/}
                                                            {/* end::Menu*/}
                                                        </div>
                                                        {/* end::Toolbar*/}
                                                    </div>
                                                    {/* end::Header*/}
                                                    {/* begin::Card body*/}
                                                    <div className="card-body pt-0">
                                                        {/* begin::Chart*/}
                                                        <div id="kt_charts_widget_24" className="min-h-auto" style={{height: "400px"}}></div>
                                                        {/* end::Chart*/}
                                                    </div>
                                                    {/* end::Card body*/}
                                                </div>
                                                {/* end::Chart widget 24*/}
                                            </div>
                                            {/* end::Col*/}
                                        </div>
                                        {/* end::Row*/}
                                    </div>
                                    {/* end::Content container*/}
                                </div>
                                {/* end::Content*/}
                            </div>
                            {/* end::Content wrapper*/}
                            {/* begin::Footer*/}
                            <div id="kt_app_footer" className="app-footer">
                                {/* begin::Footer container*/}
                                <div className="app-container container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3">
                                    {/* begin::Copyright*/}
                                    <div className="text-dark order-2 order-md-1">
                                        <span className="text-muted fw-semibold me-1">2023&copy;</span>
                                        <a href="https://keenthemes.com" target="_blank" className="text-gray-800 text-hover-primary">Keenthemes</a>
                                    </div>
                                    {/* end::Copyright*/}
                                    {/* begin::Menu*/}
                                    <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                                        <li className="menu-item">
                                            <a href="https://keenthemes.com" target="_blank" className="menu-link px-2">About</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="https://devs.keenthemes.com" target="_blank" className="menu-link px-2">Support</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="https://1.envato.market/EA4JP" target="_blank" className="menu-link px-2">Purchase</a>
                                        </li>
                                    </ul>
                                    {/* end::Menu*/}
                                </div>
                                {/* end::Footer container*/}
                            </div>
                            {/* end::Footer*/}
                        </div>
                        {/* end:::Main*/}
                    </div>
                    {/* end::Wrapper*/}
                </div>
                {/* end::Page*/}
            </div>
            {/* end::App*/}
            {/* begin::Drawers*/}
            {/* begin::Activities drawer*/}
            <div id="kt_activities" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="activities" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '900px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_activities_toggle" data-kt-drawer-close="#kt_activities_close">
                <div className="card shadow-none border-0 rounded-0">
                    {/* begin::Header*/}
                    <div className="card-header" id="kt_activities_header">
                        <h3 className="card-title fw-bold text-dark">Activity Logs</h3>
                        <div className="card-toolbar">
                            <button type="button" className="btn btn-sm btn-icon btn-active-light-primary me-n5" id="kt_activities_close">
                                <i className="ki-outline ki-cross fs-1"></i>
                            </button>
                        </div>
                    </div>
                    {/* end::Header*/}
                    {/* begin::Body*/}
                    <div className="card-body position-relative" id="kt_activities_body">
                        {/* begin::Content*/}
                        <div id="kt_activities_scroll" className="position-relative scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_activities_body" data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer" data-kt-scroll-offset="5px">
                            {/* begin::Timeline items*/}
                            <div className="timeline">
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px me-4">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-message-text-2 fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                        {/* begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                            {/* begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">There are 2 new tasks for you in “AirPlus Mobile App” project:</div>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                {/* begin::Info*/}
                                                <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                {/* end::Info*/}
                                                {/* begin::User*/}
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                    <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                </div>
                                                {/* end::User*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                        {/* begin::Timeline details*/}
                                        <div className="overflow-auto pb-5">
                                            {/* begin::Record*/}
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                                {/* begin::Title*/}
                                                <a href="apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Meeting with customer</a>
                                                {/* end::Title*/}
                                                {/* begin::Label*/}
                                                <div className="min-w-175px pe-2">
                                                    <span className="badge badge-light text-muted">Application Design</span>
                                                </div>
                                                {/* end::Label*/}
                                                {/* begin::Users*/}
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                                    {/* begin::User*/}
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <img src="assets/media/avatars/300-2.jpg" alt="img" />
                                                    </div>
                                                    {/* end::User*/}
                                                    {/* begin::User*/}
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                    </div>
                                                    {/* end::User*/}
                                                    {/* begin::User*/}
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">A</div>
                                                    </div>
                                                    {/* end::User*/}
                                                </div>
                                                {/* end::Users*/}
                                                {/* begin::Progress*/}
                                                <div className="min-w-125px pe-2">
                                                    <span className="badge badge-light-primary">In Progress</span>
                                                </div>
                                                {/* end::Progress*/}
                                                {/* begin::Action*/}
                                                <a href="apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                                                {/* end::Action*/}
                                            </div>
                                            {/* end::Record*/}
                                            {/* begin::Record*/}
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                                {/* begin::Title*/}
                                                <a href="apps/projects/project.html" className="fs-5 text-dark text-hover-primary fw-semibold w-375px min-w-200px">Project Delivery Preparation</a>
                                                {/* end::Title*/}
                                                {/* begin::Label*/}
                                                <div className="min-w-175px">
                                                    <span className="badge badge-light text-muted">CRM System Development</span>
                                                </div>
                                                {/* end::Label*/}
                                                {/* begin::Users*/}
                                                <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                                    {/* begin::User*/}
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <img src="assets/media/avatars/300-20.jpg" alt="img" />
                                                    </div>
                                                    {/* end::User*/}
                                                    {/* begin::User*/}
                                                    <div className="symbol symbol-circle symbol-25px">
                                                        <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">B</div>
                                                    </div>
                                                    {/* end::User*/}
                                                </div>
                                                {/* end::Users*/}
                                                {/* begin::Progress*/}
                                                <div className="min-w-125px">
                                                    <span className="badge badge-light-success">Completed</span>
                                                </div>
                                                {/* end::Progress*/}
                                                {/* begin::Action*/}
                                                <a href="apps/projects/project.html" className="btn btn-sm btn-light btn-active-light-primary">View</a>
                                                {/* end::Action*/}
                                            </div>
                                            {/* end::Record*/}
                                        </div>
                                        {/* end::Timeline details*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-flag fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n2">
                                        {/* begin::Timeline heading*/}
                                        <div className="overflow-auto pe-3">
                                            {/* begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">Invitation for crafting engaging designs that speak human workshop</div>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                {/* begin::Info*/}
                                                <div className="text-muted me-2 fs-7">Sent at 4:23 PM by</div>
                                                {/* end::Info*/}
                                                {/* begin::User*/}
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Alan Nilson">
                                                    <img src="assets/media/avatars/300-1.jpg" alt="img" />
                                                </div>
                                                {/* end::User*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-disconnect fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                        {/* begin::Timeline heading*/}
                                        <div className="mb-5 pe-3">
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2">3 New Incoming Project Files:</a>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                {/* begin::Info*/}
                                                <div className="text-muted me-2 fs-7">Sent at 10:30 PM by</div>
                                                {/* end::Info*/}
                                                {/* begin::User*/}
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Jan Hummer">
                                                    <img src="assets/media/avatars/300-23.jpg" alt="img" />
                                                </div>
                                                {/* end::User*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                        {/* begin::Timeline details*/}
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                                {/* begin::Item*/}
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    {/* begin::Icon*/}
                                                    <img alt="" className="w-30px me-3" src="assets/media/svg/files/pdf.svg" />
                                                    {/* end::Icon*/}
                                                    {/* begin::Info*/}
                                                    <div className="ms-1 fw-semibold">
                                                        {/* begin::Desc*/}
                                                        <a href="apps/projects/project.html" className="fs-6 text-hover-primary fw-bold">Finance KPI App Guidelines</a>
                                                        {/* end::Desc*/}
                                                        {/* begin::Number*/}
                                                        <div className="text-gray-400">1.9mb</div>
                                                        {/* end::Number*/}
                                                    </div>
                                                    {/* begin::Info*/}
                                                </div>
                                                {/* end::Item*/}
                                                {/* begin::Item*/}
                                                <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                                    {/* begin::Icon*/}
                                                    <img alt="apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/doc.svg" />
                                                    {/* end::Icon*/}
                                                    {/* begin::Info*/}
                                                    <div className="ms-1 fw-semibold">
                                                        {/* begin::Desc*/}
                                                        <a href="#" className="fs-6 text-hover-primary fw-bold">Client UAT Testing Results</a>
                                                        {/* end::Desc*/}
                                                        {/* begin::Number*/}
                                                        <div className="text-gray-400">18kb</div>
                                                        {/* end::Number*/}
                                                    </div>
                                                    {/* end::Info*/}
                                                </div>
                                                {/* end::Item*/}
                                                {/* begin::Item*/}
                                                <div className="d-flex flex-aligns-center">
                                                    {/* begin::Icon*/}
                                                    <img alt="apps/projects/project.html" className="w-30px me-3" src="assets/media/svg/files/css.svg" />
                                                    {/* end::Icon*/}
                                                    {/* begin::Info*/}
                                                    <div className="ms-1 fw-semibold">
                                                        {/* begin::Desc*/}
                                                        <a href="#" className="fs-6 text-hover-primary fw-bold">Finance Reports</a>
                                                        {/* end::Desc*/}
                                                        {/* begin::Number*/}
                                                        <div className="text-gray-400">20mb</div>
                                                        {/* end::Number*/}
                                                    </div>
                                                    {/* end::Icon*/}
                                                </div>
                                                {/* end::Item*/}
                                            </div>
                                        </div>
                                        {/* end::Timeline details*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-abstract-26 fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                        {/* begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                            {/* begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">Task
                                                <a href="#" className="text-primary fw-bold me-1">#45890</a>merged with
                                                <a href="#" className="text-primary fw-bold me-1">#45890</a>in “Ads Pro Admin Dashboard project:</div>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                {/* begin::Info*/}
                                                <div className="text-muted me-2 fs-7">Initiated at 4:23 PM by</div>
                                                {/* end::Info*/}
                                                {/* begin::User*/}
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Nina Nilson">
                                                    <img src="assets/media/avatars/300-14.jpg" alt="img" />
                                                </div>
                                                {/* end::User*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-pencil fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                        {/* begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                            {/* begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">3 new application design concepts added:</div>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                {/* begin::Info*/}
                                                <div className="text-muted me-2 fs-7">Created at 4:23 PM by</div>
                                                {/* end::Info*/}
                                                {/* begin::User*/}
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Marcus Dotson">
                                                    <img src="assets/media/avatars/300-2.jpg" alt="img" />
                                                </div>
                                                {/* end::User*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                        {/* begin::Timeline details*/}
                                        <div className="overflow-auto pb-5">
                                            <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                                {/* begin::Item*/}
                                                <div className="overlay me-10">
                                                    {/* begin::Image*/}
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-29.jpg" />
                                                    </div>
                                                    {/* end::Image*/}
                                                    {/* begin::Link*/}
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                    {/* end::Link*/}
                                                </div>
                                                {/* end::Item*/}
                                                {/* begin::Item*/}
                                                <div className="overlay me-10">
                                                    {/* begin::Image*/}
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-31.jpg" />
                                                    </div>
                                                    {/* end::Image*/}
                                                    {/* begin::Link*/}
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                    {/* end::Link*/}
                                                </div>
                                                {/* end::Item*/}
                                                {/* begin::Item*/}
                                                <div className="overlay">
                                                    {/* begin::Image*/}
                                                    <div className="overlay-wrapper">
                                                        <img alt="img" className="rounded w-150px" src="assets/media/stock/600x400/img-40.jpg" />
                                                    </div>
                                                    {/* end::Image*/}
                                                    {/* begin::Link*/}
                                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                                        <a href="#" className="btn btn-sm btn-primary btn-shadow">Explore</a>
                                                    </div>
                                                    {/* end::Link*/}
                                                </div>
                                                {/* end::Item*/}
                                            </div>
                                        </div>
                                        {/* end::Timeline details*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-sms fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                        {/* begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                            {/* begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">New case
                                                <a href="#" className="text-primary fw-bold me-1">#67890</a>is assigned to you in Multi-platform Database Design project</div>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="overflow-auto pb-5">
                                                {/* begin::Wrapper*/}
                                                <div className="d-flex align-items-center mt-1 fs-6">
                                                    {/* begin::Info*/}
                                                    <div className="text-muted me-2 fs-7">Added at 4:23 PM by</div>
                                                    {/* end::Info*/}
                                                    {/* begin::User*/}
                                                    <a href="#" className="text-primary fw-bold me-1">Alice Tan</a>
                                                    {/* end::User*/}
                                                </div>
                                                {/* end::Wrapper*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-pencil fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mb-10 mt-n1">
                                        {/* begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                            {/* begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">You have received a new order:</div>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                {/* begin::Info*/}
                                                <div className="text-muted me-2 fs-7">Placed at 5:05 AM by</div>
                                                {/* end::Info*/}
                                                {/* begin::User*/}
                                                <div className="symbol symbol-circle symbol-25px" data-bs-toggle="tooltip" data-bs-boundary="window" data-bs-placement="top" title="Robert Rich">
                                                    <img src="assets/media/avatars/300-4.jpg" alt="img" />
                                                </div>
                                                {/* end::User*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                        {/* begin::Timeline details*/}
                                        <div className="overflow-auto pb-5">
                                            {/* begin::Notice*/}
                                            <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                                                {/* begin::Icon*/}
                                                <i className="ki-outline ki-devices-2 fs-2tx text-primary me-4"></i>
                                                {/* end::Icon*/}
                                                {/* begin::Wrapper*/}
                                                <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                                    {/* begin::Content*/}
                                                    <div className="mb-3 mb-md-0 fw-semibold">
                                                        <h4 className="text-gray-900 fw-bold">Database Backup Process Completed!</h4>
                                                        <div className="fs-6 text-gray-700 pe-7">Login into Admin Dashboard to make sure the data integrity is OK</div>
                                                    </div>
                                                    {/* end::Content*/}
                                                    {/* begin::Action*/}
                                                    <a href="#" className="btn btn-primary px-6 align-self-center text-nowrap">Proceed</a>
                                                    {/* end::Action*/}
                                                </div>
                                                {/* end::Wrapper*/}
                                            </div>
                                            {/* end::Notice*/}
                                        </div>
                                        {/* end::Timeline details*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                                {/* begin::Timeline item*/}
                                <div className="timeline-item">
                                    {/* begin::Timeline line*/}
                                    <div className="timeline-line w-40px"></div>
                                    {/* end::Timeline line*/}
                                    {/* begin::Timeline icon*/}
                                    <div className="timeline-icon symbol symbol-circle symbol-40px">
                                        <div className="symbol-label bg-light">
                                            <i className="ki-outline ki-basket fs-2 text-gray-500"></i>
                                        </div>
                                    </div>
                                    {/* end::Timeline icon*/}
                                    {/* begin::Timeline content*/}
                                    <div className="timeline-content mt-n1">
                                        {/* begin::Timeline heading*/}
                                        <div className="pe-3 mb-5">
                                            {/* begin::Title*/}
                                            <div className="fs-5 fw-semibold mb-2">New order
                                                <a href="#" className="text-primary fw-bold me-1">#67890</a>is placed for Workshow Planning & Budget Estimation</div>
                                            {/* end::Title*/}
                                            {/* begin::Description*/}
                                            <div className="d-flex align-items-center mt-1 fs-6">
                                                {/* begin::Info*/}
                                                <div className="text-muted me-2 fs-7">Placed at 4:23 PM by</div>
                                                {/* end::Info*/}
                                                {/* begin::User*/}
                                                <a href="#" className="text-primary fw-bold me-1">Jimmy Bold</a>
                                                {/* end::User*/}
                                            </div>
                                            {/* end::Description*/}
                                        </div>
                                        {/* end::Timeline heading*/}
                                    </div>
                                    {/* end::Timeline content*/}
                                </div>
                                {/* end::Timeline item*/}
                            </div>
                            {/* end::Timeline items*/}
                        </div>
                        {/* end::Content*/}
                    </div>
                    {/* end::Body*/}
                    {/* begin::Footer*/}
                    <div className="card-footer py-5 text-center" id="kt_activities_footer">
                        <a href="pages/user-profile/activity.html" className="btn btn-bg-body text-primary">View All Activities
                            <i className="ki-outline ki-arrow-right fs-3 text-primary"></i></a>
                    </div>
                    {/* end::Footer*/}
                </div>
            </div>
            {/* end::Activities drawer*/}
            {/* begin::Chat drawer*/}
            <div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
                {/* begin::Messenger*/}
                <div className="card w-100 border-0 rounded-0" id="kt_drawer_chat_messenger">
                    {/* begin::Card header*/}
                    <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
                        {/* begin::Title*/}
                        <div className="card-title">
                            {/* begin::User*/}
                            <div className="d-flex justify-content-center flex-column me-3">
                                <a href="#" className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
                                {/* begin::Info*/}
                                <div className="mb-0 lh-1">
                                    <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                                    <span className="fs-7 fw-semibold text-muted">Active</span>
                                </div>
                                {/* end::Info*/}
                            </div>
                            {/* end::User*/}
                        </div>
                        {/* end::Title*/}
                        {/* begin::Card toolbar*/}
                        <div className="card-toolbar">
                            {/* begin::Menu*/}
                            <div className="me-0">
                                <button className="btn btn-sm btn-icon btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                    <i className="ki-outline ki-dots-square fs-2"></i>
                                </button>
                                {/* begin::Menu 3*/}
                                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3" data-kt-menu="true">
                                    {/* begin::Heading*/}
                                    <div className="menu-item px-3">
                                        <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
                                    </div>
                                    {/* end::Heading*/}
                                    {/* begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
                                    </div>
                                    {/* end::Menu item*/}
                                    {/* begin::Menu item*/}
                                    <div className="menu-item px-3">
                                        <a href="#" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
                                            <span className="ms-2" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation">
										<i className="ki-outline ki-information fs-7"></i>
									</span></a>
                                    </div>
                                    {/* end::Menu item*/}
                                    {/* begin::Menu item*/}
                                    <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start">
                                        <a href="#" className="menu-link px-3">
                                            <span className="menu-title">Groups</span>
                                            <span className="menu-arrow"></span>
                                        </a>
                                        {/* begin::Menu sub*/}
                                        <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
                                            </div>
                                            {/* end::Menu item*/}
                                            {/* begin::Menu item*/}
                                            <div className="menu-item px-3">
                                                <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                            </div>
                                            {/* end::Menu item*/}
                                        </div>
                                        {/* end::Menu sub*/}
                                    </div>
                                    {/* end::Menu item*/}
                                    {/* begin::Menu item*/}
                                    <div className="menu-item px-3 my-1">
                                        <a href="#" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                                    </div>
                                    {/* end::Menu item*/}
                                </div>
                                {/* end::Menu 3*/}
                            </div>
                            {/* end::Menu*/}
                            {/* begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-color-primary" id="kt_drawer_chat_close">
                                <i className="ki-outline ki-cross-square fs-2"></i>
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* end::Card toolbar*/}
                    </div>
                    {/* end::Card header*/}
                    {/* begin::Card body*/}
                    <div className="card-body" id="kt_drawer_chat_messenger_body">
                        {/* begin::Messages*/}
                        <div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
                            {/* begin::Message(in)*/}
                            <div className="d-flex justify-content-start mb-10">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-start">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                        {/* begin::Details*/}
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">2 mins</span>
                                        </div>
                                        {/* end::Details*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(in)*/}
                            {/* begin::Message(out)*/}
                            <div className="d-flex justify-content-end mb-10">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-end">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Details*/}
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">5 mins</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(out)*/}
                            {/* begin::Message(in)*/}
                            <div className="d-flex justify-content-start mb-10">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-start">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                        {/* begin::Details*/}
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">1 Hour</span>
                                        </div>
                                        {/* end::Details*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(in)*/}
                            {/* begin::Message(out)*/}
                            <div className="d-flex justify-content-end mb-10">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-end">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Details*/}
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">2 Hours</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(out)*/}
                            {/* begin::Message(in)*/}
                            <div className="d-flex justify-content-start mb-10">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-start">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                        {/* begin::Details*/}
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">3 Hours</span>
                                        </div>
                                        {/* end::Details*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
                                        <a href="https://keenthemes.com">Keenthemes.com</a></div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(in)*/}
                            {/* begin::Message(out)*/}
                            <div className="d-flex justify-content-end mb-10">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-end">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Details*/}
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">4 Hours</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(out)*/}
                            {/* begin::Message(in)*/}
                            <div className="d-flex justify-content-start mb-10">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-start">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                        {/* begin::Details*/}
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">5 Hours</span>
                                        </div>
                                        {/* end::Details*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(in)*/}
                            {/* begin::Message(template for out)*/}
                            <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-end">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Details*/}
                                        <div className="me-3">
                                            <span className="text-muted fs-7 mb-1">Just now</span>
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">You</a>
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end" data-kt-element="message-text"></div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(template for out)*/}
                            {/* begin::Message(template for in)*/}
                            <div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                                {/* begin::Wrapper*/}
                                <div className="d-flex flex-column align-items-start">
                                    {/* begin::User*/}
                                    <div className="d-flex align-items-center mb-2">
                                        {/* begin::Avatar*/}
                                        <div className="symbol symbol-35px symbol-circle">
                                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                        </div>
                                        {/* end::Avatar*/}
                                        {/* begin::Details*/}
                                        <div className="ms-3">
                                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary me-1">Brian Cox</a>
                                            <span className="text-muted fs-7 mb-1">Just now</span>
                                        </div>
                                        {/* end::Details*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::Text*/}
                                    <div className="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
                                    {/* end::Text*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Message(template for in)*/}
                        </div>
                        {/* end::Messages*/}
                    </div>
                    {/* end::Card body*/}
                    {/* begin::Card footer*/}
                    <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
                        {/* begin::Input*/}
                        <textarea className="form-control form-control-flush mb-3" rows={1} data-kt-element="input" placeholder="Type a message"></textarea>
                        {/* end::Input*/}
                        {/* begin:Toolbar*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Actions*/}
                            <div className="d-flex align-items-center me-2">
                                <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                    <i className="ki-outline ki-paper-clip fs-3"></i>
                                </button>
                                <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                                    <i className="ki-outline ki-cloud-add fs-3"></i>
                                </button>
                            </div>
                            {/* end::Actions*/}
                            {/* begin::Send*/}
                            <button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
                            {/* end::Send*/}
                        </div>
                        {/* end::Toolbar*/}
                    </div>
                    {/* end::Card footer*/}
                </div>
                {/* end::Messenger*/}
            </div>
            {/* end::Chat drawer*/}
            {/* begin::Chat drawer*/}
            <div id="kt_shopping_cart" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="cart" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle" data-kt-drawer-close="#kt_drawer_shopping_cart_close">
                {/* begin::Messenger*/}
                <div className="card card-flush w-100 rounded-0">
                    {/* begin::Card header*/}
                    <div className="card-header">
                        {/* begin::Title*/}
                        <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
                        {/* end::Title*/}
                        {/* begin::Card toolbar*/}
                        <div className="card-toolbar">
                            {/* begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_shopping_cart_close">
                                <i className="ki-outline ki-cross fs-2"></i>
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* end::Card toolbar*/}
                    </div>
                    {/* end::Card header*/}
                    {/* begin::Card body*/}
                    <div className="card-body hover-scroll-overlay-y h-400px pt-5">
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Wrapper*/}
                            <div className="d-flex flex-column me-3">
                                {/* begin::Section*/}
                                <div className="mb-3">
                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Iblender</a>
                                    <span className="text-gray-400 fw-semibold d-block">The best kitchen gadget in 2022</span>
                                </div>
                                {/* end::Section*/}
                                {/* begin::Section*/}
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-outline ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-outline ki-plus fs-4"></i>
                                    </a>
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Wrapper*/}
                            {/* begin::Pic*/}
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="assets/media/stock/600x400/img-1.jpg" alt="" />
                            </div>
                            {/* end::Pic*/}
                        </div>
                        {/* end::Item*/}
                        {/* begin::Separator*/}
                        <div className="separator separator-dashed my-6"></div>
                        {/* end::Separator*/}
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Wrapper*/}
                            <div className="d-flex flex-column me-3">
                                {/* begin::Section*/}
                                <div className="mb-3">
                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">SmartCleaner</a>
                                    <span className="text-gray-400 fw-semibold d-block">Smart tool for cooking</span>
                                </div>
                                {/* end::Section*/}
                                {/* begin::Section*/}
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-outline ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-outline ki-plus fs-4"></i>
                                    </a>
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Wrapper*/}
                            {/* begin::Pic*/}
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="assets/media/stock/600x400/img-3.jpg" alt="" />
                            </div>
                            {/* end::Pic*/}
                        </div>
                        {/* end::Item*/}
                        {/* begin::Separator*/}
                        <div className="separator separator-dashed my-6"></div>
                        {/* end::Separator*/}
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Wrapper*/}
                            <div className="d-flex flex-column me-3">
                                {/* begin::Section*/}
                                <div className="mb-3">
                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">CameraMaxr</a>
                                    <span className="text-gray-400 fw-semibold d-block">Professional camera for edge</span>
                                </div>
                                {/* end::Section*/}
                                {/* begin::Section*/}
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-outline ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-outline ki-plus fs-4"></i>
                                    </a>
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Wrapper*/}
                            {/* begin::Pic*/}
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="assets/media/stock/600x400/img-8.jpg" alt="" />
                            </div>
                            {/* end::Pic*/}
                        </div>
                        {/* end::Item*/}
                        {/* begin::Separator*/}
                        <div className="separator separator-dashed my-6"></div>
                        {/* end::Separator*/}
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Wrapper*/}
                            <div className="d-flex flex-column me-3">
                                {/* begin::Section*/}
                                <div className="mb-3">
                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                                    <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                                </div>
                                {/* end::Section*/}
                                {/* begin::Section*/}
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-outline ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-outline ki-plus fs-4"></i>
                                    </a>
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Wrapper*/}
                            {/* begin::Pic*/}
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="assets/media/stock/600x400/img-26.jpg" alt="" />
                            </div>
                            {/* end::Pic*/}
                        </div>
                        {/* end::Item*/}
                        {/* begin::Separator*/}
                        <div className="separator separator-dashed my-6"></div>
                        {/* end::Separator*/}
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Wrapper*/}
                            <div className="d-flex flex-column me-3">
                                {/* begin::Section*/}
                                <div className="mb-3">
                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">MotionWire</a>
                                    <span className="text-gray-400 fw-semibold d-block">Perfect animation tool</span>
                                </div>
                                {/* end::Section*/}
                                {/* begin::Section*/}
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-outline ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-outline ki-plus fs-4"></i>
                                    </a>
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Wrapper*/}
                            {/* begin::Pic*/}
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="assets/media/stock/600x400/img-21.jpg" alt="" />
                            </div>
                            {/* end::Pic*/}
                        </div>
                        {/* end::Item*/}
                        {/* begin::Separator*/}
                        <div className="separator separator-dashed my-6"></div>
                        {/* end::Separator*/}
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Wrapper*/}
                            <div className="d-flex flex-column me-3">
                                {/* begin::Section*/}
                                <div className="mb-3">
                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">Samsung</a>
                                    <span className="text-gray-400 fw-semibold d-block">Profile info,Timeline etc</span>
                                </div>
                                {/* end::Section*/}
                                {/* begin::Section*/}
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-outline ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-outline ki-plus fs-4"></i>
                                    </a>
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Wrapper*/}
                            {/* begin::Pic*/}
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="assets/media/stock/600x400/img-34.jpg" alt="" />
                            </div>
                            {/* end::Pic*/}
                        </div>
                        {/* end::Item*/}
                        {/* begin::Separator*/}
                        <div className="separator separator-dashed my-6"></div>
                        {/* end::Separator*/}
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            {/* begin::Wrapper*/}
                            <div className="d-flex flex-column me-3">
                                {/* begin::Section*/}
                                <div className="mb-3">
                                    <a href="apps/ecommerce/sales/details.html" className="text-gray-800 text-hover-primary fs-4 fw-bold">$D Printer</a>
                                    <span className="text-gray-400 fw-semibold d-block">Manfactoring unique objekts</span>
                                </div>
                                {/* end::Section*/}
                                {/* begin::Section*/}
                                <div className="d-flex align-items-center">
                                    <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                                    <span className="text-muted mx-2">for</span>
                                    <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2">
                                        <i className="ki-outline ki-minus fs-4"></i>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-light-success btn-icon w-25px h-25px">
                                        <i className="ki-outline ki-plus fs-4"></i>
                                    </a>
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Wrapper*/}
                            {/* begin::Pic*/}
                            <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                                <img src="assets/media/stock/600x400/img-27.jpg" alt="" />
                            </div>
                            {/* end::Pic*/}
                        </div>
                        {/* end::Item*/}
                    </div>
                    {/* end::Card body*/}
                    {/* begin::Card footer*/}
                    <div className="card-footer">
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            <span className="fw-bold text-gray-600">Total</span>
                            <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
                        </div>
                        {/* end::Item*/}
                        {/* begin::Item*/}
                        <div className="d-flex flex-stack">
                            <span className="fw-bold text-gray-600">Sub total</span>
                            <span className="text-primary fw-bolder fs-5">$ 246.35</span>
                        </div>
                        {/* end::Item*/}
                        {/* end::Action*/}
                        <div className="d-flex justify-content-end mt-9">
                            <a href="#" className="btn btn-primary d-flex justify-content-end">Pleace Order</a>
                        </div>
                        {/* end::Action*/}
                    </div>
                    {/* end::Card footer*/}
                </div>
                {/* end::Messenger*/}
            </div>
            {/* end::Chat drawer*/}
            {/* end::Drawers*/}
            {/* begin::Scrolltop*/}
            <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
                <i className="ki-outline ki-arrow-up"></i>
            </div>
            {/* end::Scrolltop*/}
            {/* begin::Modals*/}
            {/* begin::Modal - Upgrade plan*/}
            <div className="modal fade" id="kt_modal_upgrade_plan" tabIndex={-1} aria-hidden="true">
                {/* begin::Modal dialog*/}
                <div className="modal-dialog modal-xl">
                    {/* begin::Modal content*/}
                    <div className="modal-content rounded">
                        {/* begin::Modal header*/}
                        <div className="modal-header justify-content-end border-0 pb-0">
                            {/* begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-outline ki-cross fs-1"></i>
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* end::Modal header*/}
                        {/* begin::Modal body*/}
                        <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
                            {/* begin::Heading*/}
                            <div className="mb-13 text-center">
                                <h1 className="mb-3">Upgrade a Plan</h1>
                                <div className="text-muted fw-semibold fs-5">If you need more info, please check
                                    <a href="#" className="link-primary fw-bold">Pricing Guidelines</a>.</div>
                            </div>
                            {/* end::Heading*/}
                            {/* begin::Plans*/}
                            <div className="d-flex flex-column">
                                {/* begin::Nav group*/}
                                <div className="nav-group nav-group-outline mx-auto" data-kt-buttons="true">
                                    <button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active" data-kt-plan="month">Monthly</button>
                                    <button className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3" data-kt-plan="annual">Annual</button>
                                </div>
                                {/* end::Nav group*/}
                                {/* begin::Row*/}
                                <div className="row mt-10">
                                    {/* begin::Col*/}
                                    <div className="col-lg-6 mb-10 mb-lg-0">
                                        {/* begin::Tabs*/}
                                        <div className="nav flex-column">
                                            {/* begin::Tab link*/}
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_startup">
                                                {/* end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/* begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" defaultChecked={true} value="startup" />
                                                    </div>
                                                    {/* end::Radio*/}
                                                    {/* begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Startup</div>
                                                        <div className="fw-semibold opacity-75">Best for startups</div>
                                                    </div>
                                                    {/* end::Info*/}
                                                </div>
                                                {/* end::Description*/}
                                                {/* begin::Price*/}
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span className="fs-3x fw-bold" data-kt-plan-price-month="39" data-kt-plan-price-annual="399">39</span>
                                                    <span className="fs-7 opacity-50">/
												<span data-kt-element="period">Mon</span></span>
                                                </div>
                                                {/* end::Price*/}
                                            </label>
                                            {/* end::Tab link*/}
                                            {/* begin::Tab link*/}
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_advanced">
                                                {/* end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/* begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" value="advanced" />
                                                    </div>
                                                    {/* end::Radio*/}
                                                    {/* begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Advanced</div>
                                                        <div className="fw-semibold opacity-75">Best for 100+ team size</div>
                                                    </div>
                                                    {/* end::Info*/}
                                                </div>
                                                {/* end::Description*/}
                                                {/* begin::Price*/}
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span className="fs-3x fw-bold" data-kt-plan-price-month="339" data-kt-plan-price-annual="3399">339</span>
                                                    <span className="fs-7 opacity-50">/
												<span data-kt-element="period">Mon</span></span>
                                                </div>
                                                {/* end::Price*/}
                                            </label>
                                            {/* end::Tab link*/}
                                            {/* begin::Tab link*/}
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_enterprise">
                                                {/* end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/* begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" value="enterprise" />
                                                    </div>
                                                    {/* end::Radio*/}
                                                    {/* begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Enterprise
                                                            <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">Popular</span></div>
                                                        <div className="fw-semibold opacity-75">Best value for 1000+ team</div>
                                                    </div>
                                                    {/* end::Info*/}
                                                </div>
                                                {/* end::Description*/}
                                                {/* begin::Price*/}
                                                <div className="ms-5">
                                                    <span className="mb-2">$</span>
                                                    <span className="fs-3x fw-bold" data-kt-plan-price-month="999" data-kt-plan-price-annual="9999">999</span>
                                                    <span className="fs-7 opacity-50">/
												<span data-kt-element="period">Mon</span></span>
                                                </div>
                                                {/* end::Price*/}
                                            </label>
                                            {/* end::Tab link*/}
                                            {/* begin::Tab link*/}
                                            <label className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6" data-bs-toggle="tab" data-bs-target="#kt_upgrade_plan_custom">
                                                {/* end::Description*/}
                                                <div className="d-flex align-items-center me-2">
                                                    {/* begin::Radio*/}
                                                    <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                                                        <input className="form-check-input" type="radio" name="plan" value="custom" />
                                                    </div>
                                                    {/* end::Radio*/}
                                                    {/* begin::Info*/}
                                                    <div className="flex-grow-1">
                                                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">Custom</div>
                                                        <div className="fw-semibold opacity-75">Requet a custom license</div>
                                                    </div>
                                                    {/* end::Info*/}
                                                </div>
                                                {/* end::Description*/}
                                                {/* begin::Price*/}
                                                <div className="ms-5">
                                                    <a href="#" className="btn btn-sm btn-success">Contact Us</a>
                                                </div>
                                                {/* end::Price*/}
                                            </label>
                                            {/* end::Tab link*/}
                                        </div>
                                        {/* end::Tabs*/}
                                    </div>
                                    {/* end::Col*/}
                                    {/* begin::Col*/}
                                    <div className="col-lg-6">
                                        {/* begin::Tab content*/}
                                        <div className="tab-content rounded h-100 bg-light p-10">
                                            {/* begin::Tab Pane*/}
                                            <div className="tab-pane fade show active" id="kt_upgrade_plan_startup">
                                                {/* begin::Heading*/}
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for 10+ team size and new startup</div>
                                                </div>
                                                {/* end::Heading*/}
                                                {/* begin::Body*/}
                                                <div className="pt-1">
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Finance Module</span>
                                                        <i className="ki-outline ki-cross-circle fs-1"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Accounting Module</span>
                                                        <i className="ki-outline ki-cross-circle fs-1"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
                                                        <i className="ki-outline ki-cross-circle fs-1"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-outline ki-cross-circle fs-1"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Tab Pane*/}
                                            {/* begin::Tab Pane*/}
                                            <div className="tab-pane fade" id="kt_upgrade_plan_advanced">
                                                {/* begin::Heading*/}
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for 100+ team size and grown company</div>
                                                </div>
                                                {/* end::Heading*/}
                                                {/* begin::Body*/}
                                                <div className="pt-1">
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Network Platform</span>
                                                        <i className="ki-outline ki-cross-circle fs-1"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-muted flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-outline ki-cross-circle fs-1"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Tab Pane*/}
                                            {/* begin::Tab Pane*/}
                                            <div className="tab-pane fade" id="kt_upgrade_plan_enterprise">
                                                {/* begin::Heading*/}
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for 1000+ team and enterpise</div>
                                                </div>
                                                {/* end::Heading*/}
                                                {/* begin::Body*/}
                                                <div className="pt-1">
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 10 Active Users</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Up to 30 Project Integrations</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Tab Pane*/}
                                            {/* begin::Tab Pane*/}
                                            <div className="tab-pane fade" id="kt_upgrade_plan_custom">
                                                {/* begin::Heading*/}
                                                <div className="pb-5">
                                                    <h2 className="fw-bold text-dark">What’s in Startup Plan?</h2>
                                                    <div className="text-muted fw-semibold">Optimal for corporations</div>
                                                </div>
                                                {/* end::Heading*/}
                                                {/* begin::Body*/}
                                                <div className="pt-1">
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Users</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Project Integrations</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Analytics Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Finance Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Accounting Module</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center mb-7">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Network Platform</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                    {/* begin::Item*/}
                                                    <div className="d-flex align-items-center">
                                                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">Unlimited Cloud Space</span>
                                                        <i className="ki-outline ki-check-circle fs-1 text-success"></i>
                                                    </div>
                                                    {/* end::Item*/}
                                                </div>
                                                {/* end::Body*/}
                                            </div>
                                            {/* end::Tab Pane*/}
                                        </div>
                                        {/* end::Tab content*/}
                                    </div>
                                    {/* end::Col*/}
                                </div>
                                {/* end::Row*/}
                            </div>
                            {/* end::Plans*/}
                            {/* begin::Actions*/}
                            <div className="d-flex flex-center flex-row-fluid pt-12">
                                <button type="reset" className="btn btn-light me-3" data-bs-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-primary" id="kt_modal_upgrade_plan_btn">
                                    {/* begin::Indicator label*/}
                                    <span className="indicator-label">Upgrade Plan</span>
                                    {/* end::Indicator label*/}
                                    {/* begin::Indicator progress*/}
                                    <span className="indicator-progress">Please wait...
								<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    {/* end::Indicator progress*/}
                                </button>
                            </div>
                            {/* end::Actions*/}
                        </div>
                        {/* end::Modal body*/}
                    </div>
                    {/* end::Modal content*/}
                </div>
                {/* end::Modal dialog*/}
            </div>
            {/* end::Modal - Upgrade plan*/}
            {/* begin::Modal - Invite Friends*/}
            <div className="modal fade" id="kt_modal_invite_friends" tabIndex={-1} aria-hidden="true">
                {/* begin::Modal dialog*/}
                <div className="modal-dialog mw-650px">
                    {/* begin::Modal content*/}
                    <div className="modal-content">
                        {/* begin::Modal header*/}
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            {/* begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-outline ki-cross fs-1"></i>
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* begin::Modal header*/}
                        {/* begin::Modal body*/}
                        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                            {/* begin::Heading*/}
                            <div className="text-center mb-13">
                                {/* begin::Title*/}
                                <h1 className="mb-3">Invite a Friend</h1>
                                {/* end::Title*/}
                                {/* begin::Description*/}
                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                {/* end::Description*/}
                            </div>
                            {/* end::Heading*/}
                            {/* begin::Google Contacts Invite*/}
                            <div className="btn btn-light-primary fw-bold w-100 mb-8">
                                <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
                            {/* end::Google Contacts Invite*/}
                            {/* begin::Separator*/}
                            <div className="separator d-flex flex-center mb-8">
                                <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
                            </div>
                            {/* end::Separator*/}
                            {/* begin::Textarea*/}
                            <textarea className="form-control form-control-solid mb-8" rows={3} placeholder="Type or paste emails here"></textarea>
                            {/* end::Textarea*/}
                            {/* begin::Users*/}
                            <div className="mb-10">
                                {/* begin::Heading*/}
                                <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                                {/* end::Heading*/}
                                {/* begin::List*/}
                                <div className="mh-300px scroll-y me-n7 pe-7">
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" /*selected="selected"*/>Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                <div className="fw-semibold text-muted">melody@altbox.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" /*selected="selected"*/>Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                <div className="fw-semibold text-muted">max@kt.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" /*selected="selected"*/>Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                <div className="fw-semibold text-muted">sean@dellito.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" /*selected="selected"*/>Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                <div className="fw-semibold text-muted">brian@exchange.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" /*selected="selected"*/>Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                <div className="fw-semibold text-muted">mik@pex.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" /*selected="selected"*/>Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" /*selected="selected"*/>Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" /*selected="selected"*/>Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" /*selected="selected"*/>Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                <div className="fw-semibold text-muted">dam@consilting.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" /*selected="selected"*/>Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                <div className="fw-semibold text-muted">emma@intenso.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" /*selected="selected"*/>Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                                <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" /*selected="selected"*/>Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                                <div className="fw-semibold text-muted">robert@benko.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" /*selected="selected"*/>Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                <div className="fw-semibold text-muted">miller@mapple.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" /*selected="selected"*/>Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2" /*selected="selected"*/>Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                                <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1" /*selected="selected"*/>Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3">Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                    {/* begin::User*/}
                                    <div className="d-flex flex-stack py-4">
                                        {/* begin::Details*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-35px symbol-circle">
                                                <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Details*/}
                                        {/* begin::Access menu*/}
                                        <div className="ms-2 w-100px">
                                            <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                                                <option value="1">Guest</option>
                                                <option value="2">Owner</option>
                                                <option value="3" /*selected="selected"*/>Can Edit</option>
                                            </select>
                                        </div>
                                        {/* end::Access menu*/}
                                    </div>
                                    {/* end::User*/}
                                </div>
                                {/* end::List*/}
                            </div>
                            {/* end::Users*/}
                            {/* begin::Notice*/}
                            <div className="d-flex flex-stack">
                                {/* begin::Label*/}
                                <div className="me-5 fw-semibold">
                                    <label className="fs-6">Adding Users by Team Members</label>
                                    <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                                </div>
                                {/* end::Label*/}
                                {/* begin::Switch*/}
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="1" defaultChecked={true} />
                                    <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                </label>
                                {/* end::Switch*/}
                            </div>
                            {/* end::Notice*/}
                        </div>
                        {/* end::Modal body*/}
                    </div>
                    {/* end::Modal content*/}
                </div>
                {/* end::Modal dialog*/}
            </div>
            {/* end::Modal - Invite Friend*/}
            {/* begin::Modal - New Target*/}
            <div className="modal fade" id="kt_modal_new_target" tabIndex={-1} aria-hidden="true">
                {/* begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/* begin::Modal content*/}
                    <div className="modal-content rounded">
                        {/* begin::Modal header*/}
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            {/* begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-outline ki-cross fs-1"></i>
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* begin::Modal header*/}
                        {/* begin::Modal body*/}
                        <div className="modal-body scroll-y px-10 px-lg-15 pt-0 pb-15">
                            {/* begin:Form*/}
                            <form id="kt_modal_new_target_form" className="form" action="#">
                                {/* begin::Heading*/}
                                <div className="mb-13 text-center">
                                    {/* begin::Title*/}
                                    <h1 className="mb-3">Set First Target</h1>
                                    {/* end::Title*/}
                                    {/* begin::Description*/}
                                    <div className="text-muted fw-semibold fs-5">If you need more info, please check
                                        <a href="#" className="fw-bold link-primary">Project Guidelines</a>.</div>
                                    {/* end::Description*/}
                                </div>
                                {/* end::Heading*/}
                                {/* begin::Input group*/}
                                <div className="d-flex flex-column mb-8 fv-row">
                                    {/* begin::Label*/}
                                    <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                        <span className="required">Target Title</span>
                                        <span className="ms-1" data-bs-toggle="tooltip" title="Specify a target name for future usage and reference">
										<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
									</span>
                                    </label>
                                    {/* end::Label*/}
                                    <input type="text" className="form-control form-control-solid" placeholder="Enter Target Title" name="target_title" />
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Input group*/}
                                <div className="row g-9 mb-8">
                                    {/* begin::Col*/}
                                    <div className="col-md-6 fv-row">
                                        <label className="required fs-6 fw-semibold mb-2">Assign</label>
                                        <select className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Select a Team Member" name="target_assign">
                                            <option value="">Select user...</option>
                                            <option value="1">Karina Clark</option>
                                            <option value="2">Robert Doe</option>
                                            <option value="3">Niel Owen</option>
                                            <option value="4">Olivia Wild</option>
                                            <option value="5">Sean Bean</option>
                                        </select>
                                    </div>
                                    {/* end::Col*/}
                                    {/* begin::Col*/}
                                    <div className="col-md-6 fv-row">
                                        <label className="required fs-6 fw-semibold mb-2">Due Date</label>
                                        {/* begin::Input*/}
                                        <div className="position-relative d-flex align-items-center">
                                            {/* begin::Icon*/}
                                            <i className="ki-outline ki-calendar-8 fs-2 position-absolute mx-4"></i>
                                            {/* end::Icon*/}
                                            {/* begin::Datepicker*/}
                                            <input className="form-control form-control-solid ps-12" placeholder="Select a date" name="due_date" />
                                            {/* end::Datepicker*/}
                                        </div>
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Col*/}
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Input group*/}
                                <div className="d-flex flex-column mb-8">
                                    <label className="fs-6 fw-semibold mb-2">Target Details</label>
                                    <textarea className="form-control form-control-solid" rows={3} name="target_details" placeholder="Type Target Details"></textarea>
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Input group*/}
                                <div className="d-flex flex-column mb-8 fv-row">
                                    {/* begin::Label*/}
                                    <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                                        <span className="required">Tags</span>
                                        <span className="ms-1" data-bs-toggle="tooltip" title="Specify a target priorty">
										<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
									</span>
                                    </label>
                                    {/* end::Label*/}
                                    <input className="form-control form-control-solid" value="Important, Urgent" name="tags" />
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Input group*/}
                                <div className="d-flex flex-stack mb-8">
                                    {/* begin::Label*/}
                                    <div className="me-5">
                                        <label className="fs-6 fw-semibold">Adding Users by Team Members</label>
                                        <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                    </div>
                                    {/* end::Label*/}
                                    {/* begin::Switch*/}
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="1" defaultChecked={true} />
                                        <span className="form-check-label fw-semibold text-muted">Allowed</span>
                                    </label>
                                    {/* end::Switch*/}
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Input group*/}
                                <div className="mb-15 fv-row">
                                    {/* begin::Wrapper*/}
                                    <div className="d-flex flex-stack">
                                        {/* begin::Label*/}
                                        <div className="fw-semibold me-5">
                                            <label className="fs-6">Notifications</label>
                                            <div className="fs-7 text-muted">Allow Notifications by Phone or Email</div>
                                        </div>
                                        {/* end::Label*/}
                                        {/* begin::Checkboxes*/}
                                        <div className="d-flex align-items-center">
                                            {/* begin::Checkbox*/}
                                            <label className="form-check form-check-custom form-check-solid me-10">
                                                <input className="form-check-input h-20px w-20px" type="checkbox" name="communication[]" value="email" defaultChecked={true} />
                                                <span className="form-check-label fw-semibold">Email</span>
                                            </label>
                                            {/* end::Checkbox*/}
                                            {/* begin::Checkbox*/}
                                            <label className="form-check form-check-custom form-check-solid">
                                                <input className="form-check-input h-20px w-20px" type="checkbox" name="communication[]" value="phone" />
                                                <span className="form-check-label fw-semibold">Phone</span>
                                            </label>
                                            {/* end::Checkbox*/}
                                        </div>
                                        {/* end::Checkboxes*/}
                                    </div>
                                    {/* end::Wrapper*/}
                                </div>
                                {/* end::Input group*/}
                                {/* begin::Actions*/}
                                <div className="text-center">
                                    <button type="reset" id="kt_modal_new_target_cancel" className="btn btn-light me-3">Cancel</button>
                                    <button type="submit" id="kt_modal_new_target_submit" className="btn btn-primary">
                                        <span className="indicator-label">Submit</span>
                                        <span className="indicator-progress">Please wait...
									<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    </button>
                                </div>
                                {/* end::Actions*/}
                            </form>
                            {/* end:Form*/}
                        </div>
                        {/* end::Modal body*/}
                    </div>
                    {/* end::Modal content*/}
                </div>
                {/* end::Modal dialog*/}
            </div>
            {/* end::Modal - New Target*/}
            {/* begin::Modal - Select Users*/}
            <div className="modal fade" id="kt_modal_select_users" tabIndex={-1} aria-hidden="true">
                {/* begin::Modal dialog*/}
                <div className="modal-dialog mw-700px">
                    {/* begin::Modal content*/}
                    <div className="modal-content">
                        {/* begin::Modal header*/}
                        <div className="modal-header pb-0 border-0 d-flex justify-content-end">
                            {/* begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-outline ki-cross fs-1"></i>
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* end::Modal header*/}
                        {/* begin::Modal body*/}
                        <div className="modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15">
                            {/* begin::Heading*/}
                            <div className="text-center mb-13">
                                {/* begin::Title*/}
                                <h1 className="d-flex justify-content-center align-items-center mb-3">Select Users
                                    <span className="badge badge-circle badge-secondary ms-3">81</span></h1>
                                {/* end::Title*/}
                                {/* begin::Description*/}
                                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                                    <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                                {/* end::Description*/}
                            </div>
                            {/* end::Heading*/}
                            {/* begin::Users*/}
                            <div className="mh-475px scroll-y me-n7 pe-7">
                                {/* begin::User*/}
                                <div className="border border-hover-primary p-7 rounded mb-7">
                                    {/* begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/* begin::Info*/}
                                        <div className="d-flex">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="assets/media/avatars/300-20.jpg" alt="" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                {/* begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <a href="pages/user-profile/overview.html" className="text-dark fw-bold text-hover-primary fs-5 me-4">Emma Smith</a>
                                                    {/* begin::Label*/}
                                                    <span className="badge badge-light-success d-flex align-items-center fs-8 fw-semibold">
												<i className="ki-outline ki-star fs-8 text-success me-1"></i>Author</span>
                                                    {/* end::Label*/}
                                                </div>
                                                {/* end::Name*/}
                                                {/* begin::Desc*/}
                                                <span className="text-muted fw-semibold mb-3">Art Director</span>
                                                {/* end::Desc*/}
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Stats*/}
                                        <div className="d-flex">
                                            {/* begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bold fs-5">$75.60</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/* end::Price*/}
                                        </div>
                                        {/* end::Stats*/}
                                    </div>
                                    {/* end::Info*/}
                                    {/* begin::Wrapper*/}
                                    <div className="p-0">
                                        {/* begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Text*/}
                                            <p className="text-gray-700 fw-semibold fs-6 mb-4">First, a disclaimer - the entire process writing a blog post often takes more.</p>
                                            {/* end::Text*/}
                                            {/* begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-semibold fs-7">
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">Art Director</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">UX</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">Laravel</span>
                                                {/* end::Tag*/}
                                            </div>
                                            {/* end::Tags*/}
                                        </div>
                                        {/* end::Section*/}
                                        {/* begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5"></div>
                                            {/* end::Separator*/}
                                            {/* begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/* begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-semibold me-2">90%</span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "90%"}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </div>
                                                {/* end::Progress*/}
                                                {/* begin::Button*/}
                                                <a href="#" className="btn btn-sm btn-primary">Select</a>
                                                {/* end::Button*/}
                                            </div>
                                            {/* end::Action*/}
                                        </div>
                                        {/* end::Footer*/}
                                    </div>
                                    {/* end::Wrapper*/}
                                </div>
                                {/* end::User*/}
                                {/* begin::User*/}
                                <div className="border border-hover-primary p-7 rounded mb-7">
                                    {/* begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/* begin::Info*/}
                                        <div className="d-flex">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="assets/media/avatars/300-11.jpg" alt="" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                {/* begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <a href="pages/user-profile/overview.html" className="text-dark fw-bold text-hover-primary fs-5 me-4">Sean Bean</a>
                                                    {/* begin::Label*/}
                                                    <span className="badge badge-light-success d-flex align-items-center fs-8 fw-semibold">
												<i className="ki-outline ki-star fs-8 text-success me-1"></i>Author</span>
                                                    {/* end::Label*/}
                                                </div>
                                                {/* end::Name*/}
                                                {/* begin::Desc*/}
                                                <span className="text-muted fw-semibold mb-3">Project Manager</span>
                                                {/* end::Desc*/}
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Stats*/}
                                        <div className="d-flex">
                                            {/* begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bold fs-5">$65.45</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/* end::Price*/}
                                        </div>
                                        {/* end::Stats*/}
                                    </div>
                                    {/* end::Info*/}
                                    {/* begin::Wrapper*/}
                                    <div className="p-0">
                                        {/* begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Text*/}
                                            <p className="text-gray-700 fw-semibold fs-6 mb-4">Outlines keep you honest. They stop you from indulging.</p>
                                            {/* end::Text*/}
                                            {/* begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-semibold fs-7">
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">HTML</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">Javascript</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">Python</span>
                                                {/* end::Tag*/}
                                            </div>
                                            {/* end::Tags*/}
                                        </div>
                                        {/* end::Section*/}
                                        {/* begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5"></div>
                                            {/* end::Separator*/}
                                            {/* begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/* begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-semibold me-2">58%</span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{width: "58%"}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </div>
                                                {/* end::Progress*/}
                                                {/* begin::Button*/}
                                                <a href="#" className="btn btn-sm btn-primary">Select</a>
                                                {/* end::Button*/}
                                            </div>
                                            {/* end::Action*/}
                                        </div>
                                        {/* end::Footer*/}
                                    </div>
                                    {/* end::Wrapper*/}
                                </div>
                                {/* end::User*/}
                                {/* begin::User*/}
                                <div className="border border-hover-primary p-7 rounded mb-7">
                                    {/* begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/* begin::Info*/}
                                        <div className="d-flex">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="assets/media/avatars/300-2.jpg" alt="" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                {/* begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <a href="pages/user-profile/overview.html" className="text-dark fw-bold text-hover-primary fs-5 me-4">Lusy Kunic</a>
                                                    {/* begin::Label*/}
                                                    <span className="m-0"></span>
                                                    {/* end::Label*/}
                                                </div>
                                                {/* end::Name*/}
                                                {/* begin::Desc*/}
                                                <span className="text-muted fw-semibold mb-3">DevOPs</span>
                                                {/* end::Desc*/}
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Stats*/}
                                        <div className="d-flex">
                                            {/* begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bold fs-5">$60,45</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/* end::Price*/}
                                        </div>
                                        {/* end::Stats*/}
                                    </div>
                                    {/* end::Info*/}
                                    {/* begin::Wrapper*/}
                                    <div className="p-0">
                                        {/* begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Text*/}
                                            <p className="text-gray-700 fw-semibold fs-6 mb-4">Long before you sit down to put digital pen to paper you need make sure you have to sit down and write.</p>
                                            {/* end::Text*/}
                                            {/* begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-semibold fs-7">
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">Figma</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">SASS</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">CSS</span>
                                                {/* end::Tag*/}
                                            </div>
                                            {/* end::Tags*/}
                                        </div>
                                        {/* end::Section*/}
                                        {/* begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5"></div>
                                            {/* end::Separator*/}
                                            {/* begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/* begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-semibold me-2">86%</span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "86%"}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </div>
                                                {/* end::Progress*/}
                                                {/* begin::Button*/}
                                                <a href="#" className="btn btn-sm btn-primary">Select</a>
                                                {/* end::Button*/}
                                            </div>
                                            {/* end::Action*/}
                                        </div>
                                        {/* end::Footer*/}
                                    </div>
                                    {/* end::Wrapper*/}
                                </div>
                                {/* end::User*/}
                                {/* begin::User*/}
                                <div className="border border-hover-primary p-7 rounded">
                                    {/* begin::Info*/}
                                    <div className="d-flex flex-stack pb-3">
                                        {/* begin::Info*/}
                                        <div className="d-flex">
                                            {/* begin::Avatar*/}
                                            <div className="symbol symbol-circle symbol-45px">
                                                <img src="assets/media/avatars/300-5.jpg" alt="" />
                                            </div>
                                            {/* end::Avatar*/}
                                            {/* begin::Details*/}
                                            <div className="ms-5">
                                                {/* begin::Name*/}
                                                <div className="d-flex align-items-center">
                                                    <a href="pages/user-profile/overview.html" className="text-dark fw-bold text-hover-primary fs-5 me-4">Mat Dillon</a>
                                                    {/* begin::Label*/}
                                                    <span className="m-0"></span>
                                                    {/* end::Label*/}
                                                </div>
                                                {/* end::Name*/}
                                                {/* begin::Desc*/}
                                                <span className="text-muted fw-semibold mb-3">QA Managers</span>
                                                {/* end::Desc*/}
                                            </div>
                                            {/* end::Details*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Stats*/}
                                        <div className="d-flex">
                                            {/* begin::Price*/}
                                            <div className="text-end pb-3">
                                                <span className="text-dark fw-bold fs-5">$70,30</span>
                                                <span className="text-muted fs-7">/hr</span>
                                            </div>
                                            {/* end::Price*/}
                                        </div>
                                        {/* end::Stats*/}
                                    </div>
                                    {/* end::Info*/}
                                    {/* begin::Wrapper*/}
                                    <div className="p-0">
                                        {/* begin::Section*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Text*/}
                                            <p className="text-gray-700 fw-semibold fs-6 mb-4">First, a disclaimer - the entire process writing a blog post often takes more than couple of hours.</p>
                                            {/* end::Text*/}
                                            {/* begin::Tags*/}
                                            <div className="d-flex text-gray-700 fw-semibold fs-7">
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">Figma</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">SASS</span>
                                                {/* end::Tag*/}
                                                {/* begin::Tag*/}
                                                <span className="border border-2 rounded me-3 p-1 px-2">CSS</span>
                                                {/* end::Tag*/}
                                            </div>
                                            {/* end::Tags*/}
                                        </div>
                                        {/* end::Section*/}
                                        {/* begin::Footer*/}
                                        <div className="d-flex flex-column">
                                            {/* begin::Separator*/}
                                            <div className="separator separator-dashed border-muted my-5"></div>
                                            {/* end::Separator*/}
                                            {/* begin::Action*/}
                                            <div className="d-flex flex-stack">
                                                {/* begin::Progress*/}
                                                <div className="d-flex flex-column mw-200px">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-gray-700 fs-6 fw-semibold me-2">70%</span>
                                                        <span className="text-muted fs-8">Job Success</span>
                                                    </div>
                                                    <div className="progress h-6px w-200px">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "70%"}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
                                                    </div>
                                                </div>
                                                {/* end::Progress*/}
                                                {/* begin::Button*/}
                                                <a href="#" className="btn btn-sm btn-primary">Select</a>
                                                {/* end::Button*/}
                                            </div>
                                            {/* end::Action*/}
                                        </div>
                                        {/* end::Footer*/}
                                    </div>
                                    {/* end::Wrapper*/}
                                </div>
                                {/* end::User*/}
                            </div>
                            {/* end::Users*/}
                        </div>
                        {/* end::Modal Body*/}
                    </div>
                    {/* end::Modal content*/}
                </div>
                {/* end::Modal dialog*/}
            </div>
            {/* end::Modal - Select Users*/}
            {/* begin::Modal - New Address*/}
            <div className="modal fade" id="kt_modal_new_address" tabIndex={-1} aria-hidden="true">
                {/* begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/* begin::Modal content*/}
                    <div className="modal-content">
                        {/* begin::Form*/}
                        <form className="form" action="#" id="kt_modal_new_address_form">
                            {/* begin::Modal header*/}
                            <div className="modal-header" id="kt_modal_new_address_header">
                                {/* begin::Modal title*/}
                                <h2>Add New Address</h2>
                                {/* end::Modal title*/}
                                {/* begin::Close*/}
                                <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    <i className="ki-outline ki-cross fs-1"></i>
                                </div>
                                {/* end::Close*/}
                            </div>
                            {/* end::Modal header*/}
                            {/* begin::Modal body*/}
                            <div className="modal-body py-10 px-lg-17">
                                {/* begin::Scroll*/}
                                <div className="scroll-y me-n7 pe-7" id="kt_modal_new_address_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_new_address_header" data-kt-scroll-wrappers="#kt_modal_new_address_scroll" data-kt-scroll-offset="300px">
                                    {/* begin::Notice*/}
                                    {/* begin::Notice*/}
                                    <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                                        {/* begin::Icon*/}
                                        <i className="ki-outline ki-information fs-2tx text-warning me-4"></i>
                                        {/* end::Icon*/}
                                        {/* begin::Wrapper*/}
                                        <div className="d-flex flex-stack flex-grow-1">
                                            {/* begin::Content*/}
                                            <div className="fw-semibold">
                                                <h4 className="text-gray-900 fw-bold">Warning</h4>
                                                <div className="fs-6 text-gray-700">Updating address may affter to your
                                                    <a href="#">Tax Location</a></div>
                                            </div>
                                            {/* end::Content*/}
                                        </div>
                                        {/* end::Wrapper*/}
                                    </div>
                                    {/* end::Notice*/}
                                    {/* end::Notice*/}
                                    {/* begin::Input group*/}
                                    <div className="row mb-5">
                                        {/* begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/* begin::Label*/}
                                            <label className="required fs-5 fw-semibold mb-2">First name</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input type="text" className="form-control form-control-solid" placeholder="" name="first-name" />
                                            {/* end::Input*/}
                                        </div>
                                        {/* end::Col*/}
                                        {/* begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/* end::Label*/}
                                            <label className="required fs-5 fw-semibold mb-2">Last name</label>
                                            {/* end::Label*/}
                                            {/* end::Input*/}
                                            <input type="text" className="form-control form-control-solid" placeholder="" name="last-name" />
                                            {/* end::Input*/}
                                        </div>
                                        {/* end::Col*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/* begin::Label*/}
                                        <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                                            <span className="required">Country</span>
                                            <span className="ms-1" data-bs-toggle="tooltip" title="Your payment statements may very based on selected country">
											<i className="ki-outline ki-information-5 text-gray-500 fs-6"></i>
										</span>
                                        </label>
                                        {/* end::Label*/}
                                        {/* begin::Select*/}
                                        <select name="country" data-control="select2" data-dropdown-parent="#kt_modal_new_address" data-placeholder="Select a Country..." className="form-select form-select-solid">
                                            <option value="">Select a Country...</option>
                                            <option value="AF">Afghanistan</option>
                                            <option value="AX">Aland Islands</option>
                                            <option value="AL">Albania</option>
                                            <option value="DZ">Algeria</option>
                                            <option value="AS">American Samoa</option>
                                            <option value="AD">Andorra</option>
                                            <option value="AO">Angola</option>
                                            <option value="AI">Anguilla</option>
                                            <option value="AG">Antigua and Barbuda</option>
                                            <option value="AR">Argentina</option>
                                            <option value="AM">Armenia</option>
                                            <option value="AW">Aruba</option>
                                            <option value="AU">Australia</option>
                                            <option value="AT">Austria</option>
                                            <option value="AZ">Azerbaijan</option>
                                            <option value="BS">Bahamas</option>
                                            <option value="BH">Bahrain</option>
                                            <option value="BD">Bangladesh</option>
                                            <option value="BB">Barbados</option>
                                            <option value="BY">Belarus</option>
                                            <option value="BE">Belgium</option>
                                            <option value="BZ">Belize</option>
                                            <option value="BJ">Benin</option>
                                            <option value="BM">Bermuda</option>
                                            <option value="BT">Bhutan</option>
                                            <option value="BO">Bolivia, Plurinational State of</option>
                                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                            <option value="BA">Bosnia and Herzegovina</option>
                                            <option value="BW">Botswana</option>
                                            <option value="BR">Brazil</option>
                                            <option value="IO">British Indian Ocean Territory</option>
                                            <option value="BN">Brunei Darussalam</option>
                                            <option value="BG">Bulgaria</option>
                                            <option value="BF">Burkina Faso</option>
                                            <option value="BI">Burundi</option>
                                            <option value="KH">Cambodia</option>
                                            <option value="CM">Cameroon</option>
                                            <option value="CA">Canada</option>
                                            <option value="CV">Cape Verde</option>
                                            <option value="KY">Cayman Islands</option>
                                            <option value="CF">Central African Republic</option>
                                            <option value="TD">Chad</option>
                                            <option value="CL">Chile</option>
                                            <option value="CN">China</option>
                                            <option value="CX">Christmas Island</option>
                                            <option value="CC">Cocos (Keeling) Islands</option>
                                            <option value="CO">Colombia</option>
                                            <option value="KM">Comoros</option>
                                            <option value="CK">Cook Islands</option>
                                            <option value="CR">Costa Rica</option>
                                            <option value="CI">Côte d'Ivoire</option>
                                            <option value="HR">Croatia</option>
                                            <option value="CU">Cuba</option>
                                            <option value="CW">Curaçao</option>
                                            <option value="CZ">Czech Republic</option>
                                            <option value="DK">Denmark</option>
                                            <option value="DJ">Djibouti</option>
                                            <option value="DM">Dominica</option>
                                            <option value="DO">Dominican Republic</option>
                                            <option value="EC">Ecuador</option>
                                            <option value="EG">Egypt</option>
                                            <option value="SV">El Salvador</option>
                                            <option value="GQ">Equatorial Guinea</option>
                                            <option value="ER">Eritrea</option>
                                            <option value="EE">Estonia</option>
                                            <option value="ET">Ethiopia</option>
                                            <option value="FK">Falkland Islands (Malvinas)</option>
                                            <option value="FJ">Fiji</option>
                                            <option value="FI">Finland</option>
                                            <option value="FR">France</option>
                                            <option value="PF">French Polynesia</option>
                                            <option value="GA">Gabon</option>
                                            <option value="GM">Gambia</option>
                                            <option value="GE">Georgia</option>
                                            <option value="DE">Germany</option>
                                            <option value="GH">Ghana</option>
                                            <option value="GI">Gibraltar</option>
                                            <option value="GR">Greece</option>
                                            <option value="GL">Greenland</option>
                                            <option value="GD">Grenada</option>
                                            <option value="GU">Guam</option>
                                            <option value="GT">Guatemala</option>
                                            <option value="GG">Guernsey</option>
                                            <option value="GN">Guinea</option>
                                            <option value="GW">Guinea-Bissau</option>
                                            <option value="HT">Haiti</option>
                                            <option value="VA">Holy See (Vatican City State)</option>
                                            <option value="HN">Honduras</option>
                                            <option value="HK">Hong Kong</option>
                                            <option value="HU">Hungary</option>
                                            <option value="IS">Iceland</option>
                                            <option value="IN">India</option>
                                            <option value="ID">Indonesia</option>
                                            <option value="IR">Iran, Islamic Republic of</option>
                                            <option value="IQ">Iraq</option>
                                            <option value="IE">Ireland</option>
                                            <option value="IM">Isle of Man</option>
                                            <option value="IL">Israel</option>
                                            <option value="IT">Italy</option>
                                            <option value="JM">Jamaica</option>
                                            <option value="JP">Japan</option>
                                            <option value="JE">Jersey</option>
                                            <option value="JO">Jordan</option>
                                            <option value="KZ">Kazakhstan</option>
                                            <option value="KE">Kenya</option>
                                            <option value="KI">Kiribati</option>
                                            <option value="KP">Korea, Democratic People's Republic of</option>
                                            <option value="KW">Kuwait</option>
                                            <option value="KG">Kyrgyzstan</option>
                                            <option value="LA">Lao People's Democratic Republic</option>
                                            <option value="LV">Latvia</option>
                                            <option value="LB">Lebanon</option>
                                            <option value="LS">Lesotho</option>
                                            <option value="LR">Liberia</option>
                                            <option value="LY">Libya</option>
                                            <option value="LI">Liechtenstein</option>
                                            <option value="LT">Lithuania</option>
                                            <option value="LU">Luxembourg</option>
                                            <option value="MO">Macao</option>
                                            <option value="MG">Madagascar</option>
                                            <option value="MW">Malawi</option>
                                            <option value="MY">Malaysia</option>
                                            <option value="MV">Maldives</option>
                                            <option value="ML">Mali</option>
                                            <option value="MT">Malta</option>
                                            <option value="MH">Marshall Islands</option>
                                            <option value="MQ">Martinique</option>
                                            <option value="MR">Mauritania</option>
                                            <option value="MU">Mauritius</option>
                                            <option value="MX">Mexico</option>
                                            <option value="FM">Micronesia, Federated States of</option>
                                            <option value="MD">Moldova, Republic of</option>
                                            <option value="MC">Monaco</option>
                                            <option value="MN">Mongolia</option>
                                            <option value="ME">Montenegro</option>
                                            <option value="MS">Montserrat</option>
                                            <option value="MA">Morocco</option>
                                            <option value="MZ">Mozambique</option>
                                            <option value="MM">Myanmar</option>
                                            <option value="NA">Namibia</option>
                                            <option value="NR">Nauru</option>
                                            <option value="NP">Nepal</option>
                                            <option value="NL">Netherlands</option>
                                            <option value="NZ">New Zealand</option>
                                            <option value="NI">Nicaragua</option>
                                            <option value="NE">Niger</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="NU">Niue</option>
                                            <option value="NF">Norfolk Island</option>
                                            <option value="MP">Northern Mariana Islands</option>
                                            <option value="NO">Norway</option>
                                            <option value="OM">Oman</option>
                                            <option value="PK">Pakistan</option>
                                            <option value="PW">Palau</option>
                                            <option value="PS">Palestinian Territory, Occupied</option>
                                            <option value="PA">Panama</option>
                                            <option value="PG">Papua New Guinea</option>
                                            <option value="PY">Paraguay</option>
                                            <option value="PE">Peru</option>
                                            <option value="PH">Philippines</option>
                                            <option value="PL">Poland</option>
                                            <option value="PT">Portugal</option>
                                            <option value="PR">Puerto Rico</option>
                                            <option value="QA">Qatar</option>
                                            <option value="RO">Romania</option>
                                            <option value="RU">Russian Federation</option>
                                            <option value="RW">Rwanda</option>
                                            <option value="BL">Saint Barthélemy</option>
                                            <option value="KN">Saint Kitts and Nevis</option>
                                            <option value="LC">Saint Lucia</option>
                                            <option value="MF">Saint Martin (French part)</option>
                                            <option value="VC">Saint Vincent and the Grenadines</option>
                                            <option value="WS">Samoa</option>
                                            <option value="SM">San Marino</option>
                                            <option value="ST">Sao Tome and Principe</option>
                                            <option value="SA">Saudi Arabia</option>
                                            <option value="SN">Senegal</option>
                                            <option value="RS">Serbia</option>
                                            <option value="SC">Seychelles</option>
                                            <option value="SL">Sierra Leone</option>
                                            <option value="SG">Singapore</option>
                                            <option value="SX">Sint Maarten (Dutch part)</option>
                                            <option value="SK">Slovakia</option>
                                            <option value="SI">Slovenia</option>
                                            <option value="SB">Solomon Islands</option>
                                            <option value="SO">Somalia</option>
                                            <option value="ZA">South Africa</option>
                                            <option value="KR">South Korea</option>
                                            <option value="SS">South Sudan</option>
                                            <option value="ES">Spain</option>
                                            <option value="LK">Sri Lanka</option>
                                            <option value="SD">Sudan</option>
                                            <option value="SR">Suriname</option>
                                            <option value="SZ">Swaziland</option>
                                            <option value="SE">Sweden</option>
                                            <option value="CH">Switzerland</option>
                                            <option value="SY">Syrian Arab Republic</option>
                                            <option value="TW">Taiwan, Province of China</option>
                                            <option value="TJ">Tajikistan</option>
                                            <option value="TZ">Tanzania, United Republic of</option>
                                            <option value="TH">Thailand</option>
                                            <option value="TG">Togo</option>
                                            <option value="TK">Tokelau</option>
                                            <option value="TO">Tonga</option>
                                            <option value="TT">Trinidad and Tobago</option>
                                            <option value="TN">Tunisia</option>
                                            <option value="TR">Turkey</option>
                                            <option value="TM">Turkmenistan</option>
                                            <option value="TC">Turks and Caicos Islands</option>
                                            <option value="TV">Tuvalu</option>
                                            <option value="UG">Uganda</option>
                                            <option value="UA">Ukraine</option>
                                            <option value="AE">United Arab Emirates</option>
                                            <option value="GB">United Kingdom</option>
                                            <option value="US">United States</option>
                                            <option value="UY">Uruguay</option>
                                            <option value="UZ">Uzbekistan</option>
                                            <option value="VU">Vanuatu</option>
                                            <option value="VE">Venezuela, Bolivarian Republic of</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="VI">Virgin Islands</option>
                                            <option value="YE">Yemen</option>
                                            <option value="ZM">Zambia</option>
                                            <option value="ZW">Zimbabwe</option>
                                        </select>
                                        {/* end::Select*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/* begin::Label*/}
                                        <label className="required fs-5 fw-semibold mb-2">Address Line 1</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <input className="form-control form-control-solid" placeholder="" name="address1" />
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/* begin::Label*/}
                                        <label className="required fs-5 fw-semibold mb-2">Address Line 2</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <input className="form-control form-control-solid" placeholder="" name="address2" />
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="d-flex flex-column mb-5 fv-row">
                                        {/* begin::Label*/}
                                        <label className="fs-5 fw-semibold mb-2">Town</label>
                                        {/* end::Label*/}
                                        {/* begin::Input*/}
                                        <input className="form-control form-control-solid" placeholder="" name="city" />
                                        {/* end::Input*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="row g-9 mb-5">
                                        {/* begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/* begin::Label*/}
                                            <label className="fs-5 fw-semibold mb-2">State / Province</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input className="form-control form-control-solid" placeholder="" name="state" />
                                            {/* end::Input*/}
                                        </div>
                                        {/* end::Col*/}
                                        {/* begin::Col*/}
                                        <div className="col-md-6 fv-row">
                                            {/* begin::Label*/}
                                            <label className="fs-5 fw-semibold mb-2">Post Code</label>
                                            {/* end::Label*/}
                                            {/* begin::Input*/}
                                            <input className="form-control form-control-solid" placeholder="" name="postcode" />
                                            {/* end::Input*/}
                                        </div>
                                        {/* end::Col*/}
                                    </div>
                                    {/* end::Input group*/}
                                    {/* begin::Input group*/}
                                    <div className="fv-row mb-5">
                                        {/* begin::Wrapper*/}
                                        <div className="d-flex flex-stack">
                                            {/* begin::Label*/}
                                            <div className="me-5">
                                                {/* begin::Label*/}
                                                <label className="fs-5 fw-semibold">Use as a billing adderess?</label>
                                                {/* end::Label*/}
                                                {/* begin::Input*/}
                                                <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                                                {/* end::Input*/}
                                            </div>
                                            {/* end::Label*/}
                                            {/* begin::Switch*/}
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                {/* begin::Input*/}
                                                <input className="form-check-input" name="billing" type="checkbox" value="1" defaultChecked={true} />
                                                {/* end::Input*/}
                                                {/* begin::Label*/}
                                                <span className="form-check-label fw-semibold text-muted">Yes</span>
                                                {/* end::Label*/}
                                            </label>
                                            {/* end::Switch*/}
                                        </div>
                                        {/* begin::Wrapper*/}
                                    </div>
                                    {/* end::Input group*/}
                                </div>
                                {/* end::Scroll*/}
                            </div>
                            {/* end::Modal body*/}
                            {/* begin::Modal footer*/}
                            <div className="modal-footer flex-center">
                                {/* begin::Button*/}
                                <button type="reset" id="kt_modal_new_address_cancel" className="btn btn-light me-3">Discard</button>
                                {/* end::Button*/}
                                {/* begin::Button*/}
                                <button type="submit" id="kt_modal_new_address_submit" className="btn btn-primary">
                                    <span className="indicator-label">Submit</span>
                                    <span className="indicator-progress">Please wait...
								<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </button>
                                {/* end::Button*/}
                            </div>
                            {/* end::Modal footer*/}
                        </form>
                        {/* end::Form*/}
                    </div>
                </div>
            </div>
            {/* end::Modal - New Address*/}
            {/* begin::Modal - Users Search*/}
            <div className="modal fade" id="kt_modal_users_search" tabIndex={-1} aria-hidden="true">
                {/* begin::Modal dialog*/}
                <div className="modal-dialog modal-dialog-centered mw-650px">
                    {/* begin::Modal content*/}
                    <div className="modal-content">
                        {/* begin::Modal header*/}
                        <div className="modal-header pb-0 border-0 justify-content-end">
                            {/* begin::Close*/}
                            <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                <i className="ki-outline ki-cross fs-1"></i>
                            </div>
                            {/* end::Close*/}
                        </div>
                        {/* begin::Modal header*/}
                        {/* begin::Modal body*/}
                        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
                            {/* begin::Content*/}
                            <div className="text-center mb-13">
                                <h1 className="mb-3">Search Users</h1>
                                <div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
                            </div>
                            {/* end::Content*/}
                            {/* begin::Search*/}
                            <div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
                                {/* begin::Form*/}
                                <form data-kt-search-element="form" className="w-100 position-relative mb-5" autoComplete="off">
                                    {/* begin::Hidden input(Added to disable form autocomplete)*/}
                                    <input type="hidden" />
                                    {/* end::Hidden input*/}
                                    {/* begin::Icon*/}
                                    <i className="ki-outline ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y"></i>
                                    {/* end::Icon*/}
                                    {/* begin::Input*/}
                                    <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
                                    {/* end::Input*/}
                                    {/* begin::Spinner*/}
                                    <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
									<span className="spinner-border h-15px w-15px align-middle text-muted"></span>
								</span>
                                    {/* end::Spinner*/}
                                    {/* begin::Reset*/}
                                    <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
									<i className="ki-outline ki-cross fs-2 fs-lg-1 me-0"></i>
								</span>
                                    {/* end::Reset*/}
                                </form>
                                {/* end::Form*/}
                                {/* begin::Wrapper*/}
                                <div className="py-5">
                                    {/* begin::Suggestions*/}
                                    <div data-kt-search-element="suggestions">
                                        {/* begin::Heading*/}
                                        <h3 className="fw-semibold mb-5">Recently searched:</h3>
                                        {/* end::Heading*/}
                                        {/* begin::Users*/}
                                        <div className="mh-375px scroll-y me-n7 pe-7">
                                            {/* begin::User*/}
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                {/* begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                                </div>
                                                {/* end::Avatar*/}
                                                {/* begin::Info*/}
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Emma Smith</span>
                                                    <span className="badge badge-light">Art Director</span>
                                                </div>
                                                {/* end::Info*/}
                                            </a>
                                            {/* end::User*/}
                                            {/* begin::User*/}
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                {/* begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                </div>
                                                {/* end::Avatar*/}
                                                {/* begin::Info*/}
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Melody Macy</span>
                                                    <span className="badge badge-light">Marketing Analytic</span>
                                                </div>
                                                {/* end::Info*/}
                                            </a>
                                            {/* end::User*/}
                                            {/* begin::User*/}
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                {/* begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                                </div>
                                                {/* end::Avatar*/}
                                                {/* begin::Info*/}
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                                                    <span className="badge badge-light">Software Enginer</span>
                                                </div>
                                                {/* end::Info*/}
                                            </a>
                                            {/* end::User*/}
                                            {/* begin::User*/}
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                {/* begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                                </div>
                                                {/* end::Avatar*/}
                                                {/* begin::Info*/}
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                                                    <span className="badge badge-light">Web Developer</span>
                                                </div>
                                                {/* end::Info*/}
                                            </a>
                                            {/* end::User*/}
                                            {/* begin::User*/}
                                            <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                                                {/* begin::Avatar*/}
                                                <div className="symbol symbol-35px symbol-circle me-5">
                                                    <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                                </div>
                                                {/* end::Avatar*/}
                                                {/* begin::Info*/}
                                                <div className="fw-semibold">
                                                    <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                                                    <span className="badge badge-light">UI/UX Designer</span>
                                                </div>
                                                {/* end::Info*/}
                                            </a>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Users*/}
                                    </div>
                                    {/* end::Suggestions*/}
                                    {/* begin::Results(add d-none to below element to hide the users list by default)*/}
                                    <div data-kt-search-element="results" className="d-none">
                                        {/* begin::Users*/}
                                        <div className="mh-375px scroll-y me-n7 pe-7">
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                                                        <div className="fw-semibold text-muted">smith@kpmg.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" /*selected="selected"*/>Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                                                        <div className="fw-semibold text-muted">melody@altbox.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" /*selected="selected"*/>Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                                                        <div className="fw-semibold text-muted">max@kt.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" /*selected="selected"*/>Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                                                        <div className="fw-semibold text-muted">sean@dellito.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" /*selected="selected"*/>Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                                                        <div className="fw-semibold text-muted">brian@exchange.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" /*selected="selected"*/>Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                                                        <div className="fw-semibold text-muted">mik@pex.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" /*selected="selected"*/>Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                                                        <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" /*selected="selected"*/>Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                                                        <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" /*selected="selected"*/>Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                                                        <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" /*selected="selected"*/>Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                                                        <div className="fw-semibold text-muted">dam@consilting.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" /*selected="selected"*/>Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                        <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" /*selected="selected"*/>Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                                                        <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" /*selected="selected"*/>Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                                                        <div className="fw-semibold text-muted">robert@benko.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" /*selected="selected"*/>Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                                                        <div className="fw-semibold text-muted">miller@mapple.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" /*selected="selected"*/>Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                                                        <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2" /*selected="selected"*/>Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                                                        <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1" /*selected="selected"*/>Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3">Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                            {/* begin::Separator*/}
                                            <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                                            {/* end::Separator*/}
                                            {/* begin::User*/}
                                            <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
                                                {/* begin::Details*/}
                                                <div className="d-flex align-items-center">
                                                    {/* begin::Checkbox*/}
                                                    <label className="form-check form-check-custom form-check-solid me-5">
                                                        <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
                                                    </label>
                                                    {/* end::Checkbox*/}
                                                    {/* begin::Avatar*/}
                                                    <div className="symbol symbol-35px symbol-circle">
                                                        <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                                                    </div>
                                                    {/* end::Avatar*/}
                                                    {/* begin::Details*/}
                                                    <div className="ms-5">
                                                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                                                        <div className="fw-semibold text-muted">emma@intenso.com</div>
                                                    </div>
                                                    {/* end::Details*/}
                                                </div>
                                                {/* end::Details*/}
                                                {/* begin::Access menu*/}
                                                <div className="ms-2 w-100px">
                                                    <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                                                        <option value="1">Guest</option>
                                                        <option value="2">Owner</option>
                                                        <option value="3" /*selected="selected"*/>Can Edit</option>
                                                    </select>
                                                </div>
                                                {/* end::Access menu*/}
                                            </div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Users*/}
                                        {/* begin::Actions*/}
                                        <div className="d-flex flex-center mt-15">
                                            <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
                                            <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
                                        </div>
                                        {/* end::Actions*/}
                                    </div>
                                    {/* end::Results*/}
                                    {/* begin::Empty*/}
                                    <div data-kt-search-element="empty" className="text-center d-none">
                                        {/* begin::Message*/}
                                        <div className="fw-semibold py-10">
                                            <div className="text-gray-600 fs-3 mb-2">No users found</div>
                                            <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                                        </div>
                                        {/* end::Message*/}
                                        {/* begin::Illustration*/}
                                        <div className="text-center px-5">
                                            <img src="assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
                                        </div>
                                        {/* end::Illustration*/}
                                    </div>
                                    {/* end::Empty*/}
                                </div>
                                {/* end::Wrapper*/}
                            </div>
                            {/* end::Search*/}
                        </div>
                        {/* end::Modal body*/}
                    </div>
                    {/* end::Modal content*/}
                </div>
                {/* end::Modal dialog*/}
            </div>
            {/* end::Modal - Users Search*/}
            {/* end::Modals*/}
            {/* begin::Javascript*/}
            <script>var hostUrl = "assets/";</script>
            {/* begin::Global Javascript Bundle(mandatory for all pages)*/}
            <script src="assets/plugins/global/plugins.bundle.js"></script>
            <script src="assets/js/scripts.bundle.js"></script>
            {/* end::Global Javascript Bundle*/}
            {/* begin::Vendors Javascript(used for this page only)*/}
            <script src="assets/plugins/custom/fullcalendar/fullcalendar.bundle.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/percent.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/radar.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/map.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/geodata/continentsLow.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZonesLow.js"></script>
            <script src="https://cdn.amcharts.com/lib/5/geodata/worldTimeZoneAreasLow.js"></script>
            <script src="assets/plugins/custom/datatables/datatables.bundle.js"></script>
            {/* end::Vendors Javascript*/}
            {/* begin::Custom Javascript(used for this page only)*/}
            <script src="assets/js/widgets.bundle.js"></script>
            <script src="assets/js/custom/widgets.js"></script>
            <script src="assets/js/custom/apps/chat/chat.js"></script>
            <script src="assets/js/custom/utilities/modals/upgrade-plan.js"></script>
            <script src="assets/js/custom/utilities/modals/new-target.js"></script>
            <script src="assets/js/custom/utilities/modals/new-address.js"></script>
            <script src="assets/js/custom/utilities/modals/users-search.js"></script>
            {/* end::Custom Javascript*/}
            {/* end::Javascript*/}
        </Fragment>
    )
}

export default Home;
