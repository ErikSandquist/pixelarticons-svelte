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
		d="M12 3H8v2h4v2H2v2h12V3h-2zm10 8V7h-6v2h4v2H2v2h20v-2zM2 17v-2h14v6h-6v-2h4v-2H2z"
		fill="currentColor"
	/>
</svg>
