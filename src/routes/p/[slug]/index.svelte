<script lang=ts>
    import SvelteMarkdown from 'svelte-markdown';
    import { markedSlugger } from '$lib/extras';
    import { Writable, writable } from 'svelte/store';
    export let post;

    type Heading = {
        id: string,
        text: string
    }

    const toc: Writable<Heading[]> = writable([])

    function render(e: CustomEvent<{ tokens: Array<any> & { links: any } }>) {
        let headings = e.detail.tokens.filter((t) => {
            return t.type === 'heading'
        })
        for(let head of headings) {
            toc.update((e) => {
                e.push({
                    text: head.text,
                    id: markedSlugger.slug(head.text)
                })
                return e
            }) 
        }
    }

    toc.subscribe(console.log)
</script>

{#if post}
<div class="h-full w-full flex">
    <div class="flex flex-grow h-full w-full divide-x flex-row">
        <div class="flex flex-col divide-y h-full">
            <span>Table of Contents</span>
            <div class="max-h-full">
                <div class="overflow-y-scroll no-scrollbar max-h-max">
                    <ol>
                        {#each $toc as i}
                            <li>
                                <a class="hover:from-slate-600 ml-5" href="#{i.id}">{i.text}</a>
                            </li>
                        {/each}
                    </ol>
                </div>
            </div>
        </div>
        <div class="flex flex-grow flex-col h-full w-full divide-y">
            <h1 class="text-5xl text-center">{post.title}</h1>
            <div class="marked min-w-full w-full h-full">
                <SvelteMarkdown source={post.markdown} on:parsed={render}></SvelteMarkdown>
            </div>
        </div>
    </div>

</div>

{:else}
<div class="h-full w-full flex">
    <div class="m-auto flex flex-col">
        <span>
            That post doesnt exist.
        </span>
        <a href="/" class="group w-full text-center">
            <span class="inline">Home</span>
            <span class="inline transition-transform absolute translate-x-1 group-hover:translate-x-3">&rarr;</span>
        </a>
    </div>
</div>
{/if}