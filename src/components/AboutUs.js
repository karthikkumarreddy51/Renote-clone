import React from 'react';
import styled from 'styled-components';

// Import your images. Make sure the paths are correct!
import Aboutus from '../assets/aboutUs.png'; // Path to your left image
import rightImage from '../assets/tHub.png'; // Path to your right image

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FullWidthImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const AboutUsImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ContentAndRightImage = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RightImageContainer = styled.div`
  flex: 1;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const AboutUsHeading = styled.h2`
  margin-bottom: 1rem;
`;

const AboutUsText = styled.p`
  line-height: 1.6;
`;

// NEW: Testimonials Section
const TestimonialSection = styled.div`
  margin-top: 3rem; /* Space above the testimonial section */
  width: 100%;
  text-align: center;
`;

const TestimonialsHeading = styled.h2`
  margin-bottom: 1.5rem;
`;

const TestimonialQuote = styled.p`
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <FullWidthImageContainer>
        <AboutUsImage src={Aboutus} alt="About Us Initiatives" />
      </FullWidthImageContainer>

      <ContentAndRightImage>
        <TextContainer>
          <AboutUsHeading>Our Initiatives</AboutUsHeading>
          <AboutUsText>
            At ReNote AI, our initiatives are driven by a purpose: to create
            sustainable solutions that empower individuals and organizations to
            be more productive while reducing their environmental footprint.
            Here's how we bring this mission to life:
            <br />
            <br />
            <b>Sustainable Productivity</b>
            <br />
            <br />
            Our Smart Reusable Notebook promotes a zero-waste approach to
            note-taking, merging sustainability with productivity.
            <br />
            <br />
            <b>Commitment to Continuous Improvement</b>
            <br />
            <br />
            We prioritize research and development to refine our products,
            ensuring that we stay at the forefront of sustainability and
            technology while meeting our customers' evolving needs.
            <br />
            <br />
            <b>Empowering Education with Digital Tools</b>
            <br />
            <br />
            We collaborate with educational institutions to offer our Smart
            Reusable Notebook, equipping students with tools that bridge the gap
            between analog and digital learning environments.
            <br />
            <br />
            <b>Revolutionizing Note-Taking with Digital Integration</b>
            <br />
            <br />
            Experience the future of note-taking with our Smart Reusable
            Notebook, designed to effortlessly digitize your handwritten notes.
            Access your ideas anytime, anywhere, while enjoying the tactile joy
            of writing!
          </AboutUsText>
        </TextContainer>
        <RightImageContainer>
          <AboutUsImage src={rightImage} alt="Right Image" />
        </RightImageContainer>
      </ContentAndRightImage>

      {/* NEW: Testimonials Section (above the footer) */}
      <TestimonialSection>
        <TestimonialsHeading>Testimonials</TestimonialsHeading>
        <TestimonialQuote>
          &quot;A big shoutout to ReNoteAI for the wonderful gift and what an awesome
          product. The smart reusable notebook is such a big relief from the
          overpriced and over-sensitive gadgets like iPad and remarkable. In
          less than 24hrs, I am hooked to it.&quot;
        </TestimonialQuote>
        <TestimonialAuthor>
          Amita Vikram Pratap
          <br />
          Co-Founder - MAV Brand Stories LLC
        </TestimonialAuthor>
      </TestimonialSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
