import React, { useRef } from 'react';
import styled from 'styled-components';
import AppImage from '../assets/app.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

// Styled Components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  text-align: center;
  width: 100%;
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

const AppImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const AppStyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const SmallButton = styled.button`
  position: absolute;
  left: 16.5%;
  top: 70%;
  transform: translate(-50%, -50%);
  background-color: rgb(16, 248, 16);
  color: white;
  padding: 18.5px 35.5px; /* Increased padding */
  border: none;
  border-radius: 14px; /* Slightly larger border-radius */
  cursor: pointer;
  font-size: 16px; /* Increased font size */
  transition: background-color 0.3s ease;
  z-index: 1;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 204, 0, 0.9);
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size for smaller screens */
    padding: 12px 20px; /* Adjust padding for responsiveness */
  }
`;


const ContentAndVideo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 2rem;
  margin-top: 2rem;
`;

const TextContent = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ExploreButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
`;

// React Component
const AppComponent = () => {
  const videoId = "3N746CqV5DM";
  const bottomRef = useRef(null);

  // Function to scroll to download section
  const handleDownloadClick = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to top
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppContainer>
      <AppContent>
        <AppImageContainer>
          <AppStyledImage src={AppImage} alt="App Screenshot" />
          <SmallButton onClick={handleDownloadClick}>Download Now</SmallButton>
        </AppImageContainer>
        <h2>App</h2>
      </AppContent>

      <ContentAndVideo>
        <TextContent>
          <h1><b>How to Use Our App?</b></h1>
          <p>Watch our demo video below to see ReNote AI in action!</p>
          <ExploreButton onClick={handleExploreClick}>Explore</ExploreButton>
        </TextContent>

        <VideoContainer>
          <StyledIframe
            title="App Demo Video"
            src={`https://www.youtube.com/embed/${videoId}?si=jcTMIiy9TcQRjcbl`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </VideoContainer>
      </ContentAndVideo>
      <p ref={bottomRef}>Non-Tearable</p>
    </AppContainer>
  );
};

export default AppComponent;
