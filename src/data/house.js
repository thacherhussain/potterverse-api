const house = (sequelize, DataTypes) => {
  const House = sequelize.define('house', {
    house_name: {
      type: DataTypes.STRING,
    },
    house_ghost: {
      type: DataTypes.STRING,
    },
    house_founder: {
      type: DataTypes.STRING,
    },
    house_color: {
      type: DataTypes.STRING,
    },
    house_mascot: {
      type: DataTypes.STRING,
    },
  })

  return House
}

export default house
