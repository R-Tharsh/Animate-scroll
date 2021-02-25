import "./App.css";
import Navbar from "./Components/Navbar";
import { FooterContainer } from "./containers/footer";
import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  font-family:Arial,Helvetica,sans-serif;
  background:grey;
  height:100%;
  margin:-500px;
  color:black;

}
`;

const sharedStyles = css`
  background-color: #eee;
  height: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizzing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
width:100%;
max-width:700px;
padding:40px;
background:color:#fff;
border-radius:10px;
box-sizing:border-box;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 600px;
  margin-right: 100px;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 600px;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 1rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizzing: border-box;
`;

const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

function App() {
  return (
    <div>
      <Navbar />

      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h2>Contact Form</h2>
          <label htmlfor="name">Name</label>
          <StyledInput type="text" name="name" />
          <label htmlfor="email">Email</label>
          <StyledInput type="email" name="email" />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input type="radio" value="female" name="gender" />
              Female
            </label>
            <label>
              <input type="radio" value="male" name="gender" />
              Male
            </label>
          </StyledFieldset>
          <label htmlfor="message">Message</label>
          <StyledTextArea name="message" />
          <StyledError>
            <p>Error message here</p>
          </StyledError>
          <StyledButton type="submit">
            <b>Send Message</b>
          </StyledButton>
        </StyledForm>
      </StyledFormWrapper>
      <FooterContainer />
    </div>
  );
}

export default App;
