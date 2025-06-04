import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password);
      navigate('/login');
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
      <div className="max-w-md w-full px-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-medium mb-2 text-primary-900">Create Account</h1>
          <p className="text-neutral-600">Join Fresh Face Roya today</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-neutral-600">
          Already have an account?{' '}
          <Link to="/login" className="text-primary-500 hover:text-primary-600">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;