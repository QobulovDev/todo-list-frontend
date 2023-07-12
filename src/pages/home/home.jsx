import Category from "./components/category";
import Edit from "./components/edit";
import Navbar from "./components/navbar";
import Todos from "./components/todos";

const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  const {user, setUser, setUserToken} = props;
  return (
    <>
      <Navbar
        user={user} 
        setUser={setUser} 
        setUserToken={setUserToken}/>
      <div className="container">
        <Category
          user={user} 
          />
        <div className="todo-body mt-2">
          <Todos/>
        </div>
      </div>
      <Edit/>
    </>
  );
};

export default Home;
