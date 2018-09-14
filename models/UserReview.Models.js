module.exports = (sequelize, DataTypes) => {
    const UserReview = sequelize.define("UserReview", {
        userName: {
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

    return UserReview;
};