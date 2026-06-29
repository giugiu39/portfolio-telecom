# Gianluca Perrotta — Portfolio

> Personal portfolio of a Telecommunications Engineering student at **Università della Calabria (UNICAL)**.  
> Live at → **[https://giugiu39.github.io/portfolio-telecom](https://giugiu39.github.io/portfolio-telecom)**

---

## About

Static portfolio site built with vanilla HTML, CSS and JavaScript — no framework, no build step, deployed on GitHub Pages.  
It showcases university and academic projects in IoT, Cloud, Edge Computing, AI, and RF engineering.

---

## Projects

| Project | Area | Status |
|---|---|---|
| [Group Emotion Recognition — Smart Park](project-ger.html) | IoT · Edge/Cloud · VLM · AI | Live |
| [IoT Environmental Monitor](project-iot-monitor.html) | ESP32 · MQTT · Node-RED · Networking | Bachelor's thesis |
| Microstrip Patch Antenna Design | RF · Antenna Design · Ansoft Designer · CST Studio Suite | Results available |

---

## Tech Stack

**Languages** — Python · C/C++ · JavaScript · MATLAB  
**Networking** — TCP/IP · routing · signal theory · wireless communications  
**IoT / Embedded** — Raspberry Pi · ESP32 · Arduino · OpenCV  
**Backend** — FastAPI · SQLAlchemy · MySQL · Ollama  
**Cloud** — AWS EC2 · S3 · Cognito · Tailscale VPN  
**AI / ML** — Vision-Language Models · Moondream2 · PEFT / QLoRA · Hugging Face Transformers  
**Tools** — Git · Linux · Wireshark · Flutter · EdgeCloudSim

---

## Highlights

- **Group Emotion Recognition** — Full IoT/Cloud system: Raspberry Pi 5 edge node, FastAPI backend on AWS EC2 g4dn.xlarge (Tesla T4), fine-tuned Moondream2 VLM (82.2% accuracy on FER+), Silvan AI agent (llama3.2 via Ollama), Flutter mobile app, Tailscale VPN, AWS Cognito, MQTT digital twin integration
- **IoT Environmental Monitor** — Bachelor's thesis project: ESP32 sensors, MQTT broker, Node-RED dashboard, cloud persistence
- **Microstrip Patch Antenna** — Rectangular patch antenna at 5.8 GHz designed and simulated in Ansoft Designer (2D, infinite ground plane) and CST Studio Suite (3D full-wave, finite ground plane), with parameter sweep optimization

---

## Structure

```
portfolio/
├── index.html                  # Main single-page portfolio
├── project-ger.html            # Group Emotion Recognition project detail
├── project-iot-monitor.html    # IoT Environmental Monitor project detail
├── style.css                   # All styles (dark theme, responsive)
├── script.js                   # Navbar scroll + mobile menu + scroll-reveal
├── assets/                     # Project assets and images
└── public/                     # Favicons and manifest
```

---

## Running Locally

No dependencies — just open `index.html` in a browser, or serve with any static server:

```bash
python -m http.server 8080
# → http://localhost:8080
```

---

## Contact

| | |
|---|---|
| Email | [prrglc03m04c588j@studenti.unical.it](mailto:prrglc03m04c588j@studenti.unical.it) |
| Phone | [+39 347 747 0034](tel:+393477470034) |
| LinkedIn | [gianluca-perrotta-1917163a2](https://www.linkedin.com/in/gianluca-perrotta-1917163a2/) |

---

<p align="center">
  <sub>© 2026 Gianluca Perrotta — Telecommunications Engineering Student, UNICAL</sub>
</p>
