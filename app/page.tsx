'use client';
import { useState } from 'react';

interface Tool {
  name: string;
  category: string;
  description: string;
  free: boolean;
  link: string;
  badge: string | null;
}

const tools: Tool[] = [
  { name: "Notion AI", category: "Note Taking", description: "AI-powered notes, summaries, and study plans. Perfect for organizing your entire academic life.", free: true, link: "https://notion.so", badge: "Most Popular" },
  { name: "Grammarly", category: "Writing & Essays", description: "Fixes grammar, improves clarity, and helps you write better essays in any subject.", free: true, link: "https://grammarly.com", badge: "Best for Essays" },
  { name: "Photomath", category: "Math & Science", description: "Point your camera at any math problem and get step-by-step solutions instantly.", free: true, link: "https://photomath.com", badge: null },
  { name: "Quizlet AI", category: "Studying", description: "AI generates flashcards and practice tests from your notes automatically.", free: true, link: "https://quizlet.com", badge: null },
  { name: "Elicit", category: "Research", description: "AI research assistant that summarizes academic papers and finds sources for you.", free: true, link: "https://elicit.com", badge: "Best for Research" },
  { name: "Socratic by Google", category: "Homework Help", description: "Ask any homework question and get visual explanations powered by Google AI.", free: true, link: "https://socratic.org", badge: "100% Free" },
  { name: "Otter.ai", category: "Lectures", description: "Records and transcribes lectures in real time so you never miss a word.", free: true, link: "https://otter.ai", badge: null },
  { name: "Consensus", category: "Research", description: "Search engine for scientific papers. Get evidence-based answers with citations.", free: true, link: "https://consensus.app", badge: null },
  { name: "Duolingo Max", category: "Language Learning", description: "AI-powered language learning with roleplay conversations and instant feedback.", free: false, link: "https://duolingo.com", badge: null },
  { name: "Wolfram Alpha", category: "Math & Science", description: "The ultimate computational engine for math, science, and engineering problems.", free: true, link: "https://wolframalpha.com", badge: null },
  { name: "ChatPDF", category: "PDF & Textbooks", description: "Upload any PDF textbook and chat with it. Ask questions, get summaries instantly.", free: true, link: "https://chatpdf.com", badge: "Hidden Gem" },
  { name: "Anki", category: "Studying", description: "The gold standard for spaced repetition learning. AI helps generate cards from your notes.", free: true, link: "https://apps.ankiweb.net", badge: null },
  { name: "Perplexity AI", category: "Research", description: "AI-powered search engine that gives direct answers with cited sources.", free: true, link: "https://perplexity.ai", badge: "Rising Fast" },
  { name: "Speechify", category: "PDF & Textbooks", description: "Turns any textbook or article into audio so you can study on the go.", free: false, link: "https://speechify.com", badge: null },
  { name: "Tome", category: "Presentations", description: "AI generates entire presentation decks from a single prompt in seconds.", free: true, link: "https://tome.app", badge: null },
  { name: "Gamma", category: "Presentations", description: "Beautiful AI-generated slides and documents without any design skills needed.", free: true, link: "https://gamma.app", badge: "Best for Slides" },
];

const categories: string[] = [...new Set(tools.map((t: Tool) => t.category))];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const visibleCategories = activeCategory === 'All' ? categories : [activeCategory];
  const filteredTools = (category: string) => tools.filter((t: Tool) => t.category === category);

  return (
    <>
    <p style={{ position: 'absolute', opacity: 0, fontSize: '1px' }}>Impact-Site-Verification: 6d5e4f94-7b24-4d0a-b54a-fb4a9b1fa54b</p>
      <div className="hero">
        <div className="hero-pill">2026 Edition — Updated Weekly</div>
        <h1>The Best AI Tools<br />for Students</h1>
        <p>Hand-picked tools that actually help you study smarter, write better, and save hours every week.</p>
        <div className="hero-stats">{tools.length} tools across {categories.length} categories — all tested</div>
      </div>

      <div className="filters">
        {['All', ...categories].map((cat: string) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container">
        {visibleCategories.map((category: string) => (
          <div key={category} className="section">
            <div className="section-title">{category}</div>
            <div className="grid">
              {filteredTools(category).map((tool: Tool) => (
               <a 
                  key={tool.name}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card"
                >
                  <div className="card-header">
                    <span className="card-name">{tool.name}</span>
                    <div className="badges">
                      {tool.badge && <span className="badge badge-special">{tool.badge}</span>}
                      <span className={`badge ${tool.free ? 'badge-free' : 'badge-paid'}`}>
                        {tool.free ? 'Free' : 'Paid'}
                      </span>
                    </div>
                  </div>
                  <p className="card-desc">{tool.description}</p>
                  <div className="card-footer">
                    <span className="card-link">Try it free →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="footer">
        <h3>Know a tool we missed?</h3>
        <p>This list is updated regularly. Bookmark it for the latest AI study tools.</p>
      </div>
    </>
  );
}