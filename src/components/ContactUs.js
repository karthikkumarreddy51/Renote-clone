import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import locationIcon from '../assets/location.png';
import emailIcon from '../assets/email.png';
import phoneIcon from '../assets/phone.png';
import Contactus from '../assets/contactUs.png';

const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const ContactImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ContactImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const SmallButton = styled.button`
  position: absolute;
  left: 15.3%;
  top: 71.75%;
  transform: translate(-50%, -50%);
  background-color: hsl(120, 90.60%, 45.70%);
  color: white;
  padding: 17px 33px;
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

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
  text-align: left;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const ContactIcon = styled.span`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledTextArea = styled.textarea`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 120px;
`;

const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.8rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    comments: '',
  });

  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:karthikkumarreddydoragacharla@gmail.com?subject=Contact Form Submission&body=Full Name: ${formData.fullName}%0D%0AEmail: ${formData.email}%0D%0AContact Number: ${formData.contactNumber}%0D%0AComments: ${formData.comments}`;
    window.location.href = mailtoLink;

    const whatsappMessage = `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nContact Number: ${formData.contactNumber}\nComments: ${formData.comments}`;
    const whatsappLink = `https://wa.me/9392054075?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');

    setFormData({
      fullName: '',
      email: '',
      contactNumber: '',
      comments: '',
    });
  };

  const handleScroll = () => {
    if (formRef.current) {
      const pageHeight = document.documentElement.scrollHeight;
      window.scrollTo({ top: pageHeight * 0.75, behavior: 'smooth' });
    }
  };

  return (
    <>
      <ContactImageContainer>
        <ContactImage src={Contactus} alt="Contact Us" />
        <SmallButton onClick={handleScroll}>Reach to Us</SmallButton>
      </ContactImageContainer>

      <ContactUsContainer ref={formRef}>
        <ContactInfo>
          <ContactItem>
            <ContactIcon>
              <img src={locationIcon} alt="Location" />
            </ContactIcon>
            <span>T-Hub, Hyderabad, Telangana, 500081</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <img src={emailIcon} alt="Email" />
            </ContactIcon>
            <span>info@renote.ai<br />sales@renote.ai</span>
          </ContactItem>
          <ContactItem>
            <ContactIcon>
              <img src={phoneIcon} alt="Phone" />
            </ContactIcon>
            <span>+91 9666363363<br />+91 8886663326</span>
          </ContactItem>
        </ContactInfo>

        <FormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <StyledLabel htmlFor="fullName">Full Name*</StyledLabel>
            <StyledInput type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            <StyledLabel htmlFor="email">Email ID</StyledLabel>
            <StyledInput type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <StyledLabel htmlFor="contactNumber">Contact Number*</StyledLabel>
            <StyledInput type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            <StyledLabel htmlFor="comments">Other Comments</StyledLabel>
            <StyledTextArea id="comments" name="comments" value={formData.comments} onChange={handleChange} />
            <StyledButton type="submit">Send Enquiry</StyledButton>
          </StyledForm>
        </FormContainer>
      </ContactUsContainer>
    </>
  );
};

export default ContactUs;
