// layout.js — Injects shared nav, footer, cursor, and progress bar

function buildNav() {
  return `
  <div class="cursor"></div>
  <div class="cursor-ring"></div>
  <div class="progress-bar" id="progress-bar"></div>
  <nav id="main-nav">
    <a href="index.html" class="nav-logo">
      <img src="assets/images/logo-falcon.png" alt="UAE Falcon" class="nav-logo-img" />
      Visit <span>UAE</span>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">หน้าแรก</a></li>
      <li><a href="destinations.html">จุดหมาย</a></li>
      <li><a href="experiences.html">ประสบการณ์</a></li>
      <li><a href="plan.html">วางแผน</a></li>
      <li><a href="culture.html">วัฒนธรรม</a></li>
      <li><a href="contact.html" class="nav-cta">ติดต่อเรา</a></li>
    </ul>
    <div class="hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </nav>`;
}

function buildFooter() {
  return `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand fade-up">
        <a href="index.html" class="nav-logo">
          <img src="assets/images/logo-falcon.png" alt="UAE Falcon" class="nav-logo-img" style="height:36px;" />
          Visit <span>UAE</span>
        </a>
        <p style="margin-top:1rem;">ประตูสู่ดินแดนแห่งความมหัศจรรย์ ที่ผสมผสานระหว่างความทันสมัยและมรดกทางวัฒนธรรมอันงดงาม</p>
        <div class="footer-uae-strip">
          <div class="uae-flag-strip" style="margin-top:1.5rem; height:3px; display:flex; width:120px; border-radius:2px; overflow:hidden;">
            <div class="flag-red" style="flex:1;background:#EF3340;"></div>
            <div class="flag-green" style="flex:1;background:#009A44;"></div>
            <div class="flag-white" style="flex:1;background:rgba(255,255,255,0.7);"></div>
            <div class="flag-black" style="flex:1;background:#2a2a2a;"></div>
          </div>
        </div>
      </div>
      <div class="footer-col fade-up">
        <h4>จุดหมาย</h4>
        <ul>
          <li><a href="destinations.html#dubai">ดูไบ</a></li>
          <li><a href="destinations.html#abudhabi">อาบูดาบี</a></li>
          <li><a href="destinations.html#sharjah">ชาร์จาห์</a></li>
          <li><a href="destinations.html#rak">รัส อัล ไคมาห์</a></li>
          <li><a href="destinations.html#ajman">อัจมาน</a></li>
          <li><a href="destinations.html#fujairah">ฟูไจราห์</a></li>
          <li><a href="destinations.html#uaq">อุมม์ อัล กุเวน</a></li>
        </ul>
      </div>
      <div class="footer-col fade-up">
        <h4>วางแผน</h4>
        <ul>
          <li><a href="plan.html">ข้อมูลวีซ่า</a></li>
          <li><a href="plan.html">โรงแรม</a></li>
          <li><a href="plan.html">การเดินทาง</a></li>
          <li><a href="plan.html">งบประมาณ</a></li>
          <li><a href="plan.html">อากาศ</a></li>
        </ul>
      </div>
      <div class="footer-col fade-up">
        <h4>สำรวจ</h4>
        <ul>
          <li><a href="culture.html">วัฒนธรรม</a></li>
          <li><a href="experiences.html">กิจกรรม</a></li>
          <li><a href="contact.html">ติดต่อเรา</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Visit UAE — สงวนสิทธิ์ทุกประการ</p>
      <p>Made with care for travelers 🇦🇪</p>
    </div>
  </footer>`;
}

// Inject
document.getElementById('nav-placeholder').innerHTML = buildNav();
document.getElementById('footer-placeholder').innerHTML = buildFooter();
