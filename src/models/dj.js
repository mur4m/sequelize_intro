const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Dj.belongsTo(models.Club, {
        foreignKey: {
          allowNull: false,
          name: "club_id",
        },
      });
    }
  }
  Dj.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          notNull: true,
          isUUID: 4,
        },
      },
      url_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [3, 50],
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,

        validate: {
          notNull: true,
          len: [3, 50],
        },
      },
      biography: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          len: [500, 2000],
        },
      },
      soundcloud: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100],
        },
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100],
        },
      },
      instagram: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100],
        },
      },
      spotify: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100],
        },
      },
      beatport: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100],
        },
      },
      mixcloud: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100],
        },
      },
      youtube: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [10, 100],
        },
      },
      club_id: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "Dj",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Dj;
};
