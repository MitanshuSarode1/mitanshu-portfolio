# Mitanshu Sarode - Portfolio Website

A modern, responsive portfolio website built with React.js, featuring dark/light mode toggle, smooth animations, and a professional design.

## 🚀 Features

- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Responsive Design**: Fully responsive across all device sizes
- **Smooth Animations**: Beautiful animations using Framer Motion
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Interactive Elements**: Hover effects, smooth scrolling, and interactive components
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Display of recent projects with live demos and GitHub links
- **Skills Section**: Interactive skills display with progress bars
- **Custom Logo**: SVG-based logo with theme-aware colors

## 🛠️ Technologies Used

- **React 19.1.1** - Frontend framework
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon components

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MitanshuSarode1/mitanshu-portfolio.git
cd mitanshu-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🎨 Customization

### Personal Information
Update your personal information in the following components:
- `src/components/Hero.js` - Main hero section
- `src/components/About.js` - About section and skills
- `src/components/Contact.js` - Contact information
- `src/components/Footer.js` - Footer information

### Projects
Add your projects in `src/components/Projects.js`:
```javascript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    image: "project-image-url",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    live: "https://your-project-demo.com",
    status: "Live", // or "Development"
    type: "Web Development"
  }
];
```

### Skills
Update your skills in `src/components/About.js`:
```javascript
const skills = [
  { name: 'Your Skill', level: 90, icon: <YourIcon /> },
  // Add more skills
];
```

### Logo
Customize the logo in `src/components/Logo.js`. The logo is built with SVG and automatically adapts to the current theme.

## 🎯 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Theme System

The website includes a comprehensive theme system:
- Automatic theme detection based on system preferences
- Manual theme toggle in the header
- Theme persistence using localStorage
- Smooth transitions between themes
- Theme-aware components throughout the site

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure redirects for SPA routing

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/MitanshuSarode1/mitanshu-portfolio/issues).

## 📞 Contact

- **Email**: mitanshupsarode@gmail.com / sarodemitanshu21@gmail.com
- **Phone**: +91 9960856994
- **GitHub**: [MitanshuSarode1](https://github.com/MitanshuSarode1)
- **LinkedIn**: [Mitanshu Sarode](https://www.linkedin.com/in/mitanshu-sarode-33a803287/)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by Mitanshu Sarode