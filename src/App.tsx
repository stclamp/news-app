import { Toaster } from 'react-hot-toast';
import ArticlesList from './components/articles-list/ArticlesList';
import Container from './components/container/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <ArticlesList />
      </Container>
      <Toaster />
    </div>
  );
}

export default App;
