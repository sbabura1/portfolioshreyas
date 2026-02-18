# Shreyas Baburayanakoppal Sunil - Portfolio Website

A modern, professional portfolio website built with React, Vite, and Tailwind CSS. Features a clean, Apple-inspired minimal UI with smooth animations and full responsiveness.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Subtle animations and transitions throughout
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Optimized build with Vite
- **Clean Code**: Functional components with reusable structure
- **Production Ready**: Configured for Netlify and Vercel deployment

## 📁 Project Structure

```
shreyas-portfolio/
├── public/
│   └── profile.jpg              # Profile image (add your photo here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky navigation bar
│   │   ├── Hero.jsx             # Hero section with intro
│   │   ├── About.jsx            # About me section
│   │   ├── FeaturedProject.jsx  # Highlighted project
│   │   ├── Projects.jsx         # Projects grid
│   │   ├── Experience.jsx       # Work experience
│   │   ├── Education.jsx        # Education history
│   │   ├── Certifications.jsx   # Certifications list
│   │   ├── TechStack.jsx        # Technical skills
│   │   ├── Contact.jsx          # Contact information
│   │   └── Footer.jsx           # Footer section
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── index.html                   # HTML entry point with SEO tags
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── netlify.toml                # Netlify deployment config
├── vercel.json                 # Vercel deployment config
└── README.md                   # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone or download the project**
   ```bash
   cd shreyas-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image**
   - Place your profile photo in the `public` folder
   - Name it `profile.jpg` (or update the path in `Hero.jsx`)

4. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```
   This creates an optimized build in the `dist` folder

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Deploy to Netlify

#### Option 1: Drag & Drop (Easiest)

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://app.netlify.com/)

3. Drag and drop the `dist` folder to Netlify's deploy zone

4. Your site is live! 🎉

#### Option 2: Connect to Git

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [Netlify](https://app.netlify.com/)

3. Click "New site from Git"

4. Choose your repository

5. Netlify will auto-detect the settings from `netlify.toml`

6. Click "Deploy site"

**Build Settings** (auto-configured via netlify.toml):
- Build command: `npm run build`
- Publish directory: `dist`

### Deploy to Vercel

#### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts (it will auto-detect Vite)

4. Your site is live! 🎉

#### Option 2: Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to [Vercel](https://vercel.com/)

3. Click "New Project"

4. Import your repository

5. Vercel will auto-detect settings from `vercel.json`

6. Click "Deploy"

**Build Settings** (auto-configured via vercel.json):
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## 🎨 Customization

### Update Content

All content is in the component files. Update these files to customize:

- **Personal Info**: `src/components/Hero.jsx`
- **About Text**: `src/components/About.jsx`
- **Projects**: `src/components/Projects.jsx` and `src/components/FeaturedProject.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Education**: `src/components/Education.jsx`
- **Certifications**: `src/components/Certifications.jsx`
- **Tech Stack**: `src/components/TechStack.jsx`
- **Contact Info**: `src/components/Contact.jsx`

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Update Fonts

The project uses system fonts for best performance. To use custom fonts:

1. Add font links to `index.html`
2. Update `tailwind.config.js` font family

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or issues, reach out at:
- Email: shreyasbs2604@gmail.com
- LinkedIn: [linkedin.com/in/shreyas-sunil](https://linkedin.com/in/shreyas-sunil)

---

Built with ❤️ by Shreyas Baburayanakoppal Sunil
