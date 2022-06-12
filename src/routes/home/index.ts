import client from "$lib/sanity"

export async function get() {
    return {
        body: {
            posts: await client.fetch(`*[_type == "post"]`)
        }
    }
}