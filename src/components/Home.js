// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Home = () => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <div className="p-4">
      <h1>DC Family Association</h1>
      <button 
        onClick={handleLogout}
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
      >
        로그아웃
      </button>
    </div>
  );
};

export default Home;
