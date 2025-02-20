import React, { useRef } from 'react';
import styled from 'styled-components';
import AppImage from '../assets/app.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

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
  padding: 18.5px 35.5px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  z-index: 1;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 204, 0, 0.9);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 20px;
  }
`;

// NEW: Features Section
const FeaturesSection = styled.div`
  width: 80%;
  margin: 0 auto 2rem;
  text-align: center;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 992px) {
    /* For tablets or smaller devices, use fewer columns */
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Container for text + video
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

// NEW: Testimonial Section
const TestimonialSection = styled.div`
  margin-top: 2rem;
  text-align: center;
  width: 80%;
`;

const AppComponent = () => {
  const videoId = '3N746CqV5DM';
  const bottomRef = useRef(null);

  // Function to scroll to download section
  const handleDownloadClick = () => {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Function to scroll to top
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContainer>
      <AppContent>
        <AppImageContainer>
          <AppStyledImage src={AppImage} alt="App Screenshot" />
          <SmallButton onClick={handleDownloadClick}>Download Now</SmallButton>
        </AppImageContainer>

        <h2>App</h2>

        {/* ------------------ App Features Section ------------------ */}
        <FeaturesSection>
          <h2>App Features</h2>
          <FeaturesGrid>
            <FeatureItem>
              <h3>AI Chatbot</h3>
              <p>
                Analyze, summarize, and interact effortlessly with your virtual assistant at hand.
              </p>
            </FeatureItem>
            <FeatureItem>
              <h3>Smart Templates</h3>
              <p>
                Optimize your workflow with templates for To-Dos, Meeting Minutes, and more.
              </p>
            </FeatureItem>
            <FeatureItem>
              <h3>Handwritten to Digital Text</h3>
              <p>
                Easily convert handwritten notes into editable digital text with high accuracy.
              </p>
            </FeatureItem>
            <FeatureItem>
              <h3>Easy Search</h3>
              <p>Find any note or phrase from any document, instantly.</p>
            </FeatureItem>
            <FeatureItem>
              <h3>Effortless Scanning</h3>
              <p>Enjoy auto-capture and edge detection for seamless scanning.</p>
            </FeatureItem>
            <FeatureItem>
              <h3>Data Security</h3>
              <p>Protect your data with full encryption for peace of mind.</p>
            </FeatureItem>
            <FeatureItem>
              <h3>Multi-Cloud Support</h3>
              <p>Access your notes anytime with reliable multi-cloud integration.</p>
            </FeatureItem>
          </FeaturesGrid>
        </FeaturesSection>
      </AppContent>

      <ContentAndVideo>
        <TextContent>
          <h1>
            <b>How to Use Our App?</b>
          </h1>
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

        {/* ------------------ Testimonial Section ------------------ */}
        <TestimonialSection>
          <h2>Testimonials</h2>
          <p>
            &quot;A big shoutout to ReNoteAI for the wonderful gift and what an awesome product. The
            smart reusable notebook is such a big relief from the overpriced and over-sensitive
            gadgets like iPad and remarkable. In less than 24hrs, I am hooked to it.&quot;
          </p>
          <p>
            <strong>Amita Vikram Pratap</strong>
            <br />
            Co-Founder - MAV Brand Stories LLC
          </p>
        </TestimonialSection>
      </ContentAndVideo>

      {/* Reference element to scroll to */}
      <div ref={bottomRef} />
    </AppContainer>
  );
};

export default AppComponent;
