<script lang=ts>
    export let lang
    export let text
    export let raw
    let codeElm: HTMLElement

    import hljs from 'highlight.js';
    const code = hljs.highlight(text, {language: lang || 'plaintext'})
    console.log(code)

    let cssclass = lang? `language-${lang}`: 'language-plaintext'

    function copy() {
        // This code will not be supported on IE
        navigator.clipboard.writeText(text)
    }
</script>
  

<pre class='{cssclass} w-fit flex flex-col group min-w-[30rem]'>
    {#if lang}
    <div class="select-none border-b py-1 mb-1">Code: {code._top.name}</div>
    {/if}
    <code bind:this={codeElm} class="mx-0">{@html code.value}</code>
    <svg on:click={copy} xmlns="http://www.w3.org/2000/svg" class="not-prose text-white transition-transform h-6 w-6 absolute hidden group-hover:block self-end hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
    <div class="text-xs text-gray-400">hightlight.js v{hljs.versionString}</div>
    <!--
        {raw}
    -->
</pre>