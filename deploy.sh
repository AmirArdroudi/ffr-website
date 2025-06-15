#!/bin/bash

# --- Deployment Script for freshfaceroya.com ---

# Exit immediately if a command exits with a non-zero status.
set -e

echo "🚀 Starting deployment..."

# 1. Go to the project directory
# This ensures the script runs from the correct location.
cd /var/www/ffr-website || exit

# 2. Pull the latest changes from the 'main' branch on GitHub.
# If your branch is called 'master', change 'main' to 'master'.
echo " pulling latest changes from Git..."
git pull origin main

# 3. Install or update dependencies.
# This is important if you added or updated any packages.
echo "📦 Installing/updating NPM dependencies..."
npm install

# 4. Build the Vite application for production.
# This creates the final static files in the 'dist' folder.
echo "️ Building the application..."
npm run build

echo "✅ Deployment finished successfully!"
