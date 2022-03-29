import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

import StoryHeader from "../Components/StoryHeader";

import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

import "../css/StoryPage.css"

export default function Homepage() {
  const [storyMode, setstoryMode] = useState(false);
  const { quill, quillRef } = useQuill();

  React.useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(
        "<h2>Start writing your story!</h2>"
      );
    }
  }, [quill]);

  return (
    <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
      <StoryHeader />
      <Container>
      <Form>
        <Form.Group className="mx-5">
          <Form.Label><h2>Title</h2> </Form.Label>
          <Form.Control as="textarea" size="lg" rows={2} placeholder="Title of the Story" />
        </Form.Group>
      </Form>
      </Container>
      <div className="editor">
        <div ref={quillRef} />
      </div>
    </Container>
  );
}
