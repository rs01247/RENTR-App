module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                isEmail: true
            }
        },
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                len: [5]
            }
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            default: Date.now,
            allowNull: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: true
        }
    });
    return Item;
};