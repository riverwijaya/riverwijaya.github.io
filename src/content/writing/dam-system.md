---
title: "Building an internal DAM system with no coding experience"
summary: "How vibe-coding, a lot of Googling, and genuine stubbornness got me from zero to a working self-hosted Digital Asset Management system."
image: "/assets/resourcespace-logo.png"
date: "2026-03-20"
tags: ["Tech", "Learning", "Infrastructure"]
readtime: "3 min"
draft: false
---

I thought that taking on this project might have been a bad idea. My boss, the founder, put me on a project to help finalize marketing assets more easily within mGanik. As a largely e-commerce-driven company, these digital marketing assets are what drive the business. They influence customer purchases through a strong focus on impressions while optimizing return on ad spend (ROAS).

As part of this project to revamp how marketing assets were made, I was tasked with dealing with a key problem.

The company had over 42TB of raw digital assets consolidated within an internal server. To create certain videos, or re-use old assets, the marketing team had to spend hours finding the exact file. The file-naming conventions were not only inconsistent, but also prone to human error. In practice, those conventions were often only understood by the people who originally shot the video assets, which made it a huge hassle when that exact person was unavailable or had already left the company years earlier.

So what was the solution? Simple: a Digital Asset Management (DAM) system.

Easy enough, right?

All I had to do was gather the team, follow the project management process already in place within the company, and execute.

I wish it had been that easy.

Following up on approvals just to move forward with the idea took ages. Technology team members were also scattered across different projects. I figured that if nothing could move forward at the beginning, I had better take matters into my own hands.

So I learned everything I could through AI, Google searches, documentation, and how-to guides.

I learned how to host a server, obtain secure HTTPS and wildcard certificates, coordinate with the ISP to port-forward access so the system could be reached online, use SSH to manage a container, manage permissions through Linux, set up the SQL back end and logins, understand how volumes within a container connect, and connect a volume to an external server through NFS4.

It was honestly the most intellectually demanding and abstract piece of work I had taken on, but that is also why I am probably proudest of it.

Especially when I showed the completed, working project to my peers and my boss—the gratitude and amazement on their faces is something I will never forget.
