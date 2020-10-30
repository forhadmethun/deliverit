import React from "react";
import Layout from "../components/Layout";

function Dashboard() {
    return (
        <Layout>
            {/*begin::Dashboard*/}
            <div class="row">
                <div class="col-xxl-9 order-2 order-xxl-1">
                    {/*begin::Advance Table Widget 2*/}
                    <div class="card card-custom card-stretch gutter-b">
                        {/*begin::Header*/}
                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label font-weight-bolder text-dark">New Orders</span>
                            </h3>
                            <div class="card-toolbar">
                                    <a href="add-user.html" className="btn btn-light-primary font-weight-bold ml-2">Add Order</a>
                            </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div class="card-body pt-2 pb-0 mt-n3">
                            <div class="tab-content mt-5" id="myTabTables11">
                                <div class="tab-pane fade show active" id="kt_tab_pane_11_3" role="tabpanel"
                                     aria-labelledby="kt_tab_pane_11_3">
                                    {/*begin::Table*/}
                                    <div class="table-responsive">
                                        <table class="table table-vertical-center">
                                            <thead>
                                            <tr>
                                                <th class="p-0 w-40px text-center"> Order No</th>
                                                <th class="p-0 min-w-200px text-center">Placed By</th>
                                                <th class="p-0 min-w-100px text-center">Placement Time</th>
                                                <th class="p-0 min-w-125px text-center">Pickup From</th>
                                                <th class="p-0 min-w-110px text-center">Delivery To</th>
                                                <th class="p-0 min-w-110px text-center">Amount</th>
                                                <th class="p-0 min-w-150px text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td class="pl-0 py-4">
                                                    <div class="symbol symbol-50 symbol-light mr-1">
																				<span class="symbol-label">
																					1001
																				</span>
                                                    </div>
                                                </td>
                                                <td class="pl-0">
                                                    <a href="#"
                                                       class="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Sant
                                                        Outstanding</a>
                                                    <div>
                                                        <span class="font-weight-bolder">Email:</span>
                                                        <a class="text-muted font-weight-bold text-hover-primary"
                                                           href="#">bprow@bnc.cc</a>
                                                    </div>
                                                </td>
                                                <td class="text-right">
                                                    <span class="text-dark-75 font-weight-bolder d-block font-size-lg">13.00, 25 Oct</span>
                                                </td>
                                                <td class="text-right">
                                                    <span class="text-dark-75 font-weight-bolder d-block font-size-lg">Kristiine, Tallinn</span>
                                                </td>
                                                <td class="text-right">
                                                    <span
                                                        class="text-dark-75 font-weight-bolder d-block font-size-lg">Piirita</span>
                                                </td>
                                                <td class="text-right">
                                                    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">€20</span>
                                                </td>
                                                <td class="text-center pr-0">
                                                    <a href="#" class="btn btn-icon btn-light btn-hover-primary btn-sm">
																				<span
                                                                                    title="Description"
                                                                                    class="svg-icon svg-icon-md svg-icon-primary">
																					{/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/General/Settings-1.svg*/}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        xlink="http://www.w3.org/1999/xlink"
                                                                                        width="24px" height="24px"
                                                                                        viewBox="0 0 24 24"
                                                                                        version="1.1">
																						<g stroke="none"
                                                                                           stroke-width="1" fill="none"
                                                                                           fill-rule="evenodd">
																							<rect x="0" y="0" width="24"
                                                                                                  height="24"></rect>
																							<path
                                                                                                d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z"
                                                                                                fill="#000000"></path>
																							<path
                                                                                                d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z"
                                                                                                fill="#000000"
                                                                                                opacity="0.3"></path>
																						</g>
																					</svg>
                                                                                    {/*end::Svg Icon*/}
																				</span>
                                                    </a>
                                                    <a href="#"
                                                       class="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
																				<span
                                                                                    title="Assign"
                                                                                    class="svg-icon svg-icon-md svg-icon-primary">
																					{/*begin::Svg Icon | path:/metronic/theme/html/demo1/dist/assets/media/svg/icons/Communication/Write.svg*/}
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        xlink="http://www.w3.org/1999/xlink"
                                                                                        width="24px" height="24px"
                                                                                        viewBox="0 0 24 24"
                                                                                        version="1.1">
																						<g stroke="none"
                                                                                           stroke-width="1" fill="none"
                                                                                           fill-rule="evenodd">
																							<rect x="0" y="0" width="24"
                                                                                                  height="24"></rect>
																							<path
                                                                                                d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                                                                                fill="#000000"
                                                                                                fill-rule="nonzero"
                                                                                                transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"></path>
																							<path
                                                                                                d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                                                                                fill="#000000"
                                                                                                fill-rule="nonzero"
                                                                                                opacity="0.3"></path>
																						</g>
																					</svg>
                                                                                    {/*end::Svg Icon*/}
																				</span>
                                                    </a>

                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                    {/*end::Table*/}
                                </div>
                                {/*end::Tap pane*/}
                            </div>
                        </div>
                        {/*end::Body*/}
                    </div>
                    {/*end::Advance Table Widget 2*/}
                </div>
                <div class="col-lg-3 col-xxl-3 order-1 order-xxl-2">
                    {/*begin::List Widget 3*/}
                    <div class="card card-custom card-stretch gutter-b">
                        {/*begin::Header*/}
                        <div class="card-header border-0">
                            <h3 class="card-title font-weight-bolder text-dark">Drivers</h3>
                            <div class="card-toolbar">
                                <span className="btn btn-light-primary font-weight-bold ml-2">Add Driver</span>
                            </div>
                        </div>
                        {/*end::Header*/}
                        {/*begin::Body*/}
                        <div class="card-body pt-2">
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center mb-10">
                                {/*begin::Symbol*/}
                                <div class="symbol symbol-40 symbol-light-success mr-5">
														<span class="symbol-label">
															<img
                                                                src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/avatars/009-boy-4.svg"
                                                                class="h-75 align-self-end" alt=""/>
														</span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Text*/}
                                <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                                    <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Ricky Hunt</a>
                                    <span class="text-muted"><span className="label label-xl label-inline label-light-success">Active</span></span>
                                </div>
                                {/*end::Text*/}
                                {/*begin::Dropdown*/}
                                <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title=""
                                     data-placement="left" data-original-title="Quick actions">
                                    <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ki ki-bold-more-hor"></i>
                                    </a>
                                    <div class="dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right"></div>
                                </div>
                                {/*end::Dropdown*/}
                            </div>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <div class="d-flex align-items-center mb-10">
                                {/*begin::Symbol*/}
                                <div class="symbol symbol-40 symbol-light-success mr-5">
														<span class="symbol-label">
															<img
                                                                src="https://preview.keenthemes.com/metronic/theme/html/demo1/dist/assets/media/svg/avatars/006-girl-3.svg"
                                                                class="h-75 align-self-end" alt=""/>
														</span>
                                </div>
                                {/*end::Symbol*/}
                                {/*begin::Text*/}
                                <div class="d-flex flex-column flex-grow-1 font-weight-bold">
                                    <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">Anne Clarc</a>
                                    <span class="text-muted"><span className="label label-xl label-inline label-light-danger">Offline</span></span>
                                </div>
                                {/*end::Text*/}
                                {/*begin::Dropdown*/}
                                <div class="dropdown dropdown-inline ml-2" data-toggle="tooltip" title=""
                                     data-placement="left" data-original-title="Quick actions">
                                    <a href="#" class="btn btn-hover-light-primary btn-sm btn-icon"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="ki ki-bold-more-hor"></i>
                                    </a>
                                </div>
                                {/*end::Dropdown*/}
                            </div>
                            {/*end::Item*/}
                        </div>
                        {/*end::Body*/}
                    </div>
                    {/*end::List Widget 3*/}
                </div>
            </div>
            {/*end::Dashboard*/}
        </Layout>
);
}

export default Dashboard;
