import data from '../data'

const createHouses = async () => {
  await data.House.create({
    house_name: 'Gryffindor',
    house_ghost: 'Nearly Headless Nick',
    house_founder: 'Godric Gryffindor',
    house_color: 'Red',
    house_mascot: 'Lion',
  })
  await data.House.create({
    house_name: 'Slytherin',
    house_ghost: 'Bloody Baron',
    house_founder: 'Salazar Slytherin',
    house_color: 'Green',
    house_mascot: 'Serpent',
  })
  await data.House.create({
    house_name: 'Ravenclaw',
    house_ghost: 'Grey Lady',
    house_founder: 'Rowena Ravenclaw',
    house_color: 'Blue',
    house_mascot: 'Eagle',
  })
  await data.House.create({
    house_name: 'Hufflepuff',
    house_ghost: 'Fat Friar',
    house_founder: 'Helga Hufflepuff',
    house_color: 'Yellow',
    house_mascot: 'Badger',
  })
}

export { createHouses }
