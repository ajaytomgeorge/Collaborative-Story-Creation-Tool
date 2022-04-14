/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import {
  Container,
  Button as floatingButton,
  lightColors,
  darkColors,
} from "react-floating-action-button";
import { useParams } from "react-router-dom";

import { Modal, Button } from "react-bootstrap";

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
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Locked File");
  const [cardInfo, setcardInfo] = useState(
    "The given file is being edited by another user. It will be available for editing when the user submits his updates"
  );

  const handleClose = () =>{ setShow(false);
    navigate(`/publish/${id}/false`);}
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (quill == null) return;
    fetch(`/story/get/${id}`)
      .then((response) => {
        
        // console.log("response is ", response)
        return response.json()
      })
      .then((data) => {
        // console.log(data);
        data.lock ? setLocked(true) : setLocked(false);
        quill.setContents(data.content);
        const tags = data.tags.map(tag => tag.name)
        quill.insertText(0, data.createdAt+" \n "+ `${tags.join("     ")} `,  {
          'color': '#303F9F',
          'italic': true
        });
      })
      .catch((error) => {
        // console.log("error occured in story read", error);
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
  function giveAlert() {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cardInfo}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            I Understand
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const editable = () => {
    if (!locked) {
      LockFile();
      setTitle("File Lock Initialized");
      setcardInfo(
        "You are being redirected. The file has been locked for you editing, please note that other users wont be able to edit until you submit"
      );
      handleShow();

      
    } else {
      handleShow();
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
      {giveAlert()}
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
