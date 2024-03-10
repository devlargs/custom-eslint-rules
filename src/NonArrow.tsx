import React from "react";
import styled from "styled-components";

const Gago = styled.div``;

export function NonArrow() {
  React.useEffect(() => {
    console.log("Gago");
  }, []);

  return <Gago id="hehehe">hehe</Gago>;
}
