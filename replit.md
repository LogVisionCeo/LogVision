# LogVision - Carbon Footprint Tracking Application

## Overview

LogVision is a comprehensive carbon footprint tracking application designed for fleet management and logistics companies. The application enables users to track, analyze, and reduce CO2 emissions from truck transportation by monitoring fuel consumption, distance traveled, cargo weight, and vehicle types. It provides real-time route monitoring with satellite imagery, detailed emissions analytics, sustainability reports, drone-based replanting mapping functionality, and actionable recommendations for reducing environmental impact.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR (Hot Module Replacement)
- **Wouter** for lightweight client-side routing instead of React Router
- **TanStack Query v5** for server state management, caching, and data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Material Design** principles with environmental customization
- Custom theming system supporting dark mode (primary) and light mode
- Design system emphasizes data clarity, professional environmental aesthetic, and efficient workflows

**State Management**
- React Context API for theme management
- TanStack Query for server-side data synchronization
- Local component state with React hooks for UI interactions

**Visualization & Mapping**
- **Recharts** for data visualization (emissions trends, fuel efficiency charts, comparative analytics)
- **Leaflet** with OpenStreetMap integration for route mapping and satellite imagery
- Custom chart components for emissions tracking and fuel consumption analysis
- Replanting map visualization with drone capacity metrics and area analysis

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- Custom middleware for request logging and error handling
- Development mode integrates Vite middleware for HMR
- Production mode serves static built assets

**API Design Pattern**
- RESTful API structure with `/api` prefix for all application routes
- Currently uses in-memory storage (`MemStorage` class) as a placeholder
- Designed for easy migration to database-backed storage through `IStorage` interface abstraction

**Data Processing**
- Client-side emissions calculations using configurable factors:
  - Fuel consumption rates by truck type (light: 0.08, medium: 0.12, heavy: 0.18 L/km)
  - Emission factors by fuel type (diesel: 2.68, biodiesel: 1.8, electric: 0.2 kg CO2/L)
  - Weight-based consumption adjustments
  - Carbon offset calculations (trees needed based on 22kg CO2/tree/year)
- Replanting calculations for drone-based reforestation:
  - Drone capacity: 20,000 capsules per operation
  - Success rate: 60% germination effectiveness
  - Area coverage: 10.44 km² replanting zone
  - Effective trees: 12,000 trees (capacity × success rate)
  - Tree density: 1,149 trees/km²
  - Annual CO₂ offset: 264 tonnes (12,000 trees × 22kg/tree/year)

### Data Storage

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL with Neon serverless adapter
- Schema-first approach with TypeScript type inference
- Zod integration for runtime validation of insert operations

**Database Schema**
```typescript
trips table:
  - id: varchar (UUID, primary key)
  - origin: text
  - destination: text
  - distance: real
  - cargoWeight: real
  - truckType: text
  - fuelType: text
  - fuelConsumed: real
  - co2Emissions: real
  - date: timestamp
```

**Storage Layer Abstraction**
- `IStorage` interface defines CRUD operations
- `MemStorage` implementation for development/testing
- Designed for seamless swap to PostgreSQL-backed implementation
- Session storage configured for connect-pg-simple (PostgreSQL sessions)

### External Dependencies

**Third-Party Services**
- **Neon Database** - Serverless PostgreSQL hosting
- **OpenStreetMap Nominatim API** - Geocoding service for city-to-coordinates conversion
- **OpenStreetMap Tile Server** - Map tile rendering for route visualization
- **Google Fonts** - Inter (UI text) and JetBrains Mono (numerical data) font families

**Key Libraries**
- **React Hook Form** with Zod resolver for form validation and management
- **date-fns** for date manipulation and formatting
- **Radix UI** primitives for accessible, unstyled component foundation
- **class-variance-authority (CVA)** for component variant management
- **cmdk** for command palette functionality
- **Leaflet** for interactive mapping capabilities

**Development Tools**
- **Replit plugins** for development banner, error overlay, and cartographer
- **Drizzle Kit** for database migrations and schema management
- **esbuild** for server-side bundling in production
- **tsx** for TypeScript execution in development

### Authentication & Authorization

Currently not implemented - the application uses a basic user storage interface that is prepared for future authentication integration. The schema includes user fields (id, username) suggesting planned authentication features.

### Design System & Theming

**Color Palette Strategy**
- Sophisticated emerald green primary color (#059669 / HSL 158 94% 30%) for professional environmental branding
- Dark mode as primary interface with optional light mode
- HSL color system with CSS custom properties for theme switching
- Specialized colors for environmental indicators (success, warning, danger)

**Typography Hierarchy**
- Inter font family for general UI
- JetBrains Mono for numerical data and metrics display
- Responsive sizing from 13px (labels) to 36px (large metrics)

**Component Architecture**
- Elevation system using opacity-based overlays (`--elevate-1`, `--elevate-2`)
- Consistent border radius system (3px, 6px, 9px)
- Shadow system for depth and hierarchy
- Hover and active states with elevation effects

## Application Features

### Core Features
1. **Dashboard** - Real-time overview of emissions, trips, and environmental impact
2. **Trip Management** - Add, track, and analyze individual truck trips
3. **Historical Data** - Browse and filter past trips with detailed metrics
4. **Reports** - Generate sustainability reports and emissions analytics
5. **Route Monitoring** - Real-time route visualization with satellite imagery and GPS navigation toggle
6. **Replanting Map** - Drone-based reforestation tracking with area visualization and impact calculations
7. **Settings** - Application configuration and preferences

### Recent Updates (November 2025)
- Fixed primary color system to exact #059669 emerald green across all themes
- Replaced Sparkles icons with Trees icons throughout the dashboard
- Redesigned "Emissões Totais" card with consistent green background
- Implemented GPS navigation directions toggle in route monitoring
- Added comprehensive "Mapeamento de Replantio" section with:
  - 10.44 km² area visualization with imported satellite imagery
  - Drone specifications (20,000 capsule capacity, 60% success rate)
  - Automated calculations for effective trees, density, and CO₂ offset
  - Three-step methodology visualization (mapping, capsule deployment, monitoring)
  - Annual environmental impact metrics (264 tonnes CO₂ compensation)