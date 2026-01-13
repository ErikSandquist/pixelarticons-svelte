<script lang="ts">
	interface Props {
		size?: number;
		color?: string;
		class?: string;
	}

	let {
		size = 24,
		color = 'currentColor',
		class: className,
		...rest
	}: Props & Record<string, any> = $props();
</script>

<svg
	width={size}
	height={size}
	style="color: {color}"
	class={className}
	shape-rendering="crispEdges"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	{...rest}
>
	<path
		d="M20 6h-4v2h2v2h-2v2h-2v2h-2v2h-2v-2H8v-2H6v-2H4V8H2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v2h2V6h-2z"
		fill="currentColor"
	/>
</svg>
