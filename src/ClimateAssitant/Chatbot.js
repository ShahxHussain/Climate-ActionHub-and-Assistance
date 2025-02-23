import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Container, Row, Col} from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import "../ClimateAssitant/Chatbot.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../ClimateAssitant/ChatbotSidebar";

export function Chatboty() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [apiKey, setApiKey] = useState(""); // Store API Key from Sidebar
  const chatBoxRef = useRef(null);

  // System prompt for climate-related queries
  const systemPrompt = `You are a Climate Change Assistant. Provide users with accurate and insightful information on climate education, 
    resources, guidance, and trends/predictions based on their queries. 
    If an unrelated question is asked, respond that you are unable to answer it. 
    If asked 'who are you', say: 'I am the Climate Change Assistant, built by Syed Shah Hussain & Atif Shah for the Climate Change Maker 2025 initiative.'`;

  // Scroll to the latest message
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to send message
  const sendMessage = async () => {
    if (!input.trim() || !apiKey.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        "https://api.together.ai/chat/completions",
        {
          model: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const botMessage = {
        text: response.data.choices[0].message.content,
        sender: "bot",
      };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages([...messages, userMessage, { text: "Error fetching response. Try again later.", sender: "bot" }]);
    }

    setInput(""); // Clear input
  };

  return (
    <>
      <Sidebar setApiKey={setApiKey} />
      <Container fluid className="chatbot-container">
        <h1 className="text-center my-4">What do you want to search?</h1>

        {/* Climate-Related Cards */}
        <Row className="justify-content-center mt-4 g-2">
  {[
    { 
      title: "Climate Change", 
      text: "Explore the causes, effects, and solutions to global warming. Learn how climate change is impacting ecosystems, weather patterns, and human lives." 
    },
    { 
      title: "Deforestation", 
      text: "Understand the consequences of deforestation on biodiversity, air quality, and climate. Discover sustainable solutions to protect our forests." 
    },
    { 
      title: "Carbon Footprint", 
      text: "Find out how daily activities contribute to carbon emissions and discover practical ways to reduce your environmental impact for a greener planet." 
    }
  ].map((item, index) => (
    <Col xs={12} sm={6} md={4} key={index} className="d-flex justify-content-center">
      <Card border="success" className="custom-card">
        <Card.Header className="card-header">{item.title}</Card.Header>
        <Card.Body>
          <Card.Text className="card-text">{item.text}</Card.Text>
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
