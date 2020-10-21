import React from 'react'

export default function HeaderMobile() {
    return (
        <div>
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
        </div>
    )
}
