export interface ayakousers {
  userid: string;
  username?: string;
  avatar: string;
  socials?: string[];
  tpye?: string[];
  lastfetch: string;
}

export interface artworks {
  userid: string;
  created: string;
  url: string;
  type: string;
  user: User;
}

export interface contributers {
  userid: string;
  roles: string[];
}
