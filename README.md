# RefNet Next

A portfolio-grade re-engineering of the RefNet referral platform, based on and substantially re-engineered from the existing `y24has/RefNet` academic/project codebase.

## What
RefNet connects job seekers with employees who can provide internal referrals. The portfolio version separates the React frontend from a Spring Boot API and strengthens validation, authorization, file ownership, configuration, testing, and deployment practices.

## Architecture
- `frontend/` — React + TypeScript + Vite + Tailwind-style CSS
- `backend/` — Java 17 + Spring Boot + Spring Security + JPA
- PostgreSQL for persistence
- JWT-based stateless authentication

## Engineering upgrades
- DTO-oriented API boundaries
- centralized error handling
- role-aware access control
- explicit ownership checks for protected resources
- environment-driven configuration
- safer document upload policy
- paginated list endpoints in the API design
- OpenAPI-ready backend structure
- GitHub Pages CI/CD for the frontend

## Attribution
This project is based on and substantially re-engineered from an existing academic/project codebase: https://github.com/y24has/RefNet. The original repository is not represented as having been authored by Mokshith-GPT.

## Local setup
See `frontend/README.md` and `backend/README.md`.

## Demo
GitHub Pages deployment is configured by `.github/workflows/pages.yml`.

## Security
Never commit `.env`, database passwords, JWT secrets, uploaded documents, or production credentials. See `SECURITY.md`.
