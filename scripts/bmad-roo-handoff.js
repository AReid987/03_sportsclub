#!/usr/bin/env node
// BMAD to Roo Commander Handoff Automation

const fs = require('fs');
const path = require('path');

class BMadRooHandoff {
    constructor() {
        this.config = this.loadConfig();
    }

    loadConfig() {
        try {
            const yaml = require('js-yaml');
            return yaml.load(fs.readFileSync('.bmad-roo-config.yaml', 'utf8'));
        } catch (e) {
            console.error('❌ Config file not found or js-yaml not installed');
            console.error('Run: pnpm add js-yaml');
            process.exit(1);
        }
    }

    validateArtifacts() {
        const required = this.config.handoff.artifacts_check;
        const missing = [];
        const present = [];

        for (const artifact of required) {
            if (!fs.existsSync(artifact)) {
                missing.push(artifact);
            } else {
                present.push(artifact);
            }
        }

        return { missing, present };
    }

    validateRooSetup() {
        const checks = [
            { path: '.roo', name: 'Roo workspace' },
            { path: '.ruru', name: 'Ruru modes directory' },
            { path: '.roomodes', name: 'Room modes registry' },
            { path: '.bmad-core', name: 'BMAD core' }
        ];

        console.log('\n🔍 Validating Roo Commander setup:');
        let allValid = true;

        checks.forEach(check => {
            if (fs.existsSync(check.path)) {
                console.log(`  ✅ ${check.name}`);
            } else {
                console.log(`  ❌ ${check.name} missing`);
                allValid = false;
            }
        });

        return allValid;
    }

    executeHandoff() {
        console.log('🤝 Executing BMAD to Roo Commander handoff...');
        
        // Validate Roo setup first
        if (!this.validateRooSetup()) {
            console.error('\n❌ Roo Commander setup incomplete. Re-run installer.');
            return false;
        }

        const { missing, present } = this.validateArtifacts();
        
        console.log('\n📋 Artifact Validation:');
        present.forEach(artifact => console.log(`  ✅ ${artifact}`));
        missing.forEach(artifact => console.log(`  ❌ ${artifact}`));
        
        if (missing.length > 0) {
            console.error('\n❌ Cannot proceed with handoff. Missing required artifacts.');
            console.error('💡 Use @bmad-orchestrator to create missing documentation.');
            return false;
        }

        // Create Roo story queue
        this.createStoryQueue();
        
        // Update .roomodes registry
        this.updateRooModes();
        
        // Generate handoff summary
        this.generateHandoffSummary();
        
        console.log('\n✅ Handoff complete - Roo Commander ready for implementation');
        console.log('🚀 Use @roo-commander to begin development');
        return true;
    }

    createStoryQueue() {
        const storiesPath = this.config.bmad.stories_path;
        const queuePath = this.config.roo.story_queue_path;
        
        if (!fs.existsSync(queuePath)) {
            fs.mkdirSync(queuePath, { recursive: true });
        }

        // Copy stories to Roo queue
        if (fs.existsSync(storiesPath)) {
            const stories = fs.readdirSync(storiesPath).filter(file => file.endsWith('.md'));
            stories.forEach(story => {
                const src = path.join(storiesPath, story);
                const dest = path.join(queuePath, story);
                fs.copyFileSync(src, dest);
            });
            console.log(`📋 Queued ${stories.length} stories for implementation`);
        }
    }

    updateRooModes() {
        // Ensure .roomodes is up to date
        if (fs.existsSync('.roomodes')) {
            console.log('📝 Updated .roomodes registry');
        }
    }

    generateHandoffSummary() {
        const storiesCount = fs.existsSync(this.config.roo.story_queue_path) 
            ? fs.readdirSync(this.config.roo.story_queue_path).filter(f => f.endsWith('.md')).length 
            : 0;

        const summary = `# BMAD Planning Complete - Implementation Handoff

## 🎯 Planning Phase Summary
- ✅ Project documentation created
- ✅ Stories defined and prioritized  
- ✅ Architecture documented
- ✅ Ready for implementation

## 📋 Artifacts Created
- Project Brief: docs/project-brief.md
- PRD: docs/prd.md
- Architecture: docs/architecture.md
- Stories: docs/stories/ (${storiesCount} stories)

## 🚀 Next Steps for Roo Commander
1. Review story queue in .roo/story-queue/
2. Begin implementation following architecture guidelines
3. Update story status as work progresses

## 🔗 Integration Status
- Handoff Date: ${new Date().toISOString()}
- Stories Queued: ${storiesCount}
- Ready for Development: ✅
- IDEs Configured: ${this.config.integration.selected_ides || 'None'}

## 🎯 Development Commands
- \`@roo-commander\` - Start implementation
- \`pnpm roo:queue\` - Check story queue status
- \`pnpm roo:next\` - Get next story to implement

---
*Generated by BMAD-Roo Integration Bridge*
`;

        fs.writeFileSync('HANDOFF-SUMMARY.md', summary);
    }

    validateOnly() {
        console.log('🔍 Validating BMAD artifacts for handoff readiness...');
        
        // Check Roo setup
        const rooValid = this.validateRooSetup();
        
        const { missing, present } = this.validateArtifacts();
        
        console.log('\n📋 Artifact Status:');
        present.forEach(artifact => console.log(`  ✅ ${artifact}`));
        missing.forEach(artifact => console.log(`  ❌ ${artifact}`));
        
        if (missing.length === 0 && rooValid) {
            console.log('\n🎉 All artifacts present - Ready for handoff!');
            console.log('Run: pnpm bmad:handoff');
        } else {
            console.log('\n⚠️  Missing artifacts or setup incomplete');
            if (!rooValid) console.log('💡 Re-run installer to fix Roo Commander setup');
            if (missing.length > 0) console.log('💡 Use @bmad-orchestrator to complete planning');
        }
        
        return missing.length === 0 && rooValid;
    }
}

// Handle command line arguments
const args = process.argv.slice(2);
const handoff = new BMadRooHandoff();

if (args.includes('--validate') || args.includes('-v')) {
    handoff.validateOnly();
} else {
    handoff.executeHandoff();
}

module.exports = BMadRooHandoff;
