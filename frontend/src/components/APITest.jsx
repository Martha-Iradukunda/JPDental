import { useState, useEffect } from 'react';
import { api } from '../api';

export function APITest() {
  const [status, setStatus] = useState('Checking...');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAPI();
  }, []);

  const checkAPI = async () => {
    try {
      const data = await api.get('/api/test');
      setStatus('✅ Connected');
      setMessage(data.message);
    } catch (error) {
      setStatus('❌ Not connected');
      setMessage('Backend not running or not reachable');
      console.error('API Error:', error);
    }
  };

  const testHealth = async () => {
    setLoading(true);
    try {
      const data = await api.get('/api/health');
      alert(JSON.stringify(data, null, 2));
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50 max-w-xs">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-3 h-3 rounded-full ${status.includes('Connected') ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-sm font-medium">API Status: {status}</span>
      </div>
      <p className="text-xs text-gray-600 mb-2">{message}</p>
      <button
        onClick={testHealth}
        disabled={loading}
        className="w-full bg-blue-500 text-white text-sm py-1 px-3 rounded hover:bg-blue-600 transition disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test API Health'}
      </button>
    </div>
  );
}