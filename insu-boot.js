(function(){

/* ===================================================================
   THE ONLY PART YOU EDIT
   Upload these four images in Wix (Media Manager), copy each file's
   URL, and paste it below. They live here rather than inside the
   minified markup so you never have to search through the blob.
   =================================================================== */
var IMAGES = {
  logo:        'https://prajwal434.github.io/insu-assets/img/logo.jpg',
  supplychain: 'https://prajwal434.github.io/insu-assets/img/service-supplychain.jpg',
  ai:          'https://prajwal434.github.io/insu-assets/img/service-ai.jpg',
  python:      'https://prajwal434.github.io/insu-assets/img/course-python.jpg'
};
/* =================================================================== */

var MARKUP="<section class=\"hero\" id=\"hero\">\n<nav class=\"sitenav\" id=\"siteNav\" aria-label=\"Primary\">\n<a href=\"#story\" data-nav>Who we are</a>\n<a href=\"#supplychain\" data-nav>Supply chain</a>\n<a href=\"#workflow\" data-nav>AI solutions</a>\n<a href=\"#contact\" data-nav>Contact</a>\n</nav>\n<div class=\"hero-bg\">\n<div class=\"hero-scroll-zoom\" id=\"heroScrollZoom\">\n<div class=\"hero-bg-zoom\" id=\"heroBgZoom\">\n<div class=\"hero-bg-fallback\"></div>\n<div class=\"hero-network\" id=\"heroNetwork\"></div>\n</div>\n</div>\n</div>\n<div class=\"hero-scrim\"></div>\n<div class=\"hero-whitewash\" id=\"heroWhitewash\" aria-hidden=\"true\"></div>\n<div class=\"hero-content\">\n<div class=\"col-text\">\n<div class=\"brandmark reveal\" id=\"r1\">\n<img class=\"mark-icon\" src=\"https://prajwal434.github.io/insu-assets/img/logo.jpg\" alt=\"InSu Dynamics\"/>\n<span class=\"mark-text\">InSu Dynamics</span>\n</div>\n<h1 class=\"headline-stylish\">\n<span class=\"hl-row\">\n<span class=\"hl-accent\" id=\"hlAccent\">Innovation</span>\n<span class=\"hl-plus hl-word\" id=\"hlPlus\">Drives</span>\n<span class=\"hl-main\" id=\"hlMain\">Sustainability</span>\n</span>\n</h1>\n<p class=\"subhead reveal\" id=\"r3\">Sustainability begins with forward-thinking innovation. Our mission is to build a better tomorrow, starting today.</p>\n<div class=\"ctas reveal\" id=\"r4\">\n<a class=\"btn\" href=\"#contact\">Talk to Our Team</a>\n<a class=\"btn ghost\" href=\"#story\">See Our Services</a>\n</div>\n</div>\n</div>\n<div class=\"scroll-glow\" id=\"scrollGlow\" aria-hidden=\"true\"></div>\n</section>\n<section class=\"page-section section-light story\" id=\"story\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" id=\"threadEyebrow\">Who we are</span>\n<h2 class=\"who-statement thread-h\" id=\"threadHeading\">We build intelligence through <span class=\"pillar-group\"><em class=\"pillar\" data-pillar=\"0\">supply chain solutions</em>,</span> <span class=\"pillar-group\"><em class=\"pillar\" data-pillar=\"1\">AI</em>, and</span> <span class=\"pillar-group\"><em class=\"pillar\" data-pillar=\"2\">upskilling</em>.</span></h2>\n<div class=\"thread\" id=\"thread\">\n<div class=\"thread-viewport\">\n<div class=\"thread-track\" id=\"threadTrack\">\n<article class=\"thread-card\" data-card=\"0\">\n<div class=\"thread-img\" style=\"background-image:url('https://prajwal434.github.io/insu-assets/img/service-supplychain.jpg')\"></div>\n<div class=\"thread-body\">\n<span class=\"thread-kind\">Solutions</span>\n<h3>Supply Chain Solutions</h3>\n<p>The domain we know deepest &mdash; built alongside people who have actually run operations, not only implemented the software.</p>\n<button class=\"btn thread-cta\" type=\"button\" data-open-page=\"supply-chain\">Explore supply chain &rarr;</button>\n</div>\n</article>\n<article class=\"thread-card\" data-card=\"1\">\n<div class=\"thread-img\" style=\"background-image:url('https://prajwal434.github.io/insu-assets/img/service-ai.jpg')\"></div>\n<div class=\"thread-body\">\n<span class=\"thread-kind\">Solutions</span>\n<h3>AI Solutions</h3>\n<p>AI, machine learning and Generative AI engineered around your problem &mdash; not a product we already had. From feasibility analysis through to deployment.</p>\n<button class=\"btn thread-cta\" type=\"button\" data-open-page=\"ai-solutions\">Explore AI solutions &rarr;</button>\n</div>\n</article>\n<article class=\"thread-card\" data-card=\"2\">\n<div class=\"thread-img\" style=\"background-image:url('https://prajwal434.github.io/insu-assets/img/course-python.jpg')\"></div>\n<div class=\"thread-body\">\n<span class=\"thread-kind\">Programs</span>\n<h3>Upskilling Yourself</h3>\n<p>AI engineering, data analytics and supply chain planning &mdash; taught with the same tools and workflows our engineers use on real client work.</p>\n<button class=\"btn thread-cta\" type=\"button\" data-open-page=\"programs\">Explore AI programs &rarr;</button>\n</div>\n</article>\n</div>\n</div>\n<div class=\"thread-line\" id=\"threadLine\">\n<svg viewBox=\"0 0 1000 64\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n<path id=\"threadPath\" class=\"thread-path\" d=\"M 0 32 Q 500 32 1000 32\"/>\n<circle id=\"threadPulse\" class=\"thread-pulse\" cx=\"0\" cy=\"32\" r=\"3.4\" opacity=\"0\"/>\n</svg>\n<button class=\"thread-bead\" id=\"threadBead\" type=\"button\" aria-label=\"Drag to move between cards\"></button>\n</div>\n<p class=\"thread-hint\" id=\"threadHint\">Pull the thread &mdash; or drag the cards</p>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"solutionset\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Our solutions</span>\n<h2 class=\"who-statement\" data-reveal>Where we go deep.</h2>\n<p class=\"sec-lede\" data-reveal>We don't just implement technology.<br/>We transform supply chains, make them intelligent, and build the people who can take them forward.</p>\n<div class=\"demoset\">\n<article class=\"solcard solcard--agent\" data-agent>\n<span class=\"demo-tag\">Supply chain</span>\n<h3>Planning Agent</h3>\n<p>Ask it about any plan and it returns the whole picture &mdash; what changed since the last run, which exceptions matter, and the data behind every number.</p>\n<div class=\"agent-term\" aria-hidden=\"true\">\n<div class=\"agent-q\"><span class=\"agent-caret\">&rsaquo;</span> <span class=\"agent-typed\" data-q=\"Why did the Q3 plan shift?\"></span></div>\n<div class=\"agent-a\" data-a=\"Demand up 12% on SKU-4471. Supplier lead time moved 14&rarr;21 days. 3 exceptions flagged, 2 auto-resolved.\"></div>\n</div>\n<button class=\"solcard-more\" type=\"button\" data-open-page=\"supply-chain\">More on supply chain <span aria-hidden=\"true\">&rarr;</span></button>\n</article>\n<article class=\"solcard solcard--agent\" data-agent>\n<span class=\"demo-tag demo-tag--alt\">Beyond supply chain</span>\n<h3>SRE Bench</h3>\n<p>Watches your infrastructure around the clock and predicts failures before they land. When one does, it performs the first level of remediation itself &mdash; and only escalates to a human when it genuinely can't resolve it.</p>\n<div class=\"agent-term agent-term--auto\" aria-hidden=\"true\">\n<div class=\"agent-q\"><span class=\"agent-caret agent-caret--live\">&#9679;</span> <span class=\"agent-typed\" data-q=\"02:14 &mdash; disk I/O trending to saturation, api-node-3\"></span></div>\n<div class=\"agent-a\" data-a=\"Breach predicted in ~40min. Cleared stale cache, recycled worker pool. Resolved 02:21 &mdash; no escalation raised.\"></div>\n</div>\n<button class=\"solcard-more\" type=\"button\" data-open-page=\"ai-solutions\">More on AI solutions <span aria-hidden=\"true\">&rarr;</span></button>\n</article>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark shift seam-from-light\" id=\"shift\">\n<div class=\"section-inner shift-inner\">\n<span class=\"who-eyebrow\" data-reveal>Engineering first</span>\n<h2 class=\"shift-h\" data-reveal>We build AI for real businesses.<br/>That's what earns us the right<br/>to teach it.</h2>\n<div class=\"flow shift-flow\" data-flow>\n<span class=\"who-node flow-node\">AI we build</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">AI we teach</span>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint seam-from-dark\" id=\"supplychain\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Supply chain solutions</span>\n<h2 class=\"who-statement\" data-reveal>Transform. Optimize. Evolve.</h2>\n<p class=\"sec-lede\" data-reveal>From Oracle Fusion Cloud to Oracle E-Business Suite, we help organizations build, transform and continuously improve their supply chain landscape &mdash; across implementation, modernization, optimization and ongoing support.</p>\n<div class=\"scaps\">\n<article class=\"scap\">\n<span class=\"scap-num\">01</span>\n<h3>Fusion Cloud</h3>\n<p>Transform your supply chain with Fusion Cloud SCM</p>\n</article>\n<article class=\"scap\">\n<span class=\"scap-num\">02</span>\n<h3>EBS &amp; On-Prem</h3>\n<p>Modernize, optimize and support your existing landscape</p>\n</article>\n<article class=\"scap\">\n<span class=\"scap-num\">03</span>\n<h3>Optimization</h3>\n<p>Turn supply chain data into better decisions and better outcomes</p>\n</article>\n<article class=\"scap\">\n<span class=\"scap-num\">04</span>\n<h3>Support &amp; Evolution</h3>\n<p>Keep your supply chain running, improving and evolving</p>\n</article>\n</div>\n<div class=\"cta-row\" data-reveal>\n<button class=\"btn\" type=\"button\" data-open-page=\"supply-chain\">Explore our supply chain capabilities &rarr;</button>\n</div>\n<div class=\"sc-hinge\">\n<p class=\"sc-hinge-lead\" data-reveal>But technology alone isn't enough.</p>\n<p class=\"sc-hinge-ask\" data-reveal>What if your supply chain could <em>think</em>, <em>predict</em> and <em>act</em>?</p>\n<p class=\"sc-hinge-ans\" data-reveal>That's where AI comes in.</p>\n<button class=\"btn ghost\" type=\"button\" data-open-page=\"ai-solutions\" data-reveal>Explore our AI solutions &rarr;</button>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark has-vessel seam-from-light\" id=\"workflow\">\n<div class=\"vessel\" id=\"vessel\" aria-hidden=\"true\"></div>\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>AI Solutions</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>Your problem.<br/>Our AI workflow.</h2>\n<p class=\"sec-lede\" data-reveal>We don't start with a product. We start with your problem.</p>\n<ol class=\"rail\" data-rail>\n<li class=\"rail-step\">\n<span class=\"rail-num\">01</span>\n<div class=\"rail-body\">\n<h3>Understand</h3>\n<p>We understand your business, process, data and the actual problem &mdash; before any technology is chosen.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">02</span>\n<div class=\"rail-body\">\n<h3>Solve</h3>\n<p>Our AI engineers and consultants analyze the problem and design possible AI-driven approaches.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">03</span>\n<div class=\"rail-body\">\n<h3>Recommend</h3>\n<p>We identify and recommend the optimal solution based on feasibility, impact, cost and scalability.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">04</span>\n<div class=\"rail-body\">\n<h3>Build</h3>\n<p>You choose the approach. We work with you to build the solution around how you actually operate.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">05</span>\n<div class=\"rail-body\">\n<h3>Deploy</h3>\n<p>Our AI engineering team turns it into a working system and delivers it quickly.</p>\n</div>\n</li>\n</ol>\n<div class=\"flow flow--wrap rail-outcome\" data-flow>\n<span class=\"who-node flow-node\">Problem</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Engineers + Consultants</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Analysis</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Optimal Solution</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Build</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Deploy</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Business Impact</span>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark\" id=\"approach\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Our approach</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>We don't force a solution.<br/><em>We find the right one.</em></h2>\n<div class=\"flow flow--wrap approach-flow\" data-flow>\n<span class=\"who-node flow-node\">Problem</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Possibilities</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Optimal Solution</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Your Choice</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Our Engineering</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Impact</span>\n</div>\n<ul class=\"checklist\" data-reveal-list>\n<li>Understand the actual business problem</li>\n<li>Analyze existing workflows and systems</li>\n<li>Identify where AI can genuinely help</li>\n<li>Evaluate multiple possible approaches</li>\n<li>Recommend the optimal solution</li>\n<li>Build the solution chosen by you</li>\n<li>Deploy quickly with our AI engineering team</li>\n<li>Keep improving the system where required</li>\n</ul>\n</div>\n</section>\n<section class=\"page-section section-dark\" id=\"solutions\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Our capabilities</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>AI solutions for the real world.</h2>\n<p class=\"sec-lede\" data-reveal>From intelligent automation to predictive systems, we engineer AI around the way your business actually works.</p>\n<div class=\"solgrid\">\n<article class=\"sol\">\n<h3>AI &amp; Machine Learning</h3>\n<div class=\"sol-more\">\n<p>Custom models built around your data and your decisions.</p>\n<span class=\"sol-uses\">Forecasting &middot; Classification &middot; Scoring</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Generative AI</h3>\n<div class=\"sol-more\">\n<p>LLM-backed systems that work with your own knowledge and content.</p>\n<span class=\"sol-uses\">RAG &middot; Assistants &middot; Document intelligence</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Intelligent Automation</h3>\n<div class=\"sol-more\">\n<p>Removing the repetitive operational work that slows teams down.</p>\n<span class=\"sol-uses\">Workflow automation &middot; Document processing</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Data &amp; Analytics</h3>\n<div class=\"sol-more\">\n<p>Turning scattered operational data into something decision-ready.</p>\n<span class=\"sol-uses\">Pipelines &middot; Dashboards &middot; Reporting</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>AI Agents</h3>\n<div class=\"sol-more\">\n<p>Systems that carry out multi-step operational tasks, not just answer questions.</p>\n<span class=\"sol-uses\">Operational agents &middot; Tool use</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Predictive Intelligence</h3>\n<div class=\"sol-more\">\n<p>Anticipating what happens next instead of reacting to it.</p>\n<span class=\"sol-uses\">Demand &middot; Risk &middot; Maintenance</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Computer Vision</h3>\n<div class=\"sol-more\">\n<p>Making physical and visual processes machine-readable.</p>\n<span class=\"sol-uses\">Inspection &middot; Recognition &middot; Monitoring</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Enterprise AI Integration</h3>\n<div class=\"sol-more\">\n<p>Fitting AI into the systems you already run.</p>\n<span class=\"sol-uses\">APIs &middot; Existing platforms &middot; Deployment</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n</div>\n<div class=\"cta-row\" data-reveal>\n<button class=\"btn\" type=\"button\" data-route=\"solutions\">Explore all solutions &rarr;</button>\n</div>\n</div>\n</section>\n<section class=\"page-section section-light seam-from-dark\" id=\"industries\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Industries</span>\n<h2 class=\"who-statement\" data-reveal>AI that adapts to your industry.</h2>\n<p class=\"sec-lede\" data-reveal>Our engineering approach adapts across industries, while supply chain remains one of our strongest areas of expertise.</p>\n<div class=\"indnet\" data-reveal-list>\n<span class=\"ind ind--strong\">Supply Chain &amp; Logistics</span>\n<span class=\"ind\">Manufacturing</span>\n<span class=\"ind\">Healthcare</span>\n<span class=\"ind\">Finance</span>\n<span class=\"ind\">Retail &amp; E-commerce</span>\n<span class=\"ind\">Technology</span>\n<span class=\"ind\">Education</span>\n<span class=\"ind\">Enterprise Operations</span>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"expect\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>What you can expect</span>\n<h2 class=\"who-statement\" data-reveal>No reviews yet. Just what we commit to.</h2>\n<div class=\"expect\">\n<div class=\"expect-col\">\n<h3>If you're building with us</h3>\n<ul data-reveal-list>\n<li>Problem-first consulting</li>\n<li>AI feasibility analysis</li>\n<li>Solution recommendations</li>\n<li>Fast engineering execution</li>\n<li>Scalable architecture</li>\n<li>Collaborative delivery</li>\n</ul>\n</div>\n<div class=\"expect-col\">\n<h3>If you're learning with us</h3>\n<ul data-reveal-list>\n<li>Practical projects</li>\n<li>Mentor guidance</li>\n<li>Industry-oriented learning</li>\n<li>AI engineering workflows</li>\n<li>Portfolio development</li>\n<li>Hands-on implementation</li>\n</ul>\n</div>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark seam-from-light\" id=\"whyus\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Why us</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>Technology &times; Talent &times; Impact</h2>\n<div class=\"tti\" id=\"ttiBlock\">\n<div class=\"tti-arm\" data-tti=\"0\">\n<h3>Technology</h3>\n<p>AI, ML, GenAI, automation, data and engineering.</p>\n</div>\n<div class=\"tti-arm\" data-tti=\"1\">\n<h3>Talent</h3>\n<p>AI engineers, consultants and learners building practical skills.</p>\n</div>\n<div class=\"tti-arm\" data-tti=\"2\">\n<h3>Impact</h3>\n<p>Solutions designed around measurable business problems.</p>\n</div>\n<div class=\"tti-core\" id=\"ttiCore\">Intelligence</div>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark finalcta\" id=\"contact\">\n<div class=\"section-inner\">\n<h2 class=\"final-h\" data-reveal>Have a problem <em>worth solving?</em></h2>\n<p class=\"final-sub\" data-reveal>Tell us what you're trying to solve. We'll figure out where AI fits.</p>\n<div class=\"final-split\">\n<div class=\"final-half\">\n<span class=\"final-for\">For businesses</span>\n<button class=\"btn\" type=\"button\" data-contact>Discuss your problem &rarr;</button>\n</div>\n<div class=\"final-half\">\n<span class=\"final-for\">For learners</span>\n<button class=\"btn ghost\" type=\"button\" data-route=\"programs\">Explore AI programs &rarr;</button>\n</div>\n</div>\n<p class=\"final-direct\">Or reach us directly &mdash;\n<a href=\"mailto:info@insudynamics.com\">info@insudynamics.com</a>\n<span class=\"final-sep\" aria-hidden=\"true\">&middot;</span>\n<a href=\"tel:+919497153297\">+91&nbsp;94971&nbsp;53297</a>\n</p>\n</div>\n</section>\n<footer class=\"site-footer\">\n<div class=\"section-inner foot-grid\">\n<div class=\"foot-brand\">\n<span class=\"foot-name\">InSu Dynamics</span>\n<span class=\"foot-tag\">Innovation drives sustainability.</span>\n<div class=\"foot-contact\">\n<a href=\"mailto:info@insudynamics.com\">info@insudynamics.com</a>\n<a href=\"tel:+919497153297\">+91&nbsp;94971&nbsp;53297</a>\n</div>\n</div>\n<div class=\"foot-col\">\n<h4>Company</h4>\n<a href=\"#who\">Who we are</a>\n<a href=\"#solutions\">Solutions</a>\n<a href=\"#supplychain\">Supply chain AI</a>\n<a href=\"#programs\" data-open-page=\"programs\">AI programs</a>\n<a href=\"#programs\" data-open-page=\"programs\">Internships</a>\n<a href=\"#contact\">Contact</a>\n</div>\n<div class=\"foot-col\">\n<h4>Solutions</h4>\n<a href=\"#solutions\">AI / ML</a>\n<a href=\"#solutions\">Generative AI</a>\n<a href=\"#solutions\">Automation</a>\n<a href=\"#solutions\">Analytics</a>\n<a href=\"#solutions\">AI agents</a>\n<a href=\"#supplychain\">Supply chain AI</a>\n</div>\n<div class=\"foot-col\">\n<h4>Programs</h4>\n<a href=\"#programs\" data-open-page=\"programs\">AI engineering internship</a>\n<a href=\"#programs\" data-open-page=\"programs\">Data analyst</a>\n<a href=\"#programs\" data-open-page=\"programs\">Data science</a>\n<a href=\"#programs\" data-open-page=\"programs\">AI engineering</a>\n<a href=\"#programs\" data-open-page=\"programs\">Supply chain planning</a>\n</div>\n</div>\n</footer>\n<div class=\"contactpop\" data-contactpop hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Tell us about your problem\">\n<div class=\"contactpop-panel\">\n<button class=\"contactpop-close\" type=\"button\" data-contactpop-close aria-label=\"Close\">&times;</button>\n<span class=\"contactpop-kicker\">Talk to our team</span>\n<h3 class=\"contactpop-h\">Tell us what you&rsquo;re trying to solve.</h3>\n<p class=\"contactpop-p\">A few lines is plenty. We&rsquo;ll come back to you on whether it needs a planning fix, an AI one, or neither.</p>\n<form class=\"cform\" data-cform novalidate>\n<div class=\"cform-row\">\n<label class=\"cform-label\" for=\"cf-name\">Your name</label>\n<input class=\"cform-input\" id=\"cf-name\" name=\"name\" type=\"text\" required autocomplete=\"name\" placeholder=\"Jane Menon\"/>\n</div>\n<div class=\"cform-row\">\n<label class=\"cform-label\" for=\"cf-email\">Work email</label>\n<input class=\"cform-input\" id=\"cf-email\" name=\"email\" type=\"email\" required autocomplete=\"email\" placeholder=\"you@company.com\"/>\n</div>\n<div class=\"cform-row\">\n<label class=\"cform-label\" for=\"cf-company\">Company <span class=\"cform-opt\">optional</span></label>\n<input class=\"cform-input\" id=\"cf-company\" name=\"company\" type=\"text\" autocomplete=\"organization\" placeholder=\"Company name\"/>\n</div>\n<div class=\"cform-row\">\n<label class=\"cform-label\" for=\"cf-problem\">What are you trying to solve?</label>\n<textarea class=\"cform-input cform-area\" id=\"cf-problem\" name=\"problem\" rows=\"4\" required placeholder=\"Where it hurts today, and what you have already tried.\"></textarea>\n</div>\n<p class=\"cform-error\" data-cform-error hidden></p>\n<button class=\"cform-send\" type=\"submit\">Send it over</button>\n<p class=\"cform-fine\">We reply to every enquiry. No list, no follow-up sequence.</p>\n</form>\n<div class=\"cform-done\" data-cform-done hidden>\n<p class=\"cform-done-msg\" data-cform-done-msg></p>\n<div class=\"contactpop-rows\" data-cform-fallback hidden>\n<div class=\"contactpop-row\">\n<span class=\"contactpop-label\">Email</span>\n<a class=\"contactpop-val\" data-cform-mailto href=\"mailto:info@insudynamics.com\">info@insudynamics.com</a>\n<button class=\"contactpop-copy\" type=\"button\" data-copy=\"info@insudynamics.com\">Copy</button>\n</div>\n<div class=\"contactpop-row\">\n<span class=\"contactpop-label\">Phone</span>\n<a class=\"contactpop-val\" href=\"tel:+919497153297\">+91&nbsp;94971&nbsp;53297</a>\n<button class=\"contactpop-copy\" type=\"button\" data-copy=\"+919497153297\">Copy</button>\n</div>\n</div>\n<button class=\"contactpop-copy cform-copyall\" type=\"button\" data-cform-copyall hidden>Copy what I wrote</button>\n</div>\n</div>\n</div>\n<div class=\"pageview\" data-page=\"programs\" hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-label=\"AI Programs\">\n<div class=\"pageview-bar\">\n<button class=\"pageview-close\" type=\"button\">&larr;&nbsp; Back to site</button>\n<span class=\"pageview-title\">AI Programs</span>\n</div>\n<div class=\"pageview-scroll\">\n<div class=\"pgintro\" data-pgintro hidden aria-hidden=\"true\">\n<div class=\"pgintro-inner\">\n<span class=\"pgintro-avatar\" aria-hidden=\"true\"></span>\n<p class=\"pgintro-line\" data-pgintro-line></p>\n<span class=\"pgintro-caret\" aria-hidden=\"true\"></span>\n</div>\n<div class=\"pgintro-pf\" data-pgintro-pf hidden>\n<div class=\"pf\" data-pf>\n<div class=\"pf-progress\" aria-hidden=\"true\"><span data-pf-fill></span></div>\n<div class=\"pf-stage\" data-pf-stage>\n<p class=\"pf-nojs\">This needs JavaScript. If you would rather just talk to us, email <a href=\"mailto:info@insudynamics.com\">info@insudynamics.com</a>.</p>\n</div>\n<p class=\"pf-fine\">A guided questionnaire, not a model &mdash; it reflects the answers you give, nothing more. Treat it as a starting point for a conversation.</p>\n</div>\n</div>\n<button class=\"aiintro-skip\" type=\"button\" data-pgintro-skip>Skip</button>\n</div>\n<header class=\"pageview-hero\">\n<span class=\"who-eyebrow\">Upskilling yourself</span>\n<h1 class=\"pageview-h\">Learn AI the way engineers use it.</h1>\n<p class=\"sec-lede\">Every program runs on the same tools and workflows our engineers use on client work \u2014 taught by the people doing it.</p>\n</header>\n<section class=\"page-section section-tint\" id=\"internship\">\n<div class=\"section-inner\">\n<div class=\"intern-static\" id=\"internStatic\">\n<span class=\"who-eyebrow\">Start Here. Build AI.</span>\n<h2 class=\"who-statement\">AI Engineering Internship</h2>\n<p class=\"intern-lede\">Don't just learn Python. Use it to build AI.</p>\n<p class=\"intern-body\">A 45-day internship built around a real, industry-niche major project \u2014 not tutorials \u2014 so you walk away having actually shipped something. Alongside the technical build, you pick up the skills it takes to survive in the real world of work.</p>\n<div class=\"intern-pipeline\" id=\"internPipeline\">\n<span class=\"who-node intern-step\">Python</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step\">ML</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step\">GenAI</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step\">AI Applications</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step intern-step--final\">Deployment</span>\n</div>\n<div class=\"intern-cta-row\">\n<button class=\"btn\" type=\"button\" data-intern-toggle aria-expanded=\"false\">Explore Internship \u2192</button>\n<span class=\"intern-credibility\">Built around real engineering workflows, not just tutorials.</span>\n</div>\n<div class=\"intern-more\" data-intern-more hidden>\n<span class=\"intern-more-k\">The other internships</span>\n<p class=\"intern-more-p\">Same shape &mdash; a real project, a mentor, and work you can show at the end. Different ground.</p>\n<div class=\"intern-more-grid\">\n<button class=\"intern-more-i\" type=\"button\" data-goto=\"prog-analyst\" data-accent=\"teal\">\n<span class=\"intern-more-n\">Data Analyst</span>\n<span class=\"intern-more-d\">SQL, Python and dashboards against real operational data.</span>\n</button>\n<button class=\"intern-more-i\" type=\"button\" data-goto=\"prog-science\" data-accent=\"lime\">\n<span class=\"intern-more-n\">Data Science</span>\n<span class=\"intern-more-d\">Statistics and models, from question to evaluated result.</span>\n</button>\n<button class=\"intern-more-i\" type=\"button\" data-goto=\"prog-scm\" data-accent=\"amber\">\n<span class=\"intern-more-n\">Supply Chain Planning</span>\n<span class=\"intern-more-d\">Demand, supply and Oracle SCM on a live planning problem.</span>\n</button>\n</div>\n</div>\n<div class=\"intern-stack\" id=\"internStack\">\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">01</span>\n<div><h3>Python</h3><p>Programming \u00b7 APIs \u00b7 Data</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">02</span>\n<div><h3>Machine Learning</h3><p>Models \u00b7 Training \u00b7 Evaluation</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">03</span>\n<div><h3>Generative AI</h3><p>LLMs \u00b7 RAG \u00b7 AI APIs</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">04</span>\n<div><h3>AI Engineering</h3><p>Applications \u00b7 Integration \u00b7 Deployment</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">05</span>\n<div><h3>Project</h3><p>Your industry-niche major project \u2014 build something real.</p></div>\n</div>\n</div>\n<p class=\"who-tagline\">Learn from people who build with AI.</p>\n</div>\n</div>\n</section>\n<section class=\"page-section section-light\" id=\"programs\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">More ways to build your AI career</span>\n<h2 class=\"who-statement\">Choose your path.<br/>Build real skills.</h2>\n<p class=\"sec-lede\">Every program works with the same tools and engineering workflows our own team uses. The AI Engineering Internship stays the flagship &mdash; these run alongside it.</p>\n<div class=\"prog-list\">\n<article class=\"prog\" id=\"prog-analyst\" data-accent=\"teal\">\n<div class=\"prog-head\">\n<h3>Data Analyst</h3>\n<p>Practical data analytics, Python, SQL, visualization, dashboards and business analysis.</p>\n</div>\n<div class=\"flow\">\n<span class=\"who-node flow-node\">Data</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">SQL</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Python</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Analytics</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Visualization</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Insights</span>\n</div>\n</article>\n<article class=\"prog\" id=\"prog-science\" data-accent=\"lime\">\n<div class=\"prog-head\">\n<h3>Data Science</h3>\n<p>Python, statistics, machine learning, data analysis, model development and real-world projects.</p>\n</div>\n<div class=\"flow\">\n<span class=\"who-node flow-node\">Data</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Statistics</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">ML</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Models</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Evaluation</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Deployment</span>\n</div>\n</article>\n<article class=\"prog\" id=\"prog-scm\" data-accent=\"amber\">\n<div class=\"prog-head\">\n<h3>Supply Chain Planning</h3>\n<p>Demand and supply planning, inventory policy, and Oracle SCM &mdash; taught by the people who run these implementations.</p>\n</div>\n<div class=\"flow\">\n<span class=\"who-node flow-node\">Fundamentals</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Demand</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Supply</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Inventory</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Oracle SCM</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Analytics</span>\n</div>\n</article>\n<article class=\"prog\" id=\"prog-aieng\" data-accent=\"deep\">\n<div class=\"prog-head\">\n<h3>AI Engineering</h3>\n<p>Python, machine learning, deep learning, Generative AI, LLMs, RAG, AI APIs and deployment.</p>\n</div>\n<div class=\"flow\">\n<span class=\"who-node flow-node\">Python</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">ML</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Deep Learning</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">GenAI</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">LLMs</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Applications</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Deployment</span>\n</div>\n</article>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"paths\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">Learn your way</span>\n<h2 class=\"who-statement\">Three journeys. One outcome.</h2>\n<p class=\"sec-lede\">These aren't just courses. Pick how far you want to take it &mdash; from structured learning to full industry experience.</p>\n<div class=\"paths\">\n<article class=\"path\">\n<span class=\"path-kind\">Full-time course</span>\n<span class=\"path-dur\">30&ndash;45 Days</span>\n<p class=\"path-desc\">Structured learning, practical projects and mentorship.</p>\n<div class=\"flow flow--sm\">\n<span class=\"who-node flow-node\">Learn</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Build</span>\n</div>\n</article>\n<article class=\"path\">\n<span class=\"path-kind\">Internship</span>\n<span class=\"path-dur\">30&ndash;45 Days</span>\n<p class=\"path-desc\">Hands-on experience, real projects, engineering workflow and mentorship.</p>\n<div class=\"flow flow--sm\">\n<span class=\"who-node flow-node\">Build</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Experience</span>\n</div>\n</article>\n<article class=\"path path--featured\">\n<span class=\"path-flag\">Most complete</span>\n<span class=\"path-kind\">Course + Internship</span>\n<span class=\"path-dur\">60&ndash;90 Days</span>\n<p class=\"path-desc\">Learn the foundations, build with them, then apply them on real industry work.</p>\n<div class=\"flow flow--sm\">\n<span class=\"who-node flow-node\">Learn</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Build</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Apply</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Experience</span>\n</div>\n</article>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"teach\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">How we teach</span>\n<h2 class=\"who-statement\">We teach AI the way engineers use it.</h2>\n<p class=\"sec-lede\">Not just Python syntax. Not just model theory. Not just notebooks.</p>\n<div class=\"flow flow--wrap\">\n<span class=\"who-node flow-node\">Python</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Data</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Machine Learning</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Generative AI</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">AI Applications</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">APIs</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Deployment</span>\n</div>\n<div class=\"teach-example\">\n<span class=\"teach-tag\">For example &mdash; supply chain</span>\n<p>Instead of only building a generic ML project, learners see how AI actually applies to demand forecasting, inventory prediction, anomaly detection, optimization and operational intelligence.</p>\n<p class=\"teach-point\">Not every learner becomes a supply chain specialist. The point is that they learn AI by understanding how it solves real problems.</p>\n</div>\n</div>\n</section>\n<section class=\"page-section section-light\" id=\"pricing\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">Pricing</span>\n<h2 class=\"who-statement\">Choose your path.</h2>\n<p class=\"sec-lede\">Three ways into every program &mdash; learning, experience, or the complete pathway.</p>\n<div class=\"price-legend\">\n<span><b>Course</b> &mdash; learning</span>\n<span><b>Internship</b> &mdash; experience</span>\n<span><b>Course + Internship</b> &mdash; complete pathway</span>\n</div>\n<div class=\"price-table\">\n<div class=\"price-row\">\n<div class=\"price-prog\">Data Analyst</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n<div class=\"price-row\">\n<div class=\"price-prog\">Data Science</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n<div class=\"price-row\">\n<div class=\"price-prog\">Supply Chain Planning</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n<div class=\"price-row\">\n<div class=\"price-prog\">AI Engineering</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n<div class=\"pageview\" data-page=\"supply-chain\" hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Supply Chain Solutions\">\n<div class=\"pageview-bar\">\n<button class=\"pageview-close\" type=\"button\">&larr;&nbsp; Back to site</button>\n<span class=\"pageview-title\">Supply Chain Solutions</span>\n</div>\n<div class=\"pageview-scroll\">\n<div class=\"scs\">\n<section class=\"scs-hero\">\n<div class=\"scs-hero-text\">\n<span class=\"scs-pill\">Supply Chain Solutions</span>\n<h1 class=\"scs-h1\">Plan It Once.<br/>Run It Everywhere.</h1>\n<p class=\"scs-lede\">Oracle supply chain planning built around how your operation actually runs &mdash; so the plan is something your planners use, not something they work around.</p>\n<ul class=\"scs-checks\">\n<li><span class=\"scs-tick\" aria-hidden=\"true\">&#10003;</span>Oracle Fusion Cloud SCM</li>\n<li><span class=\"scs-tick\" aria-hidden=\"true\">&#10003;</span>Oracle ASCP &amp; E-Business Suite</li>\n<li><span class=\"scs-tick\" aria-hidden=\"true\">&#10003;</span>Inventory &amp; demand policy design</li>\n<li><span class=\"scs-tick\" aria-hidden=\"true\">&#10003;</span>Ongoing support and optimisation</li>\n</ul>\n<a class=\"scs-cta\" href=\"mailto:info@insudynamics.com?subject=Supply%20chain%20enquiry\">Discuss your operation</a>\n</div>\n<div class=\"scs-hero-img\">\n<img src=\"https://prajwal434.github.io/insu-assets/img/sc-hero.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"/>\n</div>\n</section>\n<section class=\"scs-how\">\n<div class=\"scs-how-head\">\n<span class=\"scs-pill\">How it works?</span>\n<h2 class=\"scs-h2\">How We Rebuild<br/>A Planning Process</h2>\n<p class=\"scs-sub\">Four steps, in the order they actually have to happen. Skipping the first is the most common reason planning programmes fail.</p>\n</div>\n<ol class=\"scs-steps\">\n<li class=\"scs-step\">\n<span class=\"scs-step-n\">Step 1</span>\n<h3>Understand how you plan today</h3>\n<p>Before any configuration, we establish what your current planning policy actually is &mdash; which is rarely something anyone can state in one sentence, because it accumulates as overrides.</p>\n</li>\n<li class=\"scs-step\">\n<span class=\"scs-step-n\">Step 2</span>\n<h3>Model the real constraints</h3>\n<p>Capacity, material and lead-time constraints as they actually bite, and demand segmented on variability rather than value alone.</p>\n</li>\n<li class=\"scs-step\">\n<span class=\"scs-step-n\">Step 3</span>\n<h3>Build it in Oracle</h3>\n<p>Plan setup and tuning, sourcing rules and exception design on Oracle ASCP or Fusion Cloud SCM &mdash; new implementations and drifted ones alike.</p>\n</li>\n<li class=\"scs-step\">\n<span class=\"scs-step-n\">Step 4</span>\n<h3>Enable planners, then keep going</h3>\n<p>A plan nobody trusts gets replaced by a spreadsheet. We finish with the people who run it, and stay for the improvement cycle.</p>\n</li>\n</ol>\n</section>\n<section class=\"scs-nug-sec\">\n<span class=\"scs-pill\">Nuggets</span>\n<h2 class=\"scs-h2\">Supply chain, in short.</h2>\n<p class=\"scs-sub\">Things that shape every planning decision, and are quietly ignored in most of them.</p>\n<div class=\"nugbox\" data-nugbox>\n<div class=\"nug-stage\">\n<article class=\"nug is-on\" data-nug=\"0\">\n<span class=\"nug-tag\">Demand signal</span>\n<h3 class=\"nug-h\">The bullwhip effect</h3>\n<p class=\"nug-p\">A small wobble in end demand grows as it travels upstream. Each tier adds its own buffer against the tier below, so a 5% shift at the shelf can arrive at the raw material supplier as a swing several times larger.</p>\n</article>\n<article class=\"nug\" data-nug=\"1\">\n<span class=\"nug-tag\">Inventory</span>\n<h3 class=\"nug-h\">Safety stock does not scale linearly</h3>\n<p class=\"nug-p\">Double the lead time and you do not double the safety stock &mdash; it scales with the square root of it. Which is why shaving lead time helps far more than most stock policies assume.</p>\n</article>\n<article class=\"nug\" data-nug=\"2\">\n<span class=\"nug-tag\">Forecasting</span>\n<h3 class=\"nug-h\">Accuracy and bias are different problems</h3>\n<p class=\"nug-p\">A forecast can be accurate on average and still wrong in the same direction every month. MAPE tells you how far off you are; bias tells you which way. Only one of them quietly builds inventory.</p>\n</article>\n<article class=\"nug\" data-nug=\"3\">\n<span class=\"nug-tag\">Flow</span>\n<h3 class=\"nug-h\">Little&rsquo;s Law</h3>\n<p class=\"nug-p\">Average inventory equals throughput multiplied by flow time. It means you cannot reduce stock without changing one of the two &mdash; a fact that survives every re-org.</p>\n</article>\n<article class=\"nug\" data-nug=\"4\">\n<span class=\"nug-tag\">Segmentation</span>\n<h3 class=\"nug-h\">ABC is about value, XYZ is about volatility</h3>\n<p class=\"nug-p\">Segmenting on value alone hides the real troublemakers. A cheap, erratic component causes more stockouts than an expensive, predictable one, and only XYZ surfaces it.</p>\n</article>\n<article class=\"nug\" data-nug=\"5\">\n<span class=\"nug-tag\">Service</span>\n<h3 class=\"nug-h\">Service level is not fill rate</h3>\n<p class=\"nug-p\">Service level is the probability of not stocking out in a cycle. Fill rate is the share of demand met from stock. Optimising the wrong one is a common and expensive mistake.</p>\n</article>\n<article class=\"nug\" data-nug=\"6\">\n<span class=\"nug-tag\">Planning</span>\n<h3 class=\"nug-h\">Constrained beats unconstrained &mdash; eventually</h3>\n<p class=\"nug-p\">An unconstrained plan tells you what you would like to happen. A constrained one tells you what can. Most planning platforms fail at the point where those two were never reconciled.</p>\n</article>\n</div>\n<div class=\"nug-bar\">\n<div class=\"nug-dots\"><button class=\"nug-dot is-on\" type=\"button\" data-nug-go=\"0\" aria-label=\"Fact 1\"></button><button class=\"nug-dot\" type=\"button\" data-nug-go=\"1\" aria-label=\"Fact 2\"></button><button class=\"nug-dot\" type=\"button\" data-nug-go=\"2\" aria-label=\"Fact 3\"></button><button class=\"nug-dot\" type=\"button\" data-nug-go=\"3\" aria-label=\"Fact 4\"></button><button class=\"nug-dot\" type=\"button\" data-nug-go=\"4\" aria-label=\"Fact 5\"></button><button class=\"nug-dot\" type=\"button\" data-nug-go=\"5\" aria-label=\"Fact 6\"></button><button class=\"nug-dot\" type=\"button\" data-nug-go=\"6\" aria-label=\"Fact 7\"></button></div>\n<button class=\"nug-pause\" type=\"button\" data-nug-pause aria-label=\"Pause\">Pause</button>\n</div>\n<div class=\"nug-progress\" aria-hidden=\"true\"><span data-nug-fill></span></div>\n</div>\n</section>\n<section class=\"scs-cases-sec\">\n<span class=\"scs-pill\">Business transformation stories</span>\n<h2 class=\"scs-h2\">Read How The Work Actually Goes</h2>\n<p class=\"scs-sub\">Each document sets out the landscape, the opportunity, the recommended approach and the value it delivers. Free, no sign-up.</p>\n<div class=\"casedeck\" id=\"caseDeck\">\n<div class=\"casedeck-viewport\">\n<div class=\"scs-cases\" id=\"caseTrack\" data-cases>\n<article class=\"scs-case\" data-accent=\"teal\">\n<button class=\"scs-case-thumb\" type=\"button\" data-doc-id=\"BTS-001\" data-title=\"BTS-001 &mdash; Healthcare Supply Chain Transformation\" aria-label=\"View BTS-001\">\n<img src=\"https://prajwal434.github.io/insu-assets/img/thumbs/bts001.jpg\" alt=\"First page of BTS-001\" loading=\"lazy\" decoding=\"async\"/>\n<span class=\"scs-case-hover\"><span>View document</span></span>\n</button>\n<div class=\"scs-case-body\">\n<span class=\"scs-case-cat\">BTS-001 &middot; Healthcare</span>\n<h3>Healthcare Supply Chain Transformation</h3>\n<p>Orchestrating demand, supply and replenishment across hospitals, pharmacies and a central distribution centre.</p>\n<div class=\"scs-case-foot\">\n<span class=\"scs-fmt\"><span class=\"scs-fmt-badge\">PDF</span> 3 pages</span>\n<span class=\"scs-dl\">Preview &amp; request &rarr;</span>\n</div>\n</div>\n</article>\n<article class=\"scs-case\" data-accent=\"lime\">\n<button class=\"scs-case-thumb\" type=\"button\" data-doc-id=\"BTS-002\" data-title=\"BTS-002 &mdash; FMCG Demand-Driven Supply Chain Planning\" aria-label=\"View BTS-002\">\n<img src=\"https://prajwal434.github.io/insu-assets/img/thumbs/bts002.jpg\" alt=\"First page of BTS-002\" loading=\"lazy\" decoding=\"async\"/>\n<span class=\"scs-case-hover\"><span>View document</span></span>\n</button>\n<div class=\"scs-case-body\">\n<span class=\"scs-case-cat\">BTS-002 &middot; FMCG</span>\n<h3>FMCG Demand-Driven Supply Chain Planning</h3>\n<p>Balancing consumer demand with agile supply planning across hundreds of SKUs, promotions and seasonal swings.</p>\n<div class=\"scs-case-foot\">\n<span class=\"scs-fmt\"><span class=\"scs-fmt-badge\">PDF</span> 3 pages</span>\n<span class=\"scs-dl\">Preview &amp; request &rarr;</span>\n</div>\n</div>\n</article>\n<article class=\"scs-case\" data-accent=\"teal\">\n<button class=\"scs-case-thumb\" type=\"button\" data-doc-id=\"BTS-003\" data-title=\"BTS-003 &mdash; Intelligent Demand Planning for Discrete Manufacturing\" aria-label=\"View BTS-003\">\n<img src=\"https://prajwal434.github.io/insu-assets/img/thumbs/bts003.jpg\" alt=\"First page of BTS-003\" loading=\"lazy\" decoding=\"async\"/>\n<span class=\"scs-case-hover\"><span>View document</span></span>\n</button>\n<div class=\"scs-case-body\">\n<span class=\"scs-case-cat\">BTS-003 &middot; Discrete manufacturing</span>\n<h3>Intelligent Demand Planning for Discrete Manufacturing</h3>\n<p>Turning fragmented demand signals from finished goods and aftermarket spares into one reliable forecast.</p>\n<div class=\"scs-case-foot\">\n<span class=\"scs-fmt\"><span class=\"scs-fmt-badge\">PDF</span> 3 pages</span>\n<span class=\"scs-dl\">Preview &amp; request &rarr;</span>\n</div>\n</div>\n</article>\n<article class=\"scs-case\" data-accent=\"lime\">\n<button class=\"scs-case-thumb\" type=\"button\" data-doc-id=\"BTS-004\" data-title=\"BTS-004 &mdash; Intelligent Supply Planning for Process Manufacturing\" aria-label=\"View BTS-004\">\n<img src=\"https://prajwal434.github.io/insu-assets/img/thumbs/bts004.jpg\" alt=\"First page of BTS-004\" loading=\"lazy\" decoding=\"async\"/>\n<span class=\"scs-case-hover\"><span>View document</span></span>\n</button>\n<div class=\"scs-case-body\">\n<span class=\"scs-case-cat\">BTS-004 &middot; Process manufacturing</span>\n<h3>Intelligent Supply Planning for Process Manufacturing</h3>\n<p>Balancing demand, inventory, manufacturing capacity and procurement through one connected planning environment.</p>\n<div class=\"scs-case-foot\">\n<span class=\"scs-fmt\"><span class=\"scs-fmt-badge\">PDF</span> 3 pages</span>\n<span class=\"scs-dl\">Preview &amp; request &rarr;</span>\n</div>\n</div>\n</article>\n<article class=\"scs-case\" data-accent=\"teal\">\n<button class=\"scs-case-thumb\" type=\"button\" data-doc-id=\"BTS-005\" data-title=\"BTS-005 &mdash; Enterprise Planning Transformation\" aria-label=\"View BTS-005\">\n<img src=\"https://prajwal434.github.io/insu-assets/img/thumbs/bts005.jpg\" alt=\"First page of BTS-005\" loading=\"lazy\" decoding=\"async\"/>\n<span class=\"scs-case-hover\"><span>View document</span></span>\n</button>\n<div class=\"scs-case-body\">\n<span class=\"scs-case-cat\">BTS-005 &middot; Consumer goods</span>\n<h3>Enterprise Planning Transformation</h3>\n<p>A phased journey from demand management to supply planning to S&amp;OP, so every function plans against one version of the truth.</p>\n<div class=\"scs-case-foot\">\n<span class=\"scs-fmt\"><span class=\"scs-fmt-badge\">PDF</span> 3 pages</span>\n<span class=\"scs-dl\">Preview &amp; request &rarr;</span>\n</div>\n</div>\n</article>\n</div>\n</div>\n<div class=\"thread-line casedeck-line\" id=\"caseLine\">\n<svg viewBox=\"0 0 1000 64\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n<path id=\"casePath\" class=\"thread-path\" d=\"M 0 32 Q 500 32 1000 32\"/>\n<circle id=\"casePulse\" class=\"thread-pulse\" cx=\"0\" cy=\"32\" r=\"3.4\" opacity=\"0\"/>\n</svg>\n<button class=\"thread-bead\" id=\"caseBead\" type=\"button\" aria-label=\"Drag to move between stories\"></button>\n</div>\n<p class=\"thread-hint casedeck-hint\">Pull the thread &mdash; or drag the cards</p>\n</div>\n</section>\n<section class=\"scs-faq-sec\">\n<span class=\"scs-pill\">FAQs</span>\n<h2 class=\"scs-h2\">Supply Chain Questions,<br/>Answered Straight</h2>\n<p class=\"scs-sub\">The things people ask before they get in touch.</p>\n<div class=\"scs-faqs\">\n<details class=\"scs-faq\">\n<summary>Which Oracle products do you work with?<span class=\"scs-faq-mark\" aria-hidden=\"true\"></span></summary>\n<div class=\"scs-faq-a\"><p>Oracle Advanced Supply Chain Planning (ASCP), Oracle Fusion Cloud SCM &mdash; including Demand Management, Supply Planning and Sales &amp; Operations Planning &mdash; and Oracle E-Business Suite.</p></div>\n</details>\n<details class=\"scs-faq\">\n<summary>Do you only take on new implementations?<span class=\"scs-faq-mark\" aria-hidden=\"true\"></span></summary>\n<div class=\"scs-faq-a\"><p>No. A good share of our work is recovering implementations that are live but drifted &mdash; where the setup no longer describes how the business operates and planners have quietly gone back to spreadsheets.</p></div>\n</details>\n<details class=\"scs-faq\">\n<summary>Where does AI come into it?<span class=\"scs-faq-mark\" aria-hidden=\"true\"></span></summary>\n<div class=\"scs-faq-a\"><p>Once planning is trustworthy, AI has something solid to stand on. We keep that on its own page rather than mixing it in here, because a planning problem dressed up as an AI problem stays unsolved.</p></div>\n</details>\n<details class=\"scs-faq\">\n<summary>How does an engagement usually start?<span class=\"scs-faq-mark\" aria-hidden=\"true\"></span></summary>\n<div class=\"scs-faq-a\"><p>With your process, your data and the problem as the people doing the work describe it. If the honest answer is that the constraint is somewhere else, we would rather say so early.</p></div>\n</details>\n<details class=\"scs-faq\">\n<summary>What does it cost?<span class=\"scs-faq-mark\" aria-hidden=\"true\"></span></summary>\n<div class=\"scs-faq-a\"><p>It depends entirely on scope, so we quote per engagement rather than publishing a rate. Tell us what you are trying to solve and we will come back with a figure.</p></div>\n</details>\n</div>\n</section>\n</div>\n<div class=\"docread\" data-docread hidden aria-hidden=\"true\">\n<div class=\"docread-bar\">\n<span class=\"docread-crumb\"><b data-docread-code></b><span data-docread-title></span></span>\n<button class=\"docread-back\" type=\"button\" data-docread-back>&larr;&nbsp; Back to solutions</button>\n</div>\n<div class=\"docread-scroll\" data-docread-scroll>\n<div class=\"docread-pages\">\n<img class=\"docread-page\" data-docread-p1 src=\"\" alt=\"\"/>\n<div class=\"docread-cut\">\n<img class=\"docread-page\" data-docread-p2 src=\"\" alt=\"\"/>\n<div class=\"docread-veil\" aria-hidden=\"true\"></div>\n</div>\n</div>\n<div class=\"docread-more\">\n<span class=\"docread-more-kicker\">That&rsquo;s the opening</span>\n<h3 class=\"docread-more-h\">Read the rest of this story</h3>\n<p class=\"docread-more-p\">The full document continues through the recommended approach and the business value delivered. We&rsquo;ll email you the complete PDF.</p>\n<button class=\"docread-more-btn\" type=\"button\" data-docread-request>Get the full document</button>\n</div>\n</div>\n</div>\n<div class=\"docgate\" data-docgate hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\">\n<div class=\"docgate-panel\">\n<button class=\"docgate-close\" type=\"button\" data-docgate-close aria-label=\"Close\">&times;</button>\n<div class=\"docgate-body\">\n<span class=\"docgate-code\" data-docgate-code></span>\n<h3 class=\"docgate-title\" data-docgate-title></h3>\n<p class=\"docgate-note\">Leave your email and we&rsquo;ll send the complete document across.</p>\n<form class=\"docgate-form\" data-docgate-form>\n<label class=\"sc-sr\" for=\"docgate-email\">Your email address</label>\n<input class=\"docgate-input\" id=\"docgate-email\" type=\"email\" name=\"email\" required placeholder=\"you@company.com\" autocomplete=\"email\"/>\n<button class=\"docgate-btn\" type=\"submit\">Send me the document</button>\n</form>\n<p class=\"docgate-fine\">One email with the document attached. No list, no follow-up sequence.</p>\n<p class=\"docgate-msg\" data-docgate-msg hidden></p>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"pageview\" data-page=\"ai-solutions\" hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-label=\"AI Solutions\">\n<div class=\"pageview-bar\">\n<button class=\"pageview-close\" type=\"button\">&larr;&nbsp; Back to site</button>\n<span class=\"pageview-title\">AI Solutions</span>\n</div>\n<div class=\"pageview-scroll\">\n<header class=\"pageview-hero\">\n<span class=\"who-eyebrow\">AI solutions</span>\n<h1 class=\"pageview-h\">Your problem. Our AI workflow.</h1>\n<p class=\"sec-lede\">We start with your problem, not our product. Sometimes the honest answer is that AI is not the right tool \u2014 we would rather tell you that early.</p>\n</header>\n<div class=\"aiintro\" data-aiintro hidden aria-hidden=\"true\">\n<div class=\"aiintro-inner\">\n<p class=\"aiintro-line\" data-aiintro-line></p>\n<span class=\"aiintro-caret\" aria-hidden=\"true\"></span>\n</div>\n<div class=\"aiintro-flow\" data-aiintro-flow hidden>\n<span class=\"aiintro-flow-k\" data-aiintro-flow-k>How we built the Planning Agent</span>\n<div class=\"aiintro-build\">\n<div class=\"aiintro-card\" data-aiintro-card>\n<span class=\"aiintro-card-n\" data-aiintro-n></span>\n<b class=\"aiintro-card-t\" data-aiintro-t></b>\n<span class=\"aiintro-card-d\" data-aiintro-d></span>\n<div class=\"aiintro-dots\" data-aiintro-dots></div>\n</div>\n<div class=\"aiintro-mini\" data-aiintro-mini>\n<div class=\"mini-bar\"><span class=\"mini-dot\"></span><span class=\"mini-dot\"></span><span class=\"mini-dot\"></span><span class=\"mini-name\" data-piece=\"2\">planning-agent</span></div>\n<div class=\"mini-body\">\n<div class=\"mini-piece mini-prob\" data-piece=\"0\">An order slipped. Nobody could say why.</div>\n<div class=\"mini-piece mini-q\" data-piece=\"1\"><span class=\"mini-caret\">&rsaquo;</span> trace SO-48213 &mdash; why is it late?</div>\n<div class=\"mini-piece mini-row\" data-piece=\"3\"><span class=\"mini-k\">ORDER</span><span class=\"mini-id\">SO-48213</span></div>\n<div class=\"mini-piece mini-row mini-in1\" data-piece=\"3\"><span class=\"mini-k\">PLAN</span><span class=\"mini-id\">PO-9912</span></div>\n<div class=\"mini-piece mini-row mini-in2\" data-piece=\"3\"><span class=\"mini-k\">WORK</span><span class=\"mini-id\">WO-4471</span></div>\n<div class=\"mini-piece mini-row mini-in2 is-risk\" data-piece=\"3\"><span class=\"mini-k\">REQ</span><span class=\"mini-id\">PR-2203</span><span class=\"mini-m\">14 &rarr; 21 days</span></div>\n<div class=\"mini-piece mini-note\" data-piece=\"4\">Root cause found &mdash; and every number carries its source.</div>\n</div>\n</div>\n</div>\n</div>\n<button class=\"aiintro-skip\" type=\"button\" data-aiintro-skip>Skip intro</button>\n</div>\n<section class=\"pv-block probhead\">\n<span class=\"agentdemo-tag\">Ready to run</span>\n<h2>Problems we already have solutions for.</h2>\n<p class=\"pv-lead\">Two of them are built and running. Each started the same way &mdash; someone describing a job that took too long and trusted nobody.</p>\n</section>\n<section class=\"pv-block agentdemo\" data-agent-demo=\"pegging\">\n<div class=\"agentdemo-head\">\n<span class=\"agentdemo-tag\">Live agent &middot; simulated</span>\n<h2>Planning Agent</h2>\n<p class=\"pv-lead\">Ask it about any order and it walks the pegging tree for you &mdash; every planned order, work order and requisition underneath it, and where the risk actually sits.</p>\n</div>\n<div class=\"cstudy\" data-cstudy>\n<div class=\"cstudy-problem\">\n<span class=\"cstudy-k\">The problem</span>\n<p>An order slips. Finding out why means walking the plan by hand &mdash; across the planning system, the work orders and procurement &mdash; and the answer often arrives after the decision had to be made.</p>\n</div>\n<div class=\"cstudy-cols\">\n<div class=\"cstudy-col cstudy-col--now\">\n<span class=\"cstudy-k\">How it works today</span>\n<ul><li>Planner opens three or four screens</li><li>Traces pegging by hand, level by level</li><li>Cross-checks lead times in another system</li><li>Writes the explanation up for the meeting</li></ul>\n<div class=\"cstudy-meter\">\n<span class=\"cstudy-meter-k\">Effort</span>\n<span class=\"cstudy-bar\"><i style=\"--w:92%\"></i></span>\n</div>\n</div>\n<div class=\"cstudy-col cstudy-col--next\">\n<span class=\"cstudy-k\">With the agent</span>\n<ul><li>One question, in plain language</li><li>Full pegging tree returned with sources</li><li>Root cause identified, not just the symptom</li><li>Options costed against the order date</li></ul>\n<div class=\"cstudy-meter\">\n<span class=\"cstudy-meter-k\">Effort</span>\n<span class=\"cstudy-bar cstudy-bar--good\"><i style=\"--w:22%\"></i></span>\n</div>\n</div>\n</div>\n<div class=\"cstudy-win\">\n<span class=\"cstudy-saving\">Roughly 60&ndash;80% less time spent tracing</span>\n<ul class=\"cstudy-wins\"><li><b>Traceable &mdash;</b> every number arrives with the record behind it.</li><li><b>Repeatable &mdash;</b> the same question gets the same answer, whoever asks.</li><li><b>Explains itself &mdash;</b> the planner can defend the plan, not just read it.</li></ul>\n</div>\n<p class=\"cstudy-fine\">Effort figures are an estimate of the work involved, expressed as a range. They are not a measured client result.</p>\n</div>\n<div class=\"agentui\">\n<div class=\"agentui-bar\"><span class=\"agentui-dot\"></span><span class=\"agentui-dot\"></span><span class=\"agentui-dot\"></span><span class=\"agentui-name\">planning-agent</span><span class=\"agentui-scenes\" data-peg-scenes></span></div>\n<div class=\"agentui-body\">\n<div class=\"agentui-q\"><span class=\"agentui-caret\">&rsaquo;</span> <span data-peg-typed></span></div>\n<div class=\"agentui-tree\" data-peg-tree></div>\n<div class=\"agentui-note\" data-peg-note hidden></div>\n</div>\n<button class=\"agentui-replay\" type=\"button\" data-peg-replay hidden>Run again</button>\n</div>\n</section>\n<section class=\"pv-block agentdemo\" data-agent-demo=\"sre\">\n<div class=\"agentdemo-head\">\n<span class=\"agentdemo-tag\">Live agent &middot; simulated</span>\n<h2>SRE Bench</h2>\n<p class=\"pv-lead\">Watches infrastructure around the clock, predicts failures before they land, and performs the first level of remediation itself &mdash; escalating only when it genuinely cannot resolve something. Every fix becomes knowledge it plans against next time.</p>\n</div>\n<div class=\"cstudy\" data-cstudy>\n<div class=\"cstudy-problem\">\n<span class=\"cstudy-k\">The problem</span>\n<p>Infrastructure fails at the worst hour. Someone gets paged, rediscovers a problem the team has already solved twice, fixes it by hand, and the same failure returns next quarter.</p>\n</div>\n<div class=\"cstudy-cols\">\n<div class=\"cstudy-col cstudy-col--now\">\n<span class=\"cstudy-k\">How it works today</span>\n<ul><li>Alert fires once thresholds are already breached</li><li>An engineer is paged, often out of hours</li><li>The fix is rediscovered from scratch</li><li>Nothing stops it recurring</li></ul>\n<div class=\"cstudy-meter\">\n<span class=\"cstudy-meter-k\">Effort</span>\n<span class=\"cstudy-bar\"><i style=\"--w:88%\"></i></span>\n</div>\n</div>\n<div class=\"cstudy-col cstudy-col--next\">\n<span class=\"cstudy-k\">With the agent</span>\n<ul><li>Trend spotted before the threshold breaks</li><li>Known patterns remediated automatically</li><li>Escalates only when it genuinely cannot resolve</li><li>Each fix becomes a rule it plans against</li></ul>\n<div class=\"cstudy-meter\">\n<span class=\"cstudy-meter-k\">Effort</span>\n<span class=\"cstudy-bar cstudy-bar--good\"><i style=\"--w:26%\"></i></span>\n</div>\n</div>\n</div>\n<div class=\"cstudy-win\">\n<span class=\"cstudy-saving\">Roughly 50&ndash;70% fewer first-level escalations</span>\n<ul class=\"cstudy-wins\"><li><b>Earlier &mdash;</b> acts on the slope, not on the breach.</li><li><b>Cheaper &mdash;</b> the first level of triage stops reaching a person.</li><li><b>Compounds &mdash;</b> every incident makes the next one less likely.</li></ul>\n</div>\n<p class=\"cstudy-fine\">Effort figures are an estimate of the work involved, expressed as a range. They are not a measured client result.</p>\n</div>\n<div class=\"agentui agentui--sre\">\n<div class=\"agentui-bar\"><span class=\"agentui-dot\"></span><span class=\"agentui-dot\"></span><span class=\"agentui-dot\"></span><span class=\"agentui-name\">sre-bench</span><span class=\"agentui-live\" data-sre-status>monitoring</span></div>\n<div class=\"agentui-body\">\n<div class=\"sre-metrics\" data-sre-metrics></div>\n<div class=\"sre-log\" data-sre-log></div>\n</div>\n<button class=\"agentui-replay\" type=\"button\" data-sre-replay hidden>Run again</button>\n</div>\n</section>\n<section class=\"pv-block probmore\">\n<span class=\"agentdemo-tag\">Also solvable</span>\n<h2>And the ones we build to order.</h2>\n<p class=\"pv-lead\">The same approach, applied to whatever is costing you the most time. These are areas we build into &mdash; not claims that each is already running somewhere.</p>\n<div class=\"probmore-grid\">\n<span class=\"probmore-i\">Demand forecasting</span>\n<span class=\"probmore-i\">Document intelligence</span>\n<span class=\"probmore-i\">Supplier risk scoring</span>\n<span class=\"probmore-i\">Exception triage</span>\n<span class=\"probmore-i\">Inventory optimisation</span>\n<span class=\"probmore-i\">Knowledge assistants</span>\n<span class=\"probmore-i\">Quality inspection</span>\n<span class=\"probmore-i\">Operational reporting</span>\n</div>\n</section>\n<section class=\"pv-block aifit\">\n<span class=\"agentdemo-tag\">Where do you sit?</span>\n<h2>Which of these is closest to your problem?</h2>\n<p class=\"pv-lead\">Both agents above were built the same way: we started with someone&rsquo;s actual problem, not with a product. Tell us where yours sits and we&rsquo;ll come back on whether it needs AI, a planning fix, or neither.</p>\n<div class=\"aifit-opts\">\n<button class=\"aifit-opt\" type=\"button\" data-contact>\n<span class=\"aifit-opt-k\">Supply chain</span>\n<span class=\"aifit-opt-d\">Planning, inventory, procurement or an Oracle SCM landscape that has drifted.</span>\n<span class=\"aifit-opt-go\" aria-hidden=\"true\">&rarr;</span>\n</button>\n<button class=\"aifit-opt\" type=\"button\" data-contact>\n<span class=\"aifit-opt-k\">Somewhere else in the business</span>\n<span class=\"aifit-opt-d\">Operations, infrastructure, documents, forecasting &mdash; the approach carries across.</span>\n<span class=\"aifit-opt-go\" aria-hidden=\"true\">&rarr;</span>\n</button>\n<button class=\"aifit-opt\" type=\"button\" data-contact>\n<span class=\"aifit-opt-k\">Not sure yet</span>\n<span class=\"aifit-opt-d\">You know something is wrong but not what would fix it. That is a fine place to start.</span>\n<span class=\"aifit-opt-go\" aria-hidden=\"true\">&rarr;</span>\n</button>\n</div>\n</section>\n<section class=\"pv-block\">\n<h2>How we engage</h2>\n<p class=\"pv-lead\">We don't arrive with a product looking for a problem. Every engagement starts by working out whether AI is genuinely the right answer \u2014 and saying so when it isn't.</p>\n<ol class=\"pv-steps\">\n<li><span>01</span><div><b>Understand</b><p>Your process, your data, and the problem as the people doing the work describe it.</p></div></li>\n<li><span>02</span><div><b>Solve</b><p>Engineers and consultants design the approaches that could realistically work.</p></div></li>\n<li><span>03</span><div><b>Recommend</b><p>The optimal one, judged on feasibility, impact, cost and whether it will scale.</p></div></li>\n<li><span>04</span><div><b>Build</b><p>You choose the approach; we build it around how you actually operate.</p></div></li>\n<li><span>05</span><div><b>Deploy</b><p>Into production, with the people who have to run it afterwards.</p></div></li>\n</ol>\n</section>\n<section class=\"pv-block\">\n<h2>Broader capabilities</h2>\n<p class=\"pv-lead\">Supply chain is where we go deepest, but the engineering approach carries across.</p>\n<div class=\"tagset\">\n<span class=\"tag\">AI &amp; machine learning</span>\n<span class=\"tag\">Generative AI</span>\n<span class=\"tag\">Intelligent automation</span>\n<span class=\"tag\">Data &amp; analytics</span>\n<span class=\"tag\">AI agents</span>\n<span class=\"tag\">Predictive intelligence</span>\n<span class=\"tag\">Computer vision</span>\n<span class=\"tag\">Enterprise AI integration</span>\n</div>\n<div class=\"cta-row\" style=\"margin-top:28px;\">\n<a class=\"btn\" href=\"mailto:info@insudynamics.com?subject=Problem%20worth%20solving\">Discuss your problem &rarr;</a>\n</div>\n</section>\n</div>\n</div>";
function boot(){
  // Wix draws its page into #SITE_CONTAINER. The site has to own the document
  // scroll - two pinned sections and several viewport-fixed elements depend on
  // it - so Wix's own content is hidden rather than laid out alongside it.
  // Published page only; the Wix editor is untouched.
  var w=document.getElementById('SITE_CONTAINER')||document.getElementById('site-root');
  if(w){w.style.display='none';}

  // Under Wix the page is empty and the markup is injected. The standalone
  // build already has it in the HTML, so injecting would duplicate the whole
  // site. One bundle serves both: inject only when the markup is absent.
  var h;
  if(!document.querySelector('.hero')){
    if(document.getElementById('insu-root'))return;
    h=document.createElement('div');
    h.id='insu-root';
    h.innerHTML=MARKUP;
    document.body.appendChild(h);
  }

  // apply the uploaded image URLs
  var rs=document.documentElement.style;
  rs.setProperty('--img-supplychain',"url('"+IMAGES.supplychain+"')");
  rs.setProperty('--img-ai',"url('"+IMAGES.ai+"')");
  rs.setProperty('--img-python',"url('"+IMAGES.python+"')");
  var lg=document.querySelector('.mark-icon');
  if(lg){lg.src=IMAGES.logo;}

(function () {
  'use strict';
  var MOTION_KEY = 'insuMotionOn';
  function getMotionPref() {
    try {
      var v = localStorage.getItem(MOTION_KEY);
      return v === null ? true : v === '1';
    } catch (e) {
      return true;
    }
  }
  var motionOn = getMotionPref();
  var isStaticMode = !motionOn;
  if (isStaticMode) {
    document.documentElement.classList.add('static-mode');
  }
  var siteNav = document.getElementById('siteNav');
  if (siteNav) document.body.appendChild(siteNav);
  if (siteNav && 'IntersectionObserver' in window) {
    var navLinks = [].slice.call(siteNav.querySelectorAll('a[data-nav]'));
    /* Which sections light which nav link, in scroll order. The intro
       sections (story, solutionset, shift) intentionally light nothing:
       they precede supply chain, and highlighting Solutions there made
       the indicator jump backwards when supply chain arrived.
       Programs has no main-page section — it opens a panel. */
    /* Every nav item is a real main-page section, and every section
       lights exactly one item, so the indicator moves forward as you
       scroll and never jumps back. Programs is not in here: it has no
       main-page section and is reached from the Who we are cards. */
    var navGroups = {
      '#story': ['story', 'solutionset', 'shift'],
      '#supplychain': ['supplychain'],
      '#workflow': ['workflow', 'approach', 'solutions', 'industries'],
      '#contact': ['expect', 'whyus', 'contact']
    };
    var sectionToLink = {};
    navLinks.forEach(function (a) {
      var ids = navGroups[a.getAttribute('href')] || [];
      ids.forEach(function (id) { sectionToLink[id] = a; });
    });
    var visible = {};
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        visible[e.target.id] = e.isIntersecting ? e.intersectionRatio : 0;
      });
      var bestId = null, best = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > best) { best = visible[id]; bestId = id; }
      });
      var active = bestId ? sectionToLink[bestId] : null;
      navLinks.forEach(function (a) { a.classList.toggle('is-current', a === active); });
    }, { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-45% 0px -45% 0px' });
    Object.keys(sectionToLink).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) navObserver.observe(el);
    });
  }
  (function () {
    var panels = {};
    [].slice.call(document.querySelectorAll('.pageview')).forEach(function (pv) {
      var key = pv.getAttribute('data-page');
      if (key) panels[key] = pv;
    });
    if (!Object.keys(panels).length) return;
    var lastFocus = null, openKey = null;
    function closeAll(pop) {
      if (!openKey) return;
      var pv = panels[openKey];
      pv.hidden = true;
      pv.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('pageview-open');
      var wasHash = '#' + openKey;
      openKey = null;
      if (pop && location.hash === wasHash) history.back();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    function open(key, push) {
      var pv = panels[key];
      if (!pv || openKey === key) return;
      if (openKey) closeAll(false);
      lastFocus = document.activeElement;
      pv.hidden = false;
      pv.setAttribute('aria-hidden', 'false');
      document.body.classList.add('pageview-open');
      openKey = key;
      var sc = pv.querySelector('.pageview-scroll');
      if (sc) sc.scrollTop = 0;
      if (push && location.hash !== '#' + key) location.hash = key;
      var btn = pv.querySelector('.pageview-close');
      if (btn) btn.focus();
    }
    document.querySelectorAll('[data-open-page]').forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault(); e.stopPropagation();
        open(b.getAttribute('data-open-page'), true);
      });
    });
    document.querySelectorAll('.pageview-close').forEach(function (b) {
      b.addEventListener('click', function () { closeAll(true); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && openKey) closeAll(true);
    });
    function syncToHash() {
      var key = location.hash.replace('#', '');
      if (panels[key]) open(key, false); else closeAll(false);
    }
    window.addEventListener('hashchange', syncToHash);
    syncToHash();   // deep link: /#supply-chain lands straight in the view
  })();
  /* Hero calls to action.

     These used to fade and jump instantly. That was removed: the jump
     called ScrollTrigger.refresh() from the middle of the page, which
     recalculates every pin's start and end against the current scroll
     position and left the hero unable to restore itself on the way back
     up. A plain scroll costs nothing and keeps the pins honest.

     Sits outside the GSAP block so it still works with animations off. */
  (function () {
    var links = [].slice.call(document.querySelectorAll('.ctas a[href^="#"]'));
    if (!links.length) return;

    links.forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href').slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        /* Once the scroll settles, ask the thread to play its entrance.
           Waiting matters — fired immediately the animation would run
           while the section is still off screen. */
        if (id === 'story') {
          var idle = null;
          function settled() {
            window.removeEventListener('scroll', onScroll);
            document.dispatchEvent(new CustomEvent('insu:show-thread'));
          }
          function onScroll() {
            clearTimeout(idle);
            idle = setTimeout(settled, 140);
          }
          window.addEventListener('scroll', onScroll, { passive: true });
          idle = setTimeout(settled, 1200);   // in case no scroll fires at all
        }
      });
    });
  })();

  /* Nuggets: SCM facts on a timer.
     Pauses on hover and on focus, and while the tab is hidden — a timer
     that keeps running in a background tab means you return to a card
     that changed without you, and the progress bar lies about when the
     next one is due. */
  (function () {
    var box = document.querySelector('[data-nugbox]');
    if (!box) return;
    var cards = [].slice.call(box.querySelectorAll('.nug'));
    var dots = [].slice.call(box.querySelectorAll('.nug-dot'));
    var fill = box.querySelector('[data-nug-fill]');
    var pauseBtn = box.querySelector('[data-nug-pause]');
    if (cards.length < 2) return;

    var HOLD = 7000;
    var i = 0, t0 = 0, elapsed = 0, paused = false, manual = false, raf = null;
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function show(n) {
      var prev = i;
      i = (n + cards.length) % cards.length;
      /* The outgoing card needs its own class: with only on/off it would
         snap back to the incoming side instead of leaving to the left. */
      cards.forEach(function (c, k) {
        c.classList.toggle('is-on', k === i);
        c.classList.toggle('is-out', k === prev && prev !== i);
      });
      dots.forEach(function (d, k) { d.classList.toggle('is-on', k === i); });
      elapsed = 0; t0 = performance.now();
    }

    function tick(now) {
      raf = requestAnimationFrame(tick);
      if (paused || manual) { t0 = now - elapsed; return; }
      elapsed = now - t0;
      if (fill) fill.style.width = Math.min(100, (elapsed / HOLD) * 100) + '%';
      if (elapsed >= HOLD) { show(i + 1); if (fill) fill.style.width = '0%'; }
    }

    function setPaused(v) {
      paused = v;
      if (pauseBtn) pauseBtn.textContent = v ? 'Play' : 'Pause';
    }

    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        show(parseInt(d.getAttribute('data-nug-go'), 10) || 0);
        if (fill) fill.style.width = '0%';
      });
    });
    if (pauseBtn) pauseBtn.addEventListener('click', function () { setPaused(!paused); });

    /* Hovering or tabbing in means someone is reading it. */
    box.addEventListener('mouseenter', function () { manual = true; });
    box.addEventListener('mouseleave', function () { manual = false; });
    box.addEventListener('focusin', function () { manual = true; });
    box.addEventListener('focusout', function () { manual = false; });
    document.addEventListener('visibilitychange', function () {
      manual = document.hidden;
    });

    show(0);
    if (!reduce) { t0 = performance.now(); raf = requestAnimationFrame(tick); }
    else if (pauseBtn) { pauseBtn.hidden = true; }
  })();

  function splitChars(el) {
    var text = el.textContent;
    el.setAttribute('aria-label', text);
    var html = '';
    text.split('').forEach(function (ch) {
      html += ch === ' ' ? ' ' : '<span class="ch" aria-hidden="true">' + ch + '</span>';
    });
    el.innerHTML = html;
  }
  ['.mark-text', '#hlAccent', '#hlPlus', '#hlMain'].forEach(function (sel) {
    var el = document.querySelector(sel);
    if (el) splitChars(el);
  });
  (function () {
    var wrap = document.getElementById('heroNetwork');
    if (!wrap) return;
    var svgNS = 'http://www.w3.org/2000/svg';
    var W = 1000, H = 420;
    var svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.setAttribute('aria-hidden', 'true');
    var N = 24;
    var pts = [];
    for (var i = 0; i < N; i++) {
      pts.push({
        x: 520 + Math.random() * 450,
        y: 20 + Math.random() * 380,
        pkg: i % 5 === 0 // every 5th node reads as a "package" node
      });
    }
    var lineFrag = document.createDocumentFragment();
    var pairs = [];
    for (var a = 0; a < pts.length; a++) {
      var linked = 0;
      for (var b = a + 1; b < pts.length && linked < 2; b++) {
        var dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y;
        if (Math.sqrt(dx * dx + dy * dy) < 130) {
          var line = document.createElementNS(svgNS, 'line');
          line.setAttribute('class', 'net-line');
          line.setAttribute('x1', pts[a].x); line.setAttribute('y1', pts[a].y);
          line.setAttribute('x2', pts[b].x); line.setAttribute('y2', pts[b].y);
          lineFrag.appendChild(line);
          pairs.push([a, b]);
          linked++;
        }
      }
    }
    svg.appendChild(lineFrag);
    var nodeFrag = document.createDocumentFragment();
    pts.forEach(function (p) {
      var el;
      if (p.pkg) {
        el = document.createElementNS(svgNS, 'rect');
        el.setAttribute('x', p.x - 4); el.setAttribute('y', p.y - 4);
        el.setAttribute('width', 8); el.setAttribute('height', 8);
        el.setAttribute('rx', 2);
        el.setAttribute('class', 'net-node net-node-square');
      } else {
        el = document.createElementNS(svgNS, 'circle');
        el.setAttribute('cx', p.x); el.setAttribute('cy', p.y);
        el.setAttribute('r', 3.2);
        el.setAttribute('class', 'net-node net-node-circle');
      }
      el.style.animationDelay = (Math.random() * 3.6).toFixed(2) + 's';
      nodeFrag.appendChild(el);
    });
    svg.appendChild(nodeFrag);
    var pulseCount = Math.min(6, pairs.length);
    for (var p = 0; p < pulseCount; p++) {
      var pair = pairs[(p * 7) % pairs.length];
      var A = pts[pair[0]], B = pts[pair[1]];
      var dot = document.createElementNS(svgNS, 'circle');
      dot.setAttribute('r', 2.6);
      dot.setAttribute('class', 'net-pulse');
      var dur = (3 + Math.random() * 2).toFixed(1) + 's';
      var moveEl = document.createElementNS(svgNS, 'animateMotion');
      moveEl.setAttribute('dur', dur);
      moveEl.setAttribute('repeatCount', 'indefinite');
      moveEl.setAttribute('path', 'M' + A.x + ',' + A.y + ' L' + B.x + ',' + B.y);
      var fadeEl = document.createElementNS(svgNS, 'animate');
      fadeEl.setAttribute('attributeName', 'opacity');
      fadeEl.setAttribute('values', '0;1;1;0');
      fadeEl.setAttribute('keyTimes', '0;0.15;0.85;1');
      fadeEl.setAttribute('dur', dur);
      fadeEl.setAttribute('repeatCount', 'indefinite');
      dot.appendChild(moveEl);
      dot.appendChild(fadeEl);
      svg.appendChild(dot);
    }
    wrap.appendChild(svg);
  })();
  (function () {
    var glow = document.getElementById('scrollGlow');
    if (!glow) return;
    document.body.appendChild(glow);
    var reduceMotionGlow = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotionGlow || isStaticMode) return;
    var idleTimer = null;
    window.addEventListener('scroll', function () {
      glow.classList.add('is-active');
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () {
        glow.classList.remove('is-active');
      }, 220);
    }, { passive: true });
  })();
  function revealStatic() {
    document.documentElement.classList.add('static-mode');
  }
  if (isStaticMode) {
    revealStatic();
    return;
  }
  if (!window.gsap) {
    revealStatic();
    return;
  }
  try {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      revealStatic();
      return;
    }
    function liftToBody(el) {
      if (el && el.parentNode !== document.body) document.body.appendChild(el);
      return el;
    }
    function firePulse(linkEl, reverse, duration) {
      if (!linkEl) return;
      var dot = linkEl.querySelector('.who-pulse');
      if (!dot) return;
      var vertical = linkEl.offsetHeight > linkEl.offsetWidth;
      var axis = vertical ? 'top' : 'left';
      duration = duration || 0.55;
      gsap.killTweensOf(dot);
      gsap.fromTo(dot,
        { opacity: 0 }, {
          opacity: 1, duration: duration * 0.4, ease: 'sine.out',
          onComplete: function () { gsap.to(dot, { opacity: 0, duration: duration * 0.4 }); }
        });
      var fromVal = {}, toVal = {};
      fromVal[axis] = reverse ? '100%' : '0%';
      toVal[axis] = reverse ? '0%' : '100%';
      toVal.duration = duration; toVal.ease = 'power1.inOut';
      gsap.fromTo(dot, fromVal, toVal);
      gsap.fromTo(linkEl,
        { backgroundColor: 'rgba(143,209,193,0.15)' },
        { backgroundColor: 'rgba(143,209,193,0.65)', duration: duration * 0.5, yoyo: true, repeat: 1, ease: 'sine.inOut' });
    }
    var r1 = document.getElementById('r1');
    var r1DeltaX = 0, r1DeltaY = 0;
    if (r1) {
      var r1Rect = r1.getBoundingClientRect();
      var spacer = r1.cloneNode(true);
      spacer.removeAttribute('id');
      spacer.style.visibility = 'hidden';
      spacer.setAttribute('aria-hidden', 'true');
      r1.parentNode.insertBefore(spacer, r1);
      r1.style.position = 'fixed';
      r1.style.top = r1Rect.top + 'px';
      r1.style.left = r1Rect.left + 'px';
      r1.style.margin = '0';
      r1.style.zIndex = '200';
      document.body.appendChild(r1);
      var isMobile = window.innerWidth <= 820;
      var dockedTop = isMobile ? 14 : 20;
      var dockedLeft = isMobile ? 14 : 24;
      r1DeltaX = dockedLeft - r1Rect.left;
      r1DeltaY = dockedTop - r1Rect.top;
    }
    gsap.set('#heroBgZoom', { opacity: 0, scale: 1.15 });
    gsap.set('#r1', { opacity: 0 });
    gsap.set('#hlAccent', { opacity: 0, scale: 0.72, y: 10 });
    gsap.set('#hlPlus', { opacity: 0 });
    gsap.set('#hlMain', { opacity: 0, y: 16 });
    gsap.set(['#r3', '#r4'], { opacity: 0, y: 14 });
    var tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.to('#heroBgZoom', { opacity: 1, scale: 1.06, duration: 1.1, ease: 'power2.out' }, 0);
    tl.to('#r1', { opacity: 1, duration: 0.45 }, 0.85);
    tl.to('#hlAccent', { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.8)' }, 1.05);
    tl.to('#hlPlus', { opacity: 1, duration: 0.3 }, 1.35);
    tl.to('#hlMain', { opacity: 1, y: 0, duration: 0.5 }, 1.3);
    tl.to(['#r3', '#r4'], { opacity: 1, y: 0, duration: 0.5, stagger: 0.09 }, 1.85);
    gsap.to('#heroBgZoom', {
      scale: 1.13,
      duration: 9,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      delay: 1.1
    });
    if (window.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: '+=90%',
          scrub: 0.6,
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          refreshPriority: 2
        }
      })
        .fromTo('#r1', { x: 0, y: 0 }, { x: r1DeltaX, y: r1DeltaY, duration: 0.5 }, 0)
        .fromTo(['#r3', '#r4'], { y: 0, opacity: 1 }, { y: -40, opacity: 0, duration: 0.35 }, 0)
        .fromTo('#heroScrollZoom', { scale: 1 }, { scale: 1.8, duration: 0.55 }, 0.15)
        .fromTo('.hl-row', { opacity: 1 }, { opacity: 0, duration: 0.35 }, 0.3)
        .fromTo('.hero-scrim', { opacity: 1 }, { opacity: 0.22, duration: 0.4 }, 0.35)
        .fromTo('#heroWhitewash', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 0)
        .fromTo('#r1 .mark-text', { color: 'rgba(234,246,242,0.82)' }, { color: '#22292B', duration: 0.5 }, 0);
    }
    /* The docked brandmark sits over whatever section happens to be
       under it, and the page alternates light and dark. The hero
       timeline hands it over dark at the end of the hero; from there
       this keeps it readable.

       It adopts each band's own computed text colour, so it follows
       whatever the stylesheet resolves to — including any dark-mode
       overrides — without duplicating that logic here. */
    (function () {
      var mark = document.querySelector('#r1');
      var text = document.querySelector('#r1 .mark-text');
      if (!mark || !text) return;
      var bands = [].slice.call(document.querySelectorAll('.page-section, .site-footer'));
      if (!bands.length) return;

      /* Each band already declares the text colour that reads against
         its own background (#EAF6F2 on dark, #22292B on light), so the
         mark simply adopts it.

         Do NOT go via backgroundColor: the dark and tint sections use
         linear-gradient backgrounds, so backgroundColor computes to
         rgba(0,0,0,0) and every section looks light. */
      var last = null, queued = false;
      function update() {
        queued = false;
        var r = mark.getBoundingClientRect();
        var probe = r.top + r.height / 2;
        var band = null;
        for (var i = 0; i < bands.length; i++) {
          var b = bands[i].getBoundingClientRect();
          if (b.top <= probe && b.bottom >= probe) { band = bands[i]; break; }
        }
        /* No band under the mark means we are still in the hero, where
           the pinned timeline owns the colour. Leave it alone. */
        if (!band) { last = null; return; }

        var c = getComputedStyle(band).color;
        if (c === last) return;
        last = c;
        text.style.color = c;
      }

      function onScroll() {
        if (queued) return;
        queued = true;
        requestAnimationFrame(update);
      }
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      /* Re-check when the colour scheme flips under us. */
      if (window.matchMedia) {
        var mq = window.matchMedia('(prefers-color-scheme: dark)');
        if (mq.addEventListener) mq.addEventListener('change', function () { last = null; onScroll(); });
      }
      update();
    })();

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      gsap.set(el, { opacity: 0, y: 12 });
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
    document.querySelectorAll('[data-reveal-list]').forEach(function (wrap) {
      var kids = wrap.children;
      if (!kids.length) return;
      gsap.set(kids, { opacity: 0, y: 10 });
      gsap.to(kids, {
        opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out',
        scrollTrigger: { trigger: wrap, start: 'top 86%', once: true }
      });
    });
    document.querySelectorAll('[data-flow]').forEach(function (wrap) {
      var nodes = wrap.querySelectorAll('.who-node');
      var links = wrap.querySelectorAll('.who-link');
      if (!nodes.length) return;
      gsap.set(nodes, { opacity: 0, y: 8, scale: 0.94 });
      var tl = gsap.timeline({
        scrollTrigger: { trigger: wrap, start: 'top 85%', once: true }
      });
      nodes.forEach(function (n, i) {
        tl.to(n, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'back.out(1.7)' }, i * 0.14);
        if (links[i]) {
          tl.call(function () { firePulse(links[i], false, 0.42); }, null, i * 0.14 + 0.18);
        }
      });
    });
    document.querySelectorAll('[data-rail]').forEach(function (rail) {
      var steps = rail.querySelectorAll('.rail-step');
      if (!steps.length) return;
      gsap.set(steps, { opacity: 0, x: -14 });
      gsap.fromTo(rail,
        { '--rail-scale': 0 },
        {
          '--rail-scale': 1, duration: steps.length * 0.22, ease: 'none',
          scrollTrigger: { trigger: rail, start: 'top 80%', once: true }
        });
      gsap.to(steps, {
        opacity: 1, x: 0, duration: 0.45, stagger: 0.22, ease: 'power2.out',
        scrollTrigger: { trigger: rail, start: 'top 80%', once: true }
      });
    });
    var ttiBlock = document.getElementById('ttiBlock');
    var ttiCore = document.getElementById('ttiCore');
    if (ttiBlock && ttiCore) {
      var arms = ttiBlock.querySelectorAll('.tti-arm');
      gsap.set(arms, { opacity: 0, y: 18 });
      gsap.set(ttiCore, { opacity: 0, scale: 0.8 });
      gsap.timeline({
        scrollTrigger: { trigger: ttiBlock, start: 'top 78%', once: true }
      })
        .to(arms, { opacity: 1, y: 0, duration: 0.5, stagger: 0.14, ease: 'power2.out' }, 0)
        .to(ttiCore, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)' }, 0.75);
    }
    ['#solutionset','#shift','#supplychain','#workflow','#approach',
     '#solutions','#industries','#expect','#whyus','#contact']
      .forEach(function (sel) {
        var sec = document.querySelector(sel);
        if (!sec) return;
        var inner = sec.querySelector('.section-inner');
        if (!inner) return;
        gsap.timeline({
          scrollTrigger: { trigger: sec, start: 'top 88%', end: 'bottom 12%', scrub: 0.9 }
        })
          .fromTo(inner,
            { y: 40, scale: 0.965, opacity: 0.4, filter: 'blur(2.5px)' },
            { y: 0, scale: 1, opacity: 1, filter: 'blur(0px)', ease: 'power2.out', duration: 0.3 })
          .to(inner, { duration: 0.45 })   // hold: sharp, full size, full opacity
          .to(inner,
            { y: -40, scale: 0.98, opacity: 0.4, filter: 'blur(2px)', ease: 'power2.in', duration: 0.3 });
      });
    var vessel = document.getElementById('vessel');
    if (vessel) {
      var NS = 'http://www.w3.org/2000/svg';
      var W = 200, H = 230, CX = 100, CY = 116;
      var RINGS = 22, MERIDIANS = 18, SQUASH = 0.26, RMAX = 62;
      function radiusAt(t) {
        var pts = [[0,0.34],[0.12,0.30],[0.28,0.55],[0.45,0.86],[0.60,1.0],[0.78,0.88],[0.92,0.58],[1,0.44]];
        for (var i = 1; i < pts.length; i++) {
          if (t <= pts[i][0]) {
            var a = pts[i-1], b = pts[i];
            var k = (t - a[0]) / (b[0] - a[0]);
            k = k * k * (3 - 2 * k); // smoothstep, so the silhouette has no kinks
            return (a[1] + (b[1] - a[1]) * k) * RMAX;
          }
        }
        return pts[pts.length-1][1] * RMAX;
      }
      function heightAt(t) { return CY - H * 0.42 + t * H * 0.84; }
      var svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.setAttribute('aria-hidden', 'true');
      var frag = document.createDocumentFragment();
      for (var i = 0; i <= RINGS; i++) {
        var t = i / RINGS, r = radiusAt(t);
        var el = document.createElementNS(NS, 'ellipse');
        el.setAttribute('class', 'vessel-ring');
        el.setAttribute('cx', CX); el.setAttribute('cy', heightAt(t).toFixed(2));
        el.setAttribute('rx', r.toFixed(2)); el.setAttribute('ry', (r * SQUASH).toFixed(2));
        frag.appendChild(el);
      }
      var meridians = [];
      for (var m = 0; m < MERIDIANS; m++) {
        var p = document.createElementNS(NS, 'path');
        p.setAttribute('class', 'vessel-meridian');
        frag.appendChild(p);
        meridians.push(p);
      }
      var halo = document.createElementNS(NS, 'circle');
      halo.setAttribute('class', 'vessel-halo');
      halo.setAttribute('cx', CX); halo.setAttribute('cy', CY); halo.setAttribute('r', 9);
      var core = document.createElementNS(NS, 'circle');
      core.setAttribute('class', 'vessel-core');
      core.setAttribute('cx', CX); core.setAttribute('cy', CY); core.setAttribute('r', 2.6);
      frag.appendChild(halo); frag.appendChild(core);
      svg.appendChild(frag);
      vessel.appendChild(svg);
      var STEPS = 26;
      function drawMeridians(phase) {
        for (var m = 0; m < MERIDIANS; m++) {
          var ang = phase + (m / MERIDIANS) * Math.PI * 2;
          var d = '', depthSum = 0;
          for (var s = 0; s <= STEPS; s++) {
            var t = s / STEPS, r = radiusAt(t);
            var x = CX + r * Math.cos(ang);
            var y = heightAt(t) + r * Math.sin(ang) * SQUASH;
            d += (s ? 'L' : 'M') + x.toFixed(2) + ' ' + y.toFixed(2);
            depthSum += Math.sin(ang);
          }
          meridians[m].setAttribute('d', d);
          var facing = depthSum / (STEPS + 1);
          meridians[m].setAttribute('opacity', (0.10 + 0.30 * (facing + 1) / 2).toFixed(3));
        }
      }
      drawMeridians(0);
      gsap.timeline({
        scrollTrigger: { trigger: '#workflow', start: 'top bottom', end: 'bottom top', scrub: 1 }
      })
        .fromTo(vessel, { opacity: 0 }, { opacity: 0.85, duration: 0.25, ease: 'none' })
        .to(vessel, { opacity: 0.85, duration: 0.5, ease: 'none' })
        .to(vessel, { opacity: 0, duration: 0.25, ease: 'none' });
      ScrollTrigger.create({
        trigger: '#workflow', start: 'top bottom', end: 'bottom top', scrub: 1,
        onUpdate: function (self) { drawMeridians(self.progress * Math.PI * 2.2); }
      });
    }
    var thread = document.getElementById('thread');
    var track  = document.getElementById('threadTrack');
    if (thread && track) {
      var cards = [].slice.call(track.querySelectorAll('.thread-card'));
      var path  = document.getElementById('threadPath');
      var bead  = document.getElementById('threadBead');
      var pulse = document.getElementById('threadPulse');
      var line  = document.getElementById('threadLine');
      var pillars = [].slice.call(document.querySelectorAll('.pillar'));
      var hint  = document.getElementById('threadHint');
      if (cards.length > 1) {
        thread.classList.add('is-live');
        var idx = 0, step = 0, maxShift = 0;
        var dragging = false, startX = 0, startShift = 0, shift = 0, pull = 0;
        function measure() {
          var a = cards[0].getBoundingClientRect();
          var b = cards[1].getBoundingClientRect();
          step = b.left - a.left;
          maxShift = Math.max(0, track.scrollWidth - track.parentNode.clientWidth);
        }
        function clampShift(v) { return Math.max(-maxShift, Math.min(0, v)); }
        function drawThread() {
          if (!path) return;
          var cx = 500 + pull * 26;
          var sag = Math.abs(pull) * 16;
          path.setAttribute('d', 'M 0 32 Q ' + cx.toFixed(1) + ' ' + (32 + sag).toFixed(1) + ' 1000 32');
          if (bead && line) {
            var span = line.clientWidth;
            var t = maxShift > 0 ? (-shift / maxShift) : 0;
            bead.style.left = (t * span) + 'px';
            bead.style.transform = 'translateY(' + (sag * 0.5).toFixed(1) + 'px)';
          }
        }
        function apply() { gsap.set(track, { x: shift }); drawThread(); }
        function markActive() {
          cards.forEach(function (c, i) { c.classList.toggle('is-front', i === idx); });
          pillars.forEach(function (p, i) { p.classList.toggle('is-on', i === idx); });
        }
        function firePulseAlongThread() {
          if (!pulse) return;
          gsap.killTweensOf(pulse);
          gsap.fromTo(pulse, { attr: { cx: 0 }, opacity: 0 },
            { attr: { cx: 1000 }, opacity: 1, duration: 0.5, ease: 'power1.inOut',
              onComplete: function () { gsap.to(pulse, { opacity: 0, duration: 0.2 }); } });
        }
        function goTo(i, quiet) {
          idx = Math.max(0, Math.min(cards.length - 1, i));
          shift = clampShift(-idx * step);
          gsap.to(track, { x: shift, duration: 0.85, ease: 'elastic.out(1, 0.62)' });
          gsap.to({ v: pull }, {
            v: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)',
            onUpdate: function () { pull = this.targets()[0].v; drawThread(); },
            onComplete: function () { pull = 0; drawThread(); }
          });
          markActive();
          if (!quiet) firePulseAlongThread();
        }
        function onDown(e) {
          dragging = true;
          startX = e.clientX;
          startShift = shift;
          track.classList.add('is-dragging');
          if (bead) bead.classList.add('is-pulled');
          gsap.killTweensOf(track);
          if (e.target.setPointerCapture) { try { e.target.setPointerCapture(e.pointerId); } catch (err) {} }
        }
        function onMove(e) {
          if (!dragging) return;
          var dx = e.clientX - startX;
          var raw = startShift + dx;
          if (raw > 0) raw = raw * 0.33;
          else if (raw < -maxShift) raw = -maxShift + (raw + maxShift) * 0.33;
          shift = raw;
          pull = Math.max(-1, Math.min(1, dx / 240));
          apply();
        }
        function onUp() {
          if (!dragging) return;
          dragging = false;
          track.classList.remove('is-dragging');
          if (bead) bead.classList.remove('is-pulled');
          goTo(step ? Math.round(-shift / step) : 0);
        }
        track.addEventListener('pointerdown', onDown);
        if (bead) bead.addEventListener('pointerdown', onDown);
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onUp);
        window.addEventListener('pointercancel', onUp);
        cards.forEach(function (c) {
          c.addEventListener('click', function (e) {
            if (Math.abs(shift - startShift) > 6) { e.preventDefault(); e.stopPropagation(); }
          }, true);
        });
        if (bead) {
          bead.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowRight') { e.preventDefault(); goTo(idx + 1); }
            if (e.key === 'ArrowLeft')  { e.preventDefault(); goTo(idx - 1); }
          });
        }
        (function () {
          if (!window.ScrollTrigger) return;
          var eyebrow = document.getElementById('threadEyebrow');
          var heading = document.getElementById('threadHeading');
          var textBits = [eyebrow, heading].filter(Boolean);
          var pillarGroups = [].slice.call(document.querySelectorAll('.pillar-group'));
          if (textBits.length) gsap.set(textBits, { opacity: 0, scale: 0.72, filter: 'blur(14px)' });
          if (pillarGroups.length) gsap.set(pillarGroups, { opacity: 0, filter: 'blur(12px)' });
          gsap.set(cards, { opacity: 0, x: 150 });
          if (line) gsap.set(line, { opacity: 0 });
          if (bead) gsap.set(bead, { opacity: 0 });
          if (hint) gsap.set(hint, { opacity: 0 });
          var tension = { v: 0 };
          function syncThread() { pull = tension.v; drawThread(); }
          var entrance = gsap.timeline({ paused: true })
            .to(textBits.length ? textBits : {}, {
              opacity: 1, scale: 1, filter: 'blur(0px)',
              duration: 1.0, stagger: 0.1, ease: 'power3.out'
            }, 0)
            .to([line, bead].filter(Boolean), { opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.55)
            .to(tension, { v: 0.85, duration: 0.4, ease: 'power2.out', onUpdate: syncThread }, 0.6)
            .to(cards, {
              opacity: 1, x: 0, duration: 1.0, stagger: 0.42, ease: 'power3.out'
            }, 0.8)
            .to(pillarGroups.length ? pillarGroups : {}, {
              opacity: 1, filter: 'blur(0px)', duration: 0.75, stagger: 0.42, ease: 'power2.out'
            }, 1.0)
            .to(tension, { v: 0, duration: 1.0, ease: 'elastic.out(1, 0.55)', onUpdate: syncThread }, 2.1)
            .add(function () { firePulseAlongThread(); }, 2.2)
            .add(function () { markActive(); }, 2.35)
            .to(hint || {}, { opacity: 1, duration: 0.4 }, 2.5);
          ScrollTrigger.create({
            trigger: '#story',
            start: 'top top',
            end: '+=130%',
            pin: true,
            anticipatePin: 1,
            refreshPriority: 1,   // second pin down the page — see hero above
            onEnter: function () { entrance.play(); },
            onEnterBack: function () { entrance.play(); }
          });

          /* The hero's "See Our Services" button lands here, and the
             entrance has usually already run — play() on a finished
             timeline does nothing. Restart it so the slider arrives the
             same way it does when you scroll down to it. */
          document.addEventListener('insu:show-thread', function () {
            entrance.restart();
          });
        })();
        measure();
        goTo(0, true);
        window.addEventListener('resize', function () { measure(); goTo(idx, true); });
      }
    }
    document.querySelectorAll('[data-agent]').forEach(function (card) {
      var qEl = card.querySelector('.agent-typed');
      var qRow = card.querySelector('.agent-q');
      var aEl = card.querySelector('.agent-a');
      if (!qEl || !aEl || !window.ScrollTrigger) return;
      var question = qEl.getAttribute('data-q') || '';
      var answer = aEl.getAttribute('data-a') || '';
      var tmp = document.createElement('textarea');
      tmp.innerHTML = answer;
      answer = tmp.value;
      ScrollTrigger.create({
        trigger: card,
        start: 'top 75%',
        once: true,
        onEnter: function () {
          var i = 0;
          if (qRow) qRow.classList.add('is-typing');
          var typer = setInterval(function () {
            qEl.textContent = question.slice(0, ++i);
            if (i >= question.length) {
              clearInterval(typer);
              if (qRow) qRow.classList.remove('is-typing');
              aEl.classList.add('is-thinking');
              setTimeout(function () {
                aEl.classList.remove('is-thinking');
                var words = answer.split(' '), w = 0;
                var streamer = setInterval(function () {
                  aEl.textContent = words.slice(0, ++w).join(' ');
                  if (w >= words.length) clearInterval(streamer);
                }, 55);
              }, 620);
            }
          }, 34);
        }
      });
    });
    /* Document reader + request popup.
       Clicking a card opens a full-page reader: page one in full, page
       two cut off half way under a blur, then a request block. Triggers
       carry a document id, never a file URL — the PDF is not linked from
       this page and is not in the public asset repo. */
    (function () {
      var GATE_ENDPOINT = '/_functions/caseStudyRequest';
      var CDN = 'https://prajwal434.github.io/insu-assets/img/read/';
      var DOCS = {
        'BTS-001': { slug: 'bts001', title: 'Healthcare Supply Chain Transformation' },
        'BTS-002': { slug: 'bts002', title: 'FMCG Demand-Driven Supply Chain Planning' },
        'BTS-003': { slug: 'bts003', title: 'Intelligent Demand Planning for Discrete Manufacturing' },
        'BTS-004': { slug: 'bts004', title: 'Intelligent Supply Planning for Process Manufacturing' },
        'BTS-005': { slug: 'bts005', title: 'Enterprise Planning Transformation' }
      };

      var reader = document.querySelector('[data-docread]');
      var gate = document.querySelector('[data-docgate]');
      var triggers = [].slice.call(document.querySelectorAll('[data-doc-id]'));
      if (!reader || !triggers.length) return;

      /* Both are position:fixed, so neither may sit under a transformed
         ancestor — that becomes its containing block and traps it inside
         the panel. */
      if (reader.parentNode !== document.body) document.body.appendChild(reader);
      if (gate && gate.parentNode !== document.body) document.body.appendChild(gate);

      var p1 = reader.querySelector('[data-docread-p1]');
      var p2 = reader.querySelector('[data-docread-p2]');
      var rCode = reader.querySelector('[data-docread-code]');
      var rTitle = reader.querySelector('[data-docread-title]');
      var rScroll = reader.querySelector('[data-docread-scroll]');
      var current = null, lastFocus = null;

      function openReader(id) {
        var d = DOCS[id];
        if (!d) return;
        current = id;
        lastFocus = document.activeElement;
        if (p1) { p1.src = CDN + d.slug + '-1.jpg'; p1.alt = id + ' page 1'; }
        if (p2) { p2.src = CDN + d.slug + '-2.jpg'; p2.alt = id + ' page 2, partial'; }
        if (rCode) rCode.textContent = id;
        if (rTitle) rTitle.textContent = d.title;
        reader.hidden = false;
        reader.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (rScroll) rScroll.scrollTop = 0;
        var back = reader.querySelector('[data-docread-back]');
        if (back) back.focus();
      }
      function closeReader() {
        if (reader.hidden) return;
        reader.hidden = true;
        reader.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (p1) p1.src = '';
        if (p2) p2.src = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus();
      }

      triggers.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();
          openReader(el.getAttribute('data-doc-id'));
        });
      });
      var backBtn = reader.querySelector('[data-docread-back]');
      if (backBtn) backBtn.addEventListener('click', closeReader);

      /* ---- request popup ---- */
      var form, input, btn, msg, gCode, gTitle;
      if (gate) {
        form = gate.querySelector('[data-docgate-form]');
        input = gate.querySelector('.docgate-input');
        btn = gate.querySelector('.docgate-btn');
        msg = gate.querySelector('[data-docgate-msg]');
        gCode = gate.querySelector('[data-docgate-code]');
        gTitle = gate.querySelector('[data-docgate-title]');
      }
      function openGate() {
        if (!gate || !current) return;
        if (gCode) gCode.textContent = current;
        if (gTitle) gTitle.textContent = (DOCS[current] || {}).title || '';
        if (msg) { msg.hidden = true; msg.textContent = ''; }
        if (form) form.hidden = false;
        if (btn) { btn.disabled = false; btn.textContent = 'Send me the document'; }
        if (input) input.value = '';
        gate.hidden = false;
        gate.setAttribute('aria-hidden', 'false');
        var c = gate.querySelector('[data-docgate-close]');
        if (c) c.focus();
      }
      function closeGate() {
        if (!gate || gate.hidden) return;
        gate.hidden = true;
        gate.setAttribute('aria-hidden', 'true');
      }
      var reqBtn = reader.querySelector('[data-docread-request]');
      if (reqBtn) reqBtn.addEventListener('click', openGate);
      if (gate) {
        var gc = gate.querySelector('[data-docgate-close]');
        if (gc) gc.addEventListener('click', closeGate);
        gate.addEventListener('click', function (e) { if (e.target === gate) closeGate(); });
      }
      /* Escape closes the popup first, then the reader. */
      document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (gate && !gate.hidden) { closeGate(); return; }
        closeReader();
      });

      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          if (!input || !input.value || input.validity.valid === false) return;
          var email = input.value.trim();
          if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
          function done(text) {
            form.hidden = true;
            if (msg) { msg.innerHTML = text; msg.hidden = false; }
          }
          fetch(GATE_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, study: current })
          }).then(function (r) {
            if (!r.ok) throw new Error('endpoint returned ' + r.status);
            done('Sent. Check your inbox for ' + current + '.');
          }).catch(function () {
            /* The endpoint does not exist yet. Never let a form swallow a
               request silently — name a real address. */
            done('We could not send it automatically yet. Email ' +
                 '<a href="mailto:info@insudynamics.com?subject=' +
                 encodeURIComponent(current + ' request') + '">info@insudynamics.com</a>' +
                 ' and we will reply with the document.');
          });
        });
      }
    })();

    /* Case-study deck — the same interaction as the thread carousel on
       the home page: drag the cards or pull the bead, elastic snap,
       pulse along the line. Kept as its own instance because the thread
       is wired to the pillar headings and this is not. */
    (function () {
      var deck = document.getElementById('caseDeck');
      var track = document.getElementById('caseTrack');
      if (!deck || !track) return;
      var cards = [].slice.call(track.querySelectorAll('.scs-case'));
      if (cards.length < 2) return;

      var path = document.getElementById('casePath');
      var pulse = document.getElementById('casePulse');
      var bead = document.getElementById('caseBead');
      var line = document.getElementById('caseLine');

      deck.classList.add('is-live');
      var idx = 0, step = 0, maxShift = 0;
      var dragging = false, startX = 0, startShift = 0, shift = 0, pull = 0, moved = 0;

      function measure() {
        var first = cards[0].getBoundingClientRect();
        var last = cards[cards.length - 1].getBoundingClientRect();
        step = cards[1].getBoundingClientRect().left - first.left;
        /* Measure from the cards themselves rather than track.scrollWidth:
           the track is overflow:visible so it is not a scroll container,
           and scrollWidth then reports its own width, not the content's —
           which came back as zero travel and pinned the deck in place.
           Both rects sit inside the same transform, so the difference is
           correct whatever the current offset. */
        var content = last.right - first.left;
        maxShift = Math.max(0, Math.round(content - track.parentNode.clientWidth));
      }
      function clampShift(v) { return Math.max(-maxShift, Math.min(0, v)); }
      function drawLine() {
        if (!path) return;
        var cx = 500 + pull * 26, sag = Math.abs(pull) * 16;
        path.setAttribute('d', 'M 0 32 Q ' + cx.toFixed(1) + ' ' + (32 + sag).toFixed(1) + ' 1000 32');
        if (bead && line) {
          var span = line.clientWidth;
          var t = maxShift > 0 ? (-shift / maxShift) : 0;
          bead.style.left = (t * span) + 'px';
          bead.style.transform = 'translateY(' + (sag * 0.5).toFixed(1) + 'px)';
        }
      }
      function markFront() {
        cards.forEach(function (c, i) { c.classList.toggle('is-front', i === idx); });
      }
      function firePulse() {
        if (!pulse || !window.gsap) return;
        gsap.killTweensOf(pulse);
        gsap.fromTo(pulse, { attr: { cx: 0 }, opacity: 0 },
          { attr: { cx: 1000 }, opacity: 1, duration: .5, ease: 'power1.inOut',
            onComplete: function () { gsap.to(pulse, { opacity: 0, duration: .2 }); } });
      }
      function apply() {
        if (window.gsap) gsap.set(track, { x: shift });
        else track.style.transform = 'translateX(' + shift + 'px)';
        drawLine();
      }
      function goTo(i, quiet) {
        idx = Math.max(0, Math.min(cards.length - 1, i));
        shift = clampShift(-idx * step);
        if (window.gsap) {
          gsap.to(track, { x: shift, duration: .85, ease: 'elastic.out(1, 0.62)' });
          gsap.to({ v: pull }, { v: 0, duration: .7, ease: 'elastic.out(1, 0.5)',
            onUpdate: function () { pull = this.targets()[0].v; drawLine(); },
            onComplete: function () { pull = 0; drawLine(); } });
        } else { apply(); }
        markFront();
        if (!quiet) firePulse();
      }
      function onDown(e) {
        dragging = true; moved = 0;
        startX = e.clientX; startShift = shift;
        track.classList.add('is-dragging');
        if (window.gsap) gsap.killTweensOf(track);
        if (e.target.setPointerCapture) { try { e.target.setPointerCapture(e.pointerId); } catch (err) {} }
      }
      function onMove(e) {
        if (!dragging) return;
        var dx = e.clientX - startX;
        moved = Math.abs(dx);
        var raw = startShift + dx;
        if (raw > 0) raw = raw * .33;
        else if (raw < -maxShift) raw = -maxShift + (raw + maxShift) * .33;
        shift = raw;
        pull = Math.max(-1, Math.min(1, dx / 240));
        apply();
      }
      function onUp() {
        if (!dragging) return;
        dragging = false;
        track.classList.remove('is-dragging');
        goTo(step ? Math.round(-shift / step) : 0);
      }
      track.addEventListener('pointerdown', onDown);
      if (bead) bead.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);

      /* A drag must not fire the card's open handler. */
      cards.forEach(function (c) {
        c.addEventListener('click', function (e) {
          if (moved > 6) { e.preventDefault(); e.stopPropagation(); }
        }, true);
      });
      if (bead) {
        bead.addEventListener('keydown', function (e) {
          if (e.key === 'ArrowRight') { e.preventDefault(); goTo(idx + 1); }
          if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(idx - 1); }
        });
      }
      measure(); goTo(0, true);
      window.addEventListener('resize', function () { measure(); goTo(idx, true); });
    })();

    /* AI panel: opening sequence, then the two agent simulations.

       Everything here is a scripted demo and the UI says so — each panel
       is labelled "simulated". Imitating the agents is fine for showing
       what they do; implying a model is running behind them is not. */
    (function () {
      var panel = document.querySelector('.pageview[data-page="ai-solutions"]');
      if (!panel) return;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var timers = [];
      function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
      function clearAll() { timers.forEach(clearTimeout); timers = []; }

      /* ---------- opening sequence ---------- */
      (function intro() {
        /* Own timer list. These three sequences run concurrently, and a
           shared clearAll() meant whichever reset last killed the others'
           pending steps — the intro stopped dead the moment the pegging
           demo scrolled into view. */
        var timers = [];
        function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
        function clearAll() { timers.forEach(clearTimeout); timers = []; }

        var el = panel.querySelector('[data-aiintro]');
        var line = panel.querySelector('[data-aiintro-line]');
        var skip = panel.querySelector('[data-aiintro-skip]');
        if (!el || !line) return;

        /* Kept short and near-equal in length: at display size a long
           line wraps to three and the block jumps between steps. */
        var skipped = false;

        var LINES = [
          'Hello.',
          'Welcome to InSu AI Solutions.',
          'We build AI around your problem.',
          'Here is how we build them.'
        ];

        /* The five steps applied to one real agent, so the workflow is
           shown doing something rather than described in the abstract.
           One agent only — running both would double an intro that
           already plays on every open. */
        var STEPS = [
          ['Understand', 'Planners could not say why an order had slipped, only that it had.'],
          ['Solve', 'The answer already existed in the plan. Nobody could reach it fast enough.'],
          ['Recommend', 'An agent reading the existing pegging data. No new system to migrate to.'],
          ['Build', 'Question in plain language, pegging walked end to end, root cause returned.'],
          ['Deploy', 'Runs against live plans, and every number arrives with its source.']
        ];
        function end() {
          clearAll();
          el.hidden = true;
          el.setAttribute('aria-hidden', 'true');
          document.body.classList.remove('intro-playing');
          document.dispatchEvent(new CustomEvent('insu:ai-intro-done'));
        /* Carry the sequence into the first agent rather than dropping the
             viewer at the top of a finished page. Only when it played
             through — someone who skipped asked not to be taken anywhere. */
          if (!skipped) {
            var first = panel.querySelector('[data-agent-demo="pegging"]');
            if (first) later(function () {
              /* Not scrollIntoView: it scrolls every scrollable ancestor, and
                 the panel has overflow:hidden — still scrollable from script —
                 so it shifted the whole panel and took the back bar off the top.
                 Scroll the intended container and nothing else. */
              var sc = panel.querySelector('.pageview-scroll');
              if (!sc) return;
              var top = first.getBoundingClientRect().top
                      - sc.getBoundingClientRect().top + sc.scrollTop;
              sc.scrollTo({ top: Math.max(0, top - 8), behavior: 'smooth' });
              panel.scrollTop = 0;   // undo any nudge the panel already took
            }, 320);
          }
        }
        if (skip) skip.addEventListener('click', function () { skipped = true; end(); });

        function play() {
          /* Plays on every open. The skip control is what keeps that
             from being an obstacle, so it stays. */
          if (reduce) { el.hidden = true; return; }
          clearAll();
          skipped = false;   // per open, not per session
          var fw = panel.querySelector('[data-aiintro-flow]');
          if (fw) fw.hidden = true;   // else the steps show, already finished
          el.hidden = false;
          el.setAttribute('aria-hidden', 'false');
          document.body.classList.add('intro-playing');
          var i = 0;
          function step() {
            if (i >= LINES.length) { later(flow, 420); return; }
            var text = LINES[i], c = 0;
            line.textContent = '';
            var typer = setInterval(function () {
              line.textContent = text.slice(0, ++c);
              if (c >= text.length) {
                clearInterval(typer);
                later(function () {
                  line.style.opacity = '0';
                  later(function () { line.style.opacity = '1'; i++; step(); }, 320);
                }, i === LINES.length - 1 ? 650 : 520);
              }
            }, 26);
            timers.push(typer);
          }
          line.style.transition = 'opacity .3s ease';
          step();
        }

        /* Walk the build steps, then hand over to the page.

           One card that swaps rather than a list: showing all five at once

           gives the ending away before the first step is made. */

        function flow() {

          var wrap = panel.querySelector('[data-aiintro-flow]');

          var card = panel.querySelector('[data-aiintro-card]');

          var nEl = panel.querySelector('[data-aiintro-n]');

          var tEl = panel.querySelector('[data-aiintro-t]');

          var dEl = panel.querySelector('[data-aiintro-d]');

          var dots = panel.querySelector('[data-aiintro-dots]');

          if (!wrap || !card || !tEl) { end(); return; }


          if (dots) {

            dots.innerHTML = STEPS.map(function () { return '<span class="aiintro-dot"></span>'; }).join('');

          }

          var pips = dots ? [].slice.call(dots.children) : [];


          var mini = panel.querySelector('[data-aiintro-mini]');
          /* One stage at a time: the previous piece fades out before the next
             fades in, so two are never on screen together. The window chrome
             is excluded — it is the frame, not a stage, and blinking it in and
             out on every step reads as a fault. */
          function light(n) {
            if (!mini) return;
            var body = mini.querySelector('.mini-body');
            var name = mini.querySelector('.mini-name');
            if (name && n >= 2) name.classList.add('is-on');
            mini.classList.toggle('is-live', n >= 2);
            if (!body) return;
            var pieces = [].slice.call(body.querySelectorAll('[data-piece]'));
            pieces.forEach(function (el) { el.classList.remove('is-on'); });
            later(function () {
              pieces.forEach(function (el) {
                if (parseInt(el.getAttribute('data-piece'), 10) === n) el.classList.add('is-on');
              });
            }, 340);
          }

          function paint(n) {

            if (nEl) nEl.textContent = 'Step ' + (n + 1) + ' of ' + STEPS.length;

            if (tEl) tEl.textContent = STEPS[n][0];

            if (dEl) dEl.textContent = STEPS[n][1];
            light(n);

            pips.forEach(function (d, k) {

              d.classList.toggle('is-on', k === n);

              d.classList.toggle('is-past', k < n);

            });

          }


          function show(n) {

            if (n >= STEPS.length) { later(end, 850); return; }

            /* Fade the old copy out before swapping, or the text changes

               mid-transition and both steps are briefly legible at once. */

            card.classList.add('is-swap');

            later(function () {

              paint(n);

              card.classList.remove('is-swap');

              later(function () { show(n + 1); }, 1150);

            }, 340);

          }


          wrap.hidden = false;

          paint(0);

          pips.forEach(function (d, k) { d.classList.toggle('is-on', k === 0); });

          later(function () { show(1); }, 1350);

        }


        if (!panel.hidden) play();
        new MutationObserver(function () {
          if (!panel.hidden) play(); else { clearAll(); el.hidden = true; }
        }).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
      })();

      /* ---------- Planning Agent: pegging tree ---------- */
      (function pegging() {
        var timers = [];
        function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
        function clearAll() { timers.forEach(clearTimeout); timers = []; }

        var host = panel.querySelector('[data-agent-demo="pegging"]');
        if (!host) return;
        var typed = host.querySelector('[data-peg-typed]');
        var out = host.querySelector('[data-peg-tree]');
        var note = host.querySelector('[data-peg-note]');
        var replay = host.querySelector('[data-peg-replay]');
        var pipbox = host.querySelector('[data-peg-scenes]');
        if (!typed || !out) return;

        /* Five questions a planner actually asks, in the order they ask
           them. Tracing is only the first; what changed, what matters,
           what are the options and where did this come from are the ones
           that decide whether the answer gets trusted. */
        var SCENES = [
          { q: 'trace SO-48213 — why is it late?',
            rows: [
              { d: 0, k: 'ORDER', id: 'SO-48213', m: 'due 14 Oct · qty 4,800' },
              { d: 1, k: 'PLAN',  id: 'PO-9912',  m: 'planned order · covers 4,800' },
              { d: 2, k: 'WORK',  id: 'WO-4471',  m: 'assembly · starts 07 Oct' },
              { d: 3, k: 'COMP',  id: 'RM-2210',  m: 'resin · on hand 1,200' },
              { d: 3, k: 'COMP',  id: 'CAP-118',  m: 'closure · on hand 9,400' },
              { d: 2, k: 'REQ',   id: 'PR-2203',  m: 'lead time 14 → 21 days', c: 'is-risk' }
            ],
            note: 'Root cause: <b>PR-2203</b> — supplier lead time moved 14 to 21 days, which pushes WO-4471 past the order date.' },

          { q: 'what changed since the last run?',
            rows: [
              { d: 0, k: 'DEMAND',  id: 'SKU-4471', m: 'up 12% against last run' },
              { d: 0, k: 'SUPPLY',  id: 'PR-2203',  m: 'supplier lead time 14 → 21 days', c: 'is-risk' },
              { d: 0, k: 'CAPACITY',id: 'LINE-2',   m: 'down 6h for planned maintenance' },
              { d: 0, k: 'EXCEPT',  id: '3 new',    m: '2 auto-resolved, 1 needs a decision' }
            ],
            note: 'Three changes, two of them landing on the same order. The lead time shift is the one that moves the date.' },

          { q: 'which exceptions actually matter?',
            rows: [
              { d: 0, k: 'RANK 1', id: 'EX-1180', m: 'past-due requisition · 4,800 units at risk', c: 'is-risk' },
              { d: 0, k: 'RANK 2', id: 'EX-1206', m: 'capacity overload · line 2, 6 hours' },
              { d: 0, k: 'RANK 3', id: 'EX-1211', m: 'reschedule-in · 40 units, no commit impact' },
              { d: 0, k: 'MUTED',  id: '214 more', m: 'below materiality · collapsed', c: 'is-muted' }
            ],
            note: '217 exceptions raised, 3 worth reading. Ranked by units at risk against the commit date, not by age.' },

          { q: 'what are my options?',
            rows: [
              { d: 0, k: 'OPTION A', id: 'transfer', m: '1,600 units from Pune DC · arrives 11 Oct', c: 'is-good' },
              { d: 1, k: 'COST',     id: 'freight',  m: 'expedite charge · order lands 3 days early', c: 'is-muted' },
              { d: 0, k: 'OPTION B', id: 'split',    m: 'ship 3,200 on time, 1,600 on 21 Oct', c: 'is-alt' },
              { d: 1, k: 'COST',     id: 'service',  m: 'one short-ship · customer notified 8 days ahead', c: 'is-muted' }
            ],
            note: 'Neither option is free. Both are costed against the commit date and the call stays with the planner.' },

          { q: 'where did these numbers come from?',
            rows: [
              { d: 0, k: 'SOURCE', id: 'demand',    m: 'ASCP plan run · 06 Oct 02:00' },
              { d: 0, k: 'SOURCE', id: 'lead time', m: 'supplier master · updated 03 Oct' },
              { d: 0, k: 'SOURCE', id: 'on hand',   m: 'EBS inventory snapshot · 06 Oct 05:00' },
              { d: 0, k: 'SOURCE', id: 'capacity',  m: 'resource calendar · line 2' }
            ],
            note: 'Every figure carries the record behind it. A plan nobody can audit is a plan nobody defends.' }
        ];

        var pips = [];
        if (pipbox) {
          pipbox.innerHTML = SCENES.map(function () { return '<span class="agentui-scene-pip"></span>'; }).join('');
          pips = [].slice.call(pipbox.children);
        }

        function markPips(n) {
          pips.forEach(function (d, k) {
            d.classList.toggle('is-on', k === n);
            d.classList.toggle('is-past', k < n);
          });
        }

        function scene(n) {
          if (n >= SCENES.length) {
            if (replay) replay.hidden = false;
            return;
          }
          var sc = SCENES[n];
          markPips(n);
          typed.textContent = '';
          out.innerHTML = '';
          if (note) note.hidden = true;

          var c = 0;
          var typer = setInterval(function () {
            typed.textContent = sc.q.slice(0, ++c);
            if (c >= sc.q.length) {
              clearInterval(typer);
              sc.rows.forEach(function (r, i) {
                later(function () {
                  var row = document.createElement('div');
                  row.className = 'peg' + (r.c ? ' ' + r.c : '');
                  row.setAttribute('data-depth', r.d);
                  row.innerHTML = '<span class="peg-kind">' + r.k + '</span>' +
                                  '<span class="peg-id">' + r.id + '</span>' +
                                  '<span class="peg-meta">' + r.m + '</span>';
                  out.appendChild(row);
                }, 300 + i * 250);
              });
              var after = 300 + sc.rows.length * 250;
              later(function () {
                if (note) { note.innerHTML = sc.note; note.hidden = false; }
              }, after + 260);
              /* Long enough to read the conclusion before the next question
                 wipes it — the whole point of the scene is that line. */
              later(function () { scene(n + 1); }, after + 2400);
            }
          }, 28);
          timers.push(typer);
        }

        function run() {
          clearAll();
          if (replay) replay.hidden = true;
          scene(0);
        }
        if (replay) replay.addEventListener('click', run);

        var scroller = panel.querySelector('.pageview-scroll');
        if ('IntersectionObserver' in window && scroller) {
          var io = new IntersectionObserver(function (es) {
            es.forEach(function (e) {
              if (e.isIntersecting) { io.unobserve(e.target); later(run, 2600); }
            });
          }, { root: scroller, threshold: 0.3 });
          io.observe(host);
        } else { run(); }
      })();

      /* ---------- SRE Bench ---------- */
      (function sre() {
        /* Own timer list. These three sequences run concurrently, and a
           shared clearAll() meant whichever reset last killed the others'
           pending steps — the intro stopped dead the moment the pegging
           demo scrolled into view. */
        var timers = [];
        function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
        function clearAll() { timers.forEach(clearTimeout); timers = []; }

        var host = panel.querySelector('[data-agent-demo="sre"]');
        if (!host) return;
        var metrics = host.querySelector('[data-sre-metrics]');
        var log = host.querySelector('[data-sre-log]');
        var status = host.querySelector('[data-sre-status]');
        var replay = host.querySelector('[data-sre-replay]');
        if (!metrics || !log) return;

        var METRICS = [
          { k: 'disk i/o', unit: '%', calm: 38, peak: 94 },
          { k: 'latency p99', unit: 'ms', calm: 120, peak: 480 },
          { k: 'worker pool', unit: '%', calm: 44, peak: 88 }
        ];
        var SCRIPT = [
          { t: '02:14', c: 'is-warn', x: 'disk i/o on api-node-3 trending to saturation' },
          { t: '02:14', c: '',        x: 'projecting breach in ~40 min at current slope' },
          { t: '02:15', c: 'is-fix',  x: 'matched pattern #217 — stale cache growth after deploy' },
          { t: '02:16', c: 'is-fix',  x: 'remediation: clearing stale cache, recycling worker pool' },
          { t: '02:21', c: 'is-done', x: 'resolved — no escalation raised, no human paged' },
          { t: '02:22', c: '',        x: 'knowledge captured: added pre-emptive cache trim at 70% threshold' }
        ];

        function cell(m) {
          return '<div class="sre-metric" data-k="' + m.k + '">' +
                 '<span class="sre-metric-k">' + m.k + '</span>' +
                 '<span class="sre-metric-v">' + m.calm + m.unit + '</span>' +
                 '<span class="sre-metric-bar"><i style="width:' + m.calm + '%"></i></span></div>';
        }
        function setMetric(i, val, hot) {
          var el = metrics.children[i];
          if (!el) return;
          var m = METRICS[i];
          el.classList.toggle('is-hot', !!hot);
          el.querySelector('.sre-metric-v').textContent = Math.round(val) + m.unit;
          el.querySelector('.sre-metric-bar i').style.width =
            Math.min(100, (m.unit === 'ms' ? val / 6 : val)) + '%';
        }

        function reset() {
          clearAll();
          metrics.innerHTML = METRICS.map(cell).join('');
          log.innerHTML = '';
          if (replay) replay.hidden = true;
          if (status) { status.textContent = 'monitoring'; status.className = 'agentui-live'; }
        }

        function run() {
          reset();
          METRICS.forEach(function (m, i) {
            later(function () { setMetric(i, m.peak, true); }, 900 + i * 200);
          });
          if (status) later(function () {
            status.textContent = 'anomaly'; status.className = 'agentui-live is-alert';
          }, 900);

          SCRIPT.forEach(function (l, i) {
            later(function () {
              var row = document.createElement('div');
              row.className = 'sre-line ' + l.c;
              row.innerHTML = '<span class="sre-time">' + l.t + '</span><span>' + l.x + '</span>';
              log.appendChild(row);
            }, 1200 + i * 900);
          });

          /* Metrics settle as the fix lands, so the numbers agree with
             the log rather than staying red under a "resolved" line. */
          later(function () {
            METRICS.forEach(function (m, i) { setMetric(i, m.calm, false); });
            if (status) { status.textContent = 'stable'; status.className = 'agentui-live is-ok'; }
          }, 1200 + 4 * 900);
          later(function () { if (replay) replay.hidden = false; }, 1200 + SCRIPT.length * 900 + 400);
        }

        if (replay) replay.addEventListener('click', run);
        var scroller = panel.querySelector('.pageview-scroll');
        if ('IntersectionObserver' in window && scroller) {
          var io2 = new IntersectionObserver(function (es) {
            es.forEach(function (e) {
            if (e.isIntersecting) {
              io2.unobserve(e.target);
              /* its panel takes ~2.15s to arrive; starting sooner runs
                 the incident against something still invisible */
              later(run, 2300);
            }
          });
          }, { root: scroller, threshold: 0.3 });
          io2.observe(host);
        } else { run(); }
      })();
    })();

    /* AI panel: scroll-driven motion.

       The panel scrolls inside .pageview-scroll, so window scroll never
       fires and ScrollTrigger cannot help here — this listens to the
       scroller directly, throttled to one frame.

       Everything below writes transform and opacity only. Reading
       layout (getBoundingClientRect) and writing style in the same
       frame is what makes scroll handlers janky, so all reads happen
       first and all writes after. */
    (function () {
      var panel = document.querySelector('.pageview[data-page="ai-solutions"]');
      if (!panel) return;
      var scroller = panel.querySelector('.pageview-scroll');
      if (!scroller) return;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      /* A real element rather than a pseudo: the panel's ::before and
         ::after already carry looping transforms, and a scroll offset
         would fight them. */
      var par = document.createElement('div');
      par.className = 'ai-par';
      par.setAttribute('aria-hidden', 'true');
      panel.insertBefore(par, panel.firstChild);

      var blocks = [].slice.call(panel.querySelectorAll('.pv-block'));
      var queued = false;

      function frame() {
        queued = false;
        var h = scroller.clientHeight;
        var y = scroller.scrollTop;

        /* read */
        var reads = blocks.map(function (b) {
          var r = b.getBoundingClientRect();
          return { el: b, mid: r.top + r.height / 2, h: r.height };
        });

        /* write */
        par.style.transform = 'translate3d(0,' + (-y * 0.18).toFixed(1) + 'px,0)';
        reads.forEach(function (o) {
          if (!o.el.classList.contains('is-in')) return;
          /* -1 above the fold, 0 centred, 1 below */
          var d = (o.mid - h / 2) / h;
          var away = Math.min(1, Math.abs(d) * 1.6);
          o.el.style.setProperty('--away', away.toFixed(3));
          o.el.style.setProperty('--drift', (d * -14).toFixed(1) + 'px');
        });
      }

      function onScroll() {
        if (queued) return;
        queued = true;
        requestAnimationFrame(frame);
      }
      scroller.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
      new MutationObserver(function () { if (!panel.hidden) onScroll(); })
        .observe(panel, { attributes: true, attributeFilter: ['hidden'] });
      onScroll();
    })();

    /* AI panel: reveal blocks as they scroll into view.
       ScrollTrigger watches the window, but this content scrolls inside
       .pageview-scroll — so the window never scrolls and nothing would
       ever fire. Its own observer, rooted on that element, is the fix. */
    (function () {
      var panel = document.querySelector('.pageview[data-page="ai-solutions"]');
      if (!panel || !('IntersectionObserver' in window)) return;
      var scroller = panel.querySelector('.pageview-scroll');
      var blocks = [].slice.call(panel.querySelectorAll('.pv-block, .pathfinder-sec'));

      /* The brandmark sits over the panel, and this one is dark — flag
         it on <body> so the mark can take the right contrast. */
      new MutationObserver(function () {
        document.body.classList.toggle('ai-panel-open', !panel.hidden);
      }).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
      if (!scroller || !blocks.length) return;

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);   // reveal once; re-running on every pass is noise
          }
        });
      }, { root: scroller, rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

      blocks.forEach(function (b) { io.observe(b); });

      /* The overlay does not stop intersection, so blocks behind it
         reveal while the intro is still playing — skip, and you land on
         a page whose animations have already run. Reset and re-observe
         once the intro is actually done. */
      document.addEventListener('insu:ai-intro-done', function () {
        if (scroller) scroller.scrollTop = 0;
        blocks.forEach(function (b) {
          b.classList.remove('is-in');
          b.style.transitionDelay = '';
          io.observe(b);
        });
        requestAnimationFrame(function () {
          blocks.forEach(function (b) {
            var r = b.getBoundingClientRect();
            if (r.top < window.innerHeight * 0.92) { b.classList.add('is-in'); io.unobserve(b); }
          });
        });
      });

      /* The panel is hidden until opened, so nothing intersects while it
         is closed. Re-check on open, or the first screen stays blank. */
      panel.addEventListener('toggle', function () {});
      var mo = new MutationObserver(function () {
        if (!panel.hidden) {
          blocks.forEach(function (b) {
            var r = b.getBoundingClientRect();
            if (r.top < window.innerHeight) { b.classList.add('is-in'); io.unobserve(b); }
          });
        }
      });
      mo.observe(panel, { attributes: true, attributeFilter: ['hidden'] });
    })();

    /* Explore Internship reveals the other internships in place.
       They are the same four programmes shown further down, so this
       does not repeat their detail — it names them and jumps to the
       one you pick. */
    (function () {
      var panel = document.querySelector('.pageview[data-page="programs"]');
      if (!panel) return;
      var btn = panel.querySelector('[data-intern-toggle]');
      var box = panel.querySelector('[data-intern-more]');
      if (!btn || !box) return;

      btn.addEventListener('click', function () {
        var open = box.hidden;
        box.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.textContent = open ? 'Hide internships \u2191' : 'Explore Internship \u2192';
        if (open) {
          /* Scroll the panel's own scroller, never scrollIntoView —
             that walks every scrollable ancestor and takes the back
             bar off the top with it. */
          var sc = panel.querySelector('.pageview-scroll');
          if (sc) {
            var top = box.getBoundingClientRect().top - sc.getBoundingClientRect().top
                    + sc.scrollTop - 80;
            sc.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        }
      });

      box.querySelectorAll('[data-goto]').forEach(function (b) {
        b.addEventListener('click', function () {
          var t = panel.querySelector('#' + b.getAttribute('data-goto'));
          var sc = panel.querySelector('.pageview-scroll');
          if (!t || !sc) return;
          var top = t.getBoundingClientRect().top - sc.getBoundingClientRect().top
                  + sc.scrollTop - 90;
          sc.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          t.classList.add('is-flash');
          setTimeout(function () { t.classList.remove('is-flash'); }, 1400);
        });
      });
    })();

    /* Programs panel: reveal on scroll.
       Same reason as the AI page — this content scrolls inside
       .pageview-scroll, so window scroll never fires and ScrollTrigger
       cannot see it. Its own observer, rooted on that element. */
    (function () {
      var panel = document.querySelector('.pageview[data-page="programs"]');
      if (!panel || !('IntersectionObserver' in window)) return;
      var scroller = panel.querySelector('.pageview-scroll');
      /* Headings and ledes were left out of the first pass, so the
         cards moved and everything framing them sat still. */
      var items = [].slice.call(panel.querySelectorAll(
        '.prog, .path, .intern-stack-item, .price-row, .teach-example, ' +
        '.who-eyebrow, .who-statement, .sec-lede, .intern-lede, .intern-body, ' +
        '.intern-pipeline, .intern-cta-row, .price-legend, .price-table, ' +
        '.prog .flow, .paths, .indnet, .who-tagline'));
      if (!scroller || !items.length) return;

      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          var group = [].slice.call(e.target.parentNode.children).indexOf(e.target);
          /* Stagger within the row rather than by document order, so a
             grid deals across instead of one long cascade down. */
          e.target.style.transitionDelay = Math.min(group, 5) * 0.07 + 's';
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        });
      }, { root: scroller, rootMargin: '0px 0px -10% 0px', threshold: 0.15 });

      items.forEach(function (el) { io.observe(el); });

      /* Same as the AI panel: nothing behind the overlay should count
         as revealed until the intro has finished with the screen. */
      document.addEventListener('insu:pg-intro-done', function () {
        if (scroller) scroller.scrollTop = 0;
        items.forEach(function (el) {
          el.classList.remove('is-in');
          el.style.transitionDelay = '';
          io.observe(el);
        });
        requestAnimationFrame(function () {
          items.forEach(function (el) {
            var r = el.getBoundingClientRect();
            if (r.top < window.innerHeight * 0.92) { el.classList.add('is-in'); io.unobserve(el); }
          });
        });
      });

      /* Nothing intersects while the panel is closed, so the first
         screen would stay blank on open. */
      new MutationObserver(function () {
        if (panel.hidden) return;
        items.forEach(function (el) {
          var r = el.getBoundingClientRect();
          if (r.top < window.innerHeight) { el.classList.add('is-in'); io.unobserve(el); }
        });
      }).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
    })();

    /* Programs panel intro — same shape as the AI one: types a
       greeting on every open, skippable, then reveals the page. */
    (function () {
      var panel = document.querySelector('.pageview[data-page="programs"]');
      if (!panel) return;
      var el = panel.querySelector('[data-pgintro]');
      var line = panel.querySelector('[data-pgintro-line]');
      var skip = panel.querySelector('[data-pgintro-skip]');
      if (!el || !line) return;

      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var timers = [];
      function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
      function clearAll() { timers.forEach(clearTimeout); timers = []; }

      var LINES = [
        'Hi.',
        'I can help you find your path.',
        'We run a few upskilling programmes.',
        'Let us work out which one is yours.'
      ];

      function end() {
        clearAll();
        el.hidden = true;
        el.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('intro-playing');
        document.dispatchEvent(new CustomEvent('insu:pg-intro-done'));
        /* Restore the greeting, or reopening lands on a finished
           questionnaire instead of the opening line. */
        var box = panel.querySelector('[data-pgintro-pf]');
        var inner = panel.querySelector('.pgintro-inner');
        if (box) box.hidden = true;
        if (inner) inner.hidden = false;
      }
      if (skip) skip.addEventListener('click', end);

      /* Hand the overlay to the finder rather than revealing the page. */
      function askQuestions() {
        var box = panel.querySelector('[data-pgintro-pf]');
        var inner = panel.querySelector('.pgintro-inner');
        if (!box) { end(); return; }
        if (inner) inner.hidden = true;
        box.hidden = false;
        document.dispatchEvent(new CustomEvent('insu:pf-start'));
      }
      document.addEventListener('insu:pf-done', end);

      function play() {
        if (reduce) { el.hidden = true; return; }
        clearAll();
        el.hidden = false;
        el.setAttribute('aria-hidden', 'false');
        document.body.classList.add('intro-playing');
        var i = 0;
        function step() {
          if (i >= LINES.length) { later(askQuestions, 520); return; }
          var text = LINES[i], c = 0;
          line.textContent = '';
          var typer = setInterval(function () {
            line.textContent = text.slice(0, ++c);
            if (c >= text.length) {
              clearInterval(typer);
              later(function () {
                line.style.opacity = '0';
                later(function () { line.style.opacity = '1'; i++; step(); }, 300);
              }, i === LINES.length - 1 ? 700 : 540);
            }
          }, 26);
          timers.push(typer);
        }
        line.style.transition = 'opacity .28s ease';
        step();
      }

      if (!panel.hidden) play();
      new MutationObserver(function () {
        if (!panel.hidden) play(); else { clearAll(); el.hidden = true; }
      }).observe(panel, { attributes: true, attributeFilter: ['hidden'] });
    })();

    /* Pathfinder: a short conversation rather than a form.
       It greets, asks whether they already have a role in mind, and — if
       the reason turns out to be someone else's suggestion — says so and
       checks whether something else fits better. Then a few questions
       about how they actually think.

       Still a weighted scoring table, and the page says so. */
    (function () {
      var root = document.querySelector('[data-pf]');
      if (!root) return;
      var stage = root.querySelector('[data-pf-stage]');
      var fill = root.querySelector('[data-pf-fill]');
      if (!stage) return;
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var timers = [];
      function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }

      var PROGRAMMES = {
        python:  { name: 'Python + AI Internship', note: 'the foundation the others build on' },
        analyst: { name: 'Data Analyst',           note: 'data into decisions the business acts on' },
        science: { name: 'Data Science',           note: 'statistics and models, end to end' },
        aieng:   { name: 'AI Engineering',         note: 'LLMs, RAG and shipping AI into production' },
        scm:     { name: 'Supply Chain Planning',  note: 'demand, supply and Oracle SCM' }
      };

      var Q = {
        mode: { q: 'What brings you here?', a: [
          { t: 'I have a role in mind', next: 'role' },
          { t: 'I want to find what actually fits me', next: 'math' }
        ]},
        role: { q: 'Which one?', kind: 'goal', a: [
          { t: 'Data Analyst', pick: 'analyst', next: 'why' },
          { t: 'Data Scientist', pick: 'science', next: 'why' },
          { t: 'AI Engineer', pick: 'aieng', next: 'why' },
          { t: 'Supply Chain Planner', pick: 'scm', next: 'why' }
        ]},
        why: { q: 'What draws you to it?', a: [
          { t: 'I have tried some of it and enjoyed it', next: 'math', firm: true },
          { t: 'The pay and the demand', next: 'math', soft: true },
          { t: 'Someone suggested it to me', next: 'math', soft: true },
          { t: 'It is the only one I really know about', next: 'math', soft: true }
        ]},
        math: { q: 'Numbers, averages, probability. Where do you sit?', a: [
          { t: 'I enjoy them', w: { science: 3, analyst: 1 }, next: 'puzzle' },
          { t: 'Fine, when there is a reason for them', w: { analyst: 1, scm: 2, aieng: 1 }, next: 'puzzle' },
          { t: 'I would rather work around them', w: { aieng: 2, python: 2 }, next: 'puzzle' }
        ]},
        puzzle: { q: 'A problem is missing a piece of information. You...', a: [
          { t: 'Work out what is missing, then go and find it', w: { science: 3, analyst: 2 }, next: 'build' },
          { t: 'Try things until something fits', w: { aieng: 3, python: 2 }, next: 'build' },
          { t: 'Ask whoever is closest to it', w: { scm: 3 }, next: 'build' },
          { t: 'Write down what you do know first', w: { analyst: 1, scm: 2, science: 1 }, next: 'build' }
        ]},
        build: { q: 'Making something actually work, end to end...', a: [
          { t: 'That is the part I enjoy', w: { aieng: 3, python: 3 }, next: null },
          { t: 'I would rather explain what it means', w: { analyst: 2, science: 2 }, next: null },
          { t: 'I would rather organise how it runs', w: { scm: 3, analyst: 1 }, next: null }
        ]}
      };

      var key = 'mode', picked = null, soft = false, asked = 0, history = [];
      var scores = { python: 0, analyst: 0, science: 0, aieng: 0, scm: 0 };
      var EXPECTED = 5;   // typical path length, for the progress bar

      function reset() {
        key = 'mode'; picked = null; soft = false; asked = 0; history = [];
        Object.keys(scores).forEach(function (k) { scores[k] = 0; });
      }

      function render() {
        if (fill) fill.style.width = Math.min(100, (asked / EXPECTED) * 100) + '%';
        if (!key) { result(); return; }
        var q = Q[key];
        var html = '<div class="pf-card"><span class="pf-step">' +
          (soft && key === 'math' ? 'Then let us check something' : 'Question ' + (asked + 1)) +
          '</span><h3 class="pf-q">' + q.q + '</h3>';
        if (soft && key === 'math' && asked === 3) {
          html += '<p class="pf-aside">That is a common reason, and it is worth testing. ' +
                  'Let us see whether something else suits you better.</p>';
        }
        html += '<div class="pf-opts">';
        q.a.forEach(function (opt, n) {
          html += '<button class="pf-opt" type="button" data-i="' + n + '">' +
                  '<span class="pf-opt-t">' + opt.t + '</span>' +
                  '<span class="pf-opt-go" aria-hidden="true">&rarr;</span></button>';
        });
        html += '</div>';
        if (history.length) html += '<button class="pf-back" type="button" data-pf-back>&larr; Back</button>';
        html += '</div>';
        stage.innerHTML = html;

        stage.querySelectorAll('.pf-opt').forEach(function (b) {
          b.addEventListener('click', function () {
            var opt = Q[key].a[parseInt(b.getAttribute('data-i'), 10)];
            /* Snapshot before mutating, so Back restores exactly. */
            history.push({ key: key, picked: picked, soft: soft, asked: asked,
                           scores: JSON.parse(JSON.stringify(scores)) });
            if (Q[key].kind === 'goal') picked = opt.pick;
            if (opt.soft) soft = true;
            if (opt.firm) soft = false;
            if (opt.w) Object.keys(opt.w).forEach(function (k) { scores[k] += opt.w[k]; });
            asked++;
            key = opt.next;
            render();
          });
        });
        var back = stage.querySelector('[data-pf-back]');
        if (back) back.addEventListener('click', function () {
          var prev = history.pop();
          if (!prev) return;
          key = prev.key; picked = prev.picked; soft = prev.soft; asked = prev.asked;
          scores = prev.scores;
          render();
        });
      }

      function card(k, label, why) {
        var pr = PROGRAMMES[k];
        return '<article class="pf-res"><span class="pf-res-tag">' + label + '</span>' +
               '<h4>' + pr.name + '</h4><p class="pf-res-note">' + pr.note + '</p>' +
               '<p class="pf-res-why">' + why + '</p></article>';
      }

      function result() {
        if (fill) fill.style.width = '100%';
        var order = Object.keys(scores).sort(function (a, b) { return scores[b] - scores[a]; });
        var best = order[0];
        if (picked && best === picked) best = order[1];

        var head = picked
          ? (soft ? 'Worth comparing these two.' : 'Where you are aiming, and where your answers point.')
          : 'Based on how you answered.';

        var html = '<div class="pf-card pf-done"><span class="pf-step">Your result</span>' +
          '<h3 class="pf-q">' + head + '</h3><div class="pf-results">';
        if (picked) {
          html += card(picked, 'What you came for',
            soft ? 'Still a real option — just worth choosing on purpose rather than on someone else\'s advice.'
                 : 'You said you have tried some of it and enjoyed it, which is the best reason there is.');
        }
        html += card(best, picked ? 'What your answers point to' : 'Strongest fit',
          'How you described thinking through problems landed hardest here.');
        html += '</div><p class="pf-res-foot">' +
          (picked && picked !== best
            ? 'Two different answers is normal. Talk it through with us rather than guessing.'
            : 'Your goal and your instincts agree, which makes this an easy one.') +
          '</p><div class="pf-actions">' +
          '<button class="btn" type="button" data-pf-see>See the programmes &rarr;</button>' +
          '<button class="btn ghost" type="button" data-pf-restart>Start again</button>' +
          '</div></div>';
        stage.innerHTML = html;

        var again = stage.querySelector('[data-pf-restart]');
        if (again) again.addEventListener('click', function () { reset(); render(); });
        var see = stage.querySelector('[data-pf-see]');
        if (see) see.addEventListener('click', function () {
          /* Close the overlay first — scrolling to a section behind it
             would move a page nobody can see yet. */
          document.dispatchEvent(new CustomEvent('insu:pf-done'));
          setTimeout(function () {
            var t = document.getElementById('programs');
            if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 260);
        });
      }

      /* Held until the intro greeting finishes; the questions run
         inside the overlay so the page stays hidden behind them. */
      document.addEventListener('insu:pf-start', function () { reset(); render(); });
    })();

    document.querySelectorAll('[data-route]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var route = btn.getAttribute('data-route');
        var panel = document.querySelector('.pageview[data-page="' + route + '"]');
        if (panel) {
          location.hash = route;
          return;
        }
        var fallback = { 'solutions': '#solutions', 'supply-chain': '#supplychain',
                         'programs': '#programs' }[route];
        var target = fallback && document.querySelector(fallback);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  } catch (e) {
    console.error(e);
    revealStatic();
  }
})();
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',boot);}else{boot();}
})();
