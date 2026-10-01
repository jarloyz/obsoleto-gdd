# Reddit Pitch — OBSOLETO (時代遅れ)
> **Instrucciones:** Copia el contenido debajo de la línea y pégalo directamente en un nuevo post de Reddit (en modo Markdown).
> **Subreddits recomendados:** `r/gamedev` (mejor opción), `r/GameDesign`, `r/IndieGaming`.

---

# [Update / Pitch] A few weeks ago, you told me to stop finishing games in my head and write a real GDD. Here is OBSOLETO.

Hey r/gamedev,

A few weeks ago, I posted here confessing that I kept "finishing" whole games in my head without ever actually sitting down to design them. Several of you gave me solid advice: stop daydreaming and write a proper Game Design Document (GDD).

I took that to heart. I spent the last few weeks thinking through all the mechanics, systems, and scope, and I finally committed to this project. I believe the premise is strong, and it's a story and game loop I would genuinely love to design and build. I’m sharing it here hoping some of you can check it out and give me your honest, constructive critique before I dive into engine prototyping.

---

### High Concept & Elevator Pitch
Set in **contemporary Japan**, you play as Kenji (47), an administrative salaryman laid off during a corporate restructuring after 25 years of loyal service — replaced by a fresh graduate who earns a third of his salary through automated office tools. Evicted from his metropolitan apartment and fiercely refusing to burden his adult children, he pawns his smartphone for emergency groceries and packs what remains into his austere **1998 Toyota Probox** — the quintessential utilitarian Japanese company wagon with rear seats that fold completely flat.

In the back, he carries:
- His late wife's ceramic urn and her framed portrait taped to the air vents.
- A crumpled notepad with his son's home phone number (no mobile data, no GPS).
- A 35mm film camera with 24 exposures left — bought 15 years ago for a road trip they endlessly postponed and never took.
- A folded paper road map bought at a gas station.
- **Her mechanical typewriter:** she dreamed of being a published novelist, a promise he broke under 25 years of unpaid overtime.

Deemed "obsolete" by modern corporate society, Kenji resolves to fulfill those promises: drive north all the way to Cape Sōya. To fund fuel without digital payment apps, he opens his Probox rear hatch each evening to sell customized instant noodles to night shift workers; from green NTT coin payphones, he faces the agonizing choice to tell his son the truth or pretend "everything is great"; and every midnight, he types out the raw, unembellished truth of his journey on her machine.

---

### Core Pillars
1. **The Dignity of Routine:** Victory isn't building a fast-food franchise empire. It’s earning enough coins for 15 liters of regular gasoline, engine coolant, and having 30 quiet midnight minutes to type.
2. **The Tripartite Loop:**
   - **Morning & The Road:** Meditative driving at 60–80 km/h, coolant temp vigilance, paper map navigation, and micro-dilemmas (picking up an elderly hitchhiker, buying wild mushrooms from lonely farm stalls, taking unmarked mountain exits).
   - **The Trunk Stall (Dusk):** Fast-paced, tactile micro-management boiling water, slicing scallions over the bumper, dropping raw eggs, collecting physical coins and listening to customer confessions.
   - **The Rear Cabin (Night):** Introspective coin payphone calls to his son, followed by typing raw daily memoirs on her mechanical typewriter (*clack-clack-ding*).
3. **Pure Diegesis:** No mini-maps or digital HUD clutter. Fuel is read on the analog needle; engine health in radiator steam; money in the cup holder coins; route navigation on the steering wheel's paper map.

---

### Systems Flowchart (The 24h Loop)
```
[08:00 - Morning Prep] ──► [11:00 - The Road] ──► [19:00 - Trunk Stall] ──► [23:30 - Midnight Typewriter]
• Inspect coolant & oil    • 60-80 km/h cruise    • Boil water & toppings   • Mechanical typing rhythm
• Buy 100¥ noodles & gas   • Roadside dilemmas    • Feed shift workers      • NTT payphone dilemma (son)
• Paper map navigation     • Radio/cassette lo-fi • Collect physical coins  • Sleep & save progress
```

---

### Technical Scope & Solo-Dev Feasibility
To keep production realistic without requiring an open-world budget:
- **Node-Graph & Modular Road Assembly:** Rather than modeling endless kilometers, a roguelike node map connects handcrafted highway slices (tunnels, mountain bends, coastal bridges).
- **Stylized Retro 32-bit Visuals (Low-Poly):** Minimalist geometry elevated by volumetric headlights, rain shaders, and amber lantern reflections.
- **Environmental Storytelling:** Diegetic foley audio (rain pelting thin sheet metal, bubbling broth, clacking keys) without costly voice acting rigs.

---

### Where I'd Love Your Feedback:
1. **The Core Loop balance:** Does alternating between slow meditative driving, tactile fast cooking, and midnight typing feel like a satisfying 24-hour cycle?
2. **Pacing risk:** Does writing without complex fictional plots (just raw memoirs of the day's encounters) work for you emotionally, or would you expect a more branching narrative?
3. **Engine choice:** I'm planning to build this in **Godot 4** (or lightweight Unity URP). Any specific caveats for modular road stitching and interior vehicle physics in Godot?

The full interactive Game Design Document (with dynamic Mermaid flowcharts) is published on my GitHub Pages repo here: https://jarloyz.github.io/obsoleto-gdd/

Thanks for pushing me to get this out of my head and onto paper!
