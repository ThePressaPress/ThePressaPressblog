import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2021-10-21",
    useCdn: false
})

export default client