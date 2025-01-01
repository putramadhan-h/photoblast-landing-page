'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// Import images for team members
import Member1 from '@/assets/OurTeam - Mohammad Iqbal Ramadhan.png';
import Member2 from '@/assets/OurTeam - Rofi Nabhan Basil.png';
import Member3 from '@/assets/OurTeam - Mohammad Risky Arfiyanto.png';
import Member4 from '@/assets/OurTeam - Taor Baga.png';

// Import social media icons (SVG)
import SocialInsta from '@/assets/social-insta.svg'; // Instagram
import SocialLinkedin from '@/assets/social-linkedin.svg'; // LinkedIn
import SocialEmail from '@/assets/social-x.svg'; // Email

// Team members data with additional bio and social media links
const teamMembers = [
  {
    name: 'Iqbal Ramadhan',
    role: 'CEO',
    image: Member1,
    bio: 'Visionary leader with 15+ years of experience in tech innovation.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mohamad@example.com',
  },
  {
    name: 'Rofi Nabhan Basil',
    role: 'CTO',
    image: Member2,
    bio: 'Tech guru specializing in AI and machine learning.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'rofi@example.com',
  },
  {
    name: 'Mohammad Rizky',
    role: 'Designer',
    image: Member3,
    bio: 'Creative mind with a passion for user-centric design.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'rizky@example.com',
  },
  {
    name: 'Taor Baga',
    role: 'Developer',
    image: Member4,
    bio: 'Full-stack developer with a focus on building scalable apps.',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'taor@example.com',
  },
];

// Team member card component
const TeamMember = ({ member, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.2 }}
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Menambahkan bayangan saat hover
    }}
  >
    <div className="relative">
      <Image
        src={member.image}
        alt={member.name}
        width={350}
        height={350}
        className="w-full h-64 object-cover transition-all duration-300"
      />
    </div>
    <div className="p-6 flex flex-col">
      <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
      <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
      <p className="text-gray-600 mb-4">{member.bio}</p>
      <div className="flex space-x-4">
        {/* LinkedIn */}
        <a
          href={member.linkedin}
          aria-label={`${member.name}'s LinkedIn`}
          className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
        >
          <SocialLinkedin className="w-6 h-6" />
        </a>
        {/* Instagram */}
        <a
          href={member.twitter}
          aria-label={`${member.name}'s Twitter`}
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        >
          <SocialInsta className="w-6 h-6" />
        </a>
        {/* Email */}
        <a
          href={`mailto:${member.email}`}
          aria-label={`Email ${member.name}`}
          className="text-gray-400 hover:text-red-500 transition-colors duration-300"
        >
          <SocialEmail className="w-6 h-6" />
        </a>
      </div>
    </div>
  </motion.div>
);

export const OurTeam = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#d1d0d0] py-24 overflow-x-clip">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title"
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
