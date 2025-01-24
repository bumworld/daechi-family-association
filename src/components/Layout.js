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
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">DC Family Association</h1>
            {user && (
              <button 
                onClick={handleLogout}
                className="text-sm px-3 py-1.5 text-gray-600 border border-gray-300 rounded hover:bg-gray-50"
              >
                로그아웃
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