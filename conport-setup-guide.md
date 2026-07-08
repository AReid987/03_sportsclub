# ConPort Setup Guide for Roo Code and Augment

## Overview
This guide explains how to implement Context Portal (ConPort) integration for both Roo Code and Augment agents using your custom instructions files.

## Files Created/Updated

### ✅ Roo Code Integration
1. **`.roo/rules/02-context-portal-integration.md`** - Basic ConPort integration instructions
2. **`.roo/rules/03-conport-detailed-strategy.md`** - Complete ConPort strategy from your Downloads file
3. **`.roo/mcp.json`** - Updated with ConPort MCP server configuration

### ✅ Augment Integration  
1. **`augment-custom-instructions.md`** - Updated with ConPort protocol
2. **`generic_conport_strategy.md`** - Your original generic strategy file (copied from Downloads)

### ✅ Context Portal Configuration
1. **`context_portal/custom-instructions.md`** - ConPort-specific instructions
2. **`.roo/mcp.json`** - MCP server configuration for ConPort

## How to Use

### For Roo Code
1. **Automatic Loading:** The instructions in `.roo/rules/` are automatically loaded by Roo Code
2. **Session Start:** Roo agents will automatically follow the ConPort initialization protocol
3. **Tool Access:** ConPort tools are available through the MCP server configuration

### For Augment
1. **Manual Reference:** Provide the `augment-custom-instructions.md` file to Augment at session start
2. **ConPort Protocol:** Augment will follow the same initialization sequence
3. **Tool Usage:** Use ConPort tools for persistent context management

### For Both Agents
1. **Workspace ID:** Both agents will use `/Users/antonioreid/CODE/00_PROJECTS/00_APPS/00_SPORTSCLUB` as workspace_id
2. **Context Database:** Look for `context_portal/context.db` to determine ConPort status
3. **Initialization:** Follow the mandatory initialization sequence at every session start

## ConPort Tools Available
- `get_product_context` - Load project overview
- `get_active_context` - Get current session context  
- `get_decisions` - Retrieve decisions (limit 5)
- `get_progress` - Check progress (limit 5)
- `get_system_patterns` - Load patterns (limit 5)
- `get_custom_data` - Access categorized data
- `get_recent_activity_summary` - Recent activity (24h, limit 3 per type)
- `store_decision` - Save architectural choices
- `store_progress` - Update milestones
- `store_system_pattern` - Log reusable solutions

## Session Initialization Checklist
1. ✅ Determine absolute workspace path
2. ✅ Check for `context_portal/context.db` existence
3. ✅ Load existing context if database exists
4. ✅ Offer ConPort setup if database doesn't exist
5. ✅ Set internal status to [CONPORT_ACTIVE] or [CONPORT_INACTIVE]
6. ✅ Inform user of ConPort status
7. ✅ Provide follow-up questions based on loaded context

## Best Practices
- **Always initialize ConPort first** before starting any task
- **Store context incrementally** throughout the session
- **Use descriptive categories** for custom data
- **Update active context** as work progresses
- **Store decisions and patterns** for future reference

## Troubleshooting
- If ConPort tools fail, continue with session-only memory
- Check MCP server configuration in `.roo/mcp.json`
- Verify context_portal directory exists
- Check logs in `context_portal/logs/conport.log`

## Next Steps
1. Test ConPort integration with both Roo Code and Augment
2. Verify MCP server is properly configured
3. Initialize ConPort database if needed
4. Start using ConPort tools for persistent context management
