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
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }
    ]
}