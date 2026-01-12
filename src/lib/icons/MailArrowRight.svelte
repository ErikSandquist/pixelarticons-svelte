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
  <path d="M20 4H2v16h10v-2H4V6h16v6h2V4h-2zM6 8h2v2H6V8zm4 4H8v-2h2v2zm4 0v2h-4v-2h4zm2-2v2h-2v-2h2zm0 0V8h2v2h-2zm8 8h-2v-2h-2v-2h-2v2h2v2h-6v2h6v2h-2v2h2v-2h2v-2h2v-2z" fill="currentColor"/>
</svg>