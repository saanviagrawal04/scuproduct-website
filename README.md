# Product Launch - Santa Clara University Product Management Club

A modern, responsive website for the Santa Clara University Product Launch Product Management Club (PLPMC). This elegant website showcases the club's mission, upcoming events, board members, and provides a newsletter subscription system.

## Features

- **Elegant Design**: Modern, responsive interface with beautiful typography and seasonal aesthetics
- **Club Information**: Comprehensive showcase of the Product Launch mission and values
- **Board Member Profiles**: Meet the team behind Product Launch with professional headshots
- **Event Showcase**: Highlight upcoming events and workshops
- **Newsletter Subscription**: Custom email signup form with occupation tracking
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Professional Typography**: Beautiful Cormorant Garamond font for enhanced readability
- **Modern Navigation**: Light, transparent navigation with glassmorphism effects

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express.js
- **Styling**: Custom CSS with CSS Grid, Flexbox, and CSS Custom Properties
- **Typography**: Google Fonts (Cormorant Garamond, Inter, Playfair Display)
- **Icons**: Font Awesome 6.0
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ProductLaunch-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Production Deployment

1. **Install dependencies**
   ```bash
   npm install --production
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## Key Features Explained

### Typography & Design
- **Cormorant Garamond**: Primary font for headings and titles, providing elegant seasonal aesthetics
- **Inter**: Clean, modern sans-serif for body text and navigation
- **Playfair Display**: Serif font for section headers and accents

### Newsletter System
- **Custom Form**: Name, email, and occupation fields
- **Backend Processing**: Server-side validation and logging
- **Fallback Option**: Google Form alternative link

### Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom Properties**: Easy theming and maintenance

### Recent Design Improvements
- **Typography**: Updated to Cormorant Garamond for elegant seasonal aesthetics
- **Navigation**: Light, transparent overlay with modern glassmorphism effects
- **Section Dividers**: Beautiful burgundy dividers (#8d2b2b) for visual separation
- **Image Handling**: Comprehensive error handling with fallback placeholders
- **Spacing**: Optimized section spacing for better visual hierarchy

## API Endpoints

- `POST /api/newsletter` - Handle newsletter subscriptions
- `GET /` - Serve the main website

## File Structure

```
ProductLaunch-Website/
├── index.html          # Main HTML file with club information
├── styles.css          # Comprehensive CSS with modern design system
├── script.js           # Frontend JavaScript for interactivity
├── server.js           # Node.js backend server
├── package.json        # Project dependencies and scripts
├── README.md           # This documentation file
├── DEPLOYMENT.md       # Deployment instructions
└── Images/             # Club member photos and assets
    ├── Mai.jpeg        # Treasurer headshot
    ├── Saanvi.png      # Co-President headshot
    ├── Vaishnavi.jpg   # Co-President headshot
    ├── Noor.jpeg       # VP of Marketing headshot
    ├── Saee.jpeg       # VP of Relations headshot
    ├── Sanjita.png     # Secretary headshot
    ├── firstMeeting1.jpeg # Club meeting photo
    ├── SCU.jpeg        # Background image
    └── logo.png        # Club logo
```

## Customization

### Typography & Fonts

The website uses a sophisticated font hierarchy:

```css
:root {
    --font-primary: 'Cormorant Garamond', serif;      /* Headings */
    --font-secondary: 'Inter', sans-serif;            /* Body text */
    --font-accent: 'Playfair Display', serif;         /* Section headers */
}
```

### Color Scheme

The design system uses carefully chosen colors:

```css
:root {
    --primary-color: #8d2b2b;        /* Burgundy - main brand color */
    --secondary-color: #f4f1ec;      /* Cream - background accents */
    --accent-color: #d4a574;         /* Gold - highlights */
    --text-dark: #2c2c2c;            /* Dark text */
    --text-light: #666;              /* Light text */
    --white: #ffffff;                /* Pure white */
}
```

### Adding New Sections

To add new sections to the website:

1. Add HTML structure to `index.html`
2. Add corresponding CSS styles to `styles.css`
3. Add any JavaScript functionality to `script.js`

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check if image files exist in the project directory
   - Verify file extensions match HTML references
   - Check browser console for 404 errors

2. **Fonts not displaying**
   - Ensure internet connection for Google Fonts
   - Check if fonts are properly imported in HTML
   - Verify font names in CSS match imported fonts

3. **Server not starting**
   - Check if port 3000 is available
   - Verify Node.js and npm are installed
   - Check package.json for correct dependencies

### Debug Mode

To enable debug logging, add this to `server.js`:

```javascript
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Contact

- Email: productspacescu@gmail.com
- Location: Santa Clara University, Business School
- LinkedIn: [SCU Product Launch](https://www.linkedin.com/company/scu-product-space/)
- Instagram: [@scu_productlaunch](https://www.instagram.com/scu_productlaunch/)

---

**Note**: This website showcases the Product Launch Product Management Club at Santa Clara University. For questions or collaboration opportunities, please reach out through the contact information above. 