---
layout: section
class: text-center
---

<div class="text-xs tracking-[0.3em] opacity-50 mb-4">COLD OPEN · ~4 MIN</div>

# One data, three plots

<div class="text-lg opacity-70 mt-4 font-light">
Same data. Three ways to deliver.
</div>

---
layout: default
---

<div class="text-xs tracking-widest text-rose-500 mb-2">VERSION A · THE DEFAULT PLOT, PASTED IN</div>

<div class="mt-4 rounded-lg border border-slate-200 p-4 bg-white">
<ReadmissionChart variant="makeover" />
</div>

<div class="mt-3 text-sm opacity-70">
What everyone has seen a hundred times: whatever <code>plot()</code> gave us, a legend to decode, and the title "Figure 1".
</div>

<!--
Hold this for ~10 seconds in silence. Ask: "What's the message?" Let someone squint at the legend.
This is the clicks=0 state of the makeover component; we'll come back to it.
-->

---
layout: default
clicks: 4
---

<div class="text-xs tracking-widest text-indigo-500 mb-2">VERSION B · BUILT UP, ONE CLICK AT A TIME</div>

<div class="mt-4 rounded-lg border border-slate-200 p-4 bg-white">
<ReadmissionChart variant="build" />
</div>

<!--
Click 1: before bars. "This is where we were."
Click 2: protocol line. "Then this happened." Pause — let them predict.
Click 3: after bars. Audience gets there before the annotation.
Click 4: action title + −34%. The slide confirms what they already concluded.
-->

---
layout: default
---

<div class="text-xs tracking-widest text-emerald-600 mb-2">VERSION C · LET THE ROOM ASK QUESTIONS</div>

<div class="mt-2 rounded-lg border border-slate-200 p-4 bg-white">
<InteractiveChart />
</div>

<!--
"Was it all wards?" — click Pulmonology. Hover a point.
This answers a question someone asked; it would have been noise if nobody asked.
Then: "Which one made the point?" Quick show of hands A/B/C. Most say B for the talk, C for Q&A.
That's the thesis of the session.
-->

---
layout: center
class: text-center
---

<div class="text-3xl font-serif leading-relaxed max-w-3xl">
B is for <strong>telling</strong>. C is for <strong>exploring together</strong>.<br/>

</div>

<div class="mt-8 text-sm opacity-60">
All three are the same Vue component in a markdown file. 
</div>
