import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{
      minHeight: '100vh',          // full viewport height
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves traveling and photography." 
      />
      <MainContent />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
