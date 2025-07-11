import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, Shield } from 'lucide-react';
import Logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import type { LoginCredentials, LoginUserData } from '../../interface/User';
import { toast } from 'react-toastify';

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<LoginUserData | null>(null);  

  const dummyUsers: LoginUserData[] = [
    { email: 'admin@gmail.com', password: 'Admin@123', name: 'John Administrator', role: 'System Administrator' },
    { email: 'officer@gmail.com', password: 'Officer@123', name: 'Sarah Johnson', role: 'Government Officer' },
    { email: 'clerk@gmail.com', password: 'Clerk@123', name: 'Mike Wilson', role: 'Administrative Clerk' },
    { email: 'manager@gmail.com', password: 'Manager@123', name: 'Lisa Brown', role: 'Department Manager' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!credentials.email || !credentials.password) {
      setError('Please enter both Employee Email and Password');
      setIsLoading(false);
      return;
    }

    await new Promise(resolve => setTimeout(resolve, 1500));

    const user = dummyUsers.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
      toast.success("Logged In Sucessfully")

    } else {
      setError('Invalid Employee Email or Password');
    }

    setIsLoading(false);
  };

  const handleAccessDashboard = () => {
    localStorage.setItem('email', currentUser?.email || "");
    window.location.href = "/";
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCredentials({ email: '', password: '' });
  };

  // ✅ Show Dashboard Access UI after login
  if (isLoggedIn && currentUser) {
    {
      isLoggedIn && (
        <Link
          className="bg-red-600 text-white px-4 py-1 rounded-lg hover:scale-110 hover:bg-red-700 duration-300"
          to="/nagarikta"
          onClick={() => setIsOpen(false)}
        >
          नागरिकता
        </Link>
      )
    }
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Granted</h1>
            <p className="text-gray-600">Welcome to the Government Portal</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h2 className="font-semibold text-gray-800 mb-2">User Information</h2>
            <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Name:</span> {currentUser.name}</p>
            <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Employee Email:</span> {currentUser.email}</p>
            <p className="text-sm text-gray-600"><span className="font-medium">Role:</span> {currentUser.role}</p>
          </div>

          {/* ✅ Access Dashboard + Logout Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleAccessDashboard}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Access Dashboard
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ⬇ Login Form Below
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-300 text-white p-6 rounded-t-lg">
          <div className="flex items-center justify-center">
            <img src={Logo} className='w-18 h-[68px] bg-white rounded-full' alt="Logo" />
          </div>
          <h1 className="text-2xl font-extrabold text-red-600 text-center">इटहरी उपमहानगरपालिका कार्यालय</h1>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your Email address"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Authenticating...
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>© 2025 Government Portal. All rights reserved.</p>
            <p className="mt-1">For technical support, contact IT Department</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


function setIsOpen(_arg0: boolean): void {
  throw new Error('Function not implemented.');
}

