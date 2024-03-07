export interface IActivity {
  id: number;
  is_active: boolean;
  name: string;
}

export interface IReview {
  artist_id: number;
  user_id: number;
  comment: string;
  grade: number;
}

export interface IArtist {
  id: number;
  user_id: number;
  artist_name: string;
  email: string;
  phone_number: string;
  address: string;
  location: string;
  description: string;
  professional_webpage: string | null;
  photo_url: string;
  promo_video_url: string;
  vk_url: string;
  facebook_url: string;
  instagram_url: string;
  is_premium: boolean;
  activities: IActivity[];
  reviews: IReview[] | null;
}

export interface IArtists {
  artists: IArtist[];
}

export interface ISuggestion {
  id: number;
  place_name: string;
}

export interface ISuggestions {
  suggestions: ISuggestion[];
  onClick: (place_name: string) => void;
}
