// src/components/Layout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 h-16">
          <div className="relative h-full flex items-center">
            <h1 className="text-xl font-semibold">김해김씨 참판공파 대치종친회</h1>
            {user && (
              <button 
                onClick={handleLogout}
                className="absolute right-0 text-sm px-3 py-1.5 text-gray-600 hover:text-gray-900"
                aria-label="로그아웃"
              >
                👋
              </button>
            )}
          </div>
        </div>
      </header>
      <main className="max-w-none">
        {children}
      </main>
    </div>
  );
};

export default Layout;