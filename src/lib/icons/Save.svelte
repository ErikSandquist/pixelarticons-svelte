<script lang="ts">
  interface Props {
    size?: number;
    color?: string;
    class?: string;
  }

  let { size = 24, color = 'currentColor', class: className, ...rest }: Props & Record<string, any> = $props();
</script>

<svg
  width={size}
  height={size}
  style="color: {color}"
  class={className}
  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  {...rest}
>
  <path d="M4 2h14v2H4v16h2v-6h12v6h2V6h2v16H2V2h2zm4 18h8v-4H8v4zM20 6h-2V4h2v2zM6 6h9v4H6V6z" fill="currentColor"/>
</svg>