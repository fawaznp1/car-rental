import React, { useState } from 'react';
import './Team.css';
import mech1 from '../images/webp/mech1.webp'
import t2 from '../images/webp/austin-distel-97HfVpyNR1M-unsplash (1).webp'
import t3 from '../images/webp/austin-distel-h1RW-NFtUyc-unsplash (1).webp'
import t4 from '../images/webp/christina-wocintechchat-com-SJvDxw0azqw-unsplash (1).webp'
import t5 from '../images/webp/dr1.webp'
import t6 from '../images/webp/fotos-8ISNp7BpXdM-unsplash (1).webp'
import t7 from '../images/webp/fotos-Qxw6i75WZ4A-unsplash (1).webp'
import t8 from '../images/webp/frank-mckenna-Ap6t4U-VIqw-unsplash (1).webp'
import t9 from '../images/webp/kato-blackmore-qcF-19BvViE-unsplash (1).webp';
import t10 from '../images/webp/kenny-eliason-2K_-PG95qlI-unsplash (1).webp'
import t11 from '../images/webp/linkedin-sales-solutions-i1MXZuHqD2k-unsplash (1).webp'
import t12 from '../images/webp/muhammad-rizqi-pEfPElcZBM4-unsplash (1).webp'
import t13 from '../images/webp/nem-malosi-_c8EEfOVRow-unsplash (1).webp'
import t14 from '../images/webp/shipman-northcutt-sgZX15Da8YE-unsplash (2).webp'
import t15 from '../images/webp/sten-rademaker-UZUzvJEvKnI-unsplash (1).webp'
import t16 from '../images/webp/valerie-kaarna-YsutjEqmLWo-unsplash (1).webp'
import t17 from '../images/webp/zbra-marketing-N4AK7Vy1McM-unsplash (1).webp'


const TeamSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedMember, setExpandedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Lead Mechanic",
      department: "mechanic",
      photo: t9,
      bio: "John has over 15 years of experience as a certified mechanic specializing in European vehicles. He leads our mechanical team with precision and dedication.",
      skills: ["Engine Repair", "Diagnostics", "Transmission"],
      contact: "john.doe@example.com"
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Senior Mechanic",
      department: "mechanic",
      photo: t15,
      bio: "Jane is an expert in domestic and hybrid vehicle maintenance with 10 years in the automotive industry. She's known for solving complex mechanical issues.",
      skills: ["Hybrid Systems", "Electrical Systems", "Brake Service"],
      contact: "jane.smith@example.com"
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Sales Manager",
      department: "sales",
      photo: t3,
      bio: "Michael leads our sales team with 8 years of automotive sales experience. He's dedicated to finding the perfect vehicle match for every customer.",
      skills: ["Customer Relations", "Financing Options", "Product Knowledge"],
      contact: "michael.johnson@example.com"
    },
    {
      id: 4,
      name: "Emil Williams",
      position: "Sales Associate",
      department: "sales",
      photo: t7,
      bio: "Emily brings enthusiasm and detailed product knowledge to our sales team. With 5 years of experience, she excels at understanding customer needs.",
      skills: ["Customer Service", "Negotiation", "Market Analysis"],
      contact: "emil.williams@example.com"
    },
    {
      id: 5,
      name: "David Brown",
      position: "Senior Driver",
      department: "driver",
      photo: t8,
      bio: "David has been our lead driver for 12 years with a perfect safety record. He specializes in long-distance deliveries and oversized cargo.",
      skills: ["Long-haul Driving", "Safety Procedures", "Route Optimization"],
      contact: "david.brown@example.com"
    },
    {
      id: 6,
      name: "John Davis",
      position: "Delivery Driver",
      department: "driver",
      photo: t16,
      bio: "Sarah is an experienced urban delivery specialist with knowledge of efficient city routing and excellent customer service skills.",
      skills: ["Urban Navigation", "Time Management", "Customer Relations"],
      contact: "John.davis@example.com"
    },
    {
      id: 7,
      name: "Robert Wilson",
      position: "Service Advisor",
      department: "customer_service",
      photo: t17,
      bio: "Robert bridges the gap between customers and our technical team, ensuring clear communication about service needs and solutions.",
      skills: ["Technical Communication", "Service Planning", "Customer Care"],
      contact: "robert.wilson@example.com"
    },
    {
      id: 8,
      name: "Lisandro Martinez",
      position: "Parts Manager",
      department: "parts",
      photo: mech1,
      bio: "Lisa oversees our extensive parts inventory, ensuring we have the right components for every repair and maintenance job.",
      skills: ["Inventory Management", "Supplier Relations", "Quality Control"],
      contact: "lisan.martinez@example.com"
    },
    {
      id: 9,
      name: "Kevin Taylor",
      position: "Administrative Director",
      department: "admin",
      photo: t14,
      bio: "Kevin manages our office operations, scheduling, and administrative processes to keep everything running smoothly.",
      skills: ["Office Management", "Scheduling", "Administrative Systems"],
      contact: "kevin.taylor@example.com"
    },
    {
      id: 10,
      name: "Amanda White",
      position: "Marketing Specialist",
      department: "marketing",
      photo: t12,
      bio: "Amanda develops our marketing strategies and campaigns to connect with customers and promote our services.",
      skills: ["Digital Marketing", "Brand Development", "Customer Outreach"],
      contact: "amanda.white@example.com"
    }
  ];

  // Department information for filtering
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'mechanic', name: 'Mechanics' },
    { id: 'sales', name: 'Sales' },
    { id: 'driver', name: 'Drivers' },
    { id: 'customer_service', name: 'Customer Service' },
    { id: 'parts', name: 'Parts Department' },
    { id: 'admin', name: 'Administration' },
    { id: 'marketing', name: 'Marketing' }
  ];

  // Filter team members based on active filter
  const filteredMembers = activeFilter === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeFilter);

  // Toggle member details
  const toggleMemberDetails = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  return (
    <div className="team-section">
      <div className="team-header">
        <h2 className="team-title">Meet Our Team</h2>
        <p className="team-subtitle">The dedicated professionals who make our service exceptional</p>
      </div>
      
      <div className="department-filter">
        <h3>Filter by Department:</h3>
        <div className="filter-buttons">
          {departments.map(dept => (
            <button
              key={dept.id}
              className={`filter-btn ${activeFilter === dept.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(dept.id)}
            >
              {dept.name}
            </button>
          ))}
        </div>
      </div>

      <div className="team-grid">
        {filteredMembers.map(member => (
          <div className="team-card" key={member.id}>
            <div className="member-photo">
              <img src={member.photo} alt={member.name} />
              <div className="department-badge">{departments.find(d => d.id === member.department).name}</div>
            </div>
            <div className="member-info">
              <h3>{member.name}</h3>
              <h4>{member.position}</h4>
              
              <div className={`member-details ${expandedMember === member.id ? 'expanded' : ''}`}>
                <p className="member-bio">{member.bio}</p>
                
                <div className="skills-section">
                  <h5>Specialties:</h5>
                  <ul className="skills-list">
                    {member.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="contact-info">
                  <p>Contact: <a href={`mailto:${member.contact}`}>{member.contact}</a></p>
                </div>
              </div>
              
              <button 
                className="details-toggle" 
                onClick={() => toggleMemberDetails(member.id)}
              >
                {expandedMember === member.id ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredMembers.length === 0 && (
        <div className="no-results">
          <p>No team members found in this department.</p>
        </div>
      )}
    </div>
  );
};

export default TeamSection;