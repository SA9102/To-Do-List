export default function EditListButton({id, onEdit, isEditing}) {
    // id: id number of the list
    // onEdit: function that points to the handle
    return (<button className='button' onClick={() => onEdit(id)}>{isEditing ? 'Stop Editing' : 'Edit'}</button>)
};
