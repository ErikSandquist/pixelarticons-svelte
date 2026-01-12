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
  <path d="M2 3h20v18H2V3zm18 16V7H4v12h16zm-4-9h-2v2h-2v2h-2v-2H8v2h2v2h2v-2h2v-2h2v-2z" fill="currentColor"/>
</svg>