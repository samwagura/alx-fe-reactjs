function MainContent() {
  return (
    <main style={{ 
      padding: '20px',
      minHeight: '400px',
      backgroundColor: '#ffffff',
      margin: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        marginBottom: '15px',
        fontSize: '28px'
      }}>
        Main Content Area
      </h2>
      <p style={{ 
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#555',
        marginBottom: '15px'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      <p style={{ 
        fontSize: '16px',
        lineHeight: '1.8',
        color: '#555'
      }}>
        These cities offer unique experiences, cultures, and cuisines that make every visit memorable.
      </p>
    </main>
  );
}

export default MainContent;
