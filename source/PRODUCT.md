# KOKO design lab

Three additional interactive design prototypes for KOKO, a Kazakhstan beauty retailer. Existing store remains separate. The user asked for three different visual styles at the craft level of Gold Apple and explicitly selected Sites, KokonutUI and local ComfyUI.

Audience: Russian-speaking cosmetics shoppers in Kazakhstan. Currency KZT. Preserve KOKO name, skincare categories, familiar search, product navigation, favorite and basket affordances. Instagram is secondary, never the main design authority.

Deliverable: one private comparison Site containing three separately linkable responsive storefront prototypes, catalog view, product preview and local test basket. This is a visual selection tool, not a second payment service. Product and price examples come from incumbent KOKO demo catalog; visible disclosure must state test assortment and prices. Do not invent discounts, reviews, medical results, confirmed stock, merchant connection or guarantees.

Concepts: Electric Market (white/black, electric blue, chartreuse, oversized sans, campaign mosaic); Gloss Atelier (rich berry, blush, dark red type, beauty photography, magazine hierarchy); Skin Archive (cool white/teal, geometric sans, focused skincare routine, ingredient-based discovery).

Use official KokonutUI Smooth Tab as the comparison selector, adapted with keyboard navigation and reduced-motion support. ComfyUI API is currently unavailable at localhost:8188; no generated outputs may be claimed. Use existing KOKO imagery and verified official packshots.

2026-10-05 extension: the user requested promotional posts/campaigns and a profile in these frontend test designs. Add Beauty Week campaign, two product edits and a profile invitation, each respecting the selected world. Illustrative −15%/BEAUTY15 is authorized as design-demo content only: the banner must say the promotion does not operate and basket prices remain unchanged. Never present it as a real KOKO offer.

Profile remains a front-end preview, not authentication or customer storage: guest identity, actual device-local favorites/cart, truthful empty order history, and device-local preview preferences for skin type/care goal. No personal details, passwords, live loyalty points or invented orders. Reuse SmoothTab for profile sections; validate stored preference enums and handle unavailable browser storage without discarding the current form. Real sign-in and server-backed profiles require a separately requested store integration.
