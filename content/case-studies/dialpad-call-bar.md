---
title: Call bar visual update
description: Redesigning Dialpad’s in-call control bar to improve clarity, reduce misclicks, and make high-frequency actions effortless across voice and video.
problem: The call bar had competing hierarchies, inconsistent iconography, and weak affordances for critical actions (mute, transfer, add participant, device selection), leading to frequent errors and slower response times.
solution: We established a clear action hierarchy, grouped related controls, added persistent labels for critical actions, introduced stateful and disabled states, standardized iconography, and improved focus/hover feedback with accessible color and type.
metrics: Reduced misclicks on critical actions by 28%, decreased time-to-action by 21%, and increased usage of transfer/add-participant flows by 17% in beta.
date: 2025-05-10
cover: /illustrations/integ-install.svg
tags: [ui, ux, design, accessibility, callbar]
stack: [Figma, Nuxt, Tailwind, Hotjar, Loom, Jira]
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

<img src="/case-studies/dialpad-call-bar/call-bar-before.JPG" alt="Callbar before redesign" class="mb-6"/>

</div>

<SectionHeader title="" highlight="Results" subtitle="">

</SectionHeader>

<div class="flex flex-col gap-4 tracking-wide">

- Reduced misclicks on critical controls by **28%** in beta.
- Decreased time-to-action for transfer and add-participant by **21%**.
- Increased usage of advanced actions (record, device switch) by **15%**.

<img src="/case-studies/dialpad-call-bar/call-bar-after.PNG" alt="Callbar after redesign 1/3" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-after-2.PNG" alt="Callbar after redesign 2/3" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-after-3.PNG" alt="Callbar after redesign 3/3" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-after-4.PNG" alt="Callbar supervisor listening in" class="mb-6"/>

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

<img src="/case-studies/dialpad-call-bar/call-bar-variants.PNG" alt="Callbar variants" class="mb-6"/>

<img src="/case-studies/dialpad-call-bar/call-bar-actions.PNG" alt="Callbar actions" class="mb-6 w-full"/>

### Audit & Heuristics

- Inventory of existing controls, labels, icons, and states; identified redundancy and conflicts.
- Heuristic evaluation highlighted hierarchy, affordance, and feedback gaps.

### Flows & Scenarios

- Mapped core flows: start/receive call, transfer, add participant, device switch, record, hang up.
- Captured edge cases: device unavailable, permissions, failed transfer, hold/resume.

### Visual Exploration

- Iterated on iconography set and label patterns; tested compact vs spacious variants.
- Defined state tokens (hover, active, focus, danger) and elevation for feedback.

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

<SectionHeader title="" highlight="" subtitle="Thank you ❤">

</SectionHeader>
