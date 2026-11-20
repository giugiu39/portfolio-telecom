<h1 align="center">Gianluca Perrotta — Portfolio</h1>

<p align="center">
  <strong>Telecommunications Engineering · IoT · Edge/Cloud · Networking · RF · AI</strong>
</p>

<p align="center">
  <a href="https://giugiu39.github.io/portfolio-telecom"><img alt="Live site" src="https://img.shields.io/badge/Live-giugiu39.github.io%2Fportfolio--telecom-2ea44f?style=for-the-badge" /></a>
</p>

<p align="center">
  <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" />
  <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" />
  <img alt="GitHub Pages" src="https://img.shields.io/badge/GitHub%20Pages-222?logo=githubpages&logoColor=white" />
  <img alt="No build step" src="https://img.shields.io/badge/build%20step-none-blue" />
</p>

---

## 👋 About

Personal portfolio of a **Telecommunications Engineering** student at **Università della Calabria (UNICAL)**, with a background in Computer Engineering (B.Sc., 107/110).

It is a static site built with vanilla HTML, CSS and JavaScript — no framework, no build step — deployed on GitHub Pages. It showcases university projects across IoT, edge/cloud computing, networking, RF engineering and AI, plus a published research paper.

---

## 🚀 Projects

| Project | Area | Year | Status |
|---|---|---|---|
| [**Group Emotion Recognition — Smart Park**](project-ger.html) | IoT · Edge/Cloud · VLM | Apr – Jul 2026 | University project |
| [**Networking Performance Analysis of an Edge-Based People Tracking IoT System**](project-people-tracking.html) | Edge AI · BLE · MQTT/TLS · CoAP | Jul – Sep 2026 | University project |
| [**5.8 GHz Microstrip Patch Antenna Design & Optimization**](project-patch-antenna.html) | RF · Ansoft Designer · CST Studio Suite | May – Jun 2026 | University project |
| [**IoT Environmental Monitor with MQTT & Node-RED**](project-iot-monitor.html) | ESP32 · MQTT · 4G/5G NSA | Sep – Dec 2025 | Bachelor's thesis |

---

## 📄 Published Paper

**An Edge–Cloud Digital Twin Platform for Intelligent Smart Park Services** — proceedings of the *2026 IEEE Smart World Congress (SWC)*, also presented as an oral talk and poster.  
→ [Read on IEEE Xplore](https://ieeexplore.ieee.org/document/11764067)

---

## ✨ Highlights

- **Group Emotion Recognition** — Raspberry Pi 5 edge nodes, FastAPI backend on AWS EC2 g4dn.xlarge (Tesla T4), fine-tuned Moondream2 VLM (82.2% accuracy on FER+), Silvan AI agent (llama3.2 via Ollama), Flutter app, Tailscale VPN, AWS Cognito, MQTT digital twin integration.
- **People Tracking Networking** — YOLO + ByteTrack on a Raspberry Pi 5, with events sent over BLE → ESP32 → MQTT/TLS (HiveMQ Cloud) and over CoAP/UDP; latency, PDR, MQTT QoS 0/1/2, AES-GCM overhead and 5–50 EPS stress tests. [Source code](https://github.com/giugiu39/IoT-people-tracking-networking)
- **Patch Antenna** — 5.8 GHz patch on Arlon DiClad 870: S11 ≤ −24 dB in Ansoft Designer (2D), S11 ≤ −20 dB in CST 3D full-wave after parameter-sweep tuning, 1.50% bandwidth.
- **IoT Environmental Monitor** — ESP32 + DHT22, GPS and anemometer, MQTT, Node-RED dashboard, Wireshark analysis over 4G/5G NSA (best RTT 58.7 ms on 4G 20 MHz).

---

## 🧰 Tech Stack

| Area | Technologies |
|---|---|
| **Languages** | Python · C/C++ · JavaScript · MATLAB · SQL |
| **Networking** | TCP/IP · MQTT/TLS · CoAP/UDP · BLE · Wi-Fi · 4G/5G NSA · Wireshark/TShark · chrony/SNTP |
| **IoT / Embedded** | Raspberry Pi 5 · ESP32 · Arduino Nano ESP32 · OpenCV · AES-GCM |
| **RF & Antennas** | Microstrip patch design · impedance matching · Ansoft Designer · CST Studio Suite |
| **Cloud & Backend** | AWS EC2 · S3 · Cognito · Lambda · FastAPI · MySQL · Tailscale |
| **AI / ML** | YOLO · ByteTrack · Vision-Language Models · QLoRA/PEFT · Hugging Face · LLMs / Ollama · LangChain |
| **Spoken languages** | Italian (native) · English (B2, Cambridge English Certificate) |
| **Tools** | Git · Linux · Docker · Node-RED · Flutter · EdgeCloudSim |

---

## 🗂️ Structure

```text
portfolio-telecom/
├── index.html                    # Single-page portfolio
├── project-ger.html              # Group Emotion Recognition
├── project-people-tracking.html  # Edge-based people tracking networking
├── project-patch-antenna.html    # 5.8 GHz microstrip patch antenna
├── project-iot-monitor.html      # IoT Environmental Monitor
├── style.css                     # Styles (dark theme, responsive)
├── script.js                     # Navbar, mobile menu, reveal, project filters
├── assets/                       # Project images (iot-monitor, patch-antenna)
└── public/                       # Favicons and manifest
```

---

## 💻 Run Locally

No dependencies — open `index.html` in a browser, or serve it with any static server:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

---

## 📬 Contact

| | |
|---|---|
| ✉️ Email | [prrglc03m04c588j@studenti.unical.it](mailto:prrglc03m04c588j@studenti.unical.it) |
| 📞 Phone | [+39 347 747 0034](tel:+393477470034) |
| 💼 LinkedIn | [gianluca-perrotta-1917163a2](https://www.linkedin.com/in/gianluca-perrotta-1917163a2/) |

---

<p align="center">
  <sub>© 2026 Gianluca Perrotta — Telecommunications Engineering Student, UNICAL</sub>
</p>
