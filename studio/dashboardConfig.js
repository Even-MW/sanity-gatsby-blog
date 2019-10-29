export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db7e7e3f651c487a7e920d6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6jx2r8ts',
                  apiId: '3e933147-79b5-4005-966f-5f47b91a35db'
                },
                {
                  buildHookId: '5db7e7e3ea984a5a9921d1cd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yt89q8i6',
                  apiId: '6dc4821f-b707-4c66-8d70-9454ba7f8040'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Even-MW/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yt89q8i6.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
