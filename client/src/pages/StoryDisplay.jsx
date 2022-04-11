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
import { useParams } from "react-router-dom";

import { Alert, Button as BootstrapButton, Form } from "react-bootstrap";

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

export default function TextEditor() {
  const { id: documentId } = useParams();
  const [quill, setQuill] = useState();
  const [content, setContent] = useState({});
  const [locked, setLocked] = useState(true);
  const [checkedState, setCheckedState] = useState(
    new Array(checkboxes.length).fill(false)
  );

  useEffect(() => {
    if (quill == null) return;
  }, [documentId, quill]);

  const formTest = async (event) => {
    const tags = checkboxes.filter((value, index) => checkedState[index]);


    const requestOptions = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, tags }),
    };

    fetch("http://localhost:8080/story/create", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`"Story created with id ${data.data._id}"`)
      });
  };

  const saveStoryData = () => {
    const contents = quill.getContents();
    setContent(contents);

    setTimeout(function () {
      setTimeout(() => {
        quill.setContents(contents);
      }, 2000);
      quill.setText("test");
    }, 2000);
    console.log(contents);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
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
      <div className="container" ref={wrapperRef}></div>
      <Container>
        <Button
          tooltip="The big plus button!"
          icon="fas fa-plus"
          rotate={true}
          styles={{
            backgroundColor: darkColors.lightGrey,
            color: lightColors.black,
          }}
          onClick={saveStoryData}
        >
          Edit
        </Button>
      </Container>
      <Form >
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
            onClick= {() => formTest()}
           
          >
            Submit
          </BootstrapButton>
        </div>
      </Form>
    </div>
  );
}
