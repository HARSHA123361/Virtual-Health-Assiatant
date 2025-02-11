import React from 'react';
import { AlertCircle, Activity } from 'lucide-react';
import type { Severity } from '../models/symptomModel';

interface PredictionResultProps {
  severity: Severity;
  isLoading: boolean;
}

export function PredictionResult({ severity, isLoading }: PredictionResultProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse flex items-center justify-center p-4">
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  }

  const severityConfig = {
    mild: {
      bg: 'bg-green-50',
      border: 'border-green-400',
      text: 'text-green-800',
      icon: 'text-green-500'
    },
    moderate: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-400',
      text: 'text-yellow-800',
      icon: 'text-yellow-500'
    },
    severe: {
      bg: 'bg-red-50',
      border: 'border-red-400',
      text: 'text-red-800',
      icon: 'text-red-500'
    }
  };

  const config = severityConfig[severity];

  return (
    <div className={`mt-4 p-4 rounded-lg border-2 ${config.bg} ${config.border}`}>
      <div className="flex items-start gap-3">
        <AlertCircle className={`w-5 h-5 ${config.icon} flex-shrink-0 mt-0.5`} />
        <div>
          <h4 className={`font-medium ${config.text}`}>
            Predicted Severity: {severity.charAt(0).toUpperCase() + severity.slice(1)}
          </h4>
          <p className={`mt-1 text-sm ${config.text}`}>
            {severity === 'severe' 
              ? 'Please seek immediate medical attention.'
              : severity === 'moderate'
              ? 'Consider consulting a healthcare provider.'
              : 'Monitor your symptoms and rest.'
            }
          </p>
        </div>
      </div>
    </div>
  );
}