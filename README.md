# Hemant Singh - Data Science Portfolio

A modern, responsive, and professional portfolio website built with React, Vite, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **Project Filtering**: Filter projects by technology stack
- **Skills Visualization**: Interactive skill progress bars
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Fast Loading**: Built with Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scroll Animations**: React Intersection Observer

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/hs469833-hub/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Publications.jsx
│   │   ├── Certifications.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/           # Portfolio data
│   │   └── portfolioData.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
└── README.md           # This file
```

## 🎨 Customization

### Update Portfolio Data

Edit `src/data/portfolioData.js` to update your personal information, skills, projects, and other content.

### Add Profile Image

1. Add your profile image to the `public/` folder
2. Update the Hero component to use your image

### Add Resume

1. Add your resume PDF to the `public/` folder as `resume.pdf`
2. Update the download button in the Hero component

## 🌐 Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect and deploy your React app

### Netlify

1. Run `npm run build`
2. Drag and drop the `dist` folder to Netlify

### GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist",
  "predeploy": "npm run build"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📝 Sections

- **Hero**: Introduction with profile image and CTA buttons
- **About**: Professional summary and key focus areas
- **Education**: Academic background with timeline
- **Skills**: Technical skills with progress visualization
- **Experience**: Professional experience timeline
- **Projects**: Featured projects with filtering
- **Publications**: Research publications
- **Certifications**: Professional certifications
- **Achievements**: Key accomplishments with animated counters
- **Contact**: Contact form and social links

## 🎯 Key Features Implemented

- ✅ Dark/Light mode toggle
- ✅ Smooth scroll animations
- ✅ Project filtering by category
- ✅ Skills progress bars
- ✅ Responsive navigation
- ✅ Contact form with validation
- ✅ Social media integration
- ✅ SEO optimization
- ✅ Performance optimization
- ✅ Accessible design

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use!

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Hemant Singh**
- Email: hs469833@gmail.com
- GitHub: https://github.com/hs469833-hub
- LinkedIn: https://www.linkedin.com/in/hemant-singh-8831b2378

---

Built with ❤️ using React, Vite, and TailwindCSS
