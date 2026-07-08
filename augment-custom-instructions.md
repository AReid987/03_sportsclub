# Augment Agent Custom Instructions

## Project Context
- Working on Sportsclub project - a Turborepo monorepo
- Root directory: @sportsclub-v1.0.0/
- Follow Turborepo conventions and project structure

## Development Standards
- **Package Management:** Use pnpm (never npm/yarn) for JavaScript/TypeScript
- **Python:** Use pdm and uv (never pip, poetry, venv, conda, etc.)
- **Monorepo:** Follow Turborepo patterns with apps/ and packages/ structure
- **Git Workflow:** Always create PRs, never commit directly to main

## Code Quality Requirements
- Write tests before implementing features (TDD approach)
- Ensure all code is linted with Biome.js
- Maintain high test coverage with Codecov
- Follow project conventions documented in project_journal/

## Documentation Standards
- Use sequential numbering for task files (001_task_name.md)
- Follow standardized emoji legend (🎯 for goals, ✅ for completion, etc.)
- Create detailed logs in project_journal/tasks/ for AI context
- Update project_journal/decisions/ for significant decisions

## ConPort (Context Portal) Integration - CRITICAL ✅ CONFIGURED

### ✅ ConPort Setup Status
- **Installation**: ✅ Installed via `uvx --from context-portal-mcp`
- **MCP Configuration**: ✅ Updated in `.roo/mcp.json` with `${workspaceFolder}` variable
- **Project Brief**: ✅ Created in `projectBrief.md`
- **Workspace ID**: Uses `${workspaceFolder}` variable for dynamic workspace detection

### Session Initialization Protocol (MANDATORY)
At the beginning of EVERY session, you MUST:
1. **Determine workspace_id:** Use `/Users/antonioreid/CODE/00_PROJECTS/00_APPS/00_SPORTSCLUB/sportsclub-v1.0.0`
2. **Check ConPort status:** List files in `workspace_id + "/context_portal/"`
3. **Load context if available:** If `context.db` exists, load existing context
4. **Initialize if needed:** If no ConPort database, it will be auto-created on first tool use
5. **Import Project Brief:** Offer to import `projectBrief.md` into Product Context

### ConPort Tools Available
- `get_product_context` - Load project overview and goals
- `get_active_context` - Get current session context
- `get_decisions` - Retrieve architectural decisions
- `get_progress` - Check project progress
- `get_system_patterns` - Load established patterns
- `get_custom_data` - Access categorized data
- `get_recent_activity_summary` - Catch up on recent work
- `store_decision` - Save architectural choices
- `store_progress` - Update project milestones
- `store_system_pattern` - Log reusable solutions

### Context Management Protocol
- **Always load context first** before starting any coding task
- **Store decisions** for architectural and design choices
- **Update progress** for completed features or fixes
- **Log patterns** for reusable code solutions
- **Maintain active context** throughout the session

## Integration with Other Tools
- ConPort provides persistent memory across sessions
- Roo Commander framework is used for multi-agent coordination
- AppMap for architecture diagrams
- Gemini Code Assist for PR reviews

## File Structure Awareness
- Apps go in apps/ directory with @xprt/ prefix in package.json
- Shared code goes in packages/ directory
- Each app/package needs package.json and README.md
- Use turbo.json for task management when appropriate

## Testing Strategy
- Write tests first, then implement
- Run tests after implementation
- Fix errors iteratively until tests pass
- Commit only when tests pass
- Use Dagger agents for auto-fixing when available
