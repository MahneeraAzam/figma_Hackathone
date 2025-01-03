import { type SchemaTypeDefinition } from 'sanity'
import landingPage from './landingPage'
import hero from './landingPage-Sections/hero'
import featuredProducts from './landingPage-Sections/featuredProducts'
import uniqueFeatures from './landingPage-Sections/uniqueFeatures'
import productlisting from './landingPage-Sections/productlisting'
import trendingProducts from './landingPage-Sections/trendingProducts'
import topCategories from './landingPage-Sections/topCategories'
import latestBlog from './landingPage-Sections/latestBlog'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingPage, hero, featuredProducts, uniqueFeatures, productlisting, trendingProducts, topCategories, latestBlog],
}
