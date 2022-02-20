import {useState}from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import PaidIcon from '@mui/icons-material/Paid';

function Subscription({subscription, togglePaid, handleDelete, handleEdit}) {
  const [newTitle, setNewTitle] = useState(subscription.title)

  const handleChange = (e) => {
    e.preventDefault()
    if(subscription.removed === true) {
      setNewTitle(subscription.title)
    } else {
      subscription.title = ""
      setNewTitle(e.target.value)
    }
  }

  return (
    <div className='subscription'>
      <input
        style={{textDecoration: subscription.paid && "line-through"}}
        type="text"
        value={subscription.title === "" ? newTitle : subscription.title}
        className="list"
        onChange={handleChange}
      />
      <div>
        <button className='button-complete' onClick={() => togglePaid(subscription)}>
          <PaidIcon id="i"/>
        </button>
        <button className='button-edit' onClick={() => handleEdit(subscription, newTitle)}>
          <EditIcon id="i"/>
        </button>
        <button className='button-delete' onClick={() => handleDelete(subscription.id)}>
          <DeleteIcon id="i"/>
        </button>
      </div>
    </div>
  )
}

export default Subscription
