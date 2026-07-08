# ConPort Memory Strategy for Roo Code

## CRITICAL: Session Initialization Sequence
At the beginning of every session, the agent MUST execute the 'initialization' sequence to determine the ConPort status and load relevant context.

### Workspace ID Source
The agent must obtain the absolute path to the current workspace to use as `workspace_id` for all ConPort tool calls. This might be available as `${workspaceFolder}` or require asking the user.

## Initialization Protocol

### Step 1: Determine ACTUAL_WORKSPACE_ID
- Get the absolute path to the current workspace
- This will be used for all ConPort tool calls

### Step 2: Check ConPort Status
- Invoke `list_files` for `ACTUAL_WORKSPACE_ID + "/context_portal/"`
- Look for the existence of `context.db` file

### Step 3: Branch Based on ConPort Status
- **If 'context.db' is found:** Execute `load_existing_conport_context` sequence
- **If 'context.db' NOT found:** Execute `handle_new_conport_setup` sequence

## Load Existing ConPort Context Sequence

### Step 1: Load Initial Contexts
Execute these ConPort tool calls and store results:
- `get_product_context` - Store result
- `get_active_context` - Store result  
- `get_decisions` (limit 5 for overview) - Store result
- `get_progress` (limit 5) - Store result
- `get_system_patterns` (limit 5) - Store result
- `get_custom_data` (category: "critical_settings") - Store result
- `get_custom_data` (category: "ProjectGlossary") - Store result
- `get_recent_activity_summary` (last 24h, limit 3 per type) - Store result

### Step 2: Analyze Loaded Context
**If results are NOT empty/minimal:**
- Set internal status to [CONPORT_ACTIVE]
- Inform user: "ConPort memory initialized. Existing contexts and recent activity loaded."
- Use `ask_followup_question` with suggestions like:
  - "Review recent activity?"
  - "Continue previous task?"
  - "What would you like to work on?"

**If loaded context is empty/minimal despite DB existing:**
- Set internal status to [CONPORT_ACTIVE]
- Inform user: "ConPort database found but appears empty. You can start by defining Product/Active Context or logging project information."

## Handle New ConPort Setup Sequence

### Step 1: Inform User
- Set internal status to [CONPORT_INACTIVE]
- Inform user: "ConPort not detected. Would you like to initialize it for persistent memory across sessions?"

### Step 2: If User Agrees to Initialize
- Guide user through ConPort setup
- Help define initial product context
- Establish active context for current session

## Ongoing ConPort Usage

### During Task Execution
- **Store decisions:** Use `store_decision` for architectural choices
- **Update progress:** Use `store_progress` for completed milestones
- **Log patterns:** Use `store_system_pattern` for reusable solutions
- **Maintain context:** Update active context as work progresses

### Before Task Completion
- Store any new insights or patterns discovered
- Update progress with completion status
- Store decisions made during the task

### For Roo Commander Delegation
- Store delegation context before handing off to other modes
- Include relevant context when receiving delegated tasks
- Maintain continuity across mode switches

## Error Handling
- If ConPort tools fail, continue with session but inform user
- Gracefully degrade to session-only memory if ConPort unavailable
- Log any ConPort errors for troubleshooting

## Best Practices
- Always check ConPort status at session start
- Store context incrementally, not just at session end
- Use descriptive categories for custom data storage
- Regularly update active context to reflect current focus
- Leverage recent activity summaries for session continuity
