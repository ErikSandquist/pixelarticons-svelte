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
		d="M2 4h20v16H2V4zm2 2v4h16V6H4zm16 6H10v2h10v-2zm0 4h-4v2h4v-2zm-6 2v-2H4v2h10zM4 14h4v-2H4v2z"
		fill="currentColor"
	/>
</svg>
