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
  <path d="M17 3H7v2H5v2H3v10h2v2h2v2h10v-2h2v-2h2V7h-2V5h-2V3zm0 2v2h2v10h-2v2H7v-2H5V7h2V5h10z" fill="currentColor"/>
</svg>