# 🌐 Disaster Route Optimizer

### 🚨 Optimized Routing Algorithms for Disaster Recovery Networks

This project simulates an **optimized routing system** designed to aid **disaster recovery operations**.  
It uses pathfinding algorithms to determine the **most efficient routes** for emergency response and resource delivery when certain roads or nodes are blocked or damaged.

🔗 **Live Demo:** [Disaster Recovery Network Router](https://disaster-recovery-network-router-dr.vercel.app/)

---

## 🧭 Project Overview

In disaster-struck regions, road networks are often disrupted — making it critical to find **safe and efficient routes** for relief teams.  
This web app generates a random map representing affected zones and computes the **optimal recovery route** between two points using **Dijkstra’s algorithm**.

The visualization is displayed on a grid where:
- 🟥 Red block → Start point (e.g., relief base)
- 🟨 Yellow block → End point (e.g., destination)
- ⬛ Dark block → Damaged or blocked routes
- 🟦 Blue cell → Passable route
- 🟩 Green path → Computed optimal recovery route

---

## 🚀 Features

✅ Random map generation simulating damaged road networks  
✅ Route optimization using **Dijkstra’s shortest path algorithm**  
✅ Interactive visualization via **HTML5 Canvas**  
✅ Simple and intuitive UI  
✅ Deployable on Vercel or GitHub Pages  

---

## 🧠 Algorithms Used

- **Dijkstra’s Algorithm**: Finds the shortest path between nodes while avoiding blocked routes.
- **Future Scope**:
  - Add **A\*** or **Ant Colony Optimization** for enhanced route efficiency.
  - Introduce **weighted costs** (e.g., terrain difficulty, road damage).
  - Implement **multi-destination routing** (for multiple relief points).

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structure of the app |
| **CSS3** | Styling and UI design |
| **JavaScript (ES6)** | Algorithm logic and grid visualization |
| **Canvas API** | Real-time rendering of the map grid |
| **Vercel** | Live deployment |

---

## 📂 Folder Structure

disaster-route-optimizer/
│
├── index.html # Main interface
├── style.css # Page styling
├── script.js # Algorithm and visualization logic
└── README.md # Documentation

yaml
Copy code

---

## ⚙️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/disaster-route-optimizer.git
   cd disaster-route-optimizer
Open the app
Simply open the file index.html in your web browser.

Generate and test

Click Generate Map to create a random disaster map.

Click Find Optimal Route to compute and visualize the best route.

🧭 Example Visualization
Before Routing	After Routing

📈 Future Enhancements
Integrate OpenStreetMap API for real-world mapping

Add AI-based optimization (A*, Genetic Algorithms)

Enable multi-agent routing (multiple rescue teams)

Store and compare route analytics

🧑‍💻 Author
Your Name
🌍 Live Project
📧 your.email@example.com

🪪 License
This project is licensed under the MIT License – feel free to use, modify, and distribute it.
