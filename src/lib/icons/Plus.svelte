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
	<path d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z" fill="currentColor" />
</svg>
