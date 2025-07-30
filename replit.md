# Restaurant Wood Supply Application

## Overview

This is a full-stack web application for Retimaca, a Miami-based commercial wood supplier specializing in premium cooking wood for restaurants, pizzerias, and commercial kitchens. The application serves as a business website with contact form functionality for quote requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js API server with RESTful endpoints
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend development and building

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for brand colors

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **API Design**: RESTful endpoints for contact form submissions and data retrieval

### Database Schema
The application uses two main entities:
- **Users**: Basic user management (id, username, password)
- **Contact Requests**: Quote requests from restaurants (restaurant details, contact info, wood preferences, delivery address)

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas (shared between frontend/backend)
   - POST request to `/api/contact` endpoint
   - Backend validates and stores contact request
   - Success/error response returned to frontend

2. **Contact Requests Retrieval**:
   - Admin can view all contact requests via GET `/api/contact-requests`
   - Data fetched from storage layer and returned as JSON

3. **Static Content**:
   - Multiple pages (Home, About, Products, Contact) with static content
   - Component-based architecture for reusable UI elements

## External Dependencies

### Production Dependencies
- **Database**: Neon serverless PostgreSQL (`@neondatabase/serverless`)
- **UI Framework**: Extensive Radix UI component suite for accessible components
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **State**: TanStack Query for server state management
- **Utilities**: date-fns for date handling, clsx for conditional styling

### Development Tools
- **Build**: Vite with React plugin for fast development
- **Database**: Drizzle Kit for schema management and migrations
- **TypeScript**: Full TypeScript support across the stack
- **Styling**: PostCSS with Tailwind CSS and autoprefixer

## Deployment Strategy

The application is configured for deployment with:

1. **Build Process**:
   - Frontend built with Vite to static assets
   - Backend bundled with esbuild for Node.js deployment
   - TypeScript compilation and type checking

2. **Environment Configuration**:
   - Database URL required via `DATABASE_URL` environment variable
   - Drizzle configured for PostgreSQL with automatic migrations
   - Development/production mode switching

3. **Development Workflow**:
   - Hot module replacement for frontend development
   - Automatic server restart for backend changes
   - Integrated error overlay for debugging

The current storage implementation uses in-memory storage for development, but the abstracted interface allows easy switching to database persistence by implementing the `IStorage` interface with Drizzle ORM operations.