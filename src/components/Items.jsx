function Items({itemName, idx, del, toggle, strike}) {
    return(
        <div className='flex justify-between'>
            <div className='flex gap-5'>
            <input 
                onChange={() => {toggle(idx)}}
                type="checkbox" 
            />
            {
                strike(idx) ? <p><s>{itemName}</s></p> : <p>{itemName}</p>
            }
            </div>
            <i
                onClick={() => {del(idx)}}
                className="cursor-pointer text-red-400 fa-solid fa-trash">
            </i>
        </div>
    )
}

export default Items;
