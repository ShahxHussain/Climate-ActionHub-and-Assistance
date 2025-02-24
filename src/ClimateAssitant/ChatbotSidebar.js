import React from "react";
import { Container, Form } from "react-bootstrap";
import { FaLeaf } from "react-icons/fa"; // Leaf icon for eco theme
import "../ClimateAssitant/ChatbotSidebar.css"; // Import custom CSS

const Sidebar = ({ setApiKey }) => {
  return (
    <div className="sidebar">
      <Container className="d-flex flex-column align-items-center justify-content-center h-100">
        {/* API Key Input */}
        <Form className="mt-3 text-center">
          <Form.Group>
            <Form.Label className="text-white">Enter Together.ai API Key</Form.Label>
            <Form.Control
              type="password"
              placeholder="Together AI API Key"
              onChange={(e) => setApiKey(e.target.value)}
            />
          </Form.Group>
          {/* API Key Link */}
          <a 
            href="https://together.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="api-link"
          >
            Get your API here
          </a>
        </Form>

        <div className="vertical-text">
          C<br />L<br />I<br />M<br />A<br />T<br />E<br />
          C<br />H<br />A<br />N<br />G<br />E<br /><br />
          C<br />H<br />A<br />T<br />B<br />O<br />T
        </div>
        <FaLeaf className="leaf-icon" />
      </Container>
    </div>
  );
};

export default Sidebar;
