export default {
    name: 'categories',
    type: 'document', //alltids en innholdstype som synes i sanity 
    title: 'Kategorier',
    fields: [
        {
            name: 'category_title',
            type: 'string',
            title: 'Kategori navn'
        },
        {
            name: 'category_slug',
            type: 'slug',
            title: 'URL-title',
            options: {
                source: 'category_title',
                slugify: input => input
                                        .toLowerCase()
                                        .replace((/\s+/g, /[^\w-]+/g), '-')
                                        .slice(0,150)
            }
        },
        {
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }
    ]
}