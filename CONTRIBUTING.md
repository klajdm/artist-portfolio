# Contributing to Artist Portfolio

First off, thank you for considering contributing to this artist portfolio project! 🎨 Your contributions help make this project better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Issue Guidelines](#issue-guidelines)
- [License](#license)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to klajdart@gmail.com.

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check [existing issues](https://github.com/klajdm/artist-portfolio/issues) to avoid duplicates.

**How to submit a good bug report:**

- Use a clear and descriptive title
- Describe the exact steps to reproduce the problem
- Provide specific examples and screenshots if applicable
- Describe the expected vs. actual behavior
- Include your environment details (browser, OS, Node.js version)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- Use a clear and descriptive title
- Provide a detailed description of the suggested enhancement
- Include mockups or examples if applicable
- Explain why this enhancement would be useful

### 🔧 Code Contributions

Look for issues labeled with:

- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `bug` - Something isn't working
- `enhancement` - New feature or request

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git
- MongoDB (local or cloud)

### Development Setup

1. **Fork and clone the repository**

   ```bash
   git fork https://github.com/klajdm/artist-portfolio.git
   git clone https://github.com/YOUR_USERNAME/artist-portfolio.git
   cd artist-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your MongoDB URI
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Process

### Project Structure

```
artist-portfolio/
├── components/          # Reusable React components
├── lib/                # Utility functions and configurations
├── models/             # Database models
├── pages/              # Next.js pages and API routes
├── public/             # Static assets
├── styles/             # CSS and styling files
```

### Tech Stack

- **Frontend**: Next.js, React, JavaScript
- **Styling**: Tailwind CSS, Framer Motion
- **Database**: MongoDB, Mongoose
- **Forms**: React Hook Form
- **Icons**: Heroicons, React Icons

### Development Guidelines

1. **Component Creation**

   - Use functional components with hooks
   - Keep components small and focused
   - Use descriptive prop names
   - Include proper PropTypes or TypeScript

2. **Styling**

   - Use Tailwind CSS classes
   - Follow mobile-first responsive design
   - Maintain consistent spacing and colors
   - Use Framer Motion for animations

3. **Database**
   - Use Mongoose for data modeling
   - Include proper validation
   - Follow RESTful API principles
   - Handle errors gracefully

## Pull Request Process

### Before Submitting

- [ ] Test your changes thoroughly
- [ ] Run `npm run lint` and fix any issues
- [ ] Run `npm run build` to ensure production build works
- [ ] Update documentation if needed
- [ ] Add or update tests if applicable

### PR Checklist

- [ ] Clear, descriptive title
- [ ] Detailed description of changes
- [ ] Link to related issues
- [ ] Screenshots for UI changes
- [ ] Tests pass
- [ ] No merge conflicts

### PR Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

- [ ] Tested locally
- [ ] Added/updated tests
- [ ] Tested on multiple browsers/devices

## Screenshots

If applicable, add screenshots

## Related Issues

Fixes #(issue number)
```

## Style Guidelines

### JavaScript/React

- Use ES6+ features
- Prefer const/let over var
- Use meaningful variable names
- Keep functions small and focused
- Add comments for complex logic

```javascript
// Good
const artworkItems = artworks.filter((artwork) => artwork.isVisible);

// Bad
const items = data.filter((x) => x.visible);
```

### CSS/Tailwind

- Use utility-first approach
- Group related classes together
- Use responsive prefixes consistently
- Avoid custom CSS when possible

```jsx
// Good
<div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">

// Bad
<div className="custom-container">
```

### Commit Messages

Follow the [Conventional Commits](https://conventionalcommits.org/) specification:

```
feat: add artwork search functionality
fix: resolve modal close button issue
docs: update installation instructions
style: improve mobile navigation layout
refactor: optimize image loading component
test: add contact form validation tests
```

### Git Workflow

1. Create feature branch from `main`
2. Make changes in small, logical commits
3. Push feature branch to your fork
4. Create pull request against `main`
5. Respond to code review feedback
6. Squash commits before merge (if requested)

## Issue Guidelines

### Bug Reports

Use the bug report template:

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior

**Expected behavior**
What you expected to happen

**Screenshots**
If applicable, add screenshots

**Environment:**

- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Node.js: [e.g. 18.17.0]
```

### Feature Requests

Use the feature request template:

```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is

**Describe the solution you'd like**
A clear description of what you want to happen

**Additional context**
Any other context or screenshots
```

## Testing

### Manual Testing

- Test on multiple browsers (Chrome, Firefox, Safari)
- Test responsive design on different screen sizes
- Test form validation and error handling
- Test image loading and modal functionality

### Automated Testing

- Write unit tests for utility functions
- Test React components with React Testing Library
- Test API endpoints
- Ensure accessibility compliance

## Documentation

- Update README.md for new features
- Add inline code comments for complex logic
- Update API documentation for backend changes
- Include examples in documentation

## Recognition

Contributors will be recognized in:

- README.md contributors section
- Release notes for significant contributions
- Project acknowledgments

## Questions?

Feel free to reach out:

- **Email**: klajdimurati3@gmail.com
- **GitHub Issues**: For project-related questions
- **Social Media**: [@klajdmurataj](https://twitter.com/klajdmurataj)

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to the Artist Portfolio project! 🚀
