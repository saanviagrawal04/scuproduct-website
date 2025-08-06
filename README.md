# ProductSpace - Santa Clara University Product Management Club

A modern, responsive website for the Santa Clara University Product Management Club featuring real job postings from LinkedIn RSS feeds.

## Features

- **Real Job Postings**: Automatically fetches and displays real product management job opportunities from LinkedIn RSS feeds
- **Responsive Design**: Modern, mobile-friendly interface
- **Job Filtering**: Filter jobs by type (internship/full-time)
- **Community Job Posting**: Allow community members to post job opportunities
- **Newsletter Subscription**: Email signup for updates
- **Event Management**: Showcase upcoming events and workshops

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express
- **Job Data**: LinkedIn RSS feeds
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ProductSpace-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
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

## How the Job System Works

### LinkedIn RSS Integration

The website fetches real job postings from LinkedIn RSS feeds:

- Product Management jobs
- Product Management Internships
- Associate Product Manager positions
- Senior Product Manager positions

### Job Data Processing

1. **RSS Feed Fetching**: Server fetches multiple LinkedIn RSS feeds
2. **Data Parsing**: XML data is parsed and converted to structured job objects
3. **Duplicate Removal**: Duplicate jobs are filtered out
4. **Data Cleaning**: Job descriptions are cleaned and formatted
5. **Client Display**: Jobs are displayed in a responsive grid layout

### Features

- **Real-time Updates**: Jobs are fetched fresh on each page load
- **Manual Refresh**: Users can manually refresh job listings
- **Filtering**: Filter by job type (internship/full-time)
- **Direct Application**: Click "Apply on LinkedIn" to go directly to the job posting
- **Community Posting**: Members can post additional job opportunities

## API Endpoints

- `GET /api/jobs` - Fetch job listings from LinkedIn RSS feeds
- `GET /api/health` - Health check endpoint

## File Structure

```
ProductSpace-Website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # Frontend JavaScript
├── server.js           # Node.js backend server
├── package.json        # Node.js dependencies
├── README.md           # This file
└── assets/             # Images and other assets
    ├── *.jpeg
    ├── *.png
    └── *.jpg
```

## Customization

### Adding New Job Sources

To add new job sources, modify the `linkedInRSSFeeds` array in `server.js`:

```javascript
const linkedInRSSFeeds = [
    'https://www.linkedin.com/jobs/rss/jobs-in-product-management',
    'https://www.linkedin.com/jobs/rss/jobs-in-product-management-internship',
    // Add your new RSS feed URL here
];
```

### Styling Changes

The website uses CSS custom properties for easy theming. Main colors are defined in `styles.css`:

```css
:root {
    --primary-color: #8b2a2a;
    --secondary-color: #f8f9fa;
    --text-light: #6c757d;
    --white: #ffffff;
}
```

### Adding New Sections

To add new sections to the website:

1. Add HTML structure to `index.html`
2. Add corresponding CSS styles to `styles.css`
3. Add any JavaScript functionality to `script.js`

## Troubleshooting

### Common Issues

1. **Jobs not loading**
   - Check if the Node.js server is running
   - Verify internet connection
   - Check browser console for errors

2. **CORS errors**
   - Ensure the server is running on the correct port
   - Check that the API_BASE_URL is correctly set in `script.js`

3. **LinkedIn RSS feeds not accessible**
   - LinkedIn may occasionally block requests
   - The system includes error handling and fallback options

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

- Email: productspace@scu.edu
- Location: Santa Clara University, Business School

---

**Note**: This website uses LinkedIn RSS feeds for job data. Please respect LinkedIn's terms of service and rate limiting policies when using this system. 