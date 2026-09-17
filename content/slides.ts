/**
 * Every word shown on screen lives in this file.
 *
 * `**double asterisks**` inside any string render as emphasis.
 * The order of this array is the order of the deck, and a slide's
 * position is what `?s=` points at.
 */

export type BulletFrame = "stacked" | "split";

export type SlideLink = { label: string; href: string };

export type Slide =
  | {
      type: "title";
      title: string;
      credentials: string[];
      links?: SlideLink[];
    }
  | {
      type: "stack";
      heading: string;
      items: { text: string; sub?: string }[];
    }
  | {
      type: "agenda";
      heading: string;
      intro?: string;
      items: string[];
      note?: string;
    }
  | {
      type: "bullets";
      heading: string;
      frame: BulletFrame;
      intro?: string;
      items: string[];
      note?: string;
    }
  | {
      type: "prose";
      heading: string;
      paragraphs: string[];
      tokensLabel?: string;
      tokens?: string[];
    }
  | {
      type: "quote";
      heading: string;
      quote: string;
      example?: { label: string; text: string };
      notes: string[];
    }
  | {
      type: "table";
      heading: string;
      columns: [string, string, string];
      rows: [string, string, string][];
      note?: string;
    }
  | {
      type: "duo";
      heading: string;
      intro?: string;
      panels: { title: string; body: string }[];
      note?: string;
    }
  | {
      type: "doDont";
      heading: string;
      columns: { label: string; mark: "do" | "dont"; items: string[] }[];
    }
  | {
      type: "closing";
      line: string;
      prompt: string;
      links?: SlideLink[];
    };

export const slides: Slide[] = [
  {
    type: "title",
    title: "Acing your first hackathon: advice I'd give my younger self",
    credentials: [
      "Achyut Katiyar",
      "MSCS, Northeastern",
      "Co-Chair of Hackathon, MIT Bitcoin Expo 2026",
    ],
    links: [
      { label: "achyutkatiyar.com", href: "https://www.achyutkatiyar.com/" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/achyutkatiyar2103/",
      },
    ],
  },
  {
    type: "stack",
    heading: "I started exactly where you are",
    items: [
      { text: "Same place where I did my first hackathon" },
      { text: "First one I ever entered" },
      { text: "First place" },
    ],
  },
  {
    type: "stack",
    heading: "Why listen to me",
    items: [
      { text: "6 hackathon wins since that first one" },
      { text: "Co-Chair of Hackathon, MIT Bitcoin Expo 2026" },
      { text: "I run and judge a 36-hour hackathon" },
    ],
  },
  {
    type: "agenda",
    heading: "What we'll cover",
    items: [
      "What a hackathon actually is",
      "How a hackathon actually unfolds",
      "Picking an idea you can finish",
      "Building it",
      "What I look for as a judge",
      "The demo, and the deadline",
    ],
  },
  {
    type: "bullets",
    heading: "What a hackathon actually is",
    frame: "stacked",
    items: [
      "Build something from scratch, in a fixed window, usually with strangers",
      "Not an exam. Nobody is checking if you know the syllabus",
      "Nobody expects a finished product. They expect a working idea",
    ],
  },
  {
    type: "stack",
    heading: "Myths that keep freshers out",
    items: [
      {
        text: "\"I need to be good at coding first\"",
        sub: "no. You get good by building, and there is no faster way to build than this",
      },
      {
        text: "\"Everyone else is ahead of me\"",
        sub: "most of the room is also here for the first time",
      },
      {
        text: "\"I don't have a team\"",
        sub: "teams get made in the first hour, in the room",
      },
      {
        text: "\"I won't finish\"",
        sub: "most teams don't finish what they planned. They finish what they scoped",
      },
    ],
  },
  {
    type: "bullets",
    heading: "You genuinely cannot lose this",
    frame: "split",
    items: [
      "You leave with a project that exists",
      "You leave knowing people who build things",
      "You leave knowing how a hackathon works, so the next one isn't scary",
      "Or you win",
    ],
  },
  {
    type: "bullets",
    heading: "Why the people who keep showing up pull ahead",
    frame: "stacked",
    items: [
      "A portfolio of things you actually built, not coursework",
      "You get fast at setup, scoping, and demoing, and those skills compound",
      "The network is the real prize: teammates, organizers, judges, sponsors",
      "Recruiters read \"built and shipped in 12 hours\" as evidence, not a claim",
    ],
  },
  {
    type: "agenda",
    heading: "How a hackathon actually unfolds",
    intro: "Five phases:",
    items: [
      "Team and idea",
      "Lock scope",
      "Build the core",
      "Freeze and fix",
      "Demo prep and submit",
    ],
    note: "Roughly half your 12 hours is real building. The rest is setup, food, debugging and demo prep.",
  },
  {
    type: "bullets",
    heading: "Your first hour decides a lot",
    frame: "stacked",
    items: [
      "Coming with a team is great. Coming alone is completely fine",
      "Going solo, look for a team missing your skill, and say what you can do",
      "Don't spend the whole evening shopping for the perfect team",
      "Mixed skills beat four people who all do the same thing",
    ],
  },
  {
    type: "bullets",
    heading: "Use the mentors. Almost nobody will",
    frame: "split",
    items: [
      "Mentors will be present, for free, and they're mostly idle",
      "Talk to one in your first hour: sanity-check your idea and scope",
      "Talk to one when you're stuck, before you burn two hours",
      "Asking for help is never a weakness. It is just the fastest way forward",
    ],
  },
  {
    type: "prose",
    heading: "Pick your domain before you sit down",
    paragraphs: [
      "General advice: research the hackathon. Look at what won last year and why it stood out.",
      "**Tonight:** there's no archive to study, so do the smaller version. Pick your domain before you sit down, so your first hour goes into building instead of debating.",
    ],
    tokensLabel: "Domains",
    tokens: [
      "GenAI",
      "ML",
      "Data Science",
      "Python",
      "Blockchain",
      "Embedded",
      "DevOps",
    ],
  },
  {
    type: "quote",
    heading: "Say your project in one sentence",
    quote:
      "\"This is a **[domain]** project that does **[one specific thing]** for **[someone]**.\"",
    example: {
      label: "Example",
      text: "\"This is a GenAI project that turns a lecture recording into searchable notes for students who missed the class.\"",
    },
    notes: [
      "If you can't say it cleanly, you don't have an idea yet, you have a mood.",
      "Write it down. It's also your demo's opening line.",
    ],
  },
  {
    type: "bullets",
    heading: "Stay inside your track",
    frame: "split",
    items: [
      "Judges score you against the domain you entered",
      "Bolting AI onto a blockchain project dilutes both, and may win neither",
      "Every feature outside your track costs you twice: time, and focus",
      "One domain, done properly, beats two done halfway",
    ],
  },
  {
    type: "bullets",
    heading: "MVP means the one thing you're selling, working",
    frame: "stacked",
    items: [
      "Your MVP is your main selling point, functioning end to end",
      "Not a login page. Not a settings screen. Not a landing page",
      "One path through the app, working, start to finish",
      "Hardcode everything that isn't the point",
    ],
  },
  {
    type: "bullets",
    heading: "Ten half-features lose to one finished one",
    frame: "split",
    items: [
      "Every extra feature steals time from polish on the thing that matters",
      "Judges see about three minutes. They cannot see ten features",
      "A finished small project reads as competent. A broad broken one reads as unfinished",
      "Write your cut list before you start building, and keep it where the team can see it",
    ],
  },
  {
    type: "table",
    heading: "A starting stack for each domain",
    columns: ["Domain", "Fast path", "The trap"],
    rows: [
      [
        "Web app (any domain)",
        "Next.js + Tailwind + shadcn/ui",
        "Hand-rolling components you could pull in",
      ],
      [
        "Mobile app (iOS + Android)",
        "React Native with Expo, or Flutter",
        "Building two native apps separately",
      ],
      ["GenAI", "Streamlit or Next.js + an LLM API", "Fine-tuning a model"],
      [
        "ML",
        "Python + scikit-learn or a pretrained HuggingFace model, Gradio UI",
        "Training from scratch",
      ],
      [
        "Data Science",
        "pandas + Plotly in Streamlit",
        "Ten charts instead of one insight",
      ],
      [
        "Python",
        "FastAPI + SQLite",
        "Overbuilt architecture for a 12-hour app",
      ],
      [
        "Blockchain",
        "Solidity + Hardhat on a testnet, simple React frontend",
        "Not getting faucet funds in hour one",
      ],
      [
        "Embedded",
        "ESP32 / Arduino, serial to a small dashboard",
        "Hardware failing live, on camera",
      ],
      [
        "DevOps",
        "Docker Compose + GitHub Actions on a small app",
        "Nothing visual to show",
      ],
    ],
    note: "General advice, not a requirement. Use what your team already knows.",
  },
  {
    type: "bullets",
    heading: "Deploy something empty in your first hour",
    frame: "stacked",
    items: [
      "Push a hello-world and deploy it before you build anything",
      "Vercel, Render, Streamlit Cloud, whatever fits",
      "Deployment breaks. Find out as early as possible",
      "Embedded and DevOps: same idea, get your device flashing or your pipeline green early",
    ],
  },
  {
    type: "bullets",
    heading: "Commit after every real piece of work. I read your history",
    frame: "split",
    items: [
      "Set up git in the first thirty minutes, one repo, everyone pushing",
      "Commit when something lands: repo set up, a function working, a feature done",
      "As a judge, I open your commit history",
      "One giant commit at the end looks exactly like a copied project",
    ],
  },
  {
    type: "bullets",
    heading: "Write a README the judges can follow",
    frame: "stacked",
    items: [
      "Judges open your repo. The README is the first thing they read",
      "Cover three things: what it does, how to run it, and what it's built with",
      "One short paragraph, then setup steps. Not a product brochure",
      "Don't list what's unfinished. Only flag something if it's visible in the project and doesn't work",
      "AI bloats READMEs by default: badges, emoji headers, a roadmap nobody asked for",
      "Prompt it properly: \"short README, three sections, no marketing language, no badges,\" then cut it yourself",
    ],
  },
  {
    type: "bullets",
    heading: "AI is allowed. Owning your code isn't optional",
    frame: "split",
    items: [
      "AI is permitted tonight. Use it",
      "The rule that matters: you must be able to explain any line on your screen",
      "A judge may point at your code and ask what it does",
      "Use it to move fast on boilerplate. Be careful about letting it write the part you're supposed to understand",
    ],
  },
  {
    type: "duo",
    heading: "What wins hackathons, generally",
    intro: "Two shapes of winner:",
    panels: [
      {
        title: "Deep technical",
        body: "solves something genuinely hard, or improves existing infrastructure",
      },
      {
        title: "Sharp product",
        body: "a real problem, a clear business idea, and UI/UX that sells it",
      },
    ],
    note: "Some projects manage both, and those are the strongest in the room. Either one on its own is enough to win.",
  },
  {
    type: "bullets",
    heading: "What wins tonight",
    frame: "split",
    intro: "In 12 hours, with a first-year team:",
    items: [
      "One thing that visibly works",
      "Explained clearly in one sentence",
      "An obvious reason it should exist",
    ],
    note: "That's it. That beats ambition that didn't compile.",
  },
  {
    type: "bullets",
    heading: "The demo",
    frame: "stacked",
    items: [
      "You get a few minutes. Most of the score is set in the first thirty seconds",
      "**Never live-code.** Record a video of the working flow the moment it works",
      "Structure: the problem in one sentence → show it working → one line on what's next",
      "Don't apologize, don't tour your code, don't list what you didn't finish",
      "Decide who speaks well before you present. Rehearse twice, out loud, on the clock",
    ],
  },
  {
    type: "bullets",
    heading: "Be ready to submit an hour before the deadline",
    frame: "split",
    items: [
      "Be submission ready well before the deadline, not at it",
      "Some organizers give 10 to 15 minutes of grace. Never plan around it",
      "People have come to me after the deadline with a finished project and a sad face. There is nothing I can do",
      "A rough project that was submitted beats a polished one the judges never see",
    ],
  },
  {
    type: "bullets",
    heading: "Surviving the night",
    frame: "stacked",
    items: [
      "Don't all sleep at once. Stagger it",
      "The 2 to 4 AM crash is real. Schedule boring work there, not hard thinking",
      "Eat before you're starving. Water, not only energy drinks",
      "Go to the engagement activities. They're a reset, not a distraction",
    ],
  },
  {
    type: "doDont",
    heading: "Do's and don'ts",
    columns: [
      {
        label: "Do",
        mark: "do",
        items: [
          "Lock your one-sentence idea in the first hour",
          "Deploy early, commit often",
          "Talk to a mentor twice",
          "Freeze features and rehearse the demo",
          "Submit early",
        ],
      },
      {
        label: "Don't",
        mark: "dont",
        items: [
          "Build your core on a tool nobody on the team has touched",
          "Add features outside your track",
          "Live-code the demo",
          "Ship code nobody on the team understands",
          "Leave submitting until the deadline",
        ],
      },
    ],
  },
  {
    type: "bullets",
    heading: "Post it tomorrow",
    frame: "split",
    items: [
      "Write up what you built and what broke, and put it on LinkedIn",
      "Tag your teammates and the organizers",
      "The project outlives the night. So does the fact that you finished one",
      "This is how people find out you build things",
    ],
  },
  {
    type: "closing",
    line: "You cannot lose this. Go build something.",
    prompt: "Questions?",
    links: [
      { label: "achyutkatiyar.com", href: "https://www.achyutkatiyar.com/" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/achyutkatiyar2103/",
      },
    ],
  },
];
