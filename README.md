# 🎨 Artist Portfolio - Klajdi Murataj

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13.4.9-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3.2-blue)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.7.0-green)](https://mongodb.com/)

A modern, responsive digital art portfolio showcasing the spiritual and philosophical artwork of Klajdi Murataj, a freelance visual artist from Albania. Built with Next.js, featuring a sleek gallery interface, artist information, and integrated shopping links.

## ✨ Features

- **🖼️ Interactive Gallery**: Responsive grid layout with image modal previews
- **📱 Mobile-First Design**: Fully responsive with elegant mobile navigation
- **🎯 Modern UI/UX**: Clean interface built with Tailwind CSS and Framer Motion animations
- **🗄️ Database Integration**: MongoDB integration for dynamic artwork management
- **🛒 Shopping Integration**: Direct links to Artgrab, Teepublic, and Redbubble stores
- **📧 Contact Form**: Integrated contact form with email functionality
- **🎵 Spotify Integration**: Embedded music tracks related to artworks
- **⚡ Performance Optimized**: Next.js optimizations with lazy loading and image optimization

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, React 18, JavaScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: MongoDB with Mongoose ODM
- **Icons**: Heroicons, React Icons
- **Forms**: React Hook Form
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/klajdm/artist-portfolio.git
   cd art-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
artist-portfolio/
├── components/           # React components
│   ├── Layout/          # Layout components (Navbar, Footer)
│   ├── About.js         # About page component
│   ├── Contact.js       # Contact form component
│   ├── Images.js        # Gallery component
│   ├── Modal.js         # Image modal component
│   └── Spotify.js       # Spotify integration
├── lib/                 # Utility libraries
│   └── mongoose.js      # Database connection
├── models/              # Database models
│   └── Artworks.js      # Artwork schema
├── pages/               # Next.js pages
│   ├── api/            # API routes
│   ├── _app.js         # App component
│   ├── _document.js    # Document component
│   ├── about.js        # About page
│   ├── contact.js      # Contact page
│   └── index.js        # Home page
├── public/              # Static assets
├── styles/              # CSS styles
└── README.md
```

## 🎨 Key Components

### Gallery (`components/Images.js`)

- Responsive masonry-style grid
- Lazy loading for performance
- Click-to-expand modal functionality
- Smooth animations with Framer Motion

### About Section (`components/About.js`)

- Artist biography and background
- Professional journey timeline
- Artistic philosophy and inspiration
- Integrated Spotify playlist

### Contact Form (`components/Contact.js`)

- React Hook Form validation
- Direct email integration
- Responsive design
- Professional styling

## 🛒 Shop Integration

The portfolio integrates with multiple platforms:

- **[Artgrab](https://artgrab.co/art/klajdart)** - Licensed artwork
- **[Teepublic](http://tee.pub/lic/7ToRAbSJO5o)** - Apparel and accessories
- **[Redbubble](https://www.redbubble.com/people/klajdart/shop)** - Print-on-demand products

## 📱 Social Media

- **Instagram**: [@klajdmurataj](https://www.instagram.com/klajdmurataj/)
- **Twitter**: [@klajdmurataj](https://twitter.com/klajdmurataj)
- **LinkedIn**: [Klajdi Murataj](https://www.linkedin.com/in/klajdi-murataj-511617285/)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables

Set these in your deployment platform:

```env
MONGODB_URI=your_mongodb_connection_string
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Klajdi Murataj** - Freelance Visual Artist

- Email: klajdart@gmail.com
- Phone: +355675432456

---

⭐ Star this repository if you found it helpful!
