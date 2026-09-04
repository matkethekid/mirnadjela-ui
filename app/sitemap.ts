import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pogrebnomirandjela.rs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/onama',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/kontakt',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/prevoz-pokojnika',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/prevoz-pokojnika/dorcol',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/prevoz-pokojnika/vracar',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/prevoz-pokojnika/zemun',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/prevoz-pokojnika/novi-beograd',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/prevoz-pokojnika/cukarica',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/organizacija-sahrane',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://pogrebnomirandjela.rs/pogrebne-usluge/kremacija',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}