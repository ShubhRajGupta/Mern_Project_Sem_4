# SKILLS.md

## Overview
This repository defines a structured MERN Full Stack Development skill system designed for context-efficient agent workflows.

The objective is to:
- minimize unnecessary context loading,
- isolate domain-specific expertise,
- improve task-focused execution,
- support scalable multi-domain software development.

The architecture follows lazy-loading principles:
skills are loaded only when required by the current task.

---

# Core Stack

## Frontend Foundations
### HTML
- Semantic HTML5
- Accessibility basics
- Forms
- SEO structure
- Document architecture

### CSS
- Flexbox
- Grid
- Responsive design
- Animations
- Media queries

### Tailwind CSS
- Utility-first styling
- Responsive utilities
- Component composition
- Theme customization
- Layout optimization

### JavaScript
- ES6+
- DOM manipulation
- Async programming
- Closures
- Modules
- Fetch API
- Error handling

### Git / GitHub
- Branching workflows
- Pull requests
- Merge conflict resolution
- Version control strategy
- CI-oriented collaboration

---

# React Ecosystem

## React.js
### Capabilities
- Functional components
- Hooks
- Context API
- Routing
- State management
- Performance optimization
- Component architecture

### Recommended Skill Loading
Load when:
- building SPA interfaces,
- implementing client-side state,
- handling routing/navigation,
- optimizing rendering behavior.

---

## Redux
### Capabilities
- Centralized state management
- Reducers
- Actions
- Middleware
- Store architecture

### Recommended Skill Loading
Load when:
- application state becomes distributed,
- cross-component synchronization is required,
- predictable state transitions matter.

---

## Redux Toolkit
### Capabilities
- Slice architecture
- RTK Query
- Async thunks
- Store simplification
- Boilerplate reduction

### Recommended Skill Loading
Load when:
- scalable Redux architecture is needed,
- API caching/state synchronization is required,
- reducing Redux complexity is important.

---

# Backend Ecosystem

## Node.js
### Capabilities
- Event-driven architecture
- Non-blocking I/O
- File system operations
- Streams
- Process management

### Recommended Skill Loading
Load when:
- implementing backend runtime logic,
- handling async server operations,
- building APIs/services.

---

## Express.js
### Capabilities
- REST API development
- Middleware pipelines
- Authentication
- Routing
- Error handling
- Request lifecycle management

### Recommended Skill Loading
Load when:
- building HTTP services,
- implementing middleware,
- designing backend routing systems.

---

## MongoDB
### Capabilities
- NoSQL schema design
- Aggregation pipelines
- Indexing
- Document modeling
- Query optimization

### Recommended Skill Loading
Load when:
- designing persistence layers,
- handling document databases,
- optimizing read/write operations.

---

# Context Optimization Model

## Problem
Large agent contexts degrade:
- latency,
- relevance,
- reasoning precision,
- token efficiency.

Loading all technical knowledge simultaneously introduces:
- cognitive noise,
- irrelevant instructions,
- reduced focus.

---

## Solution: Skill-Based Lazy Loading

Each domain capability is isolated into modular skills.

Agents dynamically load:
- only the expertise required,
- only the examples relevant to the task,
- only the operational instructions needed.

This improves:
- context density,
- execution precision,
- scalability across complex projects.

---

# Example Workflow

## Task: Build Authentication API

### Skills Loaded
- Node.js
- Express.js
- MongoDB

### Skills Not Loaded
- Tailwind CSS
- Redux
- React rendering optimization

Result:
- reduced context overhead,
- more focused backend reasoning.

---

## Task: Build Dashboard UI

### Skills Loaded
- React.js
- Tailwind CSS
- Redux Toolkit

### Skills Not Loaded
- MongoDB internals
- Express middleware patterns

Result:
- frontend-focused execution context,
- improved UI implementation efficiency.

---

# Recommended Repository Structure

```text
skills/
│
├── frontend/
│   ├── html/
│   ├── css/
│   ├── tailwind/
│   ├── javascript/
│   ├── react/
│   ├── redux/
│   └── redux-toolkit/
│
├── backend/
│   ├── nodejs/
│   ├── express/
│   └── mongodb/
│
└── shared/
    ├── git/
    ├── testing/
    └── deployment/