import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();

const getItems = ()=>{
  const list = localStorage.getItem('list');
  if(list){
    return JSON.parse(list)
  }else{
    return []
  }
}

const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState(getItems());
  const [toggle,setToggle] = useState(true)
  const [editItem,setEditItem] = useState(null)

  const AddItem = () => {
    if (!input) {
      alert('add a valid data')
    }else if(input && !toggle){
      setItem(
        item.map((cur)=>{
          if(cur.id === editItem){
            return {...cur,name:input}
          }
          return cur;
        })
      )
      setToggle(true)
      setInput('')
      setEditItem(null)
    } else {
      const inputData = {
        id: new Date().getTime().toString(),
        name: input,
      };

      setItem([...item, inputData]);
      setInput("");
    }
  };

  const handleEdit = (id)=>{
    let newEditItem = item.find((cur)=>{
      return cur.id === id;
    })
    setEditItem(id)
    setInput(newEditItem.name)
    setToggle(false)
  }

  const handleDelete = (index)=>{
    const filterList = item.filter((cur)=>{
      return index !== cur.id;
    })
    setItem(filterList)
  }

  const handleRemoveAll = ()=>{
    setItem([])
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(item))
  },[item])

  return (
    <>
 
      <AppContext.Provider value={{ input, setInput, item, setItem, AddItem ,handleDelete,handleRemoveAll,toggle,handleEdit}}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
