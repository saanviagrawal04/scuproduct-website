# Deployment Guide - Product Launch Website

This guide covers different deployment options for the Product Launch website with real job postings.

## Option 1: Heroku (Recommended for Beginners)

### Prerequisites
- Heroku account
- Heroku CLI installed

### Steps
1. **Install Heroku CLI**
   ```bash
   # macOS
   brew tap heroku/brew && brew install heroku
   
   # Windows
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   heroku create your-productlaunch-app
   ```

4. **Deploy**
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

5. **Open your app**
   ```bash
   heroku open
   ```

## Option 2: Vercel (Recommended for Frontend)

### Prerequisites
- Vercel account
- Vercel CLI installed

### Steps
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Set build settings if needed

## Option 3: Railway

### Prerequisites
- Railway account
- Railway CLI installed

### Steps
1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy**
   ```bash
   railway login
   railway init
   railway up
   ```

## Option 4: DigitalOcean App Platform

### Steps
1. **Create DigitalOcean account**
2. **Connect your GitHub repository**
3. **Create new app**
4. **Select Node.js environment**
5. **Set build command**: `npm install`
6. **Set run command**: `npm start`
7. **Deploy**

## Option 5: AWS Elastic Beanstalk

### Prerequisites
- AWS account
- AWS CLI installed

### Steps
1. **Install AWS CLI**
2. **Configure AWS credentials**
3. **Create Elastic Beanstalk application**
4. **Upload your code**
5. **Deploy**

## Environment Variables

For production deployment, you may want to set these environment variables:

```bash
# Port (optional, defaults to 3000)
PORT=3000

# Node environment
NODE_ENV=production

# CORS origins (if needed)
CORS_ORIGIN=https://yourdomain.com
```

## Production Considerations

### 1. Security
- Use HTTPS in production
- Set up proper CORS policies
- Consider rate limiting for the API

### 2. Performance
- Enable gzip compression
- Set up caching headers
- Consider using a CDN for static assets

### 3. Monitoring
- Set up logging (e.g., Winston)
- Monitor API response times
- Set up error tracking (e.g., Sentry)

### 4. LinkedIn RSS Feeds
- The current implementation includes fallback sample data
- LinkedIn may block requests from production servers
- Consider implementing:
  - Request caching (Redis/Memcached)
  - Rate limiting
  - Alternative job data sources

## Custom Domain Setup

### 1. Purchase a domain
- GoDaddy, Namecheap, Google Domains, etc.

### 2. Configure DNS
- Point your domain to your hosting provider
- Set up CNAME records as needed

### 3. SSL Certificate
- Most hosting providers offer free SSL
- Let's Encrypt for custom setups

## Maintenance

### Regular Tasks
1. **Update dependencies**
   ```bash
   npm update
   npm audit fix
   ```

2. **Monitor logs**
   - Check for errors
   - Monitor API performance

3. **Backup data**
   - If you add a database later
   - Backup configuration files

### Troubleshooting

#### Common Issues

1. **Jobs not loading**
   - Check server logs
   - Verify LinkedIn RSS feeds are accessible
   - Check CORS settings

2. **Build failures**
   - Ensure all dependencies are in package.json
   - Check Node.js version compatibility

3. **Performance issues**
   - Enable caching
   - Optimize images
   - Consider CDN

## Scaling Considerations

### When to Scale
- High traffic (>1000 daily visitors)
- Slow response times
- API rate limiting issues

### Scaling Options
1. **Horizontal scaling**: Multiple server instances
2. **Caching**: Redis for job data
3. **CDN**: For static assets
4. **Database**: If you add user data later

## Cost Estimation

### Free Tiers
- **Heroku**: Free tier available (with limitations)
- **Vercel**: Generous free tier
- **Railway**: Free tier available
- **Netlify**: Free tier available

### Paid Options
- **Heroku**: $7/month for basic dyno
- **DigitalOcean**: $5/month for basic droplet
- **AWS**: Pay-as-you-go (can be very cheap for low traffic)

## Support

For deployment issues:
1. Check hosting provider documentation
2. Review server logs
3. Test locally first
4. Contact hosting provider support

---

**Note**: This deployment guide assumes you're deploying the Node.js version with the job API. For static-only deployment (without the job API), you can deploy just the HTML/CSS/JS files to any static hosting service. 