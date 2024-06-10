import { useEffect, useState } from 'react'
import Items from './components/Items';
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    let temp = [...items];
    temp.push({
      name: name,
      check: false
    });
    setItems(temp);
    setName("");
    console.log(name, items);
  }

  function deleteItem(index) {
    let temp = [...items];
    temp.splice(index, 1);
    setItems(temp);
  }

  function changeToggle(index) {
    let temp = [...items];
    temp[index].check = !temp[index].check;
    setItems(temp);
  }

  function changeStrike(index) {
    return items[index].check;
  }

  useEffect(() => {
    if(items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    if(localStorage.getItem("items")) {
      let temp = JSON.parse(localStorage.getItem("items"));
      setItems(temp);
    }
  }, []);

  return(
    <div className='bg-white w-1/2 mx-auto pb-16 pt-10 px-10 rounded-lg flex flex-col gap-5 my-10 shadow-md'>
      <p className='text-2xl text-center'>Grocery Bud</p>
      <form onSubmit={onSubmit} className='flex w-11/12 mx-auto'>
        <input 
          onChange={(e) => {setName(e.target.value)}} 
          className='bg-[#F8FAFC] border-[0.1rem] border-gray-200 w-5/6 p-2' 
          type="text" 
          value={name}
        />
        <button className='bg-blue-500 px-3 text-white font-semibold'>Add Item</button>
      </form>
      <div className='w-5/6 mx-auto flex flex-col gap-5'>
        {
          items.map((item, index) => {
            return <Items itemName={item.name} del={deleteItem} idx={index} toggle={changeToggle} strike={changeStrike} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default App
