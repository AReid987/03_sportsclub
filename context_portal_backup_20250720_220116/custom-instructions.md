# Context Portal Custom Instructions

## Purpose
Context Portal serves as a persistent context management system for the Sportsclub project, enabling AI agents to maintain continuity across sessions.

## Core Functionality
- Store and retrieve project context
- Maintain architectural decisions and rationale
- Preserve conversation history and important insights
- Enable seamless handoffs between different AI agents

## Usage Guidelines

### For Roo Commander Integration
- Store mode-specific context that should persist across sessions
- Maintain delegation history and task outcomes
- Preserve architectural decisions and their rationale
- Store project-specific knowledge that enhances agent performance

### For Augment Agent Integration
- Store codebase insights and patterns discovered during development
- Maintain refactoring decisions and their impact
- Preserve testing strategies and coverage insights
- Store performance optimization decisions

### Context Categories
1. **Architectural Decisions** - Major design choices and their rationale
2. **Development Patterns** - Coding patterns and conventions specific to this project
3. **Testing Strategies** - Test approaches and coverage requirements
4. **Performance Insights** - Optimization decisions and benchmarks
5. **Integration Points** - How different systems and tools work together
6. **Troubleshooting** - Common issues and their solutions

## Data Management
- Use structured data formats for consistency
- Include timestamps and agent attribution
- Maintain version history for important decisions
- Regular cleanup of outdated context

## Security Considerations
- No sensitive credentials or API keys in context
- Project-specific information only
- Regular audit of stored context
- Proper access controls through MCP configuration

## Integration with Project Documentation
- Context Portal complements but doesn't replace project_journal/
- Use for dynamic, session-based context
- Reference static documentation in project_journal/ for permanent records
- Sync important insights back to formal documentation
