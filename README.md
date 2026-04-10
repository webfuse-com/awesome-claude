# Awesome Claude [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://awesomeclaude.ai"><img src="assets/awesomeclaude.svg" alt="Awesome Claude Logo" align="right" style="height: 120px; width: 120px"></a>
AI assistant by Anthropic for complex reasoning, code generation, and analysis tasks.

> [Claude](https://claude.ai) is a large language model developed by Anthropic that excels at complex reasoning, code generation, and analysis tasks. Built with Constitutional AI principles, Claude provides reliable assistance for programming, writing, research, and problem-solving while maintaining safety and accuracy.

---

## 📋 Contents

- [🏢 Official Anthropic Resources](#-official-anthropic-resources)
- [🛠️ Claude Code & Model Context Protocol (MCP)](#️-claude-code--model-context-protocol-mcp)
- [⭐ Community Curated Lists](#-community-curated-lists)
- [🧩 Extensions & Integrations](#-extensions--integrations)
- [💻 Applications](#-applications)
- [📚 Educational Resources](#-educational-resources)
- [👥 Community](#-community)

---

<div align="center">

<a href="https://github.com/webfuse-com/awesome-webmcp"><img src="assets/webmcp-deverlopers.png" alt="awesome-webmcp" height="80" style="border-radius: 16px;"></a>

**Building with the Web?** Check out [awesome-webmcp](https://github.com/webfuse-com/awesome-webmcp) - a curated list of awesome things related to the WebMCP W3C standard.

</div>

---

## 🏢 Official Anthropic Resources

**The authoritative source for everything Claude -  directly from Anthropic**

### 🧠 Current Models (Claude 4.6 Family - Early 2026)

- **Claude Opus 4.6** (Feb 5, 2026) -  Anthropic's most capable model ever. Best-in-class for coding, long-horizon agents, large codebases, debugging, financial analysis, and enterprise workflows. New: 1M token context window (beta), adaptive thinking (dynamic reasoning depth), agent teams, context compaction. SOTA on Terminal-Bench 2.0, GDPval-AA (+190 Elo over Opus 4.5), Humanity's Last Exam, BrowseComp. [Announcement](https://www.anthropic.com/news/claude-opus-4-6) | [System Card](https://www.anthropic.com/claude-opus-4-6-system-card)
- **Claude Sonnet 4.6** (Feb 17, 2026) -  Best balance of intelligence, speed, and cost. Near-Opus performance on coding, computer use (multi-tab forms, spreadsheets), and professional tasks. Now the default model for many plans. [Announcement](https://www.anthropic.com/news/claude-sonnet-4-6)
- **Claude Haiku 4.5** (Oct 2025) -  Fastest model with near-frontier intelligence. Perfect for high-volume, real-time, and sub-agent tasks. [Announcement](https://www.anthropic.com/news/claude-haiku-4-5)

**Key specs (API):**  
- Opus 4.6: `claude-opus-4-6` • $5/$25 per MTok • 200K standard / 1M beta context  
- Sonnet 4.6: `claude-sonnet-4-6` • $3/$15 per MTok • 200K standard / 1M beta context  
- Haiku 4.5: `claude-haiku-4-5` • $1/$5 per MTok • 200K context  
Premium pricing for >200K tokens. Full comparison: [Models overview](https://platform.claude.com/docs/en/about-claude/models/overview)

### 🔌 API & Developer Platform

- [Claude Developer Console](https://console.anthropic.com) -  API keys, prompt testing, usage monitoring, Claude Code sessions.
- [Official Documentation](https://platform.claude.com/docs/) -  Full reference for Messages API, tool use, computer use, prompt caching, structured outputs, citations, MCP Connector, and Claude Code.
- [Models & Pricing](https://platform.claude.com/docs/en/about-claude/models/overview) -  Latest model IDs, pricing, context windows, thinking features, and cloud provider IDs.

### 🔧 SDKs & Development Tools

**Official Client SDKs** -  Full feature parity: messages, tools, streaming, caching, computer use.

- [anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) -  Python SDK with async support and type hints.
- [anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript) -  TypeScript/JavaScript SDK for Node.js and browsers.
- [anthropic-sdk-java](https://github.com/anthropics/anthropic-sdk-java) -  Java/Kotlin SDK with modern features.
- [anthropic-sdk-go](https://github.com/anthropics/anthropic-sdk-go) -  Go SDK with idiomatic design.
- [anthropic-sdk-ruby](https://github.com/anthropics/anthropic-sdk-ruby) -  Ruby SDK.
- [anthropic-sdk-csharp](https://github.com/anthropics/anthropic-sdk-csharp) -  C#/.NET SDK (Beta).
- [anthropic-sdk-php](https://github.com/anthropics/anthropic-sdk-php) -  PHP SDK (Beta).

**Agent SDKs** -  Build custom autonomous agents with Claude Code capabilities.

- [claude-agent-sdk-python](https://github.com/anthropics/claude-agent-sdk-python) -  Python Agent SDK. [Docs](https://platform.claude.com/docs/en/agent-sdk/overview)
- [claude-agent-sdk-typescript](https://github.com/anthropics/claude-agent-sdk-typescript) -  TypeScript Agent SDK.

**Starters**

- [Claude Cookbook](https://github.com/anthropics/claude-cookbooks) -  Official notebooks and recipes for common patterns (RAG, tool use, Skills, MCP).
- [Claude Quickstarts](https://github.com/anthropics/claude-quickstarts) -  Ready-to-deploy example apps.

### ☁️ Cloud Providers

**Official access to Claude models through cloud providers** (all support Opus 4.6 / Sonnet 4.6)

- **[Amazon Bedrock](https://aws.amazon.com/bedrock/anthropic/)** -  Fully managed access to the latest Claude models (Opus 4.6, Sonnet 4.6, Haiku 4.5). Supports cross-region inference (new regions: Thailand, Malaysia, Singapore, Indonesia, Taiwan), latency optimizations, fine-tuning, agents, guardrails, and deep AWS integration.
- **[Google Cloud Vertex AI Model Garden](https://cloud.google.com/products/model-garden/claude)** -  Deploy Claude models with provisioned throughput, prompt caching, batch predictions, grounding, and enterprise compliance (FedRAMP High). Great for building agents with Google Cloud tools.
- **[Microsoft Azure AI Model Catalog (Anthropic Publisher)](https://ai.azure.com/catalog/publishers/anthropic)** -  Claude models via the AI Model Catalog. Supports serverless deployment, agent building, tool integration, fine-tuning, and billing through existing Azure agreements.

### 🛡️ Transparency & Safety

**Detailed evaluations, risk assessments, and alignment insights for Claude models**

- [Transparency Hub](https://www.anthropic.com/transparency) -  Overview of safety evaluations and improvements across models.
- [All System Cards](https://www.anthropic.com/system-cards) -  Index of all model system cards.
  - [Claude Opus 4.6 System Card](https://www.anthropic.com/claude-opus-4-6-system-card) -  Capability and safety report (Feb 2026).
  - [Claude Sonnet 4.6 System Card](https://www.anthropic.com/claude-sonnet-4-6-system-card) -  Detailed evaluations (Feb 2026).
  - [Claude Opus 4.5 System Card](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) -  Comprehensive capability and safety report (Nov 2025).
  - [Claude Haiku 4.5 System Card](https://www.anthropic.com/claude-haiku-4-5-system-card) -  Safety and performance report (Oct 2025).
- [Claude Code Security](https://www.anthropic.com/news/claude-code-security) -  Security model and threat analysis for Claude Code (Feb 2026).

---

## 🛠️ Claude Code & Model Context Protocol (MCP)

**Anthropic's agentic coding platform and open extension standard**

### 🤖 Claude Code

Terminal-first agentic coding tool (CLI), with VS Code/JetBrains IDE integrations, Desktop GUI (Cowork), and browser control. Understands entire codebases, plans and executes multi-step tasks, edits files, runs git/shell, creates PRs, and integrates browser control.

- [Official site & docs](https://code.claude.com/docs/en/overview) -  Getting started, commands, memory, hooks, GitHub Actions, IDE setup.
- [Product page](https://claude.ai/product/claude-code) -  Overview of Claude Code features and plans.
- [Claude Desktop](https://claude.ai/download) -  macOS + Windows app; includes **Cowork** GUI for non-technical workflows and the dedicated **Code** tab.
- Install CLI: `curl -fsSL https://claude.ai/install.sh | bash` (macOS/Linux) or via Homebrew/Winget.
- [Claude for Chrome (Beta)](https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn) -  Integrates with Claude Code for browser control (multi-tab workflows, Slack, Gmail, GitHub).

### 🔌 Model Context Protocol (MCP)

Open standard (Linux Foundation) for connecting Claude to tools, repos, databases, tickets, and more. Supports one-click desktop extensions (`.mcpb` files).

- [MCP official site](https://modelcontextprotocol.io/) -  Spec, SDKs, and quickstart.
- [Introduction to MCP](https://anthropic.skilljar.com/introduction-to-model-context-protocol) -  Official Anthropic course: build MCP servers and clients from scratch in Python.
- [MCP: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics) -  Sampling, notifications, transports.
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers#readme) -  Curated community list of MCP servers.

---

## ⭐ Community Curated Lists

**Awesome lists and collections maintained by the community**

- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code#readme) -  Slash-commands, CLAUDE.md files, CLI tools, and workflows for Claude Code.
- [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills#readme) -  Resources and tools for customizing AI workflows with Claude Skills.
- [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills#readme) -  Categorized skills for document handling, development tools, data analysis, and more.
- [langgptai/awesome-claude-prompts](https://github.com/langgptai/awesome-claude-prompts#readme) -  Collection of prompt examples designed to improve Claude interactions.
- [vijaythecoder/awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents#readme) -  Team of specialized AI agents for building features and debugging.
- [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents#readme) -  100+ specialized AI agents for full-stack development maintained by the community.
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers#readme) -  Curated list of Model Context Protocol (MCP) servers for extending Claude's capabilities.

---

## 🧩 Extensions & Integrations

### 🎨 IDE Extensions

- [Claude Code for VS Code](https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code) -  Official Anthropic extension. Inline diffs, `@`-mentions, plan review, conversation history, and full Claude Code integration.
- [Claude Code for JetBrains (Beta)](https://plugins.jetbrains.com/plugin/27310-claude-code-beta-) -  Official Anthropic plugin for IntelliJ, PyCharm, WebStorm, and other JetBrains IDEs.
- [Claude Code Chat](https://github.com/andrepimenta/claude-code-chat#readme) -  Beautiful native chat interface for Claude Code within VS Code with conversation history and MCP support.
- [Claude Code Theme](https://github.com/ashwingopalsamy/claude-code-theme) -  Claude-inspired VS Code theme pack with dark/light/high-contrast and brand variants, semantic token tuning, and ANSI-optimized terminal colors.
- [Claude VSCode Theme](https://marketplace.visualstudio.com/items?itemName=AlvinUnreal.claude-vscode-theme) -  Thoughtful dark theme collection with classic and italic variants. Inspired by Claude AI with carefully balanced contrast and warm syntax colors.

### 🌐 Browser Extensions

- [Claude for Chrome (Beta)](https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn) -  Max plan required. Claude works directly in your browser and takes actions on your behalf. Features scheduled tasks, planning mode, multi-tab workflows, and smart navigation for Slack, Gmail, Google Calendar, Docs, and GitHub.
- [Claude Usage Tracker](https://chromewebstore.google.com/detail/claude-usage-tracker/knemcdpkggnbhpoaaagmjiigenifejfo) -  Chrome extension for tracking Claude AI usage and performance metrics.

### ⌨️ CLI Tools

- [resume-cli](https://github.com/inevolin/resume-cli#readme) -  TUI to resume AI coding sessions across Claude Code, GitHub Copilot CLI, and Codex from a single interactive picker; supports cross-tool context loading.

---

## 💻 Applications

### 🖥️ Desktop

- [Claude Desktop](https://claude.ai/download) -  Official Claude desktop app for macOS and Windows. Includes a dedicated **Code** tab (GUI for Claude Code) and **Cowork** for non-technical users.
- [Claude Desktop Debian](https://github.com/aaddrick/claude-desktop-debian#readme) -  Unofficial Claude desktop app for Debian/Linux.

---

## 📚 Educational Resources

### 🎓 Official Courses

**Free courses from Anthropic covering prompt engineering, API usage, agents, and more**

- [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) -  Collaborate with AI systems effectively, efficiently, ethically, and safely.
- [AI Fluency for Educators](https://anthropic.skilljar.com/ai-fluency-for-educators) -  Apply AI Fluency into teaching practice and institutional strategy.
- [AI Fluency for Students](https://anthropic.skilljar.com/ai-fluency-for-students) -  Enhance learning, career planning, and academic success through AI.
- [AI Fluency for Nonprofits](https://anthropic.skilljar.com/ai-fluency-for-nonprofits) -  Increase organizational impact while staying true to mission and values.
- [Teaching AI Fluency](https://anthropic.skilljar.com/teaching-ai-fluency) -  Teach and assess AI Fluency in instructor-led settings.
- [Building with the Claude API](https://anthropic.skilljar.com/claude-with-the-anthropic-api) -  Full spectrum of working with Anthropic models using the Claude API.
- [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) -  Practical walkthrough of using Claude Code to accelerate your development workflow.
- [Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol) -  Build MCP servers and clients from scratch using Python.
- [MCP: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics) -  Advanced patterns including sampling, notifications, and transports.
- [Claude Agent SDK Overview](https://platform.claude.com/docs/en/agent-sdk/overview) -  Docs for building custom autonomous agents using the official Agent SDKs.
- [Claude with Amazon Bedrock](https://anthropic.skilljar.com/claude-in-amazon-bedrock) -  Accreditation program course, now available publicly.
- [Claude with Google Vertex AI](https://anthropic.skilljar.com/claude-with-google-vertex) -  Working with Anthropic models through Google Cloud's Vertex AI.

### 📹 Video Tutorials

- [Claude Video Tutorials](https://support.claude.com/en/collections/10548294-video-tutorials) -  Official video tutorials from Claude Support.

### 📖 Community Guides

- [Claude Code Everything You Need to Know](https://github.com/wesammustafa/Claude-Code-Everything-You-Need-to-Know#readme) -  Ultimate all-in-one guide to mastering Claude Code. Covers setup, prompt engineering, commands, hooks, workflows, automation, integrations, MCP servers, and the BMAD method.
- [40+ Claude Code Tips](https://github.com/ykdojo/claude-code-tips#readme) -  Tips for getting the most out of Claude Code, including a custom status line script, cutting the system prompt in half, using Gemini CLI as Claude Code's minion, and Claude Code running itself in a container. Also includes the dx plugin for GitHub Actions debugging, conversation cloning, and handoffs.
- [My Experience With Claude Code After 2 Weeks of Adventures](https://sankalp.bearblog.dev/my-claude-code-experience-after-2-weeks-of-usage/) - Part 1: Real-world lessons on using a `TODO.md` file to keep Claude on track, managing costs, and why it often outperforms Cursor for complex refactors.
- [A Guide to Claude Code 2.0 and getting better at using coding agents](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/#setup) - Part 2: A deep dive into the 2.0 update, focusing on the "Agent Manager" mindset, context engineering, and using sub-agents for larger codebases.

---

## 👥 Community

**Join the Claude community to share knowledge, get help, and stay updated**

- [Claude Discord](https://discord.com/invite/prcdpx7qMm) -  Official Discord community for Claude users and developers.
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/) -  Reddit community for Claude discussions and tips.
- [Anthropic AI Facebook Group](https://www.facebook.com/groups/anthropicai/) -  Facebook group for Anthropic AI and Claude discussions.

---

**[⬆ Back to Contents](#-contents)**
