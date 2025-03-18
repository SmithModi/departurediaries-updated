
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, bio }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full overflow-hidden bg-travel-600/90 border-none shadow-md hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-white">{name}</h3>
          <p className="text-travel-100 mb-3">{role}</p>
          <p className="text-white/85 text-sm">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
