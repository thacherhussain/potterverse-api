const character = (sequelize, DataTypes) => {
  const Character = sequelize.define('character', {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    full_name: {
      type: DataTypes.STRING,
    },
    born: {
      type: DataTypes.DATEONLY,
    },
    died: {
      type: DataTypes.DATEONLY,
    },
    role: {
      type: DataTypes.STRING,
    },
    school_position: {
      type: DataTypes.STRING,
    },
    house_position: {
      type: DataTypes.STRING,
    },
    school: {
      type: DataTypes.STRING,
    },
    house: {
      type: DataTypes.STRING,
    },
    patronous: {
      type: DataTypes.STRING,
    },
  })

  return Character
}

export default character
