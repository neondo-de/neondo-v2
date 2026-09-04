const events = [
  { type: "TONIGHT", title: "Club night", meta: "23:00 · Berlin", price: "€18" },
  { type: "FRI 05 SEP", title: "Warehouse session", meta: "22:00 · Berlin", price: "€12" },
  { type: "SAT 06 SEP", title: "Open air", meta: "18:00 · Berlin", price: "€10" },
]

const jobs = [
  { date: "TONIGHT", role: "Stagehand", time: "18:00 — 02:00", pay: "€120", tone: "lime" },
  { date: "FRI 05 SEP", role: "Event photographer", time: "19:00 — 00:00", pay: "€220", tone: "pink" },
  { date: "SAT 06 SEP", role: "Content creator", time: "20:00 — 01:00", pay: "€180", tone: "blue" },
]

function Logo() { return <span className="logo" aria-label="NEONDO">NEON<strong>DO</strong></span> }

export default function Home() {
  return <main className="site">
    <nav className="nav">
      <a href="#top"><Logo /></a>
      <div className="navlinks">
        <a href="#discover">Discover</a><a href="#work">Opportunities</a><a href="#how">How it works</a><a href="#network">The network</a>
      </div>
      <div className="actions"><button className="ghost">Log in</button><button className="solid">Join NEONDO ↗</button></div>
    </nav>

    <section id="top" className="hero">
      <div className="copy">
        <div className="eyebrow">BERLIN'S EVENT & CREATIVE NETWORK</div>
        <h1>The people<br/>behind <em>the moment.</em></h1>
        <p className="lead">NEONDO is the network for the people who make events happen — crew, artists, producers, photographers, creators and organisers.</p>
        <div className="heroactions"><button className="solid">Join the network ↗</button><a className="under" href="#discover">See what's happening ↓</a></div>
      </div>
      <div className="art">
        <div className="grid" />
        <div className="sticker">GLOBAL<br/><b>NIGHTLIFE</b><br/>NETWORK</div>
        <div className="phone">
          <div className="phonebar"><b>NEONDO</b><span>•••</span></div>
          <h3>Club night</h3><p>Berlin · Tonight · 23:00</p>
          <div className="profile"><div className="avatar">DJ</div><div className="person"><b>Guest DJ</b><span>Techno · Live set</span></div><span className="check">✓</span></div>
          <div className="chips"><span>TECHNO</span><span>CLUB</span><span>TONIGHT</span></div>
          <div className="phonefoot"><b>€18</b><button>Discover →</button></div>
        </div>
        <div className="note">FIND<br/><b>YOUR<br/>NIGHT.</b></div>
      </div>
    </section>

    <section id="discover" className="band dark">
      <div className="head"><div><div className="eyebrow">DISCOVER THE NIGHT</div><h2>What's happening <em>near you.</em></h2><p>Start with the city, then find the night that feels right.</p></div><a className="under" href="#discover">Explore events ↗</a></div>
      <div className="cards">{events.map((e)=><article className="card" key={e.title}><div><small>{e.type}</small><h3>{e.title}</h3><p>{e.meta}</p></div><div className="cardfoot"><strong>{e.price}</strong><button className="mini">View →</button></div></article>)}</div>
    </section>

    <section id="work" className="band">
      <div className="head"><div><div className="eyebrow">PAY-FORWARD OPPORTUNITIES</div><h2>Work that <em>moves.</em></h2></div><a className="under" href="#how">See all opportunities ↗</a></div>
      <div className="cards">{jobs.map((j)=><article className={`card ${j.tone}`} key={j.role}><div><div className="head" style={{marginBottom:0}}><small>{j.date}</small><small>OPEN</small></div><h3>{j.role}</h3><p>{j.time} · Berlin</p></div><div className="cardfoot"><strong>{j.pay}</strong><button className="mini">View ↗</button></div></article>)}</div>
    </section>

    <section id="how" className="band dark how"><div><div className="eyebrow">HOW NEONDO WORKS</div><h2>Find. Do.<br/><em>Prove. Grow.</em></h2><p>One place to find the right people, take on great work and build a reputation that follows you.</p></div><div className="steps">{[["01","FIND","Discover shifts, projects and people that fit what you actually do."],["02","DO","Take the opportunity. Show up. Make it happen."],["03","PROVE","Build your Scene CV through real work and references."],["04","GROW","Turn good work into better opportunities and a stronger network."]].map(([n,t,p])=><div className="step" key={n}><b>{n}</b><h3>{t}</h3><p>{p}</p></div>)}</div></section>

    <section id="network" className="band blue profileband"><div className="scene"><div className="scenehead"><span>SCENE CV</span><span>NEONDO / 01</span></div><div className="sceneuser"><div className="sceneavatar">AM</div><div><h3>Alex Morgan</h3><p>Production · Stage · Technical</p></div></div><div className="sceneline"><span>Berlin</span><span>4 yrs experience</span><span>Available</span></div><div className="skills"><span>Stagehand</span><span>Production</span><span>Backline</span><span>Event Ops</span></div></div><div className="copywhite"><div className="eyebrow">YOUR WORK SPEAKS</div><h2>Build a profile<br/>that <em>travels.</em></h2><p>Your NEONDO profile becomes your Scene CV — a living record of the work you do, the skills you bring and the people you've worked with.</p><button className="solid">Build your profile ↗</button></div></section>

    <section className="band pink cta"><div><div className="eyebrow">FOR ORGANISERS & COMPANIES</div><h2>Good events<br/>need <em>good people.</em></h2><p>Post a shift, find trusted crew and keep your production network in one place.</p></div><button className="solid">I'm hiring ↗</button></section>

    <footer><a href="#top"><Logo /></a><span>Berlin · Built for the people behind the events.</span><span>© 2026 NEONDO</span></footer>
  </main>
}
