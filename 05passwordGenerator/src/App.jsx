import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 99999);
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Password Generator
        </h1>
        
        <div className="mb-8">
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <input 
            type="text" 
            value={password}
            className="flex-1 px-4 py-3 text-gray-900 font-mono text-sm bg-gray-50 border-none outline-none"
            placeholder="Click generate to create password"
            readOnly
            ref={passwordRef}
            />
            <button 
            onClick={copyPasswordToClipboard}
            className="px-4 py-3 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium transition-colors duration-150"
            >
              Copy
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-gray-700">Length</label>
              <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded">
                {length}
              </span>
            </div>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gray-900"
            onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <input 
              type="checkbox"
              id="numbers"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-500"
              />
              <label htmlFor="numbers" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                Include numbers
              </label>
            </div>

            <div className="flex items-center">
              <input 
              type="checkbox"
              id="symbols"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="w-4 h-4 text-gray-900 bg-gray-100 border-gray-300 rounded focus:ring-gray-500"
              />
              <label htmlFor="symbols" className="ml-3 text-sm font-medium text-gray-700 cursor-pointer">
                Include symbols
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
