import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function Team() {
  const [activeIndex, setActiveIndex] = useState(null);

  const members = [
    {
      name: "Nikhil Kamath",
      role: "Co-founder & CFO",
      image: "media/images/nikhilKamath.jpg",
      bio: "Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.",
    },
    {
      name: "Kailash Nadh",
      role: "CTO",
      image: "media/images/kailashNadh.jpg",
      bio: "Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.",
    },
    {
      name: "Venu Madhav",
      role: "COO",
      image: "media/images/venuMadhav.jpg",
      bio: "Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations.",
    },
    {
      name: "Seema Patil",
      role: "Director",
      image: "media/images/seemapatil.jpg",
      bio: "Seema has led the quality team since the beginning and is an extremely disciplined fitness enthusiast.",
    },
    {
      name: "Karthik Rangappa",
      role: "Chief of Education",
      image: "media/images/karthikRangappa.jpg",
      bio: "Karthik wrote Varsity and heads investor education initiatives at Zerodha.",
    },
    {
      name: "Austin Prakesh",
      role: "Director Strategy",
      image: "media/images/austinPrakesh.jpg",
      bio: "Austin is a successful entrepreneur from Singapore specializing in growth strategies and revenue optimization.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-5">People</h3>

      <div className="row">
        {members.map((member, index) => (
          <div key={index} className="col-md-4 text-center mb-5">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-circle w-50 mb-4"
            />

            <p className="fs-5 mb-1">{member.name}</p>
            <p className="text-muted">{member.role}</p>

            <div
              className="d-flex justify-content-center align-items-center gap-2 fw-semibold text-muted"
              style={{ cursor: "pointer" }}
              onClick={() => toggle(index)}
            >
              <span>Bio</span>
              {activeIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {activeIndex === index && (
              <p className="mt-3 text-muted px-3">{member.bio}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
