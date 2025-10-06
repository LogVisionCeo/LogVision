# Design Guidelines: Carbon Footprint Tracking Application

## Design Approach

**Selected Framework:** Material Design with environmental customization
**Rationale:** Enterprise data-heavy application requiring robust component patterns, clear data visualization, and professional credibility. Material's elevation system and structured layouts excel for dashboard interfaces.

**Core Principles:**
- Data clarity over decoration
- Professional environmental aesthetic (sophisticated green, not "eco-friendly cliché")
- Efficient workflows for fleet managers
- Trust through transparency in calculations

---

## Core Design Elements

### A. Color Palette

**Dark Mode (Primary):**
- Background: 220 15% 12%
- Surface: 220 15% 16%
- Surface Elevated: 220 15% 20%
- Primary: 150 45% 45% (forest green - sophisticated, professional)
- Primary Hover: 150 45% 40%
- Success: 142 70% 45% (emissions reduction indicators)
- Warning: 38 90% 50% (high consumption alerts)
- Danger: 0 70% 50% (exceeding targets)
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%
- Border: 220 15% 25%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 150 50% 35%
- Text Primary: 220 15% 15%
- Text Secondary: 220 10% 40%
- Border: 220 15% 85%

### B. Typography

**Font Stack:** Inter (Google Fonts) for UI, JetBrains Mono for numerical data
- Hero/Dashboard Title: 32px, font-bold
- Section Headers: 24px, font-semibold
- Card Titles: 18px, font-medium
- Body Text: 15px, font-normal
- Data Labels: 13px, font-medium, uppercase tracking-wide
- Metrics (large numbers): 28-36px, JetBrains Mono, font-bold
- Table Data: 14px, font-normal

### C. Layout System

**Spacing Scale:** Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Card padding: p-6
- Section spacing: space-y-8
- Component gaps: gap-4 or gap-6
- Dashboard grid gaps: gap-6
- Form field spacing: space-y-4

**Grid System:**
- Dashboard: 12-column grid with responsive breakpoints
- Stats cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Main content area: max-w-7xl mx-auto
- Form layouts: max-w-2xl for single column, max-w-4xl for two-column

### D. Component Library

**Navigation:**
- Side navigation (collapsible on mobile) with icons: Dashboard, New Trip, History, Reports, Settings
- Top bar: Company logo, user profile, notifications bell
- Breadcrumbs for context in sub-pages

**Dashboard Cards:**
- Elevation: shadow-lg with subtle border
- Metric cards: Large number display (CO2, distance, fuel) with trend indicators (↑↓ with percentages)
- Chart cards: Full-width charts with legend and time period selector
- Quick action cards: Prominent "Register New Trip" button

**Forms (Trip Registration):**
- Two-column layout on desktop, single on mobile
- Input groups: Origin/Destination (with map icon), Distance (km), Weight (kg)
- Truck type selector: Dropdown with visual icons
- Fuel type: Radio buttons (Diesel, Biodiesel, Electric)
- Date/Time picker: Material-style calendar
- Calculate button: Primary, full-width on mobile, right-aligned on desktop
- Results display: Card with breakdown of emissions calculation

**Data Tables (Trip History):**
- Sticky header with sorting indicators
- Row hover state with subtle background change
- Alternating row colors for readability
- Action column: View details, Edit, Delete icons
- Filters: Date range picker, truck type multi-select, status badges
- Pagination: Material-style with page numbers
- Export button: Secondary button with download icon

**Charts:**
- Line chart: Emissions over time (primary color fill under line)
- Bar chart: Fuel consumption by truck (grouped by month)
- Donut chart: Emissions by truck type with legend
- Area chart: Cumulative carbon savings
- Use Chart.js or Recharts library

**Buttons:**
- Primary: bg-primary with rounded-lg, px-6 py-3
- Secondary: variant="outline" with border-2
- Danger: For delete actions, red color scheme
- Icon buttons: Rounded-full for table actions

**Status Badges:**
- Completed: Green background with checkmark
- In Progress: Blue/amber
- High Emissions: Red with warning icon
- Reduced Emissions: Green with leaf icon

**Overlays:**
- Modal dialogs: For trip details, confirmation dialogs
- Slide-over panel: For filters and advanced settings
- Toast notifications: Top-right, success/error/info states

### E. Animations

**Minimal, purposeful animations only:**
- Chart data transitions: 300ms ease-in-out when changing time periods
- Card hover: Subtle lift (translateY -1px) with shadow increase
- Loading states: Skeleton loaders for data tables, pulse for cards
- NO scroll animations, NO fancy transitions

---

## Images

**Hero Section Image:**
- Full-width hero banner (not full-height, approximately 400px on desktop)
- Image: Modern logistics/fleet trucks on highway with environmental context (trees, blue sky)
- Overlay: Dark gradient overlay (from bottom) to ensure text readability
- Content: Main heading "Carbon Footprint Tracking System", subheading about reducing emissions
- Positioned: Left-aligned text with CTA button (variant="outline" with backdrop-blur-md background)
- Image source: Use placeholder via Unsplash API (trucks, logistics, sustainability)

**Additional Imagery:**
- Dashboard: Small icon illustrations for empty states (no trips registered yet)
- Reports section: Optional infographic-style visual for "Carbon Saved" equivalent (e.g., trees planted)
- Settings/About: Company sustainability goals visual

---

## Key Page Structures

**Dashboard Layout:**
1. Top metrics row: 4 stat cards (Total CO2, Total Distance, Total Fuel, Carbon Saved)
2. Charts section: 2-column grid (Emissions Trend, Fuel Efficiency)
3. Recent trips table: Last 10 trips with quick actions
4. Quick action card: Prominent "Register New Trip" with icon

**Trip Registration:**
1. Hero with environmental image and form introduction
2. Two-column form with real-time calculation preview
3. Results card showing detailed emissions breakdown
4. Recommendations section: Tips to reduce emissions based on input

**Trip History:**
1. Advanced filters panel (collapsible)
2. Summary cards: Filtered totals
3. Full data table with sorting and pagination
4. Bulk actions: Export selected trips

**Reports:**
1. Time period selector
2. Comparative charts: Month-over-month, year-over-year
3. Downloadable PDF reports
4. Executive summary card with key insights

---

## Accessibility & Quality

- Maintain dark mode consistency across all form inputs
- WCAG AA contrast ratios minimum
- Keyboard navigation for all interactive elements
- Screen reader labels for icons and charts
- Focus indicators: 2px primary color ring with offset
- Error states: Clear messaging with icon indicators
- Loading states: Never show empty states during data fetch

This design balances professional enterprise needs with environmental awareness, creating a trustworthy tool for serious carbon footprint reduction.