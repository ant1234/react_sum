import Post from './components/Post';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {

  const [isVisable, setIsVisable] = useState(false);

  const onCloseHandler = event => {
    setIsVisable(false);
  };

  const onOpenHandler = event => {
    setIsVisable(true);
  };

  return (
    <>
      <MainHeader onCreatePost={onOpenHandler} onClose={onCloseHandler} isVisable={isVisable}/>
      <main>
        <PostList onOpen={onOpenHandler} onClose={onCloseHandler} isVisable={isVisable}/>
      </main>
    </>
    );
}

export default App;
