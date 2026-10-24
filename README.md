# Turnabend TV Frutigen 2028

Website for the Turnabend 2028 of TV Frutigen, built with [Hugo](https://gohugo.io/) and the [Congo](https://github.com/jpanther/congo) theme.
Live at [turnabend-tv-frutigen-2028.ch](https://turnabend-tv-frutigen-2028.ch/).

## Prerequisites

- [Hugo **extended**](https://gohugo.io/installation/) `0.163.3` or newer
- [Go](https://go.dev/dl/) `1.26` or newer (the theme is pulled in as a Hugo module)
- [Git](https://git-scm.com/)

## Development

Start the local dev server with live reload:

```shell
hugo server
```

Then open <http://localhost:1313/>.
Add `-D` to also render draft content.

The theme module is downloaded automatically on first run.

## Contributing

UI and styling changes must follow the design system in [`specs/design-system.md`](specs/design-system.md).
Pushes to `main` are built and deployed to GitHub Pages automatically.
