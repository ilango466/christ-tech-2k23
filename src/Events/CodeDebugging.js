import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CodeDebugging = () => {
  const [header, setHeader] = useState([]);
  const [alldata, setAllData] = useState([]);

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
            const result = [];

            raw_data.table.rows.forEach((col) => {
              var current_row = [];
              col.c.forEach((value) => {
                current_row.push(value.v);
              });
              result.push(current_row);
            });

            //   <<< HEADER >>>

            const header_value = [];
            raw_data.table.cols.forEach((col_name) => {
              header_value.push(col_name.label);
            });
            setHeader(header_value);

            // End - HEADER

            result.forEach((value) => {
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

    const myTimer = setInterval(() => {
      getData();
    }, 1000);

    return () => {
      clearInterval(myTimer);
    };
  });
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            {header.map((head_value, idx) => {
              if (idx !== 0)
                return (
                  <th key={idx} scope="col">
                    {head_value ? head_value : ""}
                  </th>
                );
              else
                return (
                  <th key={idx} scope="col">
                    {head_value ? head_value : ""}
                  </th>
                );
            })}
          </tr>
        </thead>
        <tbody>
          {alldata.map((k, idx) => {
            return (
              <tr key={idx}>
                <th scope="row">{k.Register_No ? k.Register_No : ""}</th>

                <td>{k.Name ? k.Name : ""}</td>
                <td>{k.College ? k.College : ""}</td>
                <td>{k.Technical ? k.Technical : ""}</td>
                <td>{k.Non_Tech_1 ? k.Non_Tech_1 : ""}</td>
                <td>{k.Non_Tech_2 ? k.Non_Tech_2 : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Link to={"/event"}>Click me</Link>
    </>
  );
};
export default CodeDebugging;
