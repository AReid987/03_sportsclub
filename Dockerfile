# Sportsclub Prediction Service Dockerfile
FROM python:3.11-slim

# Set build arguments
ARG VERSION=latest
ARG BUILD_DATE

# Set labels
LABEL maintainer="Sportsclub Team <admin@twgsportsclub.com>"
LABEL version=$VERSION
LABEL build-date=$BUILD_DATE
LABEL description="Sportsclub Prediction Engine Service"

# Set environment variables
ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1
ENV PDM_CHECK_UPDATE=false

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install PDM
RUN pip install --no-cache-dir pdm

# Set working directory
WORKDIR /app

# Copy PDM files
COPY pyproject.toml pdm.lock* ./

# Install dependencies
RUN pdm install --prod --no-lock --no-editable

# Copy application code
COPY src/ ./src/
COPY models/ ./models/
COPY alembic/ ./alembic/
COPY alembic.ini ./

# Create non-root user
RUN useradd --create-home --shell /bin/bash app \
    && chown -R app:app /app
USER app

# Expose port
EXPOSE 8002

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8002/health || exit 1

# Run the application
CMD ["pdm", "run", "uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8002"]
