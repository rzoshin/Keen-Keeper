# KeanKeeper 🌿

> Your personal shelf of meaningful connections — track, tend, and nurture the friendships that matter most.

KeanKeeper is a relationship management app built for people who want to be intentional about staying in touch. Life gets busy, and it's easy to lose track of the people who matter. KeanKeeper solves that by letting you set a contact goal for each friend, tracking how long it's been since your last interaction, and flagging connections that need attention. Log a call, text, or video check-in directly from a friend's page, browse your full interaction history on the Timeline, and get a visual breakdown of your habits in the Analytics dashboard. It's not a social network — it's a quiet, focused tool for maintaining real relationships.

---

## 🛠️ Tech Stack

- **React 19** — UI with `use()` hook for async data
- **React Router v7** — client-side routing with loaders
- **Tailwind CSS v4 + DaisyUI** — utility-first styling with component presets
- **Recharts** — interaction analytics pie chart
- **React Toastify** — toast notifications
- **React Icons** — icon library

---

## ✨ Key Features

- **Friend Dashboard** — View all your friends in a card grid with their contact status (on track, almost due, overdue) at a glance.
- **Quick Check-In Logging** — Log a Call, Text, or Video interaction directly from a friend's detail page, automatically recorded to your timeline.
- **Friendship Analytics** — A visual breakdown of your interactions by type (Call, Text, Video) so you can see how you've been staying in touch.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/your-username/keenkeeper.git
cd keenkeeper

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── components/       # Feature components (FriendDetails, Timeline, Stats, etc.)
├── pages/            # Route-level page components
├── context/          # Global state via React Context
├── layouts/          # MainLayout & ErrorLayout
├── routes/           # React Router config
└── ui/               # Reusable UI components (FriendCard, TimelineCard)
```

---

## 📄 License

MIT