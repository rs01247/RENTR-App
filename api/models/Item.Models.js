module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define("Item", {
        location: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validation: {
                len: [5]
            }
        },
        itemName: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: Date.now,
            allowNull: false 
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });


    /**JOINS TO USER TABLE */
    Item.associate = (models) => {

//NOT SURE WHY THIS DOESN'T WORK

        // ITEM-USER ASSOCIATION
        Item.belongsTo(models.User, {
            foriegnKey: {
                allowNull: false
            }
        });

         
        // ITEM BELONGS TO MANY USER THROUGH REQUEST
        Item.hasMany(models.Request, {
            foriegnKey: {
                allowNull: true
            }
        });
        
        // ITEM BELONGS TO MANY USER THROUGH TRANSACTION
        Item.hasMany(models.Transaction, {
            foriegnKey: {
                allowNull: true
            }
        });
        
        // ITEM BELONGS TO MANY USER THROUGH ITEM-REVIEW
        Item.belongsTo(models.ItemReview, {
            foriegnKey: {
                allowNull: true
            }
        });
    };



    return Item;
};