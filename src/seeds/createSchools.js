import data from '../data'

const createSchools = async () => {
  await data.School.create({
    school_name: 'Hogwarts',
    full_school_name: 'Hogwarts School for Witchcraft and Wizardry',
    location: 'Scotland, Great Britain',
    school_head: 'Albus Dumbledore',
  })
  await data.School.create({
    school_name: 'Beauxbatons',
    full_school_name: 'Beauxbatons Academy of Magic',
    location: 'Pyrenees, France',
    school_head: 'Olympe Maxime',
  })
  await data.School.create({
    school_name: 'Durmstrang',
    full_school_name: 'Durmstrang Institute',
    location: 'Northernmost Scandinavia',
    school_head: 'Igor Karkaroff',
  })
  await data.School.create({
    school_name: 'Castelobruxo',
    full_school_name: 'Castelobruxo',
    location: 'Amazon Rainforest, Brazil',
    school_head: 'Benedita Dourado',
  })
  await data.School.create({
    school_name: 'Ilvermorny',
    full_school_name: 'Ilvermorny School of Witchcraft and Wizardry',
    location: 'Massachusetts, United States of America',
    school_head: 'Agilbert Fontaine',
  })
  await data.School.create({
    school_name: 'Koldovstoretz',
    full_school_name: 'Koldovstoretz',
    location: 'Russia',
    school_head: null,
  })
  await data.School.create({
    school_name: 'Mahoutokoro',
    full_school_name: 'Mahoutokoro School of Magic',
    location: 'Minami Iwo Jima, Japan',
    school_head: null,
  })
  await data.School.create({
    school_name: 'Uagadou',
    full_school_name: 'Uagadou School of Magic',
    location: 'Mountains of the Moon, Uganda',
    school_head: null,
  })
  await data.School.create({
    school_name: 'W.A.D.A.',
    full_school_name: 'Wizarding Academy of Dramatic Arts',
    location: 'England',
    school_head: null,
  })
}

export { createSchools }
