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
  <path d="M1 3h16v2H3v2h14v4H3v4h14v2H1V3zm18 0h-2v14h2V3zM5 19h16v2H5v-2zM23 7h-2v14h2V7z" fill="currentColor"/>
</svg>