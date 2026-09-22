import React, { useState } from 'react';
import { X, ExternalLink, Calculator, UserCheck, Sparkles, CheckCircle, AlertCircle, Play, RotateCcw } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0d1424] border border-blue-500/20 rounded-2xl shadow-2xl p-6 md:p-8 text-slate-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          aria-label="Close project preview"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
            {project.type === 'grade-calc' && <Calculator className="w-6 h-6" />}
            {project.type === 'voting-calc' && <UserCheck className="w-6 h-6" />}
            {project.type === 'genai-experiments' && <Sparkles className="w-6 h-6" />}
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">Live Project Preview</span>
            <h2 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack Pill */}
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Built With:</span>
          {project.technology.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono rounded-lg bg-blue-950/60 border border-blue-500/20 text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Interactive Demo Component */}
        <div className="border border-slate-800 rounded-xl p-5 bg-[#090d18] mb-6">
          {project.type === 'grade-calc' && <GradeCalculatorDemo />}
          {project.type === 'voting-calc' && <VotingCalculatorDemo />}
          {project.type === 'genai-experiments' && <GenAiExperimentsDemo />}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
          <div className="text-xs text-slate-400">
            Student project by <span className="text-slate-200 font-medium">A Mohith</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mohithadari23-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors"
            >
              View Mohith's GitHub
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Done Previewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 1. Grade Calculator Demo
const GradeCalculatorDemo: React.FC = () => {
  const [marks, setMarks] = useState({
    sub1: 88,
    sub2: 92,
    sub3: 84,
    sub4: 79,
  });

  const total = Number(marks.sub1) + Number(marks.sub2) + Number(marks.sub3) + Number(marks.sub4);
  const percentage = Math.round((total / 400) * 100);

  let grade = 'F';
  let gradeColor = 'text-red-400';
  let remarks = 'Needs Improvement';

  if (percentage >= 90) {
    grade = 'O (Outstanding)';
    gradeColor = 'text-emerald-400';
    remarks = 'Exceptional performance!';
  } else if (percentage >= 80) {
    grade = 'A+ (Excellent)';
    gradeColor = 'text-cyan-400';
    remarks = 'Very strong understanding!';
  } else if (percentage >= 70) {
    grade = 'A (Very Good)';
    gradeColor = 'text-blue-400';
    remarks = 'Good work, keep learning!';
  } else if (percentage >= 60) {
    grade = 'B (Good)';
    gradeColor = 'text-amber-400';
    remarks = 'Satisfactory performance.';
  } else if (percentage >= 40) {
    grade = 'C (Pass)';
    gradeColor = 'text-orange-400';
    remarks = 'Passed, focus on key concepts.';
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <Play className="w-4 h-4 text-cyan-400" /> Interactive Calculator Test
        </h4>
        <button
          onClick={() => setMarks({ sub1: 85, sub2: 85, sub3: 85, sub4: 85 })}
          className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1"
        >
          <RotateCcw className="w-3 h-3" /> Reset Sample
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { key: 'sub1', label: 'Maths' },
          { key: 'sub2', label: 'Programming' },
          { key: 'sub3', label: 'Web Dev' },
          { key: 'sub4', label: 'Electronics' },
        ].map((subject) => (
          <div key={subject.key} className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
            <label className="text-[11px] text-slate-400 block mb-1">{subject.label} (100)</label>
            <input
              type="number"
              min="0"
              max="100"
              value={marks[subject.key as keyof typeof marks]}
              onChange={(e) => {
                const val = Math.min(100, Math.max(0, Number(e.target.value) || 0));
                setMarks((prev) => ({ ...prev, [subject.key]: val }));
              }}
              className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-sm text-white font-mono focus:border-cyan-500 focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400">Total Marks: <span className="font-mono text-slate-200">{total} / 400</span></div>
          <div className="text-lg font-bold text-white mt-0.5">
            Percentage: <span className="text-cyan-400 font-mono">{percentage}%</span>
          </div>
          <div className="text-xs text-slate-400 mt-1">Remark: <span className="text-slate-200">{remarks}</span></div>
        </div>
        <div className="text-center sm:text-right">
          <div className="text-[11px] text-slate-400 uppercase tracking-wider">Assigned Grade</div>
          <div className={`text-xl font-bold font-mono ${gradeColor}`}>{grade}</div>
        </div>
      </div>
    </div>
  );
};

// 2. Voting Calculator Demo
const VotingCalculatorDemo: React.FC = () => {
  const [age, setAge] = useState<number>(18);
  const isEligible = age >= 18;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white flex items-center gap-2">
          <Play className="w-4 h-4 text-blue-400" /> Test Age Criterion
        </h4>
        <span className="text-xs text-slate-400 font-mono">Criteria: Age ≥ 18</span>
      </div>

      <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <label className="text-xs text-slate-300 block mb-2 font-medium">
          Enter Person's Age:
        </label>
        <div className="flex items-center gap-3">
          <input
            type="range"
            min="5"
            max="100"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="flex-1 accent-blue-500 cursor-pointer"
          />
          <div className="w-16 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-center font-mono font-bold text-cyan-300 text-lg">
            {age}
          </div>
        </div>
      </div>

      <div className={`p-4 rounded-xl border ${isEligible ? 'bg-emerald-950/20 border-emerald-500/30' : 'bg-amber-950/20 border-amber-500/30'} transition-all`}>
        <div className="flex items-start gap-3">
          {isEligible ? (
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div>
            <div className={`text-base font-bold ${isEligible ? 'text-emerald-300' : 'text-amber-300'}`}>
              {isEligible ? 'Eligible to Vote' : 'Not Eligible to Vote Yet'}
            </div>
            <p className="text-xs text-slate-300 mt-1">
              {isEligible
                ? `At ${age} years old, the candidate satisfies democratic voting regulations and is eligible to register for their voter ID card.`
                : `At ${age} years old, the candidate is not yet of legal voting age. Needs ${18 - age} more year${18 - age > 1 ? 's' : ''} to become eligible.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Generative AI Experiments Demo
const GenAiExperimentsDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'workflow' | 'concept'>('prompt');

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('prompt')}
          className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
            activeTab === 'prompt' ? 'bg-blue-600/30 border border-blue-500/40 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Prompt Experiment
        </button>
        <button
          onClick={() => setActiveTab('workflow')}
          className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
            activeTab === 'workflow' ? 'bg-blue-600/30 border border-blue-500/40 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          AI Tool Architecture
        </button>
        <button
          onClick={() => setActiveTab('concept')}
          className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${
            activeTab === 'concept' ? 'bg-blue-600/30 border border-blue-500/40 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Student Learning Notes
        </button>
      </div>

      {activeTab === 'prompt' && (
        <div className="space-y-3 font-mono text-xs">
          <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-slate-300">
            <span className="text-cyan-400 font-bold block mb-1">// System Prompt Blueprint</span>
            "You are a patient Computer Science tutor assisting first-year B.Tech students. Break down complex algorithms into simple real-world analogies, step-by-step code traces, and beginner-friendly syntax explanations."
          </div>
          <div className="p-3 bg-blue-950/20 rounded-lg border border-blue-500/20 text-slate-300">
            <span className="text-blue-400 font-bold block mb-1">// Experiment Result:</span>
            Demonstrated that structured role prompt definition reduces hallucinations and improves code explanation clarity by 40% for beginner syntax queries.
          </div>
        </div>
      )}

      {activeTab === 'workflow' && (
        <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs space-y-2 text-slate-300">
          <div className="font-semibold text-cyan-300">Student Study Helper Concept</div>
          <div className="grid grid-cols-3 gap-2 text-center text-[11px] pt-1 font-mono">
            <div className="p-2 rounded bg-slate-800/80 border border-slate-700">1. Raw Lecture Notes</div>
            <div className="p-2 rounded bg-blue-900/40 border border-blue-500/40 text-blue-300">2. LLM Summarizer</div>
            <div className="p-2 rounded bg-cyan-900/40 border border-cyan-500/40 text-cyan-300">3. Flashcard Output</div>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">
            Explored how LLMs can transform unstructured syllabus notes into concise revision cards for first-year engineering subjects.
          </p>
        </div>
      )}

      {activeTab === 'concept' && (
        <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 text-xs space-y-2 text-slate-300">
          <div className="font-semibold text-white">Generative AI Concepts Studied:</div>
          <ul className="list-disc pl-4 space-y-1 text-slate-300 text-[12px]">
            <li>Tokenization and Context Window limitations</li>
            <li>Zero-Shot vs. Few-Shot Prompting techniques</li>
            <li>Role-based conditioning and temperature tuning</li>
            <li>Ethical AI usage, verification, and bias awareness</li>
          </ul>
        </div>
      )}
    </div>
  );
};
