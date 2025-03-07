# Mohammad Siam Ahmed Rana - Data Scientist Portfolio

A professional portfolio website for Mohammad Siam Ahmed Rana, built with Flask and designed to be easily deployed to GitHub Pages.

## Overview

This repository contains a professional portfolio website for a data scientist. The website is built with Flask but can be deployed as a static site to GitHub Pages using Frozen-Flask.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Detailed sections for showcasing skills, projects, and experience
- Contact form that works without a backend (using Formspree)
- Automatic deployment to GitHub Pages using GitHub Actions

## How to Use This Repository

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Set Up for Local Development

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r portfolio/requirements.txt

# Run the development server
python portfolio/run.py
```

Visit `http://127.0.0.1:5000/` in your browser to see the website.

### 3. Customize the Portfolio

- Update the content in the HTML templates to reflect your information
- Replace the placeholder images in the `portfolio/static/images` directory
- Modify the color scheme in `portfolio/static/css/style.css`
- Update the Formspree form ID in `portfolio/templates/contact.html`

### 4. Deploy to GitHub Pages

#### Automatic Deployment (Recommended)

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the `gh-pages` branch as the source
   - Click Save

The GitHub Actions workflow will automatically build and deploy your site whenever you push changes to the main branch.

#### Manual Deployment

1. Generate the static site:
   ```bash
   cd portfolio
   python build.py
   ```

2. The static site will be generated in the `build` directory
3. Push the contents of the `build` directory to the `gh-pages` branch of your repository

## Customization Guide

### Contact Form

The contact form uses [Formspree](https://formspree.io/) to handle form submissions without a backend. To set it up:

1. Create a free account on Formspree
2. Create a new form and get your form ID
3. Replace `your-formspree-id` in `portfolio/templates/contact.html` with your actual form ID

### Images

Replace the placeholder images in the `portfolio/static/images` directory:

- `profile.jpg`: Your professional photo
- `hero-bg.jpg`: Background image for the hero section
- `project1.jpg` to `project9.jpg`: Images for your projects

### Social Media Links

Update the social media links in the footer and contact page with your actual profiles.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 