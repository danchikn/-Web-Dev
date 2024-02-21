export interface Product {
    id: number;
    name: string;
    color: string;
    Os: string;
    hasNfc: boolean;
    rom: number;
    processor: string;
    weight: number;
    price: number;
    imageUrl: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Смарт-часы Apple Watch SE 40 мм черный',
      color: 'black',
      Os: 'iOS',
      hasNfc: true,
      rom: 32,
      processor: 'Apple S5',
      weight: 30.49,
      price: 130865,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium'
    },
    {
      id: 2,
      name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum starlight-бежевый',
      color: 'white',
      Os: 'IOS',
      hasNfc: true,
      rom: 32,
      processor: 'Apple S8',
      weight: 38.8,
      price: 185429,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-starlight-bezhevyi-106585021/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h1c/64378501791774.jpg?format=gallery-medium'
    },
    {
      id: 3,
      name: 'Смарт-часы Apple Watch Series 9 GPS M/L 45 мм синий-черный',
      color: 'black',
      Os: 'iOS',
      hasNfc: true,
      rom: 8,
      processor: 'Apple S9',
      weight: 38.7,
      price: 20531,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium'
    },
    {
      id: 4,
      name: 'Смарт-часы Samsung Galaxy Watch 5 Pro 45 мм серый',
      color: 'gray',
      Os: 'Android',
      hasNfc: true,
      rom: 1.5,
      processor: 'Exynos W920 (5nm)',
      weight: 46.5,
      price: 72155,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-5-pro-45-mm-seryi-106174847/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h88/64414071029790.jpg?format=gallery-large'
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
      color: 'black',
      Os: 'iOS',
      hasNfc: true,
      rom: 32,
      processor: 'Apple S8',
      weight: 38.8,
      price: 191193,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h5a/h17/64401042472990.jpg?format=gallery-large'
    },
    {
      id: 6,
      name: 'Смарт-часы Samsung Galaxy Watch 4 Classic SM-R880 42 мм серебристый',
      color: 'white',
      Os: 'Android',
      hasNfc: false,
      rom: 32,
      processor: '',
      weight: 46.5,
      price: 165000,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r880-42-mm-serebristyi-102170910/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha7/h17/64345771081758.jpg?format=gallery-large'
    },
    {
      id: 7,
      name: 'Смарт-часы Samsung Galaxy Watch Active2 Stainless SM-R820 44mm серебристый-черный',
      color: 'black',
      Os: 'Tizen',
      hasNfc: true,
      rom: 0.75,
      processor: '2-х ядерный Exynos 9110, 1.15 ГГц',
      weight: 42.0,
      price: 199990,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-active2-stainless-sm-r820-44mm-serebristyi-chernyi-5100878/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he4/h3a/63783670841374.jpg?format=gallery-large'
    },
    {
      id: 8,
      name: 'Смарт-часы Apple Watch Series 9 GPS M/L 45 мм розовый',
      color: 'pink',
      Os: 'IOS',
      hasNfc: true,
      rom: 32,
      processor: 'Apple S9',
      weight: 38.7,
      price: 205935,
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-rozovyi-113398459/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h30/h30/83874225586206.jpg?format=gallery-large'
    },
    {
      id: 9,
      name: 'Смарт-часы Apple Watch Ultra Series 2 GPS + Cellular Alpine Loop М 49 мм серебристый-фиолетовый',
      color: 'Purple',
      Os: 'IOS',
      hasNfc: true,
      rom: 32,
      processor: 'Apple S9',
      weight: 40,
      price: 415995,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-gps-cellular-alpine-loop-m-49-mm-serebristyi-fioletovyi-113575326/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h4a/84060375089182.png?format=gallery-large'
    },
    {
      id: 10,
      name: 'Смарт-часы Apple Watch SE 2 Gen (2023) GPS M/L 40 мм starlight-бежевый',
      color: 'pink',
      Os: 'Watch OS',
      hasNfc: true,
      rom: 32,
      processor: 'Apple S8',
      weight: 26.4,
      price: 127115,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2023-gps-m-l-40-mm-starlight-bezhevyi-114195462/?c=750000000',
      imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/ha6/ha6/84398530396190.jpg?format=gallery-large'
    }
  ];
  
  
 