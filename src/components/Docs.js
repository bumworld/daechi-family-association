// src/components/Docs.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const Docs = () => {
  const { docId } = useParams();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/docs/${docId}.md`)
      .then(res => {
        if (!res.ok) throw new Error('Document not found');
        return res.text();
      })
      .then(text => setContent(text))
      .catch(err => setError(err.message));
  }, [docId]);

  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Docs;
