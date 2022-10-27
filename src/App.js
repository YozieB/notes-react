import Sidebar from './components/Sidebar/Sidebar';
import Wrapper from './components/Wrapper/Wrapper';
import Main from './components/Main/Main';
import { useSelector } from 'react-redux';
import Entry from './components/Entry/Entry';
function App() {
  const folders = useSelector((state) => state.folders);
  const selectedFolder = folders.find((el) => el.isActive === true);
  return (
    <>
      <Wrapper>
        <Sidebar />
        <Main>
          {selectedFolder ? (
            <Entry
              title={selectedFolder.title}
              id={selectedFolder.id}
              color={selectedFolder.color}
            />
          ) : (
            folders.map((el) => (
              <Entry title={el.title} id={el.id} color={el.color} key={el.id} />
            ))
          )}
        </Main>
      </Wrapper>
    </>
  );
}

export default App;
