
import React from "react";
import { motion } from "framer-motion";
import { 
  Plane, Palmtree, Hotel, FileCheck, Users, Shield, 
  LucideIcon 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type ServiceIconType = "Plane" | "Palmtree" | "Hotel" | "FileCheck" | "Users" | "Shield";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ServiceIconType;
  color: string;
  hoverColor: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  color,
  hoverColor
}) => {
  const iconMap: Record<ServiceIconType, LucideIcon> = {
    Plane,
    Palmtree,
    Hotel,
    FileCheck,
    Users,
    Shield
  };

  const IconComponent = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`h-full transition-colors ${color} ${hoverColor} border-none shadow-md hover:shadow-lg overflow-hidden`}>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mb-4 shadow-sm">
            <IconComponent className="h-8 w-8 text-travel-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
