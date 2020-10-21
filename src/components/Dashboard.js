import React from "react";
function Dashboard() {
  return (
    <div>
      {/*begin::Main*/}
      {/*begin::Header Mobile*/}
      <div
        id="kt_header_mobile"
        className="header-mobile align-items-center header-mobile-fixed"
      >
        {/*begin::Logo*/}
        <a href="../../index.html">
          <img alt="Logo" src="assets/media/logos/logo-dark.png" />
        </a>
        {/*end::Logo*/}
        {/*begin::Toolbar*/}
        <div className="d-flex align-items-center">
          {/*begin::Aside Mobile Toggle*/}
          <button
            className="btn p-0 burger-icon burger-icon-left"
            id="kt_aside_mobile_toggle"
          >
            <span></span>
          </button>
          {/*end::Aside Mobile Toggle*/}
          {/*begin::Header Menu Mobile Toggle*/}
          <button className="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
            <span></span>
          </button>
          {/*end::Header Menu Mobile Toggle*/}
          {/*begin::Topbar Mobile Toggle*/}
          <button
            className="btn btn-hover-text-primary p-0 ml-2"
            id="kt_header_mobile_topbar_toggle"
          >
            <span className="svg-icon svg-icon-xl"></span>
          </button>
          {/*end::Topbar Mobile Toggle*/}
        </div>
        {/*end::Toolbar*/}
      </div>
      {/*end::Header Mobile*/}
      <div className="d-flex flex-column flex-root">
        {/*begin::Page*/}
        <div className="d-flex flex-row flex-column-fluid page">
          {/*begin::Aside*/}
          <div
            className="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
            id="kt_aside"
          >
            {/*begin::Brand*/}
            <div className="brand flex-column-auto" id="kt_brand">
              {/*begin::Logo*/}
              <a href="../../index.html" className="brand-logo">
                <img alt="Logo" src="assets/media/logos/logo-dark.png" />
              </a>
              {/*end::Logo*/}
              {/*begin::Toggle*/}
              <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                <span className="svg-icon svg-icon svg-icon-xl">
                  {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Navigation/Angle-double-left.svg*/}

                  {/*end::Svg Icon*/}
                </span>
              </button>
              {/*end::Toolbar*/}
            </div>
            {/*end::Brand*/}
            {/*begin::Aside Menu*/}
            <div
              className="aside-menu-wrapper flex-column-fluid"
              id="kt_aside_menu_wrapper"
            >
              {/*begin::Menu Container*/}
              <div
                id="kt_aside_menu"
                className="aside-menu my-4"
                data-menu-vertical="1"
                data-menu-scroll="1"
                data-menu-dropdown-timeout="500"
              >
                {/*begin::Menu Nav*/}
                <ul className="menu-nav">
                  <li className="menu-item" aria-haspopup="true">
                    <a href="../../index.html" className="menu-link">
                      <span className="svg-icon menu-icon">
                        {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Design/Layers.svg*/}

                        {/*end::Svg Icon*/}
                      </span>
                      <span className="menu-text">Dashboard</span>
                    </a>
                  </li>
                </ul>
                {/*end::Menu Nav*/}
              </div>
              {/*end::Menu Container*/}
            </div>
            {/*end::Aside Menu*/}
          </div>
          {/*end::Aside*/}
          {/*begin::Wrapper*/}
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            {/*begin::Header*/}
            <div id="kt_header" className="header header-fixed">
              {/*begin::Container*/}
              <div className="container-fluid d-flex align-items-stretch justify-content-between">
                {/*begin::Header Menu Wrapper*/}
                <div
                  className="header-menu-wrapper header-menu-wrapper-left"
                  id="kt_header_menu_wrapper"
                >
                  {/*begin::Header Menu*/}

                  {/*end::Header Menu*/}
                </div>
                {/*end::Header Menu Wrapper*/}
                {/*begin::Topbar*/}
                <div className="topbar">
                  {/*begin::User*/}
                  <div className="topbar-item">
                    <div
                      className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
                      id="kt_quick_user_toggle"
                    >
                      <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                        Hi,
                      </span>
                      <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                        Sean
                      </span>
                      <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                        <span className="symbol-label font-size-h5 font-weight-bold">
                          S
                        </span>
                      </span>
                    </div>
                  </div>
                  {/*end::User*/}
                </div>
                {/*end::Topbar*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Header*/}
            {/*begin::Content*/}
            <div
              className="content d-flex flex-column flex-column-fluid"
              id="kt_content"
            >
              {/*begin::Entry*/}
              <div className="d-flex flex-column-fluid">
                {/*begin::Container*/}
                <div className="container">
                  {/*begin::Dashboard*/}
                  {/*end::Dashboard*/}
                </div>
                {/*end::Container*/}
              </div>
              {/*end::Entry*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Page*/}
      </div>
      {/*end::Main*/}
      {/* begin::User Panel*/}
      <div id="kt_quick_user" className="offcanvas offcanvas-right p-10">
        {/*begin::Header*/}
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
          <h3 className="font-weight-bold m-0">
            User Profile
            <small className="text-muted font-size-sm ml-2">12 messages</small>
          </h3>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_user_close"
          >
            <i className="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
        {/*end::Header*/}
        {/*begin::Content*/}
        <div className="offcanvas-content pr-5 mr-n5">
          {/*begin::Header*/}
          <div className="d-flex align-items-center mt-5">
            <div className="symbol symbol-100 mr-5">
              <div
                className="symbol-label"
                style={{
                  backgroundImage:
                    "url(" + "assets/media/users/300_21.jpg" + ")",
                }}
              ></div>
              <i className="symbol-badge bg-success"></i>
            </div>
            <div className="d-flex flex-column">
              <a
                href="#"
                className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
              >
                James Jones
              </a>
              <div className="text-muted mt-1">Application Developer</div>
              <div className="navi mt-2">
                <a href="#" className="navi-item">
                  <span className="navi-link p-0 pb-2">
                    <span className="navi-icon mr-1">
                      <span className="svg-icon svg-icon-lg svg-icon-primary">
                        {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Mail-notification.svg*/}

                        {/*end::Svg Icon*/}
                      </span>
                    </span>
                    <span className="navi-text text-muted text-hover-primary">
                      jm@softplus.com
                    </span>
                  </span>
                </a>
                <a
                  href="#"
                  className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
          {/*end::Header*/}
          {/*begin::Separator*/}
          <div className="separator separator-dashed mt-8 mb-5"></div>
          {/*end::Separator*/}
          {/*begin::Nav*/}
          <div className="navi navi-spacer-x-0 p-0">
            {/*begin::Item*/}
            <a
              href="../../custom/apps/user/profile-1/personal-information.html"
              className="navi-item"
            >
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/General/Notification2.svg*/}

                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Profile</div>
                  <div className="text-muted">
                    Account settings and more
                    <span className="label label-light-danger label-inline font-weight-bold">
                      update
                    </span>
                  </div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
            {/*begin::Item*/}
            <a href="../../custom/apps/user/profile-3.html" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Shopping/Chart-bar1.svg*/}

                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Messages</div>
                  <div className="text-muted">Inbox and tasks</div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
            {/*begin::Item*/}
            <a href="../../custom/apps/user/profile-2.html" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Files/Selected-file.svg*/}

                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Activities</div>
                  <div className="text-muted">Logs and notifications</div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
            {/*begin::Item*/}
            <a
              href="../../custom/apps/userprofile-1/overview.html"
              className="navi-item"
            >
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
                      {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Mail-opened.svg*/}

                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Tasks</div>
                  <div className="text-muted">latest tasks and projects</div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
          </div>
          {/*end::Nav*/}
          {/*begin::Separator*/}
          <div className="separator separator-dashed my-7"></div>
          {/*end::Separator*/}
          {/*begin::Notifications*/}
          <div>
            {/*begin:Heading*/}
            <h5 className="mb-5">Recent Notifications</h5>
            {/*end:Heading*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center bg-light-warning rounded p-5 gutter-b">
              <span className="svg-icon svg-icon-warning mr-5">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Home/Library.svg*/}

                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Another purpose persuade
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>
              <span className="font-weight-bolder text-warning py-1 font-size-lg">
                +28%
              </span>
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center bg-light-success rounded p-5 gutter-b">
              <span className="svg-icon svg-icon-success mr-5">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Write.svg*/}

                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Would be to people
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>
              <span className="font-weight-bolder text-success py-1 font-size-lg">
                +50%
              </span>
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">
              <span className="svg-icon svg-icon-danger mr-5">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Group-chat.svg*/}

                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  Purpose would be to persuade
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>
              <span className="font-weight-bolder text-danger py-1 font-size-lg">
                -27%
              </span>
            </div>
            {/*end::Item*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center bg-light-info rounded p-5">
              <span className="svg-icon svg-icon-info mr-5">
                <span className="svg-icon svg-icon-lg">
                  {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/General/Attachment2.svg*/}

                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className="d-flex flex-column flex-grow-1 mr-2">
                <a
                  href="#"
                  className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                >
                  The best product
                </a>
                <span className="text-muted font-size-sm">Due in 2 Days</span>
              </div>
              <span className="font-weight-bolder text-info py-1 font-size-lg">
                +8%
              </span>
            </div>
            {/*end::Item*/}
          </div>
          {/*end::Notifications*/}
        </div>
        {/*end::Content*/}
      </div>
      {/* end::User Panel*/}
      {/*begin::Quick Cart*/}
      <div id="kt_quick_cart" className="offcanvas offcanvas-right p-10">
        {/*begin::Header*/}
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
          <h4 className="font-weight-bold m-0">Shopping Cart</h4>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_cart_close"
          >
            <i className="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
        {/*end::Header*/}
        {/*begin::Content*/}
        <div className="offcanvas-content">
          {/*begin::Wrapper*/}
          <div className="offcanvas-wrapper mb-5 scroll-pull">
            {/*begin::Item*/}
            <div className="d-flex align-items-center justify-content-between py-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                >
                  iBlender
                </a>
                <span className="text-muted">The best kitchen gadget in 2020</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                    $ 350
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                    5
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src="assets/media/stock-600x400/img-1.jpg"
                  title=""
                  alt=""
                />
              </a>
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-solid"></div>
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center justify-content-between py-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                >
                  SmartCleaner
                </a>
                <span className="text-muted">Smart tool for cooking</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                    $ 650
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                    4
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src="assets/media/stock-600x400/img-2.jpg"
                  title=""
                  alt=""
                />
              </a>
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-solid"></div>
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center justify-content-between py-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark-75 font-size-lg text-hover-primary"
                >
                  CameraMax
                </a>
                <span className="text-muted">
                  Professional camera for edge cutting shots
                </span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                    $ 150
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                    3
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src="assets/media/stock-600x400/img-3.jpg"
                  title=""
                  alt=""
                />
              </a>
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-solid"></div>
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center justify-content-between py-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  4D Printer
                </a>
                <span className="text-muted">Manufactoring unique objects</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                    $ 1450
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                    7
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src="assets/media/stock-600x400/img-4.jpg"
                  title=""
                  alt=""
                />
              </a>
            </div>
            {/*end::Item*/}
            {/*begin::Separator*/}
            <div className="separator separator-solid"></div>
            {/*end::Separator*/}
            {/*begin::Item*/}
            <div className="d-flex align-items-center justify-content-between py-8">
              <div className="d-flex flex-column mr-2">
                <a
                  href="#"
                  className="font-weight-bold text-dark text-hover-primary"
                >
                  MotionWire
                </a>
                <span className="text-muted">Perfect animation tool</span>
                <div className="d-flex align-items-center mt-2">
                  <span className="font-weight-bold mr-1 text-dark-75 font-size-lg">
                    $ 650
                  </span>
                  <span className="text-muted mr-1">for</span>
                  <span className="font-weight-bold mr-2 text-dark-75 font-size-lg">
                    7
                  </span>
                  <a
                    href="#"
                    className="btn btn-xs btn-light-success btn-icon mr-2"
                  >
                    <i className="ki ki-minus icon-xs"></i>
                  </a>
                  <a href="#" className="btn btn-xs btn-light-success btn-icon">
                    <i className="ki ki-plus icon-xs"></i>
                  </a>
                </div>
              </div>
              <a href="#" className="symbol symbol-70 flex-shrink-0">
                <img
                  src="assets/media/stock-600x400/img-8.jpg"
                  title=""
                  alt=""
                />
              </a>
            </div>
            {/*end::Item*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Purchase*/}
          <div className="offcanvas-footer">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <span className="font-weight-bold text-muted font-size-sm mr-2">
                Total
              </span>
              <span className="font-weight-bolder text-dark-50 text-right">
                $1840.00
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-7">
              <span className="font-weight-bold text-muted font-size-sm mr-2">
                Sub total
              </span>
              <span className="font-weight-bolder text-primary text-right">
                $5640.00
              </span>
            </div>
            <div className="text-right">
              <button type="button" className="btn btn-primary text-weight-bold">
                Place Order
              </button>
            </div>
          </div>
          {/*end::Purchase*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Quick Cart*/}
      {/*begin::Quick Panel*/}
      <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10">
        {/*begin::Header*/}
        <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
          <ul
            className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#kt_quick_panel_logs"
              >
                Audit Logs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#kt_quick_panel_notifications"
              >
                Notifications
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="tab"
                href="#kt_quick_panel_settings"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="offcanvas-close mt-n1 pr-5">
            <a
              href="#"
              className="btn btn-xs btn-icon btn-light btn-hover-primary"
              id="kt_quick_panel_close"
            >
              <i className="ki ki-close icon-xs text-muted"></i>
            </a>
          </div>
        </div>
        {/*end::Header*/}
        {/*begin::Content*/}
        <div className="offcanvas-content px-10">
          <div className="tab-content">
            {/*begin::Tabpane*/}
            <div
              className="tab-pane fade show pt-3 pr-5 mr-n5 active"
              id="kt_quick_panel_logs"
              role="tabpanel"
            >
              {/*begin::Section*/}
              <div className="mb-15">
                <h5 className="font-weight-bold mb-5">System Messages</h5>
                {/*begin: Item*/}
                <div className="d-flex align-items-center flex-wrap mb-5">
                  <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                        src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/misc/006-plurk.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Top Authors
                    </a>
                    <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                  </div>
                  <span className="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
                    +82$
                  </span>
                </div>
                {/*end: Item*/}
                {/*begin: Item*/}
                <div className="d-flex align-items-center flex-wrap mb-5">
                  <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                        src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/misc/015-telegram.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Popular Authors
                    </a>
                    <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                  </div>
                  <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                    +280$
                  </span>
                </div>
                {/*end: Item*/}
                {/*begin: Item*/}
                <div className="d-flex align-items-center flex-wrap mb-5">
                  <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                        src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/misc/003-puzzle.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      New Users
                    </a>
                    <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                  </div>
                  <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                    +4500$
                  </span>
                </div>
                {/*end: Item*/}
                {/*begin: Item*/}
                <div className="d-flex align-items-center flex-wrap mb-5">
                  <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                        src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/misc/005-bebo.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Active Customers
                    </a>
                    <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                  </div>
                  <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                    +4500$
                  </span>
                </div>
                {/*end: Item*/}
                {/*begin: Item*/}
                <div className="d-flex align-items-center flex-wrap">
                  <div className="symbol symbol-50 symbol-light mr-5">
                    <span className="symbol-label">
                      <img
                        src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/misc/014-kickstarter.svg"
                        className="h-50 align-self-center"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Bestseller Theme
                    </a>
                    <span className="text-muted font-weight-bold">
                      Most Successful Fellas
                    </span>
                  </div>
                  <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                    +4500$
                  </span>
                </div>
                {/*end: Item*/}
              </div>
              {/*end::Section*/}
              {/*begin::Section*/}
              <div className="mb-5">
                <h5 className="font-weight-bold mb-5">Notifications</h5>
                {/*begin: Item*/}
                <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                  <span className="svg-icon svg-icon-warning mr-5">
                    <span className="svg-icon svg-icon-lg">
                      {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Home/Library.svg*/}

                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a
                      href="#"
                      className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                    >
                      Another purpose persuade
                    </a>
                    <span className="text-muted font-size-sm">Due in 2 Days</span>
                  </div>
                  <span className="font-weight-bolder text-warning py-1 font-size-lg">
                    +28%
                  </span>
                </div>
                {/*end: Item*/}
              </div>
              {/*end::Section*/}
            </div>
            {/*end::Tabpane*/}
            {/*begin::Tabpane*/}
            <div
              className="tab-pane fade pt-2 pr-5 mr-n5"
              id="kt_quick_panel_notifications"
              role="tabpanel"
            >
              {/*begin::Nav*/}
              <div className="navi navi-icon-circle navi-spacer-x-0">
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-bell text-success icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        5 new user generated report
                      </div>
                      <div className="text-muted">Reports based on sales</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon2-box text-danger icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        2 new items submited
                      </div>
                      <div className="text-muted">by Grog John</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-psd text-primary icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        79 PSD files generated
                      </div>
                      <div className="text-muted">Reports based on sales</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon2-supermarket text-warning icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        $2900 worth producucts sold
                      </div>
                      <div className="text-muted">Total 234 items</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-paper-plane-1 text-success icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        4.5h-avarage response time
                      </div>
                      <div className="text-muted">Fostest is Barry</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-safe-shield-protection text-danger icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        3 Defence alerts
                      </div>
                      <div className="text-muted">
                        40% less alerts thar last week
                      </div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-notepad text-primary icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        Avarage 4 blog posts per author
                      </div>
                      <div className="text-muted">Most posted 12 time</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-users-1 text-warning icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        16 authors joined last week
                      </div>
                      <div className="text-muted">9 photodrapehrs, 7 designer</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon2-box text-info icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        2 new items have been submited
                      </div>
                      <div className="text-muted">by Grog John</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon2-download text-success icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        2.8 GB-total downloads size
                      </div>
                      <div className="text-muted">Mostly PSD end AL concepts</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon2-supermarket text-danger icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        $2900 worth producucts sold
                      </div>
                      <div className="text-muted">Total 234 items</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-bell text-primary icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        7 new user generated report
                      </div>
                      <div className="text-muted">Reports based on sales</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
                {/*begin::Item*/}
                <a href="#" className="navi-item">
                  <div className="navi-link rounded">
                    <div className="symbol symbol-50 mr-3">
                      <div className="symbol-label">
                        <i className="flaticon-paper-plane-1 text-success icon-lg"></i>
                      </div>
                    </div>
                    <div className="navi-text">
                      <div className="font-weight-bold font-size-lg">
                        4.5h-avarage response time
                      </div>
                      <div className="text-muted">Fostest is Barry</div>
                    </div>
                  </div>
                </a>
                {/*end::Item*/}
              </div>
              {/*end::Nav*/}
            </div>
            {/*end::Tabpane*/}
            {/*begin::Tabpane*/}
            <div
              className="tab-pane fade pt-3 pr-5 mr-n5"
              id="kt_quick_panel_settings"
              role="tabpanel"
            >
              <form className="form">
                {/*begin::Section*/}
                <div>
                  <h5 className="font-weight-bold mb-3">Customer Care</h5>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Enable Notifications:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-success switch-sm">
                        <label>
                       {/*   <input
                            type="checkbox"
                            // checked="checked"
                            name="select"
                          />*/}
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Enable Case Tracking:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-success switch-sm">
                        <label>
                          <input
                            type="checkbox"
                            name="quick_panel_notifications_2"
                          />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">Support Portal:</label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-success switch-sm">
                        <label>
                         {/* <input
                            type="checkbox"
                            checked="checked"
                            name="select"
                          />*/}
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
                {/*end::Section*/}
                <div className="separator separator-dashed my-6"></div>
                {/*begin::Section*/}
                <div className="pt-2">
                  <h5 className="font-weight-bold mb-3">Reports</h5>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Generate Reports:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-sm switch-danger">
                        <label>
                          {/*<input
                            type="checkbox"
                            checked="checked"
                            name="select"
                          />*/}
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Enable Report Export:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-sm switch-danger">
                        <label>
                          <input type="checkbox" name="select" />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Allow Data Collection:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-sm switch-danger">
                        <label>
                         {/* <input
                            type="checkbox"
                            checked="checked"
                            name="select"
                          />*/}
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
                {/*end::Section*/}
                <div className="separator separator-dashed my-6"></div>
                {/*begin::Section*/}
                <div className="pt-2">
                  <h5 className="font-weight-bold mb-3">Memebers</h5>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Enable Member singup:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-sm switch-primary">
                        <label>
                         {/* <input
                            type="checkbox"
                            checked="checked"
                            name="select"
                          />*/}
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Allow User Feedbacks:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-sm switch-primary">
                        <label>
                          <input type="checkbox" name="select" />
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                  <div className="form-group mb-0 row align-items-center">
                    <label className="col-8 col-form-label">
                      Enable Customer Portal:
                    </label>
                    <div className="col-4 d-flex justify-content-end">
                      <span className="switch switch-sm switch-primary">
                        <label>
                          {/*<input
                            type="checkbox"
                            checked="checked"
                            name="select"
                          />*/}
                          <span></span>
                        </label>
                      </span>
                    </div>
                  </div>
                </div>
                {/*end::Section*/}
              </form>
            </div>
            {/*end::Tabpane*/}
          </div>
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Quick Panel*/}
      {/*begin::Chat Panel*/}
      <div
        className="modal modal-sticky modal-sticky-bottom-right"
        id="kt_chat_modal"
        role="dialog"
        data-backdrop="false"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {/*begin::Card*/}
            <div className="card card-custom">
              {/*begin::Header*/}
              <div className="card-header align-items-center px-4 py-3">
                <div className="text-left flex-grow-1">
                  {/*begin::Dropdown Menu*/}
                  <div className="dropdown dropdown-inline">
                    <button
                      type="button"
                      className="btn btn-clean btn-sm btn-icon btn-icon-md"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="svg-icon svg-icon-lg">
                        {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Add-user.svg*/}

                        {/*end::Svg Icon*/}
                      </span>
                    </button>
                    <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-md">
                      {/*begin::Navigation*/}
                      <ul className="navi navi-hover py-5">
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-drop"></i>
                            </span>
                            <span className="navi-text">New Group</span>
                          </a>
                        </li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-list-3"></i>
                            </span>
                            <span className="navi-text">Contacts</span>
                          </a>
                        </li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-rocket-1"></i>
                            </span>
                            <span className="navi-text">Groups</span>
                            <span className="navi-link-badge">
                              <span className="label label-light-primary label-inline font-weight-bold">
                                new
                              </span>
                            </span>
                          </a>
                        </li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-bell-2"></i>
                            </span>
                            <span className="navi-text">Calls</span>
                          </a>
                        </li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-gear"></i>
                            </span>
                            <span className="navi-text">Settings</span>
                          </a>
                        </li>
                        <li className="navi-separator my-3"></li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-magnifier-tool"></i>
                            </span>
                            <span className="navi-text">Help</span>
                          </a>
                        </li>
                        <li className="navi-item">
                          <a href="#" className="navi-link">
                            <span className="navi-icon">
                              <i className="flaticon2-bell-2"></i>
                            </span>
                            <span className="navi-text">Privacy</span>
                            <span className="navi-link-badge">
                              <span className="label label-light-danger label-rounded font-weight-bold">
                                5
                              </span>
                            </span>
                          </a>
                        </li>
                      </ul>
                      {/*end::Navigation*/}
                    </div>
                  </div>
                  {/*end::Dropdown Menu*/}
                </div>
                <div className="text-center flex-grow-1">
                  <div className="text-dark-75 font-weight-bold font-size-h5">
                    Matt Pears
                  </div>
                  <div>
                    <span className="label label-dot label-success"></span>
                    <span className="font-weight-bold text-muted font-size-sm">
                      Active
                    </span>
                  </div>
                </div>
                <div className="text-right flex-grow-1">
                  <button
                    type="button"
                    className="btn btn-clean btn-sm btn-icon btn-icon-md"
                    data-dismiss="modal"
                  >
                    <i className="ki ki-close icon-1x"></i>
                  </button>
                </div>
              </div>
              {/*end::Header*/}
              {/*begin::Body*/}
              <div className="card-body">
                {/*begin::Scroll*/}
                <div
                  className="scroll scroll-pull"
                  data-height="375"
                  data-mobile-height="300"
                >
                  {/*begin::Messages*/}
                  <div className="messages">
                    {/*begin::Message In*/}
                    <div className="d-flex flex-column mb-5 align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-40 mr-3">
                          <img alt="Pic" src="assets/media/users/300_12.jpg" />
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            Matt Pears
                          </a>
                          <span className="text-muted font-size-sm">2 Hours</span>
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                        How likely are you to recommend our company to your
                        friends and family?
                      </div>
                    </div>
                    {/*end::Message In*/}
                    {/*begin::Message Out*/}
                    <div className="d-flex flex-column mb-5 align-items-end">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-muted font-size-sm">3 minutes</span>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            You
                          </a>
                        </div>
                        <div className="symbol symbol-circle symbol-40 ml-3">
                          <img alt="Pic" src="assets/media/users/300_21.jpg" />
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                        Hey there, we’re just writing to let you know that
                        you’ve been subscribed to a repository on GitHub.
                      </div>
                    </div>
                    {/*end::Message Out*/}
                    {/*begin::Message In*/}
                    <div className="d-flex flex-column mb-5 align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-40 mr-3">
                          <img alt="Pic" src="assets/media/users/300_21.jpg" />
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            Matt Pears
                          </a>
                          <span className="text-muted font-size-sm">
                            40 seconds
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                        Ok, Understood!
                      </div>
                    </div>
                    {/*end::Message In*/}
                    {/*begin::Message Out*/}
                    <div className="d-flex flex-column mb-5 align-items-end">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-muted font-size-sm">Just now</span>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            You
                          </a>
                        </div>
                        <div className="symbol symbol-circle symbol-40 ml-3">
                          <img alt="Pic" src="assets/media/users/300_21.jpg" />
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                        You’ll receive notifications for all issues, pull
                        requests!
                      </div>
                    </div>
                    {/*end::Message Out*/}
                    {/*begin::Message In*/}
                    <div className="d-flex flex-column mb-5 align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-40 mr-3">
                          <img alt="Pic" src="assets/media/users/300_12.jpg" />
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            Matt Pears
                          </a>
                          <span className="text-muted font-size-sm">
                            40 seconds
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                        You can unwatch this repository immediately by clicking
                        here:
                        <a href="#">https://github.com</a>
                      </div>
                    </div>
                    {/*end::Message In*/}
                    {/*begin::Message Out*/}
                    <div className="d-flex flex-column mb-5 align-items-end">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-muted font-size-sm">Just now</span>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            You
                          </a>
                        </div>
                        <div className="symbol symbol-circle symbol-40 ml-3">
                          <img alt="Pic" src="assets/media/users/300_21.jpg" />
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                        Discover what students who viewed Learn Figma - UI/UX
                        Design. Essential Training also viewed
                      </div>
                    </div>
                    {/*end::Message Out*/}
                    {/*begin::Message In*/}
                    <div className="d-flex flex-column mb-5 align-items-start">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-circle symbol-40 mr-3">
                          <img alt="Pic" src="assets/media/users/300_12.jpg" />
                        </div>
                        <div>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            Matt Pears
                          </a>
                          <span className="text-muted font-size-sm">
                            40 seconds
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                        Most purchased Business courses during this sale!
                      </div>
                    </div>
                    {/*end::Message In*/}
                    {/*begin::Message Out*/}
                    <div className="d-flex flex-column mb-5 align-items-end">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-muted font-size-sm">Just now</span>
                          <a
                            href="#"
                            className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                          >
                            You
                          </a>
                        </div>
                        <div className="symbol symbol-circle symbol-40 ml-3">
                          <img alt="Pic" src="assets/media/users/300_21.jpg" />
                        </div>
                      </div>
                      <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                        Company BBQ to celebrate the last quater achievements
                        and goals. Food and drinks provided
                      </div>
                    </div>
                    {/*end::Message Out*/}
                  </div>
                  {/*end::Messages*/}
                </div>
                {/*end::Scroll*/}
              </div>
              {/*end::Body*/}
              {/*begin::Footer*/}
              <div className="card-footer align-items-center">
                {/*begin::Compose*/}
                <textarea
                  className="form-control border-0 p-0"
                  rows="2"
                  placeholder="Type a message"
                ></textarea>
                <div className="d-flex align-items-center justify-content-between mt-5">
                  <div className="mr-3">
                    <a href="#" className="btn btn-clean btn-icon btn-md mr-1">
                      <i className="flaticon2-photograph icon-lg"></i>
                    </a>
                    <a href="#" className="btn btn-clean btn-icon btn-md">
                      <i className="flaticon2-photo-camera icon-lg"></i>
                    </a>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6"
                    >
                      Send
                    </button>
                  </div>
                </div>
                {/*begin::Compose*/}
              </div>
              {/*end::Footer*/}
            </div>
            {/*end::Card*/}
          </div>
        </div>
      </div>
      {/*end::Chat Panel*/}
      {/*begin::Scrolltop*/}
      <div id="kt_scrolltop" className="scrolltop">
        <span className="svg-icon">
          {/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Navigation/Up-2.svg*/}

          {/*end::Svg Icon*/}
        </span>
      </div>
      {/*end::Scrolltop*/}

      {/*begin::Demo Panel*/}
      <div id="kt_demo_panel" className="offcanvas offcanvas-right p-10">
        {/*begin::Header*/}
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
          <h4 className="font-weight-bold m-0">Select A Demo</h4>
          <a
            href="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_demo_panel_close"
          >
            <i className="ki ki-close icon-xs text-muted"></i>
          </a>
        </div>
        {/*end::Header*/}
        {/*begin::Content*/}
        <div className="offcanvas-content">
          {/*begin::Wrapper*/}
          <div className="offcanvas-wrapper mb-5 scroll-pull">
            <h5 className="font-weight-bold mb-4 text-center">Demo 1</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo offcanvas-demo-active">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo1.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="../../rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 2</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo2.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo2/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo2/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 3</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo3.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo3/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo3/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 4</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo4.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo4/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo4/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 5</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo5.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo5/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo5/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 6</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo6.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo6/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo6/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 7</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo7.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo7/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo7/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 8</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo8.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo8/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo8/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 9</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo9.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo9/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo9/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 10</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo10.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo10/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo10/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 11</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo11.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo11/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo11/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 12</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo12.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo12/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo12/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 13</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo13.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="https://preview.keenthemes.com/metronic/demo13/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow"
                  target="_blank"
                >
                  Default
                </a>
                <a
                  href="https://preview.keenthemes.com/metronic/demo13/rtl/layout/themes/aside-light.html"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow ml-3"
                  target="_blank"
                >
                  RTL Version
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 14</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo14.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 15</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo15.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 16</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo16.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 17</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo17.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 18</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo18.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 19</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo19.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 20</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo20.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 21</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo21.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 22</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo22.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 23</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo23.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 24</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo24.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 25</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo25.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 26</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo26.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 27</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo27.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 28</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo28.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 29</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo29.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
            <h5 className="font-weight-bold mb-4 text-center">Demo 30</h5>
            <div className="overlay rounded-lg mb-8 offcanvas-demo">
              <div className="overlay-wrapper rounded-lg">
                <img src="assets/media/demos/demo30.png" alt="" className="w-100" />
              </div>
              <div className="overlay-layer">
                <a
                  href="#"
                  className="btn btn-white btn-text-primary btn-hover-primary font-weight-boldest text-center min-w-75px shadow disabled opacity-90"
                >
                  Coming soon
                </a>
              </div>
            </div>
          </div>
          {/*end::Wrapper*/}
          {/*begin::Purchase*/}
          <div className="offcanvas-footer">
            <a
              href="https://1.envato.market/EA4JP"
              target="_blank"
              className="btn btn-block btn-danger btn-shadow font-weight-bolder text-uppercase"
            >
              Buy Metronic Now!
            </a>
          </div>
          {/*end::Purchase*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Demo Panel*/}
    </div>
  );
}

export default Dashboard;
