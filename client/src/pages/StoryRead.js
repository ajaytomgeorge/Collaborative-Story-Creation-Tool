/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {
  Container,
  Button,
  lightColors,
  darkColors,
} from "react-floating-action-button";
import { useParams } from "react-router-dom";

import { Alert, Button as BootstrapButton, Form } from "react-bootstrap";

import "../css/StoryDisplay.css";

const checkboxes = [
  "Technology",
  "Kids",
  "Fiction",
  "People",
  "Movies",
  "History",
  "Politics",
  "Music",
  "Science",
];

export default function TextEditor() {
  const { id } = useParams();
  const [quill, setQuill] = useState();
  const navigate = useNavigate();
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    if (quill == null) return;
    fetch(`/story/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.lock ? setLocked(true) : setLocked(false);
        quill.setContents(data.content);
      });
  }, [id, quill]);

  function LockFile() {
    const requestOptions = {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lock: true }),
    };

    fetch(`/story/lock/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  const editable = () => {
    if (!locked) {
      LockFile();
      window.confirm(
        "We are initiating File Lock for your editing. Please be aware that only you can edit at this time. Your are being redirected"
      );
      navigate(`/publish/${id}/false`);
    } else {
      alert(
        "File Locked! The given file is being edited by another user. It will be available for editing when the user submits his updates"
      );
    }
  };
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: false },
    });
    // q.disable()
    q.setText("Title..");
    setQuill(q);
  }, []);
  return (
    <div>
      <div className="container" ref={wrapperRef}></div>
      <Container>
        <Button
          tooltip="Click me to edit!!"
          icon="fas fa-plus"
          styles={{
            backgroundColor: darkColors.lightGrey,
            color: lightColors.black,
          }}
          onClick={() => editable()}
        >
          {locked ? "Locked" : "Edit"}
        </Button>
      </Container>
    </div>
  );
}
