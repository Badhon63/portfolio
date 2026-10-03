# 👨‍💻 Badhon – Personal Portfolio

A modern, responsive developer portfolio showcasing my projects, skills, and experience. Built with Next.js and Tailwind CSS, with a dark-first theme and smooth, clean UI.

## ✨ Features

- 🌙 Dark / light theme support with `next-themes` (dark by default)
- 📱 Fully responsive design for mobile, tablet and desktop
- 🗂️ Project showcase with images, tags, tech stack, live and GitHub links
- 🧰 Skills section with technology icons
- ⚡ Optimized images using `next/image`
- 🚀 Deployed on Vercel

---

## 🛠️ Tech Stack

| Category       | Technologies   |
| -------------- | -------------- |
| **Framework**  | Next.js, React |
| **Language**   | TypeScript     |
| **Styling**    | Tailwind CSS   |
| **Icons**      | React Icons    |
| **Theming**    | next-themes    |
| **Deployment** | Vercel         |

---

## 🧠 Skills

- **Frontend:** HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS
- **Backend:** Node.js, Express.js, PHP, Python, Java
- **Database:** MongoDB, MySQL
- **Tools & OS:** Git, GitHub, Linux, Vercel

---

## 📁 Featured Projects

| Project             | Description                                                                            | Links                                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **LegalEase**       | Online lawyer hiring platform with role-based dashboards and Stripe payments           | [Live](https://mr-punctuation-meoc.vercel.app/)                                                        |
| **Mr. Punctuation** | AI-powered grammar and punctuation corrector with PDF/TXT download and offline support | [Live](https://mr-punctuation-meoc.vercel.app/) · [GitHub](https://github.com/Badhon63/Mr.punctuation) |
| **PetPulse**        | Premium pet marketplace for adoption and pet supplies                                  | [Live](https://petpulse-flame.vercel.app/) · [GitHub](https://github.com/Badhon63/petpulse)            |
| **UsedBay**         | Second-hand marketplace to buy and sell pre-owned products                             | [Live](https://used-bay.vercel.app/) · [GitHub](https://github.com/Badhon63/UsedBay)                   |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or later
- npm, yarn or pnpm

### Installation

```bash
# Clone the repository
git clone YOUR_PORTFOLIO_GITHUB_LINK

# Go to the project folder
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 📂 Project Structure

```
portfolio/
├── public/
│   └── image/            # Project screenshots and static images
├── src/
│   ├── app/              # App Router pages and layout
│   └── Components/       # Reusable UI components (Projects, Skills, etc.)
├── next.config.ts        # Next.js config (remote image domains)
├── package.json
└── README.md
```

---

## 🖼️ Adding a New Project

Add a new object to the projects data file:

```typescript
{
  slug: "project-slug",
  name: "Project Name",
  image: "/image/project.png",   // file must be inside public/image/
  category: "Full Stack",
  tags: ["Next.js", "Tailwind CSS"],
  description: "Short description of the project.",
  techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  liveLink: "https://your-live-link.vercel.app/",
  githubLink: "https://github.com/Badhon63/your-repo",
  challenges: "The main challenge and how you solved it.",
  improvements: "Planned future improvements.",
}
```

> **Note:** For local images, the path must start with `/`. For external images, add the hostname to `images.remotePatterns` in `next.config.ts`.

---

## 📬 Contact

- 📧 Email: limaakterbadhon9@gmail.com
- 💼 LinkedIn: [LINKEDIN](www.linkedin.com/in/lima-akter-badhon)
- 🐙 GitHub: [@Badhon63](https://github.com/Badhon63)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you like this project, consider giving it a star!
