import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Container } from "react-bootstrap";



function LogsPage({user}) {
  const [logs, setLogs] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    
    if (!user.auth){
      navigate("/login")
    }
    fetch("/logs")
      .then((response) => response.json())
      .then((data) => {
        setLogs(data);
        // console.log(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Container className="main_container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom shadow">
        <Container>
          <h1>Logs</h1>
        <p>Logs are updated real time . Times are specified in GMT 0:00</p> 
        </Container>
        {logs.map((log) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div>
              <Card border={`${log.comment ==="Created Document" ? "success" : "danger"}`} style={{ width: "18rem" , borderRadius:"0px"}}>
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


LogsPage.defaultProps = {
  user: {},
};

LogsPage.propTypes = {
  user: PropTypes.object,
};

export default LogsPage;