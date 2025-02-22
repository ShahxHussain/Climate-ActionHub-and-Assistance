import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import "../ClimateAssitant/Chatbot.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../ClimateAssitant/ChatbotSidebar";

export function Chatboty() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const chatBoxRef = useRef(null);

  const botResponses = [
    "Climate change is a serious issue affecting the planet.",
    "Deforestation contributes to global warming.",
    "Reducing plastic use helps keep oceans clean.",
    "Renewable energy is the future for a sustainable world.",
    "Recycling helps reduce waste and conserve resources.",
  ];

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botMessage = { 
      text: botResponses[counter % botResponses.length], 
      sender: "bot" 
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
    setCounter(counter + 1);
  };

  return (
    <>
      <Sidebar />
      <Container fluid className="chatbot-container">
        <h1 className="text-center my-4">What do you want to search?</h1>

        {/* Climate-related Cards */}
        <Row className="justify-content-center align-items-center mt-5 g-5">
          {[
            { title: "Climate Change", text: "Learn about global warming and its impact.", variant: "success" },
            { title: "Deforestation", text: "Find out how tree loss affects the environment.", variant: "danger" },
            { title: "Carbon Footprint", text: "Ways to reduce your carbon emissions.", variant: "warning" },
          ].map((item, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="d-flex justify-content-center">
              <Card bg={item.variant} text="white" className="shadow card-custom">
                <Card.Header>{item.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Chatbox */}
        <div ref={chatBoxRef} className="chat-box mt-4 mx-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input-container d-flex mt-3">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="chat-input"
          />
          <Button onClick={sendMessage} className="send-button">
            <FaPaperPlane />
          </Button>
        </div>
      </Container>
    </>
  );
}
