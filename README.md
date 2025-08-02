# WebCraft - Professional Web Development Agency

A modern, responsive website for a web development agency built with React, TypeScript, and Tailwind CSS. Features a complete contact system with EmailJS integration for direct form submissions to email.

## 🌟 Features

- **Modern Design**: Beautiful, professional UI with dark/light mode toggle
- **Fully Responsive**: Works perfectly on all devices and screen sizes
- **Multiple Pages**: Home, About, Services, Portfolio, Contact, and Consultation
- **Contact Forms**: Direct email integration without backend complexity
- **EmailJS Integration**: Form submissions sent directly to your email
- **TypeScript**: Fully typed for better development experience
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Friendly**: Structured markup and meta tags

## 🚀 Live Demo

[View Live Website](https://your-domain.com) <!-- Update with your actual domain -->

## 📸 Screenshots

### Homepage

![Homepage](https://via.placeholder.com/800x400?text=Homepage+Screenshot)

### Services Page

![Services](https://via.placeholder.com/800x400?text=Services+Page+Screenshot)

### Contact Form

![Contact](https://via.placeholder.com/800x400?text=Contact+Form+Screenshot)

## 🛠️ Built With

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3 + Radix UI Components
- **Build Tool**: Vite
- **Routing**: React Router 6
- **Forms**: EmailJS (no backend required)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Backend**: Express (minimal, mainly for development)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/webcraft-agency.git
   cd webcraft-agency
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up EmailJS** (for contact forms)

   - Create account at [EmailJS.com](https://www.emailjs.com/)
   - Follow setup instructions in `EMAILJS_SETUP.md`
   - Update credentials in `client/lib/emailService.ts`

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:8080
   ```

## ⚙️ Configuration

### EmailJS Setup

Update the configuration in `client/lib/emailService.ts`:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: "your_service_id",
  TEMPLATE_ID_CONTACT: "your_contact_template_id",
  TEMPLATE_ID_CONSULTATION: "your_consultation_template_id",
  PUBLIC_KEY: "your_public_key",
  TO_EMAIL: "your-email@example.com",
};
```

### Customization

- **Colors**: Update theme in `client/global.css` and `tailwind.config.ts`
- **Content**: Modify page content in `client/pages/`
- **Components**: Reusable UI components in `client/components/ui/`
- **Branding**: Update logo and company name in `client/components/Navigation.tsx`

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components (buttons, cards, etc.)
│   │   └── Navigation.tsx  # Main navigation component
│   ├── pages/             # Route components
│   │   ├── Index.tsx      # Homepage
│   │   ├── About.tsx      # About page
│   │   ├── Services.tsx   # Services page
│   │   ├── Portfolio.tsx  # Portfolio page
│   │   ├── Contact.tsx    # Contact page
│   │   └── Consultation.tsx # Consultation booking
│   ├── lib/               # Utilities
│   │   └── emailService.ts # EmailJS integration
│   └── global.css         # Global styles and theme
├── server/                # Express backend (minimal)
├── shared/                # Shared types
└── public/                # Static assets
```

## 🎯 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run typecheck    # Check TypeScript types

# Production
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm test            # Run tests

# Code Quality
npm run format.fix  # Format code with Prettier
```

## 🌐 Deployment

### Netlify (Recommended)

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/spa`
4. Deploy!

### Vercel

1. Connect your GitHub repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist/spa`
5. Deploy!

### Manual Deployment

```bash
npm run build
# Upload dist/spa/ contents to your web server
```

## 📧 Contact Form Setup

The contact forms use EmailJS to send emails directly from the frontend without requiring a backend server. This means:

- ✅ No server hosting costs
- ✅ No database required
- ✅ Emails delivered directly to your inbox
- ✅ Reliable and secure
- ✅ Free up to 200 emails/month

See `EMAILJS_SETUP.md` for detailed setup instructions.

## 🎨 Customization Guide

### Colors and Branding

1. Update CSS variables in `client/global.css`
2. Modify Tailwind config in `tailwind.config.ts`
3. Replace logo and brand name in navigation

### Content

- Update homepage content in `client/pages/Index.tsx`
- Modify about page in `client/pages/About.tsx`
- Customize services in `client/pages/Services.tsx`
- Update portfolio projects in `client/pages/Portfolio.tsx`

### Contact Information

Update your contact details in:

- `client/pages/Index.tsx` (homepage contact section)
- `client/pages/Contact.tsx` (contact page)
- `client/lib/emailService.ts` (email configuration)

## 🐛 Troubleshooting

### Forms not sending emails?

1. Check EmailJS configuration
2. Verify templates are set up correctly
3. Check browser console for errors
4. Test EmailJS templates in their dashboard

### Styling issues?

1. Check Tailwind CSS is properly configured
2. Verify CSS variables in `global.css`
3. Clear browser cache

### Build errors?

1. Run `npm run typecheck` to check TypeScript errors
2. Ensure all dependencies are installed
3. Check Node.js version compatibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Ankit Yadav**

- Email: ankityadav564682@gmail.com
- Location: Noida, Greater Noida & Gurugram

## 🙏 Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide](https://lucide.dev/) for beautiful icons
- [EmailJS](https://www.emailjs.com/) for email functionality
- [Vite](https://vitejs.dev/) for fast development experience

---

Made with ❤️ for web development agencies looking for a professional online presence.
