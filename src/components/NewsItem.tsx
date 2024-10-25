import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';

interface NewsItemProps {
  title: string;
  source: string;
  url: string;
  timestamp: string;
  relatedLinks: Array<{
    title: string;
    source: string;
    url: string;
  }>;
}

export function NewsItem({ title, source, url, timestamp, relatedLinks }: NewsItemProps) {
  return (
    <article className="group">
      <div className="mb-2">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-medium text-gray-900 group-hover:text-blue-600">
            <a href={url} className="flex items-start" target="_blank" rel="noopener noreferrer">
              {title}
              <ExternalLink className="h-4 w-4 ml-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </h2>
          <div className="flex items-center text-sm text-gray-500 ml-4">
            <Clock className="h-4 w-4 mr-1" />
            <time>{timestamp}</time>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          via <span className="font-medium">{source}</span>
        </p>
      </div>
      
      {relatedLinks.length > 0 && (
        <div className="pl-4 border-l-2 border-gray-200">
          {relatedLinks.map((link, index) => (
            <div key={index} className="text-sm text-gray-600 mt-2">
              <a href={link.url} className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                {link.title}
              </a>
              <span className="text-gray-400"> - {link.source}</span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}