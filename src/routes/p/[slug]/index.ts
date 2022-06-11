import prisma from "$lib/prisma";

export async function get({ params }) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                handle: params.slug
            }
        })
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