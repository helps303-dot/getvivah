import React, { useState, useEffect } from 'react';
import { Heart, Calendar, DollarSign, MapPin, Star, Check, ArrowRight, Sparkles, Clock, Users, Camera, MessageCircle, TrendingUp, UserCheck, Send, X, Shield, Award, Filter, Play, Eye, Phone, BarChart3, Activity, Calculator, Package, Video, Bell, CheckCircle2, FileText, Download, Upload, ChevronDown, ChevronRight, Search, Menu, LogOut, Settings, Mail, CheckCircle, AlertCircle, TrendingDown, PieChart, Zap, Target, Gift, Image, Mic, Home } from 'lucide-react';

const GetVivahPlatform = () => {
  const [userType, setUserType] = useState(null);
  const [step, setStep] = useState(0);
  const [matchData, setMatchData] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [adminView, setAdminView] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatVendor, setChatVendor] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [showCalculator, setShowCalculator] = useState(false);
  const [calculatorVendor, setCalculatorVendor] = useState(null);
  const [showVideoPortfolio, setShowVideoPortfolio] = useState(false);
  const [videoVendor, setVideoVendor] = useState(null);
  const [showBundleBuilder, setShowBundleBuilder] = useState(false);
  const [bundleItems, setBundleItems] = useState([]);
  const [showComparison, setShowComparison] = useState(false);
  const [compareVendors, setCompareVendors] = useState([]);
  const [vendorDashboard, setVendorDashboard] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [adminTab, setAdminTab] = useState('dashboard');
  const [showChecklist, setShowChecklist] = useState(false);
  const [showBudgetTracker, setShowBudgetTracker] = useState(false);

  const services = [
    { id: 'photographer', name: 'Photography & Videography', icon: Camera, avgPrice: 150000 },
    { id: 'decorator', name: 'Decoration & Styling', icon: Sparkles, avgPrice: 200000 },
    { id: 'makeup', name: 'Bridal Makeup & Hair', icon: Heart, avgPrice: 50000 },
    { id: 'caterer', name: 'Catering & Food', icon: Users, avgPrice: 300000 },
    { id: 'venue', name: 'Wedding Venues', icon: MapPin, avgPrice: 400000 },
    { id: 'mehendi', name: 'Mehendi Artists', icon: Sparkles, avgPrice: 30000 },
    { id: 'music', name: 'DJ & Music Bands', icon: Activity, avgPrice: 80000 },
    { id: 'planning', name: 'Wedding Planners', icon: Calendar, avgPrice: 150000 }
  ];

  const budgetRanges = [
    { id: 'budget1', label: '₹50K - ₹1L', value: '50000-100000' },
    { id: 'budget2', label: '₹1L - ₹2L', value: '100000-200000' },
    { id: 'budget3', label: '₹2L - ₹5L', value: '200000-500000' },
    { id: 'budget4', label: '₹5L - ₹10L', value: '500000-1000000' },
    { id: 'budget5', label: '₹10L+', value: '1000000+' }
  ];

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Jaipur'];

  const weddingStyles = [
    { id: 'traditional', label: 'Traditional Indian', icon: '🪔' },
    { id: 'modern', label: 'Modern & Contemporary', icon: '✨' },
    { id: 'fusion', label: 'Fusion Style', icon: '🎭' },
    { id: 'destination', label: 'Destination Wedding', icon: '🏝️' },
    { id: 'minimalist', label: 'Minimalist & Elegant', icon: '🤍' },
    { id: 'royal', label: 'Royal & Grand', icon: '👑' }
  ];

  const mockVendors = [
    {
      id: 1,
      name: 'Rajesh Photography Studio',
      service: 'photographer',
      rating: 4.9,
      reviews: 247,
      basePrice: 150000,
      city: 'Mumbai',
      matchScore: 98,
      verified: true,
      responseTime: '15 min',
      bookings: 156,
      experience: 8,
      specialties: ['Candid', 'Cinematic', 'Pre-wedding'],
      description: 'Award-winning photography studio specializing in candid wedding moments.',
      packages: [
        { name: 'Basic', price: 150000, features: ['1 Photographer', '1 Videographer', '300 Photos', 'Same Day Edit'] },
        { name: 'Premium', price: 250000, features: ['2 Photographers', '2 Videographers', '500 Photos', 'Drone Coverage'] },
        { name: 'Luxury', price: 400000, features: ['3 Photographers', 'Unlimited Photos', 'Drone', 'Album'] }
      ],
      discount: 10
    },
    {
      id: 2,
      name: 'Royal Decorators',
      service: 'decorator',
      rating: 4.8,
      reviews: 189,
      basePrice: 200000,
      city: 'Mumbai',
      matchScore: 95,
      verified: true,
      responseTime: '30 min',
      bookings: 134,
      experience: 10,
      specialties: ['Floral', 'Stage Design', 'Lighting'],
      description: 'Creating magical wedding experiences with stunning decor.',
      packages: [
        { name: 'Classic', price: 200000, features: ['Stage Decor', 'Entrance Decor', 'Basic Lighting'] },
        { name: 'Deluxe', price: 350000, features: ['Full Venue Decor', 'Premium Flowers', 'Designer Lighting'] },
        { name: 'Royal', price: 600000, features: ['360° Decor', 'Exotic Flowers', 'Intelligent Lighting'] }
      ],
      discount: 15
    },
    {
      id: 3,
      name: 'Glamour Makeup Studio',
      service: 'makeup',
      rating: 4.9,
      reviews: 312,
      basePrice: 50000,
      city: 'Mumbai',
      matchScore: 92,
      verified: true,
      responseTime: '20 min',
      bookings: 278,
      experience: 6,
      specialties: ['Bridal Makeup', 'Hair Styling', 'Saree Draping'],
      description: 'Celebrity makeup artist with expertise in bridal transformations.',
      packages: [
        { name: 'Bridal', price: 50000, features: ['Bridal Makeup', 'Hair Styling', 'Saree Draping'] },
        { name: 'Bridal + Family', price: 80000, features: ['Bridal Makeup', 'Hair', 'Draping', '2 Family Members'] },
        { name: 'Complete', price: 150000, features: ['Bridal + 5 Family', 'Pre-wedding Makeup', 'Trial'] }
      ],
      discount: 8
    }
  ];

  const weddingChecklist = [
    { 
      category: '12+ Months Before', 
      tasks: [
        { id: 1, task: 'Set wedding date', completed: true },
        { id: 2, task: 'Decide on budget', completed: true },
        { id: 3, task: 'Create guest list', completed: false },
        { id: 4, task: 'Book wedding venue', completed: false }
      ]
    },
    { 
      category: '8-12 Months Before', 
      tasks: [
        { id: 6, task: 'Book photographer', completed: false },
        { id: 7, task: 'Book caterer', completed: false },
        { id: 8, task: 'Book decorator', completed: false }
      ]
    }
  ];

  const budgetCategories = [
    { category: 'Venue', allocated: 400000, spent: 400000 },
    { category: 'Catering', allocated: 300000, spent: 0 },
    { category: 'Photography', allocated: 150000, spent: 0 },
    { category: 'Decoration', allocated: 200000, spent: 0 },
    { category: 'Makeup', allocated: 50000, spent: 0 }
  ];

  const questions = [
    { key: 'service', question: 'What service do you need?', type: 'service' },
    { key: 'style', question: 'What\'s your wedding style?', type: 'style' },
    { key: 'budget', question: 'What is your budget?', type: 'budget' },
    { key: 'guestCount', question: 'How many guests?', type: 'guests' },
    { key: 'date', question: 'When is your wedding?', type: 'date' },
    { key: 'city', question: 'Which city?', type: 'city' }
  ];

  useEffect(() => {
    setNotifications([
      { id: 1, type: 'booking', message: 'Rajesh Photography accepted your booking!', time: '2 hours ago', unread: true },
      { id: 2, type: 'message', message: 'Royal Decorators sent you a message', time: '5 hours ago', unread: true }
    ]);
  }, []);

  const handleAnswer = (value) => {
    const currentQuestion = questions[step];
    setMatchData({ ...matchData, [currentQuestion.key]: value });
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const resetMatch = () => {
    setStep(0);
    setMatchData({});
    setShowResults(false);
    setUserType(null);
  };

  const handleAdminLogin = () => {
    if (adminPassword === 'getvivah2025') {
      setAdminView(true);
      setShowAdminLogin(false);
    } else {
      alert('Incorrect password');
    }
    setAdminPassword('');
  };

  const openChat = (vendor) => {
    setChatVendor(vendor);
    setShowChat(true);
    setChatMessages([
      { id: 1, sender: 'vendor', text: 'Hi! Thank you for your interest.', time: '10:30 AM' },
      { id: 2, sender: 'user', text: 'I would like to know more about your packages', time: '10:32 AM' }
    ]);
  };

  const sendMessage = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, {
        id: chatMessages.length + 1,
        sender: 'user',
        text: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setChatInput('');
    }
  };

  const openCalculator = (vendor) => {
    setCalculatorVendor(vendor);
    setShowCalculator(true);
  };

  const addToBundle = (vendor) => {
    if (!bundleItems.find(item => item.id === vendor.id)) {
      setBundleItems([...bundleItems, vendor]);
      alert(`${vendor.name} added to your bundle!`);
    }
  };

  const addToCompare = (vendor) => {
    if (compareVendors.length < 3 && !compareVendors.find(v => v.id === vendor.id)) {
      setCompareVendors([...compareVendors, vendor]);
    }
  };

  const calculateBundleDiscount = () => {
    const total = bundleItems.reduce((sum, item) => sum + item.basePrice, 0);
    const discount = bundleItems.length >= 3 ? 0.15 : bundleItems.length >= 2 ? 0.10 : 0;
    return { total, discount: total * discount, final: total * (1 - discount) };
  };

  // Admin Dashboard
  if (adminView) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-4 flex justify-between">
            <h1 className="text-2xl font-bold text-purple-600">GetVivah Admin</h1>
            <button onClick={() => setAdminView(false)} className="px-4 py-2 bg-gray-100 rounded-lg">Exit</button>
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="bg-white rounded-xl p-6">
              <DollarSign className="text-green-500 mb-2" size={32} />
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-3xl font-bold">₹21.5L</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <Users className="text-blue-500 mb-2" size={32} />
              <p className="text-sm text-gray-600">Active Vendors</p>
              <p className="text-3xl font-bold">892</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <Package className="text-purple-500 mb-2" size={32} />
              <p className="text-sm text-gray-600">Bundle Rate</p>
              <p className="text-3xl font-bold">32%</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <Clock className="text-orange-500 mb-2" size={32} />
              <p className="text-sm text-gray-600">Avg Response</p>
              <p className="text-3xl font-bold">34 min</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <Shield className="text-indigo-500 mb-2" size={32} />
              <p className="text-sm text-gray-600">In Escrow</p>
              <p className="text-3xl font-bold">₹18.2L</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Vendor Dashboard
  if (vendorDashboard) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-4 flex justify-between">
            <h1 className="text-2xl font-bold text-purple-600">Vendor Dashboard</h1>
            <button onClick={() => setVendorDashboard(false)} className="px-4 py-2 bg-gray-100 rounded-lg">Exit</button>
          </div>
        </div>
        <div className="container mx-auto p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6">
              <Eye className="text-blue-500 mb-2" size={28} />
              <p className="text-sm text-gray-600">Profile Views</p>
              <p className="text-3xl font-bold">1,247</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <MessageCircle className="text-green-500 mb-2" size={28} />
              <p className="text-sm text-gray-600">New Inquiries</p>
              <p className="text-3xl font-bold">23</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <DollarSign className="text-purple-500 mb-2" size={28} />
              <p className="text-sm text-gray-600">This Month</p>
              <p className="text-3xl font-bold">₹4.5L</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <Star className="text-yellow-500 mb-2" size={28} />
              <p className="text-sm text-gray-600">Rating</p>
              <p className="text-3xl font-bold">4.9</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Landing Page
  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-8">
          <div 
            onClick={(e) => e.detail === 3 && setShowAdminLogin(true)}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="text-pink-500" size={48} fill="currentColor" />
              <h1 className="text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                GetVivah
              </h1>
            </div>
            <p className="text-2xl text-gray-600">Your AI-Powered Wedding Matchmaker</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <button 
              onClick={() => setUserType('couple')} 
              className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart size={56} className="text-white" fill="currentColor" />
              </div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                Getting Married
              </h3>
              <p className="text-gray-600 text-lg">AI matches you with perfect vendors</p>
            </button>

            <button 
              onClick={() => setUserType('vendor')} 
              className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera size={56} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
                I'm a Vendor
              </h3>
              <p className="text-gray-600 text-lg">Get qualified leads instantly</p>
            </button>
          </div>
        </div>

        {showAdminLogin && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl p-8">
              <div className="text-center mb-6">
                <Shield className="text-purple-600 mx-auto mb-4" size={48} />
                <h2 className="text-3xl font-bold mb-2">Admin Access</h2>
              </div>
              <input 
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Admin Password"
                className="w-full px-5 py-4 border-2 rounded-xl mb-4"
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
              <button onClick={handleAdminLogin} className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold">
                Login
              </button>
              <button onClick={() => { setShowAdminLogin(false); setAdminPassword(''); }} className="w-full mt-3 py-3 text-gray-600">
                Cancel
              </button>
              <p className="text-xs text-gray-400 text-center mt-6">Demo password: getvivah2025</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Vendor Registration
  if (userType === 'vendor') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <button onClick={resetMatch} className="mb-6">← Back</button>
          
          <div className="bg-white rounded-3xl p-10 shadow-2xl">
            <h2 className="text-4xl font-bold mb-8 text-center">Join GetVivah</h2>

            <div className="space-y-4">
              <input type="text" placeholder="Business Name" className="w-full px-5 py-4 border-2 rounded-xl" />
              <select className="w-full px-5 py-4 border-2 rounded-xl">
                <option>Select service</option>
                {services.map(s => <option key={s.id}>{s.name}</option>)}
              </select>
              <select className="w-full px-5 py-4 border-2 rounded-xl">
                <option>Select city</option>
                {cities.map(c => <option key={c}>{c}</option>)}
              </select>
              <input type="number" placeholder="Years of Experience" className="w-full px-5 py-4 border-2 rounded-xl" />
              <input type="number" placeholder="Starting Price (₹)" className="w-full px-5 py-4 border-2 rounded-xl" />
              <input type="tel" placeholder="Contact Number" className="w-full px-5 py-4 border-2 rounded-xl" />
              <input type="email" placeholder="Email" className="w-full px-5 py-4 border-2 rounded-xl" />

              <button 
                onClick={() => setVendorDashboard(true)}
                className="w-full bg-purple-600 text-white py-5 rounded-xl font-bold text-lg"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Page
  if (showResults) {
    const filteredVendors = mockVendors.filter(v => 
      v.service === matchData.service || matchData.service === undefined
    );

    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="bg-white border-b shadow-sm sticky top-0 z-40">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button onClick={resetMatch}>
                  <Home size={20} />
                </button>
                <h2 className="text-xl font-bold">Your Matches</h2>
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setShowChecklist(true)}
                  className="px-4 py-2 bg-purple-100 text-purple-600 rounded-lg font-semibold"
                >
                  <CheckCircle2 size={18} className="inline mr-2" />
                  Checklist
                </button>
                <button 
                  onClick={() => setShowBudgetTracker(true)}
                  className="px-4 py-2 bg-green-100 text-green-600 rounded-lg font-semibold"
                >
                  <DollarSign size={18} className="inline mr-2" />
                  Budget
                </button>
                {bundleItems.length > 0 && (
                  <button 
                    onClick={() => setShowBundleBuilder(true)}
                    className="px-4 py-2 bg-orange-100 text-orange-600 rounded-lg font-semibold relative"
                  >
                    <Package size={18} className="inline mr-2" />
                    Bundle ({bundleItems.length})
                  </button>
                )}
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 hover:bg-gray-100 rounded-full relative"
                >
                  <Bell size={22} />
                  {notifications.filter(n => n.unread).length > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {notifications.filter(n => n.unread).length}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-2">
                {filteredVendors.length} Perfect Matches Found
              </h3>
              <div className="flex gap-4 text-sm text-gray-600">
                <span><Calendar size={16} className="inline" /> {matchData.date}</span>
                <span><MapPin size={16} className="inline" /> {matchData.city}</span>
              </div>
            </div>

            <div className="space-y-6">
              {filteredVendors.map(vendor => (
                <div key={vendor.id} className="bg-white rounded-3xl shadow-xl p-6">
                  <div className="flex gap-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold">
                      {vendor.name.charAt(0)}
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold">{vendor.name}</h3>
                          <div className="flex items-center gap-3 text-sm mt-1">
                            <div className="flex items-center gap-1">
                              <Star size={18} className="text-yellow-500" fill="currentColor" />
                              <span className="font-bold">{vendor.rating}</span>
                              <span className="text-gray-500">({vendor.reviews})</span>
                            </div>
                            <span>{vendor.city}</span>
                          </div>
                        </div>
                        <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                          {vendor.matchScore}% Match
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{vendor.description}</p>

                      <div className="flex gap-2 mb-4">
                        {vendor.specialties.map((spec, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm font-semibold">
                            {spec}
                          </span>
                        ))}
                      </div>

                      <p className="text-3xl font-bold text-purple-600 mb-4">
                        ₹{(vendor.basePrice / 100000).toFixed(1)}L
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <button 
                          onClick={() => openCalculator(vendor)}
                          className="px-4 py-3 bg-green-500 text-white rounded-xl font-bold"
                        >
                          <Calculator size={18} className="inline mr-2" />
                          Price
                        </button>
                        <button 
                          onClick={() => setShowVideoPortfolio(true)}
                          className="px-4 py-3 bg-purple-500 text-white rounded-xl font-bold"
                        >
                          <Video size={18} className="inline mr-2" />
                          Video
                        </button>
                        <button 
                          onClick={() => openChat(vendor)}
                          className="px-4 py-3 bg-blue-500 text-white rounded-xl font-bold"
                        >
                          <MessageCircle size={18} className="inline mr-2" />
                          Chat
                        </button>
                        <button 
                          onClick={() => {
                            setSelectedVendor(vendor);
                            setShowBooking(true);
                          }}
                          className="px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold"
                        >
                          Book Now
                        </button>
                      </div>

                      <div className="flex gap-3 mt-3">
                        <button 
                          onClick={() => addToBundle(vendor)}
                          className="flex-1 px-4 py-2 bg-orange-50 text-orange-600 rounded-lg font-semibold"
                        >
                          Add to Bundle
                        </button>
                        <button 
                          onClick={() => addToCompare(vendor)}
                          className="flex-1 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold"
                        >
                          Compare
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Modal */}
        {showChat && chatVendor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl flex flex-col max-h-[90vh]">
              <div className="p-6 border-b flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                    {chatVendor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{chatVendor.name}</h3>
                    <p className="text-sm text-green-600">Online</p>
                  </div>
                </div>
                <button onClick={() => setShowChat(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {chatMessages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[70%] ${
                      msg.sender === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    } rounded-2xl px-4 py-3`}>
                      <p>{msg.text}</p>
                      <p className="text-xs mt-1">{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t">
                <div className="flex gap-3">
                  <input 
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message..."
                    className="flex-grow px-4 py-3 border-2 rounded-xl"
                  />
                  <button 
                    onClick={sendMessage}
                    className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Price Calculator Modal */}
        {showCalculator && calculatorVendor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between">
                <h2 className="text-2xl font-bold">Price Calculator</h2>
                <button onClick={() => setShowCalculator(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {calculatorVendor.packages.map((pkg, i) => (
                    <div key={i} className="border-2 rounded-2xl p-6">
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <p className="text-3xl font-bold text-purple-600 mb-4">
                        ₹{(pkg.price / 100000).toFixed(1)}L
                      </p>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full mt-4 px-4 py-3 bg-purple-600 text-white rounded-xl font-bold">
                        Select
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bundle Builder Modal */}
        {showBundleBuilder && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between">
                <h2 className="text-2xl font-bold">Your Bundle Package</h2>
                <button onClick={() => setShowBundleBuilder(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6">
                {bundleItems.length > 0 ? (
                  <>
                    <div className="space-y-4 mb-6">
                      {bundleItems.map(item => (
                        <div key={item.id} className="flex items-center justify-between border rounded-xl p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                              {item.name.charAt(0)}
                            </div>
                            <div>
                              <h3 className="font-bold">{item.name}</h3>
                              <p className="text-sm text-gray-600">{services.find(s => s.id === item.service)?.name}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <p className="font-bold">₹{(item.basePrice / 100000).toFixed(1)}L</p>
                            <button 
                              onClick={() => setBundleItems(bundleItems.filter(i => i.id !== item.id))}
                              className="p-2 text-red-500"
                            >
                              <X size={20} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                      <div className="flex justify-between mb-4">
                        <span className="font-semibold">Subtotal:</span>
                        <span className="text-2xl font-bold">₹{(calculateBundleDiscount().total / 100000).toFixed(2)}L</span>
                      </div>
                      <div className="flex justify-between mb-4 text-green-600">
                        <span className="font-semibold">Discount:</span>
                        <span className="text-2xl font-bold">-₹{(calculateBundleDiscount().discount / 100000).toFixed(2)}L</span>
                      </div>
                      <div className="border-t-2 border-green-300 pt-4 flex justify-between">
                        <span className="text-xl font-bold">Total:</span>
                        <span className="text-3xl font-bold text-green-600">₹{(calculateBundleDiscount().final / 100000).toFixed(2)}L</span>
                      </div>
                    </div>

                    <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-lg">
                      Proceed to Book Bundle
                    </button>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <Package size={64} className="text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No vendors in your bundle yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Checklist Modal */}
        {showChecklist && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between">
                <h2 className="text-2xl font-bold">Wedding Planning Checklist</h2>
                <button onClick={() => setShowChecklist(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                {weddingChecklist.map((category, i) => (
                  <div key={i} className="border rounded-2xl p-4">
                    <h3 className="font-bold text-lg mb-4">{category.category}</h3>
                    <div className="space-y-2">
                      {category.tasks.map(task => (
                        <label key={task.id} className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                          <input 
                            type="checkbox" 
                            checked={task.completed}
                            className="w-5 h-5"
                          />
                          <span className={task.completed ? 'line-through text-gray-400' : ''}>
                            {task.task}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Budget Tracker Modal */}
        {showBudgetTracker && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-5xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between">
                <h2 className="text-2xl font-bold">Budget Tracker</h2>
                <button onClick={() => setShowBudgetTracker(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                {budgetCategories.map((cat, i) => {
                  const percentage = cat.allocated > 0 ? (cat.spent / cat.allocated) * 100 : 0;
                  return (
                    <div key={i} className="border rounded-xl p-4">
                      <div className="flex justify-between mb-3">
                        <h3 className="font-bold">{cat.category}</h3>
                        <p className="text-sm">₹{(cat.spent / 1000).toFixed(0)}K / ₹{(cat.allocated / 1000).toFixed(0)}K</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${
                            percentage > 100 ? 'bg-red-500' : 
                            percentage > 80 ? 'bg-yellow-500' : 
                            'bg-green-500'
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Booking Modal */}
        {showBooking && selectedVendor && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b flex justify-between">
                <h2 className="text-2xl font-bold">Book {selectedVendor.name}</h2>
                <button onClick={() => setShowBooking(false)}>
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6 space-y-4">
                <select className="w-full px-4 py-3 border-2 rounded-xl">
                  {selectedVendor.packages.map((pkg, i) => (
                    <option key={i}>{pkg.name} - ₹{(pkg.price / 100000).toFixed(1)}L</option>
                  ))}
                </select>

                <input type="date" className="w-full px-4 py-3 border-2 rounded-xl" />
                <input type="number" placeholder="Number of guests" className="w-full px-4 py-3 border-2 rounded-xl" />
                <textarea rows="4" placeholder="Special requirements..." className="w-full px-4 py-3 border-2 rounded-xl" />

                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                  <h4 className="font-bold mb-2">Payment Protection</h4>
                  <p className="text-sm text-gray-700">Your payment is held in secure escrow until service completion.</p>
                </div>

                <button className="w-full px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-lg">
                  Pay Token & Confirm Booking
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notifications */}
        {showNotifications && (
          <div className="fixed top-16 right-4 w-96 bg-white rounded-2xl shadow-2xl border-2 z-50">
            <div className="p-4 border-b">
              <h3 className="font-bold">Notifications</h3>
            </div>
            <div className="divide-y max-h-96 overflow-y-auto">
              {notifications.map(notif => (
                <div key={notif.id} className={`p-4 ${notif.unread ? 'bg-purple-50' : ''}`}>
                  <p className="font-semibold mb-1">{notif.message}</p>
                  <p className="text-xs text-gray-500">{notif.time}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Question Flow
  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <button onClick={resetMatch} className="mb-6">← Back</button>
        
        <div className="mb-8">
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center mt-3 font-semibold">Question {step + 1} of {questions.length}</p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            {currentQuestion.question}
          </h2>

          {currentQuestion.type === 'service' && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map(s => {
                const Icon = s.icon;
                return (
                  <button 
                    key={s.id} 
                    onClick={() => handleAnswer(s.id)} 
                    className="p-5 border-2 rounded-2xl hover:border-pink-500 transition-all"
                  >
                    <Icon size={32} className="mx-auto mb-3 text-purple-600" />
                    <p className="font-semibold text-sm">{s.name}</p>
                  </button>
                );
              })}
            </div>
          )}

          {currentQuestion.type === 'style' && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {weddingStyles.map(style => (
                <button 
                  key={style.id} 
                  onClick={() => handleAnswer(style.id)} 
                  className="p-6 border-2 rounded-2xl hover:border-pink-500 text-center"
                >
                  <div className="text-4xl mb-3">{style.icon}</div>
                  <p className="font-semibold">{style.label}</p>
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'budget' && (
            <div className="space-y-4">
              {budgetRanges.map(b => (
                <button 
                  key={b.id} 
                  onClick={() => handleAnswer(b.value)} 
                  className="w-full p-5 border-2 rounded-2xl hover:border-pink-500 text-left font-bold text-lg"
                >
                  {b.label}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'guests' && (
            <div className="space-y-4">
              {[
                { label: '50-150 guests', value: '50-150' },
                { label: '150-300 guests', value: '150-300' },
                { label: '300-500 guests', value: '300-500' },
                { label: '500+ guests', value: '500+' }
              ].map(option => (
                <button 
                  key={option.value} 
                  onClick={() => handleAnswer(option.value)} 
                  className="w-full p-5 border-2 rounded-2xl hover:border-pink-500 text-left font-bold text-lg"
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'date' && (
            <input 
              type="date" 
              className="w-full p-5 border-2 rounded-2xl text-lg" 
              onChange={(e) => handleAnswer(e.target.value)} 
            />
          )}

          {currentQuestion.type === 'city' && (
            <div className="grid grid-cols-2 gap-4">
              {cities.map(c => (
                <button 
                  key={c} 
                  onClick={() => handleAnswer(c)} 
                  className="p-5 border-2 rounded-2xl hover:border-pink-500 font-bold text-lg"
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetVivahPlatform;
