import Sidebar from "./components/Sidebar/Sidebar";
import Wrapper from "./components/Wrapper/Wrapper";
import Main from "./components/Main/Main";
function App() {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </>
  );
}

export default App;
