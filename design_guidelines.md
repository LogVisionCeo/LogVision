# Design Guidelines: LogVision Carbon Footprint Tracking System

## Design Approach

**Framework:** Material Design with modern tech aesthetic
**Rationale:** Enterprise data application requiring sophisticated component patterns, clear data visualization, and professional credibility. Material's elevation system and structured layouts excel for dashboard interfaces while supporting the modern technological aesthetic.

**Core Principles:**
- Technology-forward sophistication over traditional "eco" aesthetics
- Data-first clarity with refined visual hierarchy
- Generous whitespace and breathing room
- Professional vibrant green (#17620C) as innovation signal
- Elegant simplicity for corporate fleet managers

---

## Core Design Elements

### A. Typography

**Font Stack:** Inter (primary UI), JetBrains Mono (numerical data/metrics)

- **Dashboard Title:** 36px, font-bold, tracking-tight
- **Section Headers:** 24px, font-semibold, tracking-tight
- **Card Titles:** 18px, font-medium
- **Body Text:** 15px, font-normal, leading-relaxed
- **Data Labels:** 13px, font-medium, uppercase, tracking-wider, text-secondary
- **Large Metrics:** 32-40px, JetBrains Mono, font-bold, tabular-nums
- **Table Data:** 14px, font-normal

### B. Layout System

**Spacing Scale:** Tailwind units 2, 4, 6, 8, 12, 16, 24
- **Card Padding:** p-8 (generous, modern)
- **Section Spacing:** space-y-12 or space-y-16
- **Component Gaps:** gap-6 or gap-8
- **Dashboard Grid:** gap-8
- **Container Max Width:** max-w-7xl mx-auto
- **Generous Margins:** Prioritize whitespace for sophisticated feel

**Grid Patterns:**
- Stats Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Charts Section: grid-cols-1 lg:grid-cols-2 
- Forms: max-w-3xl for single column, max-w-5xl for two-column

### C. Component Library

**Navigation:**
- Side navigation (280px desktop, collapsible mobile) with icons and labels
- Navigation items: Dashboard, New Trip, Fleet Overview, Trip History, Analytics, Reports, Settings
- Top bar: LogVision logo (left), global search, notifications bell, user profile avatar
- Breadcrumbs with slash separators for deep navigation

**Dashboard Components:**
- **Metric Cards:** Large number display with trend indicators (↑↓ with percentage change), subtle icon, comparison period text ("vs last month")
- **Chart Cards:** Full-bleed charts with floating legend, time period selector (tabs: 7D, 30D, 90D, 1Y), export button
- **Quick Actions Panel:** Grid of action cards with icons and descriptions
- **Recent Activity Feed:** Timeline-style list with truck icons, timestamps, emission values

**Forms (Trip Registration):**
- Two-column layout (desktop), stacked (mobile)
- Input groups with floating labels
- Truck selector: Visual cards with truck type illustrations, capacity, fuel type
- Route inputs: Origin/Destination with map integration preview
- Date/Time: Modern calendar overlay
- Real-time calculation preview card (sticky on scroll)
- Primary CTA: "Calculate & Save Trip" full-width on mobile

**Data Tables:**
- Sticky header with sort indicators
- Row hover with subtle elevation
- Action menu (three dots) with slide-out options
- Advanced filters: Slide-over panel from right
- Bulk actions toolbar when rows selected
- Pagination with jump-to-page
- Export options: CSV, PDF, Excel

**Charts:**
- Line chart: Emissions trend with gradient fill
- Stacked bar: Emissions by truck type and fuel
- Donut: Fleet composition breakdown
- Area chart: Cumulative carbon offset
- Heatmap: Emissions by day of week/hour

**Buttons:**
- Primary: Vibrant green, rounded-lg, px-6 py-3.5, font-medium
- Secondary: Outlined variant, border-2
- Ghost: Minimal, hover background only
- Icon buttons: rounded-full, subtle hover lift

**Status Indicators:**
- Efficient: Green dot + "Low Emissions"
- Standard: Gray dot + "Normal"
- Alert: Amber dot + "High Consumption"
- Critical: Red dot + "Exceeds Target"

**Modals & Overlays:**
- Full-screen modal for trip details with close button
- Slide-over panels for filters (from right)
- Toast notifications: Top-right, auto-dismiss

### D. Animations

**Minimal, sophisticated transitions:**
- Chart animations: 400ms ease-out when data updates
- Card hover: subtle translateY(-2px) with shadow-xl
- Page transitions: 200ms opacity fade
- Loading: Skeleton screens with subtle shimmer
- NO scroll-triggered animations

---

## Images

**Hero Section (Dashboard Landing):**
- Full-width banner, 500px height (desktop), 300px (mobile)
- Image: Modern, sleek logistics - fleet of trucks on highway at dusk/dawn with dramatic sky, showing technology and movement
- Dark gradient overlay from bottom (40% opacity) for text contrast
- Content overlay: "LogVision" heading (48px, font-bold), subheading "Professional Carbon Footprint Management for Modern Fleets" (20px), CTA button "Start Tracking" with backdrop-blur background
- Source: Unsplash - search "modern logistics trucks highway technology"

**Dashboard Empty States:**
- Illustration-style graphics (minimal, line-art style) for "No trips yet" states
- Icon visuals for milestone achievements (e.g., "First 1000km tracked")

**Analytics/Reports:**
- Infographic elements showing carbon offset equivalents (trees planted, cars off road)
- Optional: Subtle background pattern of truck silhouettes or route lines (very low opacity)

**Settings/About:**
- Team photo or corporate sustainability vision image (if applicable)
- Technology stack visual showing integration points

---

## Key Page Structures

**Dashboard:**
1. Hero banner with CTA
2. Four metric cards in grid (Total Emissions, Distance Traveled, Fuel Consumed, Carbon Offset)
3. Two-column charts: Emissions Trend (line) + Fleet Efficiency (bar)
4. Recent trips table (last 10)
5. Quick actions: Register New Trip (prominent card)

**Trip Registration:**
1. Page header with truck icon
2. Two-column form with real-time preview sidebar
3. Results breakdown card with detailed emissions calculation
4. Recommendations panel: Efficiency tips based on route/load

**Fleet Overview:**
1. Fleet summary cards
2. Interactive truck list with status indicators
3. Performance comparison table
4. Maintenance schedule timeline

**Analytics:**
1. Time period selector (prominent tabs)
2. Three-column metric comparison
3. Multi-chart dashboard (4-6 visualizations)
4. Insights panel with AI-generated recommendations

**Reports:**
1. Report template selector (cards with previews)
2. Customization panel
3. Preview area with export options
4. Scheduled reports management table

---

## Quality Standards

- Dark mode as default with light mode toggle
- WCAG AA contrast minimum (prefer AAA where possible)
- Keyboard navigation throughout
- Focus indicators: 2px vibrant green ring with offset
- Loading states always visible (never blank screens)
- Error states with clear recovery actions
- Consistent form input styling in both themes

This design balances corporate professionalism with environmental purpose, creating a technology-forward platform that fleet managers trust for serious carbon footprint reduction.