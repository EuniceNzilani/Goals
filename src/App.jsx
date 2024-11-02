import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Calendar, CheckCircle, Target, Brain, Heart, 
  DollarSign, Users, Book, Palette, Sun, Moon,
  Award, TrendingUp, Star, ChevronRight, Plus,
  ArrowUpRight, Sparkles
} from 'lucide-react';
import './App.css';

const GoalTracker = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [animateNumber, setAnimateNumber] = useState(false);

  const [goals, setGoals] = useState({
    career: { 
      progress: 45, 
      streak: 5,
      lastUpdated: '2h ago',
      tasks: ['Complete project proposal', 'Review quarterly goals'],
      color: 'blue'
    },
    health: { 
      progress: 60, 
      streak: 8,
      lastUpdated: '5h ago',
      tasks: ['Morning workout', '8 glasses of water'],
      color: 'green'
    },
    mental: { 
      progress: 30, 
      streak: 3,
      lastUpdated: '1d ago',
      tasks: ['Meditation session', 'Journal entry'],
      color: 'purple'
    },
    spiritual: { 
      progress: 40, 
      streak: 4,
      lastUpdated: '12h ago',
      tasks: ['Morning meditation', 'Gratitude practice'],
      color: 'yellow'
    },
    financial: { 
      progress: 70, 
      streak: 6,
      lastUpdated: '3d ago',
      tasks: ['Budget review', 'Investment check'],
      color: 'emerald'
    },
    relationships: { 
      progress: 55, 
      streak: 7,
      lastUpdated: '6h ago',
      tasks: ['Family dinner', 'Call friend'],
      color: 'pink'
    },
    personal: { 
      progress: 50, 
      streak: 5,
      lastUpdated: '1d ago',
      tasks: ['Read book chapter', 'Learn new skill'],
      color: 'orange'
    },
    creative: { 
      progress: 35, 
      streak: 4,
      lastUpdated: '2d ago',
      tasks: ['Art practice', 'Writing session'],
      color: 'violet'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateNumber(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const GoalCard = ({ title, icon, progress, streak, color, lastUpdated, tasks, onClick }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className={`goal-card ${color}`}
      onClick={onClick}
    >
      <Card className="card-content">
        <CardHeader className="card-header">
          <CardTitle className="card-title">
            <span className="icon">{icon}</span>
            {title}
          </CardTitle>
          <motion.div 
            animate={{ scale: animateNumber ? 1.1 : 1 }}
            className="streak-counter"
          >
            <Star className="streak-icon" />
            <span className="streak-text">{streak} day streak</span>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="card-body">
            <div className="progress-section">
              <motion.div 
                className="progress-number"
                animate={{ scale: animateNumber ? 1.1 : 1 }}
              >
                {progress}%
              </motion.div>
              <span className="last-updated">{lastUpdated}</span>
            </div>
            <Progress value={progress} className="progress-bar" />
            <div className="tasks-list">
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  className="task-item"
                  whileHover={{ x: 5 }}
                >
                  <CheckCircle className="task-icon" />
                  {task}
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const achievementData = [
    { title: 'Consistency Champion', icon: <Award />, description: '30 days streak' },
    { title: 'Goal Crusher', icon: <Target />, description: 'Completed 5 goals' },
    { title: 'Balance Master', icon: <Sparkles />, description: 'All areas above 50%' }
  ];

  return (
    <div className="goal-tracker">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="header"
        >
          <div className="header-content">
            <h1 className="main-title">Goal Tracker</h1>
            <p className="subtitle">Track your progress, achieve your dreams</p>
          </div>
          <Button 
            onClick={() => setShowAddGoal(true)}
            className="add-goal-button"
          >
            <Plus className="button-icon" />
            Add New Goal
          </Button>
        </motion.div>

        <nav className="navigation">
          {['dashboard', 'morning', 'evening', 'analytics', 'accountability'].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-button ${activeTab === tab ? 'active' : ''}`}
            >
              <span className="nav-icon">
                {tab === 'dashboard' && <TrendingUp />}
                {tab === 'morning' && <Sun />}
                {tab === 'evening' && <Moon />}
                {tab === 'analytics' && <Target />}
                {tab === 'accountability' && <Users />}
              </span>
              {tab}
            </Button>
          ))}
        </nav>

        <div className="goals-grid">
          {Object.entries(goals).map(([key, goal]) => (
            <GoalCard
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              icon={
                key === 'career' ? <Target /> :
                key === 'health' ? <Heart /> :
                key === 'mental' ? <Brain /> :
                key === 'spiritual' ? <Sun /> :
                key === 'financial' ? <DollarSign /> :
                key === 'relationships' ? <Users /> :
                key === 'personal' ? <Book /> :
                <Palette />
              }
              {...goal}
              onClick={() => setSelectedGoal(key)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="achievements-section"
        >
          <Card className="achievements-card">
            <CardHeader>
              <CardTitle className="achievements-title">
                <Award className="achievements-icon" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="achievements-grid">
                {achievementData.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="achievement-card"
                  >
                    <div className="achievement-content">
                      <div className="achievement-icon-wrapper">
                        {achievement.icon}
                      </div>
                      <div className="achievement-details">
                        <div className="achievement-title">{achievement.title}</div>
                        <div className="achievement-description">{achievement.description}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default GoalTracker;