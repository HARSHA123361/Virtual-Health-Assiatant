import React from 'react';
import { Symptom, symptoms } from '../models/symptomModel';
import { Activity } from 'lucide-react';

interface SymptomSelectorProps {
  selectedSymptoms: Symptom[];
  onSymptomToggle: (symptom: Symptom) => void;
}

export function SymptomSelector({ selectedSymptoms, onSymptomToggle }: SymptomSelectorProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900 flex items-center gap-2">
        <Activity className="w-5 h-5 text-indigo-600" />
        Select Your Symptoms
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => onSymptomToggle(symptom)}
            className={`p-3 rounded-lg border text-left transition-colors ${
              selectedSymptoms.includes(symptom)
                ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                : 'border-gray-300 hover:border-indigo-500'
            }`}
          >
            {symptom.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        ))}
      </div>
    </div>
  );
}