# Implementation Plan for Website Updates

## 1. Fix Award Images

### Current Issues:
- Award image paths in Awards.tsx are incorrect (include "/src" prefix)
- Award images haven't been converted to webp format
- Images are not displaying due to these issues

### Solution Steps:
1. Run the image conversion script:
   ```bash
   node scripts/convertImages.js
   ```
   This will:
   - Convert award1.jpeg, award2.jpeg, and award3.jpeg to webp format
   - Create both full-size and thumbnail versions
   - Place them in src/images/webp directory

2. Update Awards.tsx component:
   - Remove "/src" prefix from image paths
   - The OptimizedImage component will automatically:
     - Try to load the webp version first
     - Fall back to original jpeg if webp fails
     - Handle progressive loading with thumbnails

## 2. Implement Booking.com Badge

### Requirements:
- Position badge in bottom-left corner of website
- Use provided embed code
- Ensure it doesn't interfere with existing footer content

### Solution Steps:
1. Add badge to Footer component:
   - Create a new div with fixed positioning
   - Add the Booking.com script
   - Style to ensure proper placement

2. Implementation details:
   ```jsx
   <div className="fixed bottom-0 left-0 z-50">
     <script 
       async 
       src="https://badge.hotelstatic.com/embed.js"
       data-url="https://www.booking.com/hotel/na/urban-farm-haus.html"
       data-size="115"
       data-position="bottom-left"
       data-clickable="true"
     />
   </div>
   ```

## Testing Plan:
1. Verify award images:
   - Check that all three awards display properly
   - Verify progressive loading works
   - Ensure proper sizing and alignment

2. Verify Booking.com badge:
   - Check bottom-left positioning
   - Verify clickability
   - Ensure it doesn't overlap with important content
   - Test on different screen sizes

Once this plan is approved, we can proceed with implementation in Code mode.