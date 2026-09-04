"use client"

import { useState } from "react"

const opportunities = [
  ["TONIGHT", "Stagehand", "18:00 — 02:00", "€120", "lime"],
  ["FRI 05 SEP", "Event Photographer", "19:00 — 00:00", "€220", "pink"],
  ["SAT 06 SEP", "Content Creator", "20:00 — 01:00", "€180", "blue"],
]

function Logo() {
  return <span className="logo" aria-label="NEONDO">NEON<strong>DO</strong></span>
}

export default function Home() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null)

  return (
    <main className="neondo-home">
      <nav className="nav">
        <a href="#top"><Logo /></a>
        <div className="nav-links">
          <a href="#opportunities">Opportunities</a>
          <a href="#discover">Discover events</a>
          <a href="#how">How it works</a>
          <a href="#proof">The network</a>
        </div>
        <div className="nav-actions">
          <button className="login" onClick={() => setModal("login")}>Log in</button>
          <button className="black" onClick={() => setModal("signup")}>Join NEONDO <span>↗</span></button>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="label"><span className="label-dot" /> BERLIN&apos;S EVENT &amp; CREATIVE NETWORK</div>
          <h1>The people<br />behind <em>the moment.</em></h1>
          <p>NEONDO connects the people who make events happen — and helps you discover what&apos;s happening in the city, from club nights and DJs to festivals and live shows.</p>
          <div className="hero-actions">
            <button className="black" onClick={() => setModal("signup")}>Join the network <span>↗</span></button>
            <a href="#discover" className="hero-link">Discover what&apos;s happening ↓</a>
          </div>
          <div className="proofline"><b>01</b><span>One network for the whole event ecosystem.</span></div>
        </div>
        <div className="hero-art">
          <div className="checker" />
          <div className="sticker">GLOBAL<br /><b>NIGHTLIFE</b><br />NETWORK</div>
          <div className="phone">
            <div className="phone-top"><b>NEONDO</b><span>•••</span></div>
            <div className="phone-title"><small>WHAT&apos;S ON TONIGHT</small><strong>Club Night</strong><span>Berlin · Today · 23:00</span></div>
            <div className="phone-person"><div className="avatar">DJ</div><div className="person-copy"><b>Guest DJ</b><span>Techno · Live set</span></div><i className="check">✓</i></div>
            <div className="tags"><span>TECHNO</span><span>CLUB</span><span>TONIGHT</span></div>
            <div className="phone-bottom"><b>€18</b><button onClick={() => document.getElementById("discover")?.scrollIntoView({behavior:"smooth"})}>Discover →</button></div>
          </div>
          <div className="note">FIND<br /><b>YOUR<br />NIGHT.</b></div>
        </div>
      </section>

      <section id="discover" className="section" style={{background:"#11120f",color:"#f5f4ef"}}>
        <div className="section-head">
          <div><div className="label" style={{color:"#a7c51f"}}><span className="label-dot" /> DISCOVER THE NIGHT</div><h2>What&apos;s happening <em style={{color:"#a7c51f"}}>near you.</em></h2><p style={{color:"#a9aaa2",maxWidth:580}}>Clubs, DJs, parties and festivals — discover your next night out, wherever you are.</p></div>
          <a href="#discover">Explore events ↗</a>
        </div>
        <div className="opps" style={{gridTemplateColumns:"repeat(4,1fr)"}}>
          {["Club Night","Warehouse Session","Open Air","Live Show"].map((title,i)=><article key={title} className="opp" style={{background:"#1a1b17",color:"#fff",minHeight:270}}><div><small style={{color:"#a7c51f",fontWeight:800}}>BERLIN · {i+1 === 1 ? "TONIGHT" : "THIS WEEK"}</small><h3>{title}</h3><p style={{color:"#85877e"}}>Music · Berlin · 23:00</p></div><div className="opp-bottom" style={{borderColor:"#34352f"}}><strong>€18</strong><button>View →</button></div></article>)}
        </div>
      </section>

      <section id="opportunities" className="section">
        <div className="section-head"><div><div className="label">PAY-FORWARD OPPORTUNITIES</div><h2>Work that <em>moves.</em></h2></div><a href="#how">See all opportunities ↗</a></div>
        <div className="opps">{opportunities.map(([date,role,time,pay,tone])=><article className={`opp ${tone}`} key={role}><div className="opp-top"><span>{date}</span><b>OPEN</b></div><div><h3>{role}</h3><p>{time} · Berlin</p></div><div className="opp-bottom"><strong>{pay}</strong><button onClick={() => setModal("signup")}>View ↗</button></div></article>)}</div>
      </section>

      <section id="how" className="how">
        <div className="how-intro"><div className="label">HOW NEONDO WORKS</div><h2>Find. Do.<br /><em>Prove. Grow.</em></h2><p>One place to find the right people, take on great work and build a reputation that follows you.</p></div>
        <div className="steps">{[["01","FIND","Discover shifts, projects and people that fit what you actually do."],["02","DO","Take the opportunity. Show up. Make the event happen."],["03","PROVE","Build your Scene CV through real work, references and reviews."],["04","GROW","Turn good work into better opportunities and a stronger network."]].map(([n,t,p])=><div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></div>)}</div>
      </section>

      <section id="proof" className="proof">
        <div className="scene-card"><div className="scene-head"><span>SCENE CV</span><span>NEONDO / 01</span></div><div className="scene-profile"><div className="scene-avatar">AM</div><div><h3>Alex Morgan</h3><p>Production · Stage · Technical</p></div><span className="scene-check">✓</span></div><div className="scene-line"><span>Berlin</span><span>4 yrs experience</span><span>Available</span></div><div className="bars"><i/><i/><i/><i/><i/><i/><i/></div><div className="skills"><span>Stagehand</span><span>Production</span><span>Backline</span><span>Event Ops</span></div></div>
        <div className="proof-copy"><div className="label">YOUR WORK SPEAKS</div><h2>Build a profile<br />that <em>travels.</em></h2><p>Your NEONDO profile becomes your Scene CV — a living record of the work you do, the skills you bring and the people you&apos;ve worked with.</p><button className="black" onClick={() => setModal("signup")}>Build your profile <span>↗</span></button></div>
      </section>

      <section className="organizer"><div><div className="label">FOR ORGANIZERS &amp; COMPANIES</div><h2>Good events<br />need <em>good people.</em></h2><p>Post a shift, find trusted crew and keep your whole production network in one place.</p></div><button className="black" onClick={() => setModal("signup")}>I&apos;m hiring <span>↗</span></button></section>

      <footer className="footer"><a href="#top"><Logo /></a><span>Berlin · Built for the people behind the events.</span><span>© 2026</span></footer>

      {modal && <div onClick={() => setModal(null)} style={{position:"fixed",inset:0,background:"rgba(0,0,0,.58)",display:"grid",placeItems:"center",zIndex:30,padding:20}}><div onClick={e => e.stopPropagation()} style={{width:"min(100%,430px)",background:"var(--bg)",border:"2px solid var(--ink)",padding:32,boxShadow:"10px 10px #111"}}><div className="label">NEONDO</div><h2 style={{font:"700 42px/.9 Space Grotesk",letterSpacing:"-.06em",margin:"14px 0"}}>{modal === "login" ? "Welcome back." : "Join the network."}</h2><p style={{color:"var(--muted)",fontSize:13}}>This clean rebuild starts with the experience and visual system. Authentication will plug into the new app foundation.</p><button className="black" onClick={() => setModal(null)}>Continue ↗</button></div></div>}
    </main>
  )
}
