import React, { useEffect } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function Messages() {
  
  useEffect(() => {
    const q = query(collection(db,"emails"),orderBy('createdAt','desc'))
    const unSubscribe = onSnapshot(q,(snapshot) =>{
      const allEmails = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id}))
      console.log(allEmails)
    })

    // cleanup
    return () => unSubscribe()
  }, []);


  return (
    <div>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default Messages;
