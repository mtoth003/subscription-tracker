import {useState, useEffect} from 'react'
import './App.css';
import Title from './components/Title';
import AddSubscription from './components/AddSubscription';
import Subscription from './components/Subscription';
import {collection, query, onSnapshot, doc, updateDoc, deleteDoc} from "firebase/firestore"
import {db} from "./firebase"

function App() {
  const [subscriptions, setSubscriptions] = useState([])

  useEffect(() => {
    const q = query(collection(db, "subscriptions"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let subscriptionsArray = [];
      querySnapshot.forEach((doc) => {
        subscriptionsArray.push({...doc.data(), id: doc.id})
      })
      setSubscriptions(subscriptionsArray)
    })
    return () => unsub()
  }, [])

  const handleEdit = async (subscription, title) => {
    await updateDoc(doc(db, "subscriptions", subscription.id), {title: title})
  }

  const togglePaid = async (subscription) => {
    await updateDoc(doc(db, "subscriptions", subscription.id), {
      paid: !subscription.paid
    })
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "subscriptions", id))
  }

  return (
    <div className="App">
      <div>
        <Title/>
      </div>
      <div>
        <AddSubscription />
      </div>
      <div className='subscription_container'>
        {subscriptions.map((subscription) => (
          <Subscription
            key={subscription.id}
            subscription={subscription}
            togglePaid={togglePaid}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
