// import React, { useState } from 'react';

// const SliderDemo = () => {
//   const [active, setActive] = useState(3);

//   const items = [
//     {
//       id: 1,
//       content: (
//         <>
//           <h1>Slide 1</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic iure enim, rem accusamus odit nemo aspernatur consequuntur vero in veniam fugiat, consectetur officiis voluptatum quidem libero.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 2,
//       content: <h1>Slide 2</h1>,
//     },
//     {
//       id: 3,
//       content: (
//         <video width="100%" height="100%" controls>
//           <source src="video2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ),
//     },
//     {
//       id: 4,
//       content: (
//         <>
//           <h1>Slide 4</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 5,
//       content: (
//         <>
//           <h1>Slide 5</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 6,
//       content: (
//         <>
//           <h1>Slide 6</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 7,
//       content: (
//         <>
//           <h1>Slide 9</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//   ];

//   const loadShow = () => {
//     items.forEach((item, index) => {
//       const element = document.getElementById(`item-${item.id}`);
//       if (element) {
//         if (index === active) {
//           element.style.transform = 'none';
//           element.style.zIndex = 1;
//           element.style.filter = 'none';
//           element.style.opacity = 1;
//         } else {
//           const stt = Math.abs(active - index);
//           const translateX = 200 * stt;
//           const scale = 1 - 0.2 * stt;
//           const rotateY = active > index ? '1deg' : '-1deg';
//           element.style.transform = `translateX(${active > index ? -translateX : translateX}px) scale(${scale}) perspective(16px) rotateY(${rotateY})`;
//           element.style.zIndex = -stt;
//           element.style.filter = 'blur(5px)';
//           element.style.opacity = stt > 2 ? 0 : 0.6;
//         }
//       }
//     });
//   };

//   React.useEffect(() => {
//     loadShow();
//   }, [active]);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev));
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('./images/bgf.jpg')",
//         minHeight: '100vh',
//         margin: 0,
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontFamily: 'monospace',
//       }}
//     >
//       <div
//         className="slider"
//         style={{
//           position: 'relative',
//           marginTop: '100px',
//           width: '100%',
//           height: '370px',
//           overflow: 'hidden',
//           zIndex: 1,
//         }}
//       >
//         {items.map((item, index) => (
//           <div
//             key={item.id}
//             id={`item-${item.id}`}
//             className="item"
//             style={{
//               position: 'absolute',
//               width: '600px',
//               height: '360px',
//               textAlign: 'justify',
//               backgroundColor: '#fff',
//               backgroundImage: 'url("https://th.bing.com/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")',
//               borderRadius: '20px',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               padding: '20px',
//               transition: '0.5s',
//               left: 'calc(50% - 310px)',
//               top: 0,
//               zIndex: 1,
//             }}
//           >
//             {item.content}
//           </div>
//         ))}
//         <button
//           id="next"
//           onClick={handleNext}
//           style={{
//             position: 'absolute',
//             right: '50px',
//             top: '40%',
//             zIndex: 2,
//             color: '#fff',
//             background: 'none',
//             border: 'none',
//             fontSize: 'xxx-large',
//             fontFamily: 'monospace',
//             fontWeight: 'bold',
//             opacity: 0.5,
//             transition: 'opacity 0.5s',
//           }}
//         >
//           &gt;
//         </button>
//         <button
//           id="prev"
//           onClick={handlePrev}
//           style={{
//             position: 'absolute',
//             left: '50px',
//             top: '40%',
//             zIndex: 2,
//             color: '#fff',
//             background: 'none',
//             border: 'none',
//             fontSize: 'xxx-large',
//             fontFamily: 'monospace',
//             fontWeight: 'bold',
//             opacity: 0.5,
//             transition: 'opacity 0.5s',
//           }}
//         >
//           &lt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SliderDemo;



// import React, { useState, useEffect } from 'react';

// const SliderDemo = () => {
//   const [active, setActive] = useState(3);

//   const items = [
//     {
//       id: 1,
//       backgroundImage: "url('./images/slide1.jpg')",
//       content: (
//         <>
//           <h1>Slide 1</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic iure enim, rem accusamus odit nemo aspernatur consequuntur vero in veniam fugiat, consectetur officiis voluptatum quidem libero.
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 2,
//       backgroundImage: "url('./images/slide2.jpg')",
//       content: <h1>Slide 2</h1>,
//     },
//     {
//       id: 3,
//       backgroundImage: "url('./images/slide3.jpg')",
//       content: (
//         <video width="100%" height="100%" controls>
//           <source src="video2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ),
//     },
//     {
//       id: 4,
//       backgroundImage: "url('./images/slide4.jpg')",
//       content: (
//         <>
//           <h1>Slide 4</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 5,
//       backgroundImage: "url('./images/slide5.jpg')",
//       content: (
//         <>
//           <h1>Slide 5</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 6,
//       backgroundImage: "url('./images/slide6.jpg')",
//       content: (
//         <>
//           <h1>Slide 6</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//     {
//       id: 7,
//       backgroundImage: "url('./images/slide7.jpg')",
//       content: (
//         <>
//           <h1>Slide 7</h1>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
//           </p>
//         </>
//       ),
//     },
//   ];

//   const loadShow = () => {
//     items.forEach((item, index) => {
//       const element = document.getElementById(`item-${item.id}`);
//       if (element) {
//         if (index === active) {
//           element.style.transform = 'none';
//           element.style.zIndex = 1;
//           element.style.filter = 'none';
//           element.style.opacity = 1;
//         } else {
//           const stt = Math.abs(active - index);
//           const translateX = 200 * stt;
//           const scale = 1 - 0.2 * stt;
//           const rotateY = active > index ? '1deg' : '-1deg';
//           element.style.transform = `translateX(${active > index ? -translateX : translateX}px) scale(${scale}) perspective(16px) rotateY(${rotateY})`;
//           element.style.zIndex = -stt;
//           element.style.filter = 'blur(5px)';
//           element.style.opacity = stt > 2 ? 0 : 0.6;
//         }
//       }
//     });
//   };

//   useEffect(() => {
//     loadShow();
//   }, [active]);

//   const handleNext = () => {
//     setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev));
//   };

//   const handlePrev = () => {
//     setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: "url('./images/bgf.jpg')",
//         minHeight: '100vh',
//         margin: 0,
//         display: 'flex',
        
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontFamily: 'monospace',
//         padding:'20px'
//       }}
//     >
//       <div
//         className="slider"
//         style={{
//           position: 'relative',
//           marginTop: '100px',
//           width: '100%',
//           height: '370px',
          
//           overflow: 'hidden',
//           zIndex: 1,
//         }}
//       >
//         {items.map((item, index) => (
//           <div
//             key={item.id}
//             id={`item-${item.id}`}
//             className="item"
//             style={{
//               position: 'absolute',
//               width: '600px',
//               height: '360px',
//               textAlign: 'justify',
//               backgroundColor: '#fff',
//               backgroundImage: item.backgroundImage,
//               borderRadius: '20px',
//               backgroundRepeat: 'no-repeat',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               padding: '20px',
//               transition: '0.5s',
//               left: 'calc(50% - 310px)',
//               top: 0,
//               zIndex: 1,
//             }}
//           >
//             {item.content}
//           </div>
//         ))}
//         <button
//           id="next"
//           onClick={handleNext}
//           style={{
//             position: 'absolute',
//             right: '50px',
//             top: '40%',
//             zIndex: 2,
//             color: 'red',
//             background: 'none',
//             border: 'none',
//             fontSize: 'xxx-large',
//             fontFamily: 'monospace',
//             fontWeight: 'bold',
//             opacity: 0.5,
//             transition: 'opacity 0.5s',
//           }}
//         >
//           &gt;
//         </button>
//         <button
//           id="prev"
//           onClick={handlePrev}
//           style={{
//             position: 'absolute',
//             left: '50px',
//             top: '40%',
//             zIndex: 2,
//             color: 'red',
//             background: 'none',
//             border: 'none',
//             fontSize: 'xxx-large',
//             fontFamily: 'monospace',
//             fontWeight: 'bold',
//             opacity: 0.5,
//             transition: 'opacity 0.5s',
//           }}
//         >
//           &lt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SliderDemo;




import React, { useState, useEffect } from 'react';

const SliderDemo = () => {
  const [active, setActive] = useState(3);

  const items = [
    {
      id: 1,
      backgroundImage: "url('./images/slide1.jpg')",
      content: (
        <>
          <h1>Slide 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum hic iure enim, rem accusamus odit nemo aspernatur consequuntur vero in veniam fugiat, consectetur officiis voluptatum quidem libero.
          </p>
        </>
      ),
    },
    {
      id: 2,
      backgroundImage: "url('./images/slide2.jpg')",
      content: <h1>Slide 2</h1>,
    },
    {
      id: 3,
      backgroundImage: "url('./images/slide3.jpg')",
      content: (
        <video width="100%" height="100%" controls>
          <source src="video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
    },
    {
      id: 4,
      backgroundImage: "url('./images/slide4.jpg')",
      content: (
        <>
          <h1>Slide 4</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
          </p>
        </>
      ),
    },
    {
      id: 5,
      backgroundImage: "url('./images/slide5.jpg')",
      content: (
        <>
          <h1>Slide 5</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
          </p>
        </>
      ),
    },
    {
      id: 6,
      backgroundImage: "url('./images/slide6.jpg')",
      content: (
        <>
          <h1>Slide 6</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
          </p>
        </>
      ),
    },
    {
      id: 7,
      backgroundImage: "url('./images/slide7.jpg')",
      content: (
        <>
          <h1>Slide 7</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptas ipsa similique magni adipisci accusamus consectetur fuga facilis doloremque dignissimos incidunt, reiciendis molestias dolore pariatur illum enim ipsum nostrum ab blanditiis?
          </p>
        </>
      ),
    },
  ];

  const loadShow = () => {
    items.forEach((item, index) => {
      const element = document.getElementById(`item-${item.id}`);
      if (element) {
        if (index === active) {
          element.style.transform = 'none';
          element.style.zIndex = 1;
          element.style.filter = 'none';
          element.style.opacity = 1;
        } else {
          const stt = Math.abs(active - index);
          const translateX = 200 * stt;
          const scale = 1 - 0.2 * stt;
          const rotateY = active > index ? '1deg' : '-1deg';
          element.style.transform = `translateX(${active > index ? -translateX : translateX}px) scale(${scale}) perspective(16px) rotateY(${rotateY})`;
          element.style.zIndex = -stt;
          element.style.filter = 'blur(5px)';
          element.style.opacity = stt > 2 ? 0 : 0.6;
        }
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  return (
    <div
      style={{
        backgroundImage: "url('./images/bgf.jpg')",
        minHeight: '100vh',
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'monospace',
        padding: '20px',
      }}
    >
      <div
        className="slider"
        style={{
          position: 'relative',
          marginTop: '100px',
          width: '100%',
          height: '370px',
          overflow: 'hidden',
          zIndex: 1,
          '@media (max-width: 768px)': {
            marginTop: '50px',
            height: '300px',
            
          },
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            id={`item-${item.id}`}
            className="item"
            style={{
              position: 'absolute',
              padding:'70px',
              width: '600px',
              height: '360px',
              textAlign: 'justify',
              backgroundColor: '#fff',
              backgroundImage: item.backgroundImage,
              borderRadius: '20px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '20px',
              transition: '0.5s',
              left: 'calc(50% - 310px)',
              top: 0,
              zIndex: 1,
              '@media (max-width: 768px)': {
                width: '40%',
                height: '200px',
                
                left: '5%',
              },
            }}
          >
            {item.content}
          </div>
        ))}
        <button
          id="next"
          onClick={handleNext}
          style={{
            position: 'absolute',
            right: '50px',
            top: '40%',
            zIndex: 2,
            color: 'red',
            background: 'none',
            border: 'none',
            fontSize: 'xxx-large',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            opacity: 0.5,
            transition: 'opacity 0.5s',
            '@media (max-width: 768px)': {
              right: '20px',
              fontSize: 'xx-large',
            },
          }}
        >
          &gt;
        </button>
        <button
          id="prev"
          onClick={handlePrev}
          style={{
            position: 'absolute',
            left: '50px',
            top: '40%',
            zIndex: 2,
            color: 'red',
            background: 'none',
            border: 'none',
            fontSize: 'xxx-large',
            fontFamily: 'monospace',
            fontWeight: 'bold',
            opacity: 0.5,
            transition: 'opacity 0.5s',
            '@media (max-width: 768px)': {
              left: '20px',
              fontSize: 'xx-large',
            },
          }}
        >
          &lt;
        </button>
      </div>
    </div>
  );
};

export default SliderDemo;