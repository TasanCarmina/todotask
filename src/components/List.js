import React from 'react';
import { useState } from 'react';
import Form from './Form';
import Icon from './Icon';

function List() {
  const [Icons, setIcons] = useState([]);

  const addIcon = Icon => {
    if (!Icon.text || /^\s*$/.test(Icon.text)) {
      return;
    }

    const newIcons = [Icon, ...Icons];

    setIcons(newIcons);
    console.log(...Icons);
  };

  const updateIcon = (IconId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setIcons(prev => prev.map(item => (item.id === IconId ? newValue : item)));
  };

  const removeIcon = id => {
    const removedArr = [...Icons].filter(Icon => Icon.id !== id);

    setIcons(removedArr);
  };

  const completeIcon = id => {
    let updatedIcons = Icons.map(Icon => {
      if (Icon.id === id) {
        Icon.isComplete = !Icon.isComplete;
      }
      return Icon;
    });
    setIcons(updatedIcons);
  };

  return (
    <>
      <h1>TaskList</h1>
      <Form onSubmit={addIcon} />
      <Icon
        Icons={Icons}
        completeIcon={completeIcon}
        removeIcon={removeIcon}
        updateIcon={updateIcon}
      />
    </>
  );
}

export default List;
