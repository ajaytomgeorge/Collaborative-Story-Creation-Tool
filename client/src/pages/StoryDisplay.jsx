/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useState } from "react";

import Quill from "quill";
import "quill/dist/quill.snow.css";
import {
  Container,
  Button,
  lightColors,
  darkColors,
} from "react-floating-action-button";
import { useNavigate, useParams } from "react-router-dom";

import { Modal, Button as BootstrapButton, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import "../css/StoryDisplay.css";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

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

function TextEditor({ user }) {
  const navigate = useNavigate();
 
  const { id, lock } = useParams();
  const [quill, setQuill] = useState();
  const [content, setContent] = useState({});
  const [locked, setLocked] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(checkboxes.length).fill(false)
  );
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [cardInfo, setCardInfo] = useState("");

  const handleShow = () => setShow(true);

  useEffect(() => {
    if (!user.auth){
      navigate("/login")
    }
    
    if (quill == null || id == null) return;
    fetch(`/story/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        if (lock) {
          data.lock ? setLocked(true) : setLocked(false);
          //console.log("Locked");
        } else {
          //console.log("Unlockd for editor");
        }
        quill.setContents(data.content);
      });
  }, [id, quill]);

  const createOrUpdateDocument =  () => {
    const tags = checkboxes.filter((_, index) => checkedState[index]);

    if (id) {
      const putOptions = {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, tags, lock:false }),
      };
      fetch(`/story/update/${id}`, putOptions)
        .then((response) => response.json())
        .then((data) => {
          // console.log("updated",data);
          setTitle("Updated! File have been updated in the database");
          setCardInfo(`Story updated with id ${data._id}`);
          handleShow();
        });
      return;
    }

    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, tags }),
    };

    fetch("/story/create", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setTitle("Created! File have been saved in database");
        setCardInfo(`Story created with id ${data.data._id}`);
        handleShow();
      });
  };

  const saveStoryData = () => {
    // console.log("save story data called")
    const contents = quill.getContents();
    // console.log(contents)

    setContent(contents);
    setTitle("Story Progress has been saved");
    setCardInfo("Please be aware that unless you submit the file wont be published  ");

    handleShow();
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

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
          <BootstrapButton variant="secondary" onClick={handleClose}>
            OK
          </BootstrapButton>
        </Modal.Footer>
      </Modal>
    );
  }

  const handleClose = () => {
    setShow(false);
  };

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const q = new Quill(editor, {
      theme: "snow",
      modules: { toolbar: TOOLBAR_OPTIONS },
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
          tooltip="Save your progress!"
          icon="fas fa-plus"
          rotate={true}
          styles={{
            backgroundColor: darkColors.lightGrey,
            color: lightColors.black,
          }}
          onClick={saveStoryData}
        >
          Save
        </Button>
      </Container>
      <Form>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          key={`inline-switch`}
          className="mb-3"
        >
          {checkboxes.map((name, index) => (
            <div key={index.toString()} className="mb-3">
              <Form.Check
                onChange={() => handleOnChange(index)}
                label={name}
                name="group1"
                type="switch"
                id={`inline-switch-${index}`}
              />
            </div>
          ))}
        </div>
        <div style={{ display: "grid", placeItems: "center" }}>
          <BootstrapButton
            style={{ backgroundColor: "Blue", width: "48%" }}
            onClick={() => createOrUpdateDocument()}
          >
            Submit
          </BootstrapButton>
        </div>
      </Form>
    </div>
  );
}


TextEditor.defaultProps = {
  user: {},
};

TextEditor.propTypes = {
  user: PropTypes.object,
};

export default TextEditor;