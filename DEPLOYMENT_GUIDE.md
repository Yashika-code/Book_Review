# 🚀 Deployment Guide for Book Review Platform

## Current Issue
The frontend is deployed on Vercel but the backend is not deployed, causing API calls to fail with "Failed to fetch books" error.

## Solution Steps

### 1. ✅ Frontend Deployment (Already Done)
- Frontend is deployed on Vercel: `https://book-review-platform-tau-sepia.vercel.app/`
- Routing is now fixed with `frontend/vercel.json`

### 2. 🔧 Backend Deployment Required

You need to deploy the backend to a platform that supports Node.js. Here are the recommended options:

#### Option A: Railway (Recommended)
1. Go to [Railway.app](https://railway.app)
2. Sign up with GitHub
3. Create a new project
4. Connect your GitHub repository
5. Select the `backend` folder as the root directory
6. Add environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_super_secure_jwt_secret_key_min_32_characters
   JWT_EXPIRE=7d
   NODE_ENV=production
   ```
7. Deploy and get the backend URL (e.g., `https://your-app.railway.app`)

#### Option B: Render
1. Go to [Render.com](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set build command: `cd backend && npm install`
5. Set start command: `cd backend && npm start`
6. Add environment variables (same as above)
7. Deploy and get the backend URL

#### Option C: Heroku
1. Install Heroku CLI
2. Create a new app: `heroku create your-app-name`
3. Set buildpacks: `heroku buildpacks:set heroku/nodejs`
4. Add environment variables: `heroku config:set KEY=value`
5. Deploy: `git push heroku main`

### 3. 🔗 Update Frontend API URL

After deploying the backend, update the frontend configuration:

1. Create `frontend/.env` file:
   ```
   VITE_API_BASE_URL=https://your-backend-url.com/api
   ```

2. Or update `frontend/src/api/axios.js`:
   ```javascript
   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-backend-url.com/api';
   ```

3. Redeploy the frontend to Vercel

### 4. 🗄️ Database Setup

Make sure you have a MongoDB Atlas database:
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster
3. Get the connection string
4. Add it to your backend environment variables

## Quick Fix for Testing

If you want to test locally:
1. Start the backend: `cd backend && npm run dev`
2. Start the frontend: `cd frontend && npm run dev`
3. The app will work on `http://localhost:3000`

## Current Status
- ✅ Frontend deployed and routing fixed
- ❌ Backend not deployed (causing API errors)
- ❌ Database connection not configured

## Next Steps
1. Deploy the backend using one of the options above
2. Update the frontend API URL
3. Test the complete application
