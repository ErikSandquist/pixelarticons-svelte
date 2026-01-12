import fs from 'fs';
import path from 'path';

const ICONS_DIR = './src/lib/icons';

function updateComponent(content) {
    // Replace $$restProps with proper Svelte 5 props destructuring
    const scriptBlock = `<script lang="ts">
  interface Props {
    size?: number;
    color?: string;
    class?: string;
  }

  let { size = 24, color = 'currentColor', class: className, ...rest }: Props & Record<string, any> = $props();
</script>`;

    // Extract SVG content
    const svgMatch = content.match(/<svg([^>]+)>(.*)<\/svg>/s);
    if (!svgMatch) return content;

    const svgAttrs = svgMatch[1];
    const svgContent = svgMatch[2];

    // Clean up SVG attributes (remove conflicting ones)
    const cleanAttrs = svgAttrs
        .replace(/\s*\{\.\.\.\$\$restProps\}/g, '')
        .replace(/<slot \/>/g, '')
        .trim();

    return `${scriptBlock}

<svg
  width={size}
  height={size}
  style="color: {color}"
  class={className}
  ${cleanAttrs}
  {...rest}
>
  ${svgContent}
</svg>`;
}

async function updateIcons() {
    const files = fs.readdirSync(ICONS_DIR).filter(file => file.endsWith('.svelte'));

    for (const file of files) {
        // Skip Home.svelte as we already updated it
        if (file === 'Home.svelte') continue;

        const filePath = path.join(ICONS_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        const updatedContent = updateComponent(content);
        fs.writeFileSync(filePath, updatedContent);

        console.log(`Updated: ${file}`);
    }

    console.log('All icons updated successfully!');
}

updateIcons().catch(console.error);
