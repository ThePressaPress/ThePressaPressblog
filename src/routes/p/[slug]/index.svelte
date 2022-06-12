<script lang=ts>
    import SvelteMarkdown, { type Renderers } from 'svelte-markdown';
    import { markedSlugger } from '$lib/extras';
    import { writable } from 'svelte/store';
    import type { Writable } from 'svelte/store';
    import List from "$lib/renderers/List.svelte";
    import Code from '$lib/renderers/Code.svelte';

    const renderers = {
        list: List,
        code: Code
    }

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
                                <a class="hover:text-slate-600 ml-5" href="#{i.id}">{i.text}</a>
                            </li>
                        {/each}
                    </ol>
                </div>
            </div>
        </div>
        <div class="flex flex-grow flex-col h-full w-full">
            <h1 class="text-5xl text-center">{post.title}</h1>
            <h4 class="text-lg text-muted border-b text-center">Created {(new Date(post.creationdate)).toDateString()}</h4>
            <div class="marked my-10 min-w-full w-full h-full pl-5">
                <SvelteMarkdown source={post.body} {renderers} on:parsed={render}></SvelteMarkdown>
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