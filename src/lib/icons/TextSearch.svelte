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
		d="M20 4H4v2h16V4zm0 4H4v2h16V8zm-8 4H4v2h8v-2zm8 0h-6v6h6v2h2v-2h-2v-6zm-4 4v-2h2v2h-2zm-4 0H4v2h8v-2z"
		fill="currentColor"
	/>
</svg>
