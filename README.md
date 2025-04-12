# Bharat Technologies CMS Platform

A sophisticated enterprise content management platform that leverages advanced AI and modular design to create dynamic, adaptive digital ecosystems for organizations, with an enhanced focus on interactive and specialized technology solutions.

## Overview
This project is a sophisticated enterprise content management platform with a modular design, dynamic content capabilities, and AI-enhanced interaction. It follows a modern full-stack JavaScript architecture with a clear separation between frontend and backend components.

## Technology Stack

### Frontend
- **Framework**: React with TypeScript
- **Routing**: Wouter (lightweight routing)
- **Styling**: 
  - Tailwind CSS for utility-first responsive design
  - Custom theming system with dark/light mode support
  - AOS (Animate On Scroll) for scroll animations
- **UI Components**: Shadcn/UI (based on Radix UI primitives)
- **State Management**:
  - React Context API for global state (AgentAI, Contact modals)
  - React Hook Form for form handling
  - Zod for schema validation
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Icons**: Lucide React and Font Awesome

### Backend
- **Server**: Express.js running on Node.js
- **Database**: PostgreSQL with Neon serverless for cloud hosting
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **API Structure**: RESTful API endpoints
- **Authentication**: Passport.js with session-based authentication
- **Session Management**: Express-session with Postgres session store

### AI Integrations
- **OpenAI**: For the Agent AI feature (chat assistant)
- **Optional Integration**: Anthropic Claude (configured but not currently used)

### Build & Development Tools
- **Build Tool**: Vite for fast bundling and development
- **Package Manager**: npm
- **Runtime**: Replit for hosting and development

## System Architecture

### Core Components

1. **Content Management System (CMS)**
   - Content Sections (hierarchical organization)
   - Content Items (individual pieces of content)
   - Hero Sections (page headers)
   - Navigation (site structure)
   - Gallery (media management)
   - Version Control (content revision history)

2. **Frontend Rendering**
   - Component-based architecture
   - Modular page structure
   - Responsive design system
   - Dynamic content loading from CMS

3. **Backend Services**
   - Storage Service (abstracts database operations)
   - Authentication Service
   - Content API endpoints
   - Contact form submission handling
   - Newsletter subscription management
   - AI integration service

4. **AI-Enhanced Features**
   - Agent AI (interactive chat assistant)
   - Content recommendations
   - User interaction analysis

### Data Flow Architecture

1. **Client-side Rendering**
   - React components render UI
   - TanStack Query manages API requests and caching
   - Context providers handle global state

2. **Server-side Processing**
   - Express routes handle API requests
   - Storage interface abstracts database operations
   - Authentication middleware validates requests

3. **Database Interaction**
   - Drizzle ORM handles SQL query generation
   - PostgreSQL stores all application data
   - Schema validation ensures data integrity

4. **Content Workflow**
   - Content creation/editing in CMS
   - Version control system tracks changes
   - Dynamic rendering on frontend pages

## File Structure Highlights

- `client/`: Frontend React application
  - `src/components/`: UI components organized by feature/purpose
  - `src/contexts/`: Global context providers
  - `src/pages/`: Page components for each route
  - `src/hooks/`: Custom React hooks

- `server/`: Backend Express application
  - `routes.ts`: API endpoint definitions
  - `storage.ts`: Data access layer
  - `services/`: Backend service modules
  - `index.ts`: Server entry point

- `shared/`: Code shared between frontend and backend
  - `schema.ts`: Database schema and type definitions

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-organization/bharat-technologies-cms.git
cd bharat-technologies-cms
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL=postgresql://user:password@localhost:5432/bharat_cms
OPENAI_API_KEY=your_openai_api_key
```

4. Run database migrations
```bash
npm run db:push
```

5. Start the development server
```bash
npm run dev
```

## Features

### CMS Features
- Content Management for all website sections
- Media Gallery with categorization
- Navigation structure management
- Hero section customization
- Version control for content

### Website Features
- Responsive design for all devices
- Interactive technology specialization sections
- AI-powered chat assistant
- Contact forms and callback requests
- Newsletter subscriptions

### Admin Features
- User management
- Content publishing workflow
- Analytics dashboard
- API management

## Security Features

- CSRF protection
- Input validation with Zod
- Session-based authentication
- Environment variable secrets management

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is prohibited.

© 2025 Bharat Technologies. All rights reserved.