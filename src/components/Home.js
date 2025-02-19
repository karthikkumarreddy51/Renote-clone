import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../assets/homephoto.png';
import Renote from '../assets/Renote img.png';
import styled from 'styled-components'; // Import styled-components

// Styled components for better styling
const HeroSection = styled.div`
  /* Add any necessary styles for the hero section */
  text-align: center; /* Center the content */
  padding: 2rem; /* Add some padding */
`;

const HomeImage = styled.img`
  /* Styles for the main image */
  max-width: 100%; /* Make it responsive */
  height: auto;
  margin-bottom: 1rem; /* Add some space below */
`;

const RenoteImage = styled.img`
  /* Styles for the Renote image */
  max-width: 50%; /* Adjust as needed */
  height: auto;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  /* Styles for the description text */
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none; /* Remove default bullet points */
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem; /* Add some spacing between items */

  /* If you want bullet points back, uncomment and customize: */
  /* &.with-bullets {
    list-style-type: disc;
    margin-left: 20px;
  } */
`;

const ExploreButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/app');
  };

  return (
    <HeroSection>
      <HomeImage src={home} alt="Home" />
      <h1>Welcome to ReNoteAI</h1>
      <RenoteImage src={Renote} alt="Renote Logo" />
      <Description>
        Your ultimate smart note-taking app for enhanced productivity. Experience
        AI Chatbot assistance, Smart Templates, and seamless
        handwritten-to-digital conversion in one powerful workspace. Effortlessly
        capture, organize, and access your notes with advanced scanning and
        secure multi-cloud support. Unlock convenience and control over your
        note-taking experience today!
      </Description>

      <FeatureList>
        <FeatureItem> {/* Remove the class if you don't want bullets */}
          <strong>Smart Templates:</strong> Enhance productivity with ready-to-use
          templates for every task!
        </FeatureItem>
        <FeatureItem>
          <strong>Auto captures</strong> your notes in an instant for seamless
          digitization in the App!
        </FeatureItem>
        <FeatureItem>
          <strong>AI Chatbot:</strong> Your smart assistant to summarize, analyze,
          and elevate your note-taking effortlessly!
        </FeatureItem>
        <FeatureItem>
          <strong>OCR</strong> effortlessly converts your handwritten notes into
          digital text with exceptional accuracy!
        </FeatureItem>
      </FeatureList>

      <ExploreButton onClick={handleExploreClick}>Explore</ExploreButton>
    </HeroSection>
  );
};

export default Home;