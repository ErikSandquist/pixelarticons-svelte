<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		name: string;
		size?: number;
		color?: string;
		class?: string;
	}

	let { name, size = 24, color = 'currentColor', class: className }: Props = $props();

	let IconComponent = $state<any>(null);
	let loading = $state(true);
	let error = $state(false);

	onMount(async () => {
		try {
			// Dynamically import the icon component
			const module = await import(`./icons/${name}.svelte`);
			IconComponent = module.default;
			loading = false;
		} catch (e) {
			console.error(`Failed to load icon: ${name}`, e);
			error = true;
			loading = false;
		}
	});
</script>

{#if loading}
	<div class="icon-placeholder" style="width: {size}px; height: {size}px;"></div>
{:else if error}
	<div class="icon-error" style="width: {size}px; height: {size}px;">?</div>
{:else if IconComponent}
	<IconComponent {size} {color} class={className} />
{/if}

<style>
	.icon-placeholder {
		background: var(--placeholder-bg);
		border-radius: 2px;
		animation: pulse 1.5s ease-in-out infinite;
	}

	.icon-error {
		background: var(--error-bg);
		color: var(--error-color);
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		border-radius: 2px;
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}
</style>
