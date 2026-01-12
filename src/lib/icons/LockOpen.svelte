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
  <path d="M15 2H9v2H7v2h2V4h6v4H4v14h16V8h-3V4h-2V2zm0 8h3v10H6V10h9zm-2 3h-2v4h2v-4z" fill="currentColor"/>
</svg>