import Category from "./components/category";
import Edit from "./components/edit";
import Navbar from "./components/navbar";
import Todos from "./components/todos";

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Category/>
        <div className="todo-body mt-2">
          <Todos/>
        </div>
      </div>
      <Edit/>
    </>
  );
};

export default Home;
