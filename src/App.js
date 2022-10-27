import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import { useSelector } from 'react-redux';
import AnimatedEntry from './components/Entry/Entry';
import { AnimatePresence } from 'framer-motion';
import Wrapper from './components/Wrapper/Wrapper';
import { useState } from 'react';
function App() {
  const folders = useSelector((state) => state.folders);
  const selectedFolder = folders.find((el) => el.isActive === true);
  /*const [isIndicatorsVisible, setIsIndicatorsVisible] = useState(false)*/
  const disableIndicators = true;
  return (
    <>
      <AnimatePresence>
        <Wrapper>
          <Sidebar />
          <Main>
            {selectedFolder ? (
              <AnimatedEntry
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                title={selectedFolder.title}
                id={selectedFolder.id}
                color={selectedFolder.color}
                transition={{ delay: 0.15 }}
                animation={{ type: 'Tween' }}
              />
            ) : (
              folders.map((el) => (
                <AnimatedEntry
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  title={el.title}
                  id={el.id}
                  color={el.color}
                  key={el.id}
                  transition={{ delay: 0.15 }}
                  animation={{ type: 'Tween' }}
                  disableIndicators={disableIndicators}
                />
              ))
            )}
          </Main>
        </Wrapper>
      </AnimatePresence>
    </>
  );
}

export default App;
