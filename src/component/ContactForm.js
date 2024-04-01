import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';



export const ContactForm = () => {

  const [name, setName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    dispatch({type:"ADD_CONTACT", payload:{name, phoneNumber}}) // ES6 자바스크립트 문법- 축약
    // dispatch({type:"ADD_CONTACT", payload:{name: name, phoneNumber: phoneNumber}})
  }

  // const getName = (event) => {
    // setName(event.target.value);
    // console.log(event.target.value);
  // }

  // console.log(event.target.value);
  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(event)=>setName(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="번호를 입력해 주세요." onChange={(event)=>setphoneNumber(event.target.value)}  />
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  )
}
