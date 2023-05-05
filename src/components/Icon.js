import { useState } from 'react';
import Form from './Form';
import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';


function Icon({ Icons, completeIcon, removeIcon, updateIcon }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value) => {
    updateIcon(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  // Render the Form component when there is an edit action
  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {Icons.map((Icon) => (
        <div className={`Icon-row ${Icon.isComplete ? 'complete' : ''}`} key={Icon.id}>
          <div>
            {Icon.text}
          </div>
          <div className='icons'>
            <FaCheck onClick={() => completeIcon(Icon.id)} className='completeIcon' />
            <FaTimes onClick={() => removeIcon(Icon.id)} className='delete' />
          </div>
        </div>
      ))}
    </>
  );
}

export default Icon;