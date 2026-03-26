type Project = {
  image: string
  name: string
  description: string
  status: string
  repo: string
  tags: string[]
  languages: string[]
}

const projects: Project[] = [
  {
    image: '/images/projects/rick-morty-flutter.webp',
    name: 'Rick And Morty Flutter App',
    description: 'Aplicación creada en Flutter usando Clean Architecture, Riverpod y haciendo consumo de la API de Rick And Morty.',
    status: 'En pausa',
    repo: 'https://github.com/AlexTorresDev/rick-and-morty-app',
    tags: ['Clean Code', 'Flutter', 'Android'],
    languages: ['Dart']
  },
  {
    image: '/images/projects/pokedex-flutter.webp',
    name: 'Pokedex App',
    description: 'Aplicación creada en Flutter usando Clean Architecture, cubit y haciendo consumo de la PokeApi.',
    status: 'En pausa',
    repo: 'https://github.com/AlexTorresDev/flutter_pokemon_clean_architecture',
    tags: ['Clean Code', 'Flutter', 'Android'],
    languages: ['Dart']
  },
  {
    image: '/images/projects/cet.webp',
    name: 'Custom Electron Titlebar',
    description: 'Librería para personalizar la barra de titulo de una aplicación electron al estilo VS Code, que es 100% personalizable.',
    status: 'En desarrollo',
    repo: 'https://github.com/AlexTorresDev/custom-electron-titlebar',
    tags: ['Electron', 'NodeJS'],
    languages: ['TypeScript']
  },
  {
    image: '/images/projects/pma-material.webp',
    name: 'PMA Material',
    description: 'Tema para PHPMyAdmin basado en Material Design.',
    status: 'Cancelado',
    repo: 'https://github.com/AlexTorresDev/PMA-Material',
    tags: ['PHPMyAdmin', 'Material Design'],
    languages: ['PHP']
  }
]

export default projects
