import React from 'react';
import styled from 'styled-components';
import AppImage from '../assets/app.png'; // Make sure path is correct

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const AppStyledImage = styled.img`
  max-width: 80%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ContentAndVideo = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const VideoContainer = styled.div`
  flex: 1.5;
  position: relative;
  padding-bottom: 50%; /* Increased width */
  height: 0;
  overflow: hidden;
  width: 90%;
  margin-left: -2rem; /* Moved video slightly left */

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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

const AppComponent = () => {
  const videoId = "3N746CqV5DM"; // Updated with provided YouTube video ID

  return (
    <AppContainer>
      <AppContent>
        <AppStyledImage src={AppImage} alt="App Screenshot" />
        <h2>App</h2>
      </AppContent>

      <ContentAndVideo>
        <TextContent>
          <span><h1><b>How to Use Our App?</b></h1></span>
          <p>
            Watch our demo video beside to see ReNote AI in action!
          </p>
          <ExploreButton>Explore</ExploreButton>
        </TextContent>

        <VideoContainer>
          <iframe
            title="App Demo Video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?si=jcTMIiy9TcQRjcbl`} // Ensures the correct video plays
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </VideoContainer>
      </ContentAndVideo>
      <p>Non-Tearable</p> {/* Added the "Non-Tearable" text */}
    </AppContainer>
  );
};

export default AppComponent;
