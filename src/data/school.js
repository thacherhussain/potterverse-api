const school = (sequelize, DataTypes) => {
  const School = sequelize.define('school', {
    school_name: {
      type: DataTypes.STRING,
    },
    full_school_name: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    school_head: {
      type: DataTypes.STRING,
    },
  })

  return School
}

export default school
