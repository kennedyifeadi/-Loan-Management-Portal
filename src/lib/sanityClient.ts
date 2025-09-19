import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'd9befvpb',  
  dataset: 'production',          
  apiVersion: '2023-01-01',       
  useCdn: true,                   
})
