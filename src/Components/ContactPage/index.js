import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '../Common/TextField';
import TextArea from '../Common/TextArea';
import { CONTACT_MESSAGE_POST_URL } from '../../config';


function ContactPage(){

    const [inProgress,setInProgress] = useState(false);
    const [isSent,setSent] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [error,setError] = useState("");
    const submitHandler = e => {
        e.preventDefault();

        if(inProgress){
            return;
        }

        setError("");
        setSent(false);
        if(!name){
            setError("Name is required!");
            return;
        }
        if(!email){
            setError("Email is required!");
            return;
        }
        if(!message){
            setError("Message is required!");
            return;
        }
        if(!(/^[a-zA-Z0-9 ]*$/.test(name))){
            setError("Invalid Name! Only A-Z, 0-9 and space is allowed.");
            return;
        }

        if(!(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/.test(email))){
            setError("Invalid Email Address!");
            return;
        }
        setInProgress(true);

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("message", message);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch(CONTACT_MESSAGE_POST_URL, requestOptions)
        .then(response => {
            if(response.ok){
                setSent(true);
                setInProgress(false);
                setName("");
                setEmail("");
                setMessage("");
            } else {
                throw new Error("Failed to send message! Try again.")
            }
        })
        .catch(error => {
            setInProgress(false);
            setError("Failed to send message! Try again.");
            console.error(error);
        });
    }

    return (
        <div className="pt-3 pb-3 pt-md-5 pb-md-5 w-100 h-100 content">
            <Container className="post-content" style={{maxWidth: "768px"}}>
                <Row>
                    <Col xs={12} lg={6}>
                        <div className="w-100 h-100">
                            <form onSubmit={submitHandler}>
                                <Container>
                                    <Row>
                                        <Col xs={12}>
                                            <h4 style={{color: "var(--primary)"}}>Get In Touch</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <TextField label="Fullname"
                                                value={name}
                                                onChange={e=> setName(e.target.value)} 
                                                maxLength={50}
                                                style={{maxWidth: "350px"}}/>
                                        </Col>
                                        <Col xs={12}>
                                            <TextField label="Email"
                                                value={email}
                                                maxLength={100}
                                                onChange={e=> setEmail(e.target.value)} 
                                                style={{maxWidth: "350px"}}/>
                                        </Col>
                                        <Col xs={12}>
                                            <TextArea label="Message" 
                                                value={message}
                                                onChange={e=> setMessage(e.target.value)}
                                                maxLength={3000}
                                                style={{maxWidth: "350px"}}/>
                                        </Col>
                                        {error &&
                                            <Col xs={12}>
                                                <p style={{color: "red"}}>
                                                    {error}
                                                </p>
                                            </Col>
                                        }
                                        {isSent &&
                                            <Col xs={12}>
                                                <p style={{color: "green"}}>
                                                    Message sent! We will reply as soon as possible.
                                                </p>
                                            </Col>
                                        }
                                        <Col xs={12}>
                                            <button className={"contact-button "+(inProgress?"disabled":"")}>
                                                {inProgress?"Sending...":"Send Message"}
                                            </button>
                                        </Col>
                                    </Row>
                                </Container>
                            </form>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className="mt-5 mt-lg-0">
                        <Container>
                            <Row>
                                <Col xs={12}>
                                    <h4 style={{color: "var(--primary)"}}>Contact Detail</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={"auto"} style={{width:"80px"}}>
                                    <strong className="title text-primary">ADDRESS</strong>
                                </Col>
                                <Col xs={"auto"} className="d-flex">
                                    <i className="fas fa-map-marker-alt " style={{display: "inline-block", paddingTop: "0.5rem"}}></i>
                                    &nbsp;
                                    <p className="address" >
                                        Benjamin Maintenance<br/>
                                        104 22nd Street<br/>
                                        Brooklyn, NY 11232<br/>
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={"auto"}>
                                    <strong className="title text-primary" style={{width:"80px"}}>PHONE</strong>
                                </Col>
                                <Col xs={"auto"}>
                                <p className="address">
                                    <i className="fas fa-phone"></i> 212-535-8500 (NYC) <br/>
                                    <i className="fas fa-phone"></i> 718-439-1200 (Brooklyn) <br/>
                                    <i className="fas fa-phone"></i> 718-492-0194 (Fax) <br/>
                                </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={"auto"} style={{width:"80px"}}>
                                    <strong className="title text-primary">EMAIL</strong>
                                </Col>
                                <Col className="auto">
                                <p className="address">                                    
                                    <a href="mailto:mail@example.com"><i className="far fa-envelope"></i> mail@example.com</a> 
                                </p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
} 

export default ContactPage;