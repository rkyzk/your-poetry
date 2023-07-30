import React from "react";
import Container from "react-bootstrap/Container";

/**
 * Return the content for Contact page.
 * @returns
 */
function Contact() {
  return (
    <Container>
      <h2 className="text-center">Contact</h2>
      <p className="d-flex justify-content-center">
        If you have any inquiries, suggestions or concerns,
        write to us at admin@yourpoetry.com.<br/>
        We'll get back to you as soon as possible.
      </p>    
    </Container>
  );
}

export default Contact;