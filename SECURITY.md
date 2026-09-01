# Security

Do not report secrets or private user documents in public issues.

For a production deployment, configure `JWT_SECRET`, database credentials, mail credentials, allowed frontend origins, and upload limits through the deployment environment. Never commit `.env` files or real uploaded documents.

The application treats uploaded resumes and marksheets as private resources and requires authenticated ownership checks before access.
