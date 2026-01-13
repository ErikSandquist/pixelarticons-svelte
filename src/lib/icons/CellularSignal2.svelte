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
	xmlns="http://www.w3.org/2000/svg"
	fill="currentColor"
	viewBox="0 0 24 24"
	{...rest}
>
	<path d="M16 4v16h6V4h-6Zm4 2v12h-2V6h2ZM2 14h6v6H2v-6Zm13-4H9v10h6V10Z" />
</svg>
