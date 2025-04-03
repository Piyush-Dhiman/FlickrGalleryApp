export interface FlickrImage {
  title: string;
  link: string;
  media: {
    m: string;
  };
  date_taken: string;
  description: string;
  published: string;
  author: string;
  author_id: string;
  tags: string;
  isFavourite: boolean;
}
