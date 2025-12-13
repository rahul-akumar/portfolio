---
title: Dialpad CTI Redesign
description: Redesigning Dialpad’s CTI (Computer Telephony Integration) experience to improve usability, reduce workflow friction, and make calling tools more intuitive for sales and support teams.
date: 2025-04-15
cover: /illustrations/cti.svg
tags: [ui, ux, design, CTI, telephony, crm]
stack: [Figma, Hotjar, Loom, Jira, Excalidraw, Obsidian]

# Showcase fields
showcase:
  problem:
    - The legacy CTI was cluttered and inconsistent CRM & ticketing
    - High-frequency controls were hard to scan, causing missed or incorrect actions
    - There were no contextual entry points for CRM actions (logging, notes, tasks) during calls
    - AI features (Assist, Playbooks, RTAs, Transcriptions) are not fully available in CTI, limiting their impact.
    - Limited screen real estate and iframe constraints make designing a scalable, navigable experience challenging.
  solution:
    - Designed a lightweight, dockable CTI widget that works consistently across integrations
    - Streamlined call controls with clearer hierarchy and larger touch targets for speed and accuracy
    - Added inline CRM actions (log call, create task, update record) directly inside the CTI
    - Unified the search & dial experience to reduce navigation and context switching
    - Built a scalable component system to keep the CTI consistent as features expanded
  impact:
    - CTI adoption increased from 40% → 76% of target users
    - Average call handling time reduced by 22%
    - Task completion success rate improved by +31% in usability tests
  role:
    - Owned end-to-end product design from audit through execution and validation
    - Audited legacy CTI patterns across platforms and prioritized the highest-friction flows
    - Defined interaction hierarchy and state behavior for calling controls and CRM actions
    - Prototyped key flows (incoming call, logging, dial/search) to test speed and clarity
    - Ran usability tests with 15 sales reps and 10 support agents and iterated over 4 sprints
    - Partnered with engineering to ensure the design system scaled across web, desktop, and CRM plugins
  images:
    - src: /case-studies/dialpad-cti/cti-before.png
      alt: Legacy CTI experience (before redesign)
    - src: /case-studies/dialpad-cti/cti-incoming-call.png
      alt: Redesigned CTI widget for incoming calls
    - src: /case-studies/dialpad-cti/cti-log-call.png
      alt: Inline CRM call logging inside the CTI
    - src: /case-studies/dialpad-cti/cti-numpad.png
      alt: Unified dial pad and call controls
    - src: /case-studies/dialpad-cti/cti-sf-1.png
      alt: Consistent CTI experience embedded in Salesforce
    - src: /case-studies/dialpad-cti/cti-ideation-1.png
      alt: CTI design iteration explorations (1)
    - src: /case-studies/dialpad-cti/cti-ideation-2.png
      alt: CTI flow iteration explorations (2)
    - src: /case-studies/dialpad-cti/cti-ideation-3.png
      alt: CTI call logging iteration explorations (3)
    - src: /case-studies/dialpad-cti/cti-ideation-4.png
      alt: CTI call controls iteration explorations (4)
    - src: /case-studies/dialpad-cti/cti-ideation-5.png
      alt: CTI incoming call iteration explorations (5)
    - src: /case-studies/dialpad-cti/cti-ideation-6.png
      alt: CTI calendar sheet iteration explorations (6)
    - src: /case-studies/dialpad-cti/audit-1.png
      alt: CTI audit findings (1)
    - src: /case-studies/dialpad-cti/audit-2.png
      alt: CTI audit findings (2)
    - src: /case-studies/dialpad-cti/audit-3.png
      alt: CTI audit findings (3)

---

<SectionHeader title="" highlight="Problem" subtitle="">

</SectionHeader>

<div class="flex flex-col">

**Sales and support reps struggled with the existing CTI.**
<br>

- Inconsistent UI across web, desktop, and CRM plugins.

- Cluttered controls led to missed or incorrect actions.

- No contextual entry points for integrations (CRM logging, notes, etc.).

<img src="/case-studies/dialpad-cti/cti-before.png" alt="CTI before redesign" class="mb-6"/>

</div>

<SectionHeader title="" highlight="Results" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-4">

- CTI adoption increased from **40% → 76% of target users**.
- Average call handling time reduced by **22%**.
- Task completion success rate improved by **+31%**.

### New CTI Widget

- **Lightweight, dockable widget** usable inside CRM, browser, or desktop.
- Consistent design system for call actions, regardless of platform.

<img src="/case-studies/dialpad-cti/cti-incoming-call.png" alt="CTI redesigned widget" class="mb-6"/>

### Contextual Call Controls

- Added **inline CRM actions** (log call, create task, update record) directly into CTI.
- Reduced need to switch between apps during calls.

<img src="/case-studies/dialpad-cti/cti-log-call.png" alt="CTI call logging" class="mb-6"/>

### Workflow Improvements

- Unified **search & dial bar** across all platforms.
- Added quick actions (mute, transfer, record) with larger touch targets.

<img src="/case-studies/dialpad-cti/cti-numpad.png" alt="CTI numpad" class="mb-6"/>

<img src="/case-studies/dialpad-cti/cti-sf-1.png" alt="CTI Salesforce" class="mb-6"/>

### Research & Validation

- Ran usability tests with **15 sales reps and 10 support agents**.
- Iterated on designs across 4 sprints, refining control placement & responsiveness.

</div>

<SectionHeader title="" highlight="Process" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-4">

### Audit

<img src="/case-studies/dialpad-cti/audit-1.png" alt="CTI audit" class="mb-0"/>

<img src="/case-studies/dialpad-cti/audit-2.png" alt="CTI audit" class="mb-0"/>

<img src="/case-studies/dialpad-cti/audit-3.png" alt="CTI audit" class="mb-0"/>

### Design Iterations & Prototyping

<img src="/case-studies/dialpad-cti/cti-ideation-1.png" alt="CTI design iterations" class="mb-6"/>

<img src="/case-studies/dialpad-cti/cti-ideation-2.png" alt="CTI flow iterations" class="mb-6"/>

<img src="/case-studies/dialpad-cti/cti-ideation-3.png" alt="CTI call logging iterations" class="mb-6"/>

<img src="/case-studies/dialpad-cti/cti-ideation-4.png" alt="Call controls" class="mb-6"/>

<img src="/case-studies/dialpad-cti/cti-ideation-5.png" alt="Incoming call" class="mb-6"/>

<img src="/case-studies/dialpad-cti/cti-ideation-6.png" alt="Calendar sheet" class="mb-6"/>

### Interviews

- Sales reps wanted **faster CRM logging with fewer clicks**.
- Support teams asked for **predictable controls across web & desktop**.

### Competitive Audit

- Benchmarked Salesforce CTI, Aircall and RingCentral plugins.
- Dialpad caught up with a **unified, modernized CTI widget**.

</div>

<SectionHeader title="" highlight="Conclusion" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-4">

The redesigned CTI **streamlined call handling workflows** and made daily tasks significantly faster.

By focusing on **consistency, contextual actions, and reduced cognitive load**, we achieved higher adoption, faster task completion, and stronger satisfaction across sales and support teams.

Next step: integrate **AI-powered call assistance** (real-time transcription, smart follow-ups, sentiment tracking).

</div>

<SectionHeader title="" highlight="" subtitle="Made with ❤, thank you for reading.">

</SectionHeader>
