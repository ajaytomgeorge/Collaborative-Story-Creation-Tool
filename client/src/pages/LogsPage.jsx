import React, { useEffect, useState } from "react";

import { Card, Container } from "react-bootstrap";

export default function LogsPage() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/logs")
      .then((response) => response.json())
      .then((data) => {
        setLogs(data);
        console.log(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
        {logs.map((log) => {
          return (
            <div>
              <Card border={`${log.comment ==="Created Document" ? "success" : "danger"}`} style={{ width: "18rem" }}>
                <Card.Header> {log.createdAt}</Card.Header>
                <Card.Body>
                  <Card.Title>{log.comment.toUpperCase()} </Card.Title>
                  <Card.Text>
                    <div style= {{fontSize:"12px"}}>
                      username: {log.username}
                      <br />
                      userId : {log.userId}
                      <br />
                      storyId :{log.storyId}
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />
            </div>
          );
        })}

      </Container>
    </React.Fragment>
  );
}
