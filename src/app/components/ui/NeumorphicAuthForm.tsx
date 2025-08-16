import React, { useState } from 'react';
import { FaUser, FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';

const NeumorphicAuthForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('register');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleTabClick = (tab: 'login' | 'register') => {
    setActiveTab(tab);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(`${activeTab} form submitted`);
  };

  return (
    <>
      <style>{`
        .neumorphic-container {
          background: #e0e5ec;
          border-radius: 30px;
          box-shadow: 13px 13px 20px #bec4d2,
                      -13px -13px 20px #ffffff;
          width: 350px;
          padding: 30px 40px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #555;
          user-select: none;
        }
        .tabs {
          display: flex;
          justify-content: center;
          margin-bottom: 25px;
          gap: 20px;
        }
        .tab {
          flex: 1;
          text-align: center;
          padding: 10px 0;
          border-radius: 20px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: inset 6px 6px 8px #bec4d2,
                      inset -6px -6px 8px #ffffff;
          transition: all 0.3s ease;
          user-select: none;
        }
        .tab.inactive {
          box-shadow: none;
          background: transparent;
          color: #888;
          font-weight: 500;
        }
        label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
          color: #777;
          user-select: none;
        }
        input {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 20px;
          border-radius: 15px;
          border: none;
          outline: none;
          background: #e0e5ec;
          box-shadow: inset 6px 6px 8px #bec4d2,
                      inset -6px -6px 8px #ffffff;
          font-size: 14px;
          color: #555;
          transition: box-shadow 0.3s ease;
        }
        input::placeholder {
          color: #aaa;
        }
        input:focus {
          box-shadow: inset 2px 2px 5px #bec4d2,
                      inset -2px -2px 5px #ffffff;
        }
        .submit-button {
          width: 100%;
          padding: 12px 0;
          border-radius: 20px;
          border: none;
          background: #e0e5ec;
          box-shadow: 6px 6px 8px #bec4d2,
                      -6px -6px 8px #ffffff;
          font-weight: 700;
          font-size: 16px;
          color: #2a5db0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          user-select: none;
          transition: box-shadow 0.3s ease;
        }
        .submit-button:hover {
          box-shadow: 3px 3px 6px #bec4d2,
                      -3px -3px 6px #ffffff;
        }
        .continue-text {
          text-align: center;
          margin: 20px 0 15px;
          color: #888;
          font-size: 14px;
          user-select: none;
        }
        .social-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .social-button {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e0e5ec;
          box-shadow: 6px 6px 8px #bec4d2,
                      -6px -6px 8px #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: box-shadow 0.3s ease;
          user-select: none;
          font-weight: 700;
          font-size: 20px;
          color: #555;
        }
        .social-button:hover {
          box-shadow: 3px 3px 6px #bec4d2,
                      -3px -3px 6px #ffffff;
        }
      `}</style>
      <div className="neumorphic-container" role="form" aria-label="Authentication form">
        <div className="tabs" role="tablist">
          <div
            role="tab"
            aria-selected={activeTab === 'login'}
            tabIndex={0}
            className={`tab ${activeTab === 'login' ? '' : 'inactive'}`}
            onClick={() => handleTabClick('login')}
            onKeyDown={e => { if (e.key === 'Enter') handleTabClick('login'); }}
          >
            Login
          </div>
          <div
            role="tab"
            aria-selected={activeTab === 'register'}
            tabIndex={0}
            className={`tab ${activeTab === 'register' ? '' : 'inactive'}`}
            onClick={() => handleTabClick('register')}
            onKeyDown={e => { if (e.key === 'Enter') handleTabClick('register'); }}
          >
            Register
          </div>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          {activeTab === 'register' && (
            <>
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder=""
            value={formData.password}
            onChange={handleChange}
            required
          />
          {activeTab === 'register' && (
            <>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder=""
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </>
          )}
          <button type="submit" className="submit-button" aria-label={activeTab === 'login' ? 'Login' : 'Register'}>
            {activeTab === 'register' && <FaUser aria-hidden="true" />}
            {activeTab === 'login' ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="continue-text">Or continue with</div>
        <div className="social-buttons" role="group" aria-label="Social login options">
          <div className="social-button" aria-label="Login with Google" tabIndex={0}>
            <FaGoogle />
          </div>
          <div className="social-button" aria-label="Login with Facebook" tabIndex={0}>
            <FaFacebookF />
          </div>
          <div className="social-button" aria-label="Login with Twitter" tabIndex={0}>
            <FaTwitter />
          </div>
        </div>
      </div>
    </>
  );
};

export default NeumorphicAuthForm;
