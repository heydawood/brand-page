import React, { useState } from "react";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpdate from "./AddAndUpdate";

const ContactCard = ({ contact }) => {

  const {isOpen, onClose, onOpen} = useDisclose()


  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between rounded-lg bg-yellow p-2"
      >
        <div className="flex items-center gap-2">
          <HiOutlineUserCircle className="text-4xl text-orange" />

          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex text-3xl">
          <RiEditCircleLine />
          <IoMdTrash
            onClick={() => handleDelete(contact.id)}
            className="cursor-pointer text-orange"
          />
        </div>
      </div>
      <AddAndUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  );
};

export default ContactCard;
