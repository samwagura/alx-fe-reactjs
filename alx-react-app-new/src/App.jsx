import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <MainContent />
      
      {/* Counter Component */}
      <Counter />
      
      {/* Example UserProfile components */}
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Software developer and coffee enthusiast" 
        />
        <UserProfile 
          name="Charlie" 
          age="28" 
          bio="Passionate about music and travel" 
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;