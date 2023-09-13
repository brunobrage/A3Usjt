import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  const newsData = [
    {
      title: 'Notícia 1',
      content: 'Conteúdo da Notícia 1',
    },
    {
      title: 'Notícia 2',
      content: 'Conteúdo da Notícia 2',
    },
    // Adicione mais notícias aqui
  ];

  return (
    <div className="App">
      <Header />
      <NewsList news={newsData} />
      <Footer />
    </div>
  );
}

export default App;
