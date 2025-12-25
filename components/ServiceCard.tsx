
import React from 'react';
import { ICON_MAP } from '../constants';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  variant?: 'minimal' | 'detailed';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'minimal' }) => {
  const isAdditional = service.category === 'additional';

  return (
    <div className={`p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group ${
      isAdditional 
        ? 'bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100' 
        : 'bg-white border border-gray-100 shadow-sm'
    }`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
        isAdditional ? 'bg-blue-50 text-blue-600' : 'bg-blue-600 text-white'
      }`}>
        {ICON_MAP[service.icon]}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {service.description}
      </p>
      {variant === 'detailed' && (
        <button className="mt-6 text-blue-600 font-semibold text-sm flex items-center hover:translate-x-1 transition-transform">
          Learn More <span className="ml-1">→</span>
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
