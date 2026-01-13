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
		d="M2 8h2v2h2v2h2v2h2v-2h2v-2h2v2h2v2h2v2h-4v2h8v-8h-2v4h-2v-2h-2v-2h-2V8h-2v2h-2v2H8v-2H6V8H4V6H2v2z"
		fill="currentColor"
	/>
</svg>
