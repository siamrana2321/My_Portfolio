# Data Scientist Portfolio Website

A professional portfolio website for Mohammad Siam Ahmed Rana, built with Flask, Bootstrap, and modern web technologies.

## Features

- Responsive design that works on all devices
- Modern and clean UI with smooth animations
- Detailed sections for showcasing skills, projects, and experience
- Contact form for potential clients or employers
- Interactive elements and visualizations

## Pages

- **Home**: Overview and introduction
- **About**: Detailed information about education, experience, and personal interests
- **Skills**: Comprehensive list of technical and professional skills
- **Projects**: Showcase of data science and machine learning projects
- **Contact**: Contact form and information

## Technologies Used

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **CSS Framework**: Bootstrap 5
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Roboto, Montserrat)
- **Animations**: Custom CSS animations

## Setup and Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio
   ```

2. Create a virtual environment and activate it:
   ```
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install the required packages:
   ```
   pip install -r requirements.txt
   ```

4. Run the application:
   ```
   python app.py
   ```

5. Open your browser and navigate to `http://127.0.0.1:5000/`

## Customization

- **Images**: Replace the placeholder images in the `static/images` directory with your own
- **Content**: Update the text content in the HTML templates to reflect your own information
- **Colors**: Modify the color scheme in `static/css/style.css`
- **Projects**: Add or remove projects in the `projects.html` template

## Deployment

This application can be deployed to various platforms:

### GitHub Pages (Recommended)

1. Fork or clone this repository to your GitHub account
2. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select the `gh-pages` branch as the source
   - Click Save

The GitHub Actions workflow will automatically build and deploy your site whenever you push changes to the main branch.

### Manual Deployment to GitHub Pages

1. Generate the static site:
   ```
   python build.py
   ```

2. The static site will be generated in the `build` directory
3. Push the contents of the `build` directory to the `gh-pages` branch of your repository

### Other Deployment Options

#### Heroku
```
heroku create your-app-name
git push heroku main
```

#### PythonAnywhere
1. Create a PythonAnywhere account
2. Upload your code
3. Set up a web app with Flask

#### AWS, Google Cloud, or Azure
Follow the respective platform's documentation for deploying Flask applications.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Bootstrap for the responsive framework
- Font Awesome for the icons
- Google Fonts for the typography 