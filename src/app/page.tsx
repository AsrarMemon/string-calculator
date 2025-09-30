'use client';

import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async () => {
    setResult(null);
    setError(null);
    try {
      const res = await fetch('/api/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numbers: input }),
      });
      const data = await res.json();
      if (res.ok) setResult(data.result);
      else setError(data.error);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          String Calculator
        </h1>

        <label htmlFor="numbers" className="block text-sm font-medium text-gray-700 mb-2">
          Enter numbers (e.g. 1,2,3 or //;\n1;2):
        </label>
        <input
          id="numbers"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          placeholder="Enter numbers here..."
        />

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
        >
          Calculate
        </button>

        {result !== null && (
          <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
            ✅ Result: <span className="font-bold">{result}</span>
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
            ❌ Error: <span className="font-bold">{error}</span>
          </div>
        )}
      </div>
    </main>
  );
}
