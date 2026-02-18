# 🚀 DEPLOYMENT GUIDE

## Quick Start Checklist

✅ **Before Deploying:**
1. Replace `public/profile.jpg` with your actual photo
2. Update GitHub links in components to your actual repositories
3. Review all content in components for accuracy
4. Test locally with `npm run dev`
5. Build successfully with `npm run build`

---

## 📦 NETLIFY DEPLOYMENT (Recommended - Easiest)

### Method 1: Drag & Drop Deploy (No Git Required)

**Perfect for immediate deployment!**

1. **Build the project:**
   ```bash
   cd shreyas-portfolio
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://app.netlify.com/drop
   - Drag the entire `dist` folder into the upload area
   - Wait 30 seconds
   - Your site is LIVE! 🎉

3. **Get your URL:**
   - Netlify gives you a URL like: `random-name-123456.netlify.app`
   - You can change this in Site Settings → Domain Management

4. **Update your site:**
   - Make changes locally
   - Run `npm run build` again
   - Drag the new `dist` folder to Netlify
   - Automatic update!

### Method 2: Git Integration (Auto-Deploy on Push)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com/
   - Click "New site from Git"
   - Choose GitHub and select your repository
   - Click "Deploy site"

3. **Configuration (Auto-detected from netlify.toml):**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - No need to configure manually!

4. **Auto-Deploy:**
   - Every push to `main` branch auto-deploys
   - Preview branches available for PRs

---

## 🔷 VERCEL DEPLOYMENT

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd shreyas-portfolio
   vercel
   ```

3. **Follow prompts:**
   - Login with GitHub/GitLab/Email
   - Accept defaults (auto-detected from vercel.json)
   - Get instant URL!

4. **Production Deploy:**
   ```bash
   vercel --prod
   ```

### Method 2: Vercel Dashboard

1. **Push to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your Git repository
   - Click "Deploy"

3. **Configuration (Auto-detected):**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Features:**
   - Automatic HTTPS
   - Global CDN
   - Preview deployments for each PR

---

## 🛠️ CUSTOM DOMAIN SETUP

### On Netlify:

1. Go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration steps
4. Wait for SSL certificate (automatic)

### On Vercel:

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed
4. SSL auto-configured

---

## 🔧 TROUBLESHOOTING

### Build fails with "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### "Page not found" on refresh
- ✅ Already configured in netlify.toml and vercel.json
- Both platforms redirect all routes to index.html

### Images not loading
- Make sure `profile.jpg` is in the `public` folder
- Check file name matches exactly (case-sensitive)

### CSS not applying
```bash
npm run build
# Delete old dist folder
rm -rf dist
npm run build
```

---

## 📊 PERFORMANCE OPTIMIZATION

Your site is already optimized with:
- ✅ Vite production build
- ✅ Automatic code splitting
- ✅ Minified CSS and JS
- ✅ Tree shaking
- ✅ Modern browser optimization

**Expected Performance:**
- Lighthouse Score: 95-100
- First Contentful Paint: < 1s
- Time to Interactive: < 2s

---

## 🔐 ENVIRONMENT VARIABLES (If Needed Later)

### On Netlify:
1. Site Settings → Environment Variables
2. Add key-value pairs
3. Redeploy

### On Vercel:
1. Project Settings → Environment Variables
2. Add variables
3. Redeploy

---

## 📱 TESTING CHECKLIST

Before going live, test:

- [ ] Desktop view (1920x1080)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All navigation links work
- [ ] Smooth scrolling functions
- [ ] All external links open in new tab
- [ ] Contact buttons work
- [ ] GitHub links are correct
- [ ] No console errors
- [ ] Images load properly

---

## 🎯 POST-DEPLOYMENT

1. **Share Your Portfolio:**
   - Add URL to LinkedIn
   - Add to GitHub profile
   - Include in resume
   - Share on social media

2. **Monitor Analytics** (Optional):
   - Add Google Analytics
   - Use Netlify/Vercel analytics
   - Track visitor engagement

3. **Keep Updated:**
   - Add new projects regularly
   - Update experience section
   - Add new certifications
   - Refresh tech stack

---

## 💡 QUICK FIXES

**Forgot to update something?**

1. Edit the file locally
2. Run `npm run build`
3. For Netlify: Drag new `dist` folder
4. For Vercel: `vercel --prod`
5. Done! ✨

**Want to see changes before deploying?**

```bash
npm run dev
# View at http://localhost:5173
```

---

## 🆘 NEED HELP?

**Common Resources:**
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

**Contact:**
- Email: shreyasbs2604@gmail.com
- LinkedIn: linkedin.com/in/shreyas-sunil

---

**Remember:** Your portfolio is your digital first impression. Keep it updated, test regularly, and showcase your best work!

Good luck! 🚀
