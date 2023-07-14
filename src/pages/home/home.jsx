import { useEffect, useState } from "react";
import Category from "./components/category";
import Edit from "./components/edit";
import Navbar from "./components/navbar";
import Todos from "./components/todos";
import axios from "axios";
import { toast } from "react-toastify";
import AddWindow from "./components/addWindow";

const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  const {user, setUser, setUserToken} = props;
  const [todo, setTodo] = useState([]);
  const [category, setCategory] = useState([])
  const [active, setActive] = useState('')
  const [addWin, setAddWin] = useState(false)
  const [filter, setFilter] = useState("")
  const [editItem, setEditItem] = useState("")

  const config = {
    method : "get",
    url : `http://localhost:5500/api/todo/${localStorage.getItem('userId')}`,
    headers : {
       "Content-Type":"application/json", 
       "x-auth-token": localStorage.getItem('authToken') 
    }
  }
 
  const getData = async () =>{
    try{
      await axios(config)
      .then(res=>{
        if(res.status==200){
          setCategory(res.data.categories)
          setTodo(res.data.todos)
        }
      })
      .catch(error=>{
        toast.error(error.response.data)
      })
    }catch(err){
      toast.error(err.response.data)
    }
  }

  useEffect(()=>{
    getData()
  }, [])
  return (
    <>
      <AddWindow
        addWin={addWin}
        setAddWin={setAddWin}
        category={category}
        setCategory={setCategory}
        getData={getData}
        />
      <Navbar
        user={user} 
        setUser={setUser} 
        setUserToken={setUserToken}/>
      <div className="container">
        <Category
          user={user}
          category={category}
          setCategory={setCategory} 
          active={active} 
          setActive={setActive} 
          addWin={addWin}
          setAddWin={setAddWin}
          filter={filter}
          setFilter={setFilter}
          />
        <div className="todo-body mt-2">
          <Todos
            setTodo={setTodo}
            todo={todo}
            active={active} 
            setActive={setActive} 
            filter={filter}
            setFilter={setFilter}
            editItem={editItem}
            setEditItem={setEditItem}
            />
        </div>
      </div>
      <Edit
        editItem={editItem}
        setEditItem={setEditItem}
        />
    </>
  );
};

export default Home;
