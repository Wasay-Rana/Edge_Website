import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Wasay',
    role: 'AI Research Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    social: {
      github: '#',
      linkedin: '#',
      email: 'wasay@edgevision.ai'
    }
  },
  {
    name: 'Manahil',
    role: 'AI Research Engineer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    social: {
      github: '#',
      linkedin: '#',
      email: 'manahil@edgevision.ai'
    }
  },
  {
    name: 'Dr. Khawar Khurshid',
    role: 'Supervisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      email: 'khawar@edgevision.ai'
    }
  },
  {
    name: 'Dr. Shahzad Arif',
    role: 'Co-Supervisor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    social: {
      linkedin: '#',
      email: 'shahzad@edgevision.ai'
    }
  }
];

export function AboutPage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds behind EdgeVision's innovative computer vision solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-600 hover:text-blue-600">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-600 hover:text-blue-600">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-600 hover:text-blue-600">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At EdgeVision, we're committed to revolutionizing computer vision through edge computing.
            Our mission is to make advanced AI capabilities accessible while maintaining privacy and performance.
          </p>
        </motion.div>
      </div>
    </div>
  );
}