# Data Scientist Portfolio Website

A modern, responsive portfolio website template for data scientists. This template showcases your skills, projects, and experience in a professional and engaging way.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Sections for:
  - Hero/Introduction
  - About Me
  - Skills
  - Projects (with filtering)
  - Work Experience
  - Contact Form
- Mobile-friendly navigation
- Smooth scrolling
- Project filtering system
- Contact form (needs backend integration)
- Social media integration
- Animated elements on scroll

## Setup Instructions

1. Clone this repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Navigate to the project directory:
```bash
cd portfolio
```

3. Customize the content:
   - Update `index.html` with your personal information
   - Replace the profile image in the `images` folder
   - Add your project images to the `images` folder
   - Update social media links
   - Modify the color scheme in `css/style.css` if desired

4. Deploy to GitHub Pages:
   - Push your changes to GitHub
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select the branch you want to deploy (usually `main` or `master`)
   - Save the settings

## Customization

### Colors
You can customize the color scheme by modifying the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #0e76a8;
    --secondary-color: #30475e;
    --accent-color: #f05454;
    --light-color: #f8f9fa;
    --dark-color: #222831;
    --text-color: #333;
    --text-light: #777;
    --border-color: #ddd;
}
```

### Projects
To add or modify projects, update the project cards in the Projects section of `index.html`. Each project card follows this structure:
```html
<div class="project-card" data-category="ml">
    <div class="project-img">
        <img src="images/project1.jpg" alt="Project 1">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p>Project description</p>
        <div class="project-tags">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" target="_blank"><i class="fab fa-github"></i></a>
            <a href="#" target="_blank"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
</div>
```

### Skills
Update the skills section in `index.html` to reflect your expertise. Each skill category follows this structure:
```html
<div class="skill-category">
    <h3>Category Name</h3>
    <div class="skill-items">
        <div class="skill-item">
            <div class="skill-info">
                <p>Skill Name</p>
                <p>90%</p>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: 90%"></div>
            </div>
        </div>
    </div>
</div>
```

### Contact Form
The contact form is currently set up to log form submissions to the console. To make it functional, you'll need to:
1. Set up a backend server
2. Update the form submission handler in `js/script.js`
3. Add your server endpoint to handle the form data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Dependencies

- Font Awesome 6.4.0 (for icons)
- Google Fonts - Poppins (for typography)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page. 