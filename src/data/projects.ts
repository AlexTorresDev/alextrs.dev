type Project = {
  image: string
  name: string
  description: {
    es: string
    en: string
  }
  status: 'development' | 'paused' | 'cancelled'
  repo: string
  tags: string[]
  languages: string[]
}

const projects: Project[] = [
  {
    image: '/images/projects/rick-morty-flutter.webp',
    name: 'Rick And Morty Flutter App',
    description: {
      'es': 'Aplicación creada en Flutter usando Clean Architecture, Riverpod y haciendo consumo de la API de Rick And Morty.',
      'en': 'Flutter application created using Clean Architecture, Riverpod and consuming the Rick And Morty API.'
    },
      status: 'paused',
    repo: 'https://github.com/AlexTorresDev/rick-and-morty-app',
    tags: ['Clean Code', 'Flutter', 'Android'],
    languages: ['Dart']
  },
  {
    image: '/images/projects/pokedex-flutter.webp',
    name: 'Pokedex App',
    description: {
      'es': 'Aplicación creada en Flutter usando Clean Architecture, cubit y haciendo consumo de la PokeApi.',
      'en': 'Flutter application created using Clean Architecture, cubit and consuming the PokeApi.'
    },
      status: 'paused',
    repo: 'https://github.com/AlexTorresDev/flutter_pokemon_clean_architecture',
    tags: ['Clean Code', 'Flutter', 'Android'],
    languages: ['Dart']
  },
  {
    image: '/images/projects/cet.webp',
    name: 'Custom Electron Titlebar',
    description: {
      'es': 'Librería para personalizar la barra de titulo de una aplicación electron al estilo VS Code, que es 100% personalizable.',
      'en': 'Library for customizing the title bar of an electron application in the style of VS Code, which is 100% customizable.'
    },
      status: 'development',
    repo: 'https://github.com/AlexTorresDev/custom-electron-titlebar',
    tags: ['Electron', 'NodeJS'],
    languages: ['TypeScript']
  },
  {
    image: '/images/projects/pma-material.webp',
    name: 'PMA Material',
    description: {
      'es': 'Tema para PHPMyAdmin basado en Material Design.',
      'en': 'Theme for PHPMyAdmin based on Material Design.'
    },
      status: 'cancelled',
    repo: 'https://github.com/AlexTorresDev/PMA-Material',
    tags: ['PHPMyAdmin', 'Material Design'],
    languages: ['PHP']
  }
]

export default projects
