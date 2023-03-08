import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./details.css";
import { useParams } from "react-router-dom";
import clg_title from "./images/clg-title.png";
import male_avatar from "./images/male-avatar.png";
import female_avatar from "./images/female-avatar.png";
import ChristTech2K23 from "./images/ChristTech2K23.png";

const Details = () => {
  const param = useParams().id;
  const [alldata, setAllData] = useState({});
  const prev = param.slice(0, param.indexOf("-"));
  const id = param.slice(param.indexOf("-") + 1);

  useEffect(() => {
    const getData = () => {
      try {
        fetch(
          "https://docs.google.com/spreadsheets/d/1rGoiU_rtE7Z1_8uxwxjNW83wD-f5JSDrAYsrytG2gsU/gviz/tq?"
        )
          .then((res) => res.text())
          .then((rep) => {
            const data_string = rep.substring(47).slice(0, -2);
            const raw_data = JSON.parse(data_string);
            const row_data = {};
            const row_values = [];

            raw_data.table.rows.forEach((row_c) => {
              if (
                row_c.c !== null &&
                row_c.c[1] !== null &&
                row_c.c[11].v === id
              ) {
                console.log(row_c.c[11].v);
                row_c.c.forEach((row_single_data) => {
                  if (row_single_data !== null) {
                    row_values.push(row_single_data.v);
                  }
                });
              } else return false;
            });
            //   <<< HEADER >>>

            const header_value = [];
            raw_data.table.cols.forEach((col_name) => {
              header_value.push(col_name.label);
            });

            // End - HEADER

            row_values.forEach((key, i) => {
              row_data[header_value[i]] = key;
            });
            setAllData(row_data);
          });
      } catch {}
    };
    getData();

    return () => {
      // clearInterval(myTimer);
    };
  },[id]);

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
          <h3>Student Details</h3>
        </div>
      </div>
      <div className="container profile-wrapper ootstrap snippets bootdey">
        <div className="row">
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                {alldata.Sex === "Male" ? (
                  <img className="round" src={male_avatar} alt="Nil" />
                ) : (
                  <img className="round" src={female_avatar} alt="Nil" />
                )}
                <h1>{alldata.Register_Number}</h1>
              </div>
            </div>
          </div>
          <div className="profile-info col-md-9">
            <div className="panel">
              <div className="panel-body bio-graph-info">
                <h1>
                  <b>Bio Graph</b>
                </h1>
                <div className="row">
                  <div className="bio-row d-flex">
                    <div>
                      <strong>Full Name </strong>
                    </div>
                    <div>
                      <span>: {alldata.Name}</span>
                    </div>
                  </div>
                  <div className="bio-row d-flex">
                    <div>
                      <strong>Mobile No </strong>
                    </div>
                    <div>
                      <span>: {alldata.Phone_Number}</span>
                    </div>
                  </div>
                  <div className="bio-row d-flex">
                    <div>
                      <strong>Department </strong>
                    </div>
                    <div>
                      <span>: {alldata.Dept}</span>
                    </div>
                  </div>
                  <div className="bio-row d-flex">
                    <div>
                      <strong>Year </strong>
                    </div>
                    <div>
                      <span>: {alldata.Year}</span>
                    </div>
                  </div>
                  <div className="bio-row d-flex">
                    <div>
                      <strong>Email </strong>
                    </div>
                    <div>
                      <span>: {alldata.Email_Id}</span>
                    </div>
                  </div>
                  <div className="bio-row d-flex">
                    <div>
                      <strong>College Name </strong>
                    </div>
                    <div>
                      <span>: {alldata.College_Name}</span>
                    </div>
                  </div>
                  <div className="bio-row d-flex">
                    <div>
                      <strong>Events </strong>
                    </div>
                    <div>
                      <span>: {alldata.Events}</span>
                    </div>
                  </div>
                  <div className="bio-row d-flex">
                    <div>
                      <strong>Address </strong>
                    </div>
                    <div>
                      <span>: {alldata.Address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="text-center m-3">
        <Link className="home-btn btn btn-outline-info " to={"/" + prev}>
          Go Back
        </Link>
      </div>
    </>
  );
};

export default Details;
