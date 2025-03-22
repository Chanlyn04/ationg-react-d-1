// // function HeroSection() {
// //     return (
// //         <section className="hero d-flex align-items-center justify-content-center text-start p-5">
// //             <div className="container">
// //                 <div className="row align-items-center">
// //                     {/* Left Section - Text */}
// //                     <div className="col-md-6">
// //                         <h1 className="Caption ">
// //                             Develop your <br />
// //                             courage to heal, <br />
// //                             and strength to grow
// //                         </h1>
// //                         <button className="btn btn-outline-success mt-3">
// //     <a href="/Signup" className="text-decoration-none text-white">Join now</a>
// // </button>
// //                     </div>

// //                     {/* Right Section - Image */}
// //                     <div className="col-md-6 text-center position-relative">
// //     <div className="circle-border"></div>  {/* Dashed border */}
// //     <div className="circle-spacing"></div>  {/* Space/gap */}
// //     <div className="circle-bg"></div>       {/* Inner solid circle */}
// //     <img src="https://www.groupiso.com/wp-content/uploads/2023/02/woman-laughing-on-phone.png" className="hero-img" />
// // </div>

// //                 </div>
// //             </div>
// //         </section>
// //     );
// // }

// // export default HeroSection;


// function Home() {
//   return (
//     <div className="placeholder-content">
//         <img src="https://cdn-icons-png.flaticon.com/128/11289/11289042.png" alt="Thrive360 Logo" className="img-fluid" />
//         <h1>Fuel Your Mind, Body, and Spirit</h1>
//         <p> Explore our services, read about our team, and get in touch for any queries. We are here to provide top-notch solutions tailored to your needs.
//            Empower yourself with a self-paced approach to total health. 
//            Set and track personal goals, share your thoughts freely, and access workshops and self-care resources—whenever you need them.
//            Thrive in every aspect of life, on your own terms.
//         </p>
//         <div className="row mt-4">
//             <div className="col-md-4 col-sm-6">
//                 <div className="card">
//                     <div className="card-body">
//                         <img src="https://i.pinimg.com/736x/ed/c7/d9/edc7d9c8dfc85b9f26217c62e6c8bdf0.jpg" alt="Be Yourself" className="card-img-top" />
//                         <h2 className="card-title">Be Yourself</h2>
//                         <p className="card-text">Discover our unique offering tailored just for you.</p>
//                         <a href="#" className="btn btn-primary">Click Here</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-4 col-sm-6">
//                 <div className="card">
//                     <div className="card-body">
//                         <img src="https://i.pinimg.com/736x/71/da/bc/71dabc4789a2e547199bf054e0bc130b.jpg" alt="Meditate With Us" className="card-img-top" />
//                         <h3 className="card-title">Meditate With Us</h3>
//                         <p className="card-text">Connect with us to see how we can help you.</p>
//                         <a href="#" className="btn btn-primary">Click Here</a>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-md-4 col-sm-6">
//                 <div className="card">
//                     <div className="card-body">
//                         <img src="https://i.pinimg.com/736x/d8/21/6a/d8216a526509779586247fa14460c90e.jpg" alt="Set and Track your Goals" className="card-img-top" />
//                         <h4 className="card-title">Set and Track your Goals</h4>
//                         <p className="card-text">Experience the benefits of our innovative solutions.</p>
//                         <a href="#" className="btn btn-primary">Click Here</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Home;

const Home = () => {
    return (
      <div className="container mt-4">
        <div className="card p-3">
          <div className="d-flex align-items-center">
            <div className="profile-pic">F</div>
            <input
              type="text"
              className="form-control ms-2"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
  
        <div className="card mt-3 p-3">
          <div className="d-flex align-items-center">
            <div className="profile-pic">F</div>
            <div className="ms-2">
              <p className="mb-0 fw-bold">Anonymous</p>
              <small>March 3, 2025</small>
            </div>
          </div>
          <p className="mt-2">Been tired and drained lately.</p>
          <div className="d-flex justify-content-between">
            <span>❤️ 5 Hearts</span>
            <span>🔗 3 Shares</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;
  