const options = [
  {
    key: `-a, --action [list || get|| add || remove || update]`,
    name: 'Programm operation',
  },
  { key: '-i, --id <value>', name: 'Contact id' },
  { key: '-n, --name <value>', name: 'Contact name' },
  { key: '-e, --email <value>', name: 'Contact email' },
  { key: '-p, --phone <value>', name: 'Contact phone' },
];

module.exports = options;
