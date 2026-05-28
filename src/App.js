import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="flex items-center flex-col bg-blue-100 h-screen px-6 font-sans">
        {/* <!-- navbar --> */}
        <Navbar />

        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Header />
          

          <TodoList />

          

          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
