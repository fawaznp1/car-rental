import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
    /* import "bootstrap-icons/font/bootstrap-icons.css";
 */
const testimonials = [
  {
    name: "Jenny Wilson",
    handle: "@jennywilson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "Booked a luxury SUV in seconds. The experience was smooth and seamless!",
    tag: "#drive_premium"
  }, 
  {
    name: "Darrell Steward",
    handle: "@darrels",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "I felt like a VIP. The car was spotless and delivered right on time.",
    tag: "#luxuryRide"
  },
  {
    name: "Leslie Alexander",
    handle: "@lesslie",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    message: "The best rental experience I’ve had. Booked a Benz in under 2 minutes.",
    tag: "#fastBooking"
  },
  {
    name: "Kristin Watson",
    handle: "@kristinwatson2",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    message: "Perfect for weekend getaways. Loved the smooth ride and premium feel.",
    tag: "#weekendVibes"
  },
  {
    name: "Guy Hawkins",
    handle: "@guyhawk",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    message: "No hidden fees. Just pure driving pleasure with top-tier cars.",
    tag: "#honestService"
  },
  {
    name: "Marvin McKinney",
    handle: "@marvin_dev",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    message: "Great selection of premium cars. Got exactly what I needed for my trip.",
    tag: "#rentItRight"
  },
  {
    name: "Annette Black",
    handle: "@annetteb",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message: "From pickup to drop-off, everything was top-class and professional.",
    tag: "#eliteDrive"
  },
  {
    name: "Floyd Miles",
    handle: "@floydmiles",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    message: "Impressed with the fleet variety. I booked a Porsche without hassle.",
    tag: "#performance"
  },
  {
    name: "Cameron Williamson",
    handle: "@camwill",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    message: "Easy app, great service, and beautiful cars. What more could you want?",
    tag: "#rentalDoneRight"
  },
  {
    name: "Theresa Webb",
    handle: "@theresawebb",
    image: "https://randomuser.me/api/portraits/women/71.jpg",
    message: "The BMW I rented looked brand new. Will definitely book again!",
    tag: "#luxuryFeels"
  },
  {
    name: "Wade Warren",
    handle: "@wadew",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
    message: "Professional support and amazing vehicle condition. 10/10 experience.",
    tag: "#driveClassy"
  },
  {
    name: "Kathryn Murphy",
    handle: "@katmurphy",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    message: "Perfect for business travel. Arrived in style and comfort.",
    tag: "#executiveDrive"
  },
  {
    name: "Eleanor Pena",
    handle: "@eleanor_ride",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    message: "Luxury without the stress. Booking and return were super simple.",
    tag: "#stressFree"
  },
  {
    name: "Ralph Edwards",
    handle: "@ralph_ed",
    image: "https://randomuser.me/api/portraits/men/63.jpg",
    message: "Customer service was excellent. Got help instantly when I needed it.",
    tag: "#reliableSupport"
  },
  {
    name: "Courtney Henry",
    handle: "@courtneyh",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    message: "Rented an Audi for my wedding — sleek, stylish, and unforgettable.",
    tag: "#specialMoments"
  }
]


const Testimonials = () => {
  return (
    <section className="py-5 text-center" >
      <div className="container">
        <h2 className="fw-bold mb-3 text-white">What our customers say</h2>
        <p className="text-white mb-5">
         Our customers love the experience — fast, reliable, and easy to use. Here's what they’re saying.
        </p>

        <div className="row g-4">
          {testimonials.map((t, idx) => (
            <div className="col-sm-6 col-lg-3" key={idx}>
              <div className="card h-100 p-3 border-0 shadow-sm text-start">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={t.image}
                    className="rounded-circle me-3"
                    width="40"
                    height="40"
                    alt={t.name}
                    loading="lazy"
                  />
                  <div>
                    <h6 className="mb-0 fw-semibold">{t.name}</h6>
                    <small className="text-muted">{t.handle}</small>
                  </div>
                  <div className="ms-auto text-primary fs-5">
                    <i className="bi bi-twitter"></i>
                  </div>
                </div>
                <p className="mb-1">{t.message}</p>
                <small className="text-primary">{t.tag}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
