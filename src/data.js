import nliveRadioImg from './assets/nlive-radio.png'
import cursorDaventryImg from './assets/cursor-daventry-meetup.png'
import cursorHackathonImg from './assets/cursor-hackathon.png'
import mongodbTalkStageImg from './assets/mongodb-talk-stage.png'
import mongodbTalkSpeakersImg from './assets/mongodb-talk-speakers.png'
import debianLogoImg from './assets/debian-logo.png'
import cursorNorthamptonLogoImg from './assets/cursor-northampton-logo.png'
import elevateAiContextImg from './assets/elevate-ai-context-engineering.png'
import toastmastersLogoImg from './assets/toastmasters-logo.png'
import barclaysDeveloperDayImg from './assets/barclays-developer-day.png'
import mongodbLanggraphImg from './assets/mongodb-langgraph.png'

export const profile = {
  name: 'Rahulkrishnan R A',
  role: 'AVP & Sr Platform Engineer @ Barclays',
  location: 'Northamptonshire, UK',
  roles: [
    'GenAI & Agentic AI',
    'Cursor Ambassador',
    'OpenUK Ambassador',
    'Public Speaker',
    'Community Builder',
    'Mentor',
  ],
  tagline:
    'Helping organizations accelerate their software development lifecycle through modern DevOps practices, automation, and intelligent agent development.',
  honour: 'OpenUK 2026 Honour',
  email: 'rahulkrishnanfs@gmail.com',
  calendly: 'https://calendly.com/rahulkrishnanfs',
  socials: [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/rahulkrishnanra/' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com/rahulkrishnanfs' },
    { icon: 'bi-twitter-x', label: 'X', url: 'https://x.com/rahulkrishnanra' },
    { icon: 'bi-medium', label: 'Blog', url: 'https://medium.com/@rahulkrishnanfs' },
    { icon: 'bi-easel2-fill', label: 'SpeakerDeck', url: 'https://speakerdeck.com/rahulkrishnanfs' },
    { icon: 'bi-person-video3', label: 'Sessionize', url: 'https://sessionize.com/rahulkrishnanra/' },
  ],
}

export const cursorNorthampton = {
  badge: 'Now building',
  name: 'Cursor Northampton',
  tagline: 'I’m building the UK’s Cursor AI developer community — right here in Northampton.',
  text: 'As a Cursor Ambassador, I run hackathons, meetups and hands-on sessions bringing together developers, founders and AI enthusiasts to build with agentic AI. Come learn, ship and grow with us.',
  link: 'https://cursor-northampton.rahulra.dev/',
  linkLabel: 'Visit the community',
  highlights: [
    { num: '120+', label: 'Builders at our hackathon' },
    { num: 'Monthly', label: 'Meetups & hack nights' },
    { num: 'UK', label: 'Cursor Ambassador' },
  ],
}

export const about = [
  'Rahulkrishnan R A is an Assistant Vice President at Barclays and a Senior Platform Engineer based in Northamptonshire, UK. He is a Cursor Ambassador for the UK developer community, an OpenUK 2026 Honouree, and an active open-source contributor across impactful projects including Debian, Kubernetes and OpenEBS.',
  'Rahul is deeply passionate about GenAI and Agentic AI — exploring how modern LLMs, context engineering and agentic workflows can transform developer experience and accelerate real-world innovation. He continually experiments with next-generation developer tools and AI-assisted automation to push the boundaries of what teams can build.',
  'With a strong background in DevOps, platform engineering, automation and modern infrastructure, he helps organizations improve their software development lifecycle with scalable practices and high-impact tooling. He is building the Cursor community in Northampton and across the UK, and helping grow the OpenUK community through hackathons and meetups.',
  'He embraces DevOps culture, contributes to the open-source ecosystem, and regularly shares his knowledge as a blogger, speaker and community builder. He writes code in Golang, Python and beyond — always driven by a mission to simplify complex technologies and empower developers to work better, faster and smarter.',
]

export const stats = [
  { num: '13+', label: 'Years in Platform Engineering' },
  { num: 'OSS', label: 'Debian · Kubernetes · OpenEBS' },
  { num: '25+', label: 'Talks & Sessions' },
  { num: '2026', label: 'OpenUK Honouree' },
]

export const specialities = [
  { icon: 'bi-robot', title: 'GenAI & AI Agents', text: 'Building autonomous, agentic AI systems at the intersection of LLMs and cloud automation.' },
  { icon: 'bi-cpu', title: 'Agentic AI & Automation', text: 'Designing intelligent automation with context and memory engineering for real-world impact.' },
  { icon: 'bi-cloud-fill', title: 'Cloud & Infrastructure', text: 'Architecting resilient, scalable cloud-native infrastructure and automation.' },
  { icon: 'bi-arrow-repeat', title: 'CI / CD', text: 'Continuous Integration & Continuous Delivery pipelines built for speed and reliability.' },
  { icon: 'bi-box-seam', title: 'Container Orchestration', text: 'Kubernetes-first platforms with production-grade orchestration and scaling.' },
  { icon: 'bi-diagram-3-fill', title: 'Microservices', text: 'Designing distributed, microservice-based systems that scale gracefully.' },
  { icon: 'bi-gear-wide-connected', title: 'Infrastructure Automation', text: 'Infrastructure-as-Code with Terraform and Ansible across environments.' },
  { icon: 'bi-graph-up-arrow', title: 'Monitoring & Logging', text: 'Observability, log management and alerting with the ELK stack and beyond.' },
]

export const skills = [
  { category: 'AI / LLM', icon: 'bi-robot', items: ['LangChain', 'LangGraph', 'CrewAI', 'RAG', 'Memory Engineering', 'Agentic AI'] },
  { category: 'Cloud', icon: 'bi-cloud-fill', items: ['AWS', 'Azure', 'EKS', 'S3', 'Lambda', 'SNS', 'SQS', 'EventBridge'] },
  { category: 'Containers', icon: 'bi-box-seam-fill', items: ['Kubernetes', 'Docker', 'OpenShift'] },
  { category: 'Infrastructure as Code', icon: 'bi-hdd-stack-fill', items: ['Terraform', 'Helm', 'Ansible', 'Chef'] },
  { category: 'CI / CD', icon: 'bi-arrow-repeat', items: ['GitLab CI/CD', 'Jenkins'] },
  { category: 'Languages', icon: 'bi-code-slash', items: ['Golang', 'Python', 'Bash', 'JavaScript'] },
  { category: 'Frontend', icon: 'bi-window', items: ['React.js', 'HTML', 'CSS', 'Bootstrap'] },
  { category: 'Databases', icon: 'bi-database-fill', items: ['MongoDB', 'PostgreSQL (RDS)', 'SQL'] },
  { category: 'Observability', icon: 'bi-graph-up-arrow', items: ['Prometheus', 'Grafana', 'AppDynamics'] },
]

export const certifications = [
  { name: 'Kubernetes and Cloud Native Security Associate (KCSA)', issuer: 'The Linux Foundation', abbr: 'KCSA' },
  { name: 'Kubernetes and Cloud Native Associate (KCNA)', issuer: 'The Linux Foundation', abbr: 'KCNA' },
  { name: 'Certified Kubernetes Application Developer (CKAD)', issuer: 'Cloud Native Computing Foundation', abbr: 'CKAD' },
  { name: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', abbr: 'CKA' },
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', abbr: 'AWS' },
  { name: 'Docker Certified Associate', issuer: 'Docker, Inc.', abbr: 'DCA' },
  { name: 'Certified OpenShift Specialist', issuer: 'Red Hat', abbr: 'RH' },
]

export const leadership = [
  { icon: 'bi-cursor-fill', role: 'Cursor Ambassador', org: 'Cursor — building the AI dev community' },
  { icon: 'bi-flag-fill', role: 'OpenUK Ambassador', org: 'OpenUK' },
  { icon: 'bi-award-fill', role: 'Recognised in OpenUK Honours List 2026', org: 'OpenUK' },
  { icon: 'bi-mic-fill', logo: toastmastersLogoImg, role: 'Vice President — Public Relations', org: 'Northampton Speakers Club — Toastmasters International' },
  { icon: 'bi-mortarboard-fill', role: 'Career Mentor', org: 'Code Your Future' },
  { icon: 'bi-people-fill', role: 'Past Organizer — Kubernetes Meetup', org: 'CNCF Community · engaging 100+ engineers' },
]

export const speaking = [
  {
    event: 'MongoDB.local London',
    meta: 'Old Billingsgate, London, UK · 2026',
    title: 'From prompts to persistence: Agent memory, context, and memory engineering',
    featured: true,
    link: 'https://web.cvent.com/event/e2f806d5-42b5-4858-b993-76502f7fae5f/websitePage:dd8ce793-265b-4455-b826-1857079f87c7',
    recording: 'https://www.youtube.com/watch?v=GIhtQaxhwAc&list=PL4RCxklHWZ9tH01MTlChYwUqN8Cm2tl2r&index=18&t=1011s',
    gallery: [
      { src: mongodbTalkStageImg, alt: 'Rahulkrishnan R A presenting on agent memory at MongoDB.local London' },
      { src: mongodbTalkSpeakersImg, alt: 'MongoDB.local London speakers slide featuring Rahulkrishnan R A' },
    ],
    summary:
      'Discover how AI agents use memory to reason, adapt, and behave consistently, plus practical insights on designing stateful systems at scale.',
  },
  { event: 'MongoDB.local Conference', meta: 'London · 2026', title: 'LangGraph + MongoDB', photo: mongodbLanggraphImg },
  { event: 'Elevate AI Northampton', meta: '2026', title: 'Context Engineering', photo: elevateAiContextImg },
  { event: 'Developer Day at Barclays', meta: '2026', title: 'Internal Developer Experience', photo: barclaysDeveloperDayImg },
  { event: 'Docker & Kubernetes Meetups', meta: '2017', title: 'Containers & Orchestration' },
  { event: 'Mini Debian Conference', meta: '2016', title: 'Open Source & Debian' },
]

export const community = [
  {
    icon: 'bi-lightning-charge-fill',
    type: 'Hackathon · Organized',
    title: 'Cursor Northampton Evening Hackathon',
    text: 'A high-energy AI vibecoding hack night with Cursor & MiniMax — in collaboration with NN1 Dev Club, Barclays and the University of Northampton. 120+ builders shipped fast.',
    link: 'https://luma.com/cw8l2nhn',
    linkLabel: 'View event',
    thumb: cursorHackathonImg,
  },
  {
    icon: 'bi-people-fill',
    type: 'Meetup · Organized',
    title: 'Cursor Northampton Meetup @ Daventry',
    text: 'An evening for Cursor users to build together at the Daventry Innovation Hub — credits, coffee and community.',
    link: 'https://luma.com/655mo00p',
    linkLabel: 'View event',
    thumb: cursorDaventryImg,
  },
  {
    icon: 'bi-youtube',
    type: 'Podcast',
    title: 'Podcast Appearance',
    text: 'Sharing the journey of building an AI developer community and working with agentic AI.',
    link: 'https://youtu.be/1UME77yS0Fo',
    linkLabel: 'Watch',
    thumb: 'https://img.youtube.com/vi/1UME77yS0Fo/hqdefault.jpg',
    playable: true,
  },
  {
    icon: 'bi-broadcast',
    type: 'Radio · Live',
    title: 'NLive Radio',
    text: 'Went live on NLive Radio talking about the Cursor community and the Northampton AI hackathon.',
    link: 'https://player.autopod.xyz/1186497',
    linkLabel: 'Listen (from 00:30)',
    thumb: nliveRadioImg,
    playable: true,
  },
  {
    icon: 'bi-person-badge-fill',
    type: 'Feature · Spotlight',
    title: 'Community Spotlight — NN1 Dev Club',
    text: 'Featured in the NN1 Dev Club Spotlight on platform engineering, Agentic AI and building developer communities across the UK.',
    link: 'https://nn1.dev/spotlight/rahulkrishnan-r-a/',
    linkLabel: 'Read the spotlight',
  },
]

export const opensource = [
  {
    icon: 'bi-cursor-fill',
    avatar: cursorNorthamptonLogoImg,
    title: 'Cursor Community, Northampton',
    text: 'Managing and running the local Cursor community — influencing developers, AI enthusiasts and entrepreneurs.',
    link: 'https://cursor-northampton.vercel.app/',
    linkLabel: 'Visit community site',
  },
  {
    icon: 'bi-diagram-3-fill',
    title: 'Kubernetes Meetup, Chennai',
    text: 'Past organizer of the official CNCF Kubernetes meetup, growing the cloud-native community.',
  },
  {
    icon: 'bi-box-seam-fill',
    logo: debianLogoImg,
    title: 'Debian Community',
    text: 'Contributed to the Debian community, packaging applications for the distribution.',
    link: 'https://qa.debian.org/developer.php?login=rahulkrishnanfs%40gmail.com',
    linkLabel: 'View Debian profile',
  },
]
