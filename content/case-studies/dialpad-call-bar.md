---
title: Call bar visual update
description: Redesigning Dialpad’s in-call control bar to improve clarity, reduce misclicks, and make high-frequency actions effortless across voice and video.
date: 2025-05-10
cover: /illustrations/integ-install.svg
tags: [ui, ux, design, accessibility, callbar]
stack: [Figma, Nuxt, Tailwind, Hotjar, Loom, Jira]

# Showcase fields
showcase:
  problem:
    - Critical call actions competed for attention with no clear primary/secondary hierarchy
    - Inconsistent iconography and labels made high-frequency actions harder to scan
    - Weak hover/active/disabled states led to misclicks and uncertainty
    - Keyboard access and focus states were unreliable across call states (ringing, on-call, hold)
    - Dense spacing increased accidental clicks on destructive or high-impact actions
  solution:
    - Established a clear action hierarchy by grouping related controls and separating destructive actions
    - Introduced persistent labels for critical actions to improve recognition and reduce errors
    - Standardized iconography and interaction states (hover, active, disabled, focus, danger)
    - Designed explicit error/context states for edge cases like hold, transferring, and device unavailable
    - Improved accessibility with WCAG AA contrast, visible focus ring, and keyboard shortcuts
    - Built a responsive layout that adapts from compact to spacious while preserving grouping
  impact:
    - Reduced misclicks on critical actions by 28% in beta
    - Decreased time-to-action for transfer and add-participant by 21%
    - Increased usage of advanced actions (record, device switch) by 15%
    - Increased usage of transfer/add-participant flows by 17% in beta
  role:
    - Owned end-to-end design from heuristic audit through tokenized specs and handoff
    - Audited the existing call bar and cataloged controls, labels, states, and interaction gaps
    - Defined a scalable hierarchy system for primary/secondary/destructive actions
    - Designed a complete state model across ringing, active call, hold, transferring, recording, and failures
    - Explored compact vs spacious layouts and tuned spacing/hit areas for safety and speed
    - Prototyped key flows and validated error rate, confidence, and time-to-action in usability tests
    - Partnered with engineering to validate keyboard navigation, focus order, and ARIA behavior
  designDecisions:
    - Prioritized frequency and risk - high-frequency actions stayed primary; destructive actions were isolated
    - Used consistent iconography + labels to improve scanability across dense layouts
    - Designed stateful feedback (focus/hover/disabled/danger) to make critical actions feel safe
    - Increased hit areas and spacing near high-impact controls to reduce accidental clicks
    - Verified accessibility in contrast and focus behavior to support keyboard-heavy users
    - Built a Figma plugin to surface accessibility and visual-impairment issues early in design.
  images:
    - src: /case-studies/dialpad-call-bar/call-bar-before.jpg
      alt: Call bar before redesign
    - src: /case-studies/dialpad-call-bar/call-bar-after.png
      alt: Call bar after redesign with improved hierarchy and labeling
    - src: /case-studies/dialpad-call-bar/call-bar-after-2.png
      alt: Call bar after redesign with AI enabled
    - src: /case-studies/dialpad-call-bar/call-bar-after-3.png
      alt: Call bar after redesign with recording enabled
    - src: /case-studies/dialpad-call-bar/call-bar-after-4.png
      alt: Call bar after redesign in supervisor listening mode
    - src: /case-studies/dialpad-call-bar/call-bar-actions.png
      alt: Call bar action hierarchy and grouping
    - src: /case-studies/dialpad-call-bar/call-bar-popover.png
      alt: Call bar overflow actions and popover behavior
    - src: /case-studies/dialpad-call-bar/call-bar-variants.png
      alt: Call bar layout variants explored during design
    - src: /case-studies/dialpad-call-bar/call-bar-mic-wave.png
      alt: Call bar mic activity visualization
    - src: /case-studies/dialpad-call-bar/incoming-call.png
      alt: Incoming call state in the redesigned call bar
    - src: /case-studies/dialpad-call-bar/group-call.png
      alt: Group call controls and participant management
    - src: /case-studies/dialpad-call-bar/callbar-de.png
      alt: Call bar language support (German)
    - src: /case-studies/dialpad-call-bar/callbar-es.png
      alt: Call bar language support (Spanish)
    - src: /case-studies/dialpad-call-bar/callbar-fr.png
      alt: Call bar language support (French)
    - src: /case-studies/dialpad-call-bar/callbar-jp.png
      alt: Call bar language support (Japanese)
---

<SectionHeader title="" highlight="Problem" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-4 tracking-wide">

**Critical call actions were harder to find and easier to get wrong than they should be.**

- Controls competed for attention with no clear primary/secondary hierarchy.
- Inconsistent iconography and labels made it harder to scan and recognize actions.
- Weak affordances (hover/active/disabled states) led to misclicks and uncertainty.
- Keyboard access and focus states were not reliable across states (ringing, on-call, hold).
- Density and spacing caused accidental clicks on closely placed destructive or high-impact actions.

<img src="/case-studies/dialpad-call-bar/call-bar-before.jpg" alt="Callbar before redesign" class="mb-6"/>

</div>

<SectionHeader title="" highlight="Results" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-4 tracking-wide">

- Reduced misclicks on critical controls by **28%** in beta.
- Decreased time-to-action for transfer and add-participant by **21%**.
- Increased usage of advanced actions (record, device switch) by **15%**.

<img src="/case-studies/dialpad-call-bar/call-bar-after.png" alt="Callbar after redesign" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-after-2.png" alt="Callbar after redesign, Ai on" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-after-3.png" alt="Callbar after redesign, recording on" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-after-4.png" alt="Callbar supervisor listening in" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/group-call.png" alt="Group call" class="mb-6"/>

### Contextual & Error States

- Defined explicit visual states for ringing, on-call, hold, transferring, recording, device muted/unavailable.
- Introduced inline confirmations for destructive actions (end, remove participant) to reduce accidental taps.

### Accessibility & Keyboard Shortcuts

- WCAG AA compliant color and contrast for all states; high-contrast mode verified.
- Logical tab order, visible focus ring, and shortcut hints for power users.

### Responsiveness & Density

- Adaptive layout from compact (narrow windows) to spacious (desktop) with consistent grouping.
- Increased hit areas and spacing for high-risk controls to reduce errors.

</div>

<SectionHeader title="" highlight="Process" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-6">

<img src="/case-studies/dialpad-call-bar/call-bar-variants.png" alt="Callbar variants" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-actions.png" alt="Callbar actions" class="mb-6 w-full"/>

<img src="/case-studies/dialpad-call-bar/call-bar-popover.png" alt="Callbar pop over" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-mic-wave.png" alt="Callbar mic activity" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/incoming-call.png" alt="Incoming call" class="mb-6"/>

### Audit & Heuristics

- Inventory of existing controls, labels, icons, and states; identified redundancy and conflicts.
- Heuristic evaluation highlighted hierarchy, affordance, and feedback gaps.

### Flows & Scenarios

- Mapped core flows: start/receive call, transfer, add participant, device switch, record, hang up.
- Captured edge cases: device unavailable, permissions, failed transfer, hold/resume.

### Visual Exploration

- Iterated on iconography set and label patterns; tested compact vs spacious variants.
- Defined state tokens (hover, active, focus, danger) and elevation for feedback.

<img src="/case-studies/dialpad-call-bar/callbar-de.png" alt="Language support German" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/callbar-es.png" alt="Language support Spanish" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/callbar-fr.png" alt="Language support French" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/callbar-jp.png" alt="Language support Japanese" class="mb-6"/>

### Prototyping & Testing

- Built interactive prototypes; ran task-based tests with SMB and enterprise users.
- Measured time-to-action, error rate, and user confidence; iterated based on findings.

### Dev Handoff

- Provided tokenized specs, interaction rules, and state tables.
- Paired with engineering to validate keyboard navigation and ARIA roles.

</div>

<SectionHeader title="" highlight="Conclusion" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-4 mb-4">

The updated call bar makes the most important actions **visible, scannable, and safe**. Clear hierarchy, consistent iconography, and robust state feedback reduced errors and helped people act faster in critical moments. The result is a calmer, more confident in-call experience.

Next step: expand the pattern to video controls and explore **role-based presets** for admins and supervisors.

</div>

<SectionHeader title="" highlight="" subtitle="Made with ❤, thank you for reading.">

</SectionHeader>
