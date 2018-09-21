module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define("Transaction", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        itemName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    // **JOINS TO USER AND ITEM TABLE */
    Transaction.associate = (models) => {

        //TRANSACTION BELONGS TO MANY USERS
    Transaction.belongsTo(models.User, {
        foriegnKey: {
            allowNull: true
        }
    });

    //TRANSACTION BELONGS TO MANY ITEMS
    Transaction.belongsTo(models.Item, {
        foriegnKey: {
            allowNull: true
        }
    });
};

    return Transaction;
};