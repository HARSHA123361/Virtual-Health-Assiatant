import React, { useState } from 'react';
import { MessageCircle, Send, AlertCircle, Heart, User, Calendar, Activity, ChevronLeft, Clock, ThermometerSun, ClipboardList, Apple, Salad, Cookie, Sandwich, Sparkles, Shield, Stethoscope, Brain, Dumbbell, Leaf, Sun, Moon, Waves } from 'lucide-react';

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  type?: 'warning' | 'urgent' | 'info';
};

type UserInfo = {
  name: string;
  age: string;
  gender: string;
};

type SymptomInfo = {
  description: string;
  severity: 'mild' | 'moderate' | 'severe';
  duration: string;
};

function HealthTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 transform transition-all hover:scale-105">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-800">Mental Wellness</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-blue-700 bg-white/50 p-3 rounded-lg">
            <Moon className="w-5 h-5" />
            <div>
              <span className="font-medium">Quality Sleep</span>
              <p className="text-sm text-blue-600">7-9 hours of restful sleep</p>
            </div>
          </li>
          <li className="flex items-center gap-3 text-blue-700 bg-white/50 p-3 rounded-lg">
            <Waves className="w-5 h-5" />
            <div>
              <span className="font-medium">Meditation</span>
              <p className="text-sm text-blue-600">Daily mindfulness practice</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 transform transition-all hover:scale-105">
        <div className="flex items-center gap-3 mb-4">
          <Dumbbell className="w-6 h-6 text-purple-600" />
          <h3 className="text-lg font-semibold text-purple-800">Physical Activity</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-purple-700 bg-white/50 p-3 rounded-lg">
            <Activity className="w-5 h-5" />
            <div>
              <span className="font-medium">Daily Exercise</span>
              <p className="text-sm text-purple-600">30 minutes moderate activity</p>
            </div>
          </li>
          <li className="flex items-center gap-3 text-purple-700 bg-white/50 p-3 rounded-lg">
            <Sun className="w-5 h-5" />
            <div>
              <span className="font-medium">Outdoor Time</span>
              <p className="text-sm text-purple-600">Natural vitamin D boost</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 transform transition-all hover:scale-105">
        <div className="flex items-center gap-3 mb-4">
          <Leaf className="w-6 h-6 text-amber-600" />
          <h3 className="text-lg font-semibold text-amber-800">Lifestyle Balance</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-amber-700 bg-white/50 p-3 rounded-lg">
            <Clock className="w-5 h-5" />
            <div>
              <span className="font-medium">Regular Schedule</span>
              <p className="text-sm text-amber-600">Consistent daily routine</p>
            </div>
          </li>
          <li className="flex items-center gap-3 text-amber-700 bg-white/50 p-3 rounded-lg">
            <Heart className="w-5 h-5" />
            <div>
              <span className="font-medium">Stress Management</span>
              <p className="text-sm text-amber-600">Regular relaxation practices</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function HealthRecommendations() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 transform transition-all hover:scale-105">
        <div className="flex items-center gap-2 mb-4">
          <Salad className="w-6 h-6 text-emerald-600" />
          <h3 className="text-lg font-semibold text-emerald-800">Recommended Foods</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-emerald-700 bg-white/50 p-3 rounded-lg">
            <Apple className="w-5 h-5" />
            <div>
              <span className="font-medium">Fresh Fruits</span>
              <p className="text-sm text-emerald-600">Rich in vitamins and antioxidants</p>
            </div>
          </li>
          <li className="flex items-center gap-3 text-emerald-700 bg-white/50 p-3 rounded-lg">
            <Salad className="w-5 h-5" />
            <div>
              <span className="font-medium">Fresh Vegetables</span>
              <p className="text-sm text-emerald-600">Essential nutrients and minerals</p>
            </div>
          </li>
          <li className="flex items-center gap-3 text-emerald-700 bg-white/50 p-3 rounded-lg">
            <Cookie className="w-5 h-5" />
            <div>
              <span className="font-medium">Nuts & Seeds</span>
              <p className="text-sm text-emerald-600">Healthy fats and protein</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-xl p-6 transform transition-all hover:scale-105">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-6 h-6 text-rose-600" />
          <h3 className="text-lg font-semibold text-rose-800">Foods to Avoid</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-rose-700 bg-white/50 p-3 rounded-lg">
            <Sandwich className="w-5 h-5" />
            <div>
              <span className="font-medium">Fast Food</span>
              <p className="text-sm text-rose-600">High in unhealthy fats</p>
            </div>
          </li>
          <li className="flex items-center gap-3 text-rose-700 bg-white/50 p-3 rounded-lg">
            <Cookie className="w-5 h-5" />
            <div>
              <span className="font-medium">Sugary Drinks</span>
              <p className="text-sm text-rose-600">Empty calories</p>
            </div>
          </li>
          <li className="flex items-center gap-3 text-rose-700 bg-white/50 p-3 rounded-lg">
            <ClipboardList className="w-5 h-5" />
            <div>
              <span className="font-medium">Processed Snacks</span>
              <p className="text-sm text-rose-600">Low nutritional value</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [step, setStep] = useState<'personal' | 'symptoms' | 'chat'>('personal');
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '', age: '', gender: '' });
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [symptomInfo, setSymptomInfo] = useState<SymptomInfo>({
    description: '',
    severity: 'mild',
    duration: ''
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setUserInfo({ ...userInfo, name: value });
      setNameError('');
    } else {
      setNameError('Please enter only letters and spaces');
    }
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const age = parseInt(value);
    if (value === '') {
      setUserInfo({ ...userInfo, age: '' });
      setAgeError('');
    } else if (isNaN(age) || age < 1 || age > 100) {
      setAgeError('Age must be between 1 and 100');
    } else {
      setUserInfo({ ...userInfo, age: value });
      setAgeError('');
    }
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInfo.name || !userInfo.age || !userInfo.gender) {
      alert('Please fill in all fields');
      return;
    }
    if (nameError || ageError) {
      return;
    }
    setStep('symptoms');
  };

  const handleSymptomsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptomInfo.description || !symptomInfo.duration) {
      alert('Please fill in all fields');
      return;
    }
    setStep('chat');
    
    const initialMessages: Message[] = [
      {
        id: 1,
        text: `Welcome ${userInfo.name}! I see you're experiencing ${symptomInfo.severity} symptoms. I'll help you assess your condition and provide appropriate guidance.`,
        sender: 'assistant'
      }
    ];

    if (symptomInfo.severity === 'severe') {
      initialMessages.push({
        id: 2,
        text: "⚠️ URGENT: Based on the severity of your symptoms, it is strongly recommended that you seek immediate medical attention. Please contact emergency services or visit the nearest emergency room.",
        sender: 'assistant',
        type: 'urgent'
      });
    }

    setMessages(initialMessages);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      let responseText = '';
      let responseType: Message['type'] = 'info';

      if (symptomInfo.severity === 'severe') {
        responseText = "⚠️ Given the severity of your symptoms, I must emphasize the importance of seeking immediate medical attention. Please do not delay in contacting emergency services or visiting the nearest emergency room.";
        responseType = 'urgent';
      } else if (symptomInfo.severity === 'moderate') {
        responseText = "Based on your symptoms, it would be advisable to schedule an appointment with your healthcare provider within the next 24-48 hours.";
        responseType = 'warning';
      } else {
        responseText = "I understand your concerns. Based on the information you've provided, here are some recommendations for managing your symptoms. However, if they persist or worsen, please consult your healthcare provider.";
      }

      const response: Message = {
        id: Date.now(),
        text: responseText,
        sender: 'assistant',
        type: responseType
      };
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  const renderStep = () => {
    switch (step) {
      case 'personal':
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 p-6">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <Stethoscope className="w-16 h-16 text-indigo-600" />
                      <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to Your Health Journey</h2>
                  <p className="text-gray-600 max-w-lg mx-auto">
                    Your well-being is our priority. Let's create a personalized health plan that fits your lifestyle and helps you achieve your wellness goals.
                  </p>
                </div>

                <form onSubmit={handlePersonalSubmit} className="space-y-6 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={userInfo.name}
                          onChange={handleNameChange}
                          className={`w-full border ${nameError ? 'border-red-500' : 'border-gray-300'} rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 ${nameError ? 'focus:ring-red-500' : 'focus:ring-indigo-500'}`}
                          placeholder="Enter your full name"
                        />
                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      </div>
                      {nameError && <p className="mt-1 text-sm text-red-600">{nameError}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                      <div className="relative">
                        <input
                          type="number"
                          value={userInfo.age}
                          onChange={handleAgeChange}
                          min="1"
                          max="100"
                          className={`w-full border ${ageError ? 'border-red-500' : 'border-gray-300'} rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 ${ageError ? 'focus:ring-red-500' : 'focus:ring-indigo-500'}`}
                          placeholder="Enter your age (1-100)"
                        />
                        <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      </div>
                      {ageError && <p className="mt-1 text-sm text-red-600">{ageError}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                      <div className="relative">
                        <select
                          value={userInfo.gender}
                          onChange={e => setUserInfo({...userInfo, gender: e.target.value})}
                          className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none bg-white"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <button
                      type="submit"
                      disabled={!!nameError || !!ageError}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
                    >
                      <Shield className="w-5 h-5" />
                      Start Health Assessment
                    </button>
                  </div>
                </form>

                <div className="mt-12">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Holistic Health Approach</h3>
                  <p className="text-gray-600 text-center mb-8">
                    We believe in a comprehensive approach to health that considers physical, mental, and lifestyle factors.
                  </p>
                  <HealthTips />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 bg-gray-50 p-6">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  Nutrition Guidelines
                </h3>
                <p className="text-gray-600 mb-6">
                  Proper nutrition is fundamental to your health. Here are some key recommendations to maintain a balanced diet.
                </p>
                <HealthRecommendations />
              </div>
            </div>
          </div>
        );

      case 'symptoms':
        return (
          <div className="flex flex-col h-full p-6">
            <form onSubmit={handleSymptomsSubmit} className="flex-1 space-y-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                <Activity className="w-6 h-6 text-indigo-600" />
                Symptom Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Describe your symptoms</label>
                  <textarea
                    value={symptomInfo.description}
                    onChange={e => setSymptomInfo({...symptomInfo, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                    placeholder="Describe your symptoms in detail"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Severity</label>
                  <div className="flex gap-4">
                    {(['mild', 'moderate', 'severe'] as const).map(severity => (
                      <button
                        key={severity}
                        type="button"
                        onClick={() => setSymptomInfo({...symptomInfo, severity})}
                        className={`flex-1 py-2 px-4 rounded-lg border ${
                          symptomInfo.severity === severity
                            ? severity === 'severe' 
                              ? 'bg-red-600 text-white border-red-600'
                              : severity === 'moderate'
                              ? 'bg-yellow-600 text-white border-yellow-600'
                              : 'bg-indigo-600 text-white border-indigo-600'
                            : 'border-gray-300 hover:border-indigo-600'
                        }`}
                      >
                        {severity.charAt(0).toUpperCase() + severity.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                  <input
                    type="text"
                    value={symptomInfo.duration}
                    onChange={e => setSymptomInfo({...symptomInfo, duration: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How long have you had these symptoms?"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep('personal')}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:border-indigo-600 flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Start Chat
                </button>
              </div>
            </form>
          </div>
        );

      case 'chat':
        return (
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium">{userInfo.name}</span>
                  <span className="text-gray-500">|</span>
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <span>{userInfo.age} years</span>
                </div>
                <button
                  onClick={() => setStep('symptoms')}
                  className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                >
                  <Activity className="w-4 h-4" />
                  Update Symptoms
                </button>
              </div>
              <div className={`mt-2 p-3 rounded-lg flex items-start gap-2 ${
                symptomInfo.severity === 'severe' 
                  ? 'bg-red-50' 
                  : symptomInfo.severity === 'moderate'
                  ? 'bg-yellow-50'
                  : 'bg-gray-50'
              }`}>
                <ThermometerSun className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                  symptomInfo.severity === 'severe'
                    ? 'text-red-600'
                    : symptomInfo.severity === 'moderate'
                    ? 'text-yellow-600'
                    : 'text-indigo-600'
                }`} />
                <div>
                  <p className="text-sm font-medium">Current Symptoms</p>
                  <p className="text-sm text-gray-600">{symptomInfo.description}</p>
                  <div className="flex gap-4 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Activity className="w-4 h-4" />
                      {symptomInfo.severity} severity
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Duration: {symptomInfo.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : message.type === 'urgent'
                          ? 'bg-red-100 border-2 border-red-400 text-red-800'
                          : message.type === 'warning'
                          ? 'bg-yellow-100 border-2 border-yellow-400 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 p-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleSend}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2"
                >
                  <span>Send</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="h-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-indigo-600" />
            <h1 className="text-xl font-semibold text-gray-800">Virtual Healthcare Assistant</h1>
          </div>
          {symptomInfo.severity === 'severe' && (
            <div className="mt-2 p-3 bg-red-50 rounded-lg">
              <div className="flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800 font-medium">
                  ⚠️ URGENT: Your symptoms are severe. Please seek immediate medical attention or contact emergency services.
                </p>
              </div>
            </div>
          )}
          <div className="mt-2 p-3 bg-amber-50 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                This is a demonstration. Do not rely on this for actual medical advice. 
                Always consult qualified healthcare professionals for medical concerns.
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default App;