# pixelarticons-svelte

Pixel-perfect icons as Svelte 5 components. Based on [pixelarticons](https://github.com/halfmage/pixelarticons).

## View the icons

https://pixelarticons-svelte.vercel.app/

## Installation

```bash
bun add pixelarticons-svelte
```

## Usage

```svelte
<script>
	import { Alert, Home } from 'pixelarticons-svelte';
</script>

<Alert size={24} color="#ff0000" />
<Home size={32} class="hover:scale-110 transition-transform" />
```

## Props

- `size` (number): Icon size in pixels (default: 24)
- `color` (string): Icon color (default: 'currentColor')
- `class` (string): Additional CSS classes

## License

MIT
