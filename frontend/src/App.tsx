import { motion } from 'framer-motion';
import { Link, Route, Routes } from 'react-router-dom';

const features = [
  ['Verified identities', 'Role-aware access and verification flows keep referral conversations trustworthy.'],
  ['Private documents', 'Resume and academic documents are treated as protected resources, not public uploads.'],
  ['Referral workflow', 'Seekers can discover jobs and track requests while employees manage incoming referrals.'],
];

function Landing() {
  return <main>
    <section className="hero"><div className="glow"/><nav><Link className="brand" to="/">ref<span>net</span></Link><div className="navlinks"><a href="#features">Features</a><a href="#workflow">Workflow</a><Link className="button ghost" to="/login">Sign in</Link></div></nav>
      <div className="hero-grid"><div><p className="eyebrow">REFERRALS, REBUILT</p><h1>Turn warm introductions into <em>real opportunities.</em></h1><p className="lede">A secure referral platform for candidates and employees — designed around trust, ownership, and a frictionless workflow.</p><div className="actions"><Link className="button primary" to="/register">Get started</Link><a className="button ghost" href="#features">Explore platform</a></div></div><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.7}} className="hero-card"><div className="mini-top"><span>Referral pipeline</span><b>Live</b></div><div className="metric">24<span> active requests</span></div><div className="bars"><i/><i/><i/><i/><i/></div><div className="avatars"><span>AS</span><span>MK</span><span>RP</span><span>+8</span></div></motion.div></div>
    </section>
    <section id="features" className="section"><p className="eyebrow">BUILT FOR TRUST</p><h2>The details matter when people matter.</h2><div className="cards">{features.map(([title,body],i)=><motion.article key={title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="number">0{i+1}</div><h3>{title}</h3><p>{body}</p></motion.article>)}</div></section>
    <section id="workflow" className="section dark"><p className="eyebrow">ONE CLEAR FLOW</p><h2>Discover → request → decide → refer.</h2><div className="steps"><div><b>01</b><span>Find a role</span></div><div><b>02</b><span>Send a request</span></div><div><b>03</b><span>Employee reviews</span></div><div><b>04</b><span>Referral created</span></div></div></section>
    <footer><span className="brand">ref<span>net</span></span><small>Substantially re-engineered portfolio project.</small></footer>
  </main>;
}
function Login(){ return <Auth title="Welcome back" action="Sign in"/> }
function Register(){ return <Auth title="Create your account" action="Create account"/> }
function Auth({title,action}:{title:string;action:string}){ return <main className="auth"><Link className="brand" to="/">ref<span>net</span></Link><form onSubmit={e=>e.preventDefault()}><p className="eyebrow">REFNET ACCOUNT</p><h1>{title}</h1><label>Email<input type="email" placeholder="you@example.com" required/></label><label>Password<input type="password" placeholder="••••••••" minLength={8} required/></label><button className="button primary">{action}</button><Link to="/">Back to home</Link></form></main> }
export default function App(){ return <Routes><Route path="/" element={<Landing/>}/><Route path="/login" element={<Login/>}/><Route path="/register" element={<Register/>}/></Routes> }
