---
title: Increasing integration adoption across Dialpad ecosystem
description: A first principles redesign of how integrations surface inside Dialpad by aligning them to user workflows across discovery, in-flow action, and post-call review.
problem: Integrations existed in the product but not in the workflow. They were invisible during moments of need and disconnected from core communication tasks. This created low adoption, duplicated work, and inconsistent CRM data.
solution: Introduced a workflow-aligned model for integrations across the sidebar, live call surfaces, banners, and conversation history. Created a rules-based system that determines when and how integrations appear based on user context.
metrics: Increased integration adoption from 25% → 38% of active orgs, reduced setup friction by 35%, and boosted NPS for integrations by +18.
date: 2025-06-01
cover: /illustrations/integrations.svg
tags: [ui, ux, design, integrations]
stack: [Figma, Nuxt, Tailwind, Hotjar, Loom, Jira, Excalidraw, Obsidian]
---

# Problem

<div class="flex flex-col gap-4 tracking-wide">

Integrations existed in the product but not in the workflow. They were invisible during moments of need and disconnected from core communication tasks. This created low adoption, duplicated work, and inconsistent CRM data.

**The core issue was not UI. It was the system.**
Integrations were not embedded into the communication workflow.

Through analysis of usage patterns, support data, and behavior logs, I found three foundational gaps.

## 1. Users did not know integrations existed

Integrations lived in a nested profile panel, detached from areas where communication work happens.
Visibility was accidental, not intentional.

## 2. Integrations were not present during the actual task

During calls, users had no access to CRM actions.
After calls, users saw no contextual link between conversations and CRM or ticketing tools.

## 3. The product architecture treated integrations as settings, not as workflow participants

This prevented integrations from influencing behavior at the right moment.

**First principles interpretation:**
If a tool is not surfaced at the moment of need, adoption is mathematically capped.

<img src="/case-studies/dialpad-ucaas/integrations-before.png" alt="Integrations before" />

</div>

# Strategy

<div class="flex flex-col gap-4 tracking-wide">

As the product designer, I reframed the problem from
**“How do we make integrations more visible?”**
to
**“What is the lifecycle of communication work, and where does integration value naturally fit?”**

This resulted in a workflow-aligned framework:

## Discovery

Where users explore what tools are available.

## In-flow action

Where users need to log, sync, or enrich data while the call or message is happening.

## Post-call review

Where users understand context or complete tasks.

This framework guided the entire redesign and became a rulebook for engineering and design system teams.

## Awareness

To support the new workflow model, I introduced a lightweight, rule-based banner system that appears only when users demonstrate behaviors that indicate missed integration value — for example manually logging calls in Salesforce or switching apps mid-call.

The banner was not the primary solution.
It served as an activation accelerator, ensuring that the larger investments (sidebar, call pill, conversation history) were actually discovered by users.

</div>

# Solution

<div class="flex flex-col gap-4 tracking-wide">

### 1. Sidebar: Rebuilt for Discovery

The sidebar became the dedicated place for learning, browsing, and activating integrations.

- Introduced an integrations panel based on the new discovery model.
- Provided clear entry points for CRM, helpdesk, and productivity tools.
- Validated with Salesforce pilot groups to ensure mental model alignment.

<img src="/illustrations/image.png" alt="Integrations after" />

### 2. Call Pill: Designed for In-flow Action

The call pill became the real-time surface for action.

- Added one-tap CRM logging and syncing.
- Brought integration actions directly to where the call happens.
- Reduced tab switching, duplicate data entry, and workflow friction.

<img src="/case-studies/dialpad-ucaas/call-pill.png" alt="Call pill" />

### 3. Conversation History: Built for Post-call Context

Conversation threads now reveal where CRM or ticketing systems are involved.

- Displayed synced records and metadata inside threads.
- Made context visible without changing apps.

<img src="/case-studies/dialpad-ucaas/conversation-history.png" alt="Conversation history" />

### 4. System Banner: Awareness and Activation

A small but high-impact system banner complemented the core redesign by addressing the awareness gap:

- Triggered when users repeated tasks that integrations could automate
- Provided guided activation flows directly from the surface
- Replaced a failed marketing blocker and a low-visibility settings nudge
- Increased early activation of integrations without disrupting workflows

The banner acted as the ingress layer, complimenting the workflow layer.

<img src="/case-studies/dialpad-ucaas/system-banner.png" alt="Conversation history" />

</div>

# System Design Work

<div class="flex flex-col gap-4">

A key part of this project was systemizing integrations across the ecosystem.

### I defined:

- When integration surfaces appear.
- Priority rules.
- Component structure for long-term scalability.
- Design tokens and patterns for integration states.

This work later became the foundation for Dialpad’s integration experience guidelines.

<img src="/case-studies/dialpad-ucaas/iterations.png" alt="Integration iterations" />
<img src="/case-studies/dialpad-ucaas/component-structure.png" alt="Integration component structure" />
<img src="/case-studies/dialpad-ucaas/call-pill-ideation.png" alt="Call pill ideation" class="w-full"/>

### Banner System Logic

Designed the banner as a modular component inside the design system:

- Trigger rules
- Priority logic (e.g., only one banner per session)
- Contextual entry points
- Clear dismissal states
- Alignment with engineering’s lifecycle events

This ensured the banner was a scalable system, not a one-off implementation.

<img src="/case-studies/dialpad-ucaas/banner-problem.png" alt="Banner problem definition" class="w-full"/>
<img src="/case-studies/dialpad-ucaas/banner-root.png" alt="Banner root cause analysis" class="w-full"/>
<img src="/case-studies/dialpad-ucaas/banner-opp-map.png" alt="Banner opportunity mapping" class="w-full"/>
<img src="/case-studies/dialpad-ucaas/banner-sys-sol.png" alt="Banner system level solution" class="w-full"/>
<img src="/case-studies/dialpad-ucaas/banner-test.png" alt="Banner usability testing" class="w-full"/>

</div>

# Validation

<div class="flex flex-col gap-4">

### User Interviews

- Users felt integrations were finally positioned at the right moment in their workflow.
- Admins appreciated clearer setup flows and more predictable behavior.

### User Testing

- Higher task completion rates for call logging and CRM syncing.
- Reduction in navigation steps across all customer tiers.

### Competitive Audit

- Zoom and RingCentral Validate: contextual surfaces outperform settings-based ones.
- Dialpad aligned to this behavior and extended it with workflow logic.

</div>

# Results

<div class="flex flex-col gap-4">

- Integration adoption increased from 25 percent to 38 percent just within first 3 weeks.
- Daily in-product integration actions doubled.
- Setup friction reduced by 35 percent.
- Admin satisfaction increased across enterprise segments.
- Engineering adopted the framework for future integration work.
- Banners accelerated the start, while the workflow surfaces sustained the daily usage.
- 22% reduction in tickets raised by admins and agents regarding integrations.

<a href="https://dialpad-beacon.vercel.app/#/inbox" target="_blank" rel="noopener noreferrer"
   class="inline-block bg-black/75 hover:bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border border-white/10 hover:border-white/20">
Protoype →
</a>

</div>

# Conclusion

<div class="flex flex-col gap-4 mb-4">

Integrations moved from being hidden features to being embedded in the communication lifecycle.
The new workflow-aligned model created sustained adoption, improved data quality, and reduced operational friction for users and admins.

**Next step:** Build adaptive integration suggestions powered by AI and user role behavior.

</div>

---

_Made with 🧠 & ❤️, thank you for reading._
