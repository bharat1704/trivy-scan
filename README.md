# Day-1 Project

A simple Express.js REST API project with automated CI/CD pipeline deployed on AWS EC2 using GitHub Actions.

## Description

This project demonstrates a complete CI/CD workflow for a Node.js application. It includes automated testing, building, and deployment to AWS EC2 using GitHub Actions. The Express.js server provides an endpoint returning user information in JSON format.

## Features

- Express.js server setup
- REST API endpoint returning user data
- JSON response format
- Automated CI/CD pipeline using GitHub Actions
- Automated deployment to AWS EC2

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)
- AWS Account with EC2 instance
- GitHub Account
- SSH access to EC2 instance
- SSH Keygen

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

1. **Continuous Integration**:
   - Code checkout
   - Node.js setup
   - Dependency installation
   - Build verification

2. **Continuous Deployment**:
   - Automated deployment to AWS EC2
   - Service restart using pm2

## Installation

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/bharat1704/Day-1.git
```

2. Navigate to the project directory:
```bash
cd Day-1
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
node index.js
```

### Production Deployment

The application is automatically deployed to AWS EC2 when changes are pushed to the main branch. The deployment process includes:

1. Building the application
2. Transferring files to EC2
3. Installing dependencies
5. Restarting the service


### AWS EC2 Setup

1. Launch an EC2 instance with Ubuntu Server
2. Configure security groups to allow inbound traffic on port 3000
3. Set up SSH access
4. Install Node.js and npm on the EC2 instance

## Usage

### Local Development

1. Start the server:
```bash
pm2 start index.js
```

2. Access the API at `http://localhost:3000`

### Production

The application can automatically deploy and accessible at EC2 instance's public IP:
```
http://<your-ec2-public-ip>:3000
```

## API Endpoints

### GET /

Returns a JSON array containing user information.

Example Response:
```json
[
    {
        "name": "AWS",
        "email": "aws@gmail.com"
    },
    {
        "name": "Bharat Saini",
        "email": "saini@gmail.com"
    }
]
```

## Technologies Used

- Node.js
- Express.js
- GitHub Actions
- AWS EC2
- SSH
- PM2 (Process Manager)

## Deployment Architecture

```
GitHub Repository
    ↓
GitHub Actions (CI/CD Pipeline)
    ↓
AWS EC2 Instance
    ↓
Node.js Application
```

## Monitoring and Logs

- Application logs are managed using PM2
- Access logs using:
```bash
pm2 logs
```
