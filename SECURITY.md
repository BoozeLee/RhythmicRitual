# Security Policy

## Reporting Vulnerabilities

Please report security issues privately.

Security contact: https://github.com/BoozeLee/RhythmicRitual/security/advisories

Do not include secrets, tokens, private keys, or personal data in public GitHub
Issues.

## Supported Versions

Commercial and sponsor-supported versions will be listed here once a release
policy exists.

## Secret Handling

- Never commit Stripe, Postman, GitHub, cloud, or database credentials.
- Use Postman secret environments or an approved secret manager.
- Use `beehive-stripe` for local Stripe checks.
