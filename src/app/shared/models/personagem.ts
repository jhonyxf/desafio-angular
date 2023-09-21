export interface Personagem {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origem;
  location: Localizacao;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Origem {
  name: string;
  url: string;
}

export interface Localizacao {
  name: string;
  url: string;
}
