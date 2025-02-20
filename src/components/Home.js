import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../assets/homephoto.png';
import Renote from '../assets/Renote img.png';
import styled from 'styled-components';
import Li1 from '../assets/li1.png';
import Li2 from '../assets/li2.png';
import Li3 from '../assets/li3.png';
import Li4 from '../assets/li4.png';
import Li5 from '../assets/li5.png';
import Li6 from '../assets/li6.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

const HeroSection = styled.div`
  text-align: center;
  padding: 0;
  margin: 0 auto;
`;

const HomeImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-weight: bold;
  margin: 1rem 0 0.5rem;
`;

const SubTitle = styled.h3`
  font-weight: bold;
  margin: 0.5rem 0;
`;

const ProductDescription = styled.p`
  margin: 0.5rem 0 1rem;
`;

const ExploreButton = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1.5rem;
`;

const ProductImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 2rem;
`;

const ProductImage = styled.img`
  width: 25%;
  height: auto;
`;

/* --- Table Styles --- */
const ComparisonTable = styled.table`
  width: 80%;
  margin: 0 auto 2rem;
  border-collapse: collapse;
  text-align: center;
`;

const TableHeader = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background-color: #f2f2f2;
`;

const TableData = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

/* --- Additional Sections --- */
const SectionHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ViewAllPosts = styled.a`
  font-size: 1rem;
  color: blue;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AdditionalFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-content: center;
  margin-top: 1rem;
  padding: 0 5%;
`;

const FeatureCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 350px;
  text-decoration: none;
  color: inherit;
`;

const FeatureIcon = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  // Change this to navigate to /products
  const handleExploreClick = () => {
    navigate('/products');
  };

  return (
    <HeroSection>
      <HomeImage src={home} alt="Home" />

      {/* New Text Section */}
      <Title>Meet ReNoteAI</Title>
      <SubTitle>The Smart Reusable Notebook</SubTitle>
      <ProductDescription>
        The Smart Reusable Notebook with an AI-powered app, designed to elevate productivity
        sustainably. Capture handwritten notes, digitize them effortlessly, and integrate seamlessly
        with third-party apps for enhanced organization.
      </ProductDescription>

      {/* Explore Button -> navigates to /products */}
      <ExploreButton onClick={handleExploreClick}>Explore</ExploreButton>

      {/* Product Images in equal widths */}
      <ProductImagesContainer>
        <ProductImage src={p1} alt="Product 1" />
        <ProductImage src={p2} alt="Product 2" />
        <ProductImage src={p3} alt="Product 3" />
      </ProductImagesContainer>

      {/* Comparison Table */}
      <ComparisonTable>
        <thead>
          <tr>
            <TableHeader>Feature</TableHeader>
            <TableHeader>Eco</TableHeader>
            <TableHeader>Lite</TableHeader>
            <TableHeader>Air</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData>APP Compatibility</TableData>
            <TableData>✓</TableData>
            <TableData>✓</TableData>
            <TableData>✓</TableData>
          </tr>
          <tr>
            <TableData>Eco Friendly</TableData>
            <TableData>✓</TableData>
            <TableData>✓</TableData>
            <TableData>✓</TableData>
          </tr>
          <tr>
            <TableData>Pages</TableData>
            <TableData>100</TableData>
            <TableData>50</TableData>
            <TableData>50</TableData>
          </tr>
          <tr>
            <TableData>Book Type</TableData>
            <TableData>Regular</TableData>
            <TableData>Reusable</TableData>
            <TableData>Reusable</TableData>
          </tr>
          <tr>
            <TableData>Usage Times</TableData>
            <TableData>1</TableData>
            <TableData>Up to 10</TableData>
            <TableData>Up to 10</TableData>
          </tr>
          <tr>
            <TableData>Water Proof</TableData>
            <TableData>✗</TableData>
            <TableData>✓</TableData>
            <TableData>✓</TableData>
          </tr>
          <tr>
            <TableData>Cover Page</TableData>
            <TableData>Craft</TableData>
            <TableData>✗</TableData>
            <TableData>✗</TableData>
          </tr>
          <tr>
            <TableData>Pen</TableData>
            <TableData>✗</TableData>
            <TableData>Erasable Pen</TableData>
            <TableData>Pilot Frixion Pen</TableData>
          </tr>
          <tr>
            <TableData>Cloth</TableData>
            <TableData>✗</TableData>
            <TableData>✗</TableData>
            <TableData>Micro Fiber Cloth</TableData>
          </tr>
          <tr>
            <TableData>Packing</TableData>
            <TableData>Basic</TableData>
            <TableData>Basic</TableData>
            <TableData>Craft Box</TableData>
          </tr>
          <tr>
            <TableData>Bookmark &amp; Scale</TableData>
            <TableData>✗</TableData>
            <TableData>✗</TableData>
            <TableData>✗</TableData>
          </tr>
        </tbody>
      </ComparisonTable>

      {/* Existing LinkedIn posts or other sections */}
      <SectionHeader>
        Our Product out in the world!
        <ViewAllPosts
          href="https://www.linkedin.com/company/renoteai/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all posts
        </ViewAllPosts>
      </SectionHeader>

      <AdditionalFeatures>
        <FeatureCard
          href="https://www.linkedin.com/posts/renoteai_globalaisummit-renoteai-aiinnovation-activity-7237387130526728192-wuY6/?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FeatureIcon src={Li1} alt="Feature 1" />
          <p>Advanced Search: Find notes instantly with AI-powered search.</p>
        </FeatureCard>
        <FeatureCard
          href="https://www.linkedin.com/posts/renoteai_renoteai-gitex2024-smartsustainableworld-activity-7257722929835094016-X6as/?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FeatureIcon src={Li2} alt="Feature 2" />
          <p>Cloud Sync: Securely sync your notes across multiple devices.</p>
        </FeatureCard>
        <FeatureCard
          href="https://www.linkedin.com/posts/renoteai_ices2024-indiacsrandesgsummit2024-sustainability-activity-7252929908190978048-It8J/?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FeatureIcon src={Li3} alt="Feature 3" />
          <p>Collaborate: Share and edit notes with teammates in real-time.</p>
        </FeatureCard>
        <FeatureCard
          href="https://www.linkedin.com/posts/renoteai_bangaloreexpansion-renoteai-giftsworldexpo2024-activity-7233767274350796800-wJw4/?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FeatureIcon src={Li4} alt="Feature 4" />
          <p>Multi-format Export: Save notes as PDF, DOCX, or plain text.</p>
        </FeatureCard>
        <FeatureCard
          href="https://www.linkedin.com/posts/renoteai_sustainability-renoteai-ecofriendly-activity-7230812292840366080-cMs5/?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FeatureIcon src={Li5} alt="Feature 5" />
          <p>Smart Reminders: Get notified about important notes and deadlines.</p>
        </FeatureCard>
        <FeatureCard
          href="https://www.linkedin.com/posts/renoteai_renoteai-giftsexpodelhi-b2b-activity-7224333647363915776-e2G1/?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FeatureIcon src={Li6} alt="Feature 6" />
          <p>Handwriting Recognition: Convert sketches into digital text.</p>
        </FeatureCard>
      </AdditionalFeatures>
    </HeroSection>
  );
};

export default Home;
