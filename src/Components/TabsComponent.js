import React from "react";
import { Tabs, Tab, Sonnet } from 'react-bootstrap';
import TableComponent from "./TableComponent";

const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Semua Transfer">
        <TableComponent />
      </Tab>
      <Tab eventKey="liga-premier-inggris" title="Liga Premier Inggris">
        <h1>Ini Halaman Liga Premier Inggris</h1>
      </Tab>
      <Tab eventKey="serie-a" title="Serie A">
        <h1>Ini Halaman Serie A</h1>
      </Tab>
      <Tab eventKey="divisi-primera" title="Divisi Primera">
        <h1>Ini Halaman Divisi Primera</h1>
      </Tab>
      <Tab eventKey="bundes-liga" title="Bundes Liga">
        <h1>Ini Halaman Bundes Liga</h1>
      </Tab>
      <Tab eventKey="liga-1-indonesia" title="Liga 1 Indonesia">
        <h1>Ini Halaman Liga 1 Indonesia</h1>
      </Tab>
    </Tabs>
  );
};

export default TabsComponent;
