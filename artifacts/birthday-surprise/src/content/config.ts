export type Memory = {
  id: string;
  date: string;
  title: string;
  caption: string;
  image: string;
  x: number;
  y: number;
};

// Personalization lives here: swap the message, signature, audio path, or any
// photo URL in one place before sharing the link.
export const birthdayConfig = {
  birthdayName: 'Mira',
  birthdayMessage:
    'There are a thousand small moments I would choose again: the way you make a room feel warmer, the laugh you try to hide, the quiet hours that somehow become our favorite stories. You are my favorite place to arrive.\n\nToday I hope the world is gentle with you. I hope it gives you reasons to be surprised, music to dance to in the kitchen, and a year that feels as bright and entirely yours as you deserve.\n\nThank you for letting me love you in all the ordinary, beautiful minutes. I am so lucky that my life gets to have your name in it.',
  signature: 'Always yours, Theo',
  // Replace this with your own uploaded audio file path when personalizing.
  audioPath: '/audio/ambient-birthday.wav',
  memories: [
    {
      id: 'first-light',
      date: '18 APR · 2022',
      title: 'The first light',
      caption: 'The morning we stayed out too late and watched the city turn gold.',
      image:
        'https://images.pexels.com/photos/1402850/pexels-photo-1402850.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 16,
      y: 21,
    },
    {
      id: 'blue-hour',
      date: '02 JUL · 2022',
      title: 'Blue hour',
      caption: 'Two coffees, one borrowed jacket, and absolutely nowhere else to be.',
      image:
        'https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 41,
      y: 10,
    },
    {
      id: 'little-dance',
      date: '27 AUG · 2022',
      title: 'A little dance',
      caption: 'You danced between the tables. I pretended not to be completely undone.',
      image:
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 67,
      y: 23,
    },
    {
      id: 'long-way-home',
      date: '14 OCT · 2022',
      title: 'The long way home',
      caption: 'We took the scenic route and found a sky full of impossible pink.',
      image:
        'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 84,
      y: 43,
    },
    {
      id: 'salt-air',
      date: '09 JAN · 2023',
      title: 'Salt air',
      caption: 'Cold hands, warm sleeves, and a promise to come back in summer.',
      image:
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 60,
      y: 57,
    },
    {
      id: 'sunday-table',
      date: '23 MAR · 2023',
      title: 'Sunday table',
      caption: 'The kind of afternoon that makes time feel like it is on our side.',
      image:
        'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 32,
      y: 51,
    },
    {
      id: 'somewhere-new',
      date: '11 JUN · 2023',
      title: 'Somewhere new',
      caption: 'Every unfamiliar street got better as soon as you took my hand.',
      image:
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 12,
      y: 72,
    },
    {
      id: 'under-the-same-sky',
      date: 'TODAY',
      title: 'Under the same sky',
      caption: 'My favorite chapter is the one we are still writing.',
      image:
        'https://images.pexels.com/photos/1167021/pexels-photo-1167021.jpeg?auto=compress&cs=tinysrgb&w=1400',
      x: 43,
      y: 82,
    },
  ] satisfies Memory[],
};