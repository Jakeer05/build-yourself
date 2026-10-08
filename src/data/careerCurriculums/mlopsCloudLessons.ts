import { CareerLesson } from '../../types';

export const mlopsCloudLessons: CareerLesson[] = [
  {
    id: 'mlops-lesson-1',
    milestoneId: 'ms-mlops',
    order: 1,
    title: '1. Containerization with Docker & Microservices',
    durationMinutes: 25,
    conceptExplanation: 'Docker packages an application, its runtime dependencies, system libraries, and configuration into an immutable, lightweight container image. This eliminates the classic "it works on my machine" problem, ensuring identical execution across local developer laptops, staging servers, and Kubernetes cloud clusters.',
    whyImportant: 'Machine learning models rely on complex C-libraries (CUDA, cuDNN, PyTorch, Scikit-Learn). In MLOps and Data Engineering, deploying models as containerized microservices behind FastAPI or Flask is standard industry practice.',
    syntax: `# Sample Dockerfile for Python ML Service
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]`,
    exampleDescription: 'Writing a production Dockerfile and running container commands to build and run an inference API.',
    codeSnippet: `# Building and Running Docker ML Container
# 1. Build container image with tag
docker build -t churn-predictor:v1.0 .

# 2. Run container in detached mode mapping port 8000 to host
docker run -d -p 8000:8000 --name churn_api churn-predictor:v1.0

# 3. Check container logs
docker logs -f churn_api

# 4. Verify healthy running status
docker ps --filter "name=churn_api"`,
    codeLanguage: 'bash',
    codeExplanation: [
      'Line 2: docker build compiles the Dockerfile into a localized container image tagged as churn-predictor:v1.0.',
      'Line 5: docker run starts the container; -d runs in background, and -p 8000:8000 maps host port 8000 to container port 8000.',
      'Line 8: docker logs -f streams stdout logs from the live container.',
      'Line 11: docker ps confirms the container is healthy and serving requests.'
    ],
    realWorldExample: 'Netflix runs over 300,000 Docker containers daily across AWS EC2 instances, deploying recommendation microservices with zero downtime.',
    commonMistakes: [
      {
        mistake: 'Using large full-OS base images (like python:latest) that produce 2GB+ images.',
        fix: 'Always use minimal slim or alpine base images (e.g. python:3.11-slim) and multi-stage builds to keep image sizes small and secure.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a Dockerfile instruction that copies only the requirements.txt file before copying the rest of the application code.',
        hint: 'COPY requirements.txt . followed by RUN pip install, then COPY . . to leverage Docker layer caching.',
        solutionSnippet: 'COPY requirements.txt .\nRUN pip install -r requirements.txt\nCOPY . .'
      }
    ],
    quizQuestions: [
      {
        question: 'What is the primary difference between a Docker container and a Virtual Machine (VM)?',
        options: [
          'Containers share the host OS kernel and are lightweight; VMs emulate full hardware with separate guest OSs',
          'Containers can only run Windows',
          'VMs run in web browsers',
          'Containers require physical disks'
        ],
        correctIndex: 0,
        explanation: 'Containers share the host operating system kernel, making them start in milliseconds and use a fraction of VM memory.'
      },
      {
        question: 'Why should requirements.txt be copied and installed before copying the source code in a Dockerfile?',
        options: [
          'To leverage Docker layer caching so dependencies are not reinstalled on every code edit',
          'Docker requires it alphabetically',
          'Because Python cannot read requirements.txt otherwise',
          'To encrypt the dependencies'
        ],
        correctIndex: 0,
        explanation: 'Docker caches layers; copying requirements.txt first means pip install is cached and only re-executes if dependencies change.'
      },
      {
        question: 'What command stops and removes all containers defined in a docker-compose.yml file?',
        options: ['docker-compose down', 'docker-compose stop-all', 'docker delete compose', 'docker purge'],
        correctIndex: 0,
        explanation: 'docker-compose down stops running services and removes containers, networks, and volumes created by compose up.'
      },
      {
        question: 'What does the .dockerignore file do?',
        options: [
          'Excludes files and directories (like .git, __pycache__, .env) from being copied into the container build context',
          'Instructs Docker to ignore compilation warnings',
          'Disables Docker security',
          'Deletes files from the host machine'
        ],
        correctIndex: 0,
        explanation: '.dockerignore prevents copying sensitive or unnecessary files into the build image.'
      },
      {
        question: 'What Docker command lists all running containers?',
        options: ['docker ps', 'docker list', 'docker ls', 'docker show'],
        correctIndex: 0,
        explanation: 'docker ps displays all active running containers, their ports, status, and IDs.'
      }
    ],
    miniChallenge: {
      title: 'Port Mapping Validator',
      prompt: 'Write a bash command to run an image named "api:v2" in detached mode, mapping host port 3000 to container port 5000.',
      starterCode: '# Write docker run command\n',
      solution: 'docker run -d -p 3000:5000 api:v2'
    }
  },
  {
    id: 'mlops-lesson-2',
    milestoneId: 'ms-mlops',
    order: 2,
    title: '2. REST APIs with FastAPI & Model Serving',
    durationMinutes: 30,
    conceptExplanation: 'FastAPI is a modern, high-performance Python web framework for building RESTful APIs based on standard Python type hints and Pydantic schema validation. It provides automatic OpenAPI/Swagger documentation, asynchronous request handling (async/await), and sub-millisecond serialization overhead.',
    whyImportant: 'Training a model is only half the battle. A Data Scientist or ML Engineer must expose the model as an HTTP endpoint so web apps, mobile clients, and backend services can request real-time inference.',
    syntax: `# Basic FastAPI Prediction Endpoint
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="ML Inference Service")

class PredictRequest(BaseModel):
    feature1: float
    feature2: float

@app.post("/predict")
def predict(payload: PredictRequest):
    prediction = payload.feature1 * 0.5 + payload.feature2 * 0.2
    return {"prediction": prediction}`,
    exampleDescription: 'Creating a production FastAPI application with input schema validation, model inference, and error handling.',
    codeSnippet: `from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import numpy as np

app = FastAPI(title="Credit Default Scoring Service", version="1.0.0")

# Request schema with automated Pydantic validation
class LoanApplicant(BaseModel):
    credit_score: int = Field(..., ge=300, le=850, description="FICO score 300-850")
    income_usd: float = Field(..., gt=0, description="Annual gross income")
    loan_amount: float = Field(..., gt=0, description="Requested principal")

# Prediction response schema
class PredictionResponse(BaseModel):
    approved: bool
    risk_score: float
    recommended_interest_rate: float

@app.post("/api/v1/score-loan", response_model=PredictionResponse)
async def score_applicant(applicant: LoanApplicant):
    # Simulated model inference logic
    dti_ratio = applicant.loan_amount / applicant.income_usd
    
    # Calculate risk score (0.0 to 1.0)
    score_factor = (applicant.credit_score - 300) / 550.0
    risk_score = round(float(1.0 - (score_factor * 0.7 + (1.0 - min(dti_ratio, 1.0)) * 0.3)), 3)
    
    is_approved = (risk_score < 0.45)
    rate = 5.2 if risk_score < 0.25 else (7.8 if is_approved else 0.0)
    
    return {
        "approved": is_approved,
        "risk_score": risk_score,
        "recommended_interest_rate": rate
    }`,
    codeLanguage: 'python',
    codeExplanation: [
      'Line 5: Instantiating FastAPI application with OpenAPI metadata.',
      'Line 8-11: Defining Pydantic model enforcing type safety and boundary validation (credit score must be between 300 and 850).',
      'Line 19: Decorating async POST endpoint /api/v1/score-loan with response model validation.',
      'Line 20-33: Executing inference math and returning structured JSON response.'
    ],
    realWorldExample: 'Uber and DoorDash serve billions of real-time ETA and surge-pricing inference requests using FastAPI and Go microservices.',
    commonMistakes: [
      {
        mistake: 'Reloading the machine learning model from disk inside the endpoint function on every single incoming HTTP request.',
        fix: 'Load the model into global memory once at application startup using FastAPI lifespan events or module level state.'
      }
    ],
    practiceExercises: [
      {
        task: 'Write a Pydantic schema for a UserProfile with username (str) and age (int between 18 and 100).',
        hint: 'Use Field(..., ge=18, le=100)',
        solutionSnippet: 'from pydantic import BaseModel, Field\nclass UserProfile(BaseModel):\n    username: str\n    age: int = Field(..., ge=18, le=100)'
      }
    ],
    quizQuestions: [
      {
        question: 'Which HTTP method is conventionally used for requesting machine learning model inference with input feature payloads?',
        options: ['GET', 'POST', 'DELETE', 'HEAD'],
        correctIndex: 1,
        explanation: 'POST is the standard REST method for submitting request body payloads (JSON feature records) to generate predictions.'
      },
      {
        question: 'Where can you interactively test FastAPI endpoints without writing any frontend code?',
        options: [
          'At the auto-generated Swagger UI docs route (/docs)',
          'In the terminal using ping',
          'In an Excel spreadsheet',
          'Only via curl commands'
        ],
        correctIndex: 0,
        explanation: 'FastAPI automatically generates interactive Swagger documentation accessible at the /docs URL.'
      },
      {
        question: 'What library does FastAPI use for request validation and type parsing?',
        options: ['Pydantic', 'Requests', 'BeautifulSoup', 'Flask-REST'],
        correctIndex: 0,
        explanation: 'FastAPI uses Pydantic to enforce data schemas, parse request bodies, and validate data types.'
      },
      {
        question: 'What ASGI web server is typically used to run FastAPI applications in production?',
        options: ['Uvicorn / Gunicorn', 'Apache HTTPD', 'Node.js', 'IIS'],
        correctIndex: 0,
        explanation: 'Uvicorn is a lightning-fast ASGI web server implementation used to run asynchronous Python web applications.'
      },
      {
        question: 'What HTTP status code represents a successful response in REST APIs?',
        options: ['200 OK', '404 Not Found', '500 Internal Server Error', '301 Moved'],
        correctIndex: 0,
        explanation: '200 OK signifies that the request succeeded and the response payload is returned.'
      }
    ],
    miniChallenge: {
      title: 'FastAPI Health Check Endpoint',
      prompt: 'Write a basic FastAPI app with a GET endpoint "/" that returns {"status": "healthy", "version": "1.0"}.',
      starterCode: `from fastapi import FastAPI

app = FastAPI()
# Add root route
`,
      solution: `from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def health_check():
    return {"status": "healthy", "version": "1.0"}`
    }
  }
];
