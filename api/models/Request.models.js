module.exports = (sequelize, DataTypes) => {
    const Request = sequelize.define("Request", {

    });
    /**JOINS TO USER AND ITEM TABLE */

    Request.associate = (models) => {

        //REQUEST BELONGS TO MANY USERS 
        Request.belongsTo(models.User, {
            as: "Owner",
            foriegnKey: {
                allowNull: true
            }
        });
        Request.belongsTo(models.User, {
            as: "Requestor",
            foriegnKey: {
                allowNull: true
            }
        });

        //REQUEST BELONGS TO MANY ITEMS 
        Request.belongsTo(models.Item, {
            foriegnKey: {
                allowNull: true
            }
        });
    };

    return Request;
}