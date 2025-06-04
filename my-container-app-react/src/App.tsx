import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load the Angular web component
    const script = document.createElement('script');
    script.src = 'http://localhost:4200/main.js';
    script.type = 'module';
    
    script.onload = () => {
      setIsLoaded(true);
    };

    script.onerror = (error) => {
      console.error('Error loading experiences component:', error);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="app">
      <h1 className="text-2xl font-bold">React Container App</h1>
      {isLoaded ? (
        <experiences-element />
      ) : (
        <div>Loading experiences component...</div>
      )}
    </div>
  );
}

export default App; 