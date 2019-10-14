export interface Film {
  title?: String;
  director?: String;
  episode_id?: Number;
  opening_crawl?: String;
  producer?: String;
  release_date?: Date;
  characters?: Array<String>;
  planets?: Array<String>;
  starships?: Array<String>;
  vehicles?: Array<String>;
  species?: Array<String>;
  created?: Date;
  edited?: Date;
  url?: string;
}
