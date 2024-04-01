import React from 'react'
import {Button, Col, Form, Row} from 'react-bootstrap';
import { useSelector } from "react-redux";

export const ContactItem = ({item}) => {
  return (
    <Row data-component="ContactItem">
      <Col lg={2}>
        <img width={70} src="https://cdn-icons-png.flaticon.com/512/4645/4645949.png" alt="" />
      </Col>
      <Col lg={10}>
        <div className="name">{item.name}</div>
        <div className="phone">{item.phoneNumber}</div>
      </Col>
    </Row>
  )
}
