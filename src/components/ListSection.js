import ListTitle from "./ListTitle";
import ListItemsContainer from "./ListItemsContainer";
import DeleteListButton from "./Buttons/DeleteListButton";
import EditListButton from "./Buttons/EditListButton";
import AddItemButton from "./Buttons/AddItemButton";

export default function ListSection({
  list,
  isEditing,
  onDeleteList,
  onDeleteItem,
  onEdit,
  onToggleAddItem,
  isAddingItem,
  onItemChange,
  itemValue,
  onAddItem,
  onToggleCheck,
  isChecked,
}) {
  return (
    <div className="list-section">
      <ListTitle title={list.title} isEditing={isEditing} />
      <span className="list-buttons">
        <EditListButton
          id={list.listId}
          onEdit={onEdit}
          isEditing={isEditing}
        />
        <DeleteListButton id={list.listId} onClick={onDeleteList} />
        <AddItemButton
          id={list.listId}
          onToggleAddItem={onToggleAddItem}
          isAddingItem={isAddingItem}
          itemValue={itemValue}
          onItemChange={onItemChange}
          onAddItem={onAddItem}
        />
        <br />
        <br />
      </span>
      <ListItemsContainer
        listId={list.listId}
        items={list.items}
        onDeleteItem={onDeleteItem}
        isEditing={isEditing}
        onToggleCheck={onToggleCheck}
        isChecked={isChecked}
      />
    </div>
  );
}
