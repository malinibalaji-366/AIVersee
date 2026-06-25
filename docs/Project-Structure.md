# AIVerse Project Structure

Version: 1.0

Author: Mali

---

# Purpose

This document defines the folder structure of the AIVerse project.

Every contributor should follow this structure.

---

# Root Directory

AIVerse/

├── frontend/

├── backend/

├── mobile/

├── database/

├── ai/

├── docs/

├── prompts/

├── scripts/

├── tests/

├── assets/

├── docker/

├── .github/

├── README.md

├── LICENSE

├── .gitignore

---

# Frontend

frontend/

├── app/

├── components/

├── layouts/

├── hooks/

├── services/

├── lib/

├── utils/

├── styles/

├── types/

├── public/

---

# Backend

backend/

├── app/

│

├── api/

├── auth/

├── models/

├── schemas/

├── services/

├── repositories/

├── middleware/

├── database/

├── ai/

├── utils/

├── config/

└── main.py

---

# AI

ai/

├── prompts/

├── tutor/

├── quiz/

├── reviewer/

├── recommendation/

├── memory/

├── rag/

├── embeddings/

└── agents/

---

# Database

database/

├── schema.sql

├── migrations/

├── seed/

└── backups/

---

# Assets

assets/

├── images/

├── videos/

├── icons/

├── certificates/

└── logos/

---

# Documentation

docs/

Contains all project documentation.

---

# Prompts

prompts/

├── bolt/

├── chatgpt/

├── dyad/

├── cursor/

└── reusable/

---

# Testing

tests/

├── frontend/

├── backend/

├── integration/

├── e2e/

└── performance/

---

# Mobile

mobile/

Flutter application.

---

# Scripts

scripts/

Automation scripts for setup, deployment, backups, and maintenance.

---

# GitHub

.github/

CI/CD workflows

Issue templates

Pull request templates

CODEOWNERS

---

# Principles

* One responsibility per folder.
* Keep components reusable.
* Separate business logic from UI.
* Keep documentation updated.
* Avoid duplicate code.
* Follow consistent naming conventions.
