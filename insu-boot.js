(function(){

/* ===================================================================
   THE ONLY PART YOU EDIT
   Upload these four images in Wix (Media Manager), copy each file's
   URL, and paste it below. They live here rather than inside the
   minified markup so you never have to search through the blob.
   =================================================================== */
var IMAGES = {
  logo:        'https://static.wixstatic.com/media/8318c1_9b0ac28172ca4e0ca1b220ad29facef8~mv2.jpg',
  supplychain: 'https://static.wixstatic.com/media/8318c1_4fd358758c2d4e819eeb9365a9024161~mv2.jpg',
  ai:          'https://static.wixstatic.com/media/8318c1_1d84575f5a9f4f0191ad3d55643ca5d1~mv2.jpg',
  python:      'https://static.wixstatic.com/media/8318c1_a76d16610ca04f6fa1c3f6b8fb6a7d26~mv2.jpg'
};
/* =================================================================== */

var MARKUP="<section class=\"hero\" id=\"hero\">\n<nav class=\"sitenav\" id=\"siteNav\" aria-label=\"Primary\">\n<a href=\"#solutions\" data-nav>Solutions</a>\n<a href=\"#supplychain\" data-nav>Supply Chain</a>\n<a href=\"#programs\" data-nav>Programs</a>\n<a href=\"#contact\" data-nav>Contact</a>\n<button type=\"button\" class=\"motion-toggle\" id=\"motionToggle\" aria-pressed=\"true\">\n<span class=\"motion-toggle-label\">Animations</span>\n<span class=\"motion-toggle-switch\" aria-hidden=\"true\"><span class=\"motion-toggle-knob\"></span></span>\n</button>\n</nav>\n<div class=\"hero-bg\">\n<div class=\"hero-scroll-zoom\" id=\"heroScrollZoom\">\n<div class=\"hero-bg-zoom\" id=\"heroBgZoom\">\n<div class=\"hero-bg-fallback\"></div>\n<div class=\"hero-network\" id=\"heroNetwork\"></div>\n</div>\n</div>\n</div>\n<div class=\"hero-scrim\"></div>\n<div class=\"hero-whitewash\" id=\"heroWhitewash\" aria-hidden=\"true\"></div>\n<div class=\"hero-content\">\n<div class=\"col-text\">\n<div class=\"brandmark reveal\" id=\"r1\">\n<img class=\"mark-icon\" src=\"Insu-Dynamics.jpg\" alt=\"InSu Dynamics\"/>\n<span class=\"mark-text\">InSu Dynamics</span>\n</div>\n<h1 class=\"headline-stylish\">\n<span class=\"hl-row\">\n<span class=\"hl-accent\" id=\"hlAccent\">Innovation</span>\n<span class=\"hl-plus hl-word\" id=\"hlPlus\">Drives</span>\n<span class=\"hl-main\" id=\"hlMain\">Sustainability</span>\n</span>\n</h1>\n<p class=\"subhead reveal\" id=\"r3\">Sustainability begins with forward-thinking innovation. Our mission is to build a better tomorrow, starting today.</p>\n<div class=\"ctas reveal\" id=\"r4\">\n<button class=\"btn\" type=\"button\">Talk to Our Team</button>\n<button class=\"btn ghost\" type=\"button\">See Our Services</button>\n</div>\n</div>\n</div>\n<div class=\"scroll-glow\" id=\"scrollGlow\" aria-hidden=\"true\"></div>\n</section>\n<section class=\"page-section section-light story\" id=\"story\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" id=\"threadEyebrow\">Who we are</span>\n<h2 class=\"who-statement thread-h\" id=\"threadHeading\">We build intelligence through <span class=\"pillar-group\"><em class=\"pillar\" data-pillar=\"0\">supply chain solutions</em>,</span> <span class=\"pillar-group\"><em class=\"pillar\" data-pillar=\"1\">AI</em>, and</span> <span class=\"pillar-group\"><em class=\"pillar\" data-pillar=\"2\">upskilling</em>.</span></h2>\n<div class=\"thread\" id=\"thread\">\n<div class=\"thread-viewport\">\n<div class=\"thread-track\" id=\"threadTrack\">\n<article class=\"thread-card\" data-card=\"0\">\n<div class=\"thread-img\" style=\"background-image:url('service-supplychain.jpg')\"></div>\n<div class=\"thread-body\">\n<span class=\"thread-kind\">Solutions</span>\n<h3>Supply Chain Solutions</h3>\n<p>The domain we know deepest &mdash; built alongside people who have actually run operations, not only implemented the software.</p>\n<button class=\"btn thread-cta\" type=\"button\" data-open-page=\"supply-chain\">Explore supply chain &rarr;</button>\n</div>\n</article>\n<article class=\"thread-card\" data-card=\"1\">\n<div class=\"thread-img\" style=\"background-image:url('service-ai.jpg')\"></div>\n<div class=\"thread-body\">\n<span class=\"thread-kind\">Solutions</span>\n<h3>AI Solutions</h3>\n<p>AI, machine learning and Generative AI engineered around your problem &mdash; not a product we already had. From feasibility analysis through to deployment.</p>\n<button class=\"btn thread-cta\" type=\"button\" data-open-page=\"ai-solutions\">Explore AI solutions &rarr;</button>\n</div>\n</article>\n<article class=\"thread-card\" data-card=\"2\">\n<div class=\"thread-img\" style=\"background-image:url('course-python.jpg')\"></div>\n<div class=\"thread-body\">\n<span class=\"thread-kind\">Programs</span>\n<h3>Upskilling Yourself</h3>\n<p>Python&nbsp;+&nbsp;AI, data analytics and AI engineering &mdash; taught with the same tools and workflows our engineers use on real client work.</p>\n<button class=\"btn thread-cta\" type=\"button\" data-open-page=\"programs\">Explore AI programs &rarr;</button>\n</div>\n</article>\n</div>\n</div>\n<div class=\"thread-line\" id=\"threadLine\">\n<svg viewBox=\"0 0 1000 64\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n<path id=\"threadPath\" class=\"thread-path\" d=\"M 0 32 Q 500 32 1000 32\"/>\n<circle id=\"threadPulse\" class=\"thread-pulse\" cx=\"0\" cy=\"32\" r=\"3.4\" opacity=\"0\"/>\n</svg>\n<button class=\"thread-bead\" id=\"threadBead\" type=\"button\" aria-label=\"Drag to move between cards\"></button>\n</div>\n<p class=\"thread-hint\" id=\"threadHint\">Pull the thread &mdash; or drag the cards</p>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"solutionset\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Our solutions</span>\n<h2 class=\"who-statement\" data-reveal>Where we go deep.</h2>\n<p class=\"sec-lede\" data-reveal>We don't just implement technology.<br/>We transform supply chains, make them intelligent, and build the people who can take them forward.</p>\n<div class=\"demoset\">\n<article class=\"solcard solcard--agent\" data-agent>\n<span class=\"demo-tag\">Supply chain</span>\n<h3>Planning Agent</h3>\n<p>Ask it about any plan and it returns the whole picture &mdash; what changed since the last run, which exceptions matter, and the data behind every number.</p>\n<div class=\"agent-term\" aria-hidden=\"true\">\n<div class=\"agent-q\"><span class=\"agent-caret\">&rsaquo;</span> <span class=\"agent-typed\" data-q=\"Why did the Q3 plan shift?\"></span></div>\n<div class=\"agent-a\" data-a=\"Demand up 12% on SKU-4471. Supplier lead time moved 14&rarr;21 days. 3 exceptions flagged, 2 auto-resolved.\"></div>\n</div>\n<button class=\"solcard-more\" type=\"button\" data-open-page=\"supply-chain\">More on supply chain <span aria-hidden=\"true\">&rarr;</span></button>\n</article>\n<article class=\"solcard solcard--agent\" data-agent>\n<span class=\"demo-tag demo-tag--alt\">Beyond supply chain</span>\n<h3>SRE Bench</h3>\n<p>Watches your infrastructure around the clock and predicts failures before they land. When one does, it performs the first level of remediation itself &mdash; and only escalates to a human when it genuinely can't resolve it.</p>\n<div class=\"agent-term agent-term--auto\" aria-hidden=\"true\">\n<div class=\"agent-q\"><span class=\"agent-caret agent-caret--live\">&#9679;</span> <span class=\"agent-typed\" data-q=\"02:14 &mdash; disk I/O trending to saturation, api-node-3\"></span></div>\n<div class=\"agent-a\" data-a=\"Breach predicted in ~40min. Cleared stale cache, recycled worker pool. Resolved 02:21 &mdash; no escalation raised.\"></div>\n</div>\n<button class=\"solcard-more\" type=\"button\" data-open-page=\"ai-solutions\">More on AI solutions <span aria-hidden=\"true\">&rarr;</span></button>\n</article>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark shift seam-from-light\" id=\"shift\">\n<div class=\"section-inner shift-inner\">\n<span class=\"who-eyebrow\" data-reveal>Engineering first</span>\n<h2 class=\"shift-h\" data-reveal>We build AI for real businesses.<br/>That's what earns us the right<br/>to teach it.</h2>\n<div class=\"flow shift-flow\" data-flow>\n<span class=\"who-node flow-node\">AI we build</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">AI we teach</span>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint seam-from-dark\" id=\"supplychain\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Supply chain solutions</span>\n<h2 class=\"who-statement\" data-reveal>Transform. Optimize. Evolve.</h2>\n<p class=\"sec-lede\" data-reveal>From Oracle Fusion Cloud to Oracle E-Business Suite, we help organizations build, transform and continuously improve their supply chain landscape &mdash; across implementation, modernization, optimization and ongoing support.</p>\n<div class=\"scaps\">\n<article class=\"scap\">\n<span class=\"scap-num\">01</span>\n<h3>Fusion Cloud</h3>\n<p>Transform your supply chain with Fusion Cloud SCM</p>\n</article>\n<article class=\"scap\">\n<span class=\"scap-num\">02</span>\n<h3>EBS &amp; On-Prem</h3>\n<p>Modernize, optimize and support your existing landscape</p>\n</article>\n<article class=\"scap\">\n<span class=\"scap-num\">03</span>\n<h3>Optimization</h3>\n<p>Turn supply chain data into better decisions and better outcomes</p>\n</article>\n<article class=\"scap\">\n<span class=\"scap-num\">04</span>\n<h3>Support &amp; Evolution</h3>\n<p>Keep your supply chain running, improving and evolving</p>\n</article>\n</div>\n<div class=\"cta-row\" data-reveal>\n<button class=\"btn\" type=\"button\" data-open-page=\"supply-chain\">Explore our supply chain capabilities &rarr;</button>\n</div>\n<div class=\"sc-hinge\">\n<p class=\"sc-hinge-lead\" data-reveal>But technology alone isn't enough.</p>\n<p class=\"sc-hinge-ask\" data-reveal>What if your supply chain could <em>think</em>, <em>predict</em> and <em>act</em>?</p>\n<p class=\"sc-hinge-ans\" data-reveal>That's where AI comes in.</p>\n<button class=\"btn ghost\" type=\"button\" data-open-page=\"ai-solutions\" data-reveal>Explore our AI solutions &rarr;</button>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark has-vessel seam-from-light\" id=\"workflow\">\n<div class=\"vessel\" id=\"vessel\" aria-hidden=\"true\"></div>\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>AI Solutions</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>Your problem.<br/>Our AI workflow.</h2>\n<p class=\"sec-lede\" data-reveal>We don't start with a product. We start with your problem.</p>\n<ol class=\"rail\" data-rail>\n<li class=\"rail-step\">\n<span class=\"rail-num\">01</span>\n<div class=\"rail-body\">\n<h3>Understand</h3>\n<p>We understand your business, process, data and the actual problem &mdash; before any technology is chosen.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">02</span>\n<div class=\"rail-body\">\n<h3>Solve</h3>\n<p>Our AI engineers and consultants analyze the problem and design possible AI-driven approaches.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">03</span>\n<div class=\"rail-body\">\n<h3>Recommend</h3>\n<p>We identify and recommend the optimal solution based on feasibility, impact, cost and scalability.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">04</span>\n<div class=\"rail-body\">\n<h3>Build</h3>\n<p>You choose the approach. We work with you to build the solution around how you actually operate.</p>\n</div>\n</li>\n<li class=\"rail-step\">\n<span class=\"rail-num\">05</span>\n<div class=\"rail-body\">\n<h3>Deploy</h3>\n<p>Our AI engineering team turns it into a working system and delivers it quickly.</p>\n</div>\n</li>\n</ol>\n<div class=\"flow flow--wrap rail-outcome\" data-flow>\n<span class=\"who-node flow-node\">Problem</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Engineers + Consultants</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Analysis</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Optimal Solution</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Build</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Deploy</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Business Impact</span>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark\" id=\"approach\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Our approach</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>We don't force a solution.<br/><em>We find the right one.</em></h2>\n<div class=\"flow flow--wrap approach-flow\" data-flow>\n<span class=\"who-node flow-node\">Problem</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Possibilities</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Optimal Solution</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Your Choice</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Our Engineering</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Impact</span>\n</div>\n<ul class=\"checklist\" data-reveal-list>\n<li>Understand the actual business problem</li>\n<li>Analyze existing workflows and systems</li>\n<li>Identify where AI can genuinely help</li>\n<li>Evaluate multiple possible approaches</li>\n<li>Recommend the optimal solution</li>\n<li>Build the solution chosen by you</li>\n<li>Deploy quickly with our AI engineering team</li>\n<li>Keep improving the system where required</li>\n</ul>\n</div>\n</section>\n<section class=\"page-section section-dark\" id=\"solutions\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Our capabilities</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>AI solutions for the real world.</h2>\n<p class=\"sec-lede\" data-reveal>From intelligent automation to predictive systems, we engineer AI around the way your business actually works.</p>\n<div class=\"solgrid\">\n<article class=\"sol\">\n<h3>AI &amp; Machine Learning</h3>\n<div class=\"sol-more\">\n<p>Custom models built around your data and your decisions.</p>\n<span class=\"sol-uses\">Forecasting &middot; Classification &middot; Scoring</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Generative AI</h3>\n<div class=\"sol-more\">\n<p>LLM-backed systems that work with your own knowledge and content.</p>\n<span class=\"sol-uses\">RAG &middot; Assistants &middot; Document intelligence</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Intelligent Automation</h3>\n<div class=\"sol-more\">\n<p>Removing the repetitive operational work that slows teams down.</p>\n<span class=\"sol-uses\">Workflow automation &middot; Document processing</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Data &amp; Analytics</h3>\n<div class=\"sol-more\">\n<p>Turning scattered operational data into something decision-ready.</p>\n<span class=\"sol-uses\">Pipelines &middot; Dashboards &middot; Reporting</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>AI Agents</h3>\n<div class=\"sol-more\">\n<p>Systems that carry out multi-step operational tasks, not just answer questions.</p>\n<span class=\"sol-uses\">Operational agents &middot; Tool use</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Predictive Intelligence</h3>\n<div class=\"sol-more\">\n<p>Anticipating what happens next instead of reacting to it.</p>\n<span class=\"sol-uses\">Demand &middot; Risk &middot; Maintenance</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Computer Vision</h3>\n<div class=\"sol-more\">\n<p>Making physical and visual processes machine-readable.</p>\n<span class=\"sol-uses\">Inspection &middot; Recognition &middot; Monitoring</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n<article class=\"sol\">\n<h3>Enterprise AI Integration</h3>\n<div class=\"sol-more\">\n<p>Fitting AI into the systems you already run.</p>\n<span class=\"sol-uses\">APIs &middot; Existing platforms &middot; Deployment</span>\n<span class=\"sol-go\">Explore &rarr;</span>\n</div>\n</article>\n</div>\n<div class=\"cta-row\" data-reveal>\n<button class=\"btn\" type=\"button\" data-route=\"solutions\">Explore all solutions &rarr;</button>\n</div>\n</div>\n</section>\n<section class=\"page-section section-light seam-from-dark\" id=\"industries\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Industries</span>\n<h2 class=\"who-statement\" data-reveal>AI that adapts to your industry.</h2>\n<p class=\"sec-lede\" data-reveal>Our engineering approach adapts across industries, while supply chain remains one of our strongest areas of expertise.</p>\n<div class=\"indnet\" data-reveal-list>\n<span class=\"ind ind--strong\">Supply Chain &amp; Logistics</span>\n<span class=\"ind\">Manufacturing</span>\n<span class=\"ind\">Healthcare</span>\n<span class=\"ind\">Finance</span>\n<span class=\"ind\">Retail &amp; E-commerce</span>\n<span class=\"ind\">Technology</span>\n<span class=\"ind\">Education</span>\n<span class=\"ind\">Enterprise Operations</span>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"expect\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>What you can expect</span>\n<h2 class=\"who-statement\" data-reveal>No reviews yet. Just what we commit to.</h2>\n<div class=\"expect\">\n<div class=\"expect-col\">\n<h3>If you're building with us</h3>\n<ul data-reveal-list>\n<li>Problem-first consulting</li>\n<li>AI feasibility analysis</li>\n<li>Solution recommendations</li>\n<li>Fast engineering execution</li>\n<li>Scalable architecture</li>\n<li>Collaborative delivery</li>\n</ul>\n</div>\n<div class=\"expect-col\">\n<h3>If you're learning with us</h3>\n<ul data-reveal-list>\n<li>Practical projects</li>\n<li>Mentor guidance</li>\n<li>Industry-oriented learning</li>\n<li>AI engineering workflows</li>\n<li>Portfolio development</li>\n<li>Hands-on implementation</li>\n</ul>\n</div>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark seam-from-light\" id=\"whyus\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\" data-reveal>Why us</span>\n<h2 class=\"who-statement solutions-h\" data-reveal>Technology &times; Talent &times; Impact</h2>\n<div class=\"tti\" id=\"ttiBlock\">\n<div class=\"tti-arm\" data-tti=\"0\">\n<h3>Technology</h3>\n<p>AI, ML, GenAI, automation, data and engineering.</p>\n</div>\n<div class=\"tti-arm\" data-tti=\"1\">\n<h3>Talent</h3>\n<p>AI engineers, consultants and learners building practical skills.</p>\n</div>\n<div class=\"tti-arm\" data-tti=\"2\">\n<h3>Impact</h3>\n<p>Solutions designed around measurable business problems.</p>\n</div>\n<div class=\"tti-core\" id=\"ttiCore\">Intelligence</div>\n</div>\n</div>\n</section>\n<section class=\"page-section section-dark finalcta\" id=\"contact\">\n<div class=\"section-inner\">\n<h2 class=\"final-h\" data-reveal>Have a problem <em>worth solving?</em></h2>\n<p class=\"final-sub\" data-reveal>Tell us what you're trying to solve. We'll figure out where AI fits.</p>\n<div class=\"final-split\">\n<div class=\"final-half\">\n<span class=\"final-for\">For businesses</span>\n<a class=\"btn\" href=\"mailto:info@insudynamics.com?subject=Problem%20worth%20solving\">Discuss your problem &rarr;</a>\n</div>\n<div class=\"final-half\">\n<span class=\"final-for\">For learners</span>\n<button class=\"btn ghost\" type=\"button\" data-route=\"programs\">Explore AI programs &rarr;</button>\n</div>\n</div>\n<p class=\"final-direct\">Or reach us directly &mdash;\n<a href=\"mailto:info@insudynamics.com\">info@insudynamics.com</a>\n<span class=\"final-sep\" aria-hidden=\"true\">&middot;</span>\n<a href=\"tel:+919497153297\">+91&nbsp;94971&nbsp;53297</a>\n</p>\n</div>\n</section>\n<footer class=\"site-footer\">\n<div class=\"section-inner foot-grid\">\n<div class=\"foot-brand\">\n<span class=\"foot-name\">InSu Dynamics</span>\n<span class=\"foot-tag\">Innovation drives sustainability.</span>\n<div class=\"foot-contact\">\n<a href=\"mailto:info@insudynamics.com\">info@insudynamics.com</a>\n<a href=\"tel:+919497153297\">+91&nbsp;94971&nbsp;53297</a>\n</div>\n</div>\n<div class=\"foot-col\">\n<h4>Company</h4>\n<a href=\"#who\">Who we are</a>\n<a href=\"#solutions\">Solutions</a>\n<a href=\"#supplychain\">Supply chain AI</a>\n<a href=\"#programs\" data-open-page=\"programs\">AI programs</a>\n<a href=\"#programs\" data-open-page=\"programs\">Internships</a>\n<a href=\"#contact\">Contact</a>\n</div>\n<div class=\"foot-col\">\n<h4>Solutions</h4>\n<a href=\"#solutions\">AI / ML</a>\n<a href=\"#solutions\">Generative AI</a>\n<a href=\"#solutions\">Automation</a>\n<a href=\"#solutions\">Analytics</a>\n<a href=\"#solutions\">AI agents</a>\n<a href=\"#supplychain\">Supply chain AI</a>\n</div>\n<div class=\"foot-col\">\n<h4>Programs</h4>\n<a href=\"#programs\" data-open-page=\"programs\">Python + AI</a>\n<a href=\"#programs\" data-open-page=\"programs\">Data analyst</a>\n<a href=\"#programs\" data-open-page=\"programs\">Data science</a>\n<a href=\"#programs\" data-open-page=\"programs\">AI engineering</a>\n</div>\n</div>\n</footer>\n<div class=\"pageview\" data-page=\"programs\" hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-label=\"AI Programs\">\n<div class=\"pageview-bar\">\n<span class=\"pageview-title\">AI Programs</span>\n<button class=\"pageview-close\" type=\"button\">&larr;&nbsp; Back to site</button>\n</div>\n<div class=\"pageview-scroll\">\n<header class=\"pageview-hero\">\n<span class=\"who-eyebrow\">Upskilling yourself</span>\n<h1 class=\"pageview-h\">Learn AI the way engineers use it.</h1>\n<p class=\"sec-lede\">Every program runs on the same tools and workflows our engineers use on client work \u2014 taught by the people doing it.</p>\n</header>\n<section class=\"page-section section-tint\" id=\"internship\">\n<div class=\"section-inner\">\n<div class=\"intern-static\" id=\"internStatic\">\n<span class=\"who-eyebrow\">Start Here. Build AI.</span>\n<h2 class=\"who-statement\">Python + AI Internship</h2>\n<p class=\"intern-lede\">Don't just learn Python. Use it to build AI.</p>\n<p class=\"intern-body\">A 45-day internship built around a real, industry-niche major project \u2014 not tutorials \u2014 so you walk away having actually shipped something. Alongside the technical build, you pick up the skills it takes to survive in the real world of work.</p>\n<div class=\"intern-pipeline\" id=\"internPipeline\">\n<span class=\"who-node intern-step\">Python</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step\">ML</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step\">GenAI</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step\">AI Applications</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node intern-step intern-step--final\">Deployment</span>\n</div>\n<div class=\"intern-cta-row\">\n<button class=\"btn\" type=\"button\">Explore Internship \u2192</button>\n<span class=\"intern-credibility\">Built around real engineering workflows, not just tutorials.</span>\n</div>\n<div class=\"intern-stack\" id=\"internStack\">\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">01</span>\n<div><h3>Python</h3><p>Programming \u00b7 APIs \u00b7 Data</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">02</span>\n<div><h3>Machine Learning</h3><p>Models \u00b7 Training \u00b7 Evaluation</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">03</span>\n<div><h3>Generative AI</h3><p>LLMs \u00b7 RAG \u00b7 AI APIs</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">04</span>\n<div><h3>AI Engineering</h3><p>Applications \u00b7 Integration \u00b7 Deployment</p></div>\n</div>\n<div class=\"intern-stack-item\">\n<span class=\"intern-stack-num\">05</span>\n<div><h3>Project</h3><p>Your industry-niche major project \u2014 build something real.</p></div>\n</div>\n</div>\n<p class=\"who-tagline\">Learn from people who build with AI.</p>\n</div>\n</div>\n</section>\n<section class=\"page-section section-light\" id=\"programs\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">More ways to build your AI career</span>\n<h2 class=\"who-statement\">Choose your path.<br/>Build real skills.</h2>\n<p class=\"sec-lede\">Every program works with the same tools and engineering workflows our own team uses. The Python&nbsp;+&nbsp;AI Internship stays the flagship &mdash; these run alongside it.</p>\n<div class=\"prog-list\">\n<article class=\"prog\" id=\"prog-analyst\">\n<div class=\"prog-head\">\n<h3>Data Analyst</h3>\n<p>Practical data analytics, Python, SQL, visualization, dashboards and business analysis.</p>\n</div>\n<div class=\"flow\">\n<span class=\"who-node flow-node\">Data</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">SQL</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Python</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Analytics</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Visualization</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Insights</span>\n</div>\n</article>\n<article class=\"prog\" id=\"prog-science\">\n<div class=\"prog-head\">\n<h3>Data Science</h3>\n<p>Python, statistics, machine learning, data analysis, model development and real-world projects.</p>\n</div>\n<div class=\"flow\">\n<span class=\"who-node flow-node\">Data</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Statistics</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">ML</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Models</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Evaluation</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Deployment</span>\n</div>\n</article>\n<article class=\"prog\" id=\"prog-aieng\">\n<div class=\"prog-head\">\n<h3>AI Engineering</h3>\n<p>Python, machine learning, deep learning, Generative AI, LLMs, RAG, AI APIs and deployment.</p>\n</div>\n<div class=\"flow\">\n<span class=\"who-node flow-node\">Python</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">ML</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Deep Learning</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">GenAI</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">LLMs</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Applications</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Deployment</span>\n</div>\n</article>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"paths\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">Learn your way</span>\n<h2 class=\"who-statement\">Three journeys. One outcome.</h2>\n<p class=\"sec-lede\">These aren't just courses. Pick how far you want to take it &mdash; from structured learning to full industry experience.</p>\n<div class=\"paths\">\n<article class=\"path\">\n<span class=\"path-kind\">Full-time course</span>\n<span class=\"path-dur\">30&ndash;45 Days</span>\n<p class=\"path-desc\">Structured learning, practical projects and mentorship.</p>\n<div class=\"flow flow--sm\">\n<span class=\"who-node flow-node\">Learn</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Build</span>\n</div>\n</article>\n<article class=\"path\">\n<span class=\"path-kind\">Internship</span>\n<span class=\"path-dur\">30&ndash;45 Days</span>\n<p class=\"path-desc\">Hands-on experience, real projects, engineering workflow and mentorship.</p>\n<div class=\"flow flow--sm\">\n<span class=\"who-node flow-node\">Build</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Experience</span>\n</div>\n</article>\n<article class=\"path path--featured\">\n<span class=\"path-flag\">Most complete</span>\n<span class=\"path-kind\">Course + Internship</span>\n<span class=\"path-dur\">60&ndash;90 Days</span>\n<p class=\"path-desc\">Learn the foundations, build with them, then apply them on real industry work.</p>\n<div class=\"flow flow--sm\">\n<span class=\"who-node flow-node\">Learn</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Build</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Apply</span><span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Experience</span>\n</div>\n</article>\n</div>\n</div>\n</section>\n<section class=\"page-section section-tint\" id=\"teach\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">How we teach</span>\n<h2 class=\"who-statement\">We teach AI the way engineers use it.</h2>\n<p class=\"sec-lede\">Not just Python syntax. Not just model theory. Not just notebooks.</p>\n<div class=\"flow flow--wrap\">\n<span class=\"who-node flow-node\">Python</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Data</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Machine Learning</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">Generative AI</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">AI Applications</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node\">APIs</span>\n<span class=\"who-link\"><span class=\"who-pulse\"></span></span>\n<span class=\"who-node flow-node flow-node--end\">Deployment</span>\n</div>\n<div class=\"teach-example\">\n<span class=\"teach-tag\">For example &mdash; supply chain</span>\n<p>Instead of only building a generic ML project, learners see how AI actually applies to demand forecasting, inventory prediction, anomaly detection, optimization and operational intelligence.</p>\n<p class=\"teach-point\">Not every learner becomes a supply chain specialist. The point is that they learn AI by understanding how it solves real problems.</p>\n</div>\n</div>\n</section>\n<section class=\"page-section section-light\" id=\"pricing\">\n<div class=\"section-inner\">\n<span class=\"who-eyebrow\">Pricing</span>\n<h2 class=\"who-statement\">Choose your path.</h2>\n<p class=\"sec-lede\">Three ways into every program &mdash; learning, experience, or the complete pathway.</p>\n<div class=\"price-legend\">\n<span><b>Course</b> &mdash; learning</span>\n<span><b>Internship</b> &mdash; experience</span>\n<span><b>Course + Internship</b> &mdash; complete pathway</span>\n</div>\n<div class=\"price-table\">\n<div class=\"price-row\">\n<div class=\"price-prog\">Python + AI</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n<div class=\"price-row\">\n<div class=\"price-prog\">Data Analyst</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n<div class=\"price-row\">\n<div class=\"price-prog\">Data Science</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n<div class=\"price-row\">\n<div class=\"price-prog\">AI Engineering</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Course</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell\">\n<span class=\"price-kind\">Internship</span>\n<span class=\"price-dur\">30&ndash;45 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n<div class=\"price-cell price-cell--best\">\n<span class=\"price-kind\">Course + Internship</span>\n<span class=\"price-dur\">60&ndash;90 days</span>\n<span class=\"price-val\">Price on request</span>\n</div>\n</div>\n</div>\n</div>\n</section>\n</div>\n</div>\n<div class=\"pageview\" data-page=\"supply-chain\" hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Supply Chain Solutions\">\n<div class=\"pageview-bar\">\n<span class=\"pageview-title\">Supply Chain Solutions</span>\n<button class=\"pageview-close\" type=\"button\">&larr;&nbsp; Back to site</button>\n</div>\n<div class=\"pageview-scroll\">\n<header class=\"pageview-hero sc-hero\">\n<span class=\"who-eyebrow\">Supply chain</span>\n<h1 class=\"pageview-h\">Where AI meets operations.</h1>\n<p class=\"sec-lede\">The domain we know best. Real planning experience alongside the engineering \u2014 which is what stops an AI project becoming a science experiment.</p>\n<div class=\"sc-hero-meta\">\n<span><b>Oracle ASCP</b> &middot; Fusion Cloud SCM</span>\n<span><b>Inventory</b> &middot; policy &amp; segmentation</span>\n<span><b>AI</b> &middot; forecasting, risk, control towers</span>\n</div>\n</header>\n<section class=\"sc-studies\">\n<div class=\"sc-studies-head\" data-reveal>\n<span class=\"who-eyebrow\">Business transformation stories</span>\n<h2 class=\"sc-studies-h\">What the work actually looks like.</h2>\n<p class=\"sec-lede\">Each story sets out the business landscape, the opportunity, the planning approach we recommend, and the value it delivers. Read the opening here &mdash; the full story comes by email.</p>\n</div>\n<details class=\"sc-card sc-card--featured\" name=\"sc-study\" data-accent=\"lime\">\n<summary class=\"sc-card-top\">\n<div class=\"sc-card-media\">\n<img src=\"https://cdn.jsdelivr.net/gh/Prajwal434/insu-assets@main/img/case-bts004.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"/>\n<span class=\"sc-card-code\">BTS-004</span>\n</div>\n<div class=\"sc-card-copy\">\n<span class=\"sc-card-tags\">\n<span class=\"sc-tag\">Process manufacturing</span>\n<span class=\"sc-read-time\">Supply planning</span>\n</span>\n<h3 class=\"sc-card-h\">Intelligent Supply Planning for Process Manufacturing</h3>\n<p class=\"sc-card-sub\">Optimizing production, inventory and capacity through connected supply planning.</p>\n<p class=\"sc-card-ex\">Process manufacturing demands precise control over batch formulas, shelf-life limits and production campaigns against shifting demand. Oracle E-Business Suite handles execution and transactions reliably &mdash; but scaling efficiency requires advanced supply planning that can resolve complex operational constraints simultaneously.</p>\n<span class=\"sc-card-go\">Read the story <span aria-hidden=\"true\">&rarr;</span></span>\n</div>\n</summary>\n<div class=\"sc-card-body\">\n<div class=\"sc-sec\" data-sc-num=\"02\">\n<h4 class=\"sc-sec-h\">The business opportunity</h4>\n<ul class=\"sc-pills\">\n<li>Synchronizing production with changing demand</li>\n<li>Balancing inventory across raw materials, intermediates and finished goods</li>\n<li>Managing production capacity across multiple manufacturing facilities</li>\n<li>Improving production utilization through intelligent supply recommendations</li>\n</ul>\n<p class=\"sc-objective\"><b>The objective:</b> build an integrated supply planning process capable of balancing demand, inventory, manufacturing capacity and procurement through one connected planning environment.</p>\n</div>\n<div class=\"sc-sec\" data-sc-num=\"03\">\n<h4 class=\"sc-sec-h\">Recommended planning approach</h4>\n<p class=\"sc-sec-lede\">Oracle Supply Planning Cloud, integrated with Oracle E-Business Suite, provides a centralized planning platform that transforms demand into executable supply recommendations while considering operational realities across the manufacturing network.</p>\n<div class=\"sc-tablewrap\">\n<table class=\"sc-table\">\n<thead><tr><th>Business requirement</th><th>Oracle Supply Planning Cloud</th></tr></thead>\n<tbody>\n<tr><td>Supply Planning</td><td>Constrained &amp; unconstrained planning</td></tr>\n<tr><td>Production Planning</td><td>Planned production orders</td></tr>\n<tr><td>Procurement Planning</td><td>Planned purchase orders</td></tr>\n<tr><td>Distribution Planning</td><td>Planned transfer orders</td></tr>\n<tr><td>Capacity Planning</td><td>Resource &amp; production constraints</td></tr>\n<tr><td>Inventory Planning</td><td>Multi-echelon inventory visibility</td></tr>\n<tr><td>Exception Management</td><td>Planner workbench &amp; action messages</td></tr>\n<tr><td>Scenario Analysis</td><td>Multiple supply plans &amp; simulations</td></tr>\n</tbody>\n</table>\n</div>\n</div>\n<div class=\"sc-gate\">\n<div class=\"sc-gate-fade\" aria-hidden=\"true\"></div>\n<form class=\"sc-gate-form\" data-study=\"BTS-004\">\n<span class=\"sc-gate-kicker\">Continue reading</span>\n<p class=\"sc-gate-copy\">The full story covers the business value delivered &mdash; production planning, resource utilization, material shortages, inventory investment and planner decision-making. We&rsquo;ll email you the complete document.</p>\n<div class=\"sc-gate-row\">\n<label class=\"sc-sr\" for=\"sc-email-1\">Your email address</label>\n<input class=\"sc-gate-input\" id=\"sc-email-1\" type=\"email\" name=\"email\" required placeholder=\"you@company.com\" autocomplete=\"email\"/>\n<button class=\"btn sc-gate-btn\" type=\"submit\">Send it to me</button>\n</div>\n<p class=\"sc-gate-fine\">One email with the story attached. No list, no follow-up sequence.</p>\n</form>\n</div>\n</div>\n</details>\n<details class=\"sc-card sc-card--featured\" name=\"sc-study\" data-accent=\"teal\">\n<summary class=\"sc-card-top\">\n<div class=\"sc-card-media\">\n<img src=\"https://cdn.jsdelivr.net/gh/Prajwal434/insu-assets@main/img/case-bts005.jpg\" alt=\"\" loading=\"lazy\" decoding=\"async\"/>\n<span class=\"sc-card-code\">BTS-005</span>\n</div>\n<div class=\"sc-card-copy\">\n<span class=\"sc-card-tags\">\n<span class=\"sc-tag\">Consumer goods</span>\n<span class=\"sc-read-time\">Integrated business planning</span>\n</span>\n<h3 class=\"sc-card-h\">Enterprise Planning Transformation</h3>\n<p class=\"sc-card-sub\">A phased journey to enterprise-wide supply chain planning.</p>\n<p class=\"sc-card-ex\">Large consumer goods organizations need extensive cross-functional collaboration to plan demand across complex product and distribution portfolios. Oracle E-Business Suite handles enterprise transactions effectively &mdash; but advanced planning maturity requires a connected platform that aligns strategic, tactical and operational goals.</p>\n<span class=\"sc-card-go\">Read the story <span aria-hidden=\"true\">&rarr;</span></span>\n</div>\n</summary>\n<div class=\"sc-card-body\">\n<div class=\"sc-sec\" data-sc-num=\"02\">\n<h4 class=\"sc-sec-h\">The business opportunity</h4>\n<div class=\"sc-quad\">\n<article class=\"sc-quad-item\" data-q=\"1\">\n<h5>One trusted demand plan</h5>\n<p>Unite portfolios into a single, reliable demand view.</p>\n</article>\n<article class=\"sc-quad-item\" data-q=\"2\">\n<h5>Smarter forecasting</h5>\n<p>Improve forecast accuracy with statistics and business insight.</p>\n</article>\n<article class=\"sc-quad-item\" data-q=\"3\">\n<h5>Constraint-aware supply planning</h5>\n<p>Align manufacturing and procurement while anticipating supply constraints.</p>\n</article>\n<article class=\"sc-quad-item\" data-q=\"4\">\n<h5>Connected decision-making</h5>\n<p>Bring Sales, Operations, Finance and Supply Chain together with scenarios and what-if analysis.</p>\n</article>\n</div>\n<p class=\"sc-objective\"><b>The objective:</b> build an enterprise-wide planning ecosystem where every business function plans using a single version of the truth.</p>\n</div>\n<div class=\"sc-sec\" data-sc-num=\"03\">\n<h4 class=\"sc-sec-h\">Transformation roadmap</h4>\n<p class=\"sc-sec-lede\">A phased implementation lets organizations progressively strengthen planning maturity while minimizing business disruption.</p>\n<ol class=\"sc-phases\">\n<li class=\"sc-phase\">\n<span class=\"sc-phase-n\">Phase 1</span>\n<h5>Oracle Demand Management Cloud</h5>\n<p class=\"sc-phase-focus\">Build a reliable and collaborative demand planning process.</p>\n<div class=\"sc-chips\">\n<span>Statistical forecasting</span><span>Forecast collaboration</span>\n<span>Demand analytics</span><span>Forecast accuracy &amp; MAPE</span>\n<span>Seasonality</span><span>Consensus forecasting</span>\n</div>\n</li>\n<li class=\"sc-phase\">\n<span class=\"sc-phase-n\">Phase 2</span>\n<h5>Oracle Supply Planning Cloud</h5>\n<p class=\"sc-phase-focus\">Convert demand into an executable supply plan.</p>\n<div class=\"sc-chips\">\n<span>Production planning</span><span>Supply planning</span>\n<span>Inventory balancing</span><span>Constraints</span>\n<span>Exceptions</span><span>Attributes</span>\n</div>\n</li>\n<li class=\"sc-phase\">\n<span class=\"sc-phase-n\">Phase 3</span>\n<h5>Oracle Sales &amp; Operations Planning Cloud</h5>\n<p class=\"sc-phase-focus\">Align enterprise strategy with operational execution.</p>\n<div class=\"sc-chips\">\n<span>Executive S&amp;OP reviews</span><span>Demand &amp; supply reconciliation</span>\n<span>Scenario planning</span><span>Financial alignment</span>\n</div>\n</li>\n</ol>\n<p class=\"sc-sec-note\">Together, these three phases establish a connected planning ecosystem where operational planning evolves into enterprise-wide business planning.</p>\n</div>\n<div class=\"sc-gate\">\n<div class=\"sc-gate-fade\" aria-hidden=\"true\"></div>\n<form class=\"sc-gate-form\" data-study=\"BTS-005\">\n<span class=\"sc-gate-kicker\">Continue reading</span>\n<p class=\"sc-gate-copy\">The full story covers the business value delivered &mdash; one connected planning platform, forecast accuracy, consensus demand planning, executive scenario planning and a scalable digital planning foundation. We&rsquo;ll email you the complete document.</p>\n<div class=\"sc-gate-row\">\n<label class=\"sc-sr\" for=\"sc-email-2\">Your email address</label>\n<input class=\"sc-gate-input\" id=\"sc-email-2\" type=\"email\" name=\"email\" required placeholder=\"you@company.com\" autocomplete=\"email\"/>\n<button class=\"btn sc-gate-btn\" type=\"submit\">Send it to me</button>\n</div>\n<p class=\"sc-gate-fine\">One email with the story attached. No list, no follow-up sequence.</p>\n</form>\n</div>\n</div>\n</details>\n<p class=\"sc-more-note\" data-reveal>More transformation stories are added as engagements complete.</p>\n</section>\n<section class=\"sc-caps-head\">\n<span class=\"who-eyebrow\">Capabilities</span>\n<h2 class=\"sc-studies-h\">Where we go deep.</h2>\n</section>\n<section class=\"pv-block\">\n<h2>Inventory Optimisation</h2>\n<p class=\"pv-lead\">Most inventory problems are not a forecasting problem \u2014 they are a policy problem. We start with what your policy actually is today, then rebuild it against real demand behaviour.</p>\n<ul class=\"pv-list\">\n<li><b>Demand variability analysis \u2014</b> how erratic each item genuinely is, rather than treating the whole catalogue the same way.</li>\n<li><b>Safety stock modelling \u2014</b> service-level driven, per segment, instead of a blanket days-of-cover rule.</li>\n<li><b>Reorder policy \u2014</b> order points and quantities that reflect real lead times and their variation.</li>\n<li><b>ABC / XYZ segmentation \u2014</b> so effort and stock both go where they change the outcome.</li>\n<li><b>Slow and obsolete stock \u2014</b> surfaced early, with a view on what it is costing to keep holding it.</li>\n</ul>\n<p class=\"pv-note\">Typically the fastest route to freeing working capital without touching service levels.</p>\n</section>\n<section class=\"pv-block\">\n<h2>Oracle ASCP &amp; Fusion SCM</h2>\n<p class=\"pv-lead\">Planning platforms rarely fail because of the software. They fail because the setup does not describe how the business actually operates, so planners stop trusting the output and go back to spreadsheets.</p>\n<ul class=\"pv-list\">\n<li><b>Plan setup and tuning \u2014</b> horizons, buckets and plan options configured against how you really plan.</li>\n<li><b>Sourcing rules \u2014</b> so the plan sources the way your network is genuinely structured.</li>\n<li><b>Constraint modelling \u2014</b> capacity and material constraints that reflect the actual bottlenecks.</li>\n<li><b>Exception design \u2014</b> a manageable set of meaningful exceptions instead of thousands nobody reads.</li>\n<li><b>Planner enablement \u2014</b> so the people using it can explain what the plan is telling them.</li>\n</ul>\n<p class=\"pv-note\">We work on Oracle Advanced Supply Chain Planning and Fusion Cloud SCM \u2014 both new implementations and recovering ones that have drifted.</p>\n</section>\n<section class=\"pv-block\">\n<h2>Where AI fits</h2>\n<p class=\"pv-lead\">Once planning is trustworthy, AI has something solid to stand on. These are the areas we build into \u2014 presented as capabilities we can deliver, not a claim that every one is already running somewhere.</p>\n<div class=\"tagset\">\n<span class=\"tag\">Demand forecasting</span>\n<span class=\"tag\">Inventory optimisation</span>\n<span class=\"tag\">Supply risk prediction</span>\n<span class=\"tag\">Route &amp; logistics optimisation</span>\n<span class=\"tag\">Procurement intelligence</span>\n<span class=\"tag\">Warehouse analytics</span>\n<span class=\"tag\">Supplier analytics</span>\n<span class=\"tag\">Control towers</span>\n</div>\n<div class=\"cta-row\" style=\"margin-top:28px;\">\n<a class=\"btn\" href=\"mailto:info@insudynamics.com?subject=Supply%20chain%20enquiry\">Discuss your operation &rarr;</a>\n</div>\n</section>\n</div>\n</div>\n<div class=\"pageview\" data-page=\"ai-solutions\" hidden aria-hidden=\"true\" role=\"dialog\" aria-modal=\"true\" aria-label=\"AI Solutions\">\n<div class=\"pageview-bar\">\n<span class=\"pageview-title\">AI Solutions</span>\n<button class=\"pageview-close\" type=\"button\">&larr;&nbsp; Back to site</button>\n</div>\n<div class=\"pageview-scroll\">\n<header class=\"pageview-hero\">\n<span class=\"who-eyebrow\">AI solutions</span>\n<h1 class=\"pageview-h\">Your problem. Our AI workflow.</h1>\n<p class=\"sec-lede\">We start with your problem, not our product. Sometimes the honest answer is that AI is not the right tool \u2014 we would rather tell you that early.</p>\n</header>\n<section class=\"pv-block\">\n<h2>How we engage</h2>\n<p class=\"pv-lead\">We don't arrive with a product looking for a problem. Every engagement starts by working out whether AI is genuinely the right answer \u2014 and saying so when it isn't.</p>\n<ol class=\"pv-steps\">\n<li><span>01</span><div><b>Understand</b><p>Your process, your data, and the problem as the people doing the work describe it.</p></div></li>\n<li><span>02</span><div><b>Solve</b><p>Engineers and consultants design the approaches that could realistically work.</p></div></li>\n<li><span>03</span><div><b>Recommend</b><p>The optimal one, judged on feasibility, impact, cost and whether it will scale.</p></div></li>\n<li><span>04</span><div><b>Build</b><p>You choose the approach; we build it around how you actually operate.</p></div></li>\n<li><span>05</span><div><b>Deploy</b><p>Into production, with the people who have to run it afterwards.</p></div></li>\n</ol>\n</section>\n<section class=\"pv-block\">\n<h2>Planning Agent</h2>\n<p class=\"pv-lead\">Planning output is usually correct and still unusable, because nobody can see why it changed. The agent closes that gap \u2014 you ask in plain language and it explains the plan back to you.</p>\n<ul class=\"pv-list\">\n<li><b>Plan-to-plan comparison \u2014</b> what moved since the last run, and what caused it.</li>\n<li><b>Exception triage \u2014</b> which exceptions actually matter, ordered by consequence.</li>\n<li><b>Traceable answers \u2014</b> every number comes back with the data behind it.</li>\n<li><b>Plain-language queries \u2014</b> no report to build, no ticket to raise.</li>\n</ul>\n</section>\n<section class=\"pv-block\">\n<h2>Inventory &amp; Scheduling Agent</h2>\n<p class=\"pv-lead\">The operational questions that consume a planner's day are mostly lookups across systems. The agent answers them directly so the planner can spend the time deciding instead of fetching.</p>\n<ul class=\"pv-list\">\n<li><b>Stock position \u2014</b> what is on hand, committed and available, right now.</li>\n<li><b>Coverage \u2014</b> how long current stock lasts against live demand.</li>\n<li><b>Schedule conflicts \u2014</b> where capacity collides, and what the options are.</li>\n<li><b>Fulfilment checks \u2014</b> whether a given order can realistically be met.</li>\n</ul>\n</section>\n<section class=\"pv-block\">\n<h2>Broader capabilities</h2>\n<p class=\"pv-lead\">Supply chain is where we go deepest, but the engineering approach carries across.</p>\n<div class=\"tagset\">\n<span class=\"tag\">AI &amp; machine learning</span>\n<span class=\"tag\">Generative AI</span>\n<span class=\"tag\">Intelligent automation</span>\n<span class=\"tag\">Data &amp; analytics</span>\n<span class=\"tag\">AI agents</span>\n<span class=\"tag\">Predictive intelligence</span>\n<span class=\"tag\">Computer vision</span>\n<span class=\"tag\">Enterprise AI integration</span>\n</div>\n<div class=\"cta-row\" style=\"margin-top:28px;\">\n<a class=\"btn\" href=\"mailto:info@insudynamics.com?subject=Problem%20worth%20solving\">Discuss your problem &rarr;</a>\n</div>\n</section>\n</div>\n</div>";
function boot(){
  // Wix draws its page into #SITE_CONTAINER. The site has to own the document
  // scroll - two pinned sections and several viewport-fixed elements depend on
  // it - so Wix's own content is hidden rather than laid out alongside it.
  // Published page only; the Wix editor is untouched.
  var w=document.getElementById('SITE_CONTAINER')||document.getElementById('site-root');
  if(w){w.style.display='none';}
  if(document.getElementById('insu-root'))return;
  var h=document.createElement('div');
  h.id='insu-root';
  h.innerHTML=MARKUP;
  document.body.appendChild(h);

  // apply the uploaded image URLs
  var rs=document.documentElement.style;
  rs.setProperty('--img-supplychain',"url('"+IMAGES.supplychain+"')");
  rs.setProperty('--img-ai',"url('"+IMAGES.ai+"')");
  rs.setProperty('--img-python',"url('"+IMAGES.python+"')");
  var lg=h.querySelector('.mark-icon');
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
  var motionToggleBtn = document.getElementById('motionToggle');
  if (motionToggleBtn) {
    motionToggleBtn.setAttribute('aria-pressed', motionOn ? 'true' : 'false');
    motionToggleBtn.addEventListener('click', function () {
      try {
        localStorage.setItem(MOTION_KEY, motionOn ? '0' : '1');
      } catch (e) {}
      location.reload();
    });
  }
  var siteNav = document.getElementById('siteNav');
  if (siteNav) document.body.appendChild(siteNav);
  if (siteNav && 'IntersectionObserver' in window) {
    var navLinks = [].slice.call(siteNav.querySelectorAll('a[data-nav]'));
    var navGroups = {
      '#programs': ['story'],
      '#solutions': ['shift', 'workflow', 'approach', 'solutions'],
      '#supplychain': ['supplychain', 'industries'],
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
    var navMap = { '#programs': 'programs', '#supplychain': 'supply-chain', '#solutions': 'ai-solutions' };
    Object.keys(navMap).forEach(function (href) {
      var a = document.querySelector('.sitenav a[href="' + href + '"]');
      if (a && panels[navMap[href]]) {
        a.addEventListener('click', function (e) { e.preventDefault(); open(navMap[href], true); });
      }
    });
    function syncToHash() {
      var key = location.hash.replace('#', '');
      if (panels[key]) open(key, false); else closeAll(false);
    }
    window.addEventListener('hashchange', syncToHash);
    syncToHash();   // deep link: /#supply-chain lands straight in the view
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
    /* Case-study gate. Posts to a Velo HTTP function on the same origin;
       until that endpoint exists every submit lands in the catch, which is
       why the fallback names a real address rather than failing silently.
       Never leave a form that swallows the request without telling anyone. */
    var GATE_ENDPOINT = '/_functions/caseStudyRequest';
    document.querySelectorAll('.sc-gate-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var input = form.querySelector('.sc-gate-input');
        var btn = form.querySelector('.sc-gate-btn');
        if (!input || !input.value || input.validity.valid === false) return;
        var study = form.getAttribute('data-study') || 'unknown';
        var email = input.value.trim();
        if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }

        function done(msg) {
          form.classList.add('is-sent');
          var p = form.querySelector('.sc-gate-msg') || document.createElement('p');
          p.className = 'sc-gate-msg';
          p.innerHTML = msg;
          if (!p.parentNode) form.appendChild(p);
          var copy = form.querySelector('.sc-gate-copy');
          if (copy) copy.style.display = 'none';
        }

        fetch(GATE_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, study: study })
        }).then(function (r) {
          if (!r.ok) throw new Error('endpoint returned ' + r.status);
          done('Sent. Check your inbox for the full study.');
        }).catch(function () {
          done('We could not send it automatically just yet. Email ' +
               '<a href="mailto:info@insudynamics.com?subject=Case%20study%3A%20' +
               encodeURIComponent(study) + '">info@insudynamics.com</a> ' +
               'and we will reply with the study.');
        });
      });
    });

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
