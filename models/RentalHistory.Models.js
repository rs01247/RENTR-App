module.exports = (sequelize, DataTypes) => {
    const RentalHistory = sequelize.define("RentalHistory", {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        DateHistory: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    return RentalHistory;
};