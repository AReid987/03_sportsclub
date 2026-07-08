# Workspace-Wide Custom Instructions

## Project Context
This is the Sportsclub project - a Turborepo monorepo for sports club management.

## General Guidelines
- Follow Turborepo conventions within the @sportsclub-v1.0.0/ directory structure
- Always create and submit pull requests instead of committing directly to main branch
- Use pnpm for package management (never npm or yarn)
- Use pdm and uv for Python projects (never pip, poetry, venv, etc.)

## Development Preferences
- Use SuperLinter/MegaLinter for CI/CD
- Use Biome.js for linting
- Use Codecov with coverage thresholds
- Use AppMap for architecture diagrams
- Use CodeSandbox/StackBlitz for PR previews
- Use Gemini Code Assist for PR reviews

## Documentation Standards
- Follow the project conventions defined in project_journal/
- Use sequential numbering for task files (e.g., 001_task_name.md)
- Use standardized emoji legend for documentation
- Create detailed logs for AI agent context preservation

## Code Quality
- Write tests before implementing features
- Ensure all code is linted and formatted
- Maintain high test coverage
- Follow TDD practices where appropriate
