import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";
import useDisclose from './hooks/useDisclose'
import { ToastContainer, toast } from 'react-toastify';
import ContactNotFound from './components/ContactNotFound'



function App() {

  const [contacts, setContacts] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot)=>{

          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })

      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e)=>{
    const value = e.target.value

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot)=>{

      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

      setContacts(filteredContacts);
      return filteredContacts;
    })
  }


  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <NavBar />

        <div className="flex gap-2">

          <div className="relative flex flex-grow items-center">

            <HiMagnifyingGlass className="absolute ml-2 text-2xl text-white" />
            <input onChange={filterContacts}
              className="h-10 flex-grow rounded-lg border border-white bg-transparent pl-10 text-white"
              type="text"
            />
          </div>

          <FaCirclePlus onClick={onOpen} className="cursor-pointer text-4xl text-white" />

        </div>

        <div className="mt-4 gap-3 flex flex-col">
          {contacts.length <= 0 ? <ContactNotFound/> : contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
      </div>

      <AddAndUpdate onClose={onClose} isOpen={isOpen}/>
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
