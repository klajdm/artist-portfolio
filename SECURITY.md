# Security Policy

## Supported Versions

We take security seriously and aim to address vulnerabilities promptly. This project currently supports security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within this artist portfolio project, please follow these guidelines:

### How to Report

1. **DO NOT** open a public GitHub issue for security vulnerabilities
2. Send an email to: `klajdimurati3@gmail.com`
3. Include "SECURITY VULNERABILITY" in the subject line
4. Provide detailed information about the vulnerability

### What to Include

Please include the following information in your report:

- **Description**: A clear description of the vulnerability
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Impact**: Potential impact and severity assessment
- **Environment**: Browser, operating system, Node.js version
- **Screenshots**: If applicable, include screenshots or videos
- **Suggested Fix**: If you have suggestions for fixing the issue

### Response Timeline

- **Initial Response**: We will acknowledge your report within 48 hours
- **Investigation**: We will investigate and provide updates within 7 days
- **Resolution**: Critical vulnerabilities will be addressed within 14 days
- **Disclosure**: We will coordinate with you on responsible disclosure timing

### Scope

This security policy applies to:

- The main application code
- Dependencies and third-party libraries
- Deployment configurations
- Database interactions
- Authentication and authorization mechanisms

### Out of Scope

The following are typically out of scope:

- Social engineering attacks
- Physical security issues
- Issues in third-party services (MongoDB, Vercel, etc.)
- Vulnerabilities requiring physical access to infrastructure

### Security Best Practices

We follow these security practices:

- **Environment Variables**: Sensitive data is stored in environment variables
- **Input Validation**: All user inputs are validated and sanitized
- **Dependencies**: Regular dependency updates and vulnerability scanning
- **HTTPS**: All production deployments use HTTPS
- **Database Security**: MongoDB connections use secure authentication

### Responsible Disclosure

We believe in responsible disclosure and ask that you:

- Give us reasonable time to address the vulnerability before public disclosure
- Avoid accessing, modifying, or deleting data that doesn't belong to you
- Don't perform testing that could harm the availability or integrity of our services
- Don't social engineer our staff or users

### Recognition

We appreciate security researchers and will acknowledge your contribution:

- We will credit you in our security advisories (unless you prefer to remain anonymous)
- We will provide updates on our progress addressing the issue
- We may feature responsible reporters in our project acknowledgments

### Contact Information

For security-related inquiries:

- **Email**: klajdart@gmail.com
- **Response Time**: Within 48 hours
- **Language**: English preferred

### Legal

This project is provided "as is" without warranty. By participating in our security disclosure process, you agree to:

- Act in good faith to avoid privacy violations and disruptions
- Report vulnerabilities as soon as possible after discovery
- Avoid violating any laws or regulations

Thank you for helping keep our project and users safe!
