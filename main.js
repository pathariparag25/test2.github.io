import "style.css";

// ---- Chicken imagery (Pexels, license-free) ----
const IMG_HERO =
  "https://images.pexels.com/photos/35877057/pexels-photo-35877057.jpeg?cs=srgb&dl=pexels-nc-farm-bureau-mark-35877057.jpg&fm=jpg";
const IMG_SHOWCASE =
  "https://images.pexels.com/photos/17765441/pexels-photo-17765441/free-photo-of-chickens-on-farm.jpeg";
const IMG_GALLERY_1 =
  "https://images.pexels.com/photos/27557665/pexels-photo-27557665/free-photo-of-two-chickens-walking-on-dirt-near-a-tree.jpeg";
const IMG_GALLERY_2 =
  "https://images.pexels.com/photos/27083552/pexels-photo-27083552.jpeg?cs=srgb&dl=pexels-nc-farm-bureau-mark-27083552.jpg&fm=jpg";
const IMG_GALLERY_3 =
  "https://images.pexels.com/photos/40494586/pexels-photo-40494586.jpeg?h=600&w=600&fit=crop";
const IMG_ABOUT = IMG_SHOWCASE;

// ---- Contact details ----
const CONTACT = {
  name: "Jabbar Khatik",
  phone: "+91 90112 38682",
  phoneHref: "tel:+919011238682",
  email: "jabbarhussain6700772@gmail.com",
  address: "Rahnal Bus Stop, Bhiwandi",
};

// ============================================================
// PAGE TEMPLATES
// ============================================================

function homePage() {
  return `
  <section class="hero">
    <div class="hero-bg" style="background-image:url('${IMG_HERO}')"></div>
    <div class="container">
      <div class="hero-content">
        <span class="eyebrow">Farm Fresh • Naturally Raised</span>
        <h1>Healthy, Happy &amp; Fresh Chickens Straight From Our Farm</h1>
        <p>At Khatik Poultry Farm we raise chickens in clean, open surroundings with quality feed and care — delivering fresh poultry you can trust for your family and your business.</p>
        <div class="hero-actions">
          <a href="/contact" class="btn btn-primary" data-link>Order Now</a>
          <a href="/about" class="btn btn-outline" data-link>Learn More</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Why Choose Us</span>
        <h2>Poultry You Can Trust</h2>
        <p>Every bird on our farm is raised with attention to health, hygiene and humane practices.</p>
      </div>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon">🌿</div>
          <h3>Natural Feed</h3>
          <p>Our chickens are fed a balanced, chemical-free diet for healthy growth and better taste.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💧</div>
          <h3>Clean Water</h3>
          <p>Filtered, fresh water is available round the clock to keep every bird hydrated and active.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🏥</div>
          <h3>Vet Checked</h3>
          <p>Regular health checks and vaccinations ensure only fit, disease-free birds reach you.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🚚</div>
          <h3>Quick Delivery</h3>
          <p>Fresh supply delivered across Bhiwandi and nearby areas — fast, clean and on time.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="showcase">
        <div class="showcase-media">
          <img src="${IMG_SHOWCASE}" alt="Live chickens at Khatik Poultry Farm" />
          <span class="badge"><span class="pulse"></span> Live Farm View</span>
        </div>
        <div class="showcase-text">
          <span class="eyebrow">Live Chicken</span>
          <h2>See Our Birds Thriving on the Farm</h2>
          <p>Our chickens live in spacious, well-ventilated sheds with natural light and room to roam. We believe a healthy environment produces healthier birds — and you can taste the difference.</p>
          <ul class="check-list">
            <li>Free-range style open housing with daylight</li>
            <li>Daily cleaning and bio-security practices</li>
            <li>Antibiotic-free growth, naturally raised</li>
            <li>Trained staff monitoring bird health 24/7</li>
          </ul>
          <a href="/contact" class="btn btn-primary" data-link>Visit Our Farm</a>
        </div>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="container">
      <div class="stats-grid">
        <div><div class="stat-num">15+</div><div class="stat-label">Years of Farming</div></div>
        <div><div class="stat-num">5,000+</div><div class="stat-label">Healthy Birds</div></div>
        <div><div class="stat-num">1,200+</div><div class="stat-label">Happy Customers</div></div>
        <div><div class="stat-label">Daily Fresh Supply</div><div class="stat-num">100%</div></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Gallery</span>
        <h2>Life on the Farm</h2>
        <p>A glimpse of our birds and the farm they call home.</p>
      </div>
      <div class="gallery-grid">
        <div class="gallery-item"><img src="${IMG_GALLERY_1}" alt="Chickens near a tree" /></div>
        <div class="gallery-item"><img src="${IMG_GALLERY_2}" alt="Chickens on the farm" /></div>
        <div class="gallery-item"><img src="${IMG_SHOWCASE}" alt="Chickens roaming" /></div>
        <div class="gallery-item"><img src="${IMG_GALLERY_3}" alt="Healthy poultry" /></div>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="cta-banner">
        <h2>Ready for Fresh, Farm-Raised Chicken?</h2>
        <p>Place your order today or visit our farm in Bhiwandi. We're happy to help with bulk supply for homes, shops and events.</p>
        <div class="hero-actions">
          <a href="/contact" class="btn btn-light" data-link>Contact ${CONTACT.name.split(" ")[0]}</a>
          <a href="tel:${CONTACT.phoneHref.replace('tel:', '')}" class="btn btn-outline">${CONTACT.phone}</a>
        </div>
      </div>
    </div>
  </section>
  `;
}

function aboutPage() {
  return `
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">About Us</span>
      <h1>Our Story</h1>
      <p>Dedicated to raising healthy chickens the natural way — with care, cleanliness and honesty.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="about-media">
          <img src="${IMG_ABOUT}" alt="Khatik Poultry Farm" />
        </div>
        <div class="about-text">
          <span class="eyebrow" style="color:var(--primary);font-family:var(--font-head);font-size:.76rem;font-weight:600;letter-spacing:.16em;text-transform:uppercase;display:inline-block;margin-bottom:12px">Who We Are</span>
          <h2>A Family Poultry Farm Built on Trust</h2>
          <p>Khatik Poultry Farm is a family-run poultry business based in Bhiwandi, run by ${CONTACT.name}. What began as a small backyard setup has grown into a trusted local supplier of fresh, healthy chickens for households, shops and small businesses.</p>
          <p>We raise our birds in clean, open housing with proper ventilation, fresh water and quality feed. Our approach is simple — treat the birds well, keep the farm clean, and deliver only the healthiest poultry to our customers.</p>
          <p>Whether you need a single bird for your kitchen or regular bulk supply for your shop, we're here to serve you with honesty and freshness every single day.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--alt">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Our Values</span>
        <h2>What We Stand For</h2>
        <p>The principles that guide every decision on our farm.</p>
      </div>
      <div class="values-grid">
        <div class="value-card">
          <div class="feature-icon">🤝</div>
          <h3>Honesty</h3>
          <p>Transparent pricing, true freshness, and no shortcuts. What you see is what you get.</p>
        </div>
        <div class="value-card">
          <div class="feature-icon">🐣</div>
          <h3>Animal Care</h3>
          <p>Healthy birds come from humane treatment, clean shelter and proper nutrition.</p>
        </div>
        <div class="value-card">
          <div class="feature-icon">⭐</div>
          <h3>Quality First</h3>
          <p>We never compromise on feed, hygiene or health checks — quality is our promise.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Our Journey</span>
        <h2>How We Grew</h2>
        <p>From a small coop to a trusted local poultry supplier.</p>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <h4>THE BEGINNING</h4>
          <h3>Started with a Few Birds</h3>
          <p>${CONTACT.name} began raising a handful of chickens at home in Bhiwandi, learning the craft through patience and daily care.</p>
        </div>
        <div class="timeline-item">
          <h4>GROWTH</h4>
          <h3>Built a Proper Farm Setup</h3>
          <p>As demand grew from neighbours and local shops, we expanded into a proper housing facility with better ventilation, feed and hygiene systems.</p>
        </div>
        <div class="timeline-item">
          <h4>TODAY</h4>
          <h3>Trusted Local Supplier</h3>
          <p>Today Khatik Poultry Farm supplies fresh chicken daily to homes, retailers and event caterers across Bhiwandi and nearby areas.</p>
        </div>
      </div>
    </div>
  </section>
  `;
}

function contactPage() {
  return `
  <section class="page-hero">
    <div class="container">
      <span class="eyebrow">Contact Us</span>
      <h1>Get in Touch</h1>
      <p>Have a question or want to place an order? We'd love to hear from you.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info-card">
          <h3>Contact Details</h3>
          <p>Reach out directly — we respond quickly during business hours and welcome farm visits by appointment.</p>

          <div class="contact-detail">
            <div class="ic">👤</div>
            <div>
              <div class="lbl">Contact Person</div>
              <div class="val">${CONTACT.name}</div>
            </div>
          </div>

          <div class="contact-detail">
            <div class="ic">📱</div>
            <div>
              <div class="lbl">Mobile</div>
              <div class="val"><a href="${CONTACT.phoneHref}">${CONTACT.phone}</a></div>
            </div>
          </div>

          <div class="contact-detail">
            <div class="ic">✉️</div>
            <div>
              <div class="lbl">Email</div>
              <div class="val"><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div>
            </div>
          </div>

          <div class="contact-detail">
            <div class="ic">📍</div>
            <div>
              <div class="lbl">Address</div>
              <div class="val">${CONTACT.address}</div>
            </div>
          </div>
        </div>

        <div class="contact-form-card">
          <h3>Send Us a Message</h3>
          <p>Fill in the form and we'll get back to you shortly.</p>
          <div class="alert alert-success" id="contactSuccess">Thank you! Your message has been sent. We'll contact you soon.</div>
          <form id="contactForm" novalidate>
            <div class="form-row">
              <div class="field">
                <label for="cf-name">Your Name</label>
                <input type="text" id="cf-name" name="name" placeholder="Enter your name" required />
              </div>
              <div class="field">
                <label for="cf-phone">Phone Number</label>
                <input type="tel" id="cf-phone" name="phone" placeholder="Your phone number" required />
              </div>
            </div>
            <div class="field">
              <label for="cf-email">Email</label>
              <input type="email" id="cf-email" name="email" placeholder="you@example.com" required />
            </div>
            <div class="field">
              <label for="cf-subject">Subject</label>
              <select id="cf-subject" name="subject">
                <option>Place an Order</option>
                <option>Bulk Supply Enquiry</option>
                <option>Farm Visit Request</option>
                <option>General Question</option>
              </select>
            </div>
            <div class="field">
              <label for="cf-message">Message</label>
              <textarea id="cf-message" name="message" placeholder="Tell us what you need..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
            <p class="form-note">By submitting, you agree to be contacted about your enquiry.</p>
          </form>
        </div>
      </div>

      <div class="map-wrap">
        <iframe
          title="Khatik Poultry Farm location"
          src="https://www.google.com/maps?q=Rahnal%20Bus%20Stop%2C%20Bhiwandi&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>
  `;
}

function loginPage() {
  return `
  <section class="auth-wrap">
    <div class="auth-card">
      <div class="auth-icon">🔐</div>
      <h2>Welcome Back</h2>
      <p class="auth-sub">Login to access your Khatik Poultry Farm account.</p>
      <div class="alert alert-error" id="loginError">Incorrect email or password. Please try again.</div>
      <div class="alert alert-success" id="loginSuccess">Login successful! Redirecting...</div>
      <form id="loginForm" novalidate>
        <div class="field">
          <label for="lg-email">Email Address</label>
          <input type="email" id="lg-email" name="email" placeholder="you@example.com" required />
        </div>
        <div class="field">
          <label for="lg-password">Password</label>
          <input type="password" id="lg-password" name="password" placeholder="Enter your password" required />
        </div>
        <div class="checkbox-row">
          <label><input type="checkbox" name="remember" /> Remember me</label>
          <a href="#forgot">Forgot password?</a>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <p class="auth-alt">Don't have an account? <a href="#signup">Sign up here</a></p>
    </div>
  </section>
  `;
}

// ============================================================
// ROUTER
// ============================================================

const routes = {
  "/": { title: "Khatik Poultry Farm — Fresh & Healthy Chickens", render: homePage },
  "/about": { title: "About Us — Khatik Poultry Farm", render: aboutPage },
  "/contact": { title: "Contact Us — Khatik Poultry Farm", render: contactPage },
  "/login": { title: "Login — Khatik Poultry Farm", render: loginPage },
};

function getPage() {
  const path = window.location.pathname.replace(/index\.html$/, "/");
  return routes[path] ? path : "/";
}

function render() {
  const path = getPage();
  const route = routes[path];
  document.title = route.title;
  const page = document.getElementById("page");
  page.innerHTML = route.render();

  // Active nav state
  document.querySelectorAll(".main-nav a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === path);
  });

  // Close mobile menu on navigate
  const nav = document.getElementById("mainNav");
  const toggle = document.getElementById("navToggle");
  nav.classList.remove("open");
  toggle.classList.remove("active");

  // Wire up page-specific behaviour
  if (path === "/contact") initContactForm();
  if (path === "/login") initLoginForm();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigate(path) {
  if (getPage() === path) return;
  window.history.pushState({}, "", path);
  render();
}

// ============================================================
// PAGE INTERACTIONS
// ============================================================

function initContactForm() {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("contactSuccess");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    success.classList.add("show");
    form.reset();
    setTimeout(() => success.classList.remove("show"), 5000);
  });
}

function initLoginForm() {
  const form = document.getElementById("loginForm");
  const errorBox = document.getElementById("loginError");
  const successBox = document.getElementById("loginSuccess");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // Demo login — any valid email + password (min 4 chars) succeeds
    const email = form.email.value.trim();
    const password = form.password.value;
    if (email && password.length >= 4) {
      errorBox.classList.remove("show");
      successBox.classList.add("show");
      setTimeout(() => navigate("/"), 1500);
    } else {
      successBox.classList.remove("show");
      errorBox.classList.add("show");
    }
  });
}

// ============================================================
// GLOBAL EVENTS
// ============================================================

document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;
  e.preventDefault();
  navigate(link.getAttribute("href"));
});

window.addEventListener("popstate", render);

const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  navToggle.classList.toggle("active");
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Initial render
render();
