# Tenant Module

Handles tenant creation and retrieval.

When creating a tenant through the Store API, the `subdomain` field is optional. If omitted, the service automatically generates a unique subdomain derived from the owner's identifier (for example, the email prefix) and appends a counter if needed to avoid collisions.

