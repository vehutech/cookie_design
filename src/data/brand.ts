export interface Brand {
    id: string;
    name: string;
    logo: string;
    url: string;
    description: string;
    info: {
      founded: string;
      headquarters: string;
    };
  }
  
  export const brands: Brand[] = [
    {
      id: 'tesco',
      name: 'Tesco',
      logo: 'https://logo.clearbit.com/tesco.com',
      url: 'https://www.tesco.com',
      description: 'British multinational groceries and general merchandise retailer.',
      info: {
        founded: '1919',
        headquarters: 'Welwyn Garden City, UK'
      }
    },
    {
      id: 'amazon',
      name: 'Amazon',
      logo: 'https://logo.clearbit.com/amazon.com',
      url: 'https://www.amazon.com',
      description: 'Multinational technology company focusing on e-commerce, cloud computing, and digital streaming.',
      info: {
        founded: '1994',
        headquarters: 'Seattle, WA'
      }
    },
    {
      id: 'mcdonalds',
      name: 'McDonald\'s',
      logo: 'https://logo.clearbit.com/mcdonalds.com',
      url: 'https://www.mcdonalds.com',
      description: 'American fast food company known for its hamburgers and french fries.',
      info: {
        founded: '1940',
        headquarters: 'Chicago, IL'
      }
    },
    {
      id: 'the-perfume-shop',
      name: 'The Perfume Shop',
      logo: 'https://logo.clearbit.com/theperfumeshop.com',
      url: 'https://www.theperfumeshop.com',
      description: 'UK\'s largest specialist fragrance retailer.',
      info: {
        founded: '1992',
        headquarters: 'Poole, UK'
      }
    },
    {
      id: 'trainline',
      name: 'Trainline',
      logo: 'https://logo.clearbit.com/trainline.com',
      url: 'https://www.trainline.com',
      description: 'Digital rail and coach ticketing platform operating across Europe.',
      info: {
        founded: '1997',
        headquarters: 'London, UK'
      }
    },
    {
      id: 'slim-chickens',
      name: 'Slim Chickens',
      logo: 'https://logo.clearbit.com/slimchickens.com',
      url: 'https://www.slimchickens.com',
      description: 'American fast casual restaurant chain specializing in chicken tenders and wings.',
      info: {
        founded: '2003',
        headquarters: 'Fayetteville, AR'
      }
    },
    {
      id: 'asda',
      name: 'Asda',
      logo: 'https://logo.clearbit.com/asda.com',
      url: 'https://www.asda.com',
      description: 'British supermarket retailer offering groceries and general merchandise.',
      info: {
        founded: '1949',
        headquarters: 'Leeds, UK'
      }
    },
    {
      id: 'temu',
      name: 'Temu',
      logo: 'https://logo.clearbit.com/temu.com',
      url: 'https://www.temu.com',
      description: 'Online marketplace offering a wide range of products at competitive prices.',
      info: {
        founded: '2022',
        headquarters: 'Boston, MA'
      }
    },
    {
      id: 'freshity',
      name: 'Freshity',
      logo: '../../src/assets/freshity_logo.PNG',
      url: 'https://www.freshity.com',
      description: 'Health food retailer specializing in fresh, organic produce and meals.',
      info: {
        founded: '2018',
        headquarters: 'London, UK'
      }
    },
    {
      id: 'trainpal',
      name: 'Trainpal',
      logo: 'https://logo.clearbit.com/trainpal.com',
      url: 'https://www.trainpal.com',
      description: 'Train ticket booking app offering discounted fares and split-ticketing.',
      info: {
        founded: '2018',
        headquarters: 'Cambridge, UK'
      }
    }
  ];