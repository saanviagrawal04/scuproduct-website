const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// Simple job storage - start empty
let jobs = [];

// API endpoint to get all jobs
app.get('/api/jobs', (req, res) => {
    res.json({
        success: true,
        jobs: jobs,
        count: jobs.length,
        source: 'ProductSpace Job Board'
    });
});

// Function to extract job info from URL
function extractJobInfo(url) {
    const jobInfo = {
        title: '',
        company: '',
        location: ''
    };
    
    try {
        const urlObj = new URL(url);
        const hostname = urlObj.hostname.toLowerCase();
        
        // Extract company from hostname
        if (hostname.includes('linkedin.com')) {
            jobInfo.company = 'LinkedIn';
        } else if (hostname.includes('indeed.com')) {
            jobInfo.company = 'Indeed';
        } else if (hostname.includes('glassdoor.com')) {
            jobInfo.company = 'Glassdoor';
        } else if (hostname.includes('google.com') || hostname.includes('careers.google.com')) {
            jobInfo.company = 'Google';
        } else if (hostname.includes('microsoft.com') || hostname.includes('careers.microsoft.com')) {
            jobInfo.company = 'Microsoft';
        } else if (hostname.includes('apple.com') || hostname.includes('jobs.apple.com')) {
            jobInfo.company = 'Apple';
        } else if (hostname.includes('amazon.com') || hostname.includes('amazon.jobs')) {
            jobInfo.company = 'Amazon';
        } else if (hostname.includes('meta.com') || hostname.includes('careers.meta.com')) {
            jobInfo.company = 'Meta';
        } else if (hostname.includes('netflix.com') || hostname.includes('jobs.netflix.com')) {
            jobInfo.company = 'Netflix';
        } else if (hostname.includes('salesforce.com')) {
            jobInfo.company = 'Salesforce';
        } else if (hostname.includes('openai.com')) {
            jobInfo.company = 'OpenAI';
        } else {
            // Extract company from hostname
            const parts = hostname.split('.');
            if (parts.length >= 2) {
                jobInfo.company = parts[parts.length - 2].charAt(0).toUpperCase() + parts[parts.length - 2].slice(1);
            }
        }
        
        // Extract title from URL path
        const path = urlObj.pathname.toLowerCase();
        if (path.includes('product-manager') || path.includes('productmanager')) {
            jobInfo.title = 'Product Manager';
        } else if (path.includes('associate-product-manager') || path.includes('apm')) {
            jobInfo.title = 'Associate Product Manager';
        } else if (path.includes('senior-product-manager')) {
            jobInfo.title = 'Senior Product Manager';
        } else if (path.includes('product-management') && path.includes('intern')) {
            jobInfo.title = 'Product Management Intern';
        } else if (path.includes('intern')) {
            jobInfo.title = 'Product Management Intern';
        } else {
            jobInfo.title = 'Product Management Position';
        }
        
        // Extract location from URL
        if (path.includes('san-francisco') || path.includes('sf')) {
            jobInfo.location = 'San Francisco, CA';
        } else if (path.includes('mountain-view')) {
            jobInfo.location = 'Mountain View, CA';
        } else if (path.includes('seattle')) {
            jobInfo.location = 'Seattle, WA';
        } else if (path.includes('cupertino')) {
            jobInfo.location = 'Cupertino, CA';
        } else if (path.includes('menlo-park')) {
            jobInfo.location = 'Menlo Park, CA';
        } else if (path.includes('los-gatos')) {
            jobInfo.location = 'Los Gatos, CA';
        } else if (path.includes('remote')) {
            jobInfo.location = 'Remote';
        } else {
            jobInfo.location = 'Location TBD';
        }
        
    } catch (error) {
        console.error('Error parsing URL:', error);
    }
    
    return jobInfo;
}

// API endpoint to add a new job
app.post('/api/jobs', (req, res) => {
    try {
        const { title, company, type, location, description, link } = req.body;
        
        if (!link) {
            return res.status(400).json({
                success: false,
                error: 'Job link is required'
            });
        }
        
        // Extract job info from URL if not provided
        const extractedInfo = extractJobInfo(link);
        
        const newJob = {
            id: `job-${Date.now()}-${Math.random()}`,
            title: title || extractedInfo.title,
            company: company || extractedInfo.company,
            type: type || 'fulltime',
            location: location || extractedInfo.location,
            description: description || 'Product management opportunity. Click the link to learn more and apply.',
            link: link,
            pubDate: new Date(),
            source: 'ProductSpace'
        };
        
        jobs.unshift(newJob); // Add to beginning
        
        res.json({
            success: true,
            job: newJob,
            message: 'Job added successfully'
        });
        
    } catch (error) {
        console.error('Error adding job:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to add job'
        });
    }
});

// API endpoint to extract job info from URL
app.post('/api/extract-job-info', (req, res) => {
    try {
        const { url } = req.body;
        
        if (!url) {
            return res.status(400).json({
                success: false,
                error: 'URL is required'
            });
        }
        
        const jobInfo = extractJobInfo(url);
        
        res.json({
            success: true,
            jobInfo: jobInfo
        });
        
    } catch (error) {
        console.error('Error extracting job info:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to extract job info'
        });
    }
});

// API endpoint to delete a job
app.delete('/api/jobs/:id', (req, res) => {
    try {
        const jobId = req.params.id;
        const jobIndex = jobs.findIndex(job => job.id === jobId);
        
        if (jobIndex === -1) {
            return res.status(404).json({
                success: false,
                error: 'Job not found'
            });
        }
        
        const deletedJob = jobs.splice(jobIndex, 1)[0];
        
        res.json({
            success: true,
            message: 'Job deleted successfully',
            deletedJob: deletedJob
        });
        
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to delete job'
        });
    }
});

// Newsletter subscription endpoint
app.post('/api/newsletter', (req, res) => {
    try {
        const { name, email, occupation } = req.body;
        
        if (!name || !email || !occupation) {
            return res.status(400).json({
                success: false,
                error: 'Name, email, and occupation are required'
            });
        }
        
        // Create email content
        const emailContent = `
New Newsletter Subscription:

Name: ${name}
Email: ${email}
Occupation: ${occupation}
Date: ${new Date().toLocaleString()}

This person has subscribed to the ProductSpace newsletter.
        `;
        
        // For now, we'll just log the subscription
        // In a real implementation, you'd send this to scuproductspace@gmail.com
        console.log('Newsletter subscription:', emailContent);
        
        res.json({
            success: true,
            message: 'Thank you for subscribing to our newsletter!'
        });
        
    } catch (error) {
        console.error('Error processing newsletter subscription:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to process subscription'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Jobs API available at http://localhost:${PORT}/api/jobs`);
}); 