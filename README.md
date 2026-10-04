# Maharashtra Portal Hub

Build a multi-view React dashboard for "UdyamSeva", a Unified Intelligent Approval & Compliance Engine designed for the Government of Maharashtra. Use Tailwind CSS and Lucide React icons.

CRITICAL DESIGN & COLOR CONSTRAINTS:

- STRICTLY NO "AI" AESTHETICS: Do not use dark mode, glowing neon, heavy gradients, or glassmorphism. The design must look like a grounded, reliable, and official government portal.

- MAHARASHTRA GOV THEME: Use Deep Navy Blue (#003366) for the main header and sidebar, Golden Yellow/Ochre (#FFB81C) for primary action buttons and accents, and crisp White/Light Gray (#F8FAFC) for backgrounds and cards.

- TOP BAR: Include a clean header with the project name "UdyamSeva | Single Window Portal", an accessibility text-resize toggle, and a language selector (English / मराठी).

STRUCTURE AND VIEWS:

Create a persistent left sidebar with 4 tabs and implement basic state to switch between these views in the main content area:

1. Know Your Approvals (Questionnaire):

- Create a clean, white card containing a form: Select Industry Category (Dropdown), Investment Size (Input), and District (Dropdown: Pune, Thane, Nagpur, etc.).

- A Golden Yellow "Generate Requirements" button.

- Below the form, display a generated checklist of required licenses (e.g., MPCB Consent to Establish, Fire NOC) with a small blue info-icon explaining the rule behind each.

2. Smart Document Vault (Submit):

- A minimal, dashed-border drag-and-drop upload zone. 

- Display a list of uploaded documents (e.g., "Company Incorporation", "Land Deed").

- Instead of "AI" animations, use a simple, professional "Verifying..." text state that turns into a green "Verified & Locked" badge, indicating the data is saved for all departments.

3. Parallel Processing Dashboard (Process):

- This is the core view. Create a dashboard grid with 5 cards representing departments: Environment, Fire, Water, Power, and MIDC.

- Each card must display a "Status" pill (e.g., Pending, Under Review, Approved).

- Each card MUST have a prominent "SLA Timer" (e.g., "12 Days Remaining") styled in bold text. If a timer is close to 0, color the text red.

4. Joint Inspection & Unified License (Inspect & Renew):

- Top half: A calendar widget titled "Joint Site Inspection" showing a single date where multiple departments are scheduled to visit simultaneously.

- Bottom half: A "Unified License" digital certificate card with a dummy QR code, an official-looking border, and a "Download PDF" button.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9eed31b9-72c2-506e-b06e-9306d42e22c8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
