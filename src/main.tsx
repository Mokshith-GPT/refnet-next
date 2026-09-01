import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, BriefcaseBusiness, Sparkles } from 'lucide-react';
import './styles.css';

const features = [
  ['Verified network','Connect candidates and employees through verified profiles.',ShieldCheck],
  ['Referral workflow','Track requests from discovery through decision.',Users],
  ['Career discovery','Search opportunities with a focused recruiter-friendly experience.',BriefcaseBusiness]
] as const;

function App(){return <main><nav><div className="brand"><span className="logo">R</span> RefNet</div><a href="#features">How it works</a></nav><section className="hero"><motion.div className="copy" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.6}}><div className="eyebrow"><Sparkles size={15}/> Built for meaningful referrals</div><h1>Turn professional connections into <em>real opportunities.</em></h1><p>RefNet is a secure referral platform connecting job seekers with employees through structured, trackable referral workflows.</p><div className="actions"><button>Explore RefNet <ArrowRight size={17}/></button><a href="#features">See the workflow</a></div><div className="trust"><span><ShieldCheck size={16}/> Role-aware access</span><span><ShieldCheck size={16}/> Secure API design</span></div></motion.div><motion.div className="visual" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.7}}><div className="orb"/><div className="glass"><small>Referral pipeline</small><strong>12 active opportunities</strong><div className="progress"><span/></div><small>Requests organized by status</small></div></motion.div></section><section id="features" className="features"><div className="section-head"><span>Platform</span><h2>A clearer path from connection to referral.</h2></div><div className="grid">{features.map(([title,body,Icon])=><motion.article key={title} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><div className="icon"><Icon size={21}/></div><h3>{title}</h3><p>{body}</p></motion.article>)}</div></section><footer>© 2026 RefNet · React + TypeScript + Spring Boot</footer></main>}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
