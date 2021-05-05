import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import { useHistory } from "react-router-dom";

export default function LoginForm({token, setToken}) {

  const [modalShow, setModalShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const registerPres = (e) =>{
    e.preventDefault()
    setModalShow(true)
  }

  const login = (e) => {
    e.preventDefault()
    fetch("https://secret-temple-42258.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.token) {
          setToken(json.token)
          history.push("/home");
        } else {
          alert("non sei registrato");
        }
      });
    
  };

  return (
    <div>
    
      <Form onSubmit={login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <div className="btn-container">
          <Button variant="primary" type="submit" >
            Submit
          </Button>

          <Button variant="primary" type="button" onClick={registerPres}>
            Register
          </Button>
          <RegisterForm show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </Form>
    </div>
  );
}
