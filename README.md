<div align="center">
  <img src="./public/logo.png" alt="SuPrazo Technologies Logo" width="120" height="120" />
  
  # 🚀 SuPrazo Technologies Website
  
  ### *Driving Digital Excellence with Smart IT Solutions*
  
  <p align="center">
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  </p>
  
  <p align="center">
    <img alt="License" src="https://img.shields.io/badge/License-MIT-green?style=flat-square" />
    <img alt="Build Status" src="https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square" />
    <img alt="Version" src="https://img.shields.io/badge/Version-1.0.0-blue?style=flat-square" />
  </p>
  
  **A modern, high-performance Next.js website featuring advanced UI/UX, interactive hero sections, glassmorphism effects, magnetic interactions, and premium animations. Built for digital excellence and seamless user experience.**
  
  <p align="center">
    <a href="#-quick-start"><strong>Quick Start</strong></a> ·
    <a href="#-features"><strong>Features</strong></a> ·
    <a href="#-deployment"><strong>Deploy</strong></a> ·
    <a href="#-customization"><strong>Customize</strong></a>
  </p>
</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Modern Design**

- ✅ Glassmorphism effects
- ✅ Magnetic interactions
- ✅ Premium animations
- ✅ Responsive layouts

</td>
<td width="50%">

### ⚡ **Performance**

- ✅ Next.js 14 + App Router
- ✅ TypeScript support
- ✅ Optimized loading
- ✅ SEO ready

</td>
</tr>
<tr>
<td width="50%">

### 🎯 **Interactive Elements**

- ✅ Animated hero sections
- ✅ Particle systems
- ✅ Mouse tracking
- ✅ Color-cycling text

</td>
<td width="50%">

### 🛠️ **Developer Experience**

- ✅ Tailwind CSS
- ✅ Reusable components
- ✅ Clean architecture
- ✅ Easy customization

</td>
</tr>
</table>

---

## 📁 Project Structure

```
📦 suprazo-website
├── 📂 app/                 # Next.js 14 App Directory
│   ├── 📄 layout.tsx       # Root layout component
│   ├── 📄 page.tsx         # Home page
│   ├── 📄 globals.css      # Global styles
│   ├── 📂 about/           # About page
│   ├── 📂 services/        # Services page
│   ├── 📂 products/        # Products page
│   ├── 📂 careers/         # Careers page
│   └── 📂 contact/         # Contact page
├── 📂 components/          # Reusable React Components
│   ├── 📂 ui/              # Base UI components (buttons, cards, etc.)
│   ├── 📄 hero-section.tsx # Interactive hero with animations
│   ├── 📄 footer.tsx       # Animated footer component
│   └── 📄 navigation.tsx   # Main navigation
├── 📂 hooks/               # Custom React hooks
├── 📂 lib/                 # Utilities and animations
├── 📂 public/              # Static assets (images, icons)
└── 📂 styles/              # Additional styles
```

---

## 🚀 Quick Start

> **📋 Prerequisites:** Node.js 18+, npm/pnpm/yarn

<details>
<summary><b>🔧 Method 1: Clone & Run (Recommended)</b></summary>

```bash
# 1️⃣ Clone the repository
git clone https://github.com/deepaksoni47/suprazo-website.git
cd suprazo-website

# 2️⃣ Install dependencies
pnpm install
# or: npm install / yarn install

# 3️⃣ Start development server
pnpm dev
# or: npm run dev / yarn dev

# 4️⃣ Open browser
# Visit: http://localhost:3000
```

</details>

<details>
<summary><b>⚡ Method 2: One-Click Deploy</b></summary>

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/deepaksoni47/suprazo-website)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/deepaksoni47/suprazo-website)

</details>

### 🎉 **You're Ready!**

Your website will be running at `http://localhost:3000` with:

- 🔥 Hot reload enabled
- 📱 Responsive design active
- ✨ All animations working
- 🎨 Interactive elements ready

---

## 🌐 Deployment Instructions

<div align="center">

### 🎯 **Ready to Deploy?**

</div>

<details>
<summary><b>🚀 Production Build & Deploy</b></summary>

```bash
# 1️⃣ Create production build
pnpm build
# or: npm run build / yarn build

# 2️⃣ Test production build locally
pnpm start
# or: npm start / yarn start

# 3️⃣ Deploy to your platform
# Your build files are ready in .next/ folder
```

**Build Output:**

- ✅ Optimized bundles
- ✅ Static assets
- ✅ SEO meta tags
- ✅ Performance optimized

</details>

<details>
<summary><b>☁️ Cloud Deployment Options</b></summary>

| Platform       | Method                  | Auto Deploy | Custom Domain |
| -------------- | ----------------------- | ----------- | ------------- |
| **Vercel** ⚡  | `vercel --prod`         | ✅ Git Push | ✅ Free       |
| **Netlify** 🌐 | `netlify deploy --prod` | ✅ Git Push | ✅ Free       |
| **Railway** 🚂 | `railway deploy`        | ✅ Git Push | ✅ Paid       |
| **Render** 📦  | Git Connect             | ✅ Git Push | ✅ Free       |

**Recommended:** Vercel (made by Next.js creators)

</details>

<details>
<summary><b>🐳 Docker Deployment</b></summary>

```dockerfile
# Dockerfile (create this file)
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
# Build & run Docker container
docker build -t suprazo-website .
docker run -p 3000:3000 suprazo-website
```

</details>

### 🔧 Build Troubleshooting

<div align="center">

| Issue                | Solution                          |
| -------------------- | --------------------------------- |
| **Build fails**      | Check `pnpm install` completed    |
| **Empty pages**      | Remove test files from `app/`     |
| **CSS errors**       | Verify `globals.css` syntax       |
| **Hydration errors** | Check client-side only components |

</div>

---

## 🎨 Customization Guide

<div align="center">

### 🎯 **Make it Yours!**

</div>

<details>
<summary><b>🖼️ Change Logo & Branding</b></summary>

**1. Replace Logo Files:**

```bash
# Replace these files in /public/ folder:
📁 public/
├── 📄 logo.png          # Main logo (recommended: 200x200px)
├── 📄 favicon.ico       # Browser tab icon
├── 📄 apple-touch-icon.png  # iOS app icon
└── 📄 og-image.jpg      # Social media preview
```

**2. Update Logo in Components:**

```tsx
// 📄 components/navigation.tsx - Line ~45
<img src="/your-logo.png" alt="Your Company" />

// 📄 components/footer.tsx - Line ~168
<img src="/your-logo.png" alt="Your Company" />
```

**3. Update Meta Tags:**

```tsx
// 📄 app/layout.tsx - Line ~24
export const metadata: Metadata = {
  title: "Your Company - Your Tagline",
  description: "Your company description...",
  // ... update all fields
};
```

</details>

<details>
<summary><b>🔗 Update Links & Contact Info</b></summary>

**1. Navigation Links:**

```tsx
// 📄 components/navigation.tsx - Line ~15
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // Add/modify your links here
];
```

**2. Social Media Links:**

```tsx
// 📄 components/footer.tsx - Line ~185
<Link href="https://linkedin.com/company/your-company">
<Link href="https://twitter.com/your-handle">
<Link href="https://github.com/your-username">
```

**3. Contact Information:**

```tsx
// 📄 components/footer.tsx - Line ~249
<span>your-email@company.com</span>
<span>+1 (555) 123-4567</span>

// 📄 app/layout.tsx - Line ~131 (Schema.org)
"telephone": "+1 (555) 123-4567",
"email": "contact@yourcompany.com",
```

</details>

<details>
<summary><b>📝 Update Content & Text</b></summary>

**1. Hero Section Text:**

```tsx
// 📄 components/hero-section.tsx - Line ~155
<h1>
  <span>Your Main</span>
  <span>Heading</span>
  <span>Goes Here</span>
</h1>
```

**2. Company Description:**

```tsx
// 📄 components/hero-section.tsx - Line ~165
<p>Your company description and value proposition...</p>

// 📄 components/footer.tsx - Line ~180
<p>Your footer description...</p>
```

**3. Page Content:**

```tsx
// Update content in these page files:
📄 app/about/page.tsx     # About page content
📄 app/services/page.tsx  # Services page content
📄 app/products/page.tsx  # Products page content
📄 app/careers/page.tsx   # Careers page content
📄 app/contact/page.tsx   # Contact page content
```

</details>

<details>
<summary><b>🎨 Customize Colors & Styling</b></summary>

**1. Brand Colors:**

```css
/* 📄 app/globals.css - Line ~6 */
:root {
  --primary: #your-primary-color; /* Main brand color */
  --secondary: #your-secondary-color; /* Accent color */
  --background: #your-background-color; /* Background */
  --foreground: #your-text-color; /* Text color */
}
```

**2. Component Styles:**

```tsx
// 📄 components/hero-section.tsx - Gradient colors
background: 'linear-gradient(135deg, #your-color1, #your-color2)'

// 📄 app/globals.css - Glass effects
.glass-card {
  background: rgba(your-r, your-g, your-b, 0.15);
}
```

**3. Animation Colors:**

```css
/* 📄 app/globals.css - Premium styles section */
--gradient-primary: linear-gradient(135deg, #your-colors);
--shadow-neon: 0 0 30px #your-glow-color;
```

</details>

<details>
<summary><b>📊 Add New Pages</b></summary>

**1. Create New Page:**

```bash
# Create new folder in app directory
mkdir app/your-new-page
```

**2. Add Page Content:**

```tsx
// 📄 app/your-new-page/page.tsx
export default function YourNewPage() {
  return (
    <div>
      <h1>Your New Page</h1>
      <p>Page content here...</p>
    </div>
  );
}
```

**3. Add to Navigation:**

```tsx
// 📄 components/navigation.tsx
const navItems = [
  // ... existing items
  { label: "Your New Page", href: "/your-new-page" },
];
```

</details>

### 🎯 **Quick Customization Checklist**

- [ ] Replace logo files in `/public/`
- [ ] Update company name in all components
- [ ] Change contact information
- [ ] Update social media links
- [ ] Modify hero section text
- [ ] Customize brand colors
- [ ] Update meta tags for SEO
- [ ] Test all changes locally

---

## �️ Development Scripts

<div align="center">

| Command         | Action            | Description                               |
| --------------- | ----------------- | ----------------------------------------- |
| `pnpm dev`      | 🚀 **Start Dev**  | Launch development server with hot reload |
| `pnpm build`    | 🏗️ **Build Prod** | Create optimized production build         |
| `pnpm start`    | ▶️ **Run Prod**   | Start production server locally           |
| `pnpm lint`     | 🔍 **Check Code** | Run ESLint for code quality               |
| `pnpm lint:fix` | 🔧 **Fix Issues** | Auto-fix linting issues                   |

</div>

---

## 🧩 Key Components Overview

<div align="center">

### 🎯 **Component Architecture**

</div>

| Component             | Purpose             | Features                                      |
| --------------------- | ------------------- | --------------------------------------------- |
| **🎨 HeroSection**    | Landing page hero   | Magnetic orb, particles, color-cycling text   |
| **🦶 Footer**         | Site footer         | Glassmorphic design, social links, animations |
| **🧭 Navigation**     | Main navigation     | Responsive, smooth transitions, active states |
| **💼 CareersTeaser**  | Job opportunities   | Subtle animations, call-to-action             |
| **🎯 UI Library**     | Reusable components | Buttons, cards, forms, dialogs in `/ui/`      |
| **🔍 SEO Components** | Search optimization | Dynamic meta tags, structured data            |

---

## 🎨 Styling & Animation System

<div align="center">

### ✨ **Design System Features**

</div>

<table>
<tr>
<td width="50%">

**🎨 Visual Effects**

- Glassmorphism cards & overlays
- Premium gradient animations
- Particle systems with physics
- Magnetic button interactions
- Smooth mouse tracking

</td>
<td width="50%">

**⚡ Performance**

- Hardware-accelerated animations
- Lazy loading components
- Optimized bundle splitting
- SEO-friendly rendering
- Mobile-first responsive design

</td>
</tr>
</table>

---

## 📈 Performance & SEO

<div align="center">

**� Built for Speed & Discovery**

</div>

- ✅ **Core Web Vitals** optimized
- ✅ **SEO meta tags** with Schema.org markup
- ✅ **Sitemap & robots.txt** auto-generated
- ✅ **Image optimization** with Next.js Image
- ✅ **Font optimization** with Google Fonts
- ✅ **Bundle analysis** ready
- ✅ **Progressive loading** implemented

---

## 🤝 Contributing

<div align="center">

**🎯 Want to contribute? We'd love your help!**

</div>

```bash
# 1️⃣ Fork the repository
# Click "Fork" on GitHub

# 2️⃣ Clone your fork
git clone https://github.com/deepaksoni47/suprazo-website.git

# 3️⃣ Create feature branch
git checkout -b feature/amazing-feature

# 4️⃣ Make your changes
# Edit files, add features, fix bugs

# 5️⃣ Commit changes
git commit -m "Add amazing feature"

# 6️⃣ Push to branch
git push origin feature/amazing-feature

# 7️⃣ Open Pull Request
# Go to GitHub and click "New Pull Request"
```

**Contribution Guidelines:**

- 📝 Write clear commit messages
- 🧪 Test your changes locally
- 📚 Update documentation if needed
- 🎨 Follow existing code style
- ✅ Ensure build passes

---

## 📄 License & Legal

<div align="center">

**📋 MIT License**

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

_You can freely use, modify, and distribute this code for personal and commercial projects._

</div>

---

## 👨‍💻 Project Info

<div align="center">

**🏗️ Built by:** [Deepak Soni](https://github.com/deepaksoni47)  
**🏢 Company:** SuPrazo Technologies  
**� Contact:** [info@suprazotech.in](mailto:info@suprazotech.in)  
**🌐 Website:** [suprazotech.in](https://suprazotech.in)

---

### 🔗 Quick Links

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://deepaksoni.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/deepaksoni47)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/_deepak_soni)

</div>

---

<div align="center">

## 💫 **Thank You!**

_If this project helped you, please consider giving it a ⭐ star on GitHub!_

**🚀 "Driving Digital Excellence with Smart IT Solutions" 🚀**

---

_Made with 💙 by Deepak Soni_

</div>
