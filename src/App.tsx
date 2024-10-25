import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { NewsItem } from './components/NewsItem';
import { Header } from './components/Header';
import { mockNews } from './data/mockNews';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-6">
        <div className="space-y-8">
          {mockNews.map((item) => (
            <NewsItem key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;