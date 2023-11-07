import React from "react";
import "./Verifications.css";
import PageNav from "../../components/PageNav";
import ShopCard from "../../images/shop-card.jpg";
import ShopBill from "../../images/shop-bill.jpg";
import NicBack from "../../images/nic-back.jpg";
import NicFront from "../../images/nic-front.jpg";

const Verifications = () => {
  return (
    <div className="main-content m-5">
      {/*Page Title */}
      <div className="row">
        <h1 className="fw-bold pb-2">USER VERIFICATIONS</h1>
        <hr />
        {/*Analytics Section*/}
        <div className="d-flex mb-3">
          <h6 className="me-5">Total Verified Users: 12</h6>
          <h6 className="me-5">Pending Requests: 10</h6>
          <h6 className="me-5">Rejected Requests: 2</h6>
        </div>

        {/*Search Section*/}
        <div className="row align-items-center mb-3">
          <div className="col-1 me-2">
            <h6 className="mb-0 me-3">Search By: </h6>
          </div>
          <div className="col-3 col-xxl-2 d-flex align-items-center">
            <select class="form-select search-select">
              <option selected>--Select--</option>
              <option value="1">Verification ID</option>
              <option value="2">User ID</option>
              <option value="3">User Name</option>
              <option value="4">CNIC</option>
            </select>
          </div>
          <div className="col-5 col-xxl-3 d-flex align-items-center">
            <input
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="col-1">
            <button className="btn button text-light">Search</button>
          </div>
        </div>

        {/*Filter Section*/}
        <div className="row align-items-center mb-4">
          <div className="col-1 col-xxl-1 me-2">
            <h6 className="mb-0 me-3 text-xxl-wrap">Status: </h6>
          </div>
          <div className="search-section col-3 col-xxl-2 align-items-center">
            <select class="form-select search-select">
              <option selected>--Select--</option>
              <option value="1">Verified</option>
              <option value="2">Pending</option>
              <option value="2">Rejected</option>
            </select>
          </div>
          <div className="col-1">
            <button className="btn button text-light">Apply</button>
          </div>
        </div>


        {/*Table Section*/}
        <table className="table table-hover my-4">
          <thead className="table-dark">
            <tr>
              <th className="col-1" scope="col">
                ID
              </th>
              <th className="col-1" scope="col">
                User ID
              </th>
              <th className="col-3" scope="col">
                User Name
              </th>
              <th className="col-1" scope="col">
                NIC
              </th>
              <th className="col-1" scope="col">
                NIC Front
              </th>
              <th className="col-1" scope="col">
                NIC Back
              </th>
              <th className="col-1" scope="col">
                Shop Card
              </th>
              <th className="col-1" scope="col">
                Shop Bill
              </th>
              <th className="col-1" scope="col">
                Status
              </th>
              <th className="col-1" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="pending">
              <td>4241</td>
              <td className="">1101</td>
              <td>Bruce Wayne</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Pending</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="">
              <td>4242</td>
              <td className="">1102</td>
              <td>Marques Brownlee</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Approved</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="">
              <td>4243</td>
              <td className="">1103</td>
              <td>James Hunt</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Rejected</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="pending">
              <td>4241</td>
              <td className="">1101</td>
              <td>Bruce Wayne</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Pending</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="">
              <td>4242</td>
              <td className="">1102</td>
              <td>Marques Brownlee</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Approved</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="">
              <td>4243</td>
              <td className="">1103</td>
              <td>James Hunt</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Rejected</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="pending">
              <td>4241</td>
              <td className="">1101</td>
              <td>Bruce Wayne</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Pending</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="">
              <td>4242</td>
              <td className="">1102</td>
              <td>Marques Brownlee</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Approved</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
            <tr className="">
              <td>4243</td>
              <td className="">1103</td>
              <td>James Hunt</td>
              <td>42101-1231343-2</td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicFront}
                    class="object-fit-cover w-100 h-100"
                    alt="nic-front"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={NicBack}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopCard}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>
                <div
                  className="fixed-size-container"
                  style={{ width: "100px", height: "80px" }}
                >
                  <img
                    src={ShopBill}
                    class="object-fit-cover w-100 h-100"
                    alt="review-img"
                  />
                </div>
              </td>
              <td>Rejected</td>
              <td>
                <a href="" className="btn button btn-sm text-light me-5 mb-2">
                  View
                </a>
                <a
                  href="#"
                  className="btn approve-button btn-sm text-light me-2"
                >
                  <i class="bi bi-check-lg"></i>
                </a>
                <a href="#" className="btn reject-button btn-sm text-light">
                  <i class="bi bi-x-lg"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <PageNav />
      </div>
    </div>
  );
};

export default Verifications;
