import DeleteItemButton from "./Buttons/DeleteItemButton";
import ChangeItemButton from "./Buttons/ChangeItemButton";
import ListItem from "./ListItem";

export default function ListItemsContainer({
  listId,
  items,
  onDeleteItem,
  isEditing,
  onToggleCheck,
  isChecked,
}) {
  let listItems = items.map((item, index) => {
    if (isEditing) {
      return (
        <div>
          <ListItem listId={listId} itemId={item.itemId} item={item.item} onToggleCheck={onToggleCheck} isChecked={isChecked[index]} />
          <ChangeItemButton />
          <DeleteItemButton
            listId={listId}
            itemId={item.itemId}
            onDeleteItem={onDeleteItem}
          />
          <br />
          <br />
        </div>
      );
    } else {
      return <ListItem listId={listId} itemId={item.itemId} item={item.item} onToggleCheck={onToggleCheck} isChecked={isChecked[index]} />;
    }
  });
  return <>{listItems}</>;
}
