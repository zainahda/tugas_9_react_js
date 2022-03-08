import React from "react";
import { Table, ProgressBar } from "react-bootstrap";
import dataPemain from "../Data/DataPemain";

const TableComponent = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama Pemain</th>
          <th>Tim</th>
          <th>Transfer</th>
          <th>Proses Transfer</th>
        </tr>
      </thead>
      <tbody>
        {dataPemain.map((pemain, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{pemain.nama.toUpperCase()}</td>
            <td>{pemain.tim.toUpperCase()}</td>
            <td>{pemain.transfer.toUpperCase()}</td>
            <td>
              <ProgressBar striped variant="success" now={pemain.proses} label={`${pemain.proses}%`}/>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
