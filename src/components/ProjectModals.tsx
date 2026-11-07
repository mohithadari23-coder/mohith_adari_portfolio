import React, { useState } from 'react';
import { X, ExternalLink, Terminal, CheckCircle, AlertCircle, Play, Sparkles, Compass, Target, ArrowRight, Workflow, Mail, Cpu, Clock, Check } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-black border border-zinc-800 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 text-[#BDBDBD] max-h-[92vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button with accessible touch target */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          aria-label="Close project preview"
          className="absolute top-3 right-3 sm:top-5 sm:right-5 p-2.5 rounded-xl text-[#BDBDBD] hover:text-[#FFFFFF] hover:bg-zinc-900 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-[#FFFFFF]">
            {project.type === 'skillpath-ai' && <Sparkles className="w-6 h-6" />}
            {project.type === 'n8n-ai-news' && <Workflow className="w-6 h-6" />}
            {project.type === 'vote-eligibility-python' && <Terminal className="w-6 h-6" />}
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#BDBDBD]">Live Project Preview</span>
            <h2 id="modal-title" className="text-2xl font-bold text-[#FFFFFF] tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        <p className="text-[#BDBDBD] text-sm md:text-base mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pill */}
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-1">Built With:</span>
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Interactive Demo Component */}
        <div className="border border-zinc-800 rounded-xl p-5 bg-black mb-6">
          {project.type === 'skillpath-ai' && <SkillPathAiDemo externalUrl={project.externalUrl} />}
          {project.type === 'n8n-ai-news' && <N8nAiNewsDemo />}
          {project.type === 'vote-eligibility-python' && <PythonVoteEligibilityDemo />}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-zinc-800">
          <div className="text-xs text-[#BDBDBD]">
            Student project by <span className="text-[#FFFFFF] font-medium">Mohith Adari</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm min-h-[40px]"
              >
                <span>Launch App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href="https://github.com/mohithadari23-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors min-h-[40px]"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-white transition-colors min-h-[40px]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. Vote Eligibility with Python Demo
const PythonVoteEligibilityDemo: React.FC = () => {
  const [ageInput, setAgeInput] = useState<string>('');
  const [evaluatedResult, setEvaluatedResult] = useState<{
    age: number;
    eligible: boolean;
    status: string;
    message: string;
    time: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'interactive' | 'python-code'>('interactive');
  const [history, setHistory] = useState<Array<{ age: number; eligible: boolean }>>([
    { age: 21, eligible: true },
    { age: 16, eligible: false },
  ]);

  const handleEvaluate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setErrorMessage('');

    if (ageInput.trim() === '') {
      setErrorMessage('Error: Please enter an age before submitting.');
      return;
    }

    const parsedAge = Number(ageInput);

    if (isNaN(parsedAge) || !Number.isInteger(parsedAge)) {
      setErrorMessage('ValueError: Invalid literal for int(). Age must be a whole number.');
      return;
    }

    if (parsedAge < 0 || parsedAge > 125) {
      setErrorMessage('ValueError: Age must be a realistic human age between 0 and 125.');
      return;
    }

    const CONSTITUTIONAL_VOTING_AGE = 18;
    const isEligible = parsedAge >= CONSTITUTIONAL_VOTING_AGE;
    const timeStr = new Date().toLocaleTimeString();

    const result = {
      age: parsedAge,
      eligible: isEligible,
      status: isEligible ? 'APPROVED' : 'UNDERAGE',
      message: isEligible
        ? `At ${parsedAge} years old, candidate meets legal voting criteria (Age ≥ 18) and is eligible to vote.`
        : `At ${parsedAge} years old, candidate is not eligible to vote yet. Requires ${CONSTITUTIONAL_VOTING_AGE - parsedAge} more year(s).`,
      time: timeStr,
    };

    setEvaluatedResult(result);
    setHistory((prev) => [{ age: parsedAge, eligible: isEligible }, ...prev.slice(0, 4)]);
  };

  const pythonScript = `"""
Vote Eligibility Checker in Python 3
Author: Mohith Adari
"""

def check_voting_eligibility(user_age: int) -> dict:
    CONSTITUTIONAL_VOTING_AGE = 18
    
    if user_age < 0 or user_age > 125:
        raise ValueError("Invalid age value entered. Must be between 0 and 125.")
        
    if user_age >= CONSTITUTIONAL_VOTING_AGE:
        return {
            "eligible": True,
            "status": "APPROVED",
            "message": f"At {user_age} years old, candidate meets legal voting criteria."
        }
    else:
        remaining_years = CONSTITUTIONAL_VOTING_AGE - user_age
        return {
            "eligible": False,
            "status": "UNDERAGE",
            "message": f"Candidate requires {remaining_years} more year(s) to become eligible."
        }

if __name__ == "__main__":
    try:
        user_input = int(input("Enter citizen age: "))
        result = check_voting_eligibility(user_input)
        print(f"Status: {result['status']} | {result['message']}")
    except ValueError as err:
        print(f"Validation Error: {err}")`;

  return (
    <div className="space-y-4">
      {/* Switcher */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <Terminal className="w-4 h-4 text-white" /> Python Validation Engine
        </h4>
        <div className="flex items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-zinc-800">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
              activeTab === 'interactive' ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Interactive CLI
          </button>
          <button
            onClick={() => setActiveTab('python-code')}
            className={`px-2.5 py-1 text-xs rounded-md font-mono transition-colors ${
              activeTab === 'python-code' ? 'bg-white text-black font-semibold' : 'text-zinc-400 hover:text-white'
            }`}
          >
            view code.py
          </button>
        </div>
      </div>

      {activeTab === 'interactive' ? (
        <div className="space-y-3 font-mono">
          {/* User Input Form */}
          <form onSubmit={handleEvaluate} className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <label htmlFor="vote-age-input" className="text-xs text-zinc-300 font-medium font-sans">
                Enter Citizen Age (Number):
              </label>
              <span className="text-[11px] text-zinc-500 font-mono">Press [Enter] to submit</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-xs">age =</span>
                <input
                  id="vote-age-input"
                  type="number"
                  min="0"
                  max="125"
                  step="1"
                  placeholder="e.g. 19"
                  value={ageInput}
                  onChange={(e) => {
                    setAgeInput(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full bg-black border border-zinc-700 focus:border-white rounded-lg pl-16 pr-3 py-2 text-sm text-white font-mono placeholder:text-zinc-600 focus:outline-none transition-colors"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                id="submit-vote-age-btn"
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 active:bg-zinc-300 transition-colors shrink-0 shadow-sm font-sans"
              >
                Check Eligibility
              </button>
            </div>

            {/* Quick Presets */}
            <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400 font-sans">
              <span>Quick tests:</span>
              {[17, 18, 22, 65].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => {
                    setAgeInput(String(val));
                    setErrorMessage('');
                  }}
                  className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 transition-colors font-mono"
                >
                  {val}
                </button>
              ))}
            </div>

            {errorMessage && (
              <div className="text-[11px] text-zinc-300 bg-zinc-950 p-2.5 rounded-lg border border-zinc-700 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </form>

          {/* Terminal Output */}
          <div className="bg-black p-4 rounded-xl border border-zinc-800 space-y-2.5 text-xs">
            <div className="flex items-center justify-between text-zinc-500 text-[11px] border-b border-zinc-800/80 pb-1.5">
              <span>$ python3 vote_checker.py</span>
              <span>{evaluatedResult ? evaluatedResult.time : 'Awaiting input'}</span>
            </div>

            {evaluatedResult ? (
              <div className="space-y-2 pt-1">
                <div className="text-zinc-400 text-[11px]">
                  &gt; input(&quot;Enter citizen age: &quot;) : <span className="text-white font-bold">{evaluatedResult.age}</span>
                </div>
                <div className="flex items-start gap-2.5 pt-1">
                  {evaluatedResult.eligible ? (
                    <CheckCircle className="w-4 h-4 text-white shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold text-white tracking-wide">
                      {evaluatedResult.eligible ? 'STATUS: ELIGIBLE [APPROVED]' : 'STATUS: NOT ELIGIBLE [UNDERAGE]'}
                    </div>
                    <p className="text-zinc-300 text-[12px] mt-1 font-sans leading-relaxed">
                      {evaluatedResult.message}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-3 text-center text-zinc-500 text-[11px] font-sans">
                Type an age above and press <kbd className="px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono">Enter</kbd> or click <strong>Check Eligibility</strong> to see the Python script execution output.
              </div>
            )}
          </div>

          {/* Recent checks */}
          {history.length > 0 && (
            <div className="flex items-center gap-2 pt-1 text-[11px] text-zinc-500 font-sans">
              <span>Recent executions:</span>
              {history.map((h, i) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 rounded font-mono border ${
                    h.eligible ? 'border-zinc-700 bg-zinc-900 text-white' : 'border-zinc-800 bg-zinc-950 text-zinc-500'
                  }`}
                >
                  Age {h.age}: {h.eligible ? 'OK' : 'NO'}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-xl border border-zinc-800 bg-black p-3.5 overflow-x-auto text-[11px] font-mono text-zinc-300 leading-relaxed max-h-64 overflow-y-auto">
          <pre>{pythonScript}</pre>
        </div>
      )}
    </div>
  );
};

// SkillPath AI Interactive Demo Component
interface SkillPathAiDemoProps {
  externalUrl?: string;
}

const SkillPathAiDemo: React.FC<SkillPathAiDemoProps> = ({ externalUrl = 'https://skillpathai18.lovable.app' }) => {
  const [selectedGoal, setSelectedGoal] = useState<'ai-engineer' | 'frontend-dev' | 'data-science'>('ai-engineer');

  const roadmapData = {
    'ai-engineer': {
      title: 'AI & Machine Learning Pathway',
      duration: '6 Months Curriculum',
      modules: [
        { phase: 'Phase 1', title: 'Python Fundamentals & Data Structures', status: 'Core Base' },
        { phase: 'Phase 2', title: 'Mathematics: Linear Algebra & Probability', status: 'Theory' },
        { phase: 'Phase 3', title: 'LLMs, Prompt Engineering & Embeddings', status: 'Applied' },
        { phase: 'Phase 4', title: 'Building Autonomous Agents & Fine-Tuning', status: 'Advanced' },
      ],
      skillsGained: ['Python', 'PyTorch', 'Prompt Design', 'RAG Architectures', 'Vector DBs'],
    },
    'frontend-dev': {
      title: 'Modern Frontend Engineering',
      duration: '4 Months Curriculum',
      modules: [
        { phase: 'Phase 1', title: 'HTML5, Modern CSS & Responsive UI', status: 'Core Base' },
        { phase: 'Phase 2', title: 'JavaScript ES6+ & TypeScript Essentials', status: 'Logic' },
        { phase: 'Phase 3', title: 'React 19, Component Architecture & State', status: 'Framework' },
        { phase: 'Phase 4', title: 'Performance, Tailwind & Production Build', status: 'Deployment' },
      ],
      skillsGained: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Web APIs'],
    },
    'data-science': {
      title: 'Data Science & Analytics',
      duration: '5 Months Curriculum',
      modules: [
        { phase: 'Phase 1', title: 'Python for Data Analysis (Pandas, NumPy)', status: 'Core Base' },
        { phase: 'Phase 2', title: 'Statistical Modeling & Data Visualization', status: 'Analytics' },
        { phase: 'Phase 3', title: 'SQL & Database Pipeline Management', status: 'Data Engineering' },
        { phase: 'Phase 4', title: 'Predictive Modeling & Scikit-Learn', status: 'Machine Learning' },
      ],
      skillsGained: ['SQL', 'Pandas', 'Data Viz', 'Predictive Modeling', 'Jupyter'],
    },
  };

  const current = roadmapData[selectedGoal];

  return (
    <div className="space-y-4">
      {/* Top Banner & Goal Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-white" /> AI Learning Path Generator
          </h4>
          <span className="text-xs text-zinc-400">Select a target career objective to preview the generated curriculum</span>
        </div>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shrink-0"
        >
          <span>Open Full Web App</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Goal Tabs */}
      <div className="flex flex-wrap gap-2">
        {(
          [
            { id: 'ai-engineer', label: 'AI Engineer' },
            { id: 'frontend-dev', label: 'Frontend Engineer' },
            { id: 'data-science', label: 'Data Scientist' },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedGoal(tab.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              selectedGoal === tab.id
                ? 'bg-white text-black font-semibold'
                : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Generated Roadmap Preview */}
      <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-white font-bold">{current.title}</span>
          <span className="text-zinc-400">{current.duration}</span>
        </div>

        <div className="space-y-2 pt-1">
          {current.modules.map((m, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 rounded-lg bg-black border border-zinc-800/80 text-xs"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-zinc-500 font-bold">{m.phase}</span>
                <span className="text-zinc-200 font-medium">{m.title}</span>
              </div>
              <span className="font-mono text-[10px] bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded text-zinc-300">
                {m.status}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-mono text-zinc-400 mr-1">Skills Targeted:</span>
          {current.skillsGained.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-800 border border-zinc-700 text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Direct Link Callout */}
      <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3 text-xs">
        <span className="text-zinc-300">
          Deployed and live on Lovable:{' '}
          <span className="font-mono text-white font-semibold">skillpathai18.lovable.app</span>
        </span>
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-white hover:underline"
        >
          Visit Site <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

// 3. n8n AI News Summarizer Automation Demo
const N8nAiNewsDemo: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(4);
  const [emailSent, setEmailSent] = useState(true);

  const runTestTrigger = () => {
    setIsRunning(true);
    setEmailSent(false);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 700);
    setTimeout(() => setActiveStep(3), 1400);
    setTimeout(() => {
      setActiveStep(4);
      setIsRunning(false);
      setEmailSent(true);
    }, 2100);
  };

  const workflowSteps = [
    {
      num: 1,
      title: 'Schedule Trigger / Cron',
      desc: 'Runs daily at 08:00 AM UTC or on webhook trigger',
      node: 'n8n-cron-node',
    },
    {
      num: 2,
      title: 'RSS & Web Scraper Node',
      desc: 'Fetches top articles from arXiv, TechCrunch AI & HackerNews',
      node: 'http-request-node',
    },
    {
      num: 3,
      title: 'AI LLM Summarizer Agent',
      desc: 'Generates structured bullet points, key takeaways & sentiment',
      node: 'openAI/gemini-node',
    },
    {
      num: 4,
      title: 'Email Dispatch (SMTP / SendGrid)',
      desc: 'Formats HTML email template and sends daily digest to inbox',
      node: 'email-send-node',
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header & Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
        <div>
          <h4 className="text-sm font-semibold text-white flex items-center gap-2">
            <Workflow className="w-4 h-4 text-white" /> n8n Automation Engine Blueprint
          </h4>
          <span className="text-xs text-zinc-400">Autonomous multi-node pipeline connecting news feeds to AI & Email</span>
        </div>
        <button
          onClick={runTestTrigger}
          disabled={isRunning}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-black hover:bg-zinc-200 disabled:opacity-50 transition-colors shrink-0"
        >
          <Play className="w-3.5 h-3.5 text-black" />
          <span>{isRunning ? 'Executing Pipeline...' : 'Test Run Workflow'}</span>
        </button>
      </div>

      {/* Visual Pipeline Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {workflowSteps.map((step) => {
          const isCurrent = isRunning && activeStep === step.num;
          const isDone = !isRunning || activeStep >= step.num;

          return (
            <div
              key={step.num}
              className={`p-3 rounded-xl border transition-all ${
                isCurrent
                  ? 'bg-zinc-900 border-white shadow-md'
                  : isDone
                  ? 'bg-zinc-950 border-zinc-800'
                  : 'bg-black border-zinc-900 opacity-60'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300">
                  Node 0{step.num}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                  {isCurrent ? (
                    <Clock className="w-3 h-3 text-white animate-spin" />
                  ) : (
                    <Check className="w-3 h-3 text-white" />
                  )}
                  {isCurrent ? 'Processing...' : 'Active'}
                </span>
              </div>
              <div className="text-xs font-bold text-white mb-0.5">{step.title}</div>
              <p className="text-[11px] text-zinc-400 leading-snug">{step.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Output Email Preview */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 space-y-2.5">
        <div className="flex items-center justify-between text-xs border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-1.5 text-zinc-300 font-mono">
            <Mail className="w-3.5 h-3.5 text-white" />
            <span className="font-semibold text-white">Generated Email Digest Output</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">Delivered via SMTP</span>
        </div>

        <div className="bg-black p-3.5 rounded-lg border border-zinc-800/80 font-sans text-xs space-y-2">
          <div className="text-zinc-400 text-[11px]">
            <strong className="text-white">Subject:</strong> ⚡ Daily AI Briefing: Top 3 Breakthroughs Today
          </div>
          <div className="text-zinc-300 leading-relaxed space-y-1.5 pt-1 text-[11px]">
            <p>
              • <strong className="text-white">Reasoning LLM Efficiency:</strong> New distillation benchmarks reduce inference memory by 38% with zero regression on logic evaluations.
            </p>
            <p>
              • <strong className="text-white">Open Source Multimodal Models:</strong> Next-gen vision-language architectures surpass legacy weights in code generation benchmarks.
            </p>
            <p>
              • <strong className="text-white">Enterprise Agent Pipelines:</strong> n8n and orchestrators see 240% surge in production automated RAG integrations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


