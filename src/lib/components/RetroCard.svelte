<script lang="ts">
	type Props = {
		as?: 'div' | 'section' | 'article';
		interactive?: boolean;
		eyebrow?: string;
		title?: string;
		body?: string;
		footer?: string;
	};

	let {
		as = 'div',
		interactive = false,
		eyebrow,
		title,
		body,
		footer
	}: Props = $props();

	const base =
		'rounded border border-main/60 bg-surface/90 px-3 py-2 text-main shadow-[4px_4px_0px_rgba(43,42,42,0.8)]';

	const interactiveClasses = $derived(
		interactive
			? 'transition hover:-translate-y-px hover:shadow-[6px_6px_0px_rgba(43,42,42,0.9)]'
			: ''
	);
</script>

<svelte:element this={as} class={`${base} ${interactiveClasses}`}>
	{#if eyebrow}
		<p class="font-display text-secondary text-[11px] tracking-[0.2em] uppercase">
			{eyebrow}
		</p>
	{/if}

	{#if title}
		<h3 class="mt-1 text-sm font-display text-main">
			{title}
		</h3>
	{/if}

	{#if body}
		<p class="mt-1 text-xs text-main/85">
			{body}
		</p>
	{/if}

	{#if footer}
		<div class="mt-2 text-[11px] text-main/70">
			{footer}
		</div>
	{/if}
</svelte:element>

