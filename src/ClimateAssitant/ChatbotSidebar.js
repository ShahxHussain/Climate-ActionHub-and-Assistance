import React from "react";
import { Container } from "react-bootstrap";
import { FaLeaf } from "react-icons/fa"; // Leaf icon for eco theme
import "../ClimateAssitant/ChatbotSidebar.css"; // Import custom CSS

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Container className="d-flex flex-column align-items-center justify-content-center h-100">
        <div className="vertical-text">
            C<br/>L<br/>I<br />M<br />A<br />T<br />E<br />
            C<br/>H<br/>A<br />N<br />G<br />E<br /><br/>
          C<br />H<br />A<br />T<br />B<br />O<br />T
        </div>
        <FaLeaf className="leaf-icon" />
      </Container>
    </div>
  );
};

export default Sidebar;


