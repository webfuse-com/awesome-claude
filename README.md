# Awesome Claude [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<div align="center">
  <a href="https://claude.ai">
    <img src="assets/wide.svg" alt="Claude Logo" width="full" height="auto" />
  </a>
</div>

**Claude** is Anthropic's advanced AI assistant, known for its thoughtful, nuanced responses and strong capabilities in reasoning, analysis, and coding. This list focuses on **actively maintained, open-source projects** that enhance and extend Claude's capabilities.

---

## Contents

- [Official Anthropic Resources](#official-anthropic-resources)
- [Educational Resources & Tutorials](#educational-resources--tutorials)
- [API Clients & SDKs](#api-clients--sdks)
- [Claude Code Ecosystem](#claude-code-ecosystem)
- [IDE Extensions & Plugins](#ide-extensions--plugins)
- [Model Context Protocol (MCP) Servers](#model-context-protocol-mcp-servers)
- [Applications & User Interfaces](#applications--user-interfaces)
- [Community](#community)

## Official Anthropic Resources

**The authoritative resources directly from Claude's creators**

- [Anthropic Academy](https://www.anthropic.com/learn) - Guides, tutorials, and best practices for working with Claude.
- [Anthropic Cookbook](https://github.com/anthropics/anthropic-cookbook#readme) - 19.9k⭐ - Official collection of notebooks, code examples, and guides for building with Claude. Features Python examples, RAG techniques, and tool use patterns.
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

- [anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python#readme) - 2.2k⭐ - Official Python client library for the Anthropic API. Supports all Claude models with async support and type hints.
- [anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript#readme) - 1.2k⭐ - Official TypeScript/JavaScript client library for the Anthropic API. Works in Node.js and browsers with full TypeScript support.
- [anthropic-sdk-java](https://github.com/anthropics/anthropic-sdk-java#readme) - 151⭐ - Official Java client library for the Anthropic API. Built with modern Java features and comprehensive documentation.
- [anthropic-sdk-go](https://github.com/anthropics/anthropic-sdk-go#readme) - 514⭐ - Official Go client library for the Anthropic API. Idiomatic Go design with context support and comprehensive error handling.
- [anthropic-sdk-ruby](https://github.com/anthropics/anthropic-sdk-ruby#readme) - 211⭐ - Official Ruby client library for the Anthropic API. Clean Ruby interface with comprehensive documentation and examples.

## Claude Code Ecosystem

**Tools, extensions, and integrations for Claude Code**

### Core & Official Tools
- [claude-code](https://github.com/anthropics/claude-code#readme) - 33.2k⭐ - Official Claude Code from Anthropic. An agentic coding tool that lives in your terminal.
- [claude-code-action](https://github.com/anthropics/claude-code-action#readme) - 3.1k⭐ - General-purpose action for GitHub PRs and issues using Claude Code.
- [claude-code-security-review](https://github.com/anthropics/claude-code-security-review#readme) - 2.3k⭐ - AI-powered security review GitHub Action.
- [claude-code-sdk-python](https://github.com/anthropics/claude-code-sdk-python#readme) - 969⭐ - Python SDK for Claude Code.

### Frameworks & Platforms
- [claude-code-router](https://github.com/musistudio/claude-code-router#readme) - 17.5k⭐ - Use Claude Code as foundation for coding infrastructure.
- [SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework#readme) - 15.4k⭐ - Configuration framework with specialized commands and cognitive personas.
- [claudia](https://github.com/getAsterisk/claudia#readme) - 16.2k⭐ - Powerful GUI app and toolkit for Claude Code.
- [claude-flow](https://github.com/ruvnet/claude-flow#readme) - 7.5k⭐ - AI orchestration platform with swarm intelligence and MCP tools.
- [dotai](https://github.com/udecode/dotai#readme) - 1.0k⭐ - Ultimate AI development stack (Shell).

### Agent Collections & Orchestration
- [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code#readme) - 13.9k⭐ - Curated list of commands, files, and workflows.
- [agents](https://github.com/wshobson/agents#readme) - 12.5k⭐ - Production-ready subagents for Claude Code.
- [awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents#readme) - 3.2k⭐ - Orchestrated sub agent dev team.
- [claude-code-subagents-collection](https://github.com/davepoon/claude-code-subagents-collection#readme) - 1.7k⭐ - Subagents & commands collection with CLI tool.
- [claude-agents](https://github.com/iannuttall/claude-agents#readme) - 1.8k⭐ - Custom subagents collection.
- [awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents#readme) - 2.4k⭐ - 100+ specialized AI agents for full-stack development.
- [claude-code-sub-agents](https://github.com/lst97/claude-code-sub-agents#readme) - 941⭐ - Specialized AI subagents for full-stack.
- [awesome-claude-code-agents](https://github.com/hesreallyhim/awesome-claude-code-agents#readme) - 856⭐ - Curated list of sub-agents.
- [claude-code-unified-agents](https://github.com/stretchcloud/claude-code-unified-agents#readme) - 644⭐ - Unified agent collection (Shell).

### Development & Code Tools
- [serena](https://github.com/oraios/serena#readme) - 12.1k⭐ - Semantic retrieval and editing capabilities.
- [context-engineering-intro](https://github.com/coleam00/context-engineering-intro#readme) - 9.7k⭐ - Context engineering guide for AI coding assistants.
- [code2prompt](https://github.com/mufeedvh/code2prompt#readme) - 6.5k⭐ - Convert codebase to LLM prompt with token counting (Rust/MDX).
- [repomix](https://github.com/yamadashy/repomix#readme) - 19.1k⭐ - Pack an entire repository into a single AI-friendly file with token counting and security checks.
- [claude-code-hooks-mastery](https://github.com/disler/claude-code-hooks-mastery#readme) - 1.4k⭐ - Advanced hooks system.
- [vibekit](https://github.com/superagent-ai/vibekit#readme) - 1.2k⭐ - Isolated sandbox for coding agents.
- [Claude-Code-Development-Kit](https://github.com/peterkrueck/Claude-Code-Development-Kit#readme) - 1.1k⭐ - Orchestrated dev environment with automated docs and multi-agent workflows (Shell).

### Alternative Clients & Proxies
- [kilocode](https://github.com/Kilo-Org/kilocode#readme) - 9.7k⭐ - Open source AI coding assistant.
- [claudecodeui](https://github.com/siteboon/claudecodeui#readme) - 4.0k⭐ - Mobile and web UI for Claude Code.
- [claude-relay-service](https://github.com/Wei-Shaw/claude-relay-service#readme) - 3.1k⭐ - Self-hosted mirror service with multi-account support.
- [claude-code-proxy](https://github.com/1rgs/claude-code-proxy#readme) - 2.2k⭐ - Run Claude Code on OpenAI models.

### User Interfaces & Web Apps
- [Happy Coder](https://github.com/slopus/happy#readme) - 1.4k⭐ - Native mobile app and Web UI for Claude Code. Kick off tasks, track progress, and merge changes to continue building on the go.
- [cui](https://github.com/wbopan/cui#readme) - 872⭐ - Web UI for Claude Code agents.
- [ccseva](https://github.com/Iamshankhadeep/ccseva#readme) - 708⭐ - macOS menu bar app for usage tracking.
- [claude-code-webui](https://github.com/sugyan/claude-code-webui#readme) - 574⭐ - Web-based interface with streaming.

### Editor Integrations
- [aide](https://github.com/nicepkg/aide#readme) - 2.6k⭐ - VSCode AI assistant with batch processing.
- [claude-code.nvim](https://github.com/greggh/claude-code.nvim#readme) - 1.3k⭐ - Neovim integration for Claude Code.

### Monitoring & Analytics
- [ccusage](https://github.com/ryoppippi/ccusage#readme) - 7.9k⭐ - CLI tool for analyzing Claude Code usage from JSONL files.
- [Claude-Code-Usage-Monitor](https://github.com/Maciek-roboblog/Claude-Code-Usage-Monitor#readme) - 5.0k⭐ - Real-time usage monitor with predictions.
- [sniffly](https://github.com/chiphuyen/sniffly#readme) - 963⭐ - Dashboard with usage stats and error analysis.

### Project & Session Management
- [claude-code-templates](https://github.com/davila7/claude-code-templates#readme) - 5.9k⭐ - CLI for configuring and monitoring Claude Code.
- [claude-squad](https://github.com/smtg-ai/claude-squad#readme) - 4.6k⭐ - Manage multiple AI terminal agents.
- [Crystal](https://github.com/stravu/crystal#readme) - 1.9k⭐ - Run parallel AI sessions in Git worktrees.
- [claude-sessions](https://github.com/iannuttall/claude-sessions#readme) - 1.0k⭐ - Session tracking and documentation commands.
- [claude-swarm](https://github.com/parruda/claude-swarm#readme) - 1.2k⭐ - Launch Claude Code with swarm of agents.
- [my-claude-code-setup](https://github.com/centminmod/my-claude-code-setup#readme) - 1.1k⭐ - Shared starter template and memory bank system.
- [ccundo](https://github.com/RonitSachdev/ccundo#readme) - 1.1k⭐ - Granular undo functionality.

### Workflow Automation & TDD
- [CCPlugins](https://github.com/brennercruvinel/CCPlugins#readme) - 2.3k⭐ - Framework for senior engineer workflows.
- [claude-code-spec-workflow](https://github.com/Pimzino/claude-code-spec-workflow#readme) - 2.7k⭐ - Spec-driven development workflows.
- [zcf](https://github.com/UfoMiao/zcf#readme) - 1.4k⭐ - Zero-Config Claude-Code Flow.
- [tdd-guard](https://github.com/nizos/tdd-guard#readme) - 1.1k⭐ - Automated TDD enforcement.

### Memory & Context Management
- [cipher](https://github.com/campfirein/cipher#readme) - 2.7k⭐ - Memory layer for coding agents.
- [mcp-memory-service](https://github.com/doobidoo/mcp-memory-service#readme) - 683⭐ - Universal MCP memory with semantic search.
- [core](https://github.com/RedPlanetHQ/core#readme) - 630⭐ - Unified, shareable memory layer.

### Remote Control & Communication
- [Claude-Code-Remote](https://github.com/JessyTsui/Claude-Code-Remote#readme) - 738⭐ - Control via email/Discord/Telegram.
- [Claude-Code-Communication](https://github.com/nishimoto265/Claude-Code-Communication#readme) - 450⭐ - Communication tools for Claude Code.

### Documentation & Learning Resources
- [agent-rules](https://github.com/steipete/agent-rules#readme) - 4.4k⭐ - Rules and knowledge for working with agents (Shell).
- [claude-code-guide](https://github.com/zebbern/claude-code-guide#readme) - 2.2k⭐ - Full guide on tips, tricks and optimization.
- [claude-code-workflows](https://github.com/OneRedOak/claude-code-workflows#readme) - 2.2k⭐ - Best workflows and configurations.
- [claude-code-cookbook](https://github.com/wasabeef/claude-code-cookbook/blob/main/README_en.md#readme) - 674⭐ - Settings collection (Shell).
- [Claude-Command-Suite](https://github.com/qdhenry/Claude-Command-Suite#readme) - 663⭐ - Professional slash commands (Shell).

## IDE Extensions & Plugins

**Deep integrations with development environments**

### VS Code Extensions
- [Cline](https://github.com/cline/cline#readme) - 50.3k⭐ - Most popular autonomous coding agent with file editing, terminal access, and browser automation. Features human-in-the-loop GUI and cost tracking.

- [Claude Coder](https://github.com/kodu-ai/claude-coder#readme) - 4.9k⭐ - Full-stack development assistant that converts ideas to implementation with mockup conversion and web deployment.

- [Claude Code Chat](https://github.com/andrepimenta/claude-code-chat#readme) - 669⭐ - Beautiful native chat interface for Claude Code within VS Code with conversation history and MCP support.

- [Claude VSCode Theme](https://marketplace.visualstudio.com/items?itemName=AlvinUnreal.claude-vscode-theme) - Thoughtful dark theme collection with classic and italic variants. Inspired by Claude AI with carefully balanced contrast and warm syntax colors for long coding sessions.

### Neovim Integration
- [Claude Code Neovim](https://github.com/coder/claudecode.nvim#readme) - 1.1k⭐ - First-to-market WebSocket-based MCP protocol integration for Neovim with zero dependencies. `Lua` `Active`.

### Emacs Integration
- [Claude Code IDE](https://github.com/manzaltu/claude-code-ide.el#readme) - 1.0k⭐ - Comprehensive Emacs integration with native MCP protocol, LSP integration, and project detection. `Emacs Lisp` `150+ ⭐` `Active`.

### Browser Extensions
- [Claude Usage Tracker](https://chromewebstore.google.com/detail/claude-usage-tracker/knemcdpkggnbhpoaaagmjiigenifejfo) - Chrome extension for tracking Claude AI usage and performance metrics.

- [Claude Helper](https://chromewebstore.google.com/detail/claude-helper/nfgojpifghedgeflgnliekadidggnnih/reviews) - Allows folder uploads to Claude projects with advanced file handling. Adds minimap for chat navigation and quick conversation access.

## Model Context Protocol (MCP) Servers

**MCP servers and tools for extending Claude with external integrations**

### Official MCP Infrastructure
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers#readme) - 67.5k⭐ - Repository listing and documenting various MCP servers for different tools and services.
- [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry#readme) - 3.7k⭐ - A community driven registry service for discovering and managing MCP servers (Go).

### MCP Collections & Resources
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers#readme) - 69.6k⭐ - A collection of MCP servers and proxies for various use cases like management, load balancing, and integration.

### MCP Servers
- [github-mcp-server](https://github.com/github/github-mcp-server#readme) - 22.5k⭐ - GitHub's official MCP Server that connects AI tools to GitHub's platform for managing repositories, issues, PRs, and more (Go).
- [awslabs/mcp](https://github.com/awslabs/mcp#readme) - 6.3k⭐ - AWS MCP Servers providing access to AWS APIs, documentation, and best practices for AI applications.
- [mcp-chrome](https://github.com/hangwin/mcp-chrome#readme) - 7.7k⭐ - MCP server for Chrome browser automation and control.
- [context7](https://github.com/upstash/context7#readme) - 29.9k⭐ - MCP server providing up-to-date code documentation and examples for AI code editors.

## Applications & User Interfaces

**Complete applications and polished user interfaces**

### Desktop Applications
- [Claude Desktop](https://claude.ai/download) - Official Claude desktop app for macOS and Windows.
- [Claude Desktop Debian](https://github.com/aaddrick/claude-desktop-debian#readme) - 1.1k⭐ - Unofficial Claude desktop app for Debian/Linux.
- [Chatbox](https://github.com/chatboxai/chatbox#readme) - 36.5k⭐ - Cross-platform desktop app supporting multiple AI models including Claude.

### Multi-Platform Chat Applications
- [Lobe Chat](https://github.com/lobehub/lobe-chat#readme) - 65.4k⭐ - Open-source modern AI chat framework with multi-model support (Claude, OpenAI, Gemini), MCP plugin integration, knowledge base, and artifacts support.

- [LibreChat](https://github.com/danny-avila/LibreChat#readme) - 29.9k⭐ - Multi-model chat platform with comprehensive Claude support alongside other AI models.

- [FastGPT](https://github.com/labring/FastGPT#readme) - 25.8k⭐ - Knowledge-based QA platform with RAG capabilities and Claude integration.

## Community

**Join the Claude community to share knowledge, get help, and stay updated**

- [Claude Discord](https://discord.com/invite/prcdpx7qMm) - Official Discord community for Claude users and developers.
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/) - Reddit community for Claude discussions and tips.
- [Anthropic AI Facebook Group](https://www.facebook.com/groups/anthropicai/) - Facebook group for Anthropic AI and Claude discussions.
- [Claude Performance Tracker](https://awesomeclaude.ai/claude-performance) - Community platform for tracking Claude AI performance issues and response quality.

<!-- EOF -->

## Contributing

**We welcome contributions!** This list follows the [Awesome List Guidelines](https://github.com/sindresorhus/awesome/blob/main/contributing.md#readme).

### How to Contribute

1. Repository Quality Standards:
   - Must be open source with clear license.
   - Active maintenance (commits within 12 months).
   - Meaningful functionality beyond basic examples.
   - Good documentation with installation instructions.
   - Community engagement (reasonable stars/forks for age).

2. Submission Process:
   - Fork this repository.
   - Add your item in the appropriate category.
   - Include: name, description, primary language, approximate stars, maintenance status.
   - Ensure alphabetical order within categories.
   - Submit pull request with clear description.

3. New Category Guidelines:
   - Categories need 3+ quality repositories.
   - Must represent distinct use case or technical approach.
   - Should not overlap significantly with existing categories.

### What We Look For

- Innovation: Novel approaches to Claude integration.
- Utility: Practical tools that solve real problems.
- Quality: Well-documented, tested, professional code.
- Activity: Regular maintenance and community engagement.
- Impact: Projects that advance the Claude ecosystem.

**[⬆ Back to Contents](#contents)**
