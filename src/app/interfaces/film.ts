export interface Film {
  title?: string;
  director?: string;
  episode_id?: number;
  opening_crawl?: string;
  producer?: string;
  release_date?: Date;
  characters?: Array<string>;
  planets?: Array<string>;
  starships?: Array<string>;
  vehicles?: Array<string>;
  species?: Array<string>;
  created?: Date;
  edited?: Date;
  url?: string;
}
