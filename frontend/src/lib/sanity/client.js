import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'zbe425my',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})