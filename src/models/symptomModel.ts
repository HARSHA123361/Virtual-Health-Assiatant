import * as tf from '@tensorflow/tfjs';

// Define symptom features
export const symptoms = [
  'fever',
  'cough',
  'fatigue',
  'difficulty_breathing',
  'headache',
  'body_aches',
  'sore_throat',
  'loss_of_taste_smell',
  'nausea',
  'diarrhea'
] as const;

export type Symptom = typeof symptoms[number];

// Define severity levels
export type Severity = 'mild' | 'moderate' | 'severe';

// Create a simple model for symptom severity prediction
export async function createModel() {
  const model = tf.sequential();
  
  // Add layers
  model.add(tf.layers.dense({
    inputShape: [symptoms.length],
    units: 16,
    activation: 'relu'
  }));
  
  model.add(tf.layers.dense({
    units: 8,
    activation: 'relu'
  }));
  
  model.add(tf.layers.dense({
    units: 3, // 3 classes: mild, moderate, severe
    activation: 'softmax'
  }));

  // Compile the model
  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });

  return model;
}

// Convert symptoms to tensor
export function symptomsToTensor(selectedSymptoms: Symptom[]): tf.Tensor {
  const input = symptoms.map(symptom => selectedSymptoms.includes(symptom) ? 1 : 0);
  return tf.tensor2d([input]);
}

// Predict severity
export async function predictSeverity(model: tf.LayersModel, selectedSymptoms: Symptom[]): Promise<Severity> {
  const input = symptomsToTensor(selectedSymptoms);
  const prediction = await model.predict(input) as tf.Tensor;
  const probabilities = await prediction.data();
  
  // Get the index of the highest probability
  const maxIndex = probabilities.indexOf(Math.max(...Array.from(probabilities)));
  
  // Map index to severity
  const severityMap: Severity[] = ['mild', 'moderate', 'severe'];
  return severityMap[maxIndex];
}

// Train the model with some sample data
export async function trainModel(model: tf.LayersModel) {
  // Sample training data (simplified for demonstration)
  const trainingData = [
    { symptoms: ['fever', 'cough'], severity: 'mild' },
    { symptoms: ['fever', 'cough', 'fatigue'], severity: 'moderate' },
    { symptoms: ['fever', 'difficulty_breathing', 'fatigue'], severity: 'severe' },
    // Add more training examples here
  ];

  // Convert training data to tensors
  const xTrain = tf.stack(trainingData.map(data => symptomsToTensor(data.symptoms as Symptom[])));
  const yTrain = tf.tensor2d(trainingData.map(data => {
    if (data.severity === 'mild') return [1, 0, 0];
    if (data.severity === 'moderate') return [0, 1, 0];
    return [0, 0, 1];
  }));

  // Train the model
  await model.fit(xTrain, yTrain, {
    epochs: 50,
    batchSize: 32,
    shuffle: true,
    verbose: 1
  });
}