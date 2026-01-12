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
  <path d="M4 2H3v20h18V2H4zm15 2v16H5V4h14zm-6 2h-2v2h2V6zm-5 4h8v6h-2v-4h-4v4H8v-6zm8 6H8v2h8v-2z" fill="currentColor"/>
</svg>