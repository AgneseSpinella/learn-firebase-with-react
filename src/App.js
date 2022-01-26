
import './App.css';
import {useEffect, useState} from 'react'
import { collection,doc,getDocs } from 'firebase/firestore';
import {db} from './firebase'


function App() {
const [messages, setMessages] = useState([])

useEffect(() => {
  const getData = async() => {
  const querySnapshot = await getDocs(collection(db,"messages"));
  const currentMessages = querySnapshot.docs.map(e => {
    const obj = {
      id: doc.id,
      ...doc.data()
    }
    return obj;
  }) 
  console.log(currentMessages)
}; 
getData();
}, []);
 
 

  return (
    <div className="App">
      <h1>Learning firebase</h1>
      <ul>
        {messages.map((message,index) => (
           <li key={index}>
         <h4>{message.user}</h4> 
          <p>{message.text}</p>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
