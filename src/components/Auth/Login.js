// src/components/Auth/Login.js
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email;
      
      // 허용된 이메일 도메인 확인
      if (!email.endsWith('@gmail.com')) {
        await auth.signOut();
        alert('허용되지 않은 이메일입니다.');
        return;
      }
      
      // 허용된 이메일 리스트 확인
      const allowedEmails = [
        // 허용할 이메일 주소 추가
        'bumworld@gmail.com',
        'oboki.work@gmail.com'
      ];
      
      if (!allowedEmails.includes(email)) {
        await auth.signOut();
        alert('접근 권한이 없는 계정입니다.');
        return;
      }

      console.log('로그인 성공:', result.user);
      navigate('/home');
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="mb-6 text-2xl font-bold text-center">DC Family Association</h1>
        <button
          onClick={handleGoogleLogin}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Google 로그인
        </button>
      </div>
    </div>
  );
};

export default Login;