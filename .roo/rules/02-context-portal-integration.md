# Context Portal (ConPort) Integration Instructions - Sportsclub Project

## ✅ CONPORT SETUP COMPLETE
- **Installation**: ✅ Context Portal MCP Server installed via uvx
- **Configuration**: ✅ MCP settings updated in `.roo/mcp.json` with `${workspaceFolder}` variable
- **Project Brief**: ✅ Created in `projectBrief.md` for initialization
- **Workspace ID**: Uses `${workspaceFolder}` variable for dynamic workspace detection

## PROJECT STATUS: Sprint 1 Foundation Complete (4/23 SP)
**Current**: Enhanced CI/CD Pipeline (PR #556 open)
**Next**: Story 1.3 - Cloud Infrastructure (8 SP)

## CRITICAL: Session Initialization Protocol
At the beginning of EVERY session, you MUST execute the ConPort initialization sequence:

1. **Determine workspace_id:** Use `/Users/antonioreid/CODE/00_PROJECTS/00_APPS/00_SPORTSCLUB/sportsclub-v1.0.0`
2. **Check ConPort status:** List files in `workspace_id + "/context_portal/"`
3. **Load existing context** if `context.db` exists, or **initialize new database**
4. **Import Project Brief:** Offer to import `projectBrief.md` into Product Context

## ConPort Tool Usage
- `get_product_context` - Load project overview and goals
- `get_active_context` - Get current session context
- `get_decisions` - Retrieve architectural and design decisions
- `get_progress` - Check project progress and milestones
- `get_system_patterns` - Load established patterns and conventions
- `get_custom_data` - Access categorized project data
- `get_recent_activity_summary` - Catch up on recent work

## Context Management Protocol
- **Always load context first** before starting any task
- **Store decisions** using `store_decision` for architectural choices
- **Update progress** using `store_progress` for completed work
- **Log patterns** using `store_system_pattern` for reusable solutions
- **Maintain active context** throughout the session

## Integration with Roo Commander
- ConPort enhances multi-agent coordination
- Store delegation outcomes and handoff information
- Maintain continuity across mode switches
- Preserve context for future sessions
