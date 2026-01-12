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
  <path d="M20 2H2v20h2V4h16v10h2V2h-2zM10 16H6v2H4v2h2v-2h4v-2zm6-4h2v4h4v2h-2v2h-2v2h-2v-4h-4v-2h2v-2h2v-2z" fill="currentColor"/>
</svg>