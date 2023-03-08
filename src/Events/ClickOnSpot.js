import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clg_title from "../images/clg-title.png";
import ChristTech2K23 from "../images/ChristTech2K23.png";

const ClickOnSpot = () => {
  const [header, setHeader] = useState([]);
  const [alldata, setAllData] = useState([]);
  var count = 0;

  useEffect(() => {
    const getData = () => {
      try {
        fetch(
          "https://docs.google.com/spreadsheets/d/1jLYSARovCO_9AE-NtAG_EDLT4zZtLmkbtQQrY_ocHMA/gviz/tq?"
        )
          .then((res) => res.text())
          .then((rep) => {
            const data_string = rep.substring(47).slice(0, -2);
            const raw_data = JSON.parse(data_string);
            const row_data = [];
            const row_values = [];

            raw_data.table.rows.forEach((row_c) => {
              let current_row = [];
              if (row_c.c[0] !== null) {
                row_c.c.forEach((row_single_data) => {
                   if (row_single_data !== null) {
                     current_row.push(row_single_data.v);
                   }
                });
                row_values.push(current_row);
              } else return false;
            });

            //   <<< HEADER >>>

            const header_value = [];
            raw_data.table.cols.forEach((col_name) => {
              header_value.push(col_name.label);
            });
            setHeader(header_value);

            // End - HEADER

            row_values.forEach((value) => {
              let current_row = {};
              value.forEach((key, i) => {
                current_row[header[i]] = key;
              });
              row_data.push(current_row);
            });
            setAllData(row_data);
          });
      } catch {}
    };
    getData();

    return () => {
      // clearInterval(myTimer);
    };
  }, [header]);
  return (
    <>
      <div className="header">
        <div>
          <img className="clg-title" src={clg_title} alt="Nil" />
        </div>
        <div>
          <img className="clg-title" src={ChristTech2K23} alt="Nil" />
        </div>
        <div>
          <h3>CLICK ON SPOT</h3>
        </div>
      </div>
      <table style={{ textAlign: "center" }} className="table">
        <thead>
          <tr>
            <th style={{ width: "10%" }} scope="col">
              Serial No
            </th>
            <th style={{ width: "20%" }}>Register Number</th>
            <th style={{ width: "30%" }}>Student Name</th>
            <th>College</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {alldata.map((k, idx) => {
            if (k.Click_On_Spot) {
              return (
                <tr key={idx}>
                  <th scope="row">{++count}</th>
                  <td>{k.Register_No ? k.Register_No : ""}</td>
                  <td>{k.Name ? k.Name : ""}</td>
                  <td>{k.College ? k.College : ""}</td>
                  <td>
                    <Link
                      className="btn btn-primary btn-sm"
                      to={"/details/clickonspot-" + k.Register_No}
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              );
            } else return null;
          })}
        </tbody>
      </table>

      <div className="text-center m-3">
        <Link className="home-btn btn btn-outline-info " to={"/"}>
          Click me For Home
        </Link>
      </div>
    </>
  );
};
export default ClickOnSpot;
