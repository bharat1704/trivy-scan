# Image Scanning in CI/CD

This GitHub Actions workflow automates Docker image security scanning using **Trivy**. It ensures that vulnerabilities in container images are detected early in the development lifecycle.

## Workflow Triggers

The workflow is triggered in the following cases:
- **On push to `main` branch** (excluding updates to `README.md`)
- **On pull requests targeting `main` branch**
- **On a scheduled cron job** (Runs daily at **12:30 AM IST**)

## Steps in the Workflow

### 1. **Checkout Code**
The workflow starts by checking out the latest code from the repository:
```yaml
- name: Checkout code
  uses: actions/checkout@v4
```

### 2. **Set Up Node.js** (If needed for project dependencies)
This installs Node.js version `20`:
```yaml
- name: Node.js setup
  uses: actions/setup-node@v3
  with:
    node-version: "20"
```

### 3. **Login to DockerHub**
The workflow logs into DockerHub using stored secrets:
```yaml
- name: Login to DockerHub
  run: |
    echo "${{ secrets.DOCKER_PASSWORD }}" | docker login -u "${{ secrets.DOCKER_USERNAME }}" --password-stdin
```

### 4. **Build Docker Image**
The Docker image is built and tagged as `latest`:
```yaml
- name: Build image
  run: docker build -t bharatmali1704/day2:latest .
```

### 5. **Run Trivy Vulnerability Scan**
Trivy scans the built Docker image for vulnerabilities and exits with `1` if critical or high-severity issues are found:
```yaml
- name: Image scanning Step through Trivy
  uses: aquasecurity/trivy-action@0.28.0
  with:
    image-ref: "bharatmali1704/day2:latest"
    format: "table"
    exit-code: 1
    severity: "CRITICAL,HIGH"
```

### 6. **Generate a Security Report**
The scan results are saved as a JSON report for compliance:
```yaml
- name: Generate Trivy report
  uses: aquasecurity/trivy-action@0.28.0
  with:
    image-ref: "bharatmali1704/day2:latest"
    format: "json"
    output: "trivy-report.json"
    continue-on-error: true
```

### 7. **Upload Security Report as an Artifact**
The report is stored as an artifact in GitHub Actions for review:
```yaml
- name: Upload Report as Artifact
  uses: actions/upload-artifact@v4
  with:
    name: trivy-security-report
    path: trivy-report.json
```

### 8. **Send Slack Alert on Failure**
If the scan finds vulnerabilities, a Slack alert is triggered:
```yaml
- name: Alert through Slack
  if: failure()
  uses: rtCamp/action-slack-notify@v2
  env:
    SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
    SLACK_MESSAGE: "Security Alert! Trivy found vulnerabilities in the Docker image."
    SLACK_COLOR: "#ff0000"
```

## Summary
This workflow integrates automated security checks into the CI/CD pipeline by:
- **Scanning Docker images** using Trivy
- **Failing builds** on critical vulnerabilities
- **Generating and storing reports** for compliance
- **Sending Slack alerts** on failures
- **Running on code changes and scheduled scans**

By implementing this workflow, security risks are identified early, improving overall application security.

