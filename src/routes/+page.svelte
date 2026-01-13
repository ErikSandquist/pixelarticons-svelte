<script lang="ts">
	import IconRenderer from '$lib/IconRenderer.svelte';
	import * as icons from '$lib/icons/index.js';
	import { BookOpen, Archive, Search, MoodSad, Gamepad } from '$lib/icons/index.js';

	const allIcons = Object.keys(icons).sort((a, b) => a.localeCompare(b));

	let searchTerm = $state('');
	let iconSize = $state(24);
	let copiedIcon = $state<string | null>(null);

	const filteredIcons = $derived.by(() => {
		if (!searchTerm.trim()) {
			return allIcons;
		}
		const term = searchTerm.toLowerCase();
		return allIcons.filter((icon) => icon.toLowerCase().includes(term));
	});

	function copyIconName(name: string) {
		navigator.clipboard.writeText(name);
		copiedIcon = name;
		setTimeout(() => {
			if (copiedIcon === name) copiedIcon = null;
		}, 1500);
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="pixel-page">
	<div class="scanlines"></div>

	<header class="header">
		<h1 class="title">
			<Gamepad size={48} />
			<span>Pixelarticons</span>
		</h1>
		<p class="subtitle">{allIcons.length} pixel-perfect icons for Svelte 5</p>

		<nav class="nav">
			<a href="https://github.com/halfmage/pixelarticons" target="_blank" class="nav-btn">
				<BookOpen size={24} />
				<span>Original</span>
			</a>
			<a
				href="https://github.com/eriksandquist/pixelarticons-svelte"
				target="_blank"
				class="nav-btn primary"
			>
				<Archive size={24} />
				<span>Package</span>
			</a>
		</nav>
	</header>

	<section class="controls-section">
		<div class="search-box">
			<Search size={24} />
			<input
				type="text"
				bind:value={searchTerm}
				placeholder="Search icons..."
				class="search-input"
			/>
		</div>

		<div class="size-control">
			<label for="size-slider">SIZE</label>
			<input
				id="size-slider"
				type="range"
				min="16"
				max="64"
				step="4"
				bind:value={iconSize}
				class="size-slider"
			/>
			<span class="size-display">{iconSize}px</span>
		</div>

		<div class="results-count">
			{filteredIcons.length}
			{searchTerm ? 'found' : 'icons'}
		</div>
	</section>

	<main class="icons-grid">
		{#each filteredIcons as iconName (iconName)}
			<button
				type="button"
				class="icon-card"
				class:copied={copiedIcon === iconName}
				onclick={() => copyIconName(iconName)}
			>
				<div class="icon-display">
					<IconRenderer name={iconName} size={iconSize} />
				</div>
				<div class="icon-label">{iconName}</div>
				<div class="copy-feedback">
					{copiedIcon === iconName ? 'Copied!' : 'Click to copy'}
				</div>
			</button>
		{/each}
	</main>

	{#if filteredIcons.length === 0}
		<div class="no-results">
			<MoodSad size={72} />
			<h3>No icons found</h3>
			<p>Try a different search term</p>
		</div>
	{/if}
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		background: #12121a;
		min-height: 100vh;
	}

	.pixel-page {
		--accent: #ff8c42;
		--accent-dim: #cc6a2a;
		--bg: #12121a;
		--card: #1a1a24;
		--border: #2a2a3a;
		--text: #e8e8f0;
		--text-dim: #787888;
		--success: #4ade80;

		font-family: 'VT323', monospace;
		color: var(--text);
		min-height: 100vh;
		position: relative;
		padding: 2rem;
		max-width: 1400px;
		margin: 0 auto;
	}

	.scanlines {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: repeating-linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.08) 0px,
			rgba(0, 0, 0, 0.08) 1px,
			transparent 1px,
			transparent 3px
		);
		z-index: 1000;
		opacity: 0.4;
	}

	.header {
		text-align: center;
		padding: 2.5rem 1rem 2rem;
		margin-bottom: 1.5rem;
		background: var(--card);
		border: 3px solid var(--border);
		border-top: 3px solid var(--accent);
	}

	.title {
		font-family: 'Press Start 2P', cursive;
		font-size: clamp(1rem, 3.5vw, 2rem);
		margin: 0 0 0.8rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
		color: var(--text);
		text-shadow: 3px 3px 0 var(--accent-dim);
	}

	.subtitle {
		font-size: 1.5rem;
		color: var(--text-dim);
		margin: 0 0 1.5rem 0;
	}

	.nav {
		display: flex;
		gap: 0.8rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.nav-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.6rem 1.2rem;
		background: var(--bg);
		border: 2px solid var(--border);
		color: var(--text-dim);
		text-decoration: none;
		font-family: 'Press Start 2P', cursive;
		font-size: 0.55rem;
		cursor: pointer;
		transition: all 0.1s ease;
	}

	.nav-btn:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.nav-btn.primary {
		border-color: var(--accent);
		color: var(--accent);
	}

	.nav-btn.primary:hover {
		background: var(--accent);
		color: var(--bg);
	}

	.controls-section {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		align-items: center;
		justify-content: center;
		padding: 1rem 1.5rem;
		background: var(--card);
		border: 3px solid var(--border);
		margin-bottom: 1.5rem;
	}

	.search-box {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		background: var(--bg);
		border: 2px solid var(--border);
		padding: 0.5rem 1rem;
		flex: 1;
		max-width: 350px;
		min-width: 180px;
		color: var(--text-dim);
	}

	.search-box:focus-within {
		border-color: var(--accent);
		color: var(--accent);
	}

	.search-input {
		flex: 1;
		background: transparent;
		border: none;
		color: var(--text);
		font-family: 'VT323', monospace;
		font-size: 1.3rem;
		outline: none;
	}

	.search-input::placeholder {
		color: var(--text-dim);
	}

	.size-control {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	.size-control label {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.5rem;
		color: var(--text-dim);
	}

	.size-slider {
		-webkit-appearance: none;
		appearance: none;
		width: 100px;
		height: 6px;
		background: var(--bg);
		border: 2px solid var(--border);
		cursor: pointer;
	}

	.size-slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		width: 14px;
		height: 18px;
		background: var(--accent);
		border: none;
		cursor: pointer;
	}

	.size-slider::-moz-range-thumb {
		width: 14px;
		height: 18px;
		background: var(--accent);
		border: none;
		cursor: pointer;
	}

	.size-display {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.5rem;
		color: var(--accent);
		min-width: 40px;
	}

	.results-count {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.5rem;
		padding: 0.5rem 0.8rem;
		background: var(--bg);
		border: 2px solid var(--accent);
		color: var(--accent);
	}

	.icons-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 0.8rem;
	}

	.icon-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem 0.6rem 0.6rem;
		background: var(--card);
		border: 2px solid var(--border);
		cursor: pointer;
		transition: all 0.1s ease;
		font-family: inherit;
		color: inherit;
	}

	.icon-card:hover {
		border-color: var(--accent);
		background: #1e1e2a;
	}

	.icon-card.copied {
		border-color: var(--success);
	}

	.icon-display {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 44px;
		margin-bottom: 0.6rem;
		color: var(--text);
	}

	.icon-card:hover .icon-display {
		color: var(--accent);
	}

	.icon-card.copied .icon-display {
		color: var(--success);
	}

	.icon-label {
		font-size: 0.9rem;
		color: var(--text-dim);
		text-align: center;
		word-break: break-word;
		line-height: 1.2;
	}

	.icon-card:hover .icon-label {
		color: var(--text);
	}

	.copy-feedback {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.4rem;
		color: var(--text-dim);
		margin-top: 0.4rem;
		opacity: 0;
		transition: opacity 0.15s;
	}

	.icon-card:hover .copy-feedback {
		opacity: 1;
	}

	.icon-card.copied .copy-feedback {
		opacity: 1;
		color: var(--success);
	}

	.no-results {
		text-align: center;
		padding: 3rem 2rem;
		color: var(--text-dim);
	}

	.no-results h3 {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.8rem;
		color: var(--accent);
		margin: 1rem 0 0.5rem;
	}

	.no-results p {
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.pixel-page {
			padding: 1rem;
		}

		.header {
			padding: 1.5rem 1rem;
		}

		.title {
			flex-direction: column;
			gap: 0.4rem;
		}

		.nav {
			flex-direction: column;
			align-items: center;
		}

		.nav-btn {
			width: 100%;
			max-width: 200px;
			justify-content: center;
		}

		.controls-section {
			flex-direction: column;
			padding: 1rem;
		}

		.search-box {
			width: 100%;
			max-width: none;
		}

		.icons-grid {
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
			gap: 0.6rem;
		}

		.icon-card {
			padding: 0.8rem 0.4rem 0.5rem;
		}

		.icon-label {
			font-size: 0.8rem;
		}
	}
</style>
