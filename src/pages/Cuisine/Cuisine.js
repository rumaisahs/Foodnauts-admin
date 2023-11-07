import React from "react";
import "./cuisine.css";

const Cuisine = () => {
  return (
    <div className="main-content m-5">
      <div className="row">
        {/*Page Title */}
        <h1 className="fw-bold pb-2">Cuisine</h1>
        <hr/>
        <div className="d-flex mb-3">
          <h6 className="me-5">Total Cuisine: 10</h6>
        </div>

        {/*Search Section*/}

        <div className="row align-items-center mb-3">
          <div className="col-8 col-xxl-8 d-flex pe-0">
            <input
              type="keyword"
              class="form-control text-dark user-search-box"
              id="search-box"
              aria-describedby="search-keyword"
              placeholder="Enter Keyword"
              style={{ width: "100%" }}
            ></input>
          </div>
          <div className="col-3">
            <button className="btn button text-light">Search</button>
          </div>
        </div>


        {/*Cuisine Table Section*/}
        <div className="col-8 pb-4">
          <table className="table table-hover mt-2 mb-4">
            <thead className="table-dark">
              <tr>
                <th className="col-1" scope="col">
                  #
                </th>
                <th className="col-4" scope="col">
                  Cuisine Name
                </th>
                <th className="col-1" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Italian</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Desi</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Chinese</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Korean</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Seafood</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>Indian</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>Mexican</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>Japanese</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>Arabic</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Continental</td>
                <td>
                  <button className="btn button btn-sm text-light">Edit</button>
                  <button className="btn button btn-sm text-light ms-2"><i class="bi bi-trash3-fill"></i></button>
                </td>
              </tr>

            </tbody>
          </table>
        <button className="btn button px-4">Add</button>
        </div>
<hr/>
        </div>
      </div>
  );
};

export default Cuisine;
