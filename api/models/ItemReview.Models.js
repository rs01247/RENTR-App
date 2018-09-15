module.exports = (sequelize, DataTypes) => {
    const ItemReview = sequelize.define("ItemReview", {
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reviewRange: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                len: [1, 5]
            }
        }
    });

    return ItemReview;
};