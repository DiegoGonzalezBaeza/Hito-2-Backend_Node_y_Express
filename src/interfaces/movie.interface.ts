export interface Movie {
    id: number;
    title: string;
    release_year: number; // Coincide exactamente con la columna SQL
    director?: string;
    duration_minutes?: number;
    synopsis?: string;
    poster_url?: string;
  }