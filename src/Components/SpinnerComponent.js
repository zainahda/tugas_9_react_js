import React from 'react';
import { Spinner, Stack } from 'react-bootstrap';

const SpinnerComponent = () => {
  return (
    <Stack direction="horizontal" gap={2}>
    <Spinner animation="border" variant="success" />
    <Spinner animation="grow" variant="success" />
    </Stack>
  )
}

export default SpinnerComponent;
