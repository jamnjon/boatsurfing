# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Lakes

- `GET /api/lakes`
  - Lakes index/search
- `GET /api/lakes/:id`

### Hosts

- `GET /api/lakes/:id/hosts`
- `POST /api/lakes/:id/hosts`
- `GET /api/lakes/:id/hosts/:id`
- `PATCH /api/lakes/:id/hosts/:id`
- `DELETE /api/lakes/:id/hosts/:id`

### Travellers

- `GET /api/lakes/:id/travellers`
- `POST /api/lakes/:id/travellers`
- `GET /api/lakes/:id/travellers/:id`
- `PATCH /api/lakes/:id/travellers/:id`
- `DELETE /api/lakes/:id/travellers/:id`
