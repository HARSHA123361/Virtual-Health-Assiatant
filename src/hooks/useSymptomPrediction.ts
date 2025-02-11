import { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import { createModel, trainModel, predictSeverity, Symptom, symptoms } from '../models/symptomModel';

export function useSymptomPrediction() {
  const [model, setModel] = useState<tf.LayersModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function initModel() {
      try {
        // Initialize TensorFlow.js
        await tf.ready();
        
        // Create and train the model
        const newModel = await createModel();
        await trainModel(newModel);
        
        setModel(newModel);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize the prediction model');
        setIsLoading(false);
      }
    }

    initModel();

    // Cleanup
    return () => {
      if (model) {
        model.dispose();
      }
    };
  }, []);

  const predict = async (selectedSymptoms: Symptom[]) => {
    if (!model) {
      throw new Error('Model not initialized');
    }
    return await predictSeverity(model, selectedSymptoms);
  };

  return {
    predict,
    isLoading,
    error,
    symptoms
  };
}