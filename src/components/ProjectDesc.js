import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProjectDesc = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <section>
      <Container>hello</Container>
    </section>
  );
};

export default ProjectDesc;
