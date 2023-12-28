import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, id, description, shortDescription, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {/* <Link to={`/project/${id}`}> */}
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{shortDescription}</span>
        </div>
      </div>
      {/* </Link>  */}
    </Col>
  )
}
