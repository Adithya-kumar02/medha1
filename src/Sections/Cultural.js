import { useNavigate } from 'react-router-dom';
import React from 'react';

const CulturalEvents = () => {
  const navigate = useNavigate();

  // Modified cardStyle function to accept backgroundImage dynamically
  const cardStyle = (backgroundImage) => ({
    border: '2px solid transparent',
    borderRadius: '8px',
    padding: '16px',
    margin: '18px',
    width: '300px',
    border: '2px solid white',
    height: '300px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    animation: "glow 1.5s infinite alternate",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
  });
  
  const hoverEffect = {
    transform: 'translateY(-10px)',
    boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
    border: '2px solid rgba(255, 255, 255, 0.7)',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const pageTitleStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    margin: '30px',
    color:"red",
  };

  const events = [
    { title: 'Event 1', image: 'https://via.placeholder.com/150', backgroundImage: "url('/images/bgf.jpg')" },
    { title: 'Event 2', image: 'https://via.placeholder.com/150', backgroundImage: "url('/images/baymancode.png')" },
    { title: 'Event 3', image: 'https://via.placeholder.com/150', backgroundImage: "url('/images/sec2.jpg')" },
    { title: 'Event 4', image: 'https://via.placeholder.com/150', backgroundImage: "url('/images/lokiicon.png')" },
    { title: 'Event 5', image: 'https://via.placeholder.com/150', backgroundImage: "url('/images/ham.png')" },
    { title: 'Event 6', image: 'https://via.placeholder.com/150', backgroundImage:  "url('/images/capaico.png')"},
    { title: 'Event 7', image: 'https://via.placeholder.com/150', backgroundImage: "url('/images/hulkh.png')" },
    { title: 'Event 8', image: 'https://via.placeholder.com/150', backgroundImage: "url('/images/ironman2.png')" },
  ];

  return (
    
    <div>
      <h1 style={pageTitleStyle}>Cultural Events</h1>
      <div style={containerStyle}>
        {events.map((event, index) => {
          // Store the original styles in a variable
          const originalStyles = cardStyle(event.backgroundImage);

          return (
            <div
              key={index}
              style={originalStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = hoverEffect.transform;
                e.currentTarget.style.boxShadow = hoverEffect.boxShadow;
                e.currentTarget.style.border = hoverEffect.border;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = originalStyles.transform;
                e.currentTarget.style.boxShadow = originalStyles.boxShadow;
                e.currentTarget.style.border = originalStyles.border;
              }}
            >
              <img src={event.image} alt={event.title} style={imageStyle} />
              <h3>{event.title}</h3>
            </div>
          );
        })}
      </div>
      <style>
        {`
          @keyframes glow {
            0% {
              box-shadow: 0 0 10px rgba(14, 192, 236, 0.7), 0 0 20px rgba(9, 107, 236, 0.7), 0 0 30px rgba(12, 133, 238, 0.7);
            }
            100% {
              box-shadow: 0 0 10px rgba(241, 5, 201, 0.7), 0 0 20px rgba(238, 3, 238, 0.7), 0 0 30px rgba(222, 14, 187, 0.7);
            }
          }
        `}
      </style>
      <div style={{alignItems:"center",
        display:"flex",
        justifyContent:"center"
      }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: '10px 20px',
          background: 'red',
          color: 'white',
          
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin: '20px',
        }}
      >
        Go Back
      </button>
      </div>
    </div>
  );
};

export default CulturalEvents;