import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import HeaderMobile from "./HeaderMobile";
function Layout(props) {
    return (
        <div>
            {/*begin::Main*/}
            <HeaderMobile/>
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="d-flex flex-row flex-column-fluid page">
                    <Aside/>
                    {/*begin::Wrapper*/}
                    <div
                        className="d-flex flex-column flex-row-fluid wrapper"
                        id="kt_wrapper"
                    >

                        <Header/>
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
                                    {props.children}
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
        </div>
    );
}

export default Layout;
