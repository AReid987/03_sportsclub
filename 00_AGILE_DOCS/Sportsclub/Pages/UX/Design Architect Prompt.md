---
type: Page
title: Design Architect Prompt
description: null
icon: null
createdAt: '2025-06-04T23:56:40.807Z'
creationDate: 2025-06-04 18:56
modificationDate: 2025-06-04 19:01
tags: [SystemPrompt, UxDesign, Agent]
coverImage: null
---

# Design Architect Prompt

## Prompt for Design Architect (UI/UX Specification Mode)

#### **Objective:** 

- Elaborate on the UI/UX aspects of the product defined in this PRD. 

#### **Mode:** 

- UI/UX Specification Mode 

#### **Input:** 

- This completed PRD document. 

#### **Key Tasks:**

1. Review the product goals, user stories, and any UI-related notes herein.

2. Collaboratively define detailed user flows, wire-frames (conceptual), and key screen mockups/descriptions.

3. Specify usability requirements and accessibility considerations.

4. Populate or create the `front-end-spec-tmpl` document.

5. Ensure that this PRD is updated or clearly references the detailed UI/UX specifications derived from your work, so that it provides a comprehensive foundation for subsequent architecture and development phases.

Please guide the user through this process to enrich the PRD with detailed UI/UX specifications.

----- END Design Architect `UI/UX Specification Mode` Prompt START Architect Prompt ------

## Initial Architect Prompt

Based on our discussions and requirements analysis for the Sportsclub, I've compiled the following technical guidance to inform your architecture analysis and decisions to kick off Architecture Creation Mode:

### Technical Infrastructure

#### **Repository & Service Architecture Decision:** 

- Monorepo with Turborepo, Microservices backend.

#### **Starter Project/Template:** 

- None explicitly defined, open to Architect's suggestions.

#### **Hosting/Cloud Provider:** 

- Cloud-native approach preferred (e.g., AWS, GCP, Azure).

#### **Frontend Platform:** 

- Next.js, with preferences for PNPM, Radix UI, Tailwind CSS, Framer Motion, Anime.js.

#### **Backend Platform:** 

- Python/FastAPI, with preferences for PDM, uv, Drizzle ORM.

#### **Database Requirements:** 

- PostgreSQL for primary relational data. Redis for caching/session.

### Technical Constraints

- Reliance on free APIs and web scraping for 

    - odds, 

    - event outcomes, 

    - and news content, 

    - with associated risks for reliability and terms of use.

- Legal and regulatory compliance for 

    - skill-based contests, 

    - cash prizes, 

    - KYC/AML, 

    - and data privacy across target jurisdictions.

- Need for robust implementation and monitoring of external data sources.

### Deployment Considerations

#### Deployment frequency: 

- On-demand and daily for MVP.

#### CI/CD requirements: 

- Basic CI/CD pipeline setup for automated builds and initial checks (part of Epic 1).

#### Environment requirements: 

- Development, Staging, Production environments.

- ###System will utilize autoscaling mechanisms for optimal resource utilization.

- System should degrade gracefully under extreme load.

### Local Development & Testing Requirements

- Consistent local development environment setup (documented scripts/configurations).

- Basic framework for local testability of initial components.

### Other Technical Considerations

#### **Security requirements with technical implications:** 

- Data encryption (at rest and in transit), 

- secure authentication/authorization, 

- input sanitization, 

- output encoding, 

- secrets management, 

- dependency security, 

- principle of least privilege, 

- API security (HTTPS, 

- rate limiting).

#### **Scalability needs with architectural impact:** 

- Designed for growth towards hundreds of thousands of concurrent users, 

- initial MVP target load of [e.g., 1,000-5,000] concurrent users. 

- Infrastructure designed to support auto-scaling and load balancing.

#### **Reliability:** 

- Aim for at least 99.5% uptime for core services. 

- Regular, automated backups (RTO < 4 hrs, RPO < 1 hr). 

- Fault tolerance with redundancy for critical services, graceful degradation.

#### **Data Storage & Durability:** 

- Critical data stored in highly available, 

- durable, 

- consistently backed-up data stores. 

- Data integrity and consistency.

#### **Data Retention:** 

- PII retained as legally required; 

- historical data retained indefinitely for analytics/AI.

#### **System Monitoring:** 

- Comprehensive monitoring 

    - (performance, health, resources, errors), 

- logging, 

- alerting.

#### **Technical Debt:** 

- Pragmatic approach, 

- conscious documentation of shortcuts, 

- regular review/refactoring.

#### **AI Assistant:** 

- Capabilities in Q&A, 

- generative UI for data visualization, 

- tutoring on data analysis, 

- personalized performance reviews. 

- Core AI capabilities to support community engagement.

----- END Architect Prompt -----

