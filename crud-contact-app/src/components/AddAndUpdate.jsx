import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup';

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required('Name is Required'),
  email: Yup.string().email('Invalid Email').required('Email is Required')
})


const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose()
      toast.success('Contact Added Successfully')
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose()
      toast.success('Contact Updated Successfully')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik 
        validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                }
              : {
                  name: "",
                  email: "",
                }
          }
          onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="font-medium">
                Name
              </label>
              <Field name="name" className="h-10 rounded-lg border" />
              <div className="text-red-600 text-xs">
                <ErrorMessage name="name"/>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-medium">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="h-10 rounded-lg border"
              />
              <div className="text-red-600 text-xs">
                <ErrorMessage name="email"/>
              </div>
            </div>

            <button className="self-end rounded border bg-orange px-3 py-1.5 text-black">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdate;
