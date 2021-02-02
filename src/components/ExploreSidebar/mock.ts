export default [
  {
    title: 'Preço',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Under $50',
        name: 'under-50'
      },
      {
        label: 'Under $100',
        name: 'under-100'
      },
      {
        label: 'Under $150',
        name: 'under-150'
      },
      {
        label: 'Under $200',
        name: 'under-200'
      },
      {
        label: 'Grátis',
        name: 'free'
      },
      {
        label: 'Com Desconto',
        name: 'discounted'
      }
    ]
  },
  {
    title: 'Ordenar por',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        label: 'Do maior para o menor',
        name: 'high-to-low'
      },
      {
        label: 'Do menor para o maior',
        name: 'low-to-high'
      }
    ]
  },
  {
    title: 'Sistema',
    name: 'system',
    type: 'checkbox',
    fields: [
      {
        label: 'Windows',
        name: 'windows'
      },
      {
        label: 'Linux',
        name: 'linux'
      },
      {
        label: 'MacOS',
        name: 'macos'
      }
    ]
  },
  {
    title: 'Gênero',
    name: 'genre',
    type: 'checkbox',
    fields: [
      {
        label: 'Ação',
        name: 'action'
      },
      {
        label: 'Aventura',
        name: 'adventure'
      },
      {
        label: 'FPS',
        name: 'fps'
      },
      {
        label: 'MMORPG',
        name: 'mmorpg'
      },
      {
        label: 'RPG',
        name: 'rpg'
      },
      {
        label: 'Indie',
        name: 'indie'
      },
      {
        label: 'Shooters',
        name: 'shooters'
      },
      {
        label: 'Simulação',
        name: 'simulation'
      }
    ]
  }
]
