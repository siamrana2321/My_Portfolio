import os
import shutil
from app import freezer

# Set environment variable to trigger freezing
os.environ['FREEZE'] = 'True'

# Create build directory if it doesn't exist
if not os.path.exists('build'):
    os.makedirs('build')

# Generate static files
print("Generating static files...")
freezer.freeze()

# Copy static files to build directory
print("Copying static files...")
if os.path.exists('build/static'):
    shutil.rmtree('build/static')
shutil.copytree('static', 'build/static')

# Create .nojekyll file to disable Jekyll processing
with open('build/.nojekyll', 'w') as f:
    pass

print("Static site generated successfully in the 'build' directory!")
print("You can now deploy the contents of the 'build' directory to GitHub Pages.") 