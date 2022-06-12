import client from "$lib/sanity"
export async function get({ params }) {
    try {
        const post = (await client.fetch(`*[_type == "post" && handle == "${params.slug}"]`))[0]
        return {
            body: {
                post
            }
        }
    } catch {
        return {
            code: 404,
            body: {
                post: undefined
            }
        }
    }
}