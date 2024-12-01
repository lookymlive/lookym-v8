# LookyM - Next.js 15 Social Media Platform

## Project Overview

LookyM is a cutting-edge social media platform built with Next.js 15, leveraging the new App Router and modern web technologies.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **State Management**: Zustand
- **Backend**: Appwrite
- **Styling**: Tailwind CSS
- **Authentication**: Appwrite Authentication

## Prerequisites

- Node.js 20+
- npm 10+
- Appwrite Cloud Account

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/lookym-v8.git
cd lookym-v8
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env.local` file in the project root with the following variables:

```bash
# Appwrite Configuration
NEXT_PUBLIC_APPWRITE_URL=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id

# Database Configuration
NEXT_PUBLIC_DATABASE_ID=your_database_id

# Collection IDs
NEXT_PUBLIC_COLLECTION_ID_PROFILES=your_profiles_collection_id
NEXT_PUBLIC_COLLECTION_ID_POSTS=your_posts_collection_id
NEXT_PUBLIC_COLLECTION_ID_COMMENTS=your_comments_collection_id
NEXT_PUBLIC_COLLECTION_ID_LIKES=your_likes_collection_id

# Storage Configuration
NEXT_PUBLIC_BUCKET_ID=your_bucket_id
NEXT_PUBLIC_DEFAULT_AVATAR_ID=your_default_avatar_id
```

### 4. Appwrite Setup

1. Create a new Appwrite project
2. Set up collections:
   - Profiles
   - Posts
   - Comments
   - Likes
3. Configure storage bucket
4. Set up authentication methods

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
lookym-v8/
├── app/                # Next.js App Router
│   ├── api/            # API route handlers
│   ├── components/     # Reusable React components
│   ├── context/        # React context providers
│   ├── hooks/          # Custom React hooks
│   └── layout.tsx      # Main application layout
├── libs/               # Utility functions and services
│   ├── AppWriteClient.tsx  # Appwrite client configuration
│   └── imageUtils.ts   # Image handling utilities
├── public/             # Static assets
└── components/         # Additional shared components
```

## Key Features

- User Authentication
- Profile Management
- Post Creation and Interaction
- Image Upload and Handling
- Responsive Design

## Security Considerations

- Role-based access control
- Server-side validation
- Secure image handling
- Environment variable protection

## Deployment

Recommended platforms:
- Vercel
- Netlify
- Cloudflare Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT License

## Contact

Email: lookymlive@gmail.com
Project Link: [https://github.com/yourusername/lookym-v8](https://github.com/yourusername/lookym-v8)
