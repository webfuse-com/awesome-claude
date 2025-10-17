# Awesome Claude [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
<a href="https://awesomeclaude.ai"><img src="assets/awesomeclaude.svg" alt="Awesome Claude Logo" align="right" style="height: 120px; width: 120px"></a>
AI assistant by Anthropic for complex reasoning, code generation, and analysis tasks.

> [Claude](https://claude.ai) is a large language model developed by Anthropic that excels at complex reasoning, code generation, and analysis tasks. Built with Constitutional AI principles, Claude provides reliable assistance for programming, writing, research, and problem-solving while maintaining safety and accuracy.

---

## Contents

- [Official Anthropic Resources](#official-anthropic-resources)
- [Educational Resources & Tutorials](#educational-resources--tutorials)
- [API Clients & SDKs](#api-clients--sdks)
- [Claude Code Ecosystem](#claude-code-ecosystem)
- [IDE Extensions & Plugins](#ide-extensions--plugins)
- [Applications & User Interfaces](#applications--user-interfaces)
- [Community](#community)

## Official Anthropic Resources

**The authoritative resources directly from Claude's creators**

- [Anthropic Academy](https://www.anthropic.com/learn) - Guides, tutorials, and best practices for working with Claude.
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook#readme) - Official collection of notebooks, code examples, and guides for building with Claude. Features Python examples, RAG techniques, and tool use patterns.
- [Model Context Protocol Introduction](https://www.anthropic.com/news/model-context-protocol) - Official guide to MCP for extending Claude with local servers and integrations.
- [Claude Code](https://www.anthropic.com/claude-code) - Official page for Claude Code, an agentic coding tool for terminals and IDEs.
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) - Tips and tricks for using Claude Code across various codebases, languages, and environments.

## Educational Resources & Tutorials

### Official Anthropic Courses

- [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) - Learn to collaborate with AI systems effectively, efficiently, ethically, and safely.
- [Claude with the Anthropic API](https://anthropic.skilljar.com/claude-with-the-anthropic-api) - This comprehensive course covers the full spectrum of working with Anthropic models using the Anthropic API.
- [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) - Integrate Claude Code into your development workflow.
- [Introduction to Model Context Protocol](http://anthropic.skilljar.com/introduction-to-model-context-protocol) - Learn to build Model Context Protocol servers and clients from scratch using Python. Master MCP's three core primitives—tools, resources, and prompts—to connect Claude with external services.

## API Clients & SDKs

**Official Anthropic client libraries for working with Claude's API**

- [anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python#readme) - Official Python client library for the Anthropic API. Supports all Claude models with async support and type hints.
- [anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript#readme) - Official TypeScript/JavaScript client library for the Anthropic API. Works in Node.js and browsers with full TypeScript support.
- [anthropic-sdk-java](https://github.com/anthropics/anthropic-sdk-java#readme) - Official Java client library for the Anthropic API. Built with modern Java features and comprehensive documentation.
- [anthropic-sdk-go](https://github.com/anthropics/anthropic-sdk-go#readme) - Official Go client library for the Anthropic API. Idiomatic Go design with context support and comprehensive error handling.
- [anthropic-sdk-ruby](https://github.com/anthropics/anthropic-sdk-ruby#readme) - Official Ruby client library for the Anthropic API. Clean Ruby interface with comprehensive documentation and examples.

## Claude Code Ecosystem

**Tools, extensions, and integrations for Claude Code**

### Core & Official Tools
- [claude-code](https://github.com/anthropics/claude-code#readme) - Official Claude Code from Anthropic. An agentic coding tool that lives in your terminal.
- [claude-code-action](https://github.com/anthropics/claude-code-action#readme) - General-purpose action for GitHub PRs and issues using Claude Code.
- [claude-code-security-review](https://github.com/anthropics/claude-code-security-review#readme) - AI-powered security review GitHub Action.
- [claude-code-sdk-python](https://github.com/anthropics/claude-code-sdk-python#readme) - Python SDK for Claude Code.

### Frameworks & Platforms
- [claude-code-router](https://github.com/musistudio/claude-code-router#readme) - Use Claude Code as foundation for coding infrastructure.
- [SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework#readme) - Configuration framework with specialized commands and cognitive personas.
- [claudia](https://github.com/getAsterisk/claudia#readme) - Powerful GUI app and toolkit for Claude Code.
- [claude-flow](https://github.com/ruvnet/claude-flow#readme) - AI orchestration platform with swarm intelligence and MCP tools.
- [dotai](https://github.com/udecode/dotai#readme) - Ultimate AI development stack (Shell).

### Agent Collections & Orchestration
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code#readme) - Curated list of commands, files, and workflows.
- [agents](https://github.com/wshobson/agents#readme) - Production-ready subagents for Claude Code.
- [awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents#readme) - Orchestrated sub agent dev team.
- [claude-code-subagents-collection](https://github.com/davepoon/claude-code-subagents-collection#readme) - Subagents & commands collection with CLI tool.
- [claude-agents](https://github.com/iannuttall/claude-agents#readme) - Custom subagents collection.
- [awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents#readme) - 100+ specialized AI agents for full-stack development.
- [claude-code-sub-agents](https://github.com/lst97/claude-code-sub-agents#readme) - Specialized AI subagents for full-stack.
- [awesome-claude-code-agents](https://github.com/hesreallyhim/awesome-claude-code-agents#readme) - Curated list of sub-agents.
- [claude-code-unified-agents](https://github.com/stretchcloud/claude-code-unified-agents#readme) - Unified agent collection (Shell).

### Development & Code Tools
- [serena](https://github.com/oraios/serena#readme) - Semantic retrieval and editing capabilities.
- [context-engineering-intro](https://github.com/coleam00/context-engineering-intro#readme) - Context engineering guide for AI coding assistants.
- [code2prompt](https://github.com/mufeedvh/code2prompt#readme) - Convert codebase to LLM prompt with token counting (Rust/MDX).
- [repomix](https://github.com/yamadashy/repomix#readme) - Pack an entire repository into a single AI-friendly file with token counting and security checks.
- [claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery#readme) - Advanced hooks system.
- [vibekit](https://github.com/superagent-ai/vibekit#readme) - Isolated sandbox for coding agents.
- [Claude-Code-Development-Kit](https://github.com/peterkrueck/Claude-Code-Development-Kit#readme) - Orchestrated dev environment with automated docs and multi-agent workflows (Shell).

### Alternative Clients & Proxies
- [kilocode](https://github.com/Kilo-Org/kilocode#readme) - Open source AI coding assistant.
- [claudecodeui](https://github.com/siteboon/claudecodeui#readme) - Mobile and web UI for Claude Code.
- [claude-relay-service](https://github.com/Wei-Shaw/claude-relay-service#readme) - Self-hosted mirror service with multi-account support.
- [claude-code-proxy](https://github.com/1rgs/claude-code-proxy#readme) - Run Claude Code on OpenAI models.

### User Interfaces & Web Apps
- [Happy Coder](https://github.com/slopus/happy#readme) - Native mobile app and Web UI for Claude Code. Kick off tasks, track progress, and merge changes to continue building on the go.
- [cui](https://github.com/wbopan/cui#readme) - Web UI for Claude Code agents.
- [ccseva](https://github.com/Iamshankhadeep/ccseva#readme) - macOS menu bar app for usage tracking.
- [claude-code-webui](https://github.com/sugyan/claude-code-webui#readme) - Web-based interface with streaming.

### Editor Integrations
- [aide](https://github.com/nicepkg/aide#readme) - VSCode AI assistant with batch processing.
- [claude-code.nvim](https://github.com/greggh/claude-code.nvim#readme) - Neovim integration for Claude Code.

### Monitoring & Analytics
- [ccusage](https://github.com/ryoppippi/ccusage#readme) - CLI tool for analyzing Claude Code usage from JSONL files.
- [Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor#readme) - Real-time usage monitor with predictions.
- [sniffly](https://github.com/chiphuyen/sniffly#readme) - Dashboard with usage stats and error analysis.

### Project & Session Management
- [claude-code-templates](https://github.com/davila7/claude-code-templates#readme) - CLI for configuring and monitoring Claude Code.
- [claude-squad](https://github.com/smtg-ai/claude-squad#readme) - Manage multiple AI terminal agents.
- [Crystal](https://github.com/stravu/crystal#readme) - Run parallel AI sessions in Git worktrees.
- [claude-sessions](https://github.com/iannuttall/claude-sessions#readme) - Session tracking and documentation commands.
- [claude-swarm](https://github.com/parruda/claude-swarm#readme) - Launch Claude Code with swarm of agents.
- [my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup#readme) - Shared starter template and memory bank system.
- [ccundo](https://github.com/RonitSachdev/ccundo#readme) - Granular undo functionality.

### Workflow Automation & TDD
- [CCPlugins](https://github.com/brennercruvinel/CCPlugins#readme) - Framework for senior engineer workflows.
- [claude-code-spec-workflow](https://github.com/Pimzino/claude-code-spec-workflow#readme) - Spec-driven development workflows.
- [zcf](https://github.com/UfoMiao/zcf#readme) - Zero-Config Claude-Code Flow.
- [tdd-guard](https://github.com/nizos/tdd-guard#readme) - Automated TDD enforcement.

### Memory & Context Management
- [cipher](https://github.com/campfirein/cipher#readme) - Memory layer for coding agents.
- [mcp-memory-service](https://github.com/doobidoo/mcp-memory-service#readme) - Universal MCP memory with semantic search.
- [core](https://github.com/RedPlanetHQ/core#readme) - Unified, shareable memory layer.

### Remote Control & Communication
- [Claude-Code-Remote](https://github.com/JessyTsui/Claude-Code-Remote#readme) - Control via email/Discord/Telegram.
- [Claude-Code-Communication](https://github.com/nishimoto265/Claude-Code-Communication#readme) - Communication tools for Claude Code.

### Documentation & Learning Resources
- [agent-rules](https://github.com/steipete/agent-rules#readme) - Rules and knowledge for working with agents (Shell).
- [claude-code-guide](https://github.com/zebbern/claude-code-guide#readme) - Full guide on tips, tricks and optimization.
- [claude-code-workflows](https://github.com/OneRedOak/claude-code-workflows#readme) - Best workflows and configurations.
- [claude-code-cookbook](https://github.com/wasabeef/claude-code-cookbook/blob/main/README_en.md#readme) - Settings collection (Shell).
- [Claude-Command-Suite](https://github.com/qdhenry/Claude-Command-Suite#readme) - Professional slash commands (Shell).

## IDE Extensions & Plugins

**Deep integrations with development environments**

### VS Code Extensions

- [Claude Code Chat](https://github.com/andrepimenta/claude-code-chat#readme) - Beautiful native chat interface for Claude Code within VS Code with conversation history and MCP support.

- [Claude VSCode Theme](https://marketplace.visualstudio.com/items?itemName=AlvinUnreal.claude-vscode-theme) - Thoughtful dark theme collection with classic and italic variants. Inspired by Claude AI with carefully balanced contrast and warm syntax colors for long coding sessions.

### Neovim Integration
- [Claude Code Neovim](https://github.com/coder/claudecode.nvim#readme) - First-to-market WebSocket-based MCP protocol integration for Neovim with zero dependencies.

### Emacs Integration
- [Claude Code IDE](https://github.com/manzaltu/claude-code-ide.el#readme) - Comprehensive Emacs integration with native MCP protocol, LSP integration, and project detection.

### Browser Extensions
- [Claude Usage Tracker](https://chromewebstore.google.com/detail/claude-usage-tracker/knemcdpkggnbhpoaaagmjiigenifejfo) - Chrome extension for tracking Claude AI usage and performance metrics.

- [Claude Helper](https://chromewebstore.google.com/detail/claude-helper/nfgojpifghedgeflgnliekadidggnnih/reviews) - Allows folder uploads to Claude projects with advanced file handling. Adds minimap for chat navigation and quick conversation access.

## Applications & User Interfaces

**Complete applications and polished user interfaces**

### Desktop Applications
- [Claude Desktop](https://claude.ai/download) - Official Claude desktop app for macOS and Windows.
- [Claude Desktop Debian](https://github.com/aaddrick/claude-desktop-debian#readme) - Unofficial Claude desktop app for Debian/Linux.

## Community

**Join the Claude community to share knowledge, get help, and stay updated**

- [Claude Discord](https://discord.com/invite/prcdpx7qMm) - Official Discord community for Claude users and developers.
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/) - Reddit community for Claude discussions and tips.
- [Anthropic AI Facebook Group](https://www.facebook.com/groups/anthropicai/) - Facebook group for Anthropic AI and Claude discussions.
- [Claude Performance Tracker](https://awesomeclaude.ai/claude-performance) - Community platform for tracking Claude AI performance issues and response quality.

**[⬆ Back to Contents](#contents)**
