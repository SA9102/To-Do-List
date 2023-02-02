import AddListButton from "./Buttons/AddListButton";
import ListSection from "./ListSection";
import AddListInputBox from "./AddListInputBox";
import { useState } from "react";

export default function ListContainer() {

  // An array containing all lists (which are stored as objects). 
  const [lists, setLists] = useState(listsMockup);

  // What the id of the next created list should be. Each time a new list is created, the id of this list
  // will be what is currently stored in idCount. This value is then incremented by one.
  const [idCount, setIdCount] = useState(3);
  
  // What the id of the next created item in a list should be. Each value represents the next item id of a list.
  // Each time an item is added to a list, the its id value in this array is incremented by one.
  const [itemIdCount, setItemIdCount] = useState([4, 4, 3])
  
  // Input field for title of new list.
  const [titleValue, setTitleValue] = useState('');

  // Input field for adding new item to list.
  const [itemValue, setItemValue] = useState(['', '', ''])

  // Input field for changing the value of an existing item. Each array represents a list,
  // and each empty pair of quotation marks represents the input for each item.
  const [editItemValue, setEditItemValue] = useState([['', '', '', ''], ['', '', '', ''], ['', '', '']])

  // Whether or not a list is being edited.
  // const [isEditing, setIsEditing] = useState(Array(3).fill(false))
  const [isEditing, setIsEditing] = useState([false, false, false]);

  // Whether or not the user is currently in the process of adding an item (i.e. typing an item value).
  const [isAddingItem, setIsAddingItem] = useState([false, false, false]);

  // Whether or not a particular item has its checkbox checked.
  const [isChecked, setIsChecked] = useState([[false, false, false, false], [false, false, false, false], [false, false, false]]);

  const handleDeleteList = (id) => {
    let listsCopy = lists.slice();
    let isEditingCopy = isEditing.slice();
    let isAddingItemCopy = isAddingItem.slice();
    let itemIdCountCopy = itemIdCount.slice();
    let isCheckedCopy = isChecked.slice();
    let itemValueCopy = itemValue.slice();

    for (let index in listsCopy) {
      if (listsCopy[index].listId === id) {
        listsCopy.splice(index, 1);
        isEditingCopy.splice(index, 1);
        isAddingItemCopy.splice(index, 1);
        itemIdCountCopy.splice(index, 1);
        isCheckedCopy.splice(index, 1);
        itemValueCopy.splice(index, 1);
        break;
      }
    }

    setLists(listsCopy);
    setIsEditing(isEditingCopy);
    setIsAddingItem(isAddingItemCopy);
    setItemIdCount(itemIdCountCopy);
    setIsChecked(isCheckedCopy);
    setItemValue(itemValueCopy);
  };

  const handleDeleteItem = (listId, itemId) => {
    let listsCopy = lists.slice();
    let isCheckedCopy = isChecked.slice();

    let listItems;
    let listIndex;
    for (let index in lists) {
      if (lists[index].listId === listId) {
        listItems = lists[index].items;
        listIndex = index;
        break;
      }
    }


    for (let index in listItems) {
      if (listItems[index].itemId === itemId) {
        listItems.splice(index, 1);
      isCheckedCopy[listIndex].splice(index, 1)
        break;
      }
    }

    listsCopy[listIndex].items = listItems;
    
    setLists(listsCopy);
    setIsChecked(isCheckedCopy);
  };

  const handleTitleChange = (value) => {
    setTitleValue(value);
  };

  const handleItemChange = (listId, value) => {
    const itemValueCopy = itemValue.slice()

    for (let index in lists) {
      if (lists[index].listId === listId) {
        itemValueCopy[index] = value;
        break;
      }
    }

    setItemValue(itemValueCopy)
    console.log(itemValue)
  }

  // Not used yet
  const handleItemEdit = (listId, itemId, value) => {
    let editItemValueCopy = editItemValue.slice()
    let saveListIndex;

    for (let index in lists) {
      if (lists[index].listId === listId) {
        saveListIndex = index;
        break
      }
    }

    for (let index in lists[saveListIndex].items) {
      if (lists[saveListIndex].items[index].itemId === itemId) {
        editItemValueCopy[saveListIndex][index] = value;
      }
    }

    setEditItemValue(editItemValueCopy);
  }

  const handleAddList = () => {
    const newList = { listId: idCount, title: titleValue, items: [] };
    setLists([...lists, newList]);
    setTitleValue("");
    setIdCount(idCount + 1);
    setIsEditing([...isEditing, false]);
    setIsAddingItem([...isAddingItem, false]);
    setItemValue([...itemValue, ''])
    setItemIdCount([...itemIdCount, 0])
    setIsChecked([...isChecked, []])
  };

  const handleAddItem = (listId) => {
    let listsCopy = lists.slice()
    let itemIdCountCopy = itemIdCount.slice()
    let isCheckedCopy = isChecked.slice()

    for (let index in listsCopy) {
        if (listsCopy[index].listId === listId) {
            let nextItemId = itemIdCount[index]
            listsCopy[index].items.push({itemId: nextItemId, item: itemValue[index]})
            nextItemId += 1
            itemIdCountCopy[index] = nextItemId
            isCheckedCopy[index].push(false)
            setItemIdCount(itemIdCountCopy)
            setIsChecked(isCheckedCopy);

            break;
        }
    }
    setLists(listsCopy);
  }

  const handleToggleEditing = (id) => {
    let saveIndex = -1;

    for (let index in lists) {
      if (lists[index].listId === id) {
        saveIndex = index;
        break;
      }
    }

    let isEditingCopy = isEditing.slice();
    isEditingCopy[saveIndex] === true
      ? (isEditingCopy[saveIndex] = false)
      : (isEditingCopy[saveIndex] = true);
    setIsEditing(isEditingCopy);
  };

  const handleToggleAddingItem = (id) => {
    const isAddingItemCopy = isAddingItem.slice();

    for (let index in lists) {
      if (lists[index].listId === id) {
        isAddingItemCopy[index] = !isAddingItemCopy[index];
        break;
      }
    }

    setIsAddingItem(isAddingItemCopy);
  };

  const handleToggleCheck = (listId, itemId) => {
    let isCheckedCopy = isChecked.slice()
    let listIndex;
    let itemIndex;

    for (let index in lists) {
      if (lists[index].listId === listId) {
        listIndex = index
        break
      }
    }

    for (let index in lists[listIndex].items) {
      if (lists[listIndex].items[index].itemId === itemId) {
        itemIndex = index
        break
      }
    }

    isCheckedCopy[listIndex][itemIndex] = !isCheckedCopy[listIndex][itemIndex]
    setIsChecked(isCheckedCopy)
  }

  let listsToRender = lists.map((listSection, index) => {
    return (
      <li key={listSection.id}>
        <ListSection
          list={listSection}
          isEditing={isEditing[index]}
          onDeleteList={handleDeleteList}
          onDeleteItem={handleDeleteItem}
          onEdit={handleToggleEditing}
          onToggleAddItem={handleToggleAddingItem}
          isAddingItem={isAddingItem[index]}
          onItemChange={handleItemChange}
          itemValue={itemValue[index]}
          onAddItem={handleAddItem}
          onToggleCheck={handleToggleCheck}
          isChecked={isChecked[index]}
        />
      </li>
    );
  });

  return (
    <div className="list-container">
      <span>
        <AddListInputBox
          type={"title"}
          value={titleValue}
          onChange={handleTitleChange}
        />
        <AddListButton
          text={"Add List"}
          onAddList={handleAddList}
          info={titleValue}
        />
      </span>
      <ul className="ul-list-section">{listsToRender}</ul>
    </div>
  );
}

// A mockup of lists. This will be displayed every time the user refreshes the screen.
let listsMockup = [
  {
    listId: 0,
    title: "Shopping List",
    items: [
      { itemId: 0, item: "Carrots" },
      { itemId: 1, item: "Milk" },
      { itemId: 2, item: "Bread" },
      { itemId: 3, item: "Pasta" },
    ],
  },
  {
    listId: 1,
    title: "Programming Languages",
    items: [
      { itemId: 0, item: "JavaScript" },
      { itemId: 1, item: "Python" },
      { itemId: 2, item: "Ruby" },
      { itemId: 3, item: "C#" },
    ],
  },
  {
    listId: 2,
    title: "Lorem",
    items: [
      { itemId: 0, item: "ipsum" },
      { itemId: 1, item: "lorem ipsum" },
      { itemId: 2, item: "dolor" },
    ],
  },
];
