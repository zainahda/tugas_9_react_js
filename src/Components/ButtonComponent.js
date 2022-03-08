import React from "react";
import {
  Button,
  ButtonGroup,
  Stack,
  Popover,
  OverlayTrigger,
  Fade,
  Container,
} from "react-bootstrap";
import { useState } from "react";

const ButtonComponent = () => {
  const [open, setOpen] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Informasi Website</Popover.Header>
      <Popover.Body>
        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
        tentang berita olahraga
      </Popover.Body>
    </Popover>
  );

  return (
    <Container>
      <ButtonGroup className="mx">
          <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className="mx-1" variant="primary">Informasi</Button>
          </OverlayTrigger>
          <Button
          
            variant="primary"
            onClick={() => setOpen(!open)}
            aria-controls="example-fade-text"
            aria-expanded={open}
          >
            Versi Website
          </Button>
          <br />
      </ButtonGroup>
          <Fade style={{marginLeft: "100px"}} in={open}>
            <div id="example-fade-text">Akses Sport V1.0</div>
          </Fade>
    </Container>
  );
};

export default ButtonComponent;
