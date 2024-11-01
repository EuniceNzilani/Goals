import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Calendar,
  CheckCircle,
  Target,
  Brain,
  Heart,
  DollarSign,
  Users,
  Book,
  Palette,
  Sun,
  Moon,
  Award,
  TrendingUp
} from 'lucide-react';

const GoalTracker = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [goals, setGoals] = useState({
    career: { progress: 45, streak: 5 },
    health: { progress: 60, streak: 8 },
    mental: { progress: 30, streak: 3 },
    spiritual: { progress: 40, streak: 4 },
    financial: { progress: 70, streak: 6 },
    relationships: { progress: 55, streak: 7 },
    personal: { progress: 50, streak: 5 },
    creative: { progress: 35, streak: 4 }
  });

  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#6366f1"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6366f1",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    }
  };

  const GoalCard = ({ title, icon, progress, streak }) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full"
    >
      <Card className="h-full bg-white/10 backdrop-blur-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            {icon}
            {title}
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            {streak} day streak
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{progress}%</div>
          <Progress value={progress} className="mt-2" />
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0"
      />
      
      <div className="relative container mx-auto p-6">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-8 bg-white/10 backdrop-blur-lg rounded-lg p-4">
          <h1 className="text-2xl font-bold">Goal Tracker</h1>
          <div className="flex gap-4">
            {['dashboard', 'morning', 'evening', 'analytics', 'accountability'].map((tab) => (
              <Button
                key={tab}
                variant={activeTab === tab ? "secondary" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className="capitalize"
              >
                {tab}
              </Button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <GoalCard
            title="Career Goals"
            icon={<Target className="w-4 h-4 mr-2" />}
            progress={goals.career.progress}
            streak={goals.career.streak}
          />
          <GoalCard
            title="Health & Fitness"
            icon={<Heart className="w-4 h-4 mr-2" />}
            progress={goals.health.progress}
            streak={goals.health.streak}
          />
          <GoalCard
            title="Mental Wellbeing"
            icon={<Brain className="w-4 h-4 mr-2" />}
            progress={goals.mental.progress}
            streak={goals.mental.streak}
          />
          <GoalCard
            title="Spiritual Growth"
            icon={<Sun className="w-4 h-4 mr-2" />}
            progress={goals.spiritual.progress}
            streak={goals.spiritual.streak}
          />
          <GoalCard
            title="Financial Goals"
            icon={<DollarSign className="w-4 h-4 mr-2" />}
            progress={goals.financial.progress}
            streak={goals.financial.streak}
          />
          <GoalCard
            title="Relationships"
            icon={<Users className="w-4 h-4 mr-2" />}
            progress={goals.relationships.progress}
            streak={goals.relationships.streak}
          />
          <GoalCard
            title="Personal Development"
            icon={<Book className="w-4 h-4 mr-2" />}
            progress={goals.personal.progress}
            streak={goals.personal.streak}
          />
          <GoalCard
            title="Creative Projects"
            icon={<Palette className="w-4 h-4 mr-2" />}
            progress={goals.creative.progress}
            streak={goals.creative.streak}
          />
        </div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8"
        >
          <Card className="bg-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Recent Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {['Consistency Champion', 'Goal Crusher', 'Balance Master'].map((achievement) => (
                  <div
                    key={achievement}
                    className="bg-white/20 rounded-lg p-3 flex items-center"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    {achievement}
                  </div>
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