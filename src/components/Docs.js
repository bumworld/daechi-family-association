// src/components/Docs.js
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Docs = ({ docId = 'readme' }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/css/github-markdown.css';
    document.head.appendChild(link);
    
    fetch(`${process.env.PUBLIC_URL}/docs/${docId}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Document not found');
        return res.text();
      })
      .then(text => setContent(text))
      .catch(err => setError(err.message));

    return () => {
      document.head.removeChild(link);
    };
  }, [docId]);

  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="markdown-body px-3 my-5">
      <div className="container-lg">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Docs;