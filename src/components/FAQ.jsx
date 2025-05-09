import { useState } from "react";
import "./FAQ.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const faqData = [
    {
      id: 1,
      question: "Where can I pick up the car?",
      answer: "You can pick up your car at any of our locations or opt for home delivery (additional charges may apply).",
      category: "Pickup & Return",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. All payments are securely processed through our payment gateway.",
      category: "Billing",
    },
    {
      id: 3,
      question: "Can I return the car at a different location?",
      answer: "Yes, we offer one-way rentals. You can return the car at a different location.",
      category: "Pickup & Return",
    },
    {
      id: 4,
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee on all our products. If you're not satisfied, contact our support team with your order details to process your refund.",
      category: "Billing",
    },
    {
      id: 5,
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team via email at support@urbandrive.com, through the live chat feature on our website, or by calling our helpline at (123) 456-7890 during business hours.",
      category: "Support",
    },
    {
      id: 6,
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for non-profit organizations. Please contact our sales team with your organization's details to learn more about our non-profit discount program.",
      category: "Billing",
    },
    {
      id: 7,
      question: "Can I request additional services, like a driver or GPS?",
      answer: "Yes, we offer additional services like professional chauffeurs, GPS navigation, and child car seats for an extra charge.",
      category: "Special Requests",
    },
     {
      id: 8,
      question: "Are pets allowed in the rental car?",
      answer: "Pets are allowed in most of our vehicles, but additional cleaning fees may apply if the car is returned in an excessively dirty condition.",
      category: "Special Requests",
    },

  ];

  // Toggle FAQ item
  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group FAQs by category
  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  // Get unique categories
  const categories = Object.keys(groupedFAQs);

  return (
    <div className="faq-container mb-4">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      {/* Search Control */}
      <div className="faq-search-container">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search FAQs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* No results message */}
      {filteredFAQs.length === 0 && (
        <div className="no-results">
          <p>
            No FAQs found matching "{searchTerm}". Try a different search term.
          </p>
        </div>
      )}

      {/* Accordion View */}
      <div className="faq-accordion">
        {categories.map((category) => (
          <div key={category} className="category-section">
            <h3 className="category-title">{category}</h3>
            <div className="category-items">
              {groupedFAQs[category].map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    className={`faq-question ${activeIndex === faq.id ? "active" : ""}`}
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {activeIndex === faq.id ? "▲" : "▼"}
                    </span>
                  </button>
                  <div
                    className={`faq-answer ${
                      activeIndex === faq.id ? "show" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Help prompt */}
      <div className="faq-footer">
        <p>
          Can't find what you're looking for?{" "}
          <a href="#" className="contact-link">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
};

export default FAQSection;