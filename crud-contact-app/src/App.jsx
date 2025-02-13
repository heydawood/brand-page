import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import AddAndUpdate from "./components/AddAndUpdate";


function App() {

  const [contacts, setContacts] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () =>{
    setIsOpen(true);
  };

  const onClose = () =>{
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactLists = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <NavBar />

        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <HiMagnifyingGlass className="absolute ml-2 text-2xl text-white" />
            <input
              className="h-10 flex-grow rounded-lg border border-white bg-transparent pl-10 text-white"
              type="text"
            />
          </div>

          <FaCirclePlus onClick={onOpen} className="cursor-pointer text-4xl text-white" />
        </div>

        <div className="mt-4 gap-3 flex flex-col">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/>
          ))}
        </div>
      </div>
      <AddAndUpdate onClose={onClose} isOpen={isOpen}/>
    </>
  );
}

export default App;
