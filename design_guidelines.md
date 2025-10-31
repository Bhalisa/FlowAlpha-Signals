# Forex Trading Signals Dashboard - Design Guidelines

## Design Approach

**Selected Approach:** Design System (Financial Trading Interface)  
**Primary References:** TradingView, Bloomberg Terminal, Interactive Brokers  
**Justification:** Professional trading tools require stability, high information density, and instant data comprehension. Dark themes reduce eye strain during extended trading sessions.

## Core Design Principles

1. **Data Primacy:** Information hierarchy optimized for split-second decision making
2. **Visual Stability:** Consistent patterns for pattern recognition and muscle memory
3. **Alert Clarity:** Unmistakable signal indicators with color-coded confidence levels
4. **Professional Trust:** Sophisticated, minimal aesthetic that conveys reliability

## Color Palette

### Dark Mode (Primary)
- **Background Base:** 220 15% 8% (deep slate)
- **Surface Elevated:** 220 15% 12% (card backgrounds)
- **Surface Interactive:** 220 15% 16% (hover states)
- **Border Subtle:** 220 10% 20% (dividers)

### Signal Colors
- **Buy Signal:** 142 76% 45% (vibrant green)
- **Sell Signal:** 0 72% 55% (alert red)
- **Neutral/Hold:** 48 96% 53% (amber warning)
- **High Confidence:** 217 91% 60% (electric blue accent)

### Status & Indicators
- **Success/Profit:** 142 76% 45%
- **Loss/Warning:** 0 72% 55%
- **Processing:** 48 96% 53%
- **Text Primary:** 220 5% 95%
- **Text Secondary:** 220 5% 65%

## Typography

**Primary Font:** 'Inter' from Google Fonts  
**Monospace Font:** 'JetBrains Mono' for numerical data

### Type Scale
- **Dashboard Title:** text-2xl font-semibold (24px)
- **Section Headers:** text-lg font-medium (18px)
- **Signal Labels:** text-base font-medium (16px)
- **Data Values:** text-sm font-mono (14px, monospace)
- **Timestamps:** text-xs text-secondary (12px)
- **Chart Legends:** text-xs font-medium (12px)

## Layout System

**Spacing Units:** Tailwind units of 2, 4, 6, 8, 12, 16 (p-2, m-4, gap-6, etc.)

### Dashboard Grid
- **Main Container:** max-w-[1920px] mx-auto with p-6
- **Primary Grid:** 3-column layout on xl screens (signals panel | main chart | indicators)
- **Responsive Collapse:** Stack to single column on mobile (sm), 2-column on tablet (md)
- **Card Spacing:** gap-6 between major sections

### Hierarchy Zones
1. **Top Bar (h-16):** Currency pair selector, timeframe controls, account summary
2. **Signal Panel (w-80 xl:w-96):** Live signals feed with scrollable history
3. **Main Chart Area (flex-1):** Price charts with signal overlays
4. **Indicators Panel (w-72):** Real-time indicator values and model confidence

## Component Library

### Navigation & Controls
- **Top Bar:** Fixed header with glass-morphism effect (backdrop-blur-md bg-surface/80)
- **Currency Selector:** Dropdown tabs with active state border-b-2 in accent color
- **Timeframe Buttons:** Segmented control with rounded-lg, active state bg-interactive

### Data Display
- **Signal Cards:** rounded-lg border border-subtle p-4 with color-coded left border (border-l-4)
  - Buy signals: border-l-green-500
  - Sell signals: border-l-red-500
- **Metric Cards:** Grid of stat displays with large monospace numbers and trend indicators
- **Price Ticker:** Animated updates with flash effect on value change

### Charts & Visualization
- **Chart Container:** Full-height chart area with TradingView-style controls
- **Signal Markers:** Triangular indicators on chart (▲ buy, ▼ sell) with semi-transparent backgrounds
- **Confidence Bars:** Horizontal progress bars (h-2 rounded-full) showing model certainty
- **Real-time Updates:** Subtle pulse animation on live data points

### Forms & Inputs
- **Parameter Controls:** Slider inputs with value display for indicator configuration
- **Model Selector:** Radio cards with icon, title, description (basic vs. deep learning)
- **Range Inputs:** Custom styled sliders with visible thumb and track-gradient

### Status & Alerts
- **Live Signal Badge:** Pulsing dot animation (animate-pulse) with "LIVE" label
- **Performance Pills:** Small rounded-full badges showing +/- percentage changes
- **Confidence Indicator:** Color-coded circular progress (green 80%+, amber 60-80%, red <60%)

## Interaction Patterns

### Real-time Updates
- **Data Refresh:** Smooth value transitions with CSS transitions (300ms ease)
- **New Signal Animation:** Slide-in from top with fade (animate-slideDown)
- **Chart Updates:** No animations on price plot, instant updates for responsiveness

### Hover States
- **Cards:** Subtle elevation with shadow-lg and border-subtle brightening
- **Buttons:** Background lightening (bg-interactive hover:bg-surface-interactive)
- **Signal Rows:** Highlight entire row on hover with bg-surface-elevated

### Dashboard Organization
- **Resizable Panels:** Allow users to adjust panel widths (store in localStorage)
- **Collapsible Sections:** Chevron icons for expanding/collapsing indicator details
- **Tab Navigation:** Underline style for model switching (Basic Indicators | Deep Learning)

## Special Requirements

### Chart Integration
- Use lightweight charting library (e.g., Lightweight Charts by TradingView)
- Dark theme with custom color scheme matching dashboard
- Candlestick charts with volume overlay
- Signal markers as custom series overlays

### Performance Metrics
- **Signal History Table:** Virtualized scrolling for performance (react-window)
- **Columns:** Time, Pair, Type, Entry Price, Current Price, P/L, Status
- **Row Colors:** Subtle green tint for profitable, red tint for loss

### Model Indicators
- **Basic Models Section:** Grid of indicator cards (MA, RSI, MACD, Bollinger) with live values
- **Deep Learning Panel:** Neural network visualization (simplified), confidence meter, prediction chart
- **Model Comparison:** Side-by-side accuracy metrics with historical performance graphs

### Responsive Behavior
- **Desktop (xl):** Full 3-column layout with all panels visible
- **Tablet (md-lg):** Main chart full width, collapsible side panels with drawer overlay
- **Mobile (sm):** Stacked vertical layout, tabbed navigation for panels, simplified chart view

## Images

**No hero images required** - This is a utility dashboard focused on data density and real-time information. All visual elements are functional UI components, charts, and data visualizations.