import FooterBackground from './footer-background';
import BrandLogo from './brand-logo';

export default function Home() {
  return (
    <footer className="footer" aria-label="Footer">
      <FooterBackground />
      <div className="jobs">
        <span className="tag">product &amp; ux/ui designer</span>
        <span className="headline job-title">3+ years shipping<br />saas &amp; b2b products</span>
        <ul className="experience">
          <li><span className="exp-role">Product &amp; Brand Designer</span><span className="exp-meta">Cubezix · Apr 2026 – Present</span></li>
          <li><span className="exp-role">UX/UI &amp; Product Designer</span><span className="exp-meta">RCV Technologies · Apr 2024 – Mar 2026</span></li>
          <li><span className="exp-role">UX/UI Designer</span><span className="exp-meta">Flashcube IT · Oct 2023 – Mar 2024</span></li>
        </ul>
      </div>
      <div className="logo" role="img" aria-label="Manisha Baroliya logo">
        <BrandLogo />
      </div>
      <div className="contact">
        <span className="tag">say hey</span>
        <div className="headline contact-links">
          <span>let’s team up!</span>
          <span>bring me your idea*</span>
        </div>
        <p className="note">*from discovery to dev handoff, across 10+ platforms. let’s make yours next.</p>
        <div className="socials">
          <span aria-label="LinkedIn"><img src="/linkedin.svg" alt="" width="35" height="35" /></span>
          <span aria-label="Instagram"><img src="/instagram.svg" alt="" width="35" height="35" /></span>
          <span aria-label="TikTok"><img src="/tiktok.svg" alt="" width="35" height="35" /></span>
          <a href="https://linktr.ee/manisha_barol" target="_blank" rel="noopener noreferrer" aria-label="Linktree"><img src="/linktree.svg" alt="" width="35" height="35" /></a>
        </div>
      </div>
    </footer>
  );
}
