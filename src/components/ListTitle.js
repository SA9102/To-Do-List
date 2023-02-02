import ChangeTitleButton from "./Buttons/ChangeTitleButton"

export default function ListTitle({title, isEditing}) {
    return (
        <>
        
            <p className='list-title'>{title}</p>
            {isEditing ? (<><ChangeTitleButton /><br /><br /></>) : (<></>)}
        </>
    )
}