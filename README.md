# Awesome Claude [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
<a href="https://awesomeclaude.ai"><img src="assets/awesomeclaude.svg" alt="Awesome Claude Logo" align="right" style="height: 120px; width: 120px"></a>
AI assistant by Anthropic for complex reasoning, code generation, and analysis tasks.

> [Claude](https://claude.ai) is a large language model developed by Anthropic that excels at complex reasoning, code generation, and analysis tasks. Built with Constitutional AI principles, Claude provides reliable assistance for programming, writing, research, and problem-solving while maintaining safety and accuracy.

---

## 📋 Contents

- [🏢 Official Anthropic Resources](#-official-anthropic-resources)
- [⭐ Awesome GitHub Repos Related to Claude](#-awesome-github-repos-related-to-claude)
- [📚 Educational Resources & Tutorials](#-educational-resources--tutorials)
- [🔌 API Clients & SDKs](#-api-clients--sdks)
- [🎯 Project Management & Orchestration](#-project-management--orchestration)
- [🧩 IDE Extensions & Plugins](#-ide-extensions--plugins)
- [💻 Applications & User Interfaces](#-applications--user-interfaces)
- [👥 Community](#-community)

## 🏢 Official Anthropic Resources

**The authoritative source for everything Claude — directly from Anthropic**

### 🧠 Current Models (Claude 4.5 Family - Released 2025)

- **Claude Opus 4.5** (Nov 2025) — World's best for coding, agents, computer use, and complex enterprise tasks. Dramatically improved token efficiency. [Announcement](https://www.anthropic.com/news/claude-opus-4-5)
- **Claude Sonnet 4.5** (Sep/Oct 2025) — Best balance of intelligence, speed, and cost. Sets new benchmarks in coding, reasoning, and alignment. [Announcement](https://www.anthropic.com/news/claude-sonnet-4-5)
- **Claude Haiku 4.5** (Oct 2025) — Fastest and most cost-effective, with state-of-the-art speed for complex tasks. [Announcement](https://www.anthropic.com/news/claude-haiku-4-5)

### 🔌 API & Developer Platform

- [Anthropic Console](https://console.anthropic.com) — Sign up, get API keys, test prompts, and monitor usage.
- [Official Documentation](https://platform.claude.com/docs/en/get-started) — Complete API reference, guides, prompt engineering, tool use, computer use, and release notes.
- [API Overview & Pricing](https://platform.claude.com/docs/en/about-claude/models/overview) — Usage-based pricing, prompt caching, web search, computer use (Python execution), batch processing, citations, and more.
- [Claude Agent SDK](https://github.com/anthropics/claude-agent-sdk-python) (Python) & [TypeScript](https://github.com/anthropics/claude-agent-sdk-typescript) — Official SDKs for building advanced agentic applications.

### 🏆 Official Anthropic SDKs
The most reliable and feature-complete way to use the Claude API. All support messages, tool use, streaming, prompt caching, computer use (where available), and more.

- [anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) — Official Python SDK with async support, type hints, and full feature parity.
- [anthropic-sdk-typescript](https://github.com/anthropics/anthropic-sdk-typescript) — Official TypeScript/JavaScript SDK for Node.js and browsers.
- [anthropic-sdk-java](https://github.com/anthropics/anthropic-sdk-java) — Official Java/Kotlin SDK with modern features.
- [anthropic-sdk-go](https://github.com/anthropics/anthropic-sdk-go) — Official Go SDK with idiomatic design.
- [anthropic-sdk-php](https://github.com/anthropics/anthropic-sdk-php) — Official PHP SDK (currently in beta).
- [anthropic-sdk-csharp](https://github.com/anthropics/anthropic-sdk-csharp) — Official C#/.NET SDK (currently in beta).
- [anthropic-sdk-ruby](https://github.com/anthropics/anthropic-sdk-ruby) — Official Ruby SDK.

#### 🚀 Code Examples & Starters

- [Claude Cookbook](https://github.com/anthropics/claude-cookbooks) — Official notebooks and recipes for common patterns (RAG, tool use, etc.).
- [Claude Quickstarts](https://github.com/anthropics/claude-quickstarts) — Ready-to-deploy example apps.

### 📚 Learning & Courses

- [Anthropic Courses](https://anthropic.skilljar.com/) — Free and paid courses on prompt engineering, API usage, building agents, and more.

### ☁️ Third-Party Cloud Availability
**Official access to Claude models through major cloud providers (enterprise-grade, with additional governance, compliance, and scaling features)**

- [Amazon Bedrock](https://aws.amazon.com/bedrock/anthropic/) — Fully managed access to the full Claude 4.5 family (Opus, Sonnet, Haiku). Supports cross-region inference, latency optimizations, and integration with AWS services. Ideal for secure, scalable enterprise deployments.
- [Google Cloud Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude) — Claude 4.5 models available in Model Garden. Features provisioned throughput, prompt caching, batch predictions, and FedRAMP High compliance. Great for building and deploying agents with Vertex AI tools.

### 🛡️ Transparency & Safety Resources
**Detailed evaluations, risk assessments, and alignment insights for Claude models**

- [Transparency Hub](https://www.anthropic.com/transparency) — Overview of safety evaluations and improvements across models.
- [Claude Opus 4.5 System Card](https://assets.anthropic.com/m/64823ba7485345a7/Claude-Opus-4-5-System-Card.pdf) — Comprehensive capability and safety report (Nov 2025).
- [Claude Sonnet 4.5 System Card](https://assets.anthropic.com/m/12f214efcc2f457a/original/Claude-Sonnet-4-5-System-Card.pdf) — Detailed evaluations (Sep 2025).
- [Claude Haiku 4.5 System Card](https://www.anthropic.com/claude-haiku-4-5-system-card) — Safety and performance report (Oct 2025).

## ⭐ Awesome GitHub Repos Related to Claude

**Community-curated collections of Claude resources, tools, and examples**

- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code#readme) - Curated collection of slash-commands, CLAUDE.md files, CLI tools, and workflows for Claude Code.
- [travisvn/awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills#readme) - Resources and tools for customizing AI workflows with Claude Skills.
- [BehiSecc/awesome-claude-skills](https://github.com/BehiSecc/awesome-claude-skills#readme) - Categorized skills for document handling, development tools, data analysis, and more.
- [langgptai/awesome-claude-prompts](https://github.com/langgptai/awesome-claude-prompts#readme) - Collection of prompt examples designed to improve Claude interactions.
- [vijaythecoder/awesome-claude-agents](https://github.com/vijaythecoder/awesome-claude-agents#readme) - Team of specialized AI agents for building features and debugging.
- [VoltAgent/awesome-claude-code-subagents](https://github.com/VoltAgent/awesome-claude-code-subagents#readme) - 100+ specialized AI agents for full-stack development maintained by the community.
- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers#readme) - Curated list of Model Context Protocol (MCP) servers for extending Claude's capabilities with external data sources, APIs, and tools.

## 📚 Educational Resources & Tutorials

### 🎓 Official Anthropic Courses

- [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) - Learn to collaborate with AI systems effectively, efficiently, ethically, and safely.
- [AI Fluency for Educators](https://anthropic.skilljar.com/ai-fluency-for-educators) - Empowers faculty, instructional designers, and educational leaders to apply AI Fluency into their own teaching practice and institutional strategy.
- [AI Fluency for Students](https://anthropic.skilljar.com/ai-fluency-for-students) - Empowers students to develop AI Fluency skills that enhance learning, career planning, and academic success through responsible AI collaboration.
- [AI Fluency for Nonprofits](https://anthropic.skilljar.com/ai-fluency-for-nonprofits) - Empowers nonprofit professionals to develop AI fluency to increase organizational impact and efficiency while staying true to their mission and values.
- [Teaching AI Fluency](https://anthropic.skilljar.com/teaching-ai-fluency) - Empowers academic faculty, instructional designers, and others to teach and assess AI Fluency in instructor-led settings.
- [Building with the Claude API](https://anthropic.skilljar.com/claude-with-the-anthropic-api) - Comprehensive course covering the full spectrum of working with Anthropic models using the Claude API.
- [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) - Integrate Claude Code into your development workflow.
- [Introduction to Model Context Protocol](https://anthropic.skilljar.com/introduction-to-model-context-protocol) - Learn to build Model Context Protocol servers and clients from scratch using Python. Master MCP's three core primitives—tools, resources, and prompts—to connect Claude with external services.
- [Model Context Protocol: Advanced Topics](https://anthropic.skilljar.com/model-context-protocol-advanced-topics) - Advanced MCP implementation patterns including sampling, notifications, file system access, and transport mechanisms for production MCP server development.
- [Claude with Amazon Bedrock](https://anthropic.skilljar.com/claude-in-amazon-bedrock) - Full course created for AWS employees as part of an accreditation program, now available publicly.
- [Claude with Google Cloud's Vertex AI](https://anthropic.skilljar.com/claude-with-google-vertex) - Comprehensive course covering the full spectrum of working with Anthropic models through Google Cloud's Vertex AI.

### 📹 Official Video Tutorials

- [Claude Video Tutorials](https://support.claude.com/en/collections/10548294-video-tutorials) - Official video tutorials from Claude Support.

### 📖 Community Guides & Tutorials

- [Claude Code Everything You Need to Know](https://github.com/wesammustafa/Claude-Code-Everything-You-Need-to-Know#readme) - Ultimate all-in-one guide to mastering Claude Code. Covers setup, prompt engineering, commands, hooks, workflows, automation, integrations, MCP servers, tools, and the BMAD method with step-by-step tutorials and real-world examples.

## 🧩 IDE Extensions & Plugins

### 🎨 VS Code Extensions

- [Claude Code Chat](https://github.com/andrepimenta/claude-code-chat#readme) - Beautiful native chat interface for Claude Code within VS Code with conversation history and MCP support.

- [Claude VSCode Theme](https://marketplace.visualstudio.com/items?itemName=AlvinUnreal.claude-vscode-theme) - Thoughtful dark theme collection with classic and italic variants. Inspired by Claude AI with carefully balanced contrast and warm syntax colors for long coding sessions.

### 🌐 Browser Extensions
- [Claude for Chrome (Beta)](https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn) - Max plan required. Claude works directly in your browser and takes actions on your behalf. Features scheduled tasks, planning mode, multi-tab workflows, model selection, and smart navigation for Slack, Gmail, Google Calendar, Docs, and GitHub.

- [Claude Usage Tracker](https://chromewebstore.google.com/detail/claude-usage-tracker/knemcdpkggnbhpoaaagmjiigenifejfo) - Chrome extension for tracking Claude AI usage and performance metrics.

## 💻 Applications & User Interfaces

### 🖥️ Desktop Applications
- [Claude Desktop](https://claude.ai/download) - Official Claude desktop app for macOS and Windows.
- [Claude Desktop Debian](https://github.com/aaddrick/claude-desktop-debian#readme) - Unofficial Claude desktop app for Debian/Linux.

## 👥 Community

**Join the Claude community to share knowledge, get help, and stay updated**

- [Claude Discord](https://discord.com/invite/prcdpx7qMm) - Official Discord community for Claude users and developers.
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/) - Reddit community for Claude discussions and tips.
- [Anthropic AI Facebook Group](https://www.facebook.com/groups/anthropicai/) - Facebook group for Anthropic AI and Claude discussions.

**[⬆ Back to Contents](#contents)**
