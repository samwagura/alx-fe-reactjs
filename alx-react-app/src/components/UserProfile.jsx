function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '10px', 
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ 
        color: 'blue',
        marginBottom: '10px',
        fontSize: '24px'
      }}>
        {props.name}
      </h2>
      <p style={{ marginBottom: '8px' }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#333'
        }}>
          {props.age}
        </span>
      </p>
      <p style={{ 
        color: '#555',
        lineHeight: '1.6'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
