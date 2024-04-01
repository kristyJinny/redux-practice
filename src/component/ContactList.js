import React, { useEffect, useState } from 'react'
import {Button, Form} from 'react-bootstrap';
import { SearchBox } from './SearchBox';
import { ContactItem } from './ContactItem';
import { useSelector } from 'react-redux';




export const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div data-component="ContactList">
      <SearchBox />
      <div className="contact-list">
        {/* 연락 처 총 갯수 {filteredList.length} */}
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </div>
    </div>
  )
}
